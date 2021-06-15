#!/usr/bin/env node
'use strict';

import * as fs from 'fs';
import * as path from 'path';

import {filter} from 'lodash';

export type WorkerType = {
	init: () => void;
	work: () => void;
};

const initiateWorkers = (folder: string): void => {
	const fileNames = fs.readdirSync(folder);
	const files = filter(fileNames, (name) => !fs.lstatSync(path.join(folder, name)).isDirectory());
	files.forEach((file: string) => {
		const absoluteFilePath = path.join(folder, file);
		const worker: WorkerType = require(absoluteFilePath).default;
		const {init, work} = worker;
		work?.(); // <- if (work) work();
		init?.(); // <- if (init) init();
	});

	const folders = filter(fileNames, (name: string) => fs.lstatSync(path.join(folder, name)).isDirectory());
	folders.forEach((sub: string) => initiateWorkers(path.join(folder, sub)));
};
export default initiateWorkers;

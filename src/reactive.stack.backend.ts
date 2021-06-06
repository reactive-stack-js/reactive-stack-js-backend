#!/usr/bin/env node
'use strict';

import ReactiveStackClient from "./reactive.stack.client";

import IUserManager, {UserManagerRefreshType} from "./auth/i.user.manager";

import initiateCronjobs from "./functions/initiate.cronjobs";
import initiateWorkers from "./functions/initiate.workers";

import DataMiddlewareMap from "./middleware/data.middleware.map";

import processModels from "./mongodb/functions/process.models";
import observableDatabase from "./mongodb/functions/observable.database";
import observableModel from "./mongodb/functions/observable.model";
import MongoDBConnector from "./mongodb/mongodb.connector";
import CollectionsModelsMap from "./mongodb/collections.models.map";
import addFastifyRoutes from "./routing/functions/add.fastify.routes";

import AStore, {EStoreType} from "./store/a.store";
import {StoreScopeType, StoreSubscriptionConfigType, StoreSubscriptionUpdateType} from "./store/t.store";
import storeFactory from "./store/factories/store.factory";
import CountStore from "./store/count.store";
import DocumentStore from "./store/document.store";
import CollectionStore from "./store/collection.store";

export {
	ReactiveStackClient,
	initiateCronjobs, initiateWorkers, addFastifyRoutes,

	DataMiddlewareMap,

	processModels, observableDatabase, observableModel,
	MongoDBConnector, CollectionsModelsMap,

	storeFactory,
	EStoreType, AStore, CountStore, DocumentStore, CollectionStore,
	StoreScopeType, StoreSubscriptionUpdateType, StoreSubscriptionConfigType,

	IUserManager, UserManagerRefreshType,
}

const ReactiveStackBackend = {};
export default ReactiveStackBackend;

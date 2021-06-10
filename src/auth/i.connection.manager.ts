#!/usr/bin/env node
'use strict';

export type ConnectionManagerRefreshType = {
	type: 'refresh';
	payload: { jwt: string; user: any };
	refresh_in: number;
};

export default interface IConnectionManager {
	user(): any;

	connected(jwt: any): void;

	ping(ping: number): void;

	location(location: string): void;

	disconnected(): void;

	checkSession(): ConnectionManagerRefreshType;
}
![reactive-stack-js](https://avatars0.githubusercontent.com/u/72337471?s=75)

## ReactiveStack backend
See [reactive-stack-js](https://github.com/reactive-stack-js) for more info.

## TypeDoc Documentation
See the [TypeDoc documentation](https://reactive-stack-js.github.io/reactive-stack-js-backend/docs/).

# Documentation

### ReactiveStackClient
This is the main class.

It processes client subscription requests, creates appropriate stores and subscribes to them to observe changes.

It extends RxJS:Subject, so that any websocket instance can subscribe to it, in order to forward updates back to the client.

### IConnectionManager
Defines a ConnectionManager interface to be implemented by the application using this library.

This implementation is required for the above ReactiveStackClient. An instance of ReactiveStackClient is calling IConnectionManager methods accordingly.

### DataMiddlewareMap
This is a map of all defined Data Middleware methods.

A Data Middleware is tied to a store scope ```'count' | 'one' | 'many'``` and collection name and is used to modify an observed payload if necessary.
For example, if based on users access permissions a portion of the payload needs to be removed or replaced, etc.

### initiateWorkers
Method that initiates all workers. Takes folder path as attribute.

### initiateCronjobs
Method that initiates all cronjobs. Takes folder path as attribute.

## Types
### ConnectionManagerRefreshType
### CronJobType
### StoreScopeType
### StoreSubscriptionConfigType
### StoreSubscriptionUpdateType
### WorkerType

## MongoDB
### MongoDBConnector
### CollectionsModelsMap
### processModels
### observableModel
### observableDatabase

## Routes
### RoutesMap
### addFastifyRoutes
### cleanRelativePath
### processFastifyBlipp

## Store
### AStore
### EStoreType
### CountStore
### DocumentStore
### CollectionStore
### storeFactory
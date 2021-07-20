![reactive-stack-js](https://avatars0.githubusercontent.com/u/72337471?s=75)

## ReactiveStack backend
See [reactive-stack-js](https://github.com/reactive-stack-js) for more info.

## TypeDoc Documentation
See the [TypeDoc documentation](https://reactive-stack-js.github.io/reactive-stack-js-backend/docs/).

# Documentation

### ReactiveStackClient
This is the main class in this library.
- It processes client subscription requests, creates appropriate stores and subscribes to them to observe changes.
- It extends RxJS:Subject, so that any websocket instance can subscribe to it, in order to forward updates back to the client.

### DataMiddlewareMap

### IConnectionManager
### initiateWorkers
### initiateCronjobs

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
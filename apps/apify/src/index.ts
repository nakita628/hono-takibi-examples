import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actorBuildsHandler,
  actorRunsHandler,
  actorsActorBuildsHandler,
  actorsActorRunsHandler,
  actorsActorVersionsHandler,
  actorsHandler,
  actorsWebhookCollectionHandler,
  actorTasksHandler,
  schedulesHandler,
  storageDatasetsHandler,
  storageKeyValueStoresHandler,
  storageRequestQueuesHandler,
  storeHandler,
  toolsEncodingHandler,
  usersHandler,
  usersUsageHandler,
  v2Handler,
  webhooksWebhookDispatchesHandler,
  webhooksWebhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actorsHandler)
  .route('/', actorsActorVersionsHandler)
  .route('/', actorsWebhookCollectionHandler)
  .route('/', actorsActorBuildsHandler)
  .route('/', actorsActorRunsHandler)
  .route('/', actorTasksHandler)
  .route('/', actorRunsHandler)
  .route('/', actorBuildsHandler)
  .route('/', storageKeyValueStoresHandler)
  .route('/', v2Handler)
  .route('/', storageDatasetsHandler)
  .route('/', storageRequestQueuesHandler)
  .route('/', webhooksWebhooksHandler)
  .route('/', webhooksWebhookDispatchesHandler)
  .route('/', schedulesHandler)
  .route('/', storeHandler)
  .route('/', usersHandler)
  .route('/', usersUsageHandler)
  .route('/', toolsEncodingHandler)

export default app

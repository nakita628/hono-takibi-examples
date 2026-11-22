import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  aliasHandler,
  apiKeysHandler,
  auditingHandler,
  billingHandler,
  collectionsHandler,
  guidsHandler,
  historyHandler,
  imagesHandler,
  messagingHandler,
  metaInformationHandler,
  organizationsHandler,
  publicServicesHandler,
  routingHandler,
  storageHandler,
  transferHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', apiKeysHandler)
  .route('/', billingHandler)
  .route('/', auditingHandler)
  .route('/', collectionsHandler)
  .route('/', organizationsHandler)
  .route('/', storageHandler)
  .route('/', guidsHandler)
  .route('/', historyHandler)
  .route('/', aliasHandler)
  .route('/', metaInformationHandler)
  .route('/', messagingHandler)
  .route('/', publicServicesHandler)
  .route('/', imagesHandler)
  .route('/', routingHandler)
  .route('/', transferHandler)

export default app

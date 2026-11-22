import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  collectionsHandler,
  conversationsHandler,
  curationSetsHandler,
  debugHandler,
  documentsHandler,
  healthHandler,
  keysHandler,
  nlSearchModelsHandler,
  operationsHandler,
  presetsHandler,
  stemmingHandler,
  stopwordsHandler,
  synonymsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', documentsHandler)
  .route('/', synonymsHandler)
  .route('/', curationSetsHandler)
  .route('/', conversationsHandler)
  .route('/', keysHandler)
  .route('/', debugHandler)
  .route('/', healthHandler)
  .route('/', operationsHandler)
  .route('/', analyticsHandler)
  .route('/', stopwordsHandler)
  .route('/', presetsHandler)
  .route('/', stemmingHandler)
  .route('/', nlSearchModelsHandler)

export default app

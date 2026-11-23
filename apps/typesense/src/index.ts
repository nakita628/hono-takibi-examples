import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aliasesHandler,
  analyticsHandler,
  collectionsHandler,
  configHandler,
  conversationsHandler,
  curationSetsHandler,
  debugHandler,
  healthHandler,
  keysHandler,
  metricsJsonHandler,
  multiSearchHandler,
  nlSearchModelsHandler,
  operationsHandler,
  presetsHandler,
  statsJsonHandler,
  stemmingHandler,
  stopwordsHandler,
  synonymSetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', synonymSetsHandler)
  .route('/', curationSetsHandler)
  .route('/', conversationsHandler)
  .route('/', keysHandler)
  .route('/', aliasesHandler)
  .route('/', debugHandler)
  .route('/', healthHandler)
  .route('/', operationsHandler)
  .route('/', configHandler)
  .route('/', multiSearchHandler)
  .route('/', analyticsHandler)
  .route('/', metricsJsonHandler)
  .route('/', statsJsonHandler)
  .route('/', stopwordsHandler)
  .route('/', presetsHandler)
  .route('/', stemmingHandler)
  .route('/', nlSearchModelsHandler)

export default app

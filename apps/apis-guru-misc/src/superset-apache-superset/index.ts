import { OpenAPIHono } from '@hono/zod-openapi'
import {
  annotationLayersHandler,
  asyncEventsRestApiHandler,
  cacheRestApiHandler,
  chartsHandler,
  cssTemplatesHandler,
  dashboardsHandler,
  databaseHandler,
  datasetsHandler,
  logRestApiHandler,
  menuHandler,
  openApiHandler,
  queriesHandler,
  reportSchedulesHandler,
  securityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', annotationLayersHandler)
  .route('/', asyncEventsRestApiHandler)
  .route('/', cacheRestApiHandler)
  .route('/', chartsHandler)
  .route('/', cssTemplatesHandler)
  .route('/', dashboardsHandler)
  .route('/', databaseHandler)
  .route('/', datasetsHandler)
  .route('/', logRestApiHandler)
  .route('/', menuHandler)
  .route('/', openApiHandler)
  .route('/', queriesHandler)
  .route('/', reportSchedulesHandler)
  .route('/', securityHandler)

export default app

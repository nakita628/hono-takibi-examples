import { OpenAPIHono } from '@hono/zod-openapi'
import {
  annotationLayerHandler,
  asyncEventHandler,
  cachekeyHandler,
  chartHandler,
  cssTemplateHandler,
  dashboardHandler,
  databaseHandler,
  datasetHandler,
  logHandler,
  menuHandler,
  openapiHandler,
  queryHandler,
  reportHandler,
  savedQueryHandler,
  securityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', annotationLayerHandler)
  .route('/', asyncEventHandler)
  .route('/', cachekeyHandler)
  .route('/', chartHandler)
  .route('/', cssTemplateHandler)
  .route('/', dashboardHandler)
  .route('/', databaseHandler)
  .route('/', datasetHandler)
  .route('/', logHandler)
  .route('/', menuHandler)
  .route('/', openapiHandler)
  .route('/', queryHandler)
  .route('/', reportHandler)
  .route('/', savedQueryHandler)
  .route('/', securityHandler)

export default app

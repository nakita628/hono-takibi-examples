import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  authenticationHandler,
  dataSourcesHandler,
  entitiesHandler,
  infoHandler,
  infrastructureHandler,
  microsegmentationHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', dataSourcesHandler)
  .route('/', entitiesHandler)
  .route('/', applicationsHandler)
  .route('/', infoHandler)
  .route('/', infrastructureHandler)
  .route('/', microsegmentationHandler)
  .route('/', searchHandler)

export default app

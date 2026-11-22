import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  alertsHandler,
  featuresHandler,
  labelsHandler,
  metadataHandler,
  notificationsHandler,
  otlpHandler,
  queryHandler,
  remoteHandler,
  rulesHandler,
  seriesHandler,
  statusHandler,
  targetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', queryHandler)
  .route('/', labelsHandler)
  .route('/', metadataHandler)
  .route('/', seriesHandler)
  .route('/', targetsHandler)
  .route('/', rulesHandler)
  .route('/', alertsHandler)
  .route('/', statusHandler)
  .route('/', adminHandler)
  .route('/', remoteHandler)
  .route('/', otlpHandler)
  .route('/', notificationsHandler)
  .route('/', featuresHandler)

export default app

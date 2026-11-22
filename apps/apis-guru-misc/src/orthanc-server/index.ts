import { OpenAPIHono } from '@hono/zod-openapi'
import {
  instancesHandler,
  jobsHandler,
  logsHandler,
  networkingHandler,
  otherHandler,
  patientsHandler,
  seriesHandler,
  studiesHandler,
  systemHandler,
  trackingChangesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', trackingChangesHandler)
  .route('/', instancesHandler)
  .route('/', otherHandler)
  .route('/', jobsHandler)
  .route('/', networkingHandler)
  .route('/', patientsHandler)
  .route('/', systemHandler)
  .route('/', seriesHandler)
  .route('/', studiesHandler)
  .route('/', logsHandler)

export default app

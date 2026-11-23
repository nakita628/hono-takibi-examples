import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chargeMetricsHandler,
  eventsHandler,
  notificationsHandler,
  oauthHandler,
  objectsHandler,
  queryHandler,
  settingsHandler,
  v1Handler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chargeMetricsHandler)
  .route('/', eventsHandler)
  .route('/', notificationsHandler)
  .route('/', oauthHandler)
  .route('/', objectsHandler)
  .route('/', queryHandler)
  .route('/', settingsHandler)
  .route('/', v1Handler)
  .route('/', workflowsHandler)

export default app

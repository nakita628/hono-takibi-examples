import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertsHandler,
  catalogsHandler,
  eventsHandler,
  forwardersHandler,
  metricsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alertsHandler)
  .route('/', catalogsHandler)
  .route('/', eventsHandler)
  .route('/', forwardersHandler)
  .route('/', metricsHandler)

export default app

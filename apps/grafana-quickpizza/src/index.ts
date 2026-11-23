import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, healthzHandler, metricsHandler, readyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', readyHandler)
  .route('/', healthzHandler)
  .route('/', metricsHandler)

export default app

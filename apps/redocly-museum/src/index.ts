import { OpenAPIHono } from '@hono/zod-openapi'
import { eventsHandler, operationsHandler, ticketsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', operationsHandler)
  .route('/', eventsHandler)
  .route('/', ticketsHandler)

export default app

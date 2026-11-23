import { OpenAPIHono } from '@hono/zod-openapi'
import { museumHoursHandler, specialEventsHandler, ticketsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', museumHoursHandler)
  .route('/', specialEventsHandler)
  .route('/', ticketsHandler)

export default app

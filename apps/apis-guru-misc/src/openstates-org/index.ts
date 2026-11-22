import { OpenAPIHono } from '@hono/zod-openapi'
import {
  billsHandler,
  committeesHandler,
  eventsHandler,
  jurisdictionsHandler,
  metricsHandler,
  peopleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', billsHandler)
  .route('/', committeesHandler)
  .route('/', eventsHandler)
  .route('/', jurisdictionsHandler)
  .route('/', metricsHandler)
  .route('/', peopleHandler)

export default app

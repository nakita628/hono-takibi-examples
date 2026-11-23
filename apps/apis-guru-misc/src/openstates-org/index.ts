import { OpenAPIHono } from '@hono/zod-openapi'
import {
  billsHandler,
  committeesHandler,
  eventsHandler,
  jurisdictionsHandler,
  metricsHandler,
  peopleGeoHandler,
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
  .route('/', peopleGeoHandler)

export default app

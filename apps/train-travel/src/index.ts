import { OpenAPIHono } from '@hono/zod-openapi'
import { bookingsHandler, paymentsHandler, stationsHandler, tripsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', stationsHandler)
  .route('/', tripsHandler)
  .route('/', bookingsHandler)
  .route('/', paymentsHandler)

export default app

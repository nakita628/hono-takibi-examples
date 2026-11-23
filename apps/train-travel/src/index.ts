import { OpenAPIHono } from '@hono/zod-openapi'
import { bookingsHandler, stationsHandler, tripsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', stationsHandler)
  .route('/', tripsHandler)
  .route('/', bookingsHandler)

export default app

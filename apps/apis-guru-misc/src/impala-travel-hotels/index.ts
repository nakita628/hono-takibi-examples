import { OpenAPIHono } from '@hono/zod-openapi'
import { bookingsHandler, hotelsHandler, rateCalendarHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bookingsHandler)
  .route('/', hotelsHandler)
  .route('/', rateCalendarHandler)

export default app

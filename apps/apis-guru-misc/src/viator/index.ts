import { OpenAPIHono } from '@hono/zod-openapi'
import {
  availableHandler,
  bookingHandler,
  bookingsHandler,
  healthHandler,
  merchantHandler,
  productHandler,
  searchHandler,
  taxonomyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', availableHandler)
  .route('/', bookingHandler)
  .route('/', bookingsHandler)
  .route('/', healthHandler)
  .route('/', merchantHandler)
  .route('/', productHandler)
  .route('/', searchHandler)
  .route('/', taxonomyHandler)

export default app

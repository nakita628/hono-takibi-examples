import { OpenAPIHono } from '@hono/zod-openapi'
import { invoiceHandler, ordersHandler, paymentHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ordersHandler)
  .route('/', invoiceHandler)
  .route('/', paymentHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { orderHandler, paymentDisputeHandler, shippingFulfillmentHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', orderHandler)
  .route('/', shippingFulfillmentHandler)
  .route('/', paymentDisputeHandler)

export default app

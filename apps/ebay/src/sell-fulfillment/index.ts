import { OpenAPIHono } from '@hono/zod-openapi'
import { orderHandler, paymentDisputeHandler, paymentDisputeSummaryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', orderHandler)
  .route('/', paymentDisputeHandler)
  .route('/', paymentDisputeSummaryHandler)

export default app

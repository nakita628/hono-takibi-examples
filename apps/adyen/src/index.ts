import { OpenAPIHono } from '@hono/zod-openapi'
import {
  donationsHandler,
  modificationsHandler,
  ordersHandler,
  paymentLinksHandler,
  paymentsHandler,
  recurringHandler,
  utilityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', utilityHandler)
  .route('/', modificationsHandler)
  .route('/', paymentsHandler)
  .route('/', donationsHandler)
  .route('/', recurringHandler)
  .route('/', ordersHandler)
  .route('/', paymentLinksHandler)

export default app

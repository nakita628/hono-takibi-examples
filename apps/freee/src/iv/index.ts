import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deliverySlipsHandler,
  invoicesHandler,
  paymentNoticesHandler,
  purchaseOrdersHandler,
  quotationsHandler,
  receiptsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', deliverySlipsHandler)
  .route('/', invoicesHandler)
  .route('/', paymentNoticesHandler)
  .route('/', purchaseOrdersHandler)
  .route('/', quotationsHandler)
  .route('/', receiptsHandler)

export default app

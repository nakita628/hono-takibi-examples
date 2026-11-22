import { OpenAPIHono } from '@hono/zod-openapi'
import {
  domesticPaymentsHandler,
  domesticScheduledPaymentsHandler,
  domesticStandingOrdersHandler,
  filePaymentsHandler,
  internationalPaymentsHandler,
  internationalScheduledPaymentsHandler,
  internationalStandingOrdersHandler,
  paymentDetailsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', domesticPaymentsHandler)
  .route('/', paymentDetailsHandler)
  .route('/', domesticScheduledPaymentsHandler)
  .route('/', domesticStandingOrdersHandler)
  .route('/', filePaymentsHandler)
  .route('/', internationalPaymentsHandler)
  .route('/', internationalScheduledPaymentsHandler)
  .route('/', internationalStandingOrdersHandler)

export default app

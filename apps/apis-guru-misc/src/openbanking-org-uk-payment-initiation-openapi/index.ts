import { OpenAPIHono } from '@hono/zod-openapi'
import {
  domesticPaymentConsentsHandler,
  domesticPaymentsHandler,
  domesticScheduledPaymentConsentsHandler,
  domesticScheduledPaymentsHandler,
  domesticStandingOrderConsentsHandler,
  domesticStandingOrdersHandler,
  filePaymentConsentsHandler,
  filePaymentsHandler,
  internationalPaymentConsentsHandler,
  internationalPaymentsHandler,
  internationalScheduledPaymentConsentsHandler,
  internationalScheduledPaymentsHandler,
  internationalStandingOrderConsentsHandler,
  internationalStandingOrdersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', domesticPaymentConsentsHandler)
  .route('/', domesticPaymentsHandler)
  .route('/', domesticScheduledPaymentConsentsHandler)
  .route('/', domesticScheduledPaymentsHandler)
  .route('/', domesticStandingOrderConsentsHandler)
  .route('/', domesticStandingOrdersHandler)
  .route('/', filePaymentConsentsHandler)
  .route('/', filePaymentsHandler)
  .route('/', internationalPaymentConsentsHandler)
  .route('/', internationalPaymentsHandler)
  .route('/', internationalScheduledPaymentConsentsHandler)
  .route('/', internationalScheduledPaymentsHandler)
  .route('/', internationalStandingOrderConsentsHandler)
  .route('/', internationalStandingOrdersHandler)

export default app

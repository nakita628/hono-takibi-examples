import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applePayMerchantRegistrationHandler,
  customersHandler,
  disputesHandler,
  locationsHandler,
  ordersHandler,
  otherHandler,
  paymentIntentsHandler,
  paymentsHandler,
  payoutsHandler,
  reportRunsHandler,
  subscriptionsHandler,
  terminalsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ordersHandler)
  .route('/', customersHandler)
  .route('/', disputesHandler)
  .route('/', paymentsHandler)
  .route('/', subscriptionsHandler)
  .route('/', payoutsHandler)
  .route('/', reportRunsHandler)
  .route('/', webhooksHandler)
  .route('/', applePayMerchantRegistrationHandler)
  .route('/', otherHandler)
  .route('/', locationsHandler)
  .route('/', terminalsHandler)
  .route('/', paymentIntentsHandler)

export default app

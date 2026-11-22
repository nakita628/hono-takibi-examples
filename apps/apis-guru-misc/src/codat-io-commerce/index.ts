import { OpenAPIHono } from '@hono/zod-openapi'
import {
  companyInfoHandler,
  customersHandler,
  disputesHandler,
  locationsHandler,
  ordersHandler,
  paymentsHandler,
  productsHandler,
  taxComponentsHandler,
  transactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customersHandler)
  .route('/', disputesHandler)
  .route('/', companyInfoHandler)
  .route('/', locationsHandler)
  .route('/', ordersHandler)
  .route('/', paymentsHandler)
  .route('/', productsHandler)
  .route('/', taxComponentsHandler)
  .route('/', transactionsHandler)

export default app

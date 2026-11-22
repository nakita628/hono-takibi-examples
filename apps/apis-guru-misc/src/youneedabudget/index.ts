import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  budgetsHandler,
  categoriesHandler,
  deprecatedHandler,
  monthsHandler,
  payeeLocationsHandler,
  payeesHandler,
  scheduledTransactionsHandler,
  transactionsHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', budgetsHandler)
  .route('/', accountsHandler)
  .route('/', transactionsHandler)
  .route('/', categoriesHandler)
  .route('/', monthsHandler)
  .route('/', payeeLocationsHandler)
  .route('/', payeesHandler)
  .route('/', scheduledTransactionsHandler)
  .route('/', deprecatedHandler)
  .route('/', userHandler)

export default app

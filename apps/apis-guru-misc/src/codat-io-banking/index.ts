import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountBalancesHandler,
  accountsHandler,
  transactionCategoriesHandler,
  transactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountBalancesHandler)
  .route('/', accountsHandler)
  .route('/', transactionCategoriesHandler)
  .route('/', transactionsHandler)

export default app

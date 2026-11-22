import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configurationHandler,
  connectionsHandler,
  expensesHandler,
  mappingOptionsHandler,
  syncHandler,
  syncStatusHandler,
  transactionStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configurationHandler)
  .route('/', connectionsHandler)
  .route('/', expensesHandler)
  .route('/', mappingOptionsHandler)
  .route('/', syncHandler)
  .route('/', syncStatusHandler)
  .route('/', transactionStatusHandler)

export default app

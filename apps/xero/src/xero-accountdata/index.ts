import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountBalancesHandler,
  accountMovementsHandler,
  accountTransactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountBalancesHandler)
  .route('/', accountMovementsHandler)
  .route('/', accountTransactionsHandler)

export default app

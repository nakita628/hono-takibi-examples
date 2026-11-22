import { OpenAPIHono } from '@hono/zod-openapi'
import { bankAccountTransactionsHandler, bankFeedAccountsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bankFeedAccountsHandler)
  .route('/', bankAccountTransactionsHandler)

export default app

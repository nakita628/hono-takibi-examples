import { OpenAPIHono } from '@hono/zod-openapi'
import { cashoutsHandler, grantsHandler, transactionsHandler, transfersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', grantsHandler)
  .route('/', transactionsHandler)
  .route('/', transfersHandler)
  .route('/', cashoutsHandler)

export default app

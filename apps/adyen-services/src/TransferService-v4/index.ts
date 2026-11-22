import { OpenAPIHono } from '@hono/zod-openapi'
import { capitalHandler, cashOutHandler, transactionsHandler, transfersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', capitalHandler)
  .route('/', transactionsHandler)
  .route('/', transfersHandler)
  .route('/', cashOutHandler)

export default app

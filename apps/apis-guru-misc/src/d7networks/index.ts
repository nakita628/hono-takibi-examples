import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceHandler, sendbatchHandler, sendHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', balanceHandler)
  .route('/', sendHandler)
  .route('/', sendbatchHandler)

export default app

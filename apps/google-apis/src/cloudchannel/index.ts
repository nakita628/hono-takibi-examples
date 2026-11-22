import { OpenAPIHono } from '@hono/zod-openapi'
import { accountsHandler, operationsHandler, productsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productsHandler)
  .route('/', accountsHandler)
  .route('/', operationsHandler)

export default app

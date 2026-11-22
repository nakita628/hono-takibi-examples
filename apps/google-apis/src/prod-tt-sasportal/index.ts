import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, installerHandler, nodesHandler, policiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customersHandler)
  .route('/', installerHandler)
  .route('/', policiesHandler)
  .route('/', nodesHandler)

export default app

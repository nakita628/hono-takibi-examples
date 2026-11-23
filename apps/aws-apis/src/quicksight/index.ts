import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, accountsHandler, resourcesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', accountHandler)
  .route('/', resourcesHandler)

export default app

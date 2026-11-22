import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHoldersHandler, accountsHandler, verificationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', verificationHandler)
  .route('/', accountsHandler)
  .route('/', accountHoldersHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler, standardHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', advancedHandler)
  .route('/', basicHandler)
  .route('/', standardHandler)

export default app

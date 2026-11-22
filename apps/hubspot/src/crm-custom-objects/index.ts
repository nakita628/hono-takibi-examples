import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler, batchHandler, searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', batchHandler)
  .route('/', basicHandler)
  .route('/', advancedHandler)
  .route('/', searchHandler)

export default app

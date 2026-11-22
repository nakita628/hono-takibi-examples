import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler, batchHandler, itemsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', advancedHandler)
  .route('/', basicHandler)
  .route('/', itemsHandler)
  .route('/', batchHandler)

export default app

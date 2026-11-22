import { OpenAPIHono } from '@hono/zod-openapi'
import { globalHandler, operationHandler, pathHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', globalHandler)
  .route('/', operationHandler)
  .route('/', pathHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { batchHandler, definitionsHandler, statusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', definitionsHandler)
  .route('/', statusHandler)
  .route('/', batchHandler)

export default app

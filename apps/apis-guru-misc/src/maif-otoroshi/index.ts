import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, healthHandler, linesHandler, newHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', healthHandler)
  .route('/', linesHandler)
  .route('/', newHandler)

export default app

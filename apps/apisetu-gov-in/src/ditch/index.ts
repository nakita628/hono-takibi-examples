import { OpenAPIHono } from '@hono/zod-openapi'
import { incerHandler, rmcerHandler, rscerHandler, sicrdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', incerHandler)
  .route('/', rmcerHandler)
  .route('/', rscerHandler)
  .route('/', sicrdHandler)

export default app

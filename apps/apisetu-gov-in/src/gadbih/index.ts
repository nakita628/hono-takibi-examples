import { OpenAPIHono } from '@hono/zod-openapi'
import { ctcerHandler, ewcerHandler, incerHandler, rscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ctcerHandler)
  .route('/', ewcerHandler)
  .route('/', incerHandler)
  .route('/', rscerHandler)

export default app

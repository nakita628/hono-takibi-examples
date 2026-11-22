import { OpenAPIHono } from '@hono/zod-openapi'
import { copyrightsHandler, rasterHandler, vectorHandler, wmswmtsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', copyrightsHandler)
  .route('/', rasterHandler)
  .route('/', vectorHandler)
  .route('/', wmswmtsHandler)

export default app

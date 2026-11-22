import { OpenAPIHono } from '@hono/zod-openapi'
import { estimatesHandler, productsHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productsHandler)
  .route('/', estimatesHandler)
  .route('/', userHandler)

export default app

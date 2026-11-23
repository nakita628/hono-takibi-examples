import { OpenAPIHono } from '@hono/zod-openapi'
import { estimatesHandler, historyHandler, meHandler, productsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productsHandler)
  .route('/', estimatesHandler)
  .route('/', meHandler)
  .route('/', historyHandler)

export default app

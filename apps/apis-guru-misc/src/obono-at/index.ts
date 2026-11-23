import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, belegeHandler, exportHandler, registrierkassenHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', belegeHandler)
  .route('/', exportHandler)
  .route('/', registrierkassenHandler)

export default app

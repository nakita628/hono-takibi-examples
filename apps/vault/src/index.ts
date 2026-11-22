import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler, identityHandler, secretsHandler, systemHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', secretsHandler)
  .route('/', identityHandler)
  .route('/', systemHandler)

export default app

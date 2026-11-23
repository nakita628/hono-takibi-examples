import { OpenAPIHono } from '@hono/zod-openapi'
import { appkeyHandler, authenticationHandler, authkeyHandler, kkidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appkeyHandler)
  .route('/', authenticationHandler)
  .route('/', authkeyHandler)
  .route('/', kkidHandler)

export default app

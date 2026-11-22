import { OpenAPIHono } from '@hono/zod-openapi'
import { clientHandler, deviceAuthorizationHandler, tokenHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tokenHandler)
  .route('/', clientHandler)
  .route('/', deviceAuthorizationHandler)

export default app

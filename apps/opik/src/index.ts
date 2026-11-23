import { OpenAPIHono } from '@hono/zod-openapi'
import { isAliveHandler, oauthHandler, opikHandler, v1Handler, wellKnownHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', oauthHandler)
  .route('/', wellKnownHandler)
  .route('/', opikHandler)
  .route('/', v1Handler)
  .route('/', isAliveHandler)

export default app

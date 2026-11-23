import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, healthHandler, v0Handler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', healthHandler)
  .route('/', v0Handler)
  .route('/', v1Handler)

export default app

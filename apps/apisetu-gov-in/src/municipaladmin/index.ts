import { OpenAPIHono } from '@hono/zod-openapi'
import { kecerHandler, tapcnHandler, tdlcsHandler, ugdcnHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', kecerHandler)
  .route('/', tapcnHandler)
  .route('/', tdlcsHandler)
  .route('/', ugdcnHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { indexPhpHandler, ocsHandler, statusPhpHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ocsHandler)
  .route('/', indexPhpHandler)
  .route('/', statusPhpHandler)

export default app

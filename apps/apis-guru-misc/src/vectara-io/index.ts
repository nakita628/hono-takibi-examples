import { OpenAPIHono } from '@hono/zod-openapi'
import { adminServiceHandler, indexServiceHandler, queryServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminServiceHandler)
  .route('/', indexServiceHandler)
  .route('/', queryServiceHandler)

export default app

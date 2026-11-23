import { OpenAPIHono } from '@hono/zod-openapi'
import { convertHandler, fetchHandler, parseHandler, serpHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', convertHandler)
  .route('/', fetchHandler)
  .route('/', parseHandler)
  .route('/', serpHandler)

export default app

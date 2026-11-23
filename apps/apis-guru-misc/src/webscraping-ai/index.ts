import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, htmlHandler, selectedHandler, selectedMultipleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', htmlHandler)
  .route('/', selectedHandler)
  .route('/', selectedMultipleHandler)

export default app

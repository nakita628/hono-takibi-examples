import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, htmlHandler, selectedHTMLHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', htmlHandler)
  .route('/', selectedHTMLHandler)

export default app

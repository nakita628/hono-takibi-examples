import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, improveHandler, removebgHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', improveHandler)
  .route('/', removebgHandler)

export default app

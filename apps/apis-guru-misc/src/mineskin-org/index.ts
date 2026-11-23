import { OpenAPIHono } from '@hono/zod-openapi'
import { generateHandler, getHandler, validateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', generateHandler)
  .route('/', getHandler)
  .route('/', validateHandler)

export default app

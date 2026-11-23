import { OpenAPIHono } from '@hono/zod-openapi'
import { badgeHandler, convertHandler, statusHandler, validateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', badgeHandler)
  .route('/', convertHandler)
  .route('/', statusHandler)
  .route('/', validateHandler)

export default app

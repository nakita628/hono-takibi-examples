import { OpenAPIHono } from '@hono/zod-openapi'
import { conversationsHandler, legsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationsHandler)
  .route('/', legsHandler)
  .route('/', usersHandler)

export default app

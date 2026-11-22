import { OpenAPIHono } from '@hono/zod-openapi'
import { conversationHandler, eventHandler, memberHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationHandler)
  .route('/', eventHandler)
  .route('/', memberHandler)
  .route('/', usersHandler)

export default app

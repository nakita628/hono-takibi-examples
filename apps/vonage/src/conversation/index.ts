import { OpenAPIHono } from '@hono/zod-openapi'
import {
  conversationHandler,
  eventHandler,
  legHandler,
  memberHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationHandler)
  .route('/', eventHandler)
  .route('/', memberHandler)
  .route('/', legHandler)
  .route('/', userHandler)

export default app

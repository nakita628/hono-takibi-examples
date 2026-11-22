import { OpenAPIHono } from '@hono/zod-openapi'
import { autoTranslateHandler, chatHandler, directMessagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chatHandler)
  .route('/', directMessagesHandler)
  .route('/', autoTranslateHandler)

export default app

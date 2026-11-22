import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, channelAccountsHandler, channelsHandler, messagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', channelsHandler)
  .route('/', channelAccountsHandler)
  .route('/', messagesHandler)

export default app

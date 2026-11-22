import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actorsHandler,
  channelAccountsHandler,
  channelsHandler,
  inboxesHandler,
  messagesHandler,
  threadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actorsHandler)
  .route('/', channelAccountsHandler)
  .route('/', channelsHandler)
  .route('/', inboxesHandler)
  .route('/', threadsHandler)
  .route('/', messagesHandler)

export default app

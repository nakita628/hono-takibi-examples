import { OpenAPIHono } from '@hono/zod-openapi'
import {
  channelHandler,
  connHandler,
  connzHandler,
  conversationHandler,
  conversationsHandler,
  docsHandler,
  healthHandler,
  managerHandler,
  messageHandler,
  messagesHandler,
  migrateHandler,
  routeHandler,
  tagHandler,
  tagsHandler,
  tmpchannelHandler,
  userHandler,
  varzHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', migrateHandler)
  .route('/', docsHandler)
  .route('/', routeHandler)
  .route('/', userHandler)
  .route('/', connHandler)
  .route('/', channelHandler)
  .route('/', tmpchannelHandler)
  .route('/', messageHandler)
  .route('/', messagesHandler)
  .route('/', conversationsHandler)
  .route('/', conversationHandler)
  .route('/', connzHandler)
  .route('/', varzHandler)
  .route('/', tagHandler)
  .route('/', tagsHandler)
  .route('/', managerHandler)

export default app

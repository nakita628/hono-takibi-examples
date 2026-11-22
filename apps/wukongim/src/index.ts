import { OpenAPIHono } from '@hono/zod-openapi'
import {
  channelHandler,
  connectionHandler,
  conversationHandler,
  documentationHandler,
  managerHandler,
  messageEventHandler,
  messageHandler,
  monitoringHandler,
  routeHandler,
  systemHandler,
  tagHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', systemHandler)
  .route('/', documentationHandler)
  .route('/', routeHandler)
  .route('/', userHandler)
  .route('/', connectionHandler)
  .route('/', channelHandler)
  .route('/', messageHandler)
  .route('/', messageEventHandler)
  .route('/', conversationHandler)
  .route('/', monitoringHandler)
  .route('/', tagHandler)
  .route('/', managerHandler)

export default app

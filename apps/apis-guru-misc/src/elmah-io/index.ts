import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deploymentsHandler,
  heartbeatsHandler,
  logsHandler,
  messagesHandler,
  sourceMapsHandler,
  uptimeChecksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', deploymentsHandler)
  .route('/', heartbeatsHandler)
  .route('/', logsHandler)
  .route('/', messagesHandler)
  .route('/', sourceMapsHandler)
  .route('/', uptimeChecksHandler)

export default app

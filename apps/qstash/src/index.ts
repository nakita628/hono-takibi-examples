import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bulkActionsHandler,
  dlqHandler,
  flowControlHandler,
  logsHandler,
  messagesHandler,
  queuesHandler,
  schedulesHandler,
  signingKeysHandler,
  urlGroupsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', messagesHandler)
  .route('/', bulkActionsHandler)
  .route('/', queuesHandler)
  .route('/', schedulesHandler)
  .route('/', urlGroupsHandler)
  .route('/', dlqHandler)
  .route('/', flowControlHandler)
  .route('/', signingKeysHandler)
  .route('/', logsHandler)

export default app

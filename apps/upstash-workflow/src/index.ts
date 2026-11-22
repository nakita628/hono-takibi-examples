import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bulkActionsHandler,
  dlqHandler,
  flowControlHandler,
  logsHandler,
  notifyHandler,
  runsHandler,
  signingKeysHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', runsHandler)
  .route('/', bulkActionsHandler)
  .route('/', logsHandler)
  .route('/', dlqHandler)
  .route('/', flowControlHandler)
  .route('/', signingKeysHandler)
  .route('/', notifyHandler)

export default app

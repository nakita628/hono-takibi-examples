import { OpenAPIHono } from '@hono/zod-openapi'
import {
  simulateEventHandler,
  verifyWebhookSignatureHandler,
  webhooksEventsHandler,
  webhooksEventTypesHandler,
  webhooksHandler,
  webhooksLookupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', webhooksHandler)
  .route('/', webhooksLookupHandler)
  .route('/', verifyWebhookSignatureHandler)
  .route('/', webhooksEventTypesHandler)
  .route('/', webhooksEventsHandler)
  .route('/', simulateEventHandler)

export default app

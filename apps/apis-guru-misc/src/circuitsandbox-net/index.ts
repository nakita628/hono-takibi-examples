import { OpenAPIHono } from '@hono/zod-openapi'
import {
  conversationsHandler,
  incomingWebhooksHandler,
  outgoingWebhooksHandler,
  rtcHandler,
  spacesHandler,
  telephonyHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationsHandler)
  .route('/', rtcHandler)
  .route('/', spacesHandler)
  .route('/', telephonyHandler)
  .route('/', usersHandler)
  .route('/', outgoingWebhooksHandler)
  .route('/', incomingWebhooksHandler)

export default app

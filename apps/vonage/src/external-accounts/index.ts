import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  applicationHandler,
  facebookMessengerHandler,
  viberServiceMessageHandler,
  whatsAppHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', facebookMessengerHandler)
  .route('/', viberServiceMessageHandler)
  .route('/', whatsAppHandler)
  .route('/', applicationHandler)

export default app

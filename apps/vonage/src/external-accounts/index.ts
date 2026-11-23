import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  messengerHandler,
  providerHandler,
  viberServiceMsgHandler,
  whatsappHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', messengerHandler)
  .route('/', viberServiceMsgHandler)
  .route('/', whatsappHandler)
  .route('/', providerHandler)

export default app

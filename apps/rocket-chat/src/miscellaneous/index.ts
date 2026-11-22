import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  calendarEventsHandler,
  commandsHandler,
  emailInboxHandler,
  jitsiAppHandler,
  licensesHandler,
  mailerHandler,
  rasaAppHandler,
  whatsAppHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', emailInboxHandler)
  .route('/', apiHandler)
  .route('/', licensesHandler)
  .route('/', commandsHandler)
  .route('/', mailerHandler)
  .route('/', calendarEventsHandler)
  .route('/', rasaAppHandler)
  .route('/', jitsiAppHandler)
  .route('/', whatsAppHandler)

export default app

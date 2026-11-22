import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appConfigHandler,
  notificationsHandler,
  occCommandHandler,
  ocsApiHandler,
  ocsSettingsHandler,
  ocsUiHandler,
  preferencesHandler,
  setupCheckHandler,
  talkBotHandler,
  taskProcessingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ocsApiHandler)
  .route('/', appConfigHandler)
  .route('/', preferencesHandler)
  .route('/', notificationsHandler)
  .route('/', occCommandHandler)
  .route('/', talkBotHandler)
  .route('/', ocsUiHandler)
  .route('/', ocsSettingsHandler)
  .route('/', taskProcessingHandler)
  .route('/', setupCheckHandler)

export default app

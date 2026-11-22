import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  botsHandler,
  channelsHandler,
  draftsHandler,
  invitesHandler,
  messagesHandler,
  mobileHandler,
  navigationViewsHandler,
  realTimeEventsHandler,
  remindersHandler,
  scheduledMessagesHandler,
  serverAndOrganizationsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', realTimeEventsHandler)
  .route('/', channelsHandler)
  .route('/', messagesHandler)
  .route('/', usersHandler)
  .route('/', botsHandler)
  .route('/', draftsHandler)
  .route('/', navigationViewsHandler)
  .route('/', remindersHandler)
  .route('/', scheduledMessagesHandler)
  .route('/', mobileHandler)
  .route('/', serverAndOrganizationsHandler)
  .route('/', invitesHandler)
  .route('/', webhooksHandler)

export default app

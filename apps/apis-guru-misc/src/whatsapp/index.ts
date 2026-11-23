import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  certificatesHandler,
  contactsHandler,
  groupsHandler,
  healthHandler,
  mediaHandler,
  messagesHandler,
  metricsHandler,
  settingsHandler,
  statsHandler,
  supportHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', certificatesHandler)
  .route('/', contactsHandler)
  .route('/', groupsHandler)
  .route('/', healthHandler)
  .route('/', mediaHandler)
  .route('/', messagesHandler)
  .route('/', metricsHandler)
  .route('/', settingsHandler)
  .route('/', statsHandler)
  .route('/', supportHandler)
  .route('/', usersHandler)

export default app

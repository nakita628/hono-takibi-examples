import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  campaignsHandler,
  contactsHandler,
  conversationsHandler,
  messagesHandler,
  templatesHandler,
  toolsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', campaignsHandler)
  .route('/', contactsHandler)
  .route('/', conversationsHandler)
  .route('/', messagesHandler)
  .route('/', templatesHandler)
  .route('/', webhooksHandler)
  .route('/', toolsHandler)

export default app

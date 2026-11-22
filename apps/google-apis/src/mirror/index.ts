import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  contactsHandler,
  locationsHandler,
  settingsHandler,
  subscriptionsHandler,
  timelineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', contactsHandler)
  .route('/', locationsHandler)
  .route('/', settingsHandler)
  .route('/', subscriptionsHandler)
  .route('/', timelineHandler)

export default app

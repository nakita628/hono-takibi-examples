import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  activityHandler,
  emailHandler,
  emailListsHandler,
  formsHandler,
  notificationsHandler,
  recipientsHandler,
  resourcesHandler,
  sharesHandler,
  sshKeysHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', activityHandler)
  .route('/', emailListsHandler)
  .route('/', emailHandler)
  .route('/', formsHandler)
  .route('/', notificationsHandler)
  .route('/', recipientsHandler)
  .route('/', resourcesHandler)
  .route('/', sharesHandler)
  .route('/', sshKeysHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app

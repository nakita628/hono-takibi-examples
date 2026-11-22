import { OpenAPIHono } from '@hono/zod-openapi'
import { notificationsHandler, pinnedSearchesHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', notificationsHandler)
  .route('/', pinnedSearchesHandler)
  .route('/', usersHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  backupsHandler,
  badgesHandler,
  categoriesHandler,
  eventsHandler,
  groupsHandler,
  invitesHandler,
  notificationsHandler,
  postsHandler,
  privateMessagesHandler,
  searchHandler,
  siteHandler,
  tagsHandler,
  topicsHandler,
  uploadsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', eventsHandler)
  .route('/', backupsHandler)
  .route('/', badgesHandler)
  .route('/', categoriesHandler)
  .route('/', groupsHandler)
  .route('/', invitesHandler)
  .route('/', notificationsHandler)
  .route('/', postsHandler)
  .route('/', privateMessagesHandler)
  .route('/', searchHandler)
  .route('/', siteHandler)
  .route('/', tagsHandler)
  .route('/', topicsHandler)
  .route('/', uploadsHandler)
  .route('/', usersHandler)

export default app

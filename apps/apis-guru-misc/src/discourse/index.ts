import { OpenAPIHono } from '@hono/zod-openapi'
import {
  backupsHandler,
  badgesHandler,
  categoriesHandler,
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
  .route('/', backupsHandler)
  .route('/', badgesHandler)
  .route('/', groupsHandler)
  .route('/', usersHandler)
  .route('/', categoriesHandler)
  .route('/', invitesHandler)
  .route('/', topicsHandler)
  .route('/', notificationsHandler)
  .route('/', postsHandler)
  .route('/', searchHandler)
  .route('/', siteHandler)
  .route('/', tagsHandler)
  .route('/', privateMessagesHandler)
  .route('/', uploadsHandler)

export default app

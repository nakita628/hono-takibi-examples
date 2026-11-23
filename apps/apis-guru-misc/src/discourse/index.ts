import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  categoriesHandler,
  categoriesJsonHandler,
  cHandler,
  directoryItemsJsonHandler,
  groupsHandler,
  groupsJsonHandler,
  invitesJsonHandler,
  latestJsonHandler,
  notificationsHandler,
  notificationsJsonHandler,
  postActionsJsonHandler,
  postsHandler,
  postsJsonHandler,
  searchJsonHandler,
  sessionHandler,
  siteJsonHandler,
  tagGroupsHandler,
  tagGroupsJsonHandler,
  tagHandler,
  tagsJsonHandler,
  tHandler,
  topicsHandler,
  topJsonHandler,
  uHandler,
  uploadsHandler,
  uploadsJsonHandler,
  userActionsJsonHandler,
  userAvatarHandler,
  userBadgesHandler,
  usersHandler,
  usersJsonHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', cHandler)
  .route('/', categoriesJsonHandler)
  .route('/', categoriesHandler)
  .route('/', directoryItemsJsonHandler)
  .route('/', groupsJsonHandler)
  .route('/', groupsHandler)
  .route('/', invitesJsonHandler)
  .route('/', latestJsonHandler)
  .route('/', notificationsJsonHandler)
  .route('/', notificationsHandler)
  .route('/', postActionsJsonHandler)
  .route('/', postsJsonHandler)
  .route('/', postsHandler)
  .route('/', searchJsonHandler)
  .route('/', sessionHandler)
  .route('/', siteJsonHandler)
  .route('/', tHandler)
  .route('/', tagHandler)
  .route('/', tagGroupsJsonHandler)
  .route('/', tagGroupsHandler)
  .route('/', tagsJsonHandler)
  .route('/', topJsonHandler)
  .route('/', topicsHandler)
  .route('/', uHandler)
  .route('/', uploadsJsonHandler)
  .route('/', uploadsHandler)
  .route('/', userBadgesHandler)
  .route('/', userActionsJsonHandler)
  .route('/', userAvatarHandler)
  .route('/', usersJsonHandler)
  .route('/', usersHandler)

export default app

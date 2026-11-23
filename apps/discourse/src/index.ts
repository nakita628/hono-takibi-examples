import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  categoriesHandler,
  categoriesJsonHandler,
  cHandler,
  directoryItemsJsonHandler,
  discoursePostEventHandler,
  groupsHandler,
  groupsJsonHandler,
  invitesHandler,
  invitesJsonHandler,
  latestJsonHandler,
  notificationsHandler,
  notificationsJsonHandler,
  postActionsJsonHandler,
  postsHandler,
  postsJsonHandler,
  searchJsonHandler,
  sessionHandler,
  siteHandler,
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
  userBadgesJsonHandler,
  usersHandler,
  usersJsonHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', discoursePostEventHandler)
  .route('/', adminHandler)
  .route('/', categoriesJsonHandler)
  .route('/', categoriesHandler)
  .route('/', cHandler)
  .route('/', groupsHandler)
  .route('/', groupsJsonHandler)
  .route('/', invitesJsonHandler)
  .route('/', invitesHandler)
  .route('/', notificationsJsonHandler)
  .route('/', notificationsHandler)
  .route('/', postsJsonHandler)
  .route('/', postsHandler)
  .route('/', postActionsJsonHandler)
  .route('/', topicsHandler)
  .route('/', searchJsonHandler)
  .route('/', siteJsonHandler)
  .route('/', siteHandler)
  .route('/', tagGroupsJsonHandler)
  .route('/', tagGroupsHandler)
  .route('/', tagsJsonHandler)
  .route('/', tagHandler)
  .route('/', tHandler)
  .route('/', latestJsonHandler)
  .route('/', topJsonHandler)
  .route('/', uploadsJsonHandler)
  .route('/', uploadsHandler)
  .route('/', userBadgesJsonHandler)
  .route('/', userBadgesHandler)
  .route('/', usersJsonHandler)
  .route('/', uHandler)
  .route('/', directoryItemsJsonHandler)
  .route('/', userAvatarHandler)
  .route('/', userActionsJsonHandler)
  .route('/', sessionHandler)
  .route('/', usersHandler)

export default app

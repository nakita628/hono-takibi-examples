import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessRequestsHandler,
  apiKeysHandler,
  attachmentsHandler,
  authHandler,
  collectionsHandler,
  commentsHandler,
  dataAttributesHandler,
  documentsHandler,
  eventsHandler,
  fileOperationsHandler,
  groupMembershipsHandler,
  groupsHandler,
  notificationsHandler,
  oAuthAuthenticationsHandler,
  oAuthClientsHandler,
  pinsHandler,
  reactionsHandler,
  revisionsHandler,
  sharesHandler,
  starsHandler,
  subscriptionsHandler,
  templatesHandler,
  userMembershipsHandler,
  usersHandler,
  viewsHandler,
  webhookSubscriptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessRequestsHandler)
  .route('/', apiKeysHandler)
  .route('/', attachmentsHandler)
  .route('/', authHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', dataAttributesHandler)
  .route('/', documentsHandler)
  .route('/', eventsHandler)
  .route('/', fileOperationsHandler)
  .route('/', groupMembershipsHandler)
  .route('/', groupsHandler)
  .route('/', notificationsHandler)
  .route('/', oAuthAuthenticationsHandler)
  .route('/', oAuthClientsHandler)
  .route('/', pinsHandler)
  .route('/', reactionsHandler)
  .route('/', revisionsHandler)
  .route('/', sharesHandler)
  .route('/', starsHandler)
  .route('/', subscriptionsHandler)
  .route('/', templatesHandler)
  .route('/', userMembershipsHandler)
  .route('/', usersHandler)
  .route('/', viewsHandler)
  .route('/', webhookSubscriptionsHandler)

export default app

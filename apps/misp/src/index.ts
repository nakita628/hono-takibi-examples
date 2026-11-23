import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  analystDataHandler,
  attributesHandler,
  authKeysHandler,
  collectionsHandler,
  eventReportsHandler,
  eventsHandler,
  feedsHandler,
  galaxiesHandler,
  galaxyClustersHandler,
  noticelistsHandler,
  objectsHandler,
  organisationsHandler,
  serversHandler,
  sharingGroupBlueprintsHandler,
  sharingGroupsHandler,
  sightingsHandler,
  tagsHandler,
  taxonomiesHandler,
  userSettingsHandler,
  usersHandler,
  warninglistsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analystDataHandler)
  .route('/', attributesHandler)
  .route('/', collectionsHandler)
  .route('/', eventReportsHandler)
  .route('/', eventsHandler)
  .route('/', galaxiesHandler)
  .route('/', galaxyClustersHandler)
  .route('/', usersHandler)
  .route('/', adminHandler)
  .route('/', organisationsHandler)
  .route('/', serversHandler)
  .route('/', sharingGroupsHandler)
  .route('/', sharingGroupBlueprintsHandler)
  .route('/', feedsHandler)
  .route('/', warninglistsHandler)
  .route('/', noticelistsHandler)
  .route('/', objectsHandler)
  .route('/', sightingsHandler)
  .route('/', tagsHandler)
  .route('/', authKeysHandler)
  .route('/', userSettingsHandler)
  .route('/', taxonomiesHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analystDataHandler,
  attributesHandler,
  authKeysHandler,
  collectionsHandler,
  eventReportHandler,
  eventsHandler,
  feedsHandler,
  galaxiesHandler,
  galaxyClustersHandler,
  logsHandler,
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
  .route('/', eventReportHandler)
  .route('/', eventsHandler)
  .route('/', galaxiesHandler)
  .route('/', galaxyClustersHandler)
  .route('/', usersHandler)
  .route('/', organisationsHandler)
  .route('/', logsHandler)
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

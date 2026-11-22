import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityHandler,
  assetsHandler,
  authenticationHandler,
  collectionsHandler,
  commentsHandler,
  extensionsHandler,
  fieldsHandler,
  filesHandler,
  flowsHandler,
  foldersHandler,
  itemsHandler,
  operationsHandler,
  permissionsHandler,
  presetsHandler,
  relationsHandler,
  revisionsHandler,
  rolesHandler,
  schemaHandler,
  serverHandler,
  settingsHandler,
  usersHandler,
  utilitiesHandler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activityHandler)
  .route('/', assetsHandler)
  .route('/', authenticationHandler)
  .route('/', itemsHandler)
  .route('/', presetsHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', extensionsHandler)
  .route('/', fieldsHandler)
  .route('/', filesHandler)
  .route('/', flowsHandler)
  .route('/', foldersHandler)
  .route('/', operationsHandler)
  .route('/', permissionsHandler)
  .route('/', relationsHandler)
  .route('/', revisionsHandler)
  .route('/', rolesHandler)
  .route('/', schemaHandler)
  .route('/', serverHandler)
  .route('/', settingsHandler)
  .route('/', usersHandler)
  .route('/', utilitiesHandler)
  .route('/', versionsHandler)

export default app

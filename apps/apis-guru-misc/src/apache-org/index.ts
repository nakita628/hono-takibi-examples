import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configHandler,
  connectionsHandler,
  dagsHandler,
  dagSourcesHandler,
  dagWarningsHandler,
  datasetsHandler,
  eventLogsHandler,
  healthHandler,
  importErrorsHandler,
  permissionsHandler,
  pluginsHandler,
  poolsHandler,
  providersHandler,
  rolesHandler,
  usersHandler,
  variablesHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configHandler)
  .route('/', connectionsHandler)
  .route('/', dagSourcesHandler)
  .route('/', dagWarningsHandler)
  .route('/', dagsHandler)
  .route('/', datasetsHandler)
  .route('/', eventLogsHandler)
  .route('/', healthHandler)
  .route('/', importErrorsHandler)
  .route('/', permissionsHandler)
  .route('/', pluginsHandler)
  .route('/', poolsHandler)
  .route('/', providersHandler)
  .route('/', rolesHandler)
  .route('/', usersHandler)
  .route('/', variablesHandler)
  .route('/', versionHandler)

export default app

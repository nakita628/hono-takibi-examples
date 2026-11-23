import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  apiKeysHandler,
  auditLogsHandler,
  authHandler,
  authkitHandler,
  authorizationHandler,
  clientHandler,
  connectHandler,
  connectionsHandler,
  dataIntegrationsHandler,
  directoriesHandler,
  directoryGroupsHandler,
  directoryUsersHandler,
  eventsHandler,
  featureFlagsHandler,
  organizationDomainsHandler,
  organizationsHandler,
  platformHandler,
  portalHandler,
  radarHandler,
  ssoHandler,
  userManagementHandler,
  vaultHandler,
  webhookEndpointsHandler,
  widgetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agentsHandler)
  .route('/', apiKeysHandler)
  .route('/', auditLogsHandler)
  .route('/', authHandler)
  .route('/', authkitHandler)
  .route('/', authorizationHandler)
  .route('/', clientHandler)
  .route('/', connectHandler)
  .route('/', connectionsHandler)
  .route('/', dataIntegrationsHandler)
  .route('/', directoriesHandler)
  .route('/', directoryGroupsHandler)
  .route('/', directoryUsersHandler)
  .route('/', eventsHandler)
  .route('/', featureFlagsHandler)
  .route('/', organizationDomainsHandler)
  .route('/', organizationsHandler)
  .route('/', platformHandler)
  .route('/', portalHandler)
  .route('/', radarHandler)
  .route('/', ssoHandler)
  .route('/', userManagementHandler)
  .route('/', vaultHandler)
  .route('/', webhookEndpointsHandler)
  .route('/', widgetsHandler)

export default app

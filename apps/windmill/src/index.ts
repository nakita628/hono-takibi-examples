import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentWorkersHandler,
  appsHandler,
  appsUHandler,
  authHandler,
  concurrencyGroupsHandler,
  configsHandler,
  docsHandler,
  eeLicenseHandler,
  embeddingsHandler,
  flowsHandler,
  githubAppHandler,
  groupsHandler,
  healthHandler,
  indexerHandler,
  integrationsHandler,
  jobsHandler,
  mcpHandler,
  minKeepAliveVersionHandler,
  nativeTriggersHandler,
  oauthHandler,
  oidcHandler,
  openapiYamlHandler,
  samlHandler,
  schedulesHandler,
  scriptsHandler,
  scriptsUHandler,
  serviceLogsHandler,
  settingsHandler,
  settingsUHandler,
  srchHandler,
  teamsHandler,
  tokensHandler,
  uptodateHandler,
  usersHandler,
  versionHandler,
  wellKnownHandler,
  wHandler,
  workersHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', versionHandler)
  .route('/', healthHandler)
  .route('/', uptodateHandler)
  .route('/', eeLicenseHandler)
  .route('/', docsHandler)
  .route('/', openapiYamlHandler)
  .route('/', wHandler)
  .route('/', authHandler)
  .route('/', usersHandler)
  .route('/', githubAppHandler)
  .route('/', workspacesHandler)
  .route('/', settingsHandler)
  .route('/', settingsUHandler)
  .route('/', samlHandler)
  .route('/', minKeepAliveVersionHandler)
  .route('/', wellKnownHandler)
  .route('/', tokensHandler)
  .route('/', oidcHandler)
  .route('/', oauthHandler)
  .route('/', teamsHandler)
  .route('/', integrationsHandler)
  .route('/', flowsHandler)
  .route('/', appsHandler)
  .route('/', appsUHandler)
  .route('/', scriptsHandler)
  .route('/', embeddingsHandler)
  .route('/', workersHandler)
  .route('/', scriptsUHandler)
  .route('/', jobsHandler)
  .route('/', schedulesHandler)
  .route('/', nativeTriggersHandler)
  .route('/', groupsHandler)
  .route('/', configsHandler)
  .route('/', agentWorkersHandler)
  .route('/', serviceLogsHandler)
  .route('/', concurrencyGroupsHandler)
  .route('/', srchHandler)
  .route('/', indexerHandler)
  .route('/', mcpHandler)

export default app

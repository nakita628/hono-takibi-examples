import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationsAPITokensHandler,
  backupHandler,
  bucketsHandler,
  cellsHandler,
  checksHandler,
  configHandler,
  dashboardsHandler,
  dataIOEndpointsHandler,
  dbrPsHandler,
  debugHandler,
  healthHandler,
  labelsHandler,
  metricsHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  organizationsHandler,
  pingHandler,
  queryHandler,
  readyHandler,
  remoteConnectionsHandler,
  replicationsHandler,
  resourcesHandler,
  restoreHandler,
  routesHandler,
  rulesHandler,
  scraperTargetsHandler,
  secretsHandler,
  securityAndAccessEndpointsHandler,
  setupHandler,
  sourcesHandler,
  tasksHandler,
  telegrafPluginsHandler,
  telegrafsHandler,
  templatesHandler,
  usersHandler,
  variablesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', securityAndAccessEndpointsHandler)
  .route('/', pingHandler)
  .route('/', routesHandler)
  .route('/', dbrPsHandler)
  .route('/', telegrafPluginsHandler)
  .route('/', telegrafsHandler)
  .route('/', variablesHandler)
  .route('/', dataIOEndpointsHandler)
  .route('/', labelsHandler)
  .route('/', dashboardsHandler)
  .route('/', cellsHandler)
  .route('/', queryHandler)
  .route('/', bucketsHandler)
  .route('/', organizationsHandler)
  .route('/', secretsHandler)
  .route('/', resourcesHandler)
  .route('/', templatesHandler)
  .route('/', tasksHandler)
  .route('/', configHandler)
  .route('/', usersHandler)
  .route('/', checksHandler)
  .route('/', notificationRulesHandler)
  .route('/', rulesHandler)
  .route('/', notificationEndpointsHandler)
  .route('/', authorizationsAPITokensHandler)
  .route('/', debugHandler)
  .route('/', healthHandler)
  .route('/', metricsHandler)
  .route('/', readyHandler)
  .route('/', setupHandler)
  .route('/', sourcesHandler)
  .route('/', scraperTargetsHandler)
  .route('/', backupHandler)
  .route('/', restoreHandler)
  .route('/', remoteConnectionsHandler)
  .route('/', replicationsHandler)

export default app

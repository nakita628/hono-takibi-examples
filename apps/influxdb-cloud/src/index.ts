import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationsAPITokensHandler,
  bucketSchemasHandler,
  bucketsHandler,
  cellsHandler,
  checksHandler,
  configHandler,
  dashboardsHandler,
  dataIOEndpointsHandler,
  dbrPsHandler,
  labelsHandler,
  limitsHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  organizationsHandler,
  pingHandler,
  queryHandler,
  resourcesHandler,
  routesHandler,
  rulesHandler,
  secretsHandler,
  securityAndAccessEndpointsHandler,
  setupHandler,
  tasksHandler,
  telegrafPluginsHandler,
  telegrafsHandler,
  templatesHandler,
  usageHandler,
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
  .route('/', setupHandler)
  .route('/', bucketSchemasHandler)
  .route('/', limitsHandler)
  .route('/', usageHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationsHandler,
  bucketsHandler,
  cellsHandler,
  checksHandler,
  dashboardsHandler,
  dbrPsHandler,
  deleteHandler,
  healthHandler,
  influxDBTemplatesHandler,
  labelsHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  organizationsHandler,
  queryHandler,
  readyHandler,
  routesHandler,
  rulesHandler,
  scraperTargetsHandler,
  secretsHandler,
  setupHandler,
  signinHandler,
  signoutHandler,
  sourcesHandler,
  tasksHandler,
  telegrafPluginsHandler,
  telegrafsHandler,
  templatesHandler,
  usersHandler,
  variablesHandler,
  writeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', routesHandler)
  .route('/', authorizationsHandler)
  .route('/', bucketsHandler)
  .route('/', checksHandler)
  .route('/', dashboardsHandler)
  .route('/', cellsHandler)
  .route('/', dbrPsHandler)
  .route('/', deleteHandler)
  .route('/', templatesHandler)
  .route('/', usersHandler)
  .route('/', healthHandler)
  .route('/', labelsHandler)
  .route('/', notificationEndpointsHandler)
  .route('/', notificationRulesHandler)
  .route('/', rulesHandler)
  .route('/', organizationsHandler)
  .route('/', secretsHandler)
  .route('/', queryHandler)
  .route('/', readyHandler)
  .route('/', scraperTargetsHandler)
  .route('/', setupHandler)
  .route('/', signinHandler)
  .route('/', signoutHandler)
  .route('/', sourcesHandler)
  .route('/', influxDBTemplatesHandler)
  .route('/', tasksHandler)
  .route('/', telegrafPluginsHandler)
  .route('/', telegrafsHandler)
  .route('/', variablesHandler)
  .route('/', writeHandler)

export default app

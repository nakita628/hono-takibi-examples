import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  authorizationsHandler,
  backupHandler,
  bucketsHandler,
  checksHandler,
  configHandler,
  dashboardsHandler,
  dbrpsHandler,
  debugHandler,
  deleteHandler,
  flagsHandler,
  healthHandler,
  labelsHandler,
  meHandler,
  metricsHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  orgsHandler,
  pingHandler,
  queryHandler,
  readyHandler,
  remotesHandler,
  replicationsHandler,
  resourcesHandler,
  restoreHandler,
  scrapersHandler,
  setupHandler,
  signinHandler,
  signoutHandler,
  sourcesHandler,
  stacksHandler,
  tasksHandler,
  telegrafHandler,
  telegrafsHandler,
  templatesHandler,
  usersHandler,
  variablesHandler,
  writeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', signinHandler)
  .route('/', signoutHandler)
  .route('/', pingHandler)
  .route('/', __rootHandler)
  .route('/', dbrpsHandler)
  .route('/', telegrafHandler)
  .route('/', telegrafsHandler)
  .route('/', variablesHandler)
  .route('/', writeHandler)
  .route('/', deleteHandler)
  .route('/', labelsHandler)
  .route('/', dashboardsHandler)
  .route('/', queryHandler)
  .route('/', bucketsHandler)
  .route('/', orgsHandler)
  .route('/', resourcesHandler)
  .route('/', stacksHandler)
  .route('/', templatesHandler)
  .route('/', tasksHandler)
  .route('/', flagsHandler)
  .route('/', meHandler)
  .route('/', usersHandler)
  .route('/', checksHandler)
  .route('/', notificationRulesHandler)
  .route('/', notificationEndpointsHandler)
  .route('/', authorizationsHandler)
  .route('/', debugHandler)
  .route('/', healthHandler)
  .route('/', metricsHandler)
  .route('/', readyHandler)
  .route('/', setupHandler)
  .route('/', sourcesHandler)
  .route('/', scrapersHandler)
  .route('/', backupHandler)
  .route('/', restoreHandler)
  .route('/', configHandler)
  .route('/', remotesHandler)
  .route('/', replicationsHandler)

export default app

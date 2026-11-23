import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  authorizationsHandler,
  bucketsHandler,
  checksHandler,
  dashboardsHandler,
  dbrpsHandler,
  deleteHandler,
  documentsHandler,
  flagsHandler,
  healthHandler,
  labelsHandler,
  meHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  orgsHandler,
  queryHandler,
  readyHandler,
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
  .route('/', __rootHandler)
  .route('/', authorizationsHandler)
  .route('/', bucketsHandler)
  .route('/', checksHandler)
  .route('/', dashboardsHandler)
  .route('/', dbrpsHandler)
  .route('/', deleteHandler)
  .route('/', documentsHandler)
  .route('/', flagsHandler)
  .route('/', healthHandler)
  .route('/', labelsHandler)
  .route('/', meHandler)
  .route('/', notificationEndpointsHandler)
  .route('/', notificationRulesHandler)
  .route('/', orgsHandler)
  .route('/', queryHandler)
  .route('/', readyHandler)
  .route('/', scrapersHandler)
  .route('/', setupHandler)
  .route('/', signinHandler)
  .route('/', signoutHandler)
  .route('/', sourcesHandler)
  .route('/', stacksHandler)
  .route('/', tasksHandler)
  .route('/', telegrafHandler)
  .route('/', telegrafsHandler)
  .route('/', templatesHandler)
  .route('/', usersHandler)
  .route('/', variablesHandler)
  .route('/', writeHandler)

export default app

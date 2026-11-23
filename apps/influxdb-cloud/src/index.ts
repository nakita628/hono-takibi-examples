import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  authorizationsHandler,
  bucketsHandler,
  checksHandler,
  dashboardsHandler,
  dbrpsHandler,
  deleteHandler,
  flagsHandler,
  labelsHandler,
  meHandler,
  notificationEndpointsHandler,
  notificationRulesHandler,
  orgsHandler,
  pingHandler,
  queryHandler,
  resourcesHandler,
  setupHandler,
  signinHandler,
  signoutHandler,
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
  .route('/', setupHandler)

export default app

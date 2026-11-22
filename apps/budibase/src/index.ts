import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  metricsHandler,
  queriesHandler,
  rolesHandler,
  rowsHandler,
  tablesHandler,
  usersHandler,
  viewsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsHandler)
  .route('/', metricsHandler)
  .route('/', queriesHandler)
  .route('/', rolesHandler)
  .route('/', rowsHandler)
  .route('/', tablesHandler)
  .route('/', usersHandler)
  .route('/', viewsHandler)
  .route('/', workspacesHandler)

export default app

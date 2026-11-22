import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  backupHandler,
  billingHandler,
  clickPipesHandler,
  clickStackHandler,
  notificationsHandler,
  organizationHandler,
  postgresHandler,
  prometheusHandler,
  queryAPIEndpointsHandler,
  roleManagementHandler,
  savedQueriesHandler,
  serviceHandler,
  snapshotHandler,
  udfHandler,
  userManagementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', userManagementHandler)
  .route('/', organizationHandler)
  .route('/', prometheusHandler)
  .route('/', roleManagementHandler)
  .route('/', serviceHandler)
  .route('/', backupHandler)
  .route('/', snapshotHandler)
  .route('/', apiKeysHandler)
  .route('/', notificationsHandler)
  .route('/', billingHandler)
  .route('/', clickPipesHandler)
  .route('/', clickStackHandler)
  .route('/', postgresHandler)
  .route('/', queryAPIEndpointsHandler)
  .route('/', savedQueriesHandler)
  .route('/', udfHandler)

export default app

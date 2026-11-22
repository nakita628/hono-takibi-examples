import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configHandler,
  connectionHandler,
  dagHandler,
  dagRunHandler,
  dagWarningHandler,
  datasetHandler,
  eventLogHandler,
  importErrorHandler,
  monitoringHandler,
  permissionHandler,
  pluginHandler,
  poolHandler,
  providerHandler,
  roleHandler,
  taskInstanceHandler,
  userHandler,
  variableHandler,
  xComHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configHandler)
  .route('/', connectionHandler)
  .route('/', dagHandler)
  .route('/', dagWarningHandler)
  .route('/', dagRunHandler)
  .route('/', taskInstanceHandler)
  .route('/', xComHandler)
  .route('/', datasetHandler)
  .route('/', eventLogHandler)
  .route('/', monitoringHandler)
  .route('/', importErrorHandler)
  .route('/', permissionHandler)
  .route('/', pluginHandler)
  .route('/', poolHandler)
  .route('/', providerHandler)
  .route('/', roleHandler)
  .route('/', userHandler)
  .route('/', variableHandler)

export default app

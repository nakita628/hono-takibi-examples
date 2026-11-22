import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetHandler,
  assetStateStoreHandler,
  backfillHandler,
  configHandler,
  connectionHandler,
  dagBundleHandler,
  dagHandler,
  dagParsingHandler,
  dagRunHandler,
  dagSourceHandler,
  dagStatsHandler,
  dagVersionHandler,
  dagWarningHandler,
  eventLogHandler,
  extraLinksHandler,
  importErrorHandler,
  jobHandler,
  loginHandler,
  monitorHandler,
  pluginHandler,
  poolHandler,
  providerHandler,
  taskHandler,
  taskInstanceHandler,
  taskStateStoreHandler,
  triggerHandler,
  variableHandler,
  versionHandler,
  xComHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetHandler)
  .route('/', backfillHandler)
  .route('/', connectionHandler)
  .route('/', dagRunHandler)
  .route('/', dagSourceHandler)
  .route('/', dagBundleHandler)
  .route('/', dagStatsHandler)
  .route('/', configHandler)
  .route('/', dagWarningHandler)
  .route('/', dagHandler)
  .route('/', eventLogHandler)
  .route('/', extraLinksHandler)
  .route('/', importErrorHandler)
  .route('/', jobHandler)
  .route('/', pluginHandler)
  .route('/', poolHandler)
  .route('/', providerHandler)
  .route('/', assetStateStoreHandler)
  .route('/', taskStateStoreHandler)
  .route('/', xComHandler)
  .route('/', taskInstanceHandler)
  .route('/', taskHandler)
  .route('/', triggerHandler)
  .route('/', variableHandler)
  .route('/', dagParsingHandler)
  .route('/', dagVersionHandler)
  .route('/', monitorHandler)
  .route('/', versionHandler)
  .route('/', loginHandler)

export default app

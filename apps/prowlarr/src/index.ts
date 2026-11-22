import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiInfoHandler,
  applicationHandler,
  appProfileHandler,
  authenticationHandler,
  backupHandler,
  commandHandler,
  customFilterHandler,
  developmentConfigHandler,
  downloadClientConfigHandler,
  downloadClientHandler,
  fileSystemHandler,
  healthHandler,
  historyHandler,
  hostConfigHandler,
  indexerDefaultCategoriesHandler,
  indexerHandler,
  indexerProxyHandler,
  indexerStatsHandler,
  indexerStatusHandler,
  localizationHandler,
  logFileHandler,
  logHandler,
  newznabHandler,
  notificationHandler,
  pingHandler,
  searchHandler,
  staticResourceHandler,
  systemHandler,
  tagDetailsHandler,
  tagHandler,
  taskHandler,
  uiConfigHandler,
  updateHandler,
  updateLogFileHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiInfoHandler)
  .route('/', applicationHandler)
  .route('/', appProfileHandler)
  .route('/', authenticationHandler)
  .route('/', staticResourceHandler)
  .route('/', backupHandler)
  .route('/', commandHandler)
  .route('/', customFilterHandler)
  .route('/', developmentConfigHandler)
  .route('/', downloadClientHandler)
  .route('/', downloadClientConfigHandler)
  .route('/', fileSystemHandler)
  .route('/', healthHandler)
  .route('/', historyHandler)
  .route('/', hostConfigHandler)
  .route('/', indexerHandler)
  .route('/', indexerDefaultCategoriesHandler)
  .route('/', indexerProxyHandler)
  .route('/', indexerStatsHandler)
  .route('/', indexerStatusHandler)
  .route('/', localizationHandler)
  .route('/', logHandler)
  .route('/', logFileHandler)
  .route('/', newznabHandler)
  .route('/', notificationHandler)
  .route('/', pingHandler)
  .route('/', searchHandler)
  .route('/', systemHandler)
  .route('/', tagHandler)
  .route('/', tagDetailsHandler)
  .route('/', taskHandler)
  .route('/', uiConfigHandler)
  .route('/', updateHandler)
  .route('/', updateLogFileHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alternativeTitleHandler,
  apiInfoHandler,
  authenticationHandler,
  autoTaggingHandler,
  backupHandler,
  blocklistHandler,
  calendarFeedHandler,
  calendarHandler,
  collectionHandler,
  commandHandler,
  creditHandler,
  customFilterHandler,
  customFormatHandler,
  cutoffHandler,
  delayProfileHandler,
  diskSpaceHandler,
  downloadClientConfigHandler,
  downloadClientHandler,
  extraFileHandler,
  fileSystemHandler,
  healthHandler,
  historyHandler,
  hostConfigHandler,
  importListConfigHandler,
  importListExclusionHandler,
  importListHandler,
  importListMoviesHandler,
  indexerConfigHandler,
  indexerFlagHandler,
  indexerHandler,
  languageHandler,
  localizationHandler,
  logFileHandler,
  logHandler,
  manualImportHandler,
  mediaCoverHandler,
  mediaManagementConfigHandler,
  metadataConfigHandler,
  metadataHandler,
  missingHandler,
  movieEditorHandler,
  movieFileHandler,
  movieFolderHandler,
  movieHandler,
  movieImportHandler,
  movieLookupHandler,
  namingConfigHandler,
  notificationHandler,
  parseHandler,
  pingHandler,
  qualityDefinitionHandler,
  qualityProfileHandler,
  qualityProfileSchemaHandler,
  queueActionHandler,
  queueDetailsHandler,
  queueHandler,
  queueStatusHandler,
  releaseHandler,
  releaseProfileHandler,
  releasePushHandler,
  remotePathMappingHandler,
  renameMovieHandler,
  rootFolderHandler,
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
  .route('/', alternativeTitleHandler)
  .route('/', apiInfoHandler)
  .route('/', authenticationHandler)
  .route('/', staticResourceHandler)
  .route('/', autoTaggingHandler)
  .route('/', backupHandler)
  .route('/', blocklistHandler)
  .route('/', calendarHandler)
  .route('/', calendarFeedHandler)
  .route('/', collectionHandler)
  .route('/', commandHandler)
  .route('/', creditHandler)
  .route('/', customFilterHandler)
  .route('/', customFormatHandler)
  .route('/', cutoffHandler)
  .route('/', delayProfileHandler)
  .route('/', diskSpaceHandler)
  .route('/', downloadClientHandler)
  .route('/', downloadClientConfigHandler)
  .route('/', extraFileHandler)
  .route('/', fileSystemHandler)
  .route('/', healthHandler)
  .route('/', historyHandler)
  .route('/', hostConfigHandler)
  .route('/', importListHandler)
  .route('/', importListConfigHandler)
  .route('/', importListExclusionHandler)
  .route('/', importListMoviesHandler)
  .route('/', indexerHandler)
  .route('/', indexerConfigHandler)
  .route('/', indexerFlagHandler)
  .route('/', languageHandler)
  .route('/', localizationHandler)
  .route('/', logHandler)
  .route('/', logFileHandler)
  .route('/', manualImportHandler)
  .route('/', mediaCoverHandler)
  .route('/', mediaManagementConfigHandler)
  .route('/', metadataHandler)
  .route('/', metadataConfigHandler)
  .route('/', missingHandler)
  .route('/', movieHandler)
  .route('/', movieEditorHandler)
  .route('/', movieFileHandler)
  .route('/', movieFolderHandler)
  .route('/', movieImportHandler)
  .route('/', movieLookupHandler)
  .route('/', namingConfigHandler)
  .route('/', notificationHandler)
  .route('/', parseHandler)
  .route('/', pingHandler)
  .route('/', qualityDefinitionHandler)
  .route('/', qualityProfileHandler)
  .route('/', qualityProfileSchemaHandler)
  .route('/', queueHandler)
  .route('/', queueActionHandler)
  .route('/', queueDetailsHandler)
  .route('/', queueStatusHandler)
  .route('/', releaseHandler)
  .route('/', releaseProfileHandler)
  .route('/', releasePushHandler)
  .route('/', remotePathMappingHandler)
  .route('/', renameMovieHandler)
  .route('/', rootFolderHandler)
  .route('/', systemHandler)
  .route('/', tagHandler)
  .route('/', tagDetailsHandler)
  .route('/', taskHandler)
  .route('/', uiConfigHandler)
  .route('/', updateHandler)
  .route('/', updateLogFileHandler)

export default app

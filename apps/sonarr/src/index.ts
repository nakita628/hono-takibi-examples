import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiInfoHandler,
  authenticationHandler,
  autoTaggingHandler,
  backupHandler,
  blocklistHandler,
  calendarFeedHandler,
  calendarHandler,
  commandHandler,
  customFilterHandler,
  customFormatHandler,
  cutoffHandler,
  delayProfileHandler,
  diskSpaceHandler,
  downloadClientConfigHandler,
  downloadClientHandler,
  episodeFileHandler,
  episodeHandler,
  fileSystemHandler,
  healthHandler,
  historyHandler,
  hostConfigHandler,
  importListConfigHandler,
  importListExclusionHandler,
  importListHandler,
  indexerConfigHandler,
  indexerFlagHandler,
  indexerHandler,
  languageHandler,
  languageProfileHandler,
  languageProfileSchemaHandler,
  localizationHandler,
  logFileHandler,
  logHandler,
  manualImportHandler,
  mediaCoverHandler,
  mediaManagementConfigHandler,
  metadataHandler,
  missingHandler,
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
  renameEpisodeHandler,
  rootFolderHandler,
  seasonPassHandler,
  seriesEditorHandler,
  seriesFolderHandler,
  seriesHandler,
  seriesImportHandler,
  seriesLookupHandler,
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
  .route('/', authenticationHandler)
  .route('/', staticResourceHandler)
  .route('/', autoTaggingHandler)
  .route('/', backupHandler)
  .route('/', blocklistHandler)
  .route('/', calendarHandler)
  .route('/', calendarFeedHandler)
  .route('/', commandHandler)
  .route('/', customFilterHandler)
  .route('/', customFormatHandler)
  .route('/', cutoffHandler)
  .route('/', delayProfileHandler)
  .route('/', diskSpaceHandler)
  .route('/', downloadClientHandler)
  .route('/', downloadClientConfigHandler)
  .route('/', episodeHandler)
  .route('/', episodeFileHandler)
  .route('/', fileSystemHandler)
  .route('/', healthHandler)
  .route('/', historyHandler)
  .route('/', hostConfigHandler)
  .route('/', importListHandler)
  .route('/', importListConfigHandler)
  .route('/', importListExclusionHandler)
  .route('/', indexerHandler)
  .route('/', indexerConfigHandler)
  .route('/', indexerFlagHandler)
  .route('/', languageHandler)
  .route('/', languageProfileHandler)
  .route('/', languageProfileSchemaHandler)
  .route('/', localizationHandler)
  .route('/', logHandler)
  .route('/', logFileHandler)
  .route('/', manualImportHandler)
  .route('/', mediaCoverHandler)
  .route('/', mediaManagementConfigHandler)
  .route('/', metadataHandler)
  .route('/', missingHandler)
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
  .route('/', renameEpisodeHandler)
  .route('/', rootFolderHandler)
  .route('/', seasonPassHandler)
  .route('/', seriesHandler)
  .route('/', seriesEditorHandler)
  .route('/', seriesFolderHandler)
  .route('/', seriesImportHandler)
  .route('/', seriesLookupHandler)
  .route('/', systemHandler)
  .route('/', tagHandler)
  .route('/', tagDetailsHandler)
  .route('/', taskHandler)
  .route('/', uiConfigHandler)
  .route('/', updateHandler)
  .route('/', updateLogFileHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumHandler,
  albumLookupHandler,
  albumStudioHandler,
  apiInfoHandler,
  artistEditorHandler,
  artistHandler,
  artistLookupHandler,
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
  fileSystemHandler,
  healthHandler,
  historyHandler,
  hostConfigHandler,
  importListExclusionHandler,
  importListHandler,
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
  metadataHandler,
  metadataProfileHandler,
  metadataProfileSchemaHandler,
  metadataProviderConfigHandler,
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
  renameTrackHandler,
  retagTrackHandler,
  rootFolderHandler,
  searchHandler,
  staticResourceHandler,
  systemHandler,
  tagDetailsHandler,
  tagHandler,
  taskHandler,
  trackFileHandler,
  trackHandler,
  uiConfigHandler,
  updateHandler,
  updateLogFileHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', albumHandler)
  .route('/', albumLookupHandler)
  .route('/', albumStudioHandler)
  .route('/', apiInfoHandler)
  .route('/', artistHandler)
  .route('/', artistEditorHandler)
  .route('/', artistLookupHandler)
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
  .route('/', fileSystemHandler)
  .route('/', healthHandler)
  .route('/', historyHandler)
  .route('/', hostConfigHandler)
  .route('/', importListHandler)
  .route('/', importListExclusionHandler)
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
  .route('/', metadataProfileHandler)
  .route('/', metadataProfileSchemaHandler)
  .route('/', metadataProviderConfigHandler)
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
  .route('/', renameTrackHandler)
  .route('/', retagTrackHandler)
  .route('/', rootFolderHandler)
  .route('/', searchHandler)
  .route('/', systemHandler)
  .route('/', tagHandler)
  .route('/', tagDetailsHandler)
  .route('/', taskHandler)
  .route('/', trackHandler)
  .route('/', trackFileHandler)
  .route('/', uiConfigHandler)
  .route('/', updateHandler)
  .route('/', updateLogFileHandler)

export default app

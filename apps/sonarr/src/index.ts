import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AutotaggingIdRoute,
  deleteApiV3BlocklistBulkRoute,
  deleteApiV3BlocklistIdRoute,
  deleteApiV3CommandIdRoute,
  deleteApiV3CustomfilterIdRoute,
  deleteApiV3CustomformatBulkRoute,
  deleteApiV3CustomformatIdRoute,
  deleteApiV3DelayprofileIdRoute,
  deleteApiV3DownloadclientBulkRoute,
  deleteApiV3DownloadclientIdRoute,
  deleteApiV3EpisodefileBulkRoute,
  deleteApiV3EpisodefileIdRoute,
  deleteApiV3ImportlistBulkRoute,
  deleteApiV3ImportlistexclusionBulkRoute,
  deleteApiV3ImportlistexclusionIdRoute,
  deleteApiV3ImportlistIdRoute,
  deleteApiV3IndexerBulkRoute,
  deleteApiV3IndexerIdRoute,
  deleteApiV3LanguageprofileIdRoute,
  deleteApiV3MetadataIdRoute,
  deleteApiV3NotificationIdRoute,
  deleteApiV3QualityprofileIdRoute,
  deleteApiV3QueueBulkRoute,
  deleteApiV3QueueIdRoute,
  deleteApiV3ReleaseprofileIdRoute,
  deleteApiV3RemotepathmappingIdRoute,
  deleteApiV3RootfolderIdRoute,
  deleteApiV3SeriesEditorRoute,
  deleteApiV3SeriesIdRoute,
  deleteApiV3SystemBackupIdRoute,
  deleteApiV3TagIdRoute,
  getApiRoute,
  getApiV3AutotaggingIdRoute,
  getApiV3AutotaggingRoute,
  getApiV3AutotaggingSchemaRoute,
  getApiV3BlocklistRoute,
  getApiV3CalendarIdRoute,
  getApiV3CalendarRoute,
  getApiV3CommandIdRoute,
  getApiV3CommandRoute,
  getApiV3ConfigDownloadclientIdRoute,
  getApiV3ConfigDownloadclientRoute,
  getApiV3ConfigHostIdRoute,
  getApiV3ConfigHostRoute,
  getApiV3ConfigImportlistIdRoute,
  getApiV3ConfigImportlistRoute,
  getApiV3ConfigIndexerIdRoute,
  getApiV3ConfigIndexerRoute,
  getApiV3ConfigMediamanagementIdRoute,
  getApiV3ConfigMediamanagementRoute,
  getApiV3ConfigNamingExamplesRoute,
  getApiV3ConfigNamingIdRoute,
  getApiV3ConfigNamingRoute,
  getApiV3ConfigUiIdRoute,
  getApiV3ConfigUiRoute,
  getApiV3CustomfilterIdRoute,
  getApiV3CustomfilterRoute,
  getApiV3CustomformatIdRoute,
  getApiV3CustomformatRoute,
  getApiV3CustomformatSchemaRoute,
  getApiV3DelayprofileIdRoute,
  getApiV3DelayprofileRoute,
  getApiV3DiskspaceRoute,
  getApiV3DownloadclientIdRoute,
  getApiV3DownloadclientRoute,
  getApiV3DownloadclientSchemaRoute,
  getApiV3EpisodefileIdRoute,
  getApiV3EpisodefileRoute,
  getApiV3EpisodeIdRoute,
  getApiV3EpisodeRoute,
  getApiV3FilesystemMediafilesRoute,
  getApiV3FilesystemRoute,
  getApiV3FilesystemTypeRoute,
  getApiV3HealthRoute,
  getApiV3HistoryRoute,
  getApiV3HistorySeriesRoute,
  getApiV3HistorySinceRoute,
  getApiV3ImportlistexclusionIdRoute,
  getApiV3ImportlistexclusionPagedRoute,
  getApiV3ImportlistexclusionRoute,
  getApiV3ImportlistIdRoute,
  getApiV3ImportlistRoute,
  getApiV3ImportlistSchemaRoute,
  getApiV3IndexerflagRoute,
  getApiV3IndexerIdRoute,
  getApiV3IndexerRoute,
  getApiV3IndexerSchemaRoute,
  getApiV3LanguageIdRoute,
  getApiV3LanguageprofileIdRoute,
  getApiV3LanguageprofileRoute,
  getApiV3LanguageprofileSchemaRoute,
  getApiV3LanguageRoute,
  getApiV3LocalizationIdRoute,
  getApiV3LocalizationLanguageRoute,
  getApiV3LocalizationRoute,
  getApiV3LogFileFilenameRoute,
  getApiV3LogFileRoute,
  getApiV3LogFileUpdateFilenameRoute,
  getApiV3LogFileUpdateRoute,
  getApiV3LogRoute,
  getApiV3ManualimportRoute,
  getApiV3MediacoverSeriesIdFilenameRoute,
  getApiV3MetadataIdRoute,
  getApiV3MetadataRoute,
  getApiV3MetadataSchemaRoute,
  getApiV3NotificationIdRoute,
  getApiV3NotificationRoute,
  getApiV3NotificationSchemaRoute,
  getApiV3ParseRoute,
  getApiV3QualitydefinitionIdRoute,
  getApiV3QualitydefinitionLimitsRoute,
  getApiV3QualitydefinitionRoute,
  getApiV3QualityprofileIdRoute,
  getApiV3QualityprofileRoute,
  getApiV3QualityprofileSchemaRoute,
  getApiV3QueueDetailsRoute,
  getApiV3QueueRoute,
  getApiV3QueueStatusRoute,
  getApiV3ReleaseprofileIdRoute,
  getApiV3ReleaseprofileRoute,
  getApiV3ReleaseRoute,
  getApiV3RemotepathmappingIdRoute,
  getApiV3RemotepathmappingRoute,
  getApiV3RenameBulkRoute,
  getApiV3RenameRoute,
  getApiV3RootfolderIdRoute,
  getApiV3RootfolderRoute,
  getApiV3SeriesIdFolderRoute,
  getApiV3SeriesIdRoute,
  getApiV3SeriesLookupRoute,
  getApiV3SeriesRoute,
  getApiV3SystemBackupRoute,
  getApiV3SystemRoutesDuplicateRoute,
  getApiV3SystemRoutesRoute,
  getApiV3SystemStatusRoute,
  getApiV3SystemTaskIdRoute,
  getApiV3SystemTaskRoute,
  getApiV3TagDetailIdRoute,
  getApiV3TagDetailRoute,
  getApiV3TagIdRoute,
  getApiV3TagRoute,
  getApiV3UpdateRoute,
  getApiV3WantedCutoffIdRoute,
  getApiV3WantedCutoffRoute,
  getApiV3WantedMissingIdRoute,
  getApiV3WantedMissingRoute,
  getContentPathRoute,
  getFeedV3CalendarSonarrIcsRoute,
  getLoggedoutRoute,
  getLoginRoute,
  getLoginSsoRoute,
  getLogoutRoute,
  getPathRoute,
  getPingRoute,
  getRoute,
  headPingRoute,
  postApiV3AutotaggingRoute,
  postApiV3CommandRoute,
  postApiV3CustomfilterRoute,
  postApiV3CustomformatRoute,
  postApiV3DelayprofileRoute,
  postApiV3DownloadclientActionNameRoute,
  postApiV3DownloadclientRoute,
  postApiV3DownloadclientTestallRoute,
  postApiV3DownloadclientTestRoute,
  postApiV3HistoryFailedIdRoute,
  postApiV3ImportlistActionNameRoute,
  postApiV3ImportlistexclusionRoute,
  postApiV3ImportlistRoute,
  postApiV3ImportlistTestallRoute,
  postApiV3ImportlistTestRoute,
  postApiV3IndexerActionNameRoute,
  postApiV3IndexerRoute,
  postApiV3IndexerTestallRoute,
  postApiV3IndexerTestRoute,
  postApiV3LanguageprofileRoute,
  postApiV3ManualimportRoute,
  postApiV3MetadataActionNameRoute,
  postApiV3MetadataRoute,
  postApiV3MetadataTestallRoute,
  postApiV3MetadataTestRoute,
  postApiV3NotificationActionNameRoute,
  postApiV3NotificationRoute,
  postApiV3NotificationTestallRoute,
  postApiV3NotificationTestRoute,
  postApiV3QualityprofileRoute,
  postApiV3QueueGrabBulkRoute,
  postApiV3QueueGrabIdRoute,
  postApiV3ReleaseprofileRoute,
  postApiV3ReleasePushRoute,
  postApiV3ReleaseRoute,
  postApiV3RemotepathmappingRoute,
  postApiV3RootfolderRoute,
  postApiV3SeasonpassRoute,
  postApiV3SeriesImportRoute,
  postApiV3SeriesRoute,
  postApiV3SystemBackupRestoreIdRoute,
  postApiV3SystemBackupRestoreUploadRoute,
  postApiV3SystemRestartRoute,
  postApiV3SystemShutdownRoute,
  postApiV3TagRoute,
  postLoginRoute,
  postResetPasswordRequestRoute,
  postResetPasswordRoute,
  putApiV3AutotaggingIdRoute,
  putApiV3ConfigDownloadclientIdRoute,
  putApiV3ConfigHostIdRoute,
  putApiV3ConfigImportlistIdRoute,
  putApiV3ConfigIndexerIdRoute,
  putApiV3ConfigMediamanagementIdRoute,
  putApiV3ConfigNamingIdRoute,
  putApiV3ConfigUiIdRoute,
  putApiV3CustomfilterIdRoute,
  putApiV3CustomformatBulkRoute,
  putApiV3CustomformatIdRoute,
  putApiV3DelayprofileIdRoute,
  putApiV3DelayprofileReorderIdRoute,
  putApiV3DownloadclientBulkRoute,
  putApiV3DownloadclientIdRoute,
  putApiV3EpisodefileBulkRoute,
  putApiV3EpisodefileEditorRoute,
  putApiV3EpisodefileIdRoute,
  putApiV3EpisodeIdRoute,
  putApiV3EpisodeMonitorRoute,
  putApiV3ImportlistBulkRoute,
  putApiV3ImportlistexclusionIdRoute,
  putApiV3ImportlistIdRoute,
  putApiV3IndexerBulkRoute,
  putApiV3IndexerIdRoute,
  putApiV3LanguageprofileIdRoute,
  putApiV3MetadataIdRoute,
  putApiV3NotificationIdRoute,
  putApiV3QualitydefinitionIdRoute,
  putApiV3QualitydefinitionUpdateRoute,
  putApiV3QualityprofileIdRoute,
  putApiV3ReleaseprofileIdRoute,
  putApiV3RemotepathmappingIdRoute,
  putApiV3SeriesEditorRoute,
  putApiV3SeriesIdRoute,
  putApiV3TagIdRoute,
} from './routes'
import {
  deleteApiV3AutotaggingIdRouteHandler,
  deleteApiV3BlocklistBulkRouteHandler,
  deleteApiV3BlocklistIdRouteHandler,
  deleteApiV3CommandIdRouteHandler,
  deleteApiV3CustomfilterIdRouteHandler,
  deleteApiV3CustomformatBulkRouteHandler,
  deleteApiV3CustomformatIdRouteHandler,
  deleteApiV3DelayprofileIdRouteHandler,
  deleteApiV3DownloadclientBulkRouteHandler,
  deleteApiV3DownloadclientIdRouteHandler,
  deleteApiV3EpisodefileBulkRouteHandler,
  deleteApiV3EpisodefileIdRouteHandler,
  deleteApiV3ImportlistBulkRouteHandler,
  deleteApiV3ImportlistexclusionBulkRouteHandler,
  deleteApiV3ImportlistexclusionIdRouteHandler,
  deleteApiV3ImportlistIdRouteHandler,
  deleteApiV3IndexerBulkRouteHandler,
  deleteApiV3IndexerIdRouteHandler,
  deleteApiV3LanguageprofileIdRouteHandler,
  deleteApiV3MetadataIdRouteHandler,
  deleteApiV3NotificationIdRouteHandler,
  deleteApiV3QualityprofileIdRouteHandler,
  deleteApiV3QueueBulkRouteHandler,
  deleteApiV3QueueIdRouteHandler,
  deleteApiV3ReleaseprofileIdRouteHandler,
  deleteApiV3RemotepathmappingIdRouteHandler,
  deleteApiV3RootfolderIdRouteHandler,
  deleteApiV3SeriesEditorRouteHandler,
  deleteApiV3SeriesIdRouteHandler,
  deleteApiV3SystemBackupIdRouteHandler,
  deleteApiV3TagIdRouteHandler,
  getApiRouteHandler,
  getApiV3AutotaggingIdRouteHandler,
  getApiV3AutotaggingRouteHandler,
  getApiV3AutotaggingSchemaRouteHandler,
  getApiV3BlocklistRouteHandler,
  getApiV3CalendarIdRouteHandler,
  getApiV3CalendarRouteHandler,
  getApiV3CommandIdRouteHandler,
  getApiV3CommandRouteHandler,
  getApiV3ConfigDownloadclientIdRouteHandler,
  getApiV3ConfigDownloadclientRouteHandler,
  getApiV3ConfigHostIdRouteHandler,
  getApiV3ConfigHostRouteHandler,
  getApiV3ConfigImportlistIdRouteHandler,
  getApiV3ConfigImportlistRouteHandler,
  getApiV3ConfigIndexerIdRouteHandler,
  getApiV3ConfigIndexerRouteHandler,
  getApiV3ConfigMediamanagementIdRouteHandler,
  getApiV3ConfigMediamanagementRouteHandler,
  getApiV3ConfigNamingExamplesRouteHandler,
  getApiV3ConfigNamingIdRouteHandler,
  getApiV3ConfigNamingRouteHandler,
  getApiV3ConfigUiIdRouteHandler,
  getApiV3ConfigUiRouteHandler,
  getApiV3CustomfilterIdRouteHandler,
  getApiV3CustomfilterRouteHandler,
  getApiV3CustomformatIdRouteHandler,
  getApiV3CustomformatRouteHandler,
  getApiV3CustomformatSchemaRouteHandler,
  getApiV3DelayprofileIdRouteHandler,
  getApiV3DelayprofileRouteHandler,
  getApiV3DiskspaceRouteHandler,
  getApiV3DownloadclientIdRouteHandler,
  getApiV3DownloadclientRouteHandler,
  getApiV3DownloadclientSchemaRouteHandler,
  getApiV3EpisodefileIdRouteHandler,
  getApiV3EpisodefileRouteHandler,
  getApiV3EpisodeIdRouteHandler,
  getApiV3EpisodeRouteHandler,
  getApiV3FilesystemMediafilesRouteHandler,
  getApiV3FilesystemRouteHandler,
  getApiV3FilesystemTypeRouteHandler,
  getApiV3HealthRouteHandler,
  getApiV3HistoryRouteHandler,
  getApiV3HistorySeriesRouteHandler,
  getApiV3HistorySinceRouteHandler,
  getApiV3ImportlistexclusionIdRouteHandler,
  getApiV3ImportlistexclusionPagedRouteHandler,
  getApiV3ImportlistexclusionRouteHandler,
  getApiV3ImportlistIdRouteHandler,
  getApiV3ImportlistRouteHandler,
  getApiV3ImportlistSchemaRouteHandler,
  getApiV3IndexerflagRouteHandler,
  getApiV3IndexerIdRouteHandler,
  getApiV3IndexerRouteHandler,
  getApiV3IndexerSchemaRouteHandler,
  getApiV3LanguageIdRouteHandler,
  getApiV3LanguageprofileIdRouteHandler,
  getApiV3LanguageprofileRouteHandler,
  getApiV3LanguageprofileSchemaRouteHandler,
  getApiV3LanguageRouteHandler,
  getApiV3LocalizationIdRouteHandler,
  getApiV3LocalizationLanguageRouteHandler,
  getApiV3LocalizationRouteHandler,
  getApiV3LogFileFilenameRouteHandler,
  getApiV3LogFileRouteHandler,
  getApiV3LogFileUpdateFilenameRouteHandler,
  getApiV3LogFileUpdateRouteHandler,
  getApiV3LogRouteHandler,
  getApiV3ManualimportRouteHandler,
  getApiV3MediacoverSeriesIdFilenameRouteHandler,
  getApiV3MetadataIdRouteHandler,
  getApiV3MetadataRouteHandler,
  getApiV3MetadataSchemaRouteHandler,
  getApiV3NotificationIdRouteHandler,
  getApiV3NotificationRouteHandler,
  getApiV3NotificationSchemaRouteHandler,
  getApiV3ParseRouteHandler,
  getApiV3QualitydefinitionIdRouteHandler,
  getApiV3QualitydefinitionLimitsRouteHandler,
  getApiV3QualitydefinitionRouteHandler,
  getApiV3QualityprofileIdRouteHandler,
  getApiV3QualityprofileRouteHandler,
  getApiV3QualityprofileSchemaRouteHandler,
  getApiV3QueueDetailsRouteHandler,
  getApiV3QueueRouteHandler,
  getApiV3QueueStatusRouteHandler,
  getApiV3ReleaseprofileIdRouteHandler,
  getApiV3ReleaseprofileRouteHandler,
  getApiV3ReleaseRouteHandler,
  getApiV3RemotepathmappingIdRouteHandler,
  getApiV3RemotepathmappingRouteHandler,
  getApiV3RenameBulkRouteHandler,
  getApiV3RenameRouteHandler,
  getApiV3RootfolderIdRouteHandler,
  getApiV3RootfolderRouteHandler,
  getApiV3SeriesIdFolderRouteHandler,
  getApiV3SeriesIdRouteHandler,
  getApiV3SeriesLookupRouteHandler,
  getApiV3SeriesRouteHandler,
  getApiV3SystemBackupRouteHandler,
  getApiV3SystemRoutesDuplicateRouteHandler,
  getApiV3SystemRoutesRouteHandler,
  getApiV3SystemStatusRouteHandler,
  getApiV3SystemTaskIdRouteHandler,
  getApiV3SystemTaskRouteHandler,
  getApiV3TagDetailIdRouteHandler,
  getApiV3TagDetailRouteHandler,
  getApiV3TagIdRouteHandler,
  getApiV3TagRouteHandler,
  getApiV3UpdateRouteHandler,
  getApiV3WantedCutoffIdRouteHandler,
  getApiV3WantedCutoffRouteHandler,
  getApiV3WantedMissingIdRouteHandler,
  getApiV3WantedMissingRouteHandler,
  getContentPathRouteHandler,
  getFeedV3CalendarSonarrIcsRouteHandler,
  getLoggedoutRouteHandler,
  getLoginRouteHandler,
  getLoginSsoRouteHandler,
  getLogoutRouteHandler,
  getPathRouteHandler,
  getPingRouteHandler,
  getRouteHandler,
  headPingRouteHandler,
  postApiV3AutotaggingRouteHandler,
  postApiV3CommandRouteHandler,
  postApiV3CustomfilterRouteHandler,
  postApiV3CustomformatRouteHandler,
  postApiV3DelayprofileRouteHandler,
  postApiV3DownloadclientActionNameRouteHandler,
  postApiV3DownloadclientRouteHandler,
  postApiV3DownloadclientTestallRouteHandler,
  postApiV3DownloadclientTestRouteHandler,
  postApiV3HistoryFailedIdRouteHandler,
  postApiV3ImportlistActionNameRouteHandler,
  postApiV3ImportlistexclusionRouteHandler,
  postApiV3ImportlistRouteHandler,
  postApiV3ImportlistTestallRouteHandler,
  postApiV3ImportlistTestRouteHandler,
  postApiV3IndexerActionNameRouteHandler,
  postApiV3IndexerRouteHandler,
  postApiV3IndexerTestallRouteHandler,
  postApiV3IndexerTestRouteHandler,
  postApiV3LanguageprofileRouteHandler,
  postApiV3ManualimportRouteHandler,
  postApiV3MetadataActionNameRouteHandler,
  postApiV3MetadataRouteHandler,
  postApiV3MetadataTestallRouteHandler,
  postApiV3MetadataTestRouteHandler,
  postApiV3NotificationActionNameRouteHandler,
  postApiV3NotificationRouteHandler,
  postApiV3NotificationTestallRouteHandler,
  postApiV3NotificationTestRouteHandler,
  postApiV3QualityprofileRouteHandler,
  postApiV3QueueGrabBulkRouteHandler,
  postApiV3QueueGrabIdRouteHandler,
  postApiV3ReleaseprofileRouteHandler,
  postApiV3ReleasePushRouteHandler,
  postApiV3ReleaseRouteHandler,
  postApiV3RemotepathmappingRouteHandler,
  postApiV3RootfolderRouteHandler,
  postApiV3SeasonpassRouteHandler,
  postApiV3SeriesImportRouteHandler,
  postApiV3SeriesRouteHandler,
  postApiV3SystemBackupRestoreIdRouteHandler,
  postApiV3SystemBackupRestoreUploadRouteHandler,
  postApiV3SystemRestartRouteHandler,
  postApiV3SystemShutdownRouteHandler,
  postApiV3TagRouteHandler,
  postLoginRouteHandler,
  postResetPasswordRequestRouteHandler,
  postResetPasswordRouteHandler,
  putApiV3AutotaggingIdRouteHandler,
  putApiV3ConfigDownloadclientIdRouteHandler,
  putApiV3ConfigHostIdRouteHandler,
  putApiV3ConfigImportlistIdRouteHandler,
  putApiV3ConfigIndexerIdRouteHandler,
  putApiV3ConfigMediamanagementIdRouteHandler,
  putApiV3ConfigNamingIdRouteHandler,
  putApiV3ConfigUiIdRouteHandler,
  putApiV3CustomfilterIdRouteHandler,
  putApiV3CustomformatBulkRouteHandler,
  putApiV3CustomformatIdRouteHandler,
  putApiV3DelayprofileIdRouteHandler,
  putApiV3DelayprofileReorderIdRouteHandler,
  putApiV3DownloadclientBulkRouteHandler,
  putApiV3DownloadclientIdRouteHandler,
  putApiV3EpisodefileBulkRouteHandler,
  putApiV3EpisodefileEditorRouteHandler,
  putApiV3EpisodefileIdRouteHandler,
  putApiV3EpisodeIdRouteHandler,
  putApiV3EpisodeMonitorRouteHandler,
  putApiV3ImportlistBulkRouteHandler,
  putApiV3ImportlistexclusionIdRouteHandler,
  putApiV3ImportlistIdRouteHandler,
  putApiV3IndexerBulkRouteHandler,
  putApiV3IndexerIdRouteHandler,
  putApiV3LanguageprofileIdRouteHandler,
  putApiV3MetadataIdRouteHandler,
  putApiV3NotificationIdRouteHandler,
  putApiV3QualitydefinitionIdRouteHandler,
  putApiV3QualitydefinitionUpdateRouteHandler,
  putApiV3QualityprofileIdRouteHandler,
  putApiV3ReleaseprofileIdRouteHandler,
  putApiV3RemotepathmappingIdRouteHandler,
  putApiV3SeriesEditorRouteHandler,
  putApiV3SeriesIdRouteHandler,
  putApiV3TagIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getLoginSsoRoute, getLoginSsoRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getLoginRoute, getLoginRouteHandler)
  .openapi(postResetPasswordRequestRoute, postResetPasswordRequestRouteHandler)
  .openapi(postResetPasswordRoute, postResetPasswordRouteHandler)
  .openapi(getLogoutRoute, getLogoutRouteHandler)
  .openapi(postApiV3AutotaggingRoute, postApiV3AutotaggingRouteHandler)
  .openapi(getApiV3AutotaggingRoute, getApiV3AutotaggingRouteHandler)
  .openapi(putApiV3AutotaggingIdRoute, putApiV3AutotaggingIdRouteHandler)
  .openapi(deleteApiV3AutotaggingIdRoute, deleteApiV3AutotaggingIdRouteHandler)
  .openapi(getApiV3AutotaggingIdRoute, getApiV3AutotaggingIdRouteHandler)
  .openapi(getApiV3AutotaggingSchemaRoute, getApiV3AutotaggingSchemaRouteHandler)
  .openapi(getApiV3SystemBackupRoute, getApiV3SystemBackupRouteHandler)
  .openapi(deleteApiV3SystemBackupIdRoute, deleteApiV3SystemBackupIdRouteHandler)
  .openapi(postApiV3SystemBackupRestoreIdRoute, postApiV3SystemBackupRestoreIdRouteHandler)
  .openapi(postApiV3SystemBackupRestoreUploadRoute, postApiV3SystemBackupRestoreUploadRouteHandler)
  .openapi(getApiV3BlocklistRoute, getApiV3BlocklistRouteHandler)
  .openapi(deleteApiV3BlocklistIdRoute, deleteApiV3BlocklistIdRouteHandler)
  .openapi(deleteApiV3BlocklistBulkRoute, deleteApiV3BlocklistBulkRouteHandler)
  .openapi(getApiV3CalendarRoute, getApiV3CalendarRouteHandler)
  .openapi(getApiV3CalendarIdRoute, getApiV3CalendarIdRouteHandler)
  .openapi(getFeedV3CalendarSonarrIcsRoute, getFeedV3CalendarSonarrIcsRouteHandler)
  .openapi(postApiV3CommandRoute, postApiV3CommandRouteHandler)
  .openapi(getApiV3CommandRoute, getApiV3CommandRouteHandler)
  .openapi(deleteApiV3CommandIdRoute, deleteApiV3CommandIdRouteHandler)
  .openapi(getApiV3CommandIdRoute, getApiV3CommandIdRouteHandler)
  .openapi(getApiV3CustomfilterRoute, getApiV3CustomfilterRouteHandler)
  .openapi(postApiV3CustomfilterRoute, postApiV3CustomfilterRouteHandler)
  .openapi(putApiV3CustomfilterIdRoute, putApiV3CustomfilterIdRouteHandler)
  .openapi(deleteApiV3CustomfilterIdRoute, deleteApiV3CustomfilterIdRouteHandler)
  .openapi(getApiV3CustomfilterIdRoute, getApiV3CustomfilterIdRouteHandler)
  .openapi(getApiV3CustomformatRoute, getApiV3CustomformatRouteHandler)
  .openapi(postApiV3CustomformatRoute, postApiV3CustomformatRouteHandler)
  .openapi(putApiV3CustomformatIdRoute, putApiV3CustomformatIdRouteHandler)
  .openapi(deleteApiV3CustomformatIdRoute, deleteApiV3CustomformatIdRouteHandler)
  .openapi(getApiV3CustomformatIdRoute, getApiV3CustomformatIdRouteHandler)
  .openapi(putApiV3CustomformatBulkRoute, putApiV3CustomformatBulkRouteHandler)
  .openapi(deleteApiV3CustomformatBulkRoute, deleteApiV3CustomformatBulkRouteHandler)
  .openapi(getApiV3CustomformatSchemaRoute, getApiV3CustomformatSchemaRouteHandler)
  .openapi(getApiV3WantedCutoffRoute, getApiV3WantedCutoffRouteHandler)
  .openapi(getApiV3WantedCutoffIdRoute, getApiV3WantedCutoffIdRouteHandler)
  .openapi(postApiV3DelayprofileRoute, postApiV3DelayprofileRouteHandler)
  .openapi(getApiV3DelayprofileRoute, getApiV3DelayprofileRouteHandler)
  .openapi(deleteApiV3DelayprofileIdRoute, deleteApiV3DelayprofileIdRouteHandler)
  .openapi(putApiV3DelayprofileIdRoute, putApiV3DelayprofileIdRouteHandler)
  .openapi(getApiV3DelayprofileIdRoute, getApiV3DelayprofileIdRouteHandler)
  .openapi(putApiV3DelayprofileReorderIdRoute, putApiV3DelayprofileReorderIdRouteHandler)
  .openapi(getApiV3DiskspaceRoute, getApiV3DiskspaceRouteHandler)
  .openapi(getApiV3DownloadclientRoute, getApiV3DownloadclientRouteHandler)
  .openapi(postApiV3DownloadclientRoute, postApiV3DownloadclientRouteHandler)
  .openapi(putApiV3DownloadclientIdRoute, putApiV3DownloadclientIdRouteHandler)
  .openapi(deleteApiV3DownloadclientIdRoute, deleteApiV3DownloadclientIdRouteHandler)
  .openapi(getApiV3DownloadclientIdRoute, getApiV3DownloadclientIdRouteHandler)
  .openapi(putApiV3DownloadclientBulkRoute, putApiV3DownloadclientBulkRouteHandler)
  .openapi(deleteApiV3DownloadclientBulkRoute, deleteApiV3DownloadclientBulkRouteHandler)
  .openapi(getApiV3DownloadclientSchemaRoute, getApiV3DownloadclientSchemaRouteHandler)
  .openapi(postApiV3DownloadclientTestRoute, postApiV3DownloadclientTestRouteHandler)
  .openapi(postApiV3DownloadclientTestallRoute, postApiV3DownloadclientTestallRouteHandler)
  .openapi(postApiV3DownloadclientActionNameRoute, postApiV3DownloadclientActionNameRouteHandler)
  .openapi(getApiV3ConfigDownloadclientRoute, getApiV3ConfigDownloadclientRouteHandler)
  .openapi(putApiV3ConfigDownloadclientIdRoute, putApiV3ConfigDownloadclientIdRouteHandler)
  .openapi(getApiV3ConfigDownloadclientIdRoute, getApiV3ConfigDownloadclientIdRouteHandler)
  .openapi(getApiV3EpisodeRoute, getApiV3EpisodeRouteHandler)
  .openapi(putApiV3EpisodeIdRoute, putApiV3EpisodeIdRouteHandler)
  .openapi(getApiV3EpisodeIdRoute, getApiV3EpisodeIdRouteHandler)
  .openapi(putApiV3EpisodeMonitorRoute, putApiV3EpisodeMonitorRouteHandler)
  .openapi(getApiV3EpisodefileRoute, getApiV3EpisodefileRouteHandler)
  .openapi(putApiV3EpisodefileIdRoute, putApiV3EpisodefileIdRouteHandler)
  .openapi(deleteApiV3EpisodefileIdRoute, deleteApiV3EpisodefileIdRouteHandler)
  .openapi(getApiV3EpisodefileIdRoute, getApiV3EpisodefileIdRouteHandler)
  .openapi(putApiV3EpisodefileEditorRoute, putApiV3EpisodefileEditorRouteHandler)
  .openapi(deleteApiV3EpisodefileBulkRoute, deleteApiV3EpisodefileBulkRouteHandler)
  .openapi(putApiV3EpisodefileBulkRoute, putApiV3EpisodefileBulkRouteHandler)
  .openapi(getApiV3FilesystemRoute, getApiV3FilesystemRouteHandler)
  .openapi(getApiV3FilesystemTypeRoute, getApiV3FilesystemTypeRouteHandler)
  .openapi(getApiV3FilesystemMediafilesRoute, getApiV3FilesystemMediafilesRouteHandler)
  .openapi(getApiV3HealthRoute, getApiV3HealthRouteHandler)
  .openapi(getApiV3HistoryRoute, getApiV3HistoryRouteHandler)
  .openapi(getApiV3HistorySinceRoute, getApiV3HistorySinceRouteHandler)
  .openapi(getApiV3HistorySeriesRoute, getApiV3HistorySeriesRouteHandler)
  .openapi(postApiV3HistoryFailedIdRoute, postApiV3HistoryFailedIdRouteHandler)
  .openapi(getApiV3ConfigHostRoute, getApiV3ConfigHostRouteHandler)
  .openapi(putApiV3ConfigHostIdRoute, putApiV3ConfigHostIdRouteHandler)
  .openapi(getApiV3ConfigHostIdRoute, getApiV3ConfigHostIdRouteHandler)
  .openapi(getApiV3ImportlistRoute, getApiV3ImportlistRouteHandler)
  .openapi(postApiV3ImportlistRoute, postApiV3ImportlistRouteHandler)
  .openapi(putApiV3ImportlistIdRoute, putApiV3ImportlistIdRouteHandler)
  .openapi(deleteApiV3ImportlistIdRoute, deleteApiV3ImportlistIdRouteHandler)
  .openapi(getApiV3ImportlistIdRoute, getApiV3ImportlistIdRouteHandler)
  .openapi(putApiV3ImportlistBulkRoute, putApiV3ImportlistBulkRouteHandler)
  .openapi(deleteApiV3ImportlistBulkRoute, deleteApiV3ImportlistBulkRouteHandler)
  .openapi(getApiV3ImportlistSchemaRoute, getApiV3ImportlistSchemaRouteHandler)
  .openapi(postApiV3ImportlistTestRoute, postApiV3ImportlistTestRouteHandler)
  .openapi(postApiV3ImportlistTestallRoute, postApiV3ImportlistTestallRouteHandler)
  .openapi(postApiV3ImportlistActionNameRoute, postApiV3ImportlistActionNameRouteHandler)
  .openapi(getApiV3ConfigImportlistRoute, getApiV3ConfigImportlistRouteHandler)
  .openapi(putApiV3ConfigImportlistIdRoute, putApiV3ConfigImportlistIdRouteHandler)
  .openapi(getApiV3ConfigImportlistIdRoute, getApiV3ConfigImportlistIdRouteHandler)
  .openapi(getApiV3ImportlistexclusionRoute, getApiV3ImportlistexclusionRouteHandler)
  .openapi(postApiV3ImportlistexclusionRoute, postApiV3ImportlistexclusionRouteHandler)
  .openapi(getApiV3ImportlistexclusionPagedRoute, getApiV3ImportlistexclusionPagedRouteHandler)
  .openapi(putApiV3ImportlistexclusionIdRoute, putApiV3ImportlistexclusionIdRouteHandler)
  .openapi(deleteApiV3ImportlistexclusionIdRoute, deleteApiV3ImportlistexclusionIdRouteHandler)
  .openapi(getApiV3ImportlistexclusionIdRoute, getApiV3ImportlistexclusionIdRouteHandler)
  .openapi(deleteApiV3ImportlistexclusionBulkRoute, deleteApiV3ImportlistexclusionBulkRouteHandler)
  .openapi(getApiV3IndexerRoute, getApiV3IndexerRouteHandler)
  .openapi(postApiV3IndexerRoute, postApiV3IndexerRouteHandler)
  .openapi(putApiV3IndexerIdRoute, putApiV3IndexerIdRouteHandler)
  .openapi(deleteApiV3IndexerIdRoute, deleteApiV3IndexerIdRouteHandler)
  .openapi(getApiV3IndexerIdRoute, getApiV3IndexerIdRouteHandler)
  .openapi(putApiV3IndexerBulkRoute, putApiV3IndexerBulkRouteHandler)
  .openapi(deleteApiV3IndexerBulkRoute, deleteApiV3IndexerBulkRouteHandler)
  .openapi(getApiV3IndexerSchemaRoute, getApiV3IndexerSchemaRouteHandler)
  .openapi(postApiV3IndexerTestRoute, postApiV3IndexerTestRouteHandler)
  .openapi(postApiV3IndexerTestallRoute, postApiV3IndexerTestallRouteHandler)
  .openapi(postApiV3IndexerActionNameRoute, postApiV3IndexerActionNameRouteHandler)
  .openapi(getApiV3ConfigIndexerRoute, getApiV3ConfigIndexerRouteHandler)
  .openapi(putApiV3ConfigIndexerIdRoute, putApiV3ConfigIndexerIdRouteHandler)
  .openapi(getApiV3ConfigIndexerIdRoute, getApiV3ConfigIndexerIdRouteHandler)
  .openapi(getApiV3IndexerflagRoute, getApiV3IndexerflagRouteHandler)
  .openapi(getApiV3LanguageRoute, getApiV3LanguageRouteHandler)
  .openapi(getApiV3LanguageIdRoute, getApiV3LanguageIdRouteHandler)
  .openapi(postApiV3LanguageprofileRoute, postApiV3LanguageprofileRouteHandler)
  .openapi(getApiV3LanguageprofileRoute, getApiV3LanguageprofileRouteHandler)
  .openapi(deleteApiV3LanguageprofileIdRoute, deleteApiV3LanguageprofileIdRouteHandler)
  .openapi(putApiV3LanguageprofileIdRoute, putApiV3LanguageprofileIdRouteHandler)
  .openapi(getApiV3LanguageprofileIdRoute, getApiV3LanguageprofileIdRouteHandler)
  .openapi(getApiV3LanguageprofileSchemaRoute, getApiV3LanguageprofileSchemaRouteHandler)
  .openapi(getApiV3LocalizationRoute, getApiV3LocalizationRouteHandler)
  .openapi(getApiV3LocalizationLanguageRoute, getApiV3LocalizationLanguageRouteHandler)
  .openapi(getApiV3LocalizationIdRoute, getApiV3LocalizationIdRouteHandler)
  .openapi(getApiV3LogRoute, getApiV3LogRouteHandler)
  .openapi(getApiV3LogFileRoute, getApiV3LogFileRouteHandler)
  .openapi(getApiV3LogFileFilenameRoute, getApiV3LogFileFilenameRouteHandler)
  .openapi(getApiV3ManualimportRoute, getApiV3ManualimportRouteHandler)
  .openapi(postApiV3ManualimportRoute, postApiV3ManualimportRouteHandler)
  .openapi(getApiV3MediacoverSeriesIdFilenameRoute, getApiV3MediacoverSeriesIdFilenameRouteHandler)
  .openapi(getApiV3ConfigMediamanagementRoute, getApiV3ConfigMediamanagementRouteHandler)
  .openapi(putApiV3ConfigMediamanagementIdRoute, putApiV3ConfigMediamanagementIdRouteHandler)
  .openapi(getApiV3ConfigMediamanagementIdRoute, getApiV3ConfigMediamanagementIdRouteHandler)
  .openapi(getApiV3MetadataRoute, getApiV3MetadataRouteHandler)
  .openapi(postApiV3MetadataRoute, postApiV3MetadataRouteHandler)
  .openapi(putApiV3MetadataIdRoute, putApiV3MetadataIdRouteHandler)
  .openapi(deleteApiV3MetadataIdRoute, deleteApiV3MetadataIdRouteHandler)
  .openapi(getApiV3MetadataIdRoute, getApiV3MetadataIdRouteHandler)
  .openapi(getApiV3MetadataSchemaRoute, getApiV3MetadataSchemaRouteHandler)
  .openapi(postApiV3MetadataTestRoute, postApiV3MetadataTestRouteHandler)
  .openapi(postApiV3MetadataTestallRoute, postApiV3MetadataTestallRouteHandler)
  .openapi(postApiV3MetadataActionNameRoute, postApiV3MetadataActionNameRouteHandler)
  .openapi(getApiV3WantedMissingRoute, getApiV3WantedMissingRouteHandler)
  .openapi(getApiV3WantedMissingIdRoute, getApiV3WantedMissingIdRouteHandler)
  .openapi(getApiV3ConfigNamingRoute, getApiV3ConfigNamingRouteHandler)
  .openapi(putApiV3ConfigNamingIdRoute, putApiV3ConfigNamingIdRouteHandler)
  .openapi(getApiV3ConfigNamingIdRoute, getApiV3ConfigNamingIdRouteHandler)
  .openapi(getApiV3ConfigNamingExamplesRoute, getApiV3ConfigNamingExamplesRouteHandler)
  .openapi(getApiV3NotificationRoute, getApiV3NotificationRouteHandler)
  .openapi(postApiV3NotificationRoute, postApiV3NotificationRouteHandler)
  .openapi(putApiV3NotificationIdRoute, putApiV3NotificationIdRouteHandler)
  .openapi(deleteApiV3NotificationIdRoute, deleteApiV3NotificationIdRouteHandler)
  .openapi(getApiV3NotificationIdRoute, getApiV3NotificationIdRouteHandler)
  .openapi(getApiV3NotificationSchemaRoute, getApiV3NotificationSchemaRouteHandler)
  .openapi(postApiV3NotificationTestRoute, postApiV3NotificationTestRouteHandler)
  .openapi(postApiV3NotificationTestallRoute, postApiV3NotificationTestallRouteHandler)
  .openapi(postApiV3NotificationActionNameRoute, postApiV3NotificationActionNameRouteHandler)
  .openapi(getApiV3ParseRoute, getApiV3ParseRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(headPingRoute, headPingRouteHandler)
  .openapi(putApiV3QualitydefinitionIdRoute, putApiV3QualitydefinitionIdRouteHandler)
  .openapi(getApiV3QualitydefinitionIdRoute, getApiV3QualitydefinitionIdRouteHandler)
  .openapi(getApiV3QualitydefinitionRoute, getApiV3QualitydefinitionRouteHandler)
  .openapi(putApiV3QualitydefinitionUpdateRoute, putApiV3QualitydefinitionUpdateRouteHandler)
  .openapi(getApiV3QualitydefinitionLimitsRoute, getApiV3QualitydefinitionLimitsRouteHandler)
  .openapi(postApiV3QualityprofileRoute, postApiV3QualityprofileRouteHandler)
  .openapi(getApiV3QualityprofileRoute, getApiV3QualityprofileRouteHandler)
  .openapi(deleteApiV3QualityprofileIdRoute, deleteApiV3QualityprofileIdRouteHandler)
  .openapi(putApiV3QualityprofileIdRoute, putApiV3QualityprofileIdRouteHandler)
  .openapi(getApiV3QualityprofileIdRoute, getApiV3QualityprofileIdRouteHandler)
  .openapi(getApiV3QualityprofileSchemaRoute, getApiV3QualityprofileSchemaRouteHandler)
  .openapi(deleteApiV3QueueIdRoute, deleteApiV3QueueIdRouteHandler)
  .openapi(deleteApiV3QueueBulkRoute, deleteApiV3QueueBulkRouteHandler)
  .openapi(getApiV3QueueRoute, getApiV3QueueRouteHandler)
  .openapi(postApiV3QueueGrabIdRoute, postApiV3QueueGrabIdRouteHandler)
  .openapi(postApiV3QueueGrabBulkRoute, postApiV3QueueGrabBulkRouteHandler)
  .openapi(getApiV3QueueDetailsRoute, getApiV3QueueDetailsRouteHandler)
  .openapi(getApiV3QueueStatusRoute, getApiV3QueueStatusRouteHandler)
  .openapi(postApiV3ReleaseRoute, postApiV3ReleaseRouteHandler)
  .openapi(getApiV3ReleaseRoute, getApiV3ReleaseRouteHandler)
  .openapi(postApiV3ReleaseprofileRoute, postApiV3ReleaseprofileRouteHandler)
  .openapi(getApiV3ReleaseprofileRoute, getApiV3ReleaseprofileRouteHandler)
  .openapi(deleteApiV3ReleaseprofileIdRoute, deleteApiV3ReleaseprofileIdRouteHandler)
  .openapi(putApiV3ReleaseprofileIdRoute, putApiV3ReleaseprofileIdRouteHandler)
  .openapi(getApiV3ReleaseprofileIdRoute, getApiV3ReleaseprofileIdRouteHandler)
  .openapi(postApiV3ReleasePushRoute, postApiV3ReleasePushRouteHandler)
  .openapi(postApiV3RemotepathmappingRoute, postApiV3RemotepathmappingRouteHandler)
  .openapi(getApiV3RemotepathmappingRoute, getApiV3RemotepathmappingRouteHandler)
  .openapi(deleteApiV3RemotepathmappingIdRoute, deleteApiV3RemotepathmappingIdRouteHandler)
  .openapi(putApiV3RemotepathmappingIdRoute, putApiV3RemotepathmappingIdRouteHandler)
  .openapi(getApiV3RemotepathmappingIdRoute, getApiV3RemotepathmappingIdRouteHandler)
  .openapi(getApiV3RenameRoute, getApiV3RenameRouteHandler)
  .openapi(getApiV3RenameBulkRoute, getApiV3RenameBulkRouteHandler)
  .openapi(postApiV3RootfolderRoute, postApiV3RootfolderRouteHandler)
  .openapi(getApiV3RootfolderRoute, getApiV3RootfolderRouteHandler)
  .openapi(deleteApiV3RootfolderIdRoute, deleteApiV3RootfolderIdRouteHandler)
  .openapi(getApiV3RootfolderIdRoute, getApiV3RootfolderIdRouteHandler)
  .openapi(postApiV3SeasonpassRoute, postApiV3SeasonpassRouteHandler)
  .openapi(getApiV3SeriesRoute, getApiV3SeriesRouteHandler)
  .openapi(postApiV3SeriesRoute, postApiV3SeriesRouteHandler)
  .openapi(getApiV3SeriesIdRoute, getApiV3SeriesIdRouteHandler)
  .openapi(putApiV3SeriesIdRoute, putApiV3SeriesIdRouteHandler)
  .openapi(deleteApiV3SeriesIdRoute, deleteApiV3SeriesIdRouteHandler)
  .openapi(putApiV3SeriesEditorRoute, putApiV3SeriesEditorRouteHandler)
  .openapi(deleteApiV3SeriesEditorRoute, deleteApiV3SeriesEditorRouteHandler)
  .openapi(getApiV3SeriesIdFolderRoute, getApiV3SeriesIdFolderRouteHandler)
  .openapi(postApiV3SeriesImportRoute, postApiV3SeriesImportRouteHandler)
  .openapi(getApiV3SeriesLookupRoute, getApiV3SeriesLookupRouteHandler)
  .openapi(getLoggedoutRoute, getLoggedoutRouteHandler)
  .openapi(getContentPathRoute, getContentPathRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getPathRoute, getPathRouteHandler)
  .openapi(getApiV3SystemStatusRoute, getApiV3SystemStatusRouteHandler)
  .openapi(getApiV3SystemRoutesRoute, getApiV3SystemRoutesRouteHandler)
  .openapi(getApiV3SystemRoutesDuplicateRoute, getApiV3SystemRoutesDuplicateRouteHandler)
  .openapi(postApiV3SystemShutdownRoute, postApiV3SystemShutdownRouteHandler)
  .openapi(postApiV3SystemRestartRoute, postApiV3SystemRestartRouteHandler)
  .openapi(getApiV3TagRoute, getApiV3TagRouteHandler)
  .openapi(postApiV3TagRoute, postApiV3TagRouteHandler)
  .openapi(putApiV3TagIdRoute, putApiV3TagIdRouteHandler)
  .openapi(deleteApiV3TagIdRoute, deleteApiV3TagIdRouteHandler)
  .openapi(getApiV3TagIdRoute, getApiV3TagIdRouteHandler)
  .openapi(getApiV3TagDetailRoute, getApiV3TagDetailRouteHandler)
  .openapi(getApiV3TagDetailIdRoute, getApiV3TagDetailIdRouteHandler)
  .openapi(getApiV3SystemTaskRoute, getApiV3SystemTaskRouteHandler)
  .openapi(getApiV3SystemTaskIdRoute, getApiV3SystemTaskIdRouteHandler)
  .openapi(putApiV3ConfigUiIdRoute, putApiV3ConfigUiIdRouteHandler)
  .openapi(getApiV3ConfigUiIdRoute, getApiV3ConfigUiIdRouteHandler)
  .openapi(getApiV3ConfigUiRoute, getApiV3ConfigUiRouteHandler)
  .openapi(getApiV3UpdateRoute, getApiV3UpdateRouteHandler)
  .openapi(getApiV3LogFileUpdateRoute, getApiV3LogFileUpdateRouteHandler)
  .openapi(getApiV3LogFileUpdateFilenameRoute, getApiV3LogFileUpdateFilenameRouteHandler)

export default app

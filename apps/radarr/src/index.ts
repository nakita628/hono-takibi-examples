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
  deleteApiV3ExclusionsBulkRoute,
  deleteApiV3ExclusionsIdRoute,
  deleteApiV3ImportlistBulkRoute,
  deleteApiV3ImportlistIdRoute,
  deleteApiV3IndexerBulkRoute,
  deleteApiV3IndexerIdRoute,
  deleteApiV3MetadataIdRoute,
  deleteApiV3MovieEditorRoute,
  deleteApiV3MoviefileBulkRoute,
  deleteApiV3MoviefileIdRoute,
  deleteApiV3MovieIdRoute,
  deleteApiV3NotificationIdRoute,
  deleteApiV3QualityprofileIdRoute,
  deleteApiV3QueueBulkRoute,
  deleteApiV3QueueIdRoute,
  deleteApiV3ReleaseprofileIdRoute,
  deleteApiV3RemotepathmappingIdRoute,
  deleteApiV3RootfolderIdRoute,
  deleteApiV3SystemBackupIdRoute,
  deleteApiV3TagIdRoute,
  getApiRoute,
  getApiV3AlttitleIdRoute,
  getApiV3AlttitleRoute,
  getApiV3AutotaggingIdRoute,
  getApiV3AutotaggingRoute,
  getApiV3AutotaggingSchemaRoute,
  getApiV3BlocklistMovieRoute,
  getApiV3BlocklistRoute,
  getApiV3CalendarRoute,
  getApiV3CollectionIdRoute,
  getApiV3CollectionRoute,
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
  getApiV3ConfigMetadataIdRoute,
  getApiV3ConfigMetadataRoute,
  getApiV3ConfigNamingExamplesRoute,
  getApiV3ConfigNamingIdRoute,
  getApiV3ConfigNamingRoute,
  getApiV3ConfigUiIdRoute,
  getApiV3ConfigUiRoute,
  getApiV3CreditIdRoute,
  getApiV3CreditRoute,
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
  getApiV3ExclusionsIdRoute,
  getApiV3ExclusionsPagedRoute,
  getApiV3ExclusionsRoute,
  getApiV3ExtrafileRoute,
  getApiV3FilesystemMediafilesRoute,
  getApiV3FilesystemRoute,
  getApiV3FilesystemTypeRoute,
  getApiV3HealthRoute,
  getApiV3HistoryMovieRoute,
  getApiV3HistoryRoute,
  getApiV3HistorySinceRoute,
  getApiV3ImportlistIdRoute,
  getApiV3ImportlistMovieRoute,
  getApiV3ImportlistRoute,
  getApiV3ImportlistSchemaRoute,
  getApiV3IndexerflagRoute,
  getApiV3IndexerIdRoute,
  getApiV3IndexerRoute,
  getApiV3IndexerSchemaRoute,
  getApiV3LanguageIdRoute,
  getApiV3LanguageRoute,
  getApiV3LocalizationLanguageRoute,
  getApiV3LocalizationRoute,
  getApiV3LogFileFilenameRoute,
  getApiV3LogFileRoute,
  getApiV3LogFileUpdateFilenameRoute,
  getApiV3LogFileUpdateRoute,
  getApiV3LogRoute,
  getApiV3ManualimportRoute,
  getApiV3MediacoverMovieIdFilenameRoute,
  getApiV3MetadataIdRoute,
  getApiV3MetadataRoute,
  getApiV3MetadataSchemaRoute,
  getApiV3MoviefileIdRoute,
  getApiV3MoviefileRoute,
  getApiV3MovieIdFolderRoute,
  getApiV3MovieIdRoute,
  getApiV3MovieLookupImdbRoute,
  getApiV3MovieLookupRoute,
  getApiV3MovieLookupTmdbRoute,
  getApiV3MovieRoute,
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
  getApiV3RenameRoute,
  getApiV3RootfolderIdRoute,
  getApiV3RootfolderRoute,
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
  getApiV3WantedCutoffRoute,
  getApiV3WantedMissingRoute,
  getContentPathRoute,
  getFeedV3CalendarRadarrIcsRoute,
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
  postApiV3ExclusionsBulkRoute,
  postApiV3ExclusionsRoute,
  postApiV3HistoryFailedIdRoute,
  postApiV3ImportlistActionNameRoute,
  postApiV3ImportlistMovieRoute,
  postApiV3ImportlistRoute,
  postApiV3ImportlistTestallRoute,
  postApiV3ImportlistTestRoute,
  postApiV3IndexerActionNameRoute,
  postApiV3IndexerRoute,
  postApiV3IndexerTestallRoute,
  postApiV3IndexerTestRoute,
  postApiV3ManualimportRoute,
  postApiV3MetadataActionNameRoute,
  postApiV3MetadataRoute,
  postApiV3MetadataTestallRoute,
  postApiV3MetadataTestRoute,
  postApiV3MovieImportRoute,
  postApiV3MovieRoute,
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
  postApiV3SystemBackupRestoreIdRoute,
  postApiV3SystemBackupRestoreUploadRoute,
  postApiV3SystemRestartRoute,
  postApiV3SystemShutdownRoute,
  postApiV3TagRoute,
  postLoginRoute,
  putApiV3AutotaggingIdRoute,
  putApiV3CollectionIdRoute,
  putApiV3CollectionRoute,
  putApiV3ConfigDownloadclientIdRoute,
  putApiV3ConfigHostIdRoute,
  putApiV3ConfigImportlistIdRoute,
  putApiV3ConfigIndexerIdRoute,
  putApiV3ConfigMediamanagementIdRoute,
  putApiV3ConfigMetadataIdRoute,
  putApiV3ConfigNamingIdRoute,
  putApiV3ConfigUiIdRoute,
  putApiV3CustomfilterIdRoute,
  putApiV3CustomformatBulkRoute,
  putApiV3CustomformatIdRoute,
  putApiV3DelayprofileIdRoute,
  putApiV3DelayprofileReorderIdRoute,
  putApiV3DownloadclientBulkRoute,
  putApiV3DownloadclientIdRoute,
  putApiV3ExclusionsIdRoute,
  putApiV3ImportlistBulkRoute,
  putApiV3ImportlistIdRoute,
  putApiV3IndexerBulkRoute,
  putApiV3IndexerIdRoute,
  putApiV3MetadataIdRoute,
  putApiV3MovieEditorRoute,
  putApiV3MoviefileBulkRoute,
  putApiV3MoviefileEditorRoute,
  putApiV3MoviefileIdRoute,
  putApiV3MovieIdRoute,
  putApiV3NotificationIdRoute,
  putApiV3QualitydefinitionIdRoute,
  putApiV3QualitydefinitionUpdateRoute,
  putApiV3QualityprofileIdRoute,
  putApiV3ReleaseprofileIdRoute,
  putApiV3RemotepathmappingIdRoute,
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
  deleteApiV3ExclusionsBulkRouteHandler,
  deleteApiV3ExclusionsIdRouteHandler,
  deleteApiV3ImportlistBulkRouteHandler,
  deleteApiV3ImportlistIdRouteHandler,
  deleteApiV3IndexerBulkRouteHandler,
  deleteApiV3IndexerIdRouteHandler,
  deleteApiV3MetadataIdRouteHandler,
  deleteApiV3MovieEditorRouteHandler,
  deleteApiV3MoviefileBulkRouteHandler,
  deleteApiV3MoviefileIdRouteHandler,
  deleteApiV3MovieIdRouteHandler,
  deleteApiV3NotificationIdRouteHandler,
  deleteApiV3QualityprofileIdRouteHandler,
  deleteApiV3QueueBulkRouteHandler,
  deleteApiV3QueueIdRouteHandler,
  deleteApiV3ReleaseprofileIdRouteHandler,
  deleteApiV3RemotepathmappingIdRouteHandler,
  deleteApiV3RootfolderIdRouteHandler,
  deleteApiV3SystemBackupIdRouteHandler,
  deleteApiV3TagIdRouteHandler,
  getApiRouteHandler,
  getApiV3AlttitleIdRouteHandler,
  getApiV3AlttitleRouteHandler,
  getApiV3AutotaggingIdRouteHandler,
  getApiV3AutotaggingRouteHandler,
  getApiV3AutotaggingSchemaRouteHandler,
  getApiV3BlocklistMovieRouteHandler,
  getApiV3BlocklistRouteHandler,
  getApiV3CalendarRouteHandler,
  getApiV3CollectionIdRouteHandler,
  getApiV3CollectionRouteHandler,
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
  getApiV3ConfigMetadataIdRouteHandler,
  getApiV3ConfigMetadataRouteHandler,
  getApiV3ConfigNamingExamplesRouteHandler,
  getApiV3ConfigNamingIdRouteHandler,
  getApiV3ConfigNamingRouteHandler,
  getApiV3ConfigUiIdRouteHandler,
  getApiV3ConfigUiRouteHandler,
  getApiV3CreditIdRouteHandler,
  getApiV3CreditRouteHandler,
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
  getApiV3ExclusionsIdRouteHandler,
  getApiV3ExclusionsPagedRouteHandler,
  getApiV3ExclusionsRouteHandler,
  getApiV3ExtrafileRouteHandler,
  getApiV3FilesystemMediafilesRouteHandler,
  getApiV3FilesystemRouteHandler,
  getApiV3FilesystemTypeRouteHandler,
  getApiV3HealthRouteHandler,
  getApiV3HistoryMovieRouteHandler,
  getApiV3HistoryRouteHandler,
  getApiV3HistorySinceRouteHandler,
  getApiV3ImportlistIdRouteHandler,
  getApiV3ImportlistMovieRouteHandler,
  getApiV3ImportlistRouteHandler,
  getApiV3ImportlistSchemaRouteHandler,
  getApiV3IndexerflagRouteHandler,
  getApiV3IndexerIdRouteHandler,
  getApiV3IndexerRouteHandler,
  getApiV3IndexerSchemaRouteHandler,
  getApiV3LanguageIdRouteHandler,
  getApiV3LanguageRouteHandler,
  getApiV3LocalizationLanguageRouteHandler,
  getApiV3LocalizationRouteHandler,
  getApiV3LogFileFilenameRouteHandler,
  getApiV3LogFileRouteHandler,
  getApiV3LogFileUpdateFilenameRouteHandler,
  getApiV3LogFileUpdateRouteHandler,
  getApiV3LogRouteHandler,
  getApiV3ManualimportRouteHandler,
  getApiV3MediacoverMovieIdFilenameRouteHandler,
  getApiV3MetadataIdRouteHandler,
  getApiV3MetadataRouteHandler,
  getApiV3MetadataSchemaRouteHandler,
  getApiV3MoviefileIdRouteHandler,
  getApiV3MoviefileRouteHandler,
  getApiV3MovieIdFolderRouteHandler,
  getApiV3MovieIdRouteHandler,
  getApiV3MovieLookupImdbRouteHandler,
  getApiV3MovieLookupRouteHandler,
  getApiV3MovieLookupTmdbRouteHandler,
  getApiV3MovieRouteHandler,
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
  getApiV3RenameRouteHandler,
  getApiV3RootfolderIdRouteHandler,
  getApiV3RootfolderRouteHandler,
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
  getApiV3WantedCutoffRouteHandler,
  getApiV3WantedMissingRouteHandler,
  getContentPathRouteHandler,
  getFeedV3CalendarRadarrIcsRouteHandler,
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
  postApiV3ExclusionsBulkRouteHandler,
  postApiV3ExclusionsRouteHandler,
  postApiV3HistoryFailedIdRouteHandler,
  postApiV3ImportlistActionNameRouteHandler,
  postApiV3ImportlistMovieRouteHandler,
  postApiV3ImportlistRouteHandler,
  postApiV3ImportlistTestallRouteHandler,
  postApiV3ImportlistTestRouteHandler,
  postApiV3IndexerActionNameRouteHandler,
  postApiV3IndexerRouteHandler,
  postApiV3IndexerTestallRouteHandler,
  postApiV3IndexerTestRouteHandler,
  postApiV3ManualimportRouteHandler,
  postApiV3MetadataActionNameRouteHandler,
  postApiV3MetadataRouteHandler,
  postApiV3MetadataTestallRouteHandler,
  postApiV3MetadataTestRouteHandler,
  postApiV3MovieImportRouteHandler,
  postApiV3MovieRouteHandler,
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
  postApiV3SystemBackupRestoreIdRouteHandler,
  postApiV3SystemBackupRestoreUploadRouteHandler,
  postApiV3SystemRestartRouteHandler,
  postApiV3SystemShutdownRouteHandler,
  postApiV3TagRouteHandler,
  postLoginRouteHandler,
  putApiV3AutotaggingIdRouteHandler,
  putApiV3CollectionIdRouteHandler,
  putApiV3CollectionRouteHandler,
  putApiV3ConfigDownloadclientIdRouteHandler,
  putApiV3ConfigHostIdRouteHandler,
  putApiV3ConfigImportlistIdRouteHandler,
  putApiV3ConfigIndexerIdRouteHandler,
  putApiV3ConfigMediamanagementIdRouteHandler,
  putApiV3ConfigMetadataIdRouteHandler,
  putApiV3ConfigNamingIdRouteHandler,
  putApiV3ConfigUiIdRouteHandler,
  putApiV3CustomfilterIdRouteHandler,
  putApiV3CustomformatBulkRouteHandler,
  putApiV3CustomformatIdRouteHandler,
  putApiV3DelayprofileIdRouteHandler,
  putApiV3DelayprofileReorderIdRouteHandler,
  putApiV3DownloadclientBulkRouteHandler,
  putApiV3DownloadclientIdRouteHandler,
  putApiV3ExclusionsIdRouteHandler,
  putApiV3ImportlistBulkRouteHandler,
  putApiV3ImportlistIdRouteHandler,
  putApiV3IndexerBulkRouteHandler,
  putApiV3IndexerIdRouteHandler,
  putApiV3MetadataIdRouteHandler,
  putApiV3MovieEditorRouteHandler,
  putApiV3MoviefileBulkRouteHandler,
  putApiV3MoviefileEditorRouteHandler,
  putApiV3MoviefileIdRouteHandler,
  putApiV3MovieIdRouteHandler,
  putApiV3NotificationIdRouteHandler,
  putApiV3QualitydefinitionIdRouteHandler,
  putApiV3QualitydefinitionUpdateRouteHandler,
  putApiV3QualityprofileIdRouteHandler,
  putApiV3ReleaseprofileIdRouteHandler,
  putApiV3RemotepathmappingIdRouteHandler,
  putApiV3TagIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV3AlttitleRoute, getApiV3AlttitleRouteHandler)
  .openapi(getApiV3AlttitleIdRoute, getApiV3AlttitleIdRouteHandler)
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getLoginSsoRoute, getLoginSsoRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getLoginRoute, getLoginRouteHandler)
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
  .openapi(getApiV3BlocklistMovieRoute, getApiV3BlocklistMovieRouteHandler)
  .openapi(deleteApiV3BlocklistIdRoute, deleteApiV3BlocklistIdRouteHandler)
  .openapi(deleteApiV3BlocklistBulkRoute, deleteApiV3BlocklistBulkRouteHandler)
  .openapi(getApiV3CalendarRoute, getApiV3CalendarRouteHandler)
  .openapi(getFeedV3CalendarRadarrIcsRoute, getFeedV3CalendarRadarrIcsRouteHandler)
  .openapi(getApiV3CollectionRoute, getApiV3CollectionRouteHandler)
  .openapi(putApiV3CollectionRoute, putApiV3CollectionRouteHandler)
  .openapi(putApiV3CollectionIdRoute, putApiV3CollectionIdRouteHandler)
  .openapi(getApiV3CollectionIdRoute, getApiV3CollectionIdRouteHandler)
  .openapi(postApiV3CommandRoute, postApiV3CommandRouteHandler)
  .openapi(getApiV3CommandRoute, getApiV3CommandRouteHandler)
  .openapi(deleteApiV3CommandIdRoute, deleteApiV3CommandIdRouteHandler)
  .openapi(getApiV3CommandIdRoute, getApiV3CommandIdRouteHandler)
  .openapi(getApiV3CreditRoute, getApiV3CreditRouteHandler)
  .openapi(getApiV3CreditIdRoute, getApiV3CreditIdRouteHandler)
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
  .openapi(getApiV3ExtrafileRoute, getApiV3ExtrafileRouteHandler)
  .openapi(getApiV3FilesystemRoute, getApiV3FilesystemRouteHandler)
  .openapi(getApiV3FilesystemTypeRoute, getApiV3FilesystemTypeRouteHandler)
  .openapi(getApiV3FilesystemMediafilesRoute, getApiV3FilesystemMediafilesRouteHandler)
  .openapi(getApiV3HealthRoute, getApiV3HealthRouteHandler)
  .openapi(getApiV3HistoryRoute, getApiV3HistoryRouteHandler)
  .openapi(getApiV3HistorySinceRoute, getApiV3HistorySinceRouteHandler)
  .openapi(getApiV3HistoryMovieRoute, getApiV3HistoryMovieRouteHandler)
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
  .openapi(getApiV3ExclusionsRoute, getApiV3ExclusionsRouteHandler)
  .openapi(postApiV3ExclusionsRoute, postApiV3ExclusionsRouteHandler)
  .openapi(getApiV3ExclusionsPagedRoute, getApiV3ExclusionsPagedRouteHandler)
  .openapi(putApiV3ExclusionsIdRoute, putApiV3ExclusionsIdRouteHandler)
  .openapi(deleteApiV3ExclusionsIdRoute, deleteApiV3ExclusionsIdRouteHandler)
  .openapi(getApiV3ExclusionsIdRoute, getApiV3ExclusionsIdRouteHandler)
  .openapi(postApiV3ExclusionsBulkRoute, postApiV3ExclusionsBulkRouteHandler)
  .openapi(deleteApiV3ExclusionsBulkRoute, deleteApiV3ExclusionsBulkRouteHandler)
  .openapi(getApiV3ImportlistMovieRoute, getApiV3ImportlistMovieRouteHandler)
  .openapi(postApiV3ImportlistMovieRoute, postApiV3ImportlistMovieRouteHandler)
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
  .openapi(getApiV3LocalizationRoute, getApiV3LocalizationRouteHandler)
  .openapi(getApiV3LocalizationLanguageRoute, getApiV3LocalizationLanguageRouteHandler)
  .openapi(getApiV3LogRoute, getApiV3LogRouteHandler)
  .openapi(getApiV3LogFileRoute, getApiV3LogFileRouteHandler)
  .openapi(getApiV3LogFileFilenameRoute, getApiV3LogFileFilenameRouteHandler)
  .openapi(getApiV3ManualimportRoute, getApiV3ManualimportRouteHandler)
  .openapi(postApiV3ManualimportRoute, postApiV3ManualimportRouteHandler)
  .openapi(getApiV3MediacoverMovieIdFilenameRoute, getApiV3MediacoverMovieIdFilenameRouteHandler)
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
  .openapi(getApiV3ConfigMetadataRoute, getApiV3ConfigMetadataRouteHandler)
  .openapi(putApiV3ConfigMetadataIdRoute, putApiV3ConfigMetadataIdRouteHandler)
  .openapi(getApiV3ConfigMetadataIdRoute, getApiV3ConfigMetadataIdRouteHandler)
  .openapi(getApiV3WantedMissingRoute, getApiV3WantedMissingRouteHandler)
  .openapi(getApiV3MovieRoute, getApiV3MovieRouteHandler)
  .openapi(postApiV3MovieRoute, postApiV3MovieRouteHandler)
  .openapi(putApiV3MovieIdRoute, putApiV3MovieIdRouteHandler)
  .openapi(deleteApiV3MovieIdRoute, deleteApiV3MovieIdRouteHandler)
  .openapi(getApiV3MovieIdRoute, getApiV3MovieIdRouteHandler)
  .openapi(putApiV3MovieEditorRoute, putApiV3MovieEditorRouteHandler)
  .openapi(deleteApiV3MovieEditorRoute, deleteApiV3MovieEditorRouteHandler)
  .openapi(getApiV3MoviefileRoute, getApiV3MoviefileRouteHandler)
  .openapi(putApiV3MoviefileIdRoute, putApiV3MoviefileIdRouteHandler)
  .openapi(deleteApiV3MoviefileIdRoute, deleteApiV3MoviefileIdRouteHandler)
  .openapi(getApiV3MoviefileIdRoute, getApiV3MoviefileIdRouteHandler)
  .openapi(putApiV3MoviefileEditorRoute, putApiV3MoviefileEditorRouteHandler)
  .openapi(deleteApiV3MoviefileBulkRoute, deleteApiV3MoviefileBulkRouteHandler)
  .openapi(putApiV3MoviefileBulkRoute, putApiV3MoviefileBulkRouteHandler)
  .openapi(getApiV3MovieIdFolderRoute, getApiV3MovieIdFolderRouteHandler)
  .openapi(postApiV3MovieImportRoute, postApiV3MovieImportRouteHandler)
  .openapi(getApiV3MovieLookupTmdbRoute, getApiV3MovieLookupTmdbRouteHandler)
  .openapi(getApiV3MovieLookupImdbRoute, getApiV3MovieLookupImdbRouteHandler)
  .openapi(getApiV3MovieLookupRoute, getApiV3MovieLookupRouteHandler)
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
  .openapi(postApiV3RootfolderRoute, postApiV3RootfolderRouteHandler)
  .openapi(getApiV3RootfolderRoute, getApiV3RootfolderRouteHandler)
  .openapi(deleteApiV3RootfolderIdRoute, deleteApiV3RootfolderIdRouteHandler)
  .openapi(getApiV3RootfolderIdRoute, getApiV3RootfolderIdRouteHandler)
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

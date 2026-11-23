import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AlbumIdRoute,
  deleteApiV1ArtistEditorRoute,
  deleteApiV1ArtistIdRoute,
  deleteApiV1AutotaggingIdRoute,
  deleteApiV1BlocklistBulkRoute,
  deleteApiV1BlocklistIdRoute,
  deleteApiV1CommandIdRoute,
  deleteApiV1CustomfilterIdRoute,
  deleteApiV1CustomformatBulkRoute,
  deleteApiV1CustomformatIdRoute,
  deleteApiV1DelayprofileIdRoute,
  deleteApiV1DownloadclientBulkRoute,
  deleteApiV1DownloadclientIdRoute,
  deleteApiV1ImportlistBulkRoute,
  deleteApiV1ImportlistexclusionIdRoute,
  deleteApiV1ImportlistIdRoute,
  deleteApiV1IndexerBulkRoute,
  deleteApiV1IndexerIdRoute,
  deleteApiV1MetadataIdRoute,
  deleteApiV1MetadataprofileIdRoute,
  deleteApiV1NotificationIdRoute,
  deleteApiV1QualityprofileIdRoute,
  deleteApiV1QueueBulkRoute,
  deleteApiV1QueueIdRoute,
  deleteApiV1ReleaseprofileIdRoute,
  deleteApiV1RemotepathmappingIdRoute,
  deleteApiV1RootfolderIdRoute,
  deleteApiV1SystemBackupIdRoute,
  deleteApiV1TagIdRoute,
  deleteApiV1TrackfileBulkRoute,
  deleteApiV1TrackfileIdRoute,
  getApiRoute,
  getApiV1AlbumIdRoute,
  getApiV1AlbumLookupRoute,
  getApiV1AlbumRoute,
  getApiV1ArtistIdRoute,
  getApiV1ArtistLookupRoute,
  getApiV1ArtistRoute,
  getApiV1AutotaggingIdRoute,
  getApiV1AutotaggingRoute,
  getApiV1AutotaggingSchemaRoute,
  getApiV1BlocklistRoute,
  getApiV1CalendarIdRoute,
  getApiV1CalendarRoute,
  getApiV1CommandIdRoute,
  getApiV1CommandRoute,
  getApiV1ConfigDownloadclientIdRoute,
  getApiV1ConfigDownloadclientRoute,
  getApiV1ConfigHostIdRoute,
  getApiV1ConfigHostRoute,
  getApiV1ConfigIndexerIdRoute,
  getApiV1ConfigIndexerRoute,
  getApiV1ConfigMediamanagementIdRoute,
  getApiV1ConfigMediamanagementRoute,
  getApiV1ConfigMetadataproviderIdRoute,
  getApiV1ConfigMetadataproviderRoute,
  getApiV1ConfigNamingExamplesRoute,
  getApiV1ConfigNamingIdRoute,
  getApiV1ConfigNamingRoute,
  getApiV1ConfigUiIdRoute,
  getApiV1ConfigUiRoute,
  getApiV1CustomfilterIdRoute,
  getApiV1CustomfilterRoute,
  getApiV1CustomformatIdRoute,
  getApiV1CustomformatRoute,
  getApiV1CustomformatSchemaRoute,
  getApiV1DelayprofileIdRoute,
  getApiV1DelayprofileRoute,
  getApiV1DiskspaceRoute,
  getApiV1DownloadclientIdRoute,
  getApiV1DownloadclientRoute,
  getApiV1DownloadclientSchemaRoute,
  getApiV1FilesystemMediafilesRoute,
  getApiV1FilesystemRoute,
  getApiV1FilesystemTypeRoute,
  getApiV1HealthRoute,
  getApiV1HistoryArtistRoute,
  getApiV1HistoryRoute,
  getApiV1HistorySinceRoute,
  getApiV1ImportlistexclusionIdRoute,
  getApiV1ImportlistexclusionRoute,
  getApiV1ImportlistIdRoute,
  getApiV1ImportlistRoute,
  getApiV1ImportlistSchemaRoute,
  getApiV1IndexerflagRoute,
  getApiV1IndexerIdRoute,
  getApiV1IndexerRoute,
  getApiV1IndexerSchemaRoute,
  getApiV1LanguageIdRoute,
  getApiV1LanguageRoute,
  getApiV1LocalizationRoute,
  getApiV1LogFileFilenameRoute,
  getApiV1LogFileRoute,
  getApiV1LogFileUpdateFilenameRoute,
  getApiV1LogFileUpdateRoute,
  getApiV1LogRoute,
  getApiV1ManualimportRoute,
  getApiV1MediacoverAlbumAlbumIdFilenameRoute,
  getApiV1MediacoverArtistArtistIdFilenameRoute,
  getApiV1MetadataIdRoute,
  getApiV1MetadataprofileIdRoute,
  getApiV1MetadataprofileRoute,
  getApiV1MetadataprofileSchemaRoute,
  getApiV1MetadataRoute,
  getApiV1MetadataSchemaRoute,
  getApiV1NotificationIdRoute,
  getApiV1NotificationRoute,
  getApiV1NotificationSchemaRoute,
  getApiV1ParseRoute,
  getApiV1QualitydefinitionIdRoute,
  getApiV1QualitydefinitionRoute,
  getApiV1QualityprofileIdRoute,
  getApiV1QualityprofileRoute,
  getApiV1QualityprofileSchemaRoute,
  getApiV1QueueDetailsRoute,
  getApiV1QueueRoute,
  getApiV1QueueStatusRoute,
  getApiV1ReleaseprofileIdRoute,
  getApiV1ReleaseprofileRoute,
  getApiV1ReleaseRoute,
  getApiV1RemotepathmappingIdRoute,
  getApiV1RemotepathmappingRoute,
  getApiV1RenameRoute,
  getApiV1RetagRoute,
  getApiV1RootfolderIdRoute,
  getApiV1RootfolderRoute,
  getApiV1SearchRoute,
  getApiV1SystemBackupRoute,
  getApiV1SystemRoutesDuplicateRoute,
  getApiV1SystemRoutesRoute,
  getApiV1SystemStatusRoute,
  getApiV1SystemTaskIdRoute,
  getApiV1SystemTaskRoute,
  getApiV1TagDetailIdRoute,
  getApiV1TagDetailRoute,
  getApiV1TagIdRoute,
  getApiV1TagRoute,
  getApiV1TrackfileIdRoute,
  getApiV1TrackfileRoute,
  getApiV1TrackIdRoute,
  getApiV1TrackRoute,
  getApiV1UpdateRoute,
  getApiV1WantedCutoffIdRoute,
  getApiV1WantedCutoffRoute,
  getApiV1WantedMissingIdRoute,
  getApiV1WantedMissingRoute,
  getContentPathRoute,
  getFeedV1CalendarLidarrIcsRoute,
  getLoginRoute,
  getLogoutRoute,
  getPathRoute,
  getPingRoute,
  getRoute,
  headPingRoute,
  postApiV1AlbumRoute,
  postApiV1AlbumstudioRoute,
  postApiV1ArtistRoute,
  postApiV1AutotaggingRoute,
  postApiV1CommandRoute,
  postApiV1CustomfilterRoute,
  postApiV1CustomformatRoute,
  postApiV1DelayprofileRoute,
  postApiV1DownloadclientActionNameRoute,
  postApiV1DownloadclientRoute,
  postApiV1DownloadclientTestallRoute,
  postApiV1DownloadclientTestRoute,
  postApiV1HistoryFailedIdRoute,
  postApiV1ImportlistActionNameRoute,
  postApiV1ImportlistexclusionRoute,
  postApiV1ImportlistRoute,
  postApiV1ImportlistTestallRoute,
  postApiV1ImportlistTestRoute,
  postApiV1IndexerActionNameRoute,
  postApiV1IndexerRoute,
  postApiV1IndexerTestallRoute,
  postApiV1IndexerTestRoute,
  postApiV1ManualimportRoute,
  postApiV1MetadataActionNameRoute,
  postApiV1MetadataprofileRoute,
  postApiV1MetadataRoute,
  postApiV1MetadataTestallRoute,
  postApiV1MetadataTestRoute,
  postApiV1NotificationActionNameRoute,
  postApiV1NotificationRoute,
  postApiV1NotificationTestallRoute,
  postApiV1NotificationTestRoute,
  postApiV1QualityprofileRoute,
  postApiV1QueueGrabBulkRoute,
  postApiV1QueueGrabIdRoute,
  postApiV1ReleaseprofileRoute,
  postApiV1ReleasePushRoute,
  postApiV1ReleaseRoute,
  postApiV1RemotepathmappingRoute,
  postApiV1RootfolderRoute,
  postApiV1SystemBackupRestoreIdRoute,
  postApiV1SystemBackupRestoreUploadRoute,
  postApiV1SystemRestartRoute,
  postApiV1SystemShutdownRoute,
  postApiV1TagRoute,
  postLoginRoute,
  putApiV1AlbumIdRoute,
  putApiV1AlbumMonitorRoute,
  putApiV1ArtistEditorRoute,
  putApiV1ArtistIdRoute,
  putApiV1AutotaggingIdRoute,
  putApiV1ConfigDownloadclientIdRoute,
  putApiV1ConfigHostIdRoute,
  putApiV1ConfigIndexerIdRoute,
  putApiV1ConfigMediamanagementIdRoute,
  putApiV1ConfigMetadataproviderIdRoute,
  putApiV1ConfigNamingIdRoute,
  putApiV1ConfigUiIdRoute,
  putApiV1CustomfilterIdRoute,
  putApiV1CustomformatBulkRoute,
  putApiV1CustomformatIdRoute,
  putApiV1DelayprofileIdRoute,
  putApiV1DelayprofileReorderIdRoute,
  putApiV1DownloadclientBulkRoute,
  putApiV1DownloadclientIdRoute,
  putApiV1ImportlistBulkRoute,
  putApiV1ImportlistexclusionIdRoute,
  putApiV1ImportlistIdRoute,
  putApiV1IndexerBulkRoute,
  putApiV1IndexerIdRoute,
  putApiV1MetadataIdRoute,
  putApiV1MetadataprofileIdRoute,
  putApiV1NotificationIdRoute,
  putApiV1QualitydefinitionIdRoute,
  putApiV1QualitydefinitionUpdateRoute,
  putApiV1QualityprofileIdRoute,
  putApiV1ReleaseprofileIdRoute,
  putApiV1RemotepathmappingIdRoute,
  putApiV1RootfolderIdRoute,
  putApiV1TagIdRoute,
  putApiV1TrackfileEditorRoute,
  putApiV1TrackfileIdRoute,
} from './routes'
import {
  deleteApiV1AlbumIdRouteHandler,
  deleteApiV1ArtistEditorRouteHandler,
  deleteApiV1ArtistIdRouteHandler,
  deleteApiV1AutotaggingIdRouteHandler,
  deleteApiV1BlocklistBulkRouteHandler,
  deleteApiV1BlocklistIdRouteHandler,
  deleteApiV1CommandIdRouteHandler,
  deleteApiV1CustomfilterIdRouteHandler,
  deleteApiV1CustomformatBulkRouteHandler,
  deleteApiV1CustomformatIdRouteHandler,
  deleteApiV1DelayprofileIdRouteHandler,
  deleteApiV1DownloadclientBulkRouteHandler,
  deleteApiV1DownloadclientIdRouteHandler,
  deleteApiV1ImportlistBulkRouteHandler,
  deleteApiV1ImportlistexclusionIdRouteHandler,
  deleteApiV1ImportlistIdRouteHandler,
  deleteApiV1IndexerBulkRouteHandler,
  deleteApiV1IndexerIdRouteHandler,
  deleteApiV1MetadataIdRouteHandler,
  deleteApiV1MetadataprofileIdRouteHandler,
  deleteApiV1NotificationIdRouteHandler,
  deleteApiV1QualityprofileIdRouteHandler,
  deleteApiV1QueueBulkRouteHandler,
  deleteApiV1QueueIdRouteHandler,
  deleteApiV1ReleaseprofileIdRouteHandler,
  deleteApiV1RemotepathmappingIdRouteHandler,
  deleteApiV1RootfolderIdRouteHandler,
  deleteApiV1SystemBackupIdRouteHandler,
  deleteApiV1TagIdRouteHandler,
  deleteApiV1TrackfileBulkRouteHandler,
  deleteApiV1TrackfileIdRouteHandler,
  getApiRouteHandler,
  getApiV1AlbumIdRouteHandler,
  getApiV1AlbumLookupRouteHandler,
  getApiV1AlbumRouteHandler,
  getApiV1ArtistIdRouteHandler,
  getApiV1ArtistLookupRouteHandler,
  getApiV1ArtistRouteHandler,
  getApiV1AutotaggingIdRouteHandler,
  getApiV1AutotaggingRouteHandler,
  getApiV1AutotaggingSchemaRouteHandler,
  getApiV1BlocklistRouteHandler,
  getApiV1CalendarIdRouteHandler,
  getApiV1CalendarRouteHandler,
  getApiV1CommandIdRouteHandler,
  getApiV1CommandRouteHandler,
  getApiV1ConfigDownloadclientIdRouteHandler,
  getApiV1ConfigDownloadclientRouteHandler,
  getApiV1ConfigHostIdRouteHandler,
  getApiV1ConfigHostRouteHandler,
  getApiV1ConfigIndexerIdRouteHandler,
  getApiV1ConfigIndexerRouteHandler,
  getApiV1ConfigMediamanagementIdRouteHandler,
  getApiV1ConfigMediamanagementRouteHandler,
  getApiV1ConfigMetadataproviderIdRouteHandler,
  getApiV1ConfigMetadataproviderRouteHandler,
  getApiV1ConfigNamingExamplesRouteHandler,
  getApiV1ConfigNamingIdRouteHandler,
  getApiV1ConfigNamingRouteHandler,
  getApiV1ConfigUiIdRouteHandler,
  getApiV1ConfigUiRouteHandler,
  getApiV1CustomfilterIdRouteHandler,
  getApiV1CustomfilterRouteHandler,
  getApiV1CustomformatIdRouteHandler,
  getApiV1CustomformatRouteHandler,
  getApiV1CustomformatSchemaRouteHandler,
  getApiV1DelayprofileIdRouteHandler,
  getApiV1DelayprofileRouteHandler,
  getApiV1DiskspaceRouteHandler,
  getApiV1DownloadclientIdRouteHandler,
  getApiV1DownloadclientRouteHandler,
  getApiV1DownloadclientSchemaRouteHandler,
  getApiV1FilesystemMediafilesRouteHandler,
  getApiV1FilesystemRouteHandler,
  getApiV1FilesystemTypeRouteHandler,
  getApiV1HealthRouteHandler,
  getApiV1HistoryArtistRouteHandler,
  getApiV1HistoryRouteHandler,
  getApiV1HistorySinceRouteHandler,
  getApiV1ImportlistexclusionIdRouteHandler,
  getApiV1ImportlistexclusionRouteHandler,
  getApiV1ImportlistIdRouteHandler,
  getApiV1ImportlistRouteHandler,
  getApiV1ImportlistSchemaRouteHandler,
  getApiV1IndexerflagRouteHandler,
  getApiV1IndexerIdRouteHandler,
  getApiV1IndexerRouteHandler,
  getApiV1IndexerSchemaRouteHandler,
  getApiV1LanguageIdRouteHandler,
  getApiV1LanguageRouteHandler,
  getApiV1LocalizationRouteHandler,
  getApiV1LogFileFilenameRouteHandler,
  getApiV1LogFileRouteHandler,
  getApiV1LogFileUpdateFilenameRouteHandler,
  getApiV1LogFileUpdateRouteHandler,
  getApiV1LogRouteHandler,
  getApiV1ManualimportRouteHandler,
  getApiV1MediacoverAlbumAlbumIdFilenameRouteHandler,
  getApiV1MediacoverArtistArtistIdFilenameRouteHandler,
  getApiV1MetadataIdRouteHandler,
  getApiV1MetadataprofileIdRouteHandler,
  getApiV1MetadataprofileRouteHandler,
  getApiV1MetadataprofileSchemaRouteHandler,
  getApiV1MetadataRouteHandler,
  getApiV1MetadataSchemaRouteHandler,
  getApiV1NotificationIdRouteHandler,
  getApiV1NotificationRouteHandler,
  getApiV1NotificationSchemaRouteHandler,
  getApiV1ParseRouteHandler,
  getApiV1QualitydefinitionIdRouteHandler,
  getApiV1QualitydefinitionRouteHandler,
  getApiV1QualityprofileIdRouteHandler,
  getApiV1QualityprofileRouteHandler,
  getApiV1QualityprofileSchemaRouteHandler,
  getApiV1QueueDetailsRouteHandler,
  getApiV1QueueRouteHandler,
  getApiV1QueueStatusRouteHandler,
  getApiV1ReleaseprofileIdRouteHandler,
  getApiV1ReleaseprofileRouteHandler,
  getApiV1ReleaseRouteHandler,
  getApiV1RemotepathmappingIdRouteHandler,
  getApiV1RemotepathmappingRouteHandler,
  getApiV1RenameRouteHandler,
  getApiV1RetagRouteHandler,
  getApiV1RootfolderIdRouteHandler,
  getApiV1RootfolderRouteHandler,
  getApiV1SearchRouteHandler,
  getApiV1SystemBackupRouteHandler,
  getApiV1SystemRoutesDuplicateRouteHandler,
  getApiV1SystemRoutesRouteHandler,
  getApiV1SystemStatusRouteHandler,
  getApiV1SystemTaskIdRouteHandler,
  getApiV1SystemTaskRouteHandler,
  getApiV1TagDetailIdRouteHandler,
  getApiV1TagDetailRouteHandler,
  getApiV1TagIdRouteHandler,
  getApiV1TagRouteHandler,
  getApiV1TrackfileIdRouteHandler,
  getApiV1TrackfileRouteHandler,
  getApiV1TrackIdRouteHandler,
  getApiV1TrackRouteHandler,
  getApiV1UpdateRouteHandler,
  getApiV1WantedCutoffIdRouteHandler,
  getApiV1WantedCutoffRouteHandler,
  getApiV1WantedMissingIdRouteHandler,
  getApiV1WantedMissingRouteHandler,
  getContentPathRouteHandler,
  getFeedV1CalendarLidarrIcsRouteHandler,
  getLoginRouteHandler,
  getLogoutRouteHandler,
  getPathRouteHandler,
  getPingRouteHandler,
  getRouteHandler,
  headPingRouteHandler,
  postApiV1AlbumRouteHandler,
  postApiV1AlbumstudioRouteHandler,
  postApiV1ArtistRouteHandler,
  postApiV1AutotaggingRouteHandler,
  postApiV1CommandRouteHandler,
  postApiV1CustomfilterRouteHandler,
  postApiV1CustomformatRouteHandler,
  postApiV1DelayprofileRouteHandler,
  postApiV1DownloadclientActionNameRouteHandler,
  postApiV1DownloadclientRouteHandler,
  postApiV1DownloadclientTestallRouteHandler,
  postApiV1DownloadclientTestRouteHandler,
  postApiV1HistoryFailedIdRouteHandler,
  postApiV1ImportlistActionNameRouteHandler,
  postApiV1ImportlistexclusionRouteHandler,
  postApiV1ImportlistRouteHandler,
  postApiV1ImportlistTestallRouteHandler,
  postApiV1ImportlistTestRouteHandler,
  postApiV1IndexerActionNameRouteHandler,
  postApiV1IndexerRouteHandler,
  postApiV1IndexerTestallRouteHandler,
  postApiV1IndexerTestRouteHandler,
  postApiV1ManualimportRouteHandler,
  postApiV1MetadataActionNameRouteHandler,
  postApiV1MetadataprofileRouteHandler,
  postApiV1MetadataRouteHandler,
  postApiV1MetadataTestallRouteHandler,
  postApiV1MetadataTestRouteHandler,
  postApiV1NotificationActionNameRouteHandler,
  postApiV1NotificationRouteHandler,
  postApiV1NotificationTestallRouteHandler,
  postApiV1NotificationTestRouteHandler,
  postApiV1QualityprofileRouteHandler,
  postApiV1QueueGrabBulkRouteHandler,
  postApiV1QueueGrabIdRouteHandler,
  postApiV1ReleaseprofileRouteHandler,
  postApiV1ReleasePushRouteHandler,
  postApiV1ReleaseRouteHandler,
  postApiV1RemotepathmappingRouteHandler,
  postApiV1RootfolderRouteHandler,
  postApiV1SystemBackupRestoreIdRouteHandler,
  postApiV1SystemBackupRestoreUploadRouteHandler,
  postApiV1SystemRestartRouteHandler,
  postApiV1SystemShutdownRouteHandler,
  postApiV1TagRouteHandler,
  postLoginRouteHandler,
  putApiV1AlbumIdRouteHandler,
  putApiV1AlbumMonitorRouteHandler,
  putApiV1ArtistEditorRouteHandler,
  putApiV1ArtistIdRouteHandler,
  putApiV1AutotaggingIdRouteHandler,
  putApiV1ConfigDownloadclientIdRouteHandler,
  putApiV1ConfigHostIdRouteHandler,
  putApiV1ConfigIndexerIdRouteHandler,
  putApiV1ConfigMediamanagementIdRouteHandler,
  putApiV1ConfigMetadataproviderIdRouteHandler,
  putApiV1ConfigNamingIdRouteHandler,
  putApiV1ConfigUiIdRouteHandler,
  putApiV1CustomfilterIdRouteHandler,
  putApiV1CustomformatBulkRouteHandler,
  putApiV1CustomformatIdRouteHandler,
  putApiV1DelayprofileIdRouteHandler,
  putApiV1DelayprofileReorderIdRouteHandler,
  putApiV1DownloadclientBulkRouteHandler,
  putApiV1DownloadclientIdRouteHandler,
  putApiV1ImportlistBulkRouteHandler,
  putApiV1ImportlistexclusionIdRouteHandler,
  putApiV1ImportlistIdRouteHandler,
  putApiV1IndexerBulkRouteHandler,
  putApiV1IndexerIdRouteHandler,
  putApiV1MetadataIdRouteHandler,
  putApiV1MetadataprofileIdRouteHandler,
  putApiV1NotificationIdRouteHandler,
  putApiV1QualitydefinitionIdRouteHandler,
  putApiV1QualitydefinitionUpdateRouteHandler,
  putApiV1QualityprofileIdRouteHandler,
  putApiV1ReleaseprofileIdRouteHandler,
  putApiV1RemotepathmappingIdRouteHandler,
  putApiV1RootfolderIdRouteHandler,
  putApiV1TagIdRouteHandler,
  putApiV1TrackfileEditorRouteHandler,
  putApiV1TrackfileIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1AlbumRoute, getApiV1AlbumRouteHandler)
  .openapi(postApiV1AlbumRoute, postApiV1AlbumRouteHandler)
  .openapi(putApiV1AlbumIdRoute, putApiV1AlbumIdRouteHandler)
  .openapi(deleteApiV1AlbumIdRoute, deleteApiV1AlbumIdRouteHandler)
  .openapi(getApiV1AlbumIdRoute, getApiV1AlbumIdRouteHandler)
  .openapi(putApiV1AlbumMonitorRoute, putApiV1AlbumMonitorRouteHandler)
  .openapi(getApiV1AlbumLookupRoute, getApiV1AlbumLookupRouteHandler)
  .openapi(postApiV1AlbumstudioRoute, postApiV1AlbumstudioRouteHandler)
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getApiV1ArtistIdRoute, getApiV1ArtistIdRouteHandler)
  .openapi(putApiV1ArtistIdRoute, putApiV1ArtistIdRouteHandler)
  .openapi(deleteApiV1ArtistIdRoute, deleteApiV1ArtistIdRouteHandler)
  .openapi(getApiV1ArtistRoute, getApiV1ArtistRouteHandler)
  .openapi(postApiV1ArtistRoute, postApiV1ArtistRouteHandler)
  .openapi(putApiV1ArtistEditorRoute, putApiV1ArtistEditorRouteHandler)
  .openapi(deleteApiV1ArtistEditorRoute, deleteApiV1ArtistEditorRouteHandler)
  .openapi(getApiV1ArtistLookupRoute, getApiV1ArtistLookupRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getLoginRoute, getLoginRouteHandler)
  .openapi(getLogoutRoute, getLogoutRouteHandler)
  .openapi(getApiV1AutotaggingIdRoute, getApiV1AutotaggingIdRouteHandler)
  .openapi(putApiV1AutotaggingIdRoute, putApiV1AutotaggingIdRouteHandler)
  .openapi(deleteApiV1AutotaggingIdRoute, deleteApiV1AutotaggingIdRouteHandler)
  .openapi(postApiV1AutotaggingRoute, postApiV1AutotaggingRouteHandler)
  .openapi(getApiV1AutotaggingRoute, getApiV1AutotaggingRouteHandler)
  .openapi(getApiV1AutotaggingSchemaRoute, getApiV1AutotaggingSchemaRouteHandler)
  .openapi(getApiV1SystemBackupRoute, getApiV1SystemBackupRouteHandler)
  .openapi(deleteApiV1SystemBackupIdRoute, deleteApiV1SystemBackupIdRouteHandler)
  .openapi(postApiV1SystemBackupRestoreIdRoute, postApiV1SystemBackupRestoreIdRouteHandler)
  .openapi(postApiV1SystemBackupRestoreUploadRoute, postApiV1SystemBackupRestoreUploadRouteHandler)
  .openapi(getApiV1BlocklistRoute, getApiV1BlocklistRouteHandler)
  .openapi(deleteApiV1BlocklistIdRoute, deleteApiV1BlocklistIdRouteHandler)
  .openapi(deleteApiV1BlocklistBulkRoute, deleteApiV1BlocklistBulkRouteHandler)
  .openapi(getApiV1CalendarRoute, getApiV1CalendarRouteHandler)
  .openapi(getApiV1CalendarIdRoute, getApiV1CalendarIdRouteHandler)
  .openapi(getFeedV1CalendarLidarrIcsRoute, getFeedV1CalendarLidarrIcsRouteHandler)
  .openapi(getApiV1CommandIdRoute, getApiV1CommandIdRouteHandler)
  .openapi(deleteApiV1CommandIdRoute, deleteApiV1CommandIdRouteHandler)
  .openapi(postApiV1CommandRoute, postApiV1CommandRouteHandler)
  .openapi(getApiV1CommandRoute, getApiV1CommandRouteHandler)
  .openapi(getApiV1CustomfilterIdRoute, getApiV1CustomfilterIdRouteHandler)
  .openapi(putApiV1CustomfilterIdRoute, putApiV1CustomfilterIdRouteHandler)
  .openapi(deleteApiV1CustomfilterIdRoute, deleteApiV1CustomfilterIdRouteHandler)
  .openapi(getApiV1CustomfilterRoute, getApiV1CustomfilterRouteHandler)
  .openapi(postApiV1CustomfilterRoute, postApiV1CustomfilterRouteHandler)
  .openapi(getApiV1CustomformatIdRoute, getApiV1CustomformatIdRouteHandler)
  .openapi(putApiV1CustomformatIdRoute, putApiV1CustomformatIdRouteHandler)
  .openapi(deleteApiV1CustomformatIdRoute, deleteApiV1CustomformatIdRouteHandler)
  .openapi(getApiV1CustomformatRoute, getApiV1CustomformatRouteHandler)
  .openapi(postApiV1CustomformatRoute, postApiV1CustomformatRouteHandler)
  .openapi(putApiV1CustomformatBulkRoute, putApiV1CustomformatBulkRouteHandler)
  .openapi(deleteApiV1CustomformatBulkRoute, deleteApiV1CustomformatBulkRouteHandler)
  .openapi(getApiV1CustomformatSchemaRoute, getApiV1CustomformatSchemaRouteHandler)
  .openapi(getApiV1WantedCutoffRoute, getApiV1WantedCutoffRouteHandler)
  .openapi(getApiV1WantedCutoffIdRoute, getApiV1WantedCutoffIdRouteHandler)
  .openapi(postApiV1DelayprofileRoute, postApiV1DelayprofileRouteHandler)
  .openapi(getApiV1DelayprofileRoute, getApiV1DelayprofileRouteHandler)
  .openapi(deleteApiV1DelayprofileIdRoute, deleteApiV1DelayprofileIdRouteHandler)
  .openapi(putApiV1DelayprofileIdRoute, putApiV1DelayprofileIdRouteHandler)
  .openapi(getApiV1DelayprofileIdRoute, getApiV1DelayprofileIdRouteHandler)
  .openapi(putApiV1DelayprofileReorderIdRoute, putApiV1DelayprofileReorderIdRouteHandler)
  .openapi(getApiV1DiskspaceRoute, getApiV1DiskspaceRouteHandler)
  .openapi(getApiV1DownloadclientIdRoute, getApiV1DownloadclientIdRouteHandler)
  .openapi(putApiV1DownloadclientIdRoute, putApiV1DownloadclientIdRouteHandler)
  .openapi(deleteApiV1DownloadclientIdRoute, deleteApiV1DownloadclientIdRouteHandler)
  .openapi(getApiV1DownloadclientRoute, getApiV1DownloadclientRouteHandler)
  .openapi(postApiV1DownloadclientRoute, postApiV1DownloadclientRouteHandler)
  .openapi(putApiV1DownloadclientBulkRoute, putApiV1DownloadclientBulkRouteHandler)
  .openapi(deleteApiV1DownloadclientBulkRoute, deleteApiV1DownloadclientBulkRouteHandler)
  .openapi(getApiV1DownloadclientSchemaRoute, getApiV1DownloadclientSchemaRouteHandler)
  .openapi(postApiV1DownloadclientTestRoute, postApiV1DownloadclientTestRouteHandler)
  .openapi(postApiV1DownloadclientTestallRoute, postApiV1DownloadclientTestallRouteHandler)
  .openapi(postApiV1DownloadclientActionNameRoute, postApiV1DownloadclientActionNameRouteHandler)
  .openapi(getApiV1ConfigDownloadclientIdRoute, getApiV1ConfigDownloadclientIdRouteHandler)
  .openapi(putApiV1ConfigDownloadclientIdRoute, putApiV1ConfigDownloadclientIdRouteHandler)
  .openapi(getApiV1ConfigDownloadclientRoute, getApiV1ConfigDownloadclientRouteHandler)
  .openapi(getApiV1FilesystemRoute, getApiV1FilesystemRouteHandler)
  .openapi(getApiV1FilesystemTypeRoute, getApiV1FilesystemTypeRouteHandler)
  .openapi(getApiV1FilesystemMediafilesRoute, getApiV1FilesystemMediafilesRouteHandler)
  .openapi(getApiV1HealthRoute, getApiV1HealthRouteHandler)
  .openapi(getApiV1HistoryRoute, getApiV1HistoryRouteHandler)
  .openapi(getApiV1HistorySinceRoute, getApiV1HistorySinceRouteHandler)
  .openapi(getApiV1HistoryArtistRoute, getApiV1HistoryArtistRouteHandler)
  .openapi(postApiV1HistoryFailedIdRoute, postApiV1HistoryFailedIdRouteHandler)
  .openapi(getApiV1ConfigHostIdRoute, getApiV1ConfigHostIdRouteHandler)
  .openapi(putApiV1ConfigHostIdRoute, putApiV1ConfigHostIdRouteHandler)
  .openapi(getApiV1ConfigHostRoute, getApiV1ConfigHostRouteHandler)
  .openapi(getApiV1ImportlistIdRoute, getApiV1ImportlistIdRouteHandler)
  .openapi(putApiV1ImportlistIdRoute, putApiV1ImportlistIdRouteHandler)
  .openapi(deleteApiV1ImportlistIdRoute, deleteApiV1ImportlistIdRouteHandler)
  .openapi(getApiV1ImportlistRoute, getApiV1ImportlistRouteHandler)
  .openapi(postApiV1ImportlistRoute, postApiV1ImportlistRouteHandler)
  .openapi(putApiV1ImportlistBulkRoute, putApiV1ImportlistBulkRouteHandler)
  .openapi(deleteApiV1ImportlistBulkRoute, deleteApiV1ImportlistBulkRouteHandler)
  .openapi(getApiV1ImportlistSchemaRoute, getApiV1ImportlistSchemaRouteHandler)
  .openapi(postApiV1ImportlistTestRoute, postApiV1ImportlistTestRouteHandler)
  .openapi(postApiV1ImportlistTestallRoute, postApiV1ImportlistTestallRouteHandler)
  .openapi(postApiV1ImportlistActionNameRoute, postApiV1ImportlistActionNameRouteHandler)
  .openapi(getApiV1ImportlistexclusionIdRoute, getApiV1ImportlistexclusionIdRouteHandler)
  .openapi(putApiV1ImportlistexclusionIdRoute, putApiV1ImportlistexclusionIdRouteHandler)
  .openapi(deleteApiV1ImportlistexclusionIdRoute, deleteApiV1ImportlistexclusionIdRouteHandler)
  .openapi(getApiV1ImportlistexclusionRoute, getApiV1ImportlistexclusionRouteHandler)
  .openapi(postApiV1ImportlistexclusionRoute, postApiV1ImportlistexclusionRouteHandler)
  .openapi(getApiV1IndexerIdRoute, getApiV1IndexerIdRouteHandler)
  .openapi(putApiV1IndexerIdRoute, putApiV1IndexerIdRouteHandler)
  .openapi(deleteApiV1IndexerIdRoute, deleteApiV1IndexerIdRouteHandler)
  .openapi(getApiV1IndexerRoute, getApiV1IndexerRouteHandler)
  .openapi(postApiV1IndexerRoute, postApiV1IndexerRouteHandler)
  .openapi(putApiV1IndexerBulkRoute, putApiV1IndexerBulkRouteHandler)
  .openapi(deleteApiV1IndexerBulkRoute, deleteApiV1IndexerBulkRouteHandler)
  .openapi(getApiV1IndexerSchemaRoute, getApiV1IndexerSchemaRouteHandler)
  .openapi(postApiV1IndexerTestRoute, postApiV1IndexerTestRouteHandler)
  .openapi(postApiV1IndexerTestallRoute, postApiV1IndexerTestallRouteHandler)
  .openapi(postApiV1IndexerActionNameRoute, postApiV1IndexerActionNameRouteHandler)
  .openapi(getApiV1ConfigIndexerIdRoute, getApiV1ConfigIndexerIdRouteHandler)
  .openapi(putApiV1ConfigIndexerIdRoute, putApiV1ConfigIndexerIdRouteHandler)
  .openapi(getApiV1ConfigIndexerRoute, getApiV1ConfigIndexerRouteHandler)
  .openapi(getApiV1IndexerflagRoute, getApiV1IndexerflagRouteHandler)
  .openapi(getApiV1LanguageIdRoute, getApiV1LanguageIdRouteHandler)
  .openapi(getApiV1LanguageRoute, getApiV1LanguageRouteHandler)
  .openapi(getApiV1LocalizationRoute, getApiV1LocalizationRouteHandler)
  .openapi(getApiV1LogRoute, getApiV1LogRouteHandler)
  .openapi(getApiV1LogFileRoute, getApiV1LogFileRouteHandler)
  .openapi(getApiV1LogFileFilenameRoute, getApiV1LogFileFilenameRouteHandler)
  .openapi(postApiV1ManualimportRoute, postApiV1ManualimportRouteHandler)
  .openapi(getApiV1ManualimportRoute, getApiV1ManualimportRouteHandler)
  .openapi(
    getApiV1MediacoverArtistArtistIdFilenameRoute,
    getApiV1MediacoverArtistArtistIdFilenameRouteHandler,
  )
  .openapi(
    getApiV1MediacoverAlbumAlbumIdFilenameRoute,
    getApiV1MediacoverAlbumAlbumIdFilenameRouteHandler,
  )
  .openapi(getApiV1ConfigMediamanagementIdRoute, getApiV1ConfigMediamanagementIdRouteHandler)
  .openapi(putApiV1ConfigMediamanagementIdRoute, putApiV1ConfigMediamanagementIdRouteHandler)
  .openapi(getApiV1ConfigMediamanagementRoute, getApiV1ConfigMediamanagementRouteHandler)
  .openapi(getApiV1MetadataIdRoute, getApiV1MetadataIdRouteHandler)
  .openapi(putApiV1MetadataIdRoute, putApiV1MetadataIdRouteHandler)
  .openapi(deleteApiV1MetadataIdRoute, deleteApiV1MetadataIdRouteHandler)
  .openapi(getApiV1MetadataRoute, getApiV1MetadataRouteHandler)
  .openapi(postApiV1MetadataRoute, postApiV1MetadataRouteHandler)
  .openapi(getApiV1MetadataSchemaRoute, getApiV1MetadataSchemaRouteHandler)
  .openapi(postApiV1MetadataTestRoute, postApiV1MetadataTestRouteHandler)
  .openapi(postApiV1MetadataTestallRoute, postApiV1MetadataTestallRouteHandler)
  .openapi(postApiV1MetadataActionNameRoute, postApiV1MetadataActionNameRouteHandler)
  .openapi(postApiV1MetadataprofileRoute, postApiV1MetadataprofileRouteHandler)
  .openapi(getApiV1MetadataprofileRoute, getApiV1MetadataprofileRouteHandler)
  .openapi(deleteApiV1MetadataprofileIdRoute, deleteApiV1MetadataprofileIdRouteHandler)
  .openapi(putApiV1MetadataprofileIdRoute, putApiV1MetadataprofileIdRouteHandler)
  .openapi(getApiV1MetadataprofileIdRoute, getApiV1MetadataprofileIdRouteHandler)
  .openapi(getApiV1MetadataprofileSchemaRoute, getApiV1MetadataprofileSchemaRouteHandler)
  .openapi(getApiV1ConfigMetadataproviderIdRoute, getApiV1ConfigMetadataproviderIdRouteHandler)
  .openapi(putApiV1ConfigMetadataproviderIdRoute, putApiV1ConfigMetadataproviderIdRouteHandler)
  .openapi(getApiV1ConfigMetadataproviderRoute, getApiV1ConfigMetadataproviderRouteHandler)
  .openapi(getApiV1WantedMissingRoute, getApiV1WantedMissingRouteHandler)
  .openapi(getApiV1WantedMissingIdRoute, getApiV1WantedMissingIdRouteHandler)
  .openapi(getApiV1ConfigNamingIdRoute, getApiV1ConfigNamingIdRouteHandler)
  .openapi(putApiV1ConfigNamingIdRoute, putApiV1ConfigNamingIdRouteHandler)
  .openapi(getApiV1ConfigNamingRoute, getApiV1ConfigNamingRouteHandler)
  .openapi(getApiV1ConfigNamingExamplesRoute, getApiV1ConfigNamingExamplesRouteHandler)
  .openapi(getApiV1NotificationIdRoute, getApiV1NotificationIdRouteHandler)
  .openapi(putApiV1NotificationIdRoute, putApiV1NotificationIdRouteHandler)
  .openapi(deleteApiV1NotificationIdRoute, deleteApiV1NotificationIdRouteHandler)
  .openapi(getApiV1NotificationRoute, getApiV1NotificationRouteHandler)
  .openapi(postApiV1NotificationRoute, postApiV1NotificationRouteHandler)
  .openapi(getApiV1NotificationSchemaRoute, getApiV1NotificationSchemaRouteHandler)
  .openapi(postApiV1NotificationTestRoute, postApiV1NotificationTestRouteHandler)
  .openapi(postApiV1NotificationTestallRoute, postApiV1NotificationTestallRouteHandler)
  .openapi(postApiV1NotificationActionNameRoute, postApiV1NotificationActionNameRouteHandler)
  .openapi(getApiV1ParseRoute, getApiV1ParseRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(headPingRoute, headPingRouteHandler)
  .openapi(putApiV1QualitydefinitionIdRoute, putApiV1QualitydefinitionIdRouteHandler)
  .openapi(getApiV1QualitydefinitionIdRoute, getApiV1QualitydefinitionIdRouteHandler)
  .openapi(getApiV1QualitydefinitionRoute, getApiV1QualitydefinitionRouteHandler)
  .openapi(putApiV1QualitydefinitionUpdateRoute, putApiV1QualitydefinitionUpdateRouteHandler)
  .openapi(postApiV1QualityprofileRoute, postApiV1QualityprofileRouteHandler)
  .openapi(getApiV1QualityprofileRoute, getApiV1QualityprofileRouteHandler)
  .openapi(deleteApiV1QualityprofileIdRoute, deleteApiV1QualityprofileIdRouteHandler)
  .openapi(putApiV1QualityprofileIdRoute, putApiV1QualityprofileIdRouteHandler)
  .openapi(getApiV1QualityprofileIdRoute, getApiV1QualityprofileIdRouteHandler)
  .openapi(getApiV1QualityprofileSchemaRoute, getApiV1QualityprofileSchemaRouteHandler)
  .openapi(deleteApiV1QueueIdRoute, deleteApiV1QueueIdRouteHandler)
  .openapi(deleteApiV1QueueBulkRoute, deleteApiV1QueueBulkRouteHandler)
  .openapi(getApiV1QueueRoute, getApiV1QueueRouteHandler)
  .openapi(postApiV1QueueGrabIdRoute, postApiV1QueueGrabIdRouteHandler)
  .openapi(postApiV1QueueGrabBulkRoute, postApiV1QueueGrabBulkRouteHandler)
  .openapi(getApiV1QueueDetailsRoute, getApiV1QueueDetailsRouteHandler)
  .openapi(getApiV1QueueStatusRoute, getApiV1QueueStatusRouteHandler)
  .openapi(postApiV1ReleaseRoute, postApiV1ReleaseRouteHandler)
  .openapi(getApiV1ReleaseRoute, getApiV1ReleaseRouteHandler)
  .openapi(getApiV1ReleaseprofileIdRoute, getApiV1ReleaseprofileIdRouteHandler)
  .openapi(putApiV1ReleaseprofileIdRoute, putApiV1ReleaseprofileIdRouteHandler)
  .openapi(deleteApiV1ReleaseprofileIdRoute, deleteApiV1ReleaseprofileIdRouteHandler)
  .openapi(getApiV1ReleaseprofileRoute, getApiV1ReleaseprofileRouteHandler)
  .openapi(postApiV1ReleaseprofileRoute, postApiV1ReleaseprofileRouteHandler)
  .openapi(postApiV1ReleasePushRoute, postApiV1ReleasePushRouteHandler)
  .openapi(getApiV1RemotepathmappingIdRoute, getApiV1RemotepathmappingIdRouteHandler)
  .openapi(deleteApiV1RemotepathmappingIdRoute, deleteApiV1RemotepathmappingIdRouteHandler)
  .openapi(putApiV1RemotepathmappingIdRoute, putApiV1RemotepathmappingIdRouteHandler)
  .openapi(postApiV1RemotepathmappingRoute, postApiV1RemotepathmappingRouteHandler)
  .openapi(getApiV1RemotepathmappingRoute, getApiV1RemotepathmappingRouteHandler)
  .openapi(getApiV1RenameRoute, getApiV1RenameRouteHandler)
  .openapi(getApiV1RetagRoute, getApiV1RetagRouteHandler)
  .openapi(getApiV1RootfolderIdRoute, getApiV1RootfolderIdRouteHandler)
  .openapi(putApiV1RootfolderIdRoute, putApiV1RootfolderIdRouteHandler)
  .openapi(deleteApiV1RootfolderIdRoute, deleteApiV1RootfolderIdRouteHandler)
  .openapi(postApiV1RootfolderRoute, postApiV1RootfolderRouteHandler)
  .openapi(getApiV1RootfolderRoute, getApiV1RootfolderRouteHandler)
  .openapi(getApiV1SearchRoute, getApiV1SearchRouteHandler)
  .openapi(getContentPathRoute, getContentPathRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getPathRoute, getPathRouteHandler)
  .openapi(getApiV1SystemStatusRoute, getApiV1SystemStatusRouteHandler)
  .openapi(getApiV1SystemRoutesRoute, getApiV1SystemRoutesRouteHandler)
  .openapi(getApiV1SystemRoutesDuplicateRoute, getApiV1SystemRoutesDuplicateRouteHandler)
  .openapi(postApiV1SystemShutdownRoute, postApiV1SystemShutdownRouteHandler)
  .openapi(postApiV1SystemRestartRoute, postApiV1SystemRestartRouteHandler)
  .openapi(getApiV1TagIdRoute, getApiV1TagIdRouteHandler)
  .openapi(putApiV1TagIdRoute, putApiV1TagIdRouteHandler)
  .openapi(deleteApiV1TagIdRoute, deleteApiV1TagIdRouteHandler)
  .openapi(getApiV1TagRoute, getApiV1TagRouteHandler)
  .openapi(postApiV1TagRoute, postApiV1TagRouteHandler)
  .openapi(getApiV1TagDetailIdRoute, getApiV1TagDetailIdRouteHandler)
  .openapi(getApiV1TagDetailRoute, getApiV1TagDetailRouteHandler)
  .openapi(getApiV1SystemTaskRoute, getApiV1SystemTaskRouteHandler)
  .openapi(getApiV1SystemTaskIdRoute, getApiV1SystemTaskIdRouteHandler)
  .openapi(getApiV1TrackRoute, getApiV1TrackRouteHandler)
  .openapi(getApiV1TrackIdRoute, getApiV1TrackIdRouteHandler)
  .openapi(getApiV1TrackfileIdRoute, getApiV1TrackfileIdRouteHandler)
  .openapi(putApiV1TrackfileIdRoute, putApiV1TrackfileIdRouteHandler)
  .openapi(deleteApiV1TrackfileIdRoute, deleteApiV1TrackfileIdRouteHandler)
  .openapi(getApiV1TrackfileRoute, getApiV1TrackfileRouteHandler)
  .openapi(putApiV1TrackfileEditorRoute, putApiV1TrackfileEditorRouteHandler)
  .openapi(deleteApiV1TrackfileBulkRoute, deleteApiV1TrackfileBulkRouteHandler)
  .openapi(putApiV1ConfigUiIdRoute, putApiV1ConfigUiIdRouteHandler)
  .openapi(getApiV1ConfigUiIdRoute, getApiV1ConfigUiIdRouteHandler)
  .openapi(getApiV1ConfigUiRoute, getApiV1ConfigUiRouteHandler)
  .openapi(getApiV1UpdateRoute, getApiV1UpdateRouteHandler)
  .openapi(getApiV1LogFileUpdateRoute, getApiV1LogFileUpdateRouteHandler)
  .openapi(getApiV1LogFileUpdateFilenameRoute, getApiV1LogFileUpdateFilenameRouteHandler)

export default app

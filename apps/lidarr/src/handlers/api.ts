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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AlbumMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlbumLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AlbumstudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ArtistEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ArtistEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ArtistLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotaggingSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SystemBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BlocklistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BlocklistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomformatSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedCutoffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedCutoffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DelayprofileReorderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DiskspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemMediafilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1HistoryFailedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerflagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediacoverArtistArtistIdFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediacoverAlbumAlbumIdFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMediamanagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMetadataproviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigMetadataproviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMetadataproviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WantedMissingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigNamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigNamingExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualitydefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QualitydefinitionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualityprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QueueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QueueGrabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QueueGrabBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueueDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueueStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReleasePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RetagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TrackfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TrackfileEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TrackfileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileUpdateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })

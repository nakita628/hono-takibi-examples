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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SystemBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemBackupRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemBackupRestoreUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3BlocklistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3BlocklistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3CustomformatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomformatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomformatBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomformatSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedCutoffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedCutoffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DelayprofileReorderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DiskspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DownloadclientSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3DownloadclientActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigDownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodeMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodefileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3EpisodefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FilesystemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FilesystemMediafilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3HistorySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3HistoryFailedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistexclusionPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistexclusionBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerflagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3LanguageprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LocalizationLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MediacoverSeriesIdFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigMediamanagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MetadataSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WantedMissingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigNamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigNamingExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotificationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3QualitydefinitionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualitydefinitionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualityprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3QueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3QueueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3QueueGrabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3QueueGrabBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QueueDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QueueStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ReleasePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RemotepathmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RemotepathmappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RenameBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RootfolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3RootfolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SeasonpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3SeriesEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SeriesEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SeriesIdFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SeriesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SeriesLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemRoutesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3UpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileUpdateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })

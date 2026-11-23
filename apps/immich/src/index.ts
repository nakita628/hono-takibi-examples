import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActivitiesIdRoute,
  deleteAdminDatabaseBackupsRoute,
  deleteAdminIntegrityReportIdRoute,
  deleteAdminUsersIdRoute,
  deleteAlbumsIdAssetsRoute,
  deleteAlbumsIdRoute,
  deleteAlbumsIdUserUserIdRoute,
  deleteApiKeysIdRoute,
  deleteAssetFilesIdRoute,
  deleteAssetsIdEditsRoute,
  deleteAssetsIdMetadataKeyRoute,
  deleteAssetsIdVideoStreamSessionIdRoute,
  deleteAssetsMetadataRoute,
  deleteAssetsRoute,
  deleteAuthPinCodeRoute,
  deleteClusterGroupsRequestsIdRoute,
  deleteDuplicatesIdRoute,
  deleteDuplicatesRoute,
  deleteFacesIdRoute,
  deleteLibrariesIdRoute,
  deleteMemoriesIdAssetsRoute,
  deleteMemoriesIdRoute,
  deleteNotificationsIdRoute,
  deleteNotificationsRoute,
  deletePartnersIdRoute,
  deletePasskeysIdRoute,
  deletePeopleIdRoute,
  deletePeopleRoute,
  deletePeopleUsersRoute,
  deleteQueuesNameJobsRoute,
  deleteServerLicenseRoute,
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  deleteSharedLinksIdAssetsRoute,
  deleteSharedLinksIdRoute,
  deleteStacksIdAssetsAssetIdRoute,
  deleteStacksIdRoute,
  deleteStacksRoute,
  deleteSyncAckRoute,
  deleteTagsIdAssetsRoute,
  deleteTagsIdRoute,
  deleteUsersMeLicenseRoute,
  deleteUsersMeOnboardingRoute,
  deleteUsersProfileImageRoute,
  deleteWorkflowsIdRoute,
  getActivitiesRoute,
  getActivitiesStatisticsRoute,
  getAdminConfigDefaultsRoute,
  getAdminConfigRoute,
  getAdminConfigStorageTemplateRoute,
  getAdminDatabaseBackupsFilenameRoute,
  getAdminDatabaseBackupsRoute,
  getAdminIntegrityReportIdFileRoute,
  getAdminIntegrityReportRoute,
  getAdminIntegrityReportTypeCsvRoute,
  getAdminIntegritySummaryRoute,
  getAdminMaintenanceDetectInstallRoute,
  getAdminMaintenanceStatusRoute,
  getAdminUsersIdCalendarHeatmapRoute,
  getAdminUsersIdPreferencesRoute,
  getAdminUsersIdRoute,
  getAdminUsersIdSessionsRoute,
  getAdminUsersIdStatisticsRoute,
  getAdminUsersRoute,
  getAlbumsIdMapMarkersRoute,
  getAlbumsIdRoute,
  getAlbumsRoute,
  getAlbumsStatisticsRoute,
  getApiKeysIdRoute,
  getApiKeysMeRoute,
  getApiKeysRoute,
  getAssetFilesIdDownloadRoute,
  getAssetFilesIdRoute,
  getAssetFilesRoute,
  getAssetsIdEditsRoute,
  getAssetsIdMetadataKeyRoute,
  getAssetsIdMetadataRoute,
  getAssetsIdOcrRoute,
  getAssetsIdOriginalRoute,
  getAssetsIdRoute,
  getAssetsIdThumbnailRoute,
  getAssetsIdVideoPlaybackRoute,
  getAssetsIdVideoStreamMainM3u8Route,
  getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute,
  getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route,
  getAssetsStatisticsRoute,
  getAuthStatusRoute,
  getClusterGroupsIdRequestsRoute,
  getClusterGroupsIdUsersRoute,
  getClusterGroupsRequestsRoute,
  getConfigDefaultsRoute,
  getConfigRoute,
  getDuplicatesRoute,
  getFacesRoute,
  getJobsRoute,
  getLibrariesIdRoute,
  getLibrariesIdStatisticsRoute,
  getLibrariesRoute,
  getMapMarkersRoute,
  getMapReverseGeocodeRoute,
  getMemoriesIdRoute,
  getMemoriesRoute,
  getMemoriesStatisticsRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  getOauthMobileRedirectRoute,
  getPartnersRoute,
  getPasskeysIdRoute,
  getPasskeysRoute,
  getPeopleIdRoute,
  getPeopleIdStatisticsRoute,
  getPeopleIdThumbnailRoute,
  getPeopleRoute,
  getPeopleUsersRoute,
  getPluginsIdRoute,
  getPluginsMethodsRoute,
  getPluginsRoute,
  getPluginsTemplatesRoute,
  getPublicConfigDefaultsRoute,
  getPublicConfigRoute,
  getQueuesNameJobsRoute,
  getQueuesNameRoute,
  getQueuesRoute,
  getSearchCitiesRoute,
  getSearchExploreRoute,
  getSearchPersonRoute,
  getSearchPlacesRoute,
  getSearchSuggestionsRoute,
  getServerAboutRoute,
  getServerApkLinksRoute,
  getServerConfigRoute,
  getServerFeaturesRoute,
  getServerLicenseRoute,
  getServerMediaTypesRoute,
  getServerPingRoute,
  getServerStatisticsRoute,
  getServerStorageRoute,
  getServerVersionCheckRoute,
  getServerVersionHistoryRoute,
  getServerVersionRoute,
  getSessionsRoute,
  getSharedLinksIdRoute,
  getSharedLinksMeRoute,
  getSharedLinksRoute,
  getStacksIdRoute,
  getStacksRoute,
  getSyncAckRoute,
  getSystemConfigDefaultsRoute,
  getSystemConfigRoute,
  getSystemConfigStorageTemplateOptionsRoute,
  getSystemMetadataAdminOnboardingRoute,
  getSystemMetadataReverseGeocodingStateRoute,
  getSystemMetadataVersionCheckStateRoute,
  getTagsIdRoute,
  getTagsRoute,
  getTimelineBucketRoute,
  getTimelineBucketsRoute,
  getUsersIdProfileImageRoute,
  getUsersIdRoute,
  getUsersMeCalendarHeatmapRoute,
  getUsersMeLicenseRoute,
  getUsersMeOnboardingRoute,
  getUsersMePreferencesRoute,
  getUsersMeRoute,
  getUsersRoute,
  getViewFolderRoute,
  getViewFolderUniquePathsRoute,
  getWorkflowsIdLogsRoute,
  getWorkflowsIdRoute,
  getWorkflowsIdShareRoute,
  getWorkflowsRoute,
  getWorkflowsTriggersRoute,
  patchAlbumsIdRoute,
  patchPasskeysIdRoute,
  patchSharedLinksIdRoute,
  postActivitiesRoute,
  postAdminAuthUnlinkAllRoute,
  postAdminConfigStorageTemplatePreviewRoute,
  postAdminDatabaseBackupsStartRestoreRoute,
  postAdminDatabaseBackupsUploadRoute,
  postAdminMaintenanceLoginRoute,
  postAdminMaintenanceRoute,
  postAdminNotificationsRoute,
  postAdminNotificationsTemplatesNamePreviewRoute,
  postAdminNotificationsTemplatesNameRoute,
  postAdminNotificationsTestEmailRoute,
  postAdminUsersIdRestoreRoute,
  postAdminUsersRoute,
  postAlbumsRoute,
  postApiKeysIdRotateRoute,
  postApiKeysRoute,
  postAssetsBulkUploadCheckRoute,
  postAssetsJobsRoute,
  postAssetsRoute,
  postAuthAdminSignUpRoute,
  postAuthChangePasswordRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPinCodeRoute,
  postAuthSessionLockRoute,
  postAuthSessionUnlockRoute,
  postAuthValidateTokenRoute,
  postClusterGroupsIdLeaveRoute,
  postClusterGroupsIdRegeneratePeopleRoute,
  postClusterGroupsRequestsIdAcceptRoute,
  postDownloadArchiveRoute,
  postDownloadInfoRoute,
  postDuplicatesResolveRoute,
  postFacesRoute,
  postJobsRoute,
  postLibrariesIdScanRoute,
  postLibrariesIdValidateRoute,
  postLibrariesRoute,
  postMemoriesRoute,
  postOauthAuthorizeRoute,
  postOauthBackchannelLogoutRoute,
  postOauthCallbackRoute,
  postOauthLinkRoute,
  postOauthUnlinkRoute,
  postPartnersIdRoute,
  postPartnersRoute,
  postPasskeysAuthenticationFinishRoute,
  postPasskeysAuthenticationStartRoute,
  postPasskeysRegistrationFinishRoute,
  postPasskeysRegistrationStartRoute,
  postPeopleIdMergeRoute,
  postPeopleMergeRoute,
  postPeopleRoute,
  postSearchLargeAssetsRoute,
  postSearchMetadataRoute,
  postSearchRandomRoute,
  postSearchSmartRoute,
  postSearchStatisticsRoute,
  postSessionsIdLockRoute,
  postSessionsRoute,
  postSharedLinksLoginRoute,
  postSharedLinksRoute,
  postStacksRoute,
  postSyncAckRoute,
  postSyncStreamRoute,
  postSystemMetadataAdminOnboardingRoute,
  postTagsRoute,
  postTrashEmptyRoute,
  postTrashRestoreAssetsRoute,
  postTrashRestoreRoute,
  postUsersProfileImageRoute,
  postWorkflowsRoute,
  putAdminConfigRoute,
  putAdminUsersIdPreferencesRoute,
  putAdminUsersIdRoute,
  putAlbumsAssetsRoute,
  putAlbumsIdAssetsRoute,
  putAlbumsIdUsersRoute,
  putAlbumsIdUserUserIdRoute,
  putApiKeysIdRoute,
  putAssetsCopyRoute,
  putAssetsIdEditsRoute,
  putAssetsIdMetadataRoute,
  putAssetsIdRoute,
  putAssetsMetadataRoute,
  putAssetsRoute,
  putAuthPinCodeRoute,
  putClusterGroupsIdRequestsRoute,
  putFacesIdRoute,
  putJobsNameRoute,
  putLibrariesIdRoute,
  putMemoriesIdAssetsRoute,
  putMemoriesIdRoute,
  putNotificationsIdRoute,
  putNotificationsRoute,
  putPartnersIdRoute,
  putPeopleIdReassignRoute,
  putPeopleIdRoute,
  putPeopleRoute,
  putPeopleUsersRoute,
  putQueuesNameRoute,
  putServerLicenseRoute,
  putSessionsIdRoute,
  putSharedLinksIdAssetsRoute,
  putStacksIdRoute,
  putSystemConfigRoute,
  putTagsAssetsRoute,
  putTagsIdAssetsRoute,
  putTagsIdRoute,
  putTagsRoute,
  putUsersMeLicenseRoute,
  putUsersMeOnboardingRoute,
  putUsersMePreferencesRoute,
  putUsersMeRoute,
  putWorkflowsIdRoute,
} from './routes'
import {
  deleteActivitiesIdRouteHandler,
  deleteAdminDatabaseBackupsRouteHandler,
  deleteAdminIntegrityReportIdRouteHandler,
  deleteAdminUsersIdRouteHandler,
  deleteAlbumsIdAssetsRouteHandler,
  deleteAlbumsIdRouteHandler,
  deleteAlbumsIdUserUserIdRouteHandler,
  deleteApiKeysIdRouteHandler,
  deleteAssetFilesIdRouteHandler,
  deleteAssetsIdEditsRouteHandler,
  deleteAssetsIdMetadataKeyRouteHandler,
  deleteAssetsIdVideoStreamSessionIdRouteHandler,
  deleteAssetsMetadataRouteHandler,
  deleteAssetsRouteHandler,
  deleteAuthPinCodeRouteHandler,
  deleteClusterGroupsRequestsIdRouteHandler,
  deleteDuplicatesIdRouteHandler,
  deleteDuplicatesRouteHandler,
  deleteFacesIdRouteHandler,
  deleteLibrariesIdRouteHandler,
  deleteMemoriesIdAssetsRouteHandler,
  deleteMemoriesIdRouteHandler,
  deleteNotificationsIdRouteHandler,
  deleteNotificationsRouteHandler,
  deletePartnersIdRouteHandler,
  deletePasskeysIdRouteHandler,
  deletePeopleIdRouteHandler,
  deletePeopleRouteHandler,
  deletePeopleUsersRouteHandler,
  deleteQueuesNameJobsRouteHandler,
  deleteServerLicenseRouteHandler,
  deleteSessionsIdRouteHandler,
  deleteSessionsRouteHandler,
  deleteSharedLinksIdAssetsRouteHandler,
  deleteSharedLinksIdRouteHandler,
  deleteStacksIdAssetsAssetIdRouteHandler,
  deleteStacksIdRouteHandler,
  deleteStacksRouteHandler,
  deleteSyncAckRouteHandler,
  deleteTagsIdAssetsRouteHandler,
  deleteTagsIdRouteHandler,
  deleteUsersMeLicenseRouteHandler,
  deleteUsersMeOnboardingRouteHandler,
  deleteUsersProfileImageRouteHandler,
  deleteWorkflowsIdRouteHandler,
  getActivitiesRouteHandler,
  getActivitiesStatisticsRouteHandler,
  getAdminConfigDefaultsRouteHandler,
  getAdminConfigRouteHandler,
  getAdminConfigStorageTemplateRouteHandler,
  getAdminDatabaseBackupsFilenameRouteHandler,
  getAdminDatabaseBackupsRouteHandler,
  getAdminIntegrityReportIdFileRouteHandler,
  getAdminIntegrityReportRouteHandler,
  getAdminIntegrityReportTypeCsvRouteHandler,
  getAdminIntegritySummaryRouteHandler,
  getAdminMaintenanceDetectInstallRouteHandler,
  getAdminMaintenanceStatusRouteHandler,
  getAdminUsersIdCalendarHeatmapRouteHandler,
  getAdminUsersIdPreferencesRouteHandler,
  getAdminUsersIdRouteHandler,
  getAdminUsersIdSessionsRouteHandler,
  getAdminUsersIdStatisticsRouteHandler,
  getAdminUsersRouteHandler,
  getAlbumsIdMapMarkersRouteHandler,
  getAlbumsIdRouteHandler,
  getAlbumsRouteHandler,
  getAlbumsStatisticsRouteHandler,
  getApiKeysIdRouteHandler,
  getApiKeysMeRouteHandler,
  getApiKeysRouteHandler,
  getAssetFilesIdDownloadRouteHandler,
  getAssetFilesIdRouteHandler,
  getAssetFilesRouteHandler,
  getAssetsIdEditsRouteHandler,
  getAssetsIdMetadataKeyRouteHandler,
  getAssetsIdMetadataRouteHandler,
  getAssetsIdOcrRouteHandler,
  getAssetsIdOriginalRouteHandler,
  getAssetsIdRouteHandler,
  getAssetsIdThumbnailRouteHandler,
  getAssetsIdVideoPlaybackRouteHandler,
  getAssetsIdVideoStreamMainM3u8RouteHandler,
  getAssetsIdVideoStreamSessionIdVariantIndexFilenameRouteHandler,
  getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8RouteHandler,
  getAssetsStatisticsRouteHandler,
  getAuthStatusRouteHandler,
  getClusterGroupsIdRequestsRouteHandler,
  getClusterGroupsIdUsersRouteHandler,
  getClusterGroupsRequestsRouteHandler,
  getConfigDefaultsRouteHandler,
  getConfigRouteHandler,
  getDuplicatesRouteHandler,
  getFacesRouteHandler,
  getJobsRouteHandler,
  getLibrariesIdRouteHandler,
  getLibrariesIdStatisticsRouteHandler,
  getLibrariesRouteHandler,
  getMapMarkersRouteHandler,
  getMapReverseGeocodeRouteHandler,
  getMemoriesIdRouteHandler,
  getMemoriesRouteHandler,
  getMemoriesStatisticsRouteHandler,
  getNotificationsIdRouteHandler,
  getNotificationsRouteHandler,
  getOauthMobileRedirectRouteHandler,
  getPartnersRouteHandler,
  getPasskeysIdRouteHandler,
  getPasskeysRouteHandler,
  getPeopleIdRouteHandler,
  getPeopleIdStatisticsRouteHandler,
  getPeopleIdThumbnailRouteHandler,
  getPeopleRouteHandler,
  getPeopleUsersRouteHandler,
  getPluginsIdRouteHandler,
  getPluginsMethodsRouteHandler,
  getPluginsRouteHandler,
  getPluginsTemplatesRouteHandler,
  getPublicConfigDefaultsRouteHandler,
  getPublicConfigRouteHandler,
  getQueuesNameJobsRouteHandler,
  getQueuesNameRouteHandler,
  getQueuesRouteHandler,
  getSearchCitiesRouteHandler,
  getSearchExploreRouteHandler,
  getSearchPersonRouteHandler,
  getSearchPlacesRouteHandler,
  getSearchSuggestionsRouteHandler,
  getServerAboutRouteHandler,
  getServerApkLinksRouteHandler,
  getServerConfigRouteHandler,
  getServerFeaturesRouteHandler,
  getServerLicenseRouteHandler,
  getServerMediaTypesRouteHandler,
  getServerPingRouteHandler,
  getServerStatisticsRouteHandler,
  getServerStorageRouteHandler,
  getServerVersionCheckRouteHandler,
  getServerVersionHistoryRouteHandler,
  getServerVersionRouteHandler,
  getSessionsRouteHandler,
  getSharedLinksIdRouteHandler,
  getSharedLinksMeRouteHandler,
  getSharedLinksRouteHandler,
  getStacksIdRouteHandler,
  getStacksRouteHandler,
  getSyncAckRouteHandler,
  getSystemConfigDefaultsRouteHandler,
  getSystemConfigRouteHandler,
  getSystemConfigStorageTemplateOptionsRouteHandler,
  getSystemMetadataAdminOnboardingRouteHandler,
  getSystemMetadataReverseGeocodingStateRouteHandler,
  getSystemMetadataVersionCheckStateRouteHandler,
  getTagsIdRouteHandler,
  getTagsRouteHandler,
  getTimelineBucketRouteHandler,
  getTimelineBucketsRouteHandler,
  getUsersIdProfileImageRouteHandler,
  getUsersIdRouteHandler,
  getUsersMeCalendarHeatmapRouteHandler,
  getUsersMeLicenseRouteHandler,
  getUsersMeOnboardingRouteHandler,
  getUsersMePreferencesRouteHandler,
  getUsersMeRouteHandler,
  getUsersRouteHandler,
  getViewFolderRouteHandler,
  getViewFolderUniquePathsRouteHandler,
  getWorkflowsIdLogsRouteHandler,
  getWorkflowsIdRouteHandler,
  getWorkflowsIdShareRouteHandler,
  getWorkflowsRouteHandler,
  getWorkflowsTriggersRouteHandler,
  patchAlbumsIdRouteHandler,
  patchPasskeysIdRouteHandler,
  patchSharedLinksIdRouteHandler,
  postActivitiesRouteHandler,
  postAdminAuthUnlinkAllRouteHandler,
  postAdminConfigStorageTemplatePreviewRouteHandler,
  postAdminDatabaseBackupsStartRestoreRouteHandler,
  postAdminDatabaseBackupsUploadRouteHandler,
  postAdminMaintenanceLoginRouteHandler,
  postAdminMaintenanceRouteHandler,
  postAdminNotificationsRouteHandler,
  postAdminNotificationsTemplatesNamePreviewRouteHandler,
  postAdminNotificationsTemplatesNameRouteHandler,
  postAdminNotificationsTestEmailRouteHandler,
  postAdminUsersIdRestoreRouteHandler,
  postAdminUsersRouteHandler,
  postAlbumsRouteHandler,
  postApiKeysIdRotateRouteHandler,
  postApiKeysRouteHandler,
  postAssetsBulkUploadCheckRouteHandler,
  postAssetsJobsRouteHandler,
  postAssetsRouteHandler,
  postAuthAdminSignUpRouteHandler,
  postAuthChangePasswordRouteHandler,
  postAuthLoginRouteHandler,
  postAuthLogoutRouteHandler,
  postAuthPinCodeRouteHandler,
  postAuthSessionLockRouteHandler,
  postAuthSessionUnlockRouteHandler,
  postAuthValidateTokenRouteHandler,
  postClusterGroupsIdLeaveRouteHandler,
  postClusterGroupsIdRegeneratePeopleRouteHandler,
  postClusterGroupsRequestsIdAcceptRouteHandler,
  postDownloadArchiveRouteHandler,
  postDownloadInfoRouteHandler,
  postDuplicatesResolveRouteHandler,
  postFacesRouteHandler,
  postJobsRouteHandler,
  postLibrariesIdScanRouteHandler,
  postLibrariesIdValidateRouteHandler,
  postLibrariesRouteHandler,
  postMemoriesRouteHandler,
  postOauthAuthorizeRouteHandler,
  postOauthBackchannelLogoutRouteHandler,
  postOauthCallbackRouteHandler,
  postOauthLinkRouteHandler,
  postOauthUnlinkRouteHandler,
  postPartnersIdRouteHandler,
  postPartnersRouteHandler,
  postPasskeysAuthenticationFinishRouteHandler,
  postPasskeysAuthenticationStartRouteHandler,
  postPasskeysRegistrationFinishRouteHandler,
  postPasskeysRegistrationStartRouteHandler,
  postPeopleIdMergeRouteHandler,
  postPeopleMergeRouteHandler,
  postPeopleRouteHandler,
  postSearchLargeAssetsRouteHandler,
  postSearchMetadataRouteHandler,
  postSearchRandomRouteHandler,
  postSearchSmartRouteHandler,
  postSearchStatisticsRouteHandler,
  postSessionsIdLockRouteHandler,
  postSessionsRouteHandler,
  postSharedLinksLoginRouteHandler,
  postSharedLinksRouteHandler,
  postStacksRouteHandler,
  postSyncAckRouteHandler,
  postSyncStreamRouteHandler,
  postSystemMetadataAdminOnboardingRouteHandler,
  postTagsRouteHandler,
  postTrashEmptyRouteHandler,
  postTrashRestoreAssetsRouteHandler,
  postTrashRestoreRouteHandler,
  postUsersProfileImageRouteHandler,
  postWorkflowsRouteHandler,
  putAdminConfigRouteHandler,
  putAdminUsersIdPreferencesRouteHandler,
  putAdminUsersIdRouteHandler,
  putAlbumsAssetsRouteHandler,
  putAlbumsIdAssetsRouteHandler,
  putAlbumsIdUsersRouteHandler,
  putAlbumsIdUserUserIdRouteHandler,
  putApiKeysIdRouteHandler,
  putAssetsCopyRouteHandler,
  putAssetsIdEditsRouteHandler,
  putAssetsIdMetadataRouteHandler,
  putAssetsIdRouteHandler,
  putAssetsMetadataRouteHandler,
  putAssetsRouteHandler,
  putAuthPinCodeRouteHandler,
  putClusterGroupsIdRequestsRouteHandler,
  putFacesIdRouteHandler,
  putJobsNameRouteHandler,
  putLibrariesIdRouteHandler,
  putMemoriesIdAssetsRouteHandler,
  putMemoriesIdRouteHandler,
  putNotificationsIdRouteHandler,
  putNotificationsRouteHandler,
  putPartnersIdRouteHandler,
  putPeopleIdReassignRouteHandler,
  putPeopleIdRouteHandler,
  putPeopleRouteHandler,
  putPeopleUsersRouteHandler,
  putQueuesNameRouteHandler,
  putServerLicenseRouteHandler,
  putSessionsIdRouteHandler,
  putSharedLinksIdAssetsRouteHandler,
  putStacksIdRouteHandler,
  putSystemConfigRouteHandler,
  putTagsAssetsRouteHandler,
  putTagsIdAssetsRouteHandler,
  putTagsIdRouteHandler,
  putTagsRouteHandler,
  putUsersMeLicenseRouteHandler,
  putUsersMeOnboardingRouteHandler,
  putUsersMePreferencesRouteHandler,
  putUsersMeRouteHandler,
  putWorkflowsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActivitiesRoute, getActivitiesRouteHandler)
  .openapi(postActivitiesRoute, postActivitiesRouteHandler)
  .openapi(getActivitiesStatisticsRoute, getActivitiesStatisticsRouteHandler)
  .openapi(deleteActivitiesIdRoute, deleteActivitiesIdRouteHandler)
  .openapi(postAdminAuthUnlinkAllRoute, postAdminAuthUnlinkAllRouteHandler)
  .openapi(getAdminConfigRoute, getAdminConfigRouteHandler)
  .openapi(putAdminConfigRoute, putAdminConfigRouteHandler)
  .openapi(getAdminConfigDefaultsRoute, getAdminConfigDefaultsRouteHandler)
  .openapi(getAdminConfigStorageTemplateRoute, getAdminConfigStorageTemplateRouteHandler)
  .openapi(
    postAdminConfigStorageTemplatePreviewRoute,
    postAdminConfigStorageTemplatePreviewRouteHandler,
  )
  .openapi(deleteAdminDatabaseBackupsRoute, deleteAdminDatabaseBackupsRouteHandler)
  .openapi(getAdminDatabaseBackupsRoute, getAdminDatabaseBackupsRouteHandler)
  .openapi(
    postAdminDatabaseBackupsStartRestoreRoute,
    postAdminDatabaseBackupsStartRestoreRouteHandler,
  )
  .openapi(postAdminDatabaseBackupsUploadRoute, postAdminDatabaseBackupsUploadRouteHandler)
  .openapi(getAdminDatabaseBackupsFilenameRoute, getAdminDatabaseBackupsFilenameRouteHandler)
  .openapi(getAdminIntegrityReportRoute, getAdminIntegrityReportRouteHandler)
  .openapi(deleteAdminIntegrityReportIdRoute, deleteAdminIntegrityReportIdRouteHandler)
  .openapi(getAdminIntegrityReportIdFileRoute, getAdminIntegrityReportIdFileRouteHandler)
  .openapi(getAdminIntegrityReportTypeCsvRoute, getAdminIntegrityReportTypeCsvRouteHandler)
  .openapi(getAdminIntegritySummaryRoute, getAdminIntegritySummaryRouteHandler)
  .openapi(postAdminMaintenanceRoute, postAdminMaintenanceRouteHandler)
  .openapi(getAdminMaintenanceDetectInstallRoute, getAdminMaintenanceDetectInstallRouteHandler)
  .openapi(postAdminMaintenanceLoginRoute, postAdminMaintenanceLoginRouteHandler)
  .openapi(getAdminMaintenanceStatusRoute, getAdminMaintenanceStatusRouteHandler)
  .openapi(postAdminNotificationsRoute, postAdminNotificationsRouteHandler)
  .openapi(
    postAdminNotificationsTemplatesNameRoute,
    postAdminNotificationsTemplatesNameRouteHandler,
  )
  .openapi(
    postAdminNotificationsTemplatesNamePreviewRoute,
    postAdminNotificationsTemplatesNamePreviewRouteHandler,
  )
  .openapi(postAdminNotificationsTestEmailRoute, postAdminNotificationsTestEmailRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(postAdminUsersRoute, postAdminUsersRouteHandler)
  .openapi(deleteAdminUsersIdRoute, deleteAdminUsersIdRouteHandler)
  .openapi(getAdminUsersIdRoute, getAdminUsersIdRouteHandler)
  .openapi(putAdminUsersIdRoute, putAdminUsersIdRouteHandler)
  .openapi(getAdminUsersIdCalendarHeatmapRoute, getAdminUsersIdCalendarHeatmapRouteHandler)
  .openapi(getAdminUsersIdPreferencesRoute, getAdminUsersIdPreferencesRouteHandler)
  .openapi(putAdminUsersIdPreferencesRoute, putAdminUsersIdPreferencesRouteHandler)
  .openapi(postAdminUsersIdRestoreRoute, postAdminUsersIdRestoreRouteHandler)
  .openapi(getAdminUsersIdSessionsRoute, getAdminUsersIdSessionsRouteHandler)
  .openapi(getAdminUsersIdStatisticsRoute, getAdminUsersIdStatisticsRouteHandler)
  .openapi(getAlbumsRoute, getAlbumsRouteHandler)
  .openapi(postAlbumsRoute, postAlbumsRouteHandler)
  .openapi(putAlbumsAssetsRoute, putAlbumsAssetsRouteHandler)
  .openapi(getAlbumsStatisticsRoute, getAlbumsStatisticsRouteHandler)
  .openapi(deleteAlbumsIdRoute, deleteAlbumsIdRouteHandler)
  .openapi(getAlbumsIdRoute, getAlbumsIdRouteHandler)
  .openapi(patchAlbumsIdRoute, patchAlbumsIdRouteHandler)
  .openapi(deleteAlbumsIdAssetsRoute, deleteAlbumsIdAssetsRouteHandler)
  .openapi(putAlbumsIdAssetsRoute, putAlbumsIdAssetsRouteHandler)
  .openapi(getAlbumsIdMapMarkersRoute, getAlbumsIdMapMarkersRouteHandler)
  .openapi(deleteAlbumsIdUserUserIdRoute, deleteAlbumsIdUserUserIdRouteHandler)
  .openapi(putAlbumsIdUserUserIdRoute, putAlbumsIdUserUserIdRouteHandler)
  .openapi(putAlbumsIdUsersRoute, putAlbumsIdUsersRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(getApiKeysMeRoute, getApiKeysMeRouteHandler)
  .openapi(deleteApiKeysIdRoute, deleteApiKeysIdRouteHandler)
  .openapi(getApiKeysIdRoute, getApiKeysIdRouteHandler)
  .openapi(putApiKeysIdRoute, putApiKeysIdRouteHandler)
  .openapi(postApiKeysIdRotateRoute, postApiKeysIdRotateRouteHandler)
  .openapi(getAssetFilesRoute, getAssetFilesRouteHandler)
  .openapi(deleteAssetFilesIdRoute, deleteAssetFilesIdRouteHandler)
  .openapi(getAssetFilesIdRoute, getAssetFilesIdRouteHandler)
  .openapi(getAssetFilesIdDownloadRoute, getAssetFilesIdDownloadRouteHandler)
  .openapi(deleteAssetsRoute, deleteAssetsRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(putAssetsRoute, putAssetsRouteHandler)
  .openapi(postAssetsBulkUploadCheckRoute, postAssetsBulkUploadCheckRouteHandler)
  .openapi(putAssetsCopyRoute, putAssetsCopyRouteHandler)
  .openapi(postAssetsJobsRoute, postAssetsJobsRouteHandler)
  .openapi(deleteAssetsMetadataRoute, deleteAssetsMetadataRouteHandler)
  .openapi(putAssetsMetadataRoute, putAssetsMetadataRouteHandler)
  .openapi(getAssetsStatisticsRoute, getAssetsStatisticsRouteHandler)
  .openapi(getAssetsIdRoute, getAssetsIdRouteHandler)
  .openapi(putAssetsIdRoute, putAssetsIdRouteHandler)
  .openapi(deleteAssetsIdEditsRoute, deleteAssetsIdEditsRouteHandler)
  .openapi(getAssetsIdEditsRoute, getAssetsIdEditsRouteHandler)
  .openapi(putAssetsIdEditsRoute, putAssetsIdEditsRouteHandler)
  .openapi(getAssetsIdMetadataRoute, getAssetsIdMetadataRouteHandler)
  .openapi(putAssetsIdMetadataRoute, putAssetsIdMetadataRouteHandler)
  .openapi(deleteAssetsIdMetadataKeyRoute, deleteAssetsIdMetadataKeyRouteHandler)
  .openapi(getAssetsIdMetadataKeyRoute, getAssetsIdMetadataKeyRouteHandler)
  .openapi(getAssetsIdOcrRoute, getAssetsIdOcrRouteHandler)
  .openapi(getAssetsIdOriginalRoute, getAssetsIdOriginalRouteHandler)
  .openapi(getAssetsIdThumbnailRoute, getAssetsIdThumbnailRouteHandler)
  .openapi(getAssetsIdVideoPlaybackRoute, getAssetsIdVideoPlaybackRouteHandler)
  .openapi(getAssetsIdVideoStreamMainM3u8Route, getAssetsIdVideoStreamMainM3u8RouteHandler)
  .openapi(deleteAssetsIdVideoStreamSessionIdRoute, deleteAssetsIdVideoStreamSessionIdRouteHandler)
  .openapi(
    getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route,
    getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8RouteHandler,
  )
  .openapi(
    getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute,
    getAssetsIdVideoStreamSessionIdVariantIndexFilenameRouteHandler,
  )
  .openapi(postAuthAdminSignUpRoute, postAuthAdminSignUpRouteHandler)
  .openapi(postAuthChangePasswordRoute, postAuthChangePasswordRouteHandler)
  .openapi(postAuthLoginRoute, postAuthLoginRouteHandler)
  .openapi(postAuthLogoutRoute, postAuthLogoutRouteHandler)
  .openapi(deleteAuthPinCodeRoute, deleteAuthPinCodeRouteHandler)
  .openapi(postAuthPinCodeRoute, postAuthPinCodeRouteHandler)
  .openapi(putAuthPinCodeRoute, putAuthPinCodeRouteHandler)
  .openapi(postAuthSessionLockRoute, postAuthSessionLockRouteHandler)
  .openapi(postAuthSessionUnlockRoute, postAuthSessionUnlockRouteHandler)
  .openapi(getAuthStatusRoute, getAuthStatusRouteHandler)
  .openapi(postAuthValidateTokenRoute, postAuthValidateTokenRouteHandler)
  .openapi(getClusterGroupsRequestsRoute, getClusterGroupsRequestsRouteHandler)
  .openapi(deleteClusterGroupsRequestsIdRoute, deleteClusterGroupsRequestsIdRouteHandler)
  .openapi(postClusterGroupsRequestsIdAcceptRoute, postClusterGroupsRequestsIdAcceptRouteHandler)
  .openapi(postClusterGroupsIdLeaveRoute, postClusterGroupsIdLeaveRouteHandler)
  .openapi(
    postClusterGroupsIdRegeneratePeopleRoute,
    postClusterGroupsIdRegeneratePeopleRouteHandler,
  )
  .openapi(getClusterGroupsIdRequestsRoute, getClusterGroupsIdRequestsRouteHandler)
  .openapi(putClusterGroupsIdRequestsRoute, putClusterGroupsIdRequestsRouteHandler)
  .openapi(getClusterGroupsIdUsersRoute, getClusterGroupsIdUsersRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getConfigDefaultsRoute, getConfigDefaultsRouteHandler)
  .openapi(postDownloadArchiveRoute, postDownloadArchiveRouteHandler)
  .openapi(postDownloadInfoRoute, postDownloadInfoRouteHandler)
  .openapi(deleteDuplicatesRoute, deleteDuplicatesRouteHandler)
  .openapi(getDuplicatesRoute, getDuplicatesRouteHandler)
  .openapi(postDuplicatesResolveRoute, postDuplicatesResolveRouteHandler)
  .openapi(deleteDuplicatesIdRoute, deleteDuplicatesIdRouteHandler)
  .openapi(getFacesRoute, getFacesRouteHandler)
  .openapi(postFacesRoute, postFacesRouteHandler)
  .openapi(deleteFacesIdRoute, deleteFacesIdRouteHandler)
  .openapi(putFacesIdRoute, putFacesIdRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(putJobsNameRoute, putJobsNameRouteHandler)
  .openapi(getLibrariesRoute, getLibrariesRouteHandler)
  .openapi(postLibrariesRoute, postLibrariesRouteHandler)
  .openapi(deleteLibrariesIdRoute, deleteLibrariesIdRouteHandler)
  .openapi(getLibrariesIdRoute, getLibrariesIdRouteHandler)
  .openapi(putLibrariesIdRoute, putLibrariesIdRouteHandler)
  .openapi(postLibrariesIdScanRoute, postLibrariesIdScanRouteHandler)
  .openapi(getLibrariesIdStatisticsRoute, getLibrariesIdStatisticsRouteHandler)
  .openapi(postLibrariesIdValidateRoute, postLibrariesIdValidateRouteHandler)
  .openapi(getMapMarkersRoute, getMapMarkersRouteHandler)
  .openapi(getMapReverseGeocodeRoute, getMapReverseGeocodeRouteHandler)
  .openapi(getMemoriesRoute, getMemoriesRouteHandler)
  .openapi(postMemoriesRoute, postMemoriesRouteHandler)
  .openapi(getMemoriesStatisticsRoute, getMemoriesStatisticsRouteHandler)
  .openapi(deleteMemoriesIdRoute, deleteMemoriesIdRouteHandler)
  .openapi(getMemoriesIdRoute, getMemoriesIdRouteHandler)
  .openapi(putMemoriesIdRoute, putMemoriesIdRouteHandler)
  .openapi(deleteMemoriesIdAssetsRoute, deleteMemoriesIdAssetsRouteHandler)
  .openapi(putMemoriesIdAssetsRoute, putMemoriesIdAssetsRouteHandler)
  .openapi(deleteNotificationsRoute, deleteNotificationsRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(putNotificationsRoute, putNotificationsRouteHandler)
  .openapi(deleteNotificationsIdRoute, deleteNotificationsIdRouteHandler)
  .openapi(getNotificationsIdRoute, getNotificationsIdRouteHandler)
  .openapi(putNotificationsIdRoute, putNotificationsIdRouteHandler)
  .openapi(postOauthAuthorizeRoute, postOauthAuthorizeRouteHandler)
  .openapi(postOauthBackchannelLogoutRoute, postOauthBackchannelLogoutRouteHandler)
  .openapi(postOauthCallbackRoute, postOauthCallbackRouteHandler)
  .openapi(postOauthLinkRoute, postOauthLinkRouteHandler)
  .openapi(getOauthMobileRedirectRoute, getOauthMobileRedirectRouteHandler)
  .openapi(postOauthUnlinkRoute, postOauthUnlinkRouteHandler)
  .openapi(getPartnersRoute, getPartnersRouteHandler)
  .openapi(postPartnersRoute, postPartnersRouteHandler)
  .openapi(deletePartnersIdRoute, deletePartnersIdRouteHandler)
  .openapi(postPartnersIdRoute, postPartnersIdRouteHandler)
  .openapi(putPartnersIdRoute, putPartnersIdRouteHandler)
  .openapi(getPasskeysRoute, getPasskeysRouteHandler)
  .openapi(postPasskeysAuthenticationFinishRoute, postPasskeysAuthenticationFinishRouteHandler)
  .openapi(postPasskeysAuthenticationStartRoute, postPasskeysAuthenticationStartRouteHandler)
  .openapi(postPasskeysRegistrationFinishRoute, postPasskeysRegistrationFinishRouteHandler)
  .openapi(postPasskeysRegistrationStartRoute, postPasskeysRegistrationStartRouteHandler)
  .openapi(deletePasskeysIdRoute, deletePasskeysIdRouteHandler)
  .openapi(getPasskeysIdRoute, getPasskeysIdRouteHandler)
  .openapi(patchPasskeysIdRoute, patchPasskeysIdRouteHandler)
  .openapi(deletePeopleRoute, deletePeopleRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(postPeopleRoute, postPeopleRouteHandler)
  .openapi(putPeopleRoute, putPeopleRouteHandler)
  .openapi(postPeopleMergeRoute, postPeopleMergeRouteHandler)
  .openapi(deletePeopleUsersRoute, deletePeopleUsersRouteHandler)
  .openapi(getPeopleUsersRoute, getPeopleUsersRouteHandler)
  .openapi(putPeopleUsersRoute, putPeopleUsersRouteHandler)
  .openapi(deletePeopleIdRoute, deletePeopleIdRouteHandler)
  .openapi(getPeopleIdRoute, getPeopleIdRouteHandler)
  .openapi(putPeopleIdRoute, putPeopleIdRouteHandler)
  .openapi(postPeopleIdMergeRoute, postPeopleIdMergeRouteHandler)
  .openapi(putPeopleIdReassignRoute, putPeopleIdReassignRouteHandler)
  .openapi(getPeopleIdStatisticsRoute, getPeopleIdStatisticsRouteHandler)
  .openapi(getPeopleIdThumbnailRoute, getPeopleIdThumbnailRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(getPluginsMethodsRoute, getPluginsMethodsRouteHandler)
  .openapi(getPluginsTemplatesRoute, getPluginsTemplatesRouteHandler)
  .openapi(getPluginsIdRoute, getPluginsIdRouteHandler)
  .openapi(getPublicConfigRoute, getPublicConfigRouteHandler)
  .openapi(getPublicConfigDefaultsRoute, getPublicConfigDefaultsRouteHandler)
  .openapi(getQueuesRoute, getQueuesRouteHandler)
  .openapi(getQueuesNameRoute, getQueuesNameRouteHandler)
  .openapi(putQueuesNameRoute, putQueuesNameRouteHandler)
  .openapi(deleteQueuesNameJobsRoute, deleteQueuesNameJobsRouteHandler)
  .openapi(getQueuesNameJobsRoute, getQueuesNameJobsRouteHandler)
  .openapi(getSearchCitiesRoute, getSearchCitiesRouteHandler)
  .openapi(getSearchExploreRoute, getSearchExploreRouteHandler)
  .openapi(postSearchLargeAssetsRoute, postSearchLargeAssetsRouteHandler)
  .openapi(postSearchMetadataRoute, postSearchMetadataRouteHandler)
  .openapi(getSearchPersonRoute, getSearchPersonRouteHandler)
  .openapi(getSearchPlacesRoute, getSearchPlacesRouteHandler)
  .openapi(postSearchRandomRoute, postSearchRandomRouteHandler)
  .openapi(postSearchSmartRoute, postSearchSmartRouteHandler)
  .openapi(postSearchStatisticsRoute, postSearchStatisticsRouteHandler)
  .openapi(getSearchSuggestionsRoute, getSearchSuggestionsRouteHandler)
  .openapi(getServerAboutRoute, getServerAboutRouteHandler)
  .openapi(getServerApkLinksRoute, getServerApkLinksRouteHandler)
  .openapi(getServerConfigRoute, getServerConfigRouteHandler)
  .openapi(getServerFeaturesRoute, getServerFeaturesRouteHandler)
  .openapi(deleteServerLicenseRoute, deleteServerLicenseRouteHandler)
  .openapi(getServerLicenseRoute, getServerLicenseRouteHandler)
  .openapi(putServerLicenseRoute, putServerLicenseRouteHandler)
  .openapi(getServerMediaTypesRoute, getServerMediaTypesRouteHandler)
  .openapi(getServerPingRoute, getServerPingRouteHandler)
  .openapi(getServerStatisticsRoute, getServerStatisticsRouteHandler)
  .openapi(getServerStorageRoute, getServerStorageRouteHandler)
  .openapi(getServerVersionRoute, getServerVersionRouteHandler)
  .openapi(getServerVersionCheckRoute, getServerVersionCheckRouteHandler)
  .openapi(getServerVersionHistoryRoute, getServerVersionHistoryRouteHandler)
  .openapi(deleteSessionsRoute, deleteSessionsRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)
  .openapi(deleteSessionsIdRoute, deleteSessionsIdRouteHandler)
  .openapi(putSessionsIdRoute, putSessionsIdRouteHandler)
  .openapi(postSessionsIdLockRoute, postSessionsIdLockRouteHandler)
  .openapi(getSharedLinksRoute, getSharedLinksRouteHandler)
  .openapi(postSharedLinksRoute, postSharedLinksRouteHandler)
  .openapi(postSharedLinksLoginRoute, postSharedLinksLoginRouteHandler)
  .openapi(getSharedLinksMeRoute, getSharedLinksMeRouteHandler)
  .openapi(deleteSharedLinksIdRoute, deleteSharedLinksIdRouteHandler)
  .openapi(getSharedLinksIdRoute, getSharedLinksIdRouteHandler)
  .openapi(patchSharedLinksIdRoute, patchSharedLinksIdRouteHandler)
  .openapi(deleteSharedLinksIdAssetsRoute, deleteSharedLinksIdAssetsRouteHandler)
  .openapi(putSharedLinksIdAssetsRoute, putSharedLinksIdAssetsRouteHandler)
  .openapi(deleteStacksRoute, deleteStacksRouteHandler)
  .openapi(getStacksRoute, getStacksRouteHandler)
  .openapi(postStacksRoute, postStacksRouteHandler)
  .openapi(deleteStacksIdRoute, deleteStacksIdRouteHandler)
  .openapi(getStacksIdRoute, getStacksIdRouteHandler)
  .openapi(putStacksIdRoute, putStacksIdRouteHandler)
  .openapi(deleteStacksIdAssetsAssetIdRoute, deleteStacksIdAssetsAssetIdRouteHandler)
  .openapi(deleteSyncAckRoute, deleteSyncAckRouteHandler)
  .openapi(getSyncAckRoute, getSyncAckRouteHandler)
  .openapi(postSyncAckRoute, postSyncAckRouteHandler)
  .openapi(postSyncStreamRoute, postSyncStreamRouteHandler)
  .openapi(getSystemConfigRoute, getSystemConfigRouteHandler)
  .openapi(putSystemConfigRoute, putSystemConfigRouteHandler)
  .openapi(getSystemConfigDefaultsRoute, getSystemConfigDefaultsRouteHandler)
  .openapi(
    getSystemConfigStorageTemplateOptionsRoute,
    getSystemConfigStorageTemplateOptionsRouteHandler,
  )
  .openapi(getSystemMetadataAdminOnboardingRoute, getSystemMetadataAdminOnboardingRouteHandler)
  .openapi(postSystemMetadataAdminOnboardingRoute, postSystemMetadataAdminOnboardingRouteHandler)
  .openapi(
    getSystemMetadataReverseGeocodingStateRoute,
    getSystemMetadataReverseGeocodingStateRouteHandler,
  )
  .openapi(getSystemMetadataVersionCheckStateRoute, getSystemMetadataVersionCheckStateRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(putTagsRoute, putTagsRouteHandler)
  .openapi(putTagsAssetsRoute, putTagsAssetsRouteHandler)
  .openapi(deleteTagsIdRoute, deleteTagsIdRouteHandler)
  .openapi(getTagsIdRoute, getTagsIdRouteHandler)
  .openapi(putTagsIdRoute, putTagsIdRouteHandler)
  .openapi(deleteTagsIdAssetsRoute, deleteTagsIdAssetsRouteHandler)
  .openapi(putTagsIdAssetsRoute, putTagsIdAssetsRouteHandler)
  .openapi(getTimelineBucketRoute, getTimelineBucketRouteHandler)
  .openapi(getTimelineBucketsRoute, getTimelineBucketsRouteHandler)
  .openapi(postTrashEmptyRoute, postTrashEmptyRouteHandler)
  .openapi(postTrashRestoreRoute, postTrashRestoreRouteHandler)
  .openapi(postTrashRestoreAssetsRoute, postTrashRestoreAssetsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(putUsersMeRoute, putUsersMeRouteHandler)
  .openapi(getUsersMeCalendarHeatmapRoute, getUsersMeCalendarHeatmapRouteHandler)
  .openapi(deleteUsersMeLicenseRoute, deleteUsersMeLicenseRouteHandler)
  .openapi(getUsersMeLicenseRoute, getUsersMeLicenseRouteHandler)
  .openapi(putUsersMeLicenseRoute, putUsersMeLicenseRouteHandler)
  .openapi(deleteUsersMeOnboardingRoute, deleteUsersMeOnboardingRouteHandler)
  .openapi(getUsersMeOnboardingRoute, getUsersMeOnboardingRouteHandler)
  .openapi(putUsersMeOnboardingRoute, putUsersMeOnboardingRouteHandler)
  .openapi(getUsersMePreferencesRoute, getUsersMePreferencesRouteHandler)
  .openapi(putUsersMePreferencesRoute, putUsersMePreferencesRouteHandler)
  .openapi(deleteUsersProfileImageRoute, deleteUsersProfileImageRouteHandler)
  .openapi(postUsersProfileImageRoute, postUsersProfileImageRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(getUsersIdProfileImageRoute, getUsersIdProfileImageRouteHandler)
  .openapi(getViewFolderRoute, getViewFolderRouteHandler)
  .openapi(getViewFolderUniquePathsRoute, getViewFolderUniquePathsRouteHandler)
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(postWorkflowsRoute, postWorkflowsRouteHandler)
  .openapi(getWorkflowsTriggersRoute, getWorkflowsTriggersRouteHandler)
  .openapi(deleteWorkflowsIdRoute, deleteWorkflowsIdRouteHandler)
  .openapi(getWorkflowsIdRoute, getWorkflowsIdRouteHandler)
  .openapi(putWorkflowsIdRoute, putWorkflowsIdRouteHandler)
  .openapi(getWorkflowsIdLogsRoute, getWorkflowsIdLogsRouteHandler)
  .openapi(getWorkflowsIdShareRoute, getWorkflowsIdShareRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActivitiesRoute,
  postActivitiesRoute,
  getActivitiesStatisticsRoute,
  deleteActivitiesIdRoute,
  postAdminAuthUnlinkAllRoute,
  getAdminConfigRoute,
  putAdminConfigRoute,
  getAdminConfigDefaultsRoute,
  getAdminConfigStorageTemplateRoute,
  postAdminConfigStorageTemplatePreviewRoute,
  deleteAdminDatabaseBackupsRoute,
  getAdminDatabaseBackupsRoute,
  postAdminDatabaseBackupsStartRestoreRoute,
  postAdminDatabaseBackupsUploadRoute,
  getAdminDatabaseBackupsFilenameRoute,
  getAdminIntegrityReportRoute,
  deleteAdminIntegrityReportIdRoute,
  getAdminIntegrityReportIdFileRoute,
  getAdminIntegrityReportTypeCsvRoute,
  getAdminIntegritySummaryRoute,
  postAdminMaintenanceRoute,
  getAdminMaintenanceDetectInstallRoute,
  postAdminMaintenanceLoginRoute,
  getAdminMaintenanceStatusRoute,
  postAdminNotificationsRoute,
  postAdminNotificationsTemplatesNameRoute,
  postAdminNotificationsTemplatesNamePreviewRoute,
  postAdminNotificationsTestEmailRoute,
  getAdminUsersRoute,
  postAdminUsersRoute,
  deleteAdminUsersIdRoute,
  getAdminUsersIdRoute,
  putAdminUsersIdRoute,
  getAdminUsersIdCalendarHeatmapRoute,
  getAdminUsersIdPreferencesRoute,
  putAdminUsersIdPreferencesRoute,
  postAdminUsersIdRestoreRoute,
  getAdminUsersIdSessionsRoute,
  getAdminUsersIdStatisticsRoute,
  getAlbumsRoute,
  postAlbumsRoute,
  putAlbumsAssetsRoute,
  getAlbumsStatisticsRoute,
  deleteAlbumsIdRoute,
  getAlbumsIdRoute,
  patchAlbumsIdRoute,
  deleteAlbumsIdAssetsRoute,
  putAlbumsIdAssetsRoute,
  getAlbumsIdMapMarkersRoute,
  deleteAlbumsIdUserUserIdRoute,
  putAlbumsIdUserUserIdRoute,
  putAlbumsIdUsersRoute,
  getApiKeysRoute,
  postApiKeysRoute,
  getApiKeysMeRoute,
  deleteApiKeysIdRoute,
  getApiKeysIdRoute,
  putApiKeysIdRoute,
  postApiKeysIdRotateRoute,
  getAssetFilesRoute,
  deleteAssetFilesIdRoute,
  getAssetFilesIdRoute,
  getAssetFilesIdDownloadRoute,
  deleteAssetsRoute,
  postAssetsRoute,
  putAssetsRoute,
  postAssetsBulkUploadCheckRoute,
  putAssetsCopyRoute,
  postAssetsJobsRoute,
  deleteAssetsMetadataRoute,
  putAssetsMetadataRoute,
  getAssetsStatisticsRoute,
  getAssetsIdRoute,
  putAssetsIdRoute,
  deleteAssetsIdEditsRoute,
  getAssetsIdEditsRoute,
  putAssetsIdEditsRoute,
  getAssetsIdMetadataRoute,
  putAssetsIdMetadataRoute,
  deleteAssetsIdMetadataKeyRoute,
  getAssetsIdMetadataKeyRoute,
  getAssetsIdOcrRoute,
  getAssetsIdOriginalRoute,
  getAssetsIdThumbnailRoute,
  getAssetsIdVideoPlaybackRoute,
  getAssetsIdVideoStreamMainM3u8Route,
  deleteAssetsIdVideoStreamSessionIdRoute,
  getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route,
  getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute,
  postAuthAdminSignUpRoute,
  postAuthChangePasswordRoute,
  postAuthCodeRoute,
  postAuthExchangeRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  deleteAuthPinCodeRoute,
  postAuthPinCodeRoute,
  putAuthPinCodeRoute,
  postAuthSessionLockRoute,
  postAuthSessionUnlockRoute,
  getAuthStatusRoute,
  postAuthValidateTokenRoute,
  getClusterGroupsRequestsRoute,
  deleteClusterGroupsRequestsIdRoute,
  postClusterGroupsRequestsIdAcceptRoute,
  postClusterGroupsIdLeaveRoute,
  postClusterGroupsIdRegeneratePeopleRoute,
  getClusterGroupsIdRequestsRoute,
  putClusterGroupsIdRequestsRoute,
  getClusterGroupsIdUsersRoute,
  getConfigRoute,
  getConfigDefaultsRoute,
  postDownloadArchiveRoute,
  postDownloadInfoRoute,
  deleteDuplicatesRoute,
  getDuplicatesRoute,
  postDuplicatesResolveRoute,
  deleteDuplicatesIdRoute,
  getFacesRoute,
  postFacesRoute,
  deleteFacesIdRoute,
  putFacesIdRoute,
  getJobsRoute,
  postJobsRoute,
  putJobsNameRoute,
  getLibrariesRoute,
  postLibrariesRoute,
  deleteLibrariesIdRoute,
  getLibrariesIdRoute,
  putLibrariesIdRoute,
  postLibrariesIdScanRoute,
  getLibrariesIdStatisticsRoute,
  postLibrariesIdValidateRoute,
  getMapMarkersRoute,
  getMapReverseGeocodeRoute,
  getMemoriesRoute,
  postMemoriesRoute,
  getMemoriesStatisticsRoute,
  deleteMemoriesIdRoute,
  getMemoriesIdRoute,
  putMemoriesIdRoute,
  deleteMemoriesIdAssetsRoute,
  putMemoriesIdAssetsRoute,
  deleteNotificationsRoute,
  getNotificationsRoute,
  putNotificationsRoute,
  deleteNotificationsIdRoute,
  getNotificationsIdRoute,
  putNotificationsIdRoute,
  postOauthAuthorizeRoute,
  postOauthBackchannelLogoutRoute,
  postOauthCallbackRoute,
  postOauthLinkRoute,
  getOauthMobileRedirectRoute,
  postOauthUnlinkRoute,
  getPartnersRoute,
  postPartnersRoute,
  deletePartnersIdRoute,
  putPartnersIdRoute,
  getPasskeysRoute,
  postPasskeysAuthenticationFinishRoute,
  postPasskeysAuthenticationStartRoute,
  postPasskeysRegistrationFinishRoute,
  postPasskeysRegistrationStartRoute,
  deletePasskeysIdRoute,
  getPasskeysIdRoute,
  patchPasskeysIdRoute,
  deletePeopleRoute,
  getPeopleRoute,
  postPeopleRoute,
  putPeopleRoute,
  postPeopleMergeRoute,
  deletePeopleUsersRoute,
  getPeopleUsersRoute,
  putPeopleUsersRoute,
  deletePeopleIdRoute,
  getPeopleIdRoute,
  putPeopleIdRoute,
  postPeopleIdMergeRoute,
  putPeopleIdReassignRoute,
  getPeopleIdStatisticsRoute,
  getPeopleIdThumbnailRoute,
  getPluginsRoute,
  getPluginsMethodsRoute,
  getPluginsTemplatesRoute,
  getPluginsIdRoute,
  getPublicConfigRoute,
  getPublicConfigDefaultsRoute,
  getQueuesRoute,
  getQueuesNameRoute,
  putQueuesNameRoute,
  deleteQueuesNameJobsRoute,
  getQueuesNameJobsRoute,
  getSearchCitiesRoute,
  getSearchExploreRoute,
  postSearchLargeAssetsRoute,
  postSearchMetadataRoute,
  getSearchPersonRoute,
  getSearchPlacesRoute,
  postSearchRandomRoute,
  postSearchSmartRoute,
  postSearchStatisticsRoute,
  getSearchSuggestionsRoute,
  getServerAboutRoute,
  getServerApkLinksRoute,
  getServerConfigRoute,
  getServerFeaturesRoute,
  deleteServerLicenseRoute,
  getServerLicenseRoute,
  putServerLicenseRoute,
  getServerMediaTypesRoute,
  getServerPingRoute,
  getServerStatisticsRoute,
  getServerStorageRoute,
  getServerVersionRoute,
  getServerVersionCheckRoute,
  getServerVersionHistoryRoute,
  deleteSessionsRoute,
  getSessionsRoute,
  postSessionsRoute,
  deleteSessionsIdRoute,
  putSessionsIdRoute,
  postSessionsIdLockRoute,
  getSharedLinksRoute,
  postSharedLinksRoute,
  postSharedLinksLoginRoute,
  getSharedLinksMeRoute,
  deleteSharedLinksIdRoute,
  getSharedLinksIdRoute,
  patchSharedLinksIdRoute,
  deleteSharedLinksIdAssetsRoute,
  putSharedLinksIdAssetsRoute,
  deleteStacksRoute,
  getStacksRoute,
  postStacksRoute,
  deleteStacksIdRoute,
  getStacksIdRoute,
  putStacksIdRoute,
  deleteStacksIdAssetsAssetIdRoute,
  deleteSyncAckRoute,
  getSyncAckRoute,
  postSyncAckRoute,
  postSyncStreamRoute,
  getSystemConfigRoute,
  putSystemConfigRoute,
  getSystemConfigDefaultsRoute,
  getSystemConfigStorageTemplateOptionsRoute,
  getSystemMetadataAdminOnboardingRoute,
  postSystemMetadataAdminOnboardingRoute,
  getSystemMetadataReverseGeocodingStateRoute,
  getSystemMetadataVersionCheckStateRoute,
  getTagsRoute,
  postTagsRoute,
  putTagsRoute,
  putTagsAssetsRoute,
  deleteTagsIdRoute,
  getTagsIdRoute,
  putTagsIdRoute,
  deleteTagsIdAssetsRoute,
  putTagsIdAssetsRoute,
  getTimelineBucketRoute,
  getTimelineBucketsRoute,
  postTrashEmptyRoute,
  postTrashRestoreRoute,
  postTrashRestoreAssetsRoute,
  getUsersRoute,
  getUsersMeRoute,
  putUsersMeRoute,
  getUsersMeCalendarHeatmapRoute,
  deleteUsersMeLicenseRoute,
  getUsersMeLicenseRoute,
  putUsersMeLicenseRoute,
  deleteUsersMeOnboardingRoute,
  getUsersMeOnboardingRoute,
  putUsersMeOnboardingRoute,
  getUsersMePreferencesRoute,
  putUsersMePreferencesRoute,
  deleteUsersProfileImageRoute,
  postUsersProfileImageRoute,
  getUsersIdRoute,
  getUsersIdProfileImageRoute,
  getViewFolderRoute,
  getViewFolderUniquePathsRoute,
  getWorkflowsRoute,
  postWorkflowsRoute,
  getWorkflowsTriggersRoute,
  deleteWorkflowsIdRoute,
  getWorkflowsIdRoute,
  putWorkflowsIdRoute,
  getWorkflowsIdLogsRoute,
  getWorkflowsIdShareRoute,
} from './routes'
import {
  getActivitiesRouteHandler,
  postActivitiesRouteHandler,
  getActivitiesStatisticsRouteHandler,
  deleteActivitiesIdRouteHandler,
  postAdminAuthUnlinkAllRouteHandler,
  getAdminConfigRouteHandler,
  putAdminConfigRouteHandler,
  getAdminConfigDefaultsRouteHandler,
  getAdminConfigStorageTemplateRouteHandler,
  postAdminConfigStorageTemplatePreviewRouteHandler,
  deleteAdminDatabaseBackupsRouteHandler,
  getAdminDatabaseBackupsRouteHandler,
  postAdminDatabaseBackupsStartRestoreRouteHandler,
  postAdminDatabaseBackupsUploadRouteHandler,
  getAdminDatabaseBackupsFilenameRouteHandler,
  getAdminIntegrityReportRouteHandler,
  deleteAdminIntegrityReportIdRouteHandler,
  getAdminIntegrityReportIdFileRouteHandler,
  getAdminIntegrityReportTypeCsvRouteHandler,
  getAdminIntegritySummaryRouteHandler,
  postAdminMaintenanceRouteHandler,
  getAdminMaintenanceDetectInstallRouteHandler,
  postAdminMaintenanceLoginRouteHandler,
  getAdminMaintenanceStatusRouteHandler,
  postAdminNotificationsRouteHandler,
  postAdminNotificationsTemplatesNameRouteHandler,
  postAdminNotificationsTemplatesNamePreviewRouteHandler,
  postAdminNotificationsTestEmailRouteHandler,
  getAdminUsersRouteHandler,
  postAdminUsersRouteHandler,
  deleteAdminUsersIdRouteHandler,
  getAdminUsersIdRouteHandler,
  putAdminUsersIdRouteHandler,
  getAdminUsersIdCalendarHeatmapRouteHandler,
  getAdminUsersIdPreferencesRouteHandler,
  putAdminUsersIdPreferencesRouteHandler,
  postAdminUsersIdRestoreRouteHandler,
  getAdminUsersIdSessionsRouteHandler,
  getAdminUsersIdStatisticsRouteHandler,
  getAlbumsRouteHandler,
  postAlbumsRouteHandler,
  putAlbumsAssetsRouteHandler,
  getAlbumsStatisticsRouteHandler,
  deleteAlbumsIdRouteHandler,
  getAlbumsIdRouteHandler,
  patchAlbumsIdRouteHandler,
  deleteAlbumsIdAssetsRouteHandler,
  putAlbumsIdAssetsRouteHandler,
  getAlbumsIdMapMarkersRouteHandler,
  deleteAlbumsIdUserUserIdRouteHandler,
  putAlbumsIdUserUserIdRouteHandler,
  putAlbumsIdUsersRouteHandler,
  getApiKeysRouteHandler,
  postApiKeysRouteHandler,
  getApiKeysMeRouteHandler,
  deleteApiKeysIdRouteHandler,
  getApiKeysIdRouteHandler,
  putApiKeysIdRouteHandler,
  postApiKeysIdRotateRouteHandler,
  getAssetFilesRouteHandler,
  deleteAssetFilesIdRouteHandler,
  getAssetFilesIdRouteHandler,
  getAssetFilesIdDownloadRouteHandler,
  deleteAssetsRouteHandler,
  postAssetsRouteHandler,
  putAssetsRouteHandler,
  postAssetsBulkUploadCheckRouteHandler,
  putAssetsCopyRouteHandler,
  postAssetsJobsRouteHandler,
  deleteAssetsMetadataRouteHandler,
  putAssetsMetadataRouteHandler,
  getAssetsStatisticsRouteHandler,
  getAssetsIdRouteHandler,
  putAssetsIdRouteHandler,
  deleteAssetsIdEditsRouteHandler,
  getAssetsIdEditsRouteHandler,
  putAssetsIdEditsRouteHandler,
  getAssetsIdMetadataRouteHandler,
  putAssetsIdMetadataRouteHandler,
  deleteAssetsIdMetadataKeyRouteHandler,
  getAssetsIdMetadataKeyRouteHandler,
  getAssetsIdOcrRouteHandler,
  getAssetsIdOriginalRouteHandler,
  getAssetsIdThumbnailRouteHandler,
  getAssetsIdVideoPlaybackRouteHandler,
  getAssetsIdVideoStreamMainM3u8RouteHandler,
  deleteAssetsIdVideoStreamSessionIdRouteHandler,
  getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8RouteHandler,
  getAssetsIdVideoStreamSessionIdVariantIndexFilenameRouteHandler,
  postAuthAdminSignUpRouteHandler,
  postAuthChangePasswordRouteHandler,
  postAuthCodeRouteHandler,
  postAuthExchangeRouteHandler,
  postAuthLoginRouteHandler,
  postAuthLogoutRouteHandler,
  deleteAuthPinCodeRouteHandler,
  postAuthPinCodeRouteHandler,
  putAuthPinCodeRouteHandler,
  postAuthSessionLockRouteHandler,
  postAuthSessionUnlockRouteHandler,
  getAuthStatusRouteHandler,
  postAuthValidateTokenRouteHandler,
  getClusterGroupsRequestsRouteHandler,
  deleteClusterGroupsRequestsIdRouteHandler,
  postClusterGroupsRequestsIdAcceptRouteHandler,
  postClusterGroupsIdLeaveRouteHandler,
  postClusterGroupsIdRegeneratePeopleRouteHandler,
  getClusterGroupsIdRequestsRouteHandler,
  putClusterGroupsIdRequestsRouteHandler,
  getClusterGroupsIdUsersRouteHandler,
  getConfigRouteHandler,
  getConfigDefaultsRouteHandler,
  postDownloadArchiveRouteHandler,
  postDownloadInfoRouteHandler,
  deleteDuplicatesRouteHandler,
  getDuplicatesRouteHandler,
  postDuplicatesResolveRouteHandler,
  deleteDuplicatesIdRouteHandler,
  getFacesRouteHandler,
  postFacesRouteHandler,
  deleteFacesIdRouteHandler,
  putFacesIdRouteHandler,
  getJobsRouteHandler,
  postJobsRouteHandler,
  putJobsNameRouteHandler,
  getLibrariesRouteHandler,
  postLibrariesRouteHandler,
  deleteLibrariesIdRouteHandler,
  getLibrariesIdRouteHandler,
  putLibrariesIdRouteHandler,
  postLibrariesIdScanRouteHandler,
  getLibrariesIdStatisticsRouteHandler,
  postLibrariesIdValidateRouteHandler,
  getMapMarkersRouteHandler,
  getMapReverseGeocodeRouteHandler,
  getMemoriesRouteHandler,
  postMemoriesRouteHandler,
  getMemoriesStatisticsRouteHandler,
  deleteMemoriesIdRouteHandler,
  getMemoriesIdRouteHandler,
  putMemoriesIdRouteHandler,
  deleteMemoriesIdAssetsRouteHandler,
  putMemoriesIdAssetsRouteHandler,
  deleteNotificationsRouteHandler,
  getNotificationsRouteHandler,
  putNotificationsRouteHandler,
  deleteNotificationsIdRouteHandler,
  getNotificationsIdRouteHandler,
  putNotificationsIdRouteHandler,
  postOauthAuthorizeRouteHandler,
  postOauthBackchannelLogoutRouteHandler,
  postOauthCallbackRouteHandler,
  postOauthLinkRouteHandler,
  getOauthMobileRedirectRouteHandler,
  postOauthUnlinkRouteHandler,
  getPartnersRouteHandler,
  postPartnersRouteHandler,
  deletePartnersIdRouteHandler,
  putPartnersIdRouteHandler,
  getPasskeysRouteHandler,
  postPasskeysAuthenticationFinishRouteHandler,
  postPasskeysAuthenticationStartRouteHandler,
  postPasskeysRegistrationFinishRouteHandler,
  postPasskeysRegistrationStartRouteHandler,
  deletePasskeysIdRouteHandler,
  getPasskeysIdRouteHandler,
  patchPasskeysIdRouteHandler,
  deletePeopleRouteHandler,
  getPeopleRouteHandler,
  postPeopleRouteHandler,
  putPeopleRouteHandler,
  postPeopleMergeRouteHandler,
  deletePeopleUsersRouteHandler,
  getPeopleUsersRouteHandler,
  putPeopleUsersRouteHandler,
  deletePeopleIdRouteHandler,
  getPeopleIdRouteHandler,
  putPeopleIdRouteHandler,
  postPeopleIdMergeRouteHandler,
  putPeopleIdReassignRouteHandler,
  getPeopleIdStatisticsRouteHandler,
  getPeopleIdThumbnailRouteHandler,
  getPluginsRouteHandler,
  getPluginsMethodsRouteHandler,
  getPluginsTemplatesRouteHandler,
  getPluginsIdRouteHandler,
  getPublicConfigRouteHandler,
  getPublicConfigDefaultsRouteHandler,
  getQueuesRouteHandler,
  getQueuesNameRouteHandler,
  putQueuesNameRouteHandler,
  deleteQueuesNameJobsRouteHandler,
  getQueuesNameJobsRouteHandler,
  getSearchCitiesRouteHandler,
  getSearchExploreRouteHandler,
  postSearchLargeAssetsRouteHandler,
  postSearchMetadataRouteHandler,
  getSearchPersonRouteHandler,
  getSearchPlacesRouteHandler,
  postSearchRandomRouteHandler,
  postSearchSmartRouteHandler,
  postSearchStatisticsRouteHandler,
  getSearchSuggestionsRouteHandler,
  getServerAboutRouteHandler,
  getServerApkLinksRouteHandler,
  getServerConfigRouteHandler,
  getServerFeaturesRouteHandler,
  deleteServerLicenseRouteHandler,
  getServerLicenseRouteHandler,
  putServerLicenseRouteHandler,
  getServerMediaTypesRouteHandler,
  getServerPingRouteHandler,
  getServerStatisticsRouteHandler,
  getServerStorageRouteHandler,
  getServerVersionRouteHandler,
  getServerVersionCheckRouteHandler,
  getServerVersionHistoryRouteHandler,
  deleteSessionsRouteHandler,
  getSessionsRouteHandler,
  postSessionsRouteHandler,
  deleteSessionsIdRouteHandler,
  putSessionsIdRouteHandler,
  postSessionsIdLockRouteHandler,
  getSharedLinksRouteHandler,
  postSharedLinksRouteHandler,
  postSharedLinksLoginRouteHandler,
  getSharedLinksMeRouteHandler,
  deleteSharedLinksIdRouteHandler,
  getSharedLinksIdRouteHandler,
  patchSharedLinksIdRouteHandler,
  deleteSharedLinksIdAssetsRouteHandler,
  putSharedLinksIdAssetsRouteHandler,
  deleteStacksRouteHandler,
  getStacksRouteHandler,
  postStacksRouteHandler,
  deleteStacksIdRouteHandler,
  getStacksIdRouteHandler,
  putStacksIdRouteHandler,
  deleteStacksIdAssetsAssetIdRouteHandler,
  deleteSyncAckRouteHandler,
  getSyncAckRouteHandler,
  postSyncAckRouteHandler,
  postSyncStreamRouteHandler,
  getSystemConfigRouteHandler,
  putSystemConfigRouteHandler,
  getSystemConfigDefaultsRouteHandler,
  getSystemConfigStorageTemplateOptionsRouteHandler,
  getSystemMetadataAdminOnboardingRouteHandler,
  postSystemMetadataAdminOnboardingRouteHandler,
  getSystemMetadataReverseGeocodingStateRouteHandler,
  getSystemMetadataVersionCheckStateRouteHandler,
  getTagsRouteHandler,
  postTagsRouteHandler,
  putTagsRouteHandler,
  putTagsAssetsRouteHandler,
  deleteTagsIdRouteHandler,
  getTagsIdRouteHandler,
  putTagsIdRouteHandler,
  deleteTagsIdAssetsRouteHandler,
  putTagsIdAssetsRouteHandler,
  getTimelineBucketRouteHandler,
  getTimelineBucketsRouteHandler,
  postTrashEmptyRouteHandler,
  postTrashRestoreRouteHandler,
  postTrashRestoreAssetsRouteHandler,
  getUsersRouteHandler,
  getUsersMeRouteHandler,
  putUsersMeRouteHandler,
  getUsersMeCalendarHeatmapRouteHandler,
  deleteUsersMeLicenseRouteHandler,
  getUsersMeLicenseRouteHandler,
  putUsersMeLicenseRouteHandler,
  deleteUsersMeOnboardingRouteHandler,
  getUsersMeOnboardingRouteHandler,
  putUsersMeOnboardingRouteHandler,
  getUsersMePreferencesRouteHandler,
  putUsersMePreferencesRouteHandler,
  deleteUsersProfileImageRouteHandler,
  postUsersProfileImageRouteHandler,
  getUsersIdRouteHandler,
  getUsersIdProfileImageRouteHandler,
  getViewFolderRouteHandler,
  getViewFolderUniquePathsRouteHandler,
  getWorkflowsRouteHandler,
  postWorkflowsRouteHandler,
  getWorkflowsTriggersRouteHandler,
  deleteWorkflowsIdRouteHandler,
  getWorkflowsIdRouteHandler,
  putWorkflowsIdRouteHandler,
  getWorkflowsIdLogsRouteHandler,
  getWorkflowsIdShareRouteHandler,
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
  .openapi(postAuthCodeRoute, postAuthCodeRouteHandler)
  .openapi(postAuthExchangeRoute, postAuthExchangeRouteHandler)
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

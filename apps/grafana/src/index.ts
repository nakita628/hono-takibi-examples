import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessControlRolesRoleUIDRoute,
  deleteAccessControlTeamsTeamIdRolesRoleUIDRoute,
  deleteAccessControlUsersUserIdRolesRoleUIDRoute,
  deleteAdminUsersUserIdRoute,
  deleteAnnotationsAnnotationIdRoute,
  deleteCloudmigrationMigrationUidRoute,
  deleteCloudmigrationTokenUidRoute,
  deleteConvertApiPromRulesNamespaceTitleGroupRoute,
  deleteConvertApiPromRulesNamespaceTitleRoute,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  deleteDashboardsUidDashboardUidPublicDashboardsUidRoute,
  deleteDashboardsUidUidRoute,
  deleteDatasourcesNameNameRoute,
  deleteDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  deleteDatasourcesUidUidCorrelationsCorrelationUIDRoute,
  deleteDatasourcesUidUidRoute,
  deleteFoldersFolderUidRoute,
  deleteLibraryElementsLibraryElementUidRoute,
  deleteLicensingTokenRoute,
  deleteOrgInvitesInvitationCodeRevokeRoute,
  deleteOrgsOrgIdRoute,
  deleteOrgsOrgIdUsersUserIdRoute,
  deleteOrgUsersUserIdRoute,
  deletePlaylistsUidRoute,
  deleteQueryHistoryQueryHistoryUidRoute,
  deleteQueryHistoryStarQueryHistoryUidRoute,
  deleteRecordingRulesRecordingRuleIDRoute,
  deleteRecordingRulesWriterRoute,
  deleteReportsIdRoute,
  deleteServiceaccountsServiceAccountIdRoute,
  deleteServiceaccountsServiceAccountIdTokensTokenIdRoute,
  deleteSnapshotsKeyRoute,
  deleteTeamsTeamIdGroupsRoute,
  deleteTeamsTeamIdMembersUserIdRoute,
  deleteTeamsTeamIdRoute,
  deleteUserStarsDashboardUidDashboardUidRoute,
  deleteV1ProvisioningAlertRulesUIDRoute,
  deleteV1ProvisioningContactPointsUIDRoute,
  deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  deleteV1ProvisioningMuteTimingsNameRoute,
  deleteV1ProvisioningPoliciesRoute,
  deleteV1ProvisioningTemplatesNameRoute,
  deleteV1SsoSettingsKeyRoute,
  getAccessControlResourceDescriptionRoute,
  getAccessControlResourceResourceIDRoute,
  getAccessControlRolesRoleUIDAssignmentsRoute,
  getAccessControlRolesRoleUIDRoute,
  getAccessControlRolesRoute,
  getAccessControlStatusRoute,
  getAccessControlTeamsTeamIdRolesRoute,
  getAccessControlUsersUserIdRolesRoute,
  getAdminLdapStatusRoute,
  getAdminLdapSyncStatusRoute,
  getAdminLdapUserNameRoute,
  getAdminSettingsRoute,
  getAdminStatsRoute,
  getAdminUsersUserIdAuthTokensRoute,
  getAdminUsersUserIdQuotasRoute,
  getAnnotationsAnnotationIdRoute,
  getAnnotationsRoute,
  getAnnotationsTagsRoute,
  getAnonymousDevicesRoute,
  getAnonymousSearchRoute,
  getCloudmigrationMigrationRoute,
  getCloudmigrationMigrationUidRoute,
  getCloudmigrationMigrationUidSnapshotSnapshotUidRoute,
  getCloudmigrationMigrationUidSnapshotsRoute,
  getCloudmigrationResourcesDependenciesRoute,
  getCloudmigrationTokenRoute,
  getConvertApiPromRulesNamespaceTitleGroupRoute,
  getConvertApiPromRulesNamespaceTitleRoute,
  getConvertApiPromRulesRoute,
  getConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
  getConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  getConvertPrometheusConfigV1RulesRoute,
  getDashboardsHomeRoute,
  getDashboardSnapshotsRoute,
  getDashboardsPublicDashboardsRoute,
  getDashboardsTagsRoute,
  getDashboardsUidDashboardUidPublicDashboardsRoute,
  getDashboardsUidUidPermissionsRoute,
  getDashboardsUidUidRoute,
  getDashboardsUidUidVersionsDashboardVersionIDRoute,
  getDashboardsUidUidVersionsRoute,
  getDashboardsVariablesSharedClustersOccurrencesRoute,
  getDashboardsVariablesSharedClustersRoute,
  getDatasourcesCorrelationsRoute,
  getDatasourcesDataSourceUIDCacheRoute,
  getDatasourcesIdNameRoute,
  getDatasourcesNameNameRoute,
  getDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  getDatasourcesRoute,
  getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
  getDatasourcesUidSourceUIDCorrelationsRoute,
  getDatasourcesUidUidHealthRoute,
  getDatasourcesUidUidLbacTeamsRoute,
  getDatasourcesUidUidResourcesDatasourceProxyRouteRoute,
  getDatasourcesUidUidRoute,
  getFoldersFolderUidCountsRoute,
  getFoldersFolderUidPermissionsRoute,
  getFoldersFolderUidRoute,
  getFoldersRoute,
  getHealthRoute,
  getLibraryElementsLibraryElementUidConnectionsIndexRoute,
  getLibraryElementsLibraryElementUidRoute,
  getLibraryElementsNameLibraryElementNameRoute,
  getLibraryElementsRoute,
  getLicensingCheckRoute,
  getLicensingCustomPermissionsCsvRoute,
  getLicensingCustomPermissionsRoute,
  getLicensingRefreshStatsRoute,
  getLicensingTokenRoute,
  getLogoutSamlRoute,
  getOrgInvitesRoute,
  getOrgPreferencesRoute,
  getOrgQuotasRoute,
  getOrgRoute,
  getOrgsNameOrgNameRoute,
  getOrgsOrgIdQuotasRoute,
  getOrgsOrgIdRoute,
  getOrgsOrgIdUsersRoute,
  getOrgsOrgIdUsersSearchRoute,
  getOrgsRoute,
  getOrgUsersLookupRoute,
  getOrgUsersRoute,
  getPlaylistsRoute,
  getPlaylistsUidItemsRoute,
  getPlaylistsUidRoute,
  getPublicDashboardsAccessTokenAnnotationsRoute,
  getPublicDashboardsAccessTokenRoute,
  getQueryHistoryRoute,
  getRecordingRulesRoute,
  getRecordingRulesWriterRoute,
  getReportsDashboardsUidRoute,
  getReportsIdRoute,
  getReportsImagesImageRoute,
  getReportsRenderCsvsRoute,
  getReportsRenderPdfsRoute,
  getReportsRoute,
  getReportsSettingsRoute,
  getSamlMetadataRoute,
  getSamlSloRoute,
  getSearchRoute,
  getSearchSortingRoute,
  getServiceaccountsSearchRoute,
  getServiceaccountsServiceAccountIdRoute,
  getServiceaccountsServiceAccountIdTokensRoute,
  getSigningKeysKeysRoute,
  getSnapshotsDeleteDeleteKeyRoute,
  getSnapshotSharedOptionsRoute,
  getSnapshotsKeyRoute,
  getTeamsSearchRoute,
  getTeamsTeamIdGroupsRoute,
  getTeamsTeamIdGroupsSearchRoute,
  getTeamsTeamIdMembersRoute,
  getTeamsTeamIdPreferencesRoute,
  getTeamsTeamIdRoute,
  getUserAuthTokensRoute,
  getUserEmailUpdateRoute,
  getUserOrgsRoute,
  getUserPreferencesRoute,
  getUserQuotasRoute,
  getUserRoute,
  getUsersLookupRoute,
  getUsersRoute,
  getUsersSearchRoute,
  getUsersUserIdOrgsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTeamsRoute,
  getUserTeamsRoute,
  getV1ProvisioningAlertRulesExportRoute,
  getV1ProvisioningAlertRulesRoute,
  getV1ProvisioningAlertRulesUIDExportRoute,
  getV1ProvisioningAlertRulesUIDRoute,
  getV1ProvisioningContactPointsExportRoute,
  getV1ProvisioningContactPointsRoute,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRoute,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  getV1ProvisioningMuteTimingsExportRoute,
  getV1ProvisioningMuteTimingsNameExportRoute,
  getV1ProvisioningMuteTimingsNameRoute,
  getV1ProvisioningMuteTimingsRoute,
  getV1ProvisioningPoliciesExportRoute,
  getV1ProvisioningPoliciesRoute,
  getV1ProvisioningTemplatesNameRoute,
  getV1ProvisioningTemplatesRoute,
  getV1SsoSettingsKeyRoute,
  getV1SsoSettingsRoute,
  patchAnnotationsAnnotationIdRoute,
  patchDashboardsUidDashboardUidPublicDashboardsUidRoute,
  patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
  patchLibraryElementsLibraryElementUidRoute,
  patchOrgPreferencesRoute,
  patchOrgsOrgIdUsersUserIdRoute,
  patchOrgUsersUserIdRoute,
  patchQueryHistoryQueryHistoryUidRoute,
  patchServiceaccountsServiceAccountIdRoute,
  patchUserPreferencesRoute,
  patchV1SsoSettingsKeyRoute,
  postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRoute,
  postAccessControlResourceResourceIDRoute,
  postAccessControlResourceResourceIDTeamsTeamIDRoute,
  postAccessControlResourceResourceIDUsersUserIDRoute,
  postAccessControlRolesRoute,
  postAccessControlTeamsRolesSearchRoute,
  postAccessControlTeamsTeamIdRolesRoute,
  postAccessControlUsersRolesSearchRoute,
  postAccessControlUsersUserIdRolesRoute,
  postAdminLdapReloadRoute,
  postAdminLdapSyncUserIdRoute,
  postAdminProvisioningAccessControlReloadRoute,
  postAdminProvisioningDashboardsReloadRoute,
  postAdminProvisioningDatasourcesReloadRoute,
  postAdminProvisioningPluginsReloadRoute,
  postAdminUsersRoute,
  postAdminUsersUserIdDisableRoute,
  postAdminUsersUserIdEnableRoute,
  postAdminUsersUserIdLogoutRoute,
  postAdminUsersUserIdRevokeAuthTokenRoute,
  postAnnotationsGraphiteRoute,
  postAnnotationsMassDeleteRoute,
  postAnnotationsRoute,
  postCloudmigrationMigrationRoute,
  postCloudmigrationMigrationUidSnapshotRoute,
  postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRoute,
  postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRoute,
  postCloudmigrationTokenRoute,
  postConvertApiPromRulesNamespaceTitleRoute,
  postConvertApiPromRulesRoute,
  postConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  postConvertPrometheusConfigV1RulesRoute,
  postDashboardsDbRoute,
  postDashboardsImportRoute,
  postDashboardsInterpolateRoute,
  postDashboardsUidDashboardUidPublicDashboardsRoute,
  postDashboardsUidUidPermissionsRoute,
  postDashboardsUidUidRestoreRoute,
  postDashboardsVariablesPromoteRoute,
  postDashboardsVariablesSharedClustersRescanRoute,
  postDatasourcesDataSourceUIDCacheCleanRoute,
  postDatasourcesDataSourceUIDCacheDisableRoute,
  postDatasourcesDataSourceUIDCacheEnableRoute,
  postDatasourcesDataSourceUIDCacheRoute,
  postDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  postDatasourcesRoute,
  postDatasourcesUidSourceUIDCorrelationsRoute,
  postDsQueryRoute,
  postFoldersFolderUidMoveRoute,
  postFoldersFolderUidPermissionsRoute,
  postFoldersRoute,
  postLibraryElementsRoute,
  postLicensingTokenRenewRoute,
  postLicensingTokenRoute,
  postOrgInvitesRoute,
  postOrgsOrgIdUsersRoute,
  postOrgsRoute,
  postOrgUsersRoute,
  postPlaylistsRoute,
  postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute,
  postQueryHistoryRoute,
  postQueryHistoryStarQueryHistoryUidRoute,
  postRecordingRulesRoute,
  postRecordingRulesTestRoute,
  postRecordingRulesWriterRoute,
  postReportsEmailRoute,
  postReportsRoute,
  postReportsSettingsRoute,
  postReportsTestEmailRoute,
  postSamlAcsRoute,
  postSamlSloRoute,
  postServiceaccountsRoute,
  postServiceaccountsServiceAccountIdTokensRoute,
  postSnapshotsRoute,
  postTeamsRoute,
  postTeamsTeamIdGroupsRoute,
  postTeamsTeamIdMembersRoute,
  postUserRevokeAuthTokenRoute,
  postUserStarsDashboardUidDashboardUidRoute,
  postUserUsingOrgIdRoute,
  postV1ProvisioningAlertRulesRoute,
  postV1ProvisioningContactPointsRoute,
  postV1ProvisioningMuteTimingsRoute,
  putAccessControlRolesRoleUIDAssignmentsRoute,
  putAccessControlRolesRoleUIDRoute,
  putAccessControlTeamsTeamIdRolesRoute,
  putAccessControlUsersUserIdRolesRoute,
  putAdminUsersUserIdPasswordRoute,
  putAdminUsersUserIdPermissionsRoute,
  putAdminUsersUserIdQuotasQuotaTargetRoute,
  putAnnotationsAnnotationIdRoute,
  putDatasourcesUidUidLbacTeamsRoute,
  putDatasourcesUidUidRoute,
  putFoldersFolderUidRoute,
  putOrgAddressRoute,
  putOrgPreferencesRoute,
  putOrgRoute,
  putOrgsOrgIdAddressRoute,
  putOrgsOrgIdQuotasQuotaTargetRoute,
  putOrgsOrgIdRoute,
  putPlaylistsUidRoute,
  putRecordingRulesRoute,
  putReportsIdRoute,
  putTeamsTeamIdMembersRoute,
  putTeamsTeamIdMembersUserIdRoute,
  putTeamsTeamIdPreferencesRoute,
  putTeamsTeamIdRoute,
  putUserPasswordRoute,
  putUserPreferencesRoute,
  putUserRoute,
  putUsersUserIdRoute,
  putV1ProvisioningAlertRulesUIDRoute,
  putV1ProvisioningContactPointsUIDRoute,
  putV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  putV1ProvisioningMuteTimingsNameRoute,
  putV1ProvisioningPoliciesRoute,
  putV1ProvisioningTemplatesNameRoute,
  putV1SsoSettingsKeyRoute,
} from './routes'
import {
  deleteAccessControlRolesRoleUIDRouteHandler,
  deleteAccessControlTeamsTeamIdRolesRoleUIDRouteHandler,
  deleteAccessControlUsersUserIdRolesRoleUIDRouteHandler,
  deleteAdminUsersUserIdRouteHandler,
  deleteAnnotationsAnnotationIdRouteHandler,
  deleteCloudmigrationMigrationUidRouteHandler,
  deleteCloudmigrationTokenUidRouteHandler,
  deleteConvertApiPromRulesNamespaceTitleGroupRouteHandler,
  deleteConvertApiPromRulesNamespaceTitleRouteHandler,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRouteHandler,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  deleteDashboardsUidDashboardUidPublicDashboardsUidRouteHandler,
  deleteDashboardsUidUidRouteHandler,
  deleteDatasourcesNameNameRouteHandler,
  deleteDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  deleteDatasourcesUidUidCorrelationsCorrelationUIDRouteHandler,
  deleteDatasourcesUidUidRouteHandler,
  deleteFoldersFolderUidRouteHandler,
  deleteLibraryElementsLibraryElementUidRouteHandler,
  deleteLicensingTokenRouteHandler,
  deleteOrgInvitesInvitationCodeRevokeRouteHandler,
  deleteOrgsOrgIdRouteHandler,
  deleteOrgsOrgIdUsersUserIdRouteHandler,
  deleteOrgUsersUserIdRouteHandler,
  deletePlaylistsUidRouteHandler,
  deleteQueryHistoryQueryHistoryUidRouteHandler,
  deleteQueryHistoryStarQueryHistoryUidRouteHandler,
  deleteRecordingRulesRecordingRuleIDRouteHandler,
  deleteRecordingRulesWriterRouteHandler,
  deleteReportsIdRouteHandler,
  deleteServiceaccountsServiceAccountIdRouteHandler,
  deleteServiceaccountsServiceAccountIdTokensTokenIdRouteHandler,
  deleteSnapshotsKeyRouteHandler,
  deleteTeamsTeamIdGroupsRouteHandler,
  deleteTeamsTeamIdMembersUserIdRouteHandler,
  deleteTeamsTeamIdRouteHandler,
  deleteUserStarsDashboardUidDashboardUidRouteHandler,
  deleteV1ProvisioningAlertRulesUIDRouteHandler,
  deleteV1ProvisioningContactPointsUIDRouteHandler,
  deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  deleteV1ProvisioningMuteTimingsNameRouteHandler,
  deleteV1ProvisioningPoliciesRouteHandler,
  deleteV1ProvisioningTemplatesNameRouteHandler,
  deleteV1SsoSettingsKeyRouteHandler,
  getAccessControlResourceDescriptionRouteHandler,
  getAccessControlResourceResourceIDRouteHandler,
  getAccessControlRolesRoleUIDAssignmentsRouteHandler,
  getAccessControlRolesRoleUIDRouteHandler,
  getAccessControlRolesRouteHandler,
  getAccessControlStatusRouteHandler,
  getAccessControlTeamsTeamIdRolesRouteHandler,
  getAccessControlUsersUserIdRolesRouteHandler,
  getAdminLdapStatusRouteHandler,
  getAdminLdapSyncStatusRouteHandler,
  getAdminLdapUserNameRouteHandler,
  getAdminSettingsRouteHandler,
  getAdminStatsRouteHandler,
  getAdminUsersUserIdAuthTokensRouteHandler,
  getAdminUsersUserIdQuotasRouteHandler,
  getAnnotationsAnnotationIdRouteHandler,
  getAnnotationsRouteHandler,
  getAnnotationsTagsRouteHandler,
  getAnonymousDevicesRouteHandler,
  getAnonymousSearchRouteHandler,
  getCloudmigrationMigrationRouteHandler,
  getCloudmigrationMigrationUidRouteHandler,
  getCloudmigrationMigrationUidSnapshotSnapshotUidRouteHandler,
  getCloudmigrationMigrationUidSnapshotsRouteHandler,
  getCloudmigrationResourcesDependenciesRouteHandler,
  getCloudmigrationTokenRouteHandler,
  getConvertApiPromRulesNamespaceTitleGroupRouteHandler,
  getConvertApiPromRulesNamespaceTitleRouteHandler,
  getConvertApiPromRulesRouteHandler,
  getConvertPrometheusConfigV1RulesNamespaceTitleGroupRouteHandler,
  getConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  getConvertPrometheusConfigV1RulesRouteHandler,
  getDashboardsHomeRouteHandler,
  getDashboardSnapshotsRouteHandler,
  getDashboardsPublicDashboardsRouteHandler,
  getDashboardsTagsRouteHandler,
  getDashboardsUidDashboardUidPublicDashboardsRouteHandler,
  getDashboardsUidUidPermissionsRouteHandler,
  getDashboardsUidUidRouteHandler,
  getDashboardsUidUidVersionsDashboardVersionIDRouteHandler,
  getDashboardsUidUidVersionsRouteHandler,
  getDashboardsVariablesSharedClustersOccurrencesRouteHandler,
  getDashboardsVariablesSharedClustersRouteHandler,
  getDatasourcesCorrelationsRouteHandler,
  getDatasourcesDataSourceUIDCacheRouteHandler,
  getDatasourcesIdNameRouteHandler,
  getDatasourcesNameNameRouteHandler,
  getDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  getDatasourcesRouteHandler,
  getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRouteHandler,
  getDatasourcesUidSourceUIDCorrelationsRouteHandler,
  getDatasourcesUidUidHealthRouteHandler,
  getDatasourcesUidUidLbacTeamsRouteHandler,
  getDatasourcesUidUidResourcesDatasourceProxyRouteRouteHandler,
  getDatasourcesUidUidRouteHandler,
  getFoldersFolderUidCountsRouteHandler,
  getFoldersFolderUidPermissionsRouteHandler,
  getFoldersFolderUidRouteHandler,
  getFoldersRouteHandler,
  getHealthRouteHandler,
  getLibraryElementsLibraryElementUidConnectionsIndexRouteHandler,
  getLibraryElementsLibraryElementUidRouteHandler,
  getLibraryElementsNameLibraryElementNameRouteHandler,
  getLibraryElementsRouteHandler,
  getLicensingCheckRouteHandler,
  getLicensingCustomPermissionsCsvRouteHandler,
  getLicensingCustomPermissionsRouteHandler,
  getLicensingRefreshStatsRouteHandler,
  getLicensingTokenRouteHandler,
  getLogoutSamlRouteHandler,
  getOrgInvitesRouteHandler,
  getOrgPreferencesRouteHandler,
  getOrgQuotasRouteHandler,
  getOrgRouteHandler,
  getOrgsNameOrgNameRouteHandler,
  getOrgsOrgIdQuotasRouteHandler,
  getOrgsOrgIdRouteHandler,
  getOrgsOrgIdUsersRouteHandler,
  getOrgsOrgIdUsersSearchRouteHandler,
  getOrgsRouteHandler,
  getOrgUsersLookupRouteHandler,
  getOrgUsersRouteHandler,
  getPlaylistsRouteHandler,
  getPlaylistsUidItemsRouteHandler,
  getPlaylistsUidRouteHandler,
  getPublicDashboardsAccessTokenAnnotationsRouteHandler,
  getPublicDashboardsAccessTokenRouteHandler,
  getQueryHistoryRouteHandler,
  getRecordingRulesRouteHandler,
  getRecordingRulesWriterRouteHandler,
  getReportsDashboardsUidRouteHandler,
  getReportsIdRouteHandler,
  getReportsImagesImageRouteHandler,
  getReportsRenderCsvsRouteHandler,
  getReportsRenderPdfsRouteHandler,
  getReportsRouteHandler,
  getReportsSettingsRouteHandler,
  getSamlMetadataRouteHandler,
  getSamlSloRouteHandler,
  getSearchRouteHandler,
  getSearchSortingRouteHandler,
  getServiceaccountsSearchRouteHandler,
  getServiceaccountsServiceAccountIdRouteHandler,
  getServiceaccountsServiceAccountIdTokensRouteHandler,
  getSigningKeysKeysRouteHandler,
  getSnapshotsDeleteDeleteKeyRouteHandler,
  getSnapshotSharedOptionsRouteHandler,
  getSnapshotsKeyRouteHandler,
  getTeamsSearchRouteHandler,
  getTeamsTeamIdGroupsRouteHandler,
  getTeamsTeamIdGroupsSearchRouteHandler,
  getTeamsTeamIdMembersRouteHandler,
  getTeamsTeamIdPreferencesRouteHandler,
  getTeamsTeamIdRouteHandler,
  getUserAuthTokensRouteHandler,
  getUserEmailUpdateRouteHandler,
  getUserOrgsRouteHandler,
  getUserPreferencesRouteHandler,
  getUserQuotasRouteHandler,
  getUserRouteHandler,
  getUsersLookupRouteHandler,
  getUsersRouteHandler,
  getUsersSearchRouteHandler,
  getUsersUserIdOrgsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdTeamsRouteHandler,
  getUserTeamsRouteHandler,
  getV1ProvisioningAlertRulesExportRouteHandler,
  getV1ProvisioningAlertRulesRouteHandler,
  getV1ProvisioningAlertRulesUIDExportRouteHandler,
  getV1ProvisioningAlertRulesUIDRouteHandler,
  getV1ProvisioningContactPointsExportRouteHandler,
  getV1ProvisioningContactPointsRouteHandler,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRouteHandler,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  getV1ProvisioningMuteTimingsExportRouteHandler,
  getV1ProvisioningMuteTimingsNameExportRouteHandler,
  getV1ProvisioningMuteTimingsNameRouteHandler,
  getV1ProvisioningMuteTimingsRouteHandler,
  getV1ProvisioningPoliciesExportRouteHandler,
  getV1ProvisioningPoliciesRouteHandler,
  getV1ProvisioningTemplatesNameRouteHandler,
  getV1ProvisioningTemplatesRouteHandler,
  getV1SsoSettingsKeyRouteHandler,
  getV1SsoSettingsRouteHandler,
  patchAnnotationsAnnotationIdRouteHandler,
  patchDashboardsUidDashboardUidPublicDashboardsUidRouteHandler,
  patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRouteHandler,
  patchLibraryElementsLibraryElementUidRouteHandler,
  patchOrgPreferencesRouteHandler,
  patchOrgsOrgIdUsersUserIdRouteHandler,
  patchOrgUsersUserIdRouteHandler,
  patchQueryHistoryQueryHistoryUidRouteHandler,
  patchServiceaccountsServiceAccountIdRouteHandler,
  patchUserPreferencesRouteHandler,
  patchV1SsoSettingsKeyRouteHandler,
  postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRouteHandler,
  postAccessControlResourceResourceIDRouteHandler,
  postAccessControlResourceResourceIDTeamsTeamIDRouteHandler,
  postAccessControlResourceResourceIDUsersUserIDRouteHandler,
  postAccessControlRolesRouteHandler,
  postAccessControlTeamsRolesSearchRouteHandler,
  postAccessControlTeamsTeamIdRolesRouteHandler,
  postAccessControlUsersRolesSearchRouteHandler,
  postAccessControlUsersUserIdRolesRouteHandler,
  postAdminLdapReloadRouteHandler,
  postAdminLdapSyncUserIdRouteHandler,
  postAdminProvisioningAccessControlReloadRouteHandler,
  postAdminProvisioningDashboardsReloadRouteHandler,
  postAdminProvisioningDatasourcesReloadRouteHandler,
  postAdminProvisioningPluginsReloadRouteHandler,
  postAdminUsersRouteHandler,
  postAdminUsersUserIdDisableRouteHandler,
  postAdminUsersUserIdEnableRouteHandler,
  postAdminUsersUserIdLogoutRouteHandler,
  postAdminUsersUserIdRevokeAuthTokenRouteHandler,
  postAnnotationsGraphiteRouteHandler,
  postAnnotationsMassDeleteRouteHandler,
  postAnnotationsRouteHandler,
  postCloudmigrationMigrationRouteHandler,
  postCloudmigrationMigrationUidSnapshotRouteHandler,
  postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRouteHandler,
  postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRouteHandler,
  postCloudmigrationTokenRouteHandler,
  postConvertApiPromRulesNamespaceTitleRouteHandler,
  postConvertApiPromRulesRouteHandler,
  postConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  postConvertPrometheusConfigV1RulesRouteHandler,
  postDashboardsDbRouteHandler,
  postDashboardsImportRouteHandler,
  postDashboardsInterpolateRouteHandler,
  postDashboardsUidDashboardUidPublicDashboardsRouteHandler,
  postDashboardsUidUidPermissionsRouteHandler,
  postDashboardsUidUidRestoreRouteHandler,
  postDashboardsVariablesPromoteRouteHandler,
  postDashboardsVariablesSharedClustersRescanRouteHandler,
  postDatasourcesDataSourceUIDCacheCleanRouteHandler,
  postDatasourcesDataSourceUIDCacheDisableRouteHandler,
  postDatasourcesDataSourceUIDCacheEnableRouteHandler,
  postDatasourcesDataSourceUIDCacheRouteHandler,
  postDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  postDatasourcesRouteHandler,
  postDatasourcesUidSourceUIDCorrelationsRouteHandler,
  postDsQueryRouteHandler,
  postFoldersFolderUidMoveRouteHandler,
  postFoldersFolderUidPermissionsRouteHandler,
  postFoldersRouteHandler,
  postLibraryElementsRouteHandler,
  postLicensingTokenRenewRouteHandler,
  postLicensingTokenRouteHandler,
  postOrgInvitesRouteHandler,
  postOrgsOrgIdUsersRouteHandler,
  postOrgsRouteHandler,
  postOrgUsersRouteHandler,
  postPlaylistsRouteHandler,
  postPublicDashboardsAccessTokenPanelsPanelIdQueryRouteHandler,
  postQueryHistoryRouteHandler,
  postQueryHistoryStarQueryHistoryUidRouteHandler,
  postRecordingRulesRouteHandler,
  postRecordingRulesTestRouteHandler,
  postRecordingRulesWriterRouteHandler,
  postReportsEmailRouteHandler,
  postReportsRouteHandler,
  postReportsSettingsRouteHandler,
  postReportsTestEmailRouteHandler,
  postSamlAcsRouteHandler,
  postSamlSloRouteHandler,
  postServiceaccountsRouteHandler,
  postServiceaccountsServiceAccountIdTokensRouteHandler,
  postSnapshotsRouteHandler,
  postTeamsRouteHandler,
  postTeamsTeamIdGroupsRouteHandler,
  postTeamsTeamIdMembersRouteHandler,
  postUserRevokeAuthTokenRouteHandler,
  postUserStarsDashboardUidDashboardUidRouteHandler,
  postUserUsingOrgIdRouteHandler,
  postV1ProvisioningAlertRulesRouteHandler,
  postV1ProvisioningContactPointsRouteHandler,
  postV1ProvisioningMuteTimingsRouteHandler,
  putAccessControlRolesRoleUIDAssignmentsRouteHandler,
  putAccessControlRolesRoleUIDRouteHandler,
  putAccessControlTeamsTeamIdRolesRouteHandler,
  putAccessControlUsersUserIdRolesRouteHandler,
  putAdminUsersUserIdPasswordRouteHandler,
  putAdminUsersUserIdPermissionsRouteHandler,
  putAdminUsersUserIdQuotasQuotaTargetRouteHandler,
  putAnnotationsAnnotationIdRouteHandler,
  putDatasourcesUidUidLbacTeamsRouteHandler,
  putDatasourcesUidUidRouteHandler,
  putFoldersFolderUidRouteHandler,
  putOrgAddressRouteHandler,
  putOrgPreferencesRouteHandler,
  putOrgRouteHandler,
  putOrgsOrgIdAddressRouteHandler,
  putOrgsOrgIdQuotasQuotaTargetRouteHandler,
  putOrgsOrgIdRouteHandler,
  putPlaylistsUidRouteHandler,
  putRecordingRulesRouteHandler,
  putReportsIdRouteHandler,
  putTeamsTeamIdMembersRouteHandler,
  putTeamsTeamIdMembersUserIdRouteHandler,
  putTeamsTeamIdPreferencesRouteHandler,
  putTeamsTeamIdRouteHandler,
  putUserPasswordRouteHandler,
  putUserPreferencesRouteHandler,
  putUserRouteHandler,
  putUsersUserIdRouteHandler,
  putV1ProvisioningAlertRulesUIDRouteHandler,
  putV1ProvisioningContactPointsUIDRouteHandler,
  putV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  putV1ProvisioningMuteTimingsNameRouteHandler,
  putV1ProvisioningPoliciesRouteHandler,
  putV1ProvisioningTemplatesNameRouteHandler,
  putV1SsoSettingsKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccessControlRolesRoute, getAccessControlRolesRouteHandler)
  .openapi(postAccessControlRolesRoute, postAccessControlRolesRouteHandler)
  .openapi(deleteAccessControlRolesRoleUIDRoute, deleteAccessControlRolesRoleUIDRouteHandler)
  .openapi(getAccessControlRolesRoleUIDRoute, getAccessControlRolesRoleUIDRouteHandler)
  .openapi(putAccessControlRolesRoleUIDRoute, putAccessControlRolesRoleUIDRouteHandler)
  .openapi(
    getAccessControlRolesRoleUIDAssignmentsRoute,
    getAccessControlRolesRoleUIDAssignmentsRouteHandler,
  )
  .openapi(
    putAccessControlRolesRoleUIDAssignmentsRoute,
    putAccessControlRolesRoleUIDAssignmentsRouteHandler,
  )
  .openapi(getAccessControlStatusRoute, getAccessControlStatusRouteHandler)
  .openapi(postAccessControlTeamsRolesSearchRoute, postAccessControlTeamsRolesSearchRouteHandler)
  .openapi(getAccessControlTeamsTeamIdRolesRoute, getAccessControlTeamsTeamIdRolesRouteHandler)
  .openapi(postAccessControlTeamsTeamIdRolesRoute, postAccessControlTeamsTeamIdRolesRouteHandler)
  .openapi(putAccessControlTeamsTeamIdRolesRoute, putAccessControlTeamsTeamIdRolesRouteHandler)
  .openapi(
    deleteAccessControlTeamsTeamIdRolesRoleUIDRoute,
    deleteAccessControlTeamsTeamIdRolesRoleUIDRouteHandler,
  )
  .openapi(postAccessControlUsersRolesSearchRoute, postAccessControlUsersRolesSearchRouteHandler)
  .openapi(getAccessControlUsersUserIdRolesRoute, getAccessControlUsersUserIdRolesRouteHandler)
  .openapi(postAccessControlUsersUserIdRolesRoute, postAccessControlUsersUserIdRolesRouteHandler)
  .openapi(putAccessControlUsersUserIdRolesRoute, putAccessControlUsersUserIdRolesRouteHandler)
  .openapi(
    deleteAccessControlUsersUserIdRolesRoleUIDRoute,
    deleteAccessControlUsersUserIdRolesRoleUIDRouteHandler,
  )
  .openapi(
    getAccessControlResourceDescriptionRoute,
    getAccessControlResourceDescriptionRouteHandler,
  )
  .openapi(getAccessControlResourceResourceIDRoute, getAccessControlResourceResourceIDRouteHandler)
  .openapi(
    postAccessControlResourceResourceIDRoute,
    postAccessControlResourceResourceIDRouteHandler,
  )
  .openapi(
    postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRoute,
    postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRouteHandler,
  )
  .openapi(
    postAccessControlResourceResourceIDTeamsTeamIDRoute,
    postAccessControlResourceResourceIDTeamsTeamIDRouteHandler,
  )
  .openapi(
    postAccessControlResourceResourceIDUsersUserIDRoute,
    postAccessControlResourceResourceIDUsersUserIDRouteHandler,
  )
  .openapi(getAdminLdapSyncStatusRoute, getAdminLdapSyncStatusRouteHandler)
  .openapi(postAdminLdapReloadRoute, postAdminLdapReloadRouteHandler)
  .openapi(getAdminLdapStatusRoute, getAdminLdapStatusRouteHandler)
  .openapi(postAdminLdapSyncUserIdRoute, postAdminLdapSyncUserIdRouteHandler)
  .openapi(getAdminLdapUserNameRoute, getAdminLdapUserNameRouteHandler)
  .openapi(
    postAdminProvisioningAccessControlReloadRoute,
    postAdminProvisioningAccessControlReloadRouteHandler,
  )
  .openapi(
    postAdminProvisioningDashboardsReloadRoute,
    postAdminProvisioningDashboardsReloadRouteHandler,
  )
  .openapi(
    postAdminProvisioningDatasourcesReloadRoute,
    postAdminProvisioningDatasourcesReloadRouteHandler,
  )
  .openapi(postAdminProvisioningPluginsReloadRoute, postAdminProvisioningPluginsReloadRouteHandler)
  .openapi(getAdminSettingsRoute, getAdminSettingsRouteHandler)
  .openapi(getAdminStatsRoute, getAdminStatsRouteHandler)
  .openapi(postAdminUsersRoute, postAdminUsersRouteHandler)
  .openapi(deleteAdminUsersUserIdRoute, deleteAdminUsersUserIdRouteHandler)
  .openapi(getAdminUsersUserIdAuthTokensRoute, getAdminUsersUserIdAuthTokensRouteHandler)
  .openapi(postAdminUsersUserIdDisableRoute, postAdminUsersUserIdDisableRouteHandler)
  .openapi(postAdminUsersUserIdEnableRoute, postAdminUsersUserIdEnableRouteHandler)
  .openapi(postAdminUsersUserIdLogoutRoute, postAdminUsersUserIdLogoutRouteHandler)
  .openapi(putAdminUsersUserIdPasswordRoute, putAdminUsersUserIdPasswordRouteHandler)
  .openapi(putAdminUsersUserIdPermissionsRoute, putAdminUsersUserIdPermissionsRouteHandler)
  .openapi(getAdminUsersUserIdQuotasRoute, getAdminUsersUserIdQuotasRouteHandler)
  .openapi(
    putAdminUsersUserIdQuotasQuotaTargetRoute,
    putAdminUsersUserIdQuotasQuotaTargetRouteHandler,
  )
  .openapi(
    postAdminUsersUserIdRevokeAuthTokenRoute,
    postAdminUsersUserIdRevokeAuthTokenRouteHandler,
  )
  .openapi(getAnnotationsRoute, getAnnotationsRouteHandler)
  .openapi(postAnnotationsRoute, postAnnotationsRouteHandler)
  .openapi(postAnnotationsGraphiteRoute, postAnnotationsGraphiteRouteHandler)
  .openapi(postAnnotationsMassDeleteRoute, postAnnotationsMassDeleteRouteHandler)
  .openapi(getAnnotationsTagsRoute, getAnnotationsTagsRouteHandler)
  .openapi(deleteAnnotationsAnnotationIdRoute, deleteAnnotationsAnnotationIdRouteHandler)
  .openapi(getAnnotationsAnnotationIdRoute, getAnnotationsAnnotationIdRouteHandler)
  .openapi(patchAnnotationsAnnotationIdRoute, patchAnnotationsAnnotationIdRouteHandler)
  .openapi(putAnnotationsAnnotationIdRoute, putAnnotationsAnnotationIdRouteHandler)
  .openapi(getAnonymousDevicesRoute, getAnonymousDevicesRouteHandler)
  .openapi(getAnonymousSearchRoute, getAnonymousSearchRouteHandler)
  .openapi(getCloudmigrationMigrationRoute, getCloudmigrationMigrationRouteHandler)
  .openapi(postCloudmigrationMigrationRoute, postCloudmigrationMigrationRouteHandler)
  .openapi(deleteCloudmigrationMigrationUidRoute, deleteCloudmigrationMigrationUidRouteHandler)
  .openapi(getCloudmigrationMigrationUidRoute, getCloudmigrationMigrationUidRouteHandler)
  .openapi(
    postCloudmigrationMigrationUidSnapshotRoute,
    postCloudmigrationMigrationUidSnapshotRouteHandler,
  )
  .openapi(
    getCloudmigrationMigrationUidSnapshotSnapshotUidRoute,
    getCloudmigrationMigrationUidSnapshotSnapshotUidRouteHandler,
  )
  .openapi(
    postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRoute,
    postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRouteHandler,
  )
  .openapi(
    postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRoute,
    postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRouteHandler,
  )
  .openapi(
    getCloudmigrationMigrationUidSnapshotsRoute,
    getCloudmigrationMigrationUidSnapshotsRouteHandler,
  )
  .openapi(
    getCloudmigrationResourcesDependenciesRoute,
    getCloudmigrationResourcesDependenciesRouteHandler,
  )
  .openapi(getCloudmigrationTokenRoute, getCloudmigrationTokenRouteHandler)
  .openapi(postCloudmigrationTokenRoute, postCloudmigrationTokenRouteHandler)
  .openapi(deleteCloudmigrationTokenUidRoute, deleteCloudmigrationTokenUidRouteHandler)
  .openapi(getConvertApiPromRulesRoute, getConvertApiPromRulesRouteHandler)
  .openapi(postConvertApiPromRulesRoute, postConvertApiPromRulesRouteHandler)
  .openapi(
    deleteConvertApiPromRulesNamespaceTitleRoute,
    deleteConvertApiPromRulesNamespaceTitleRouteHandler,
  )
  .openapi(
    getConvertApiPromRulesNamespaceTitleRoute,
    getConvertApiPromRulesNamespaceTitleRouteHandler,
  )
  .openapi(
    postConvertApiPromRulesNamespaceTitleRoute,
    postConvertApiPromRulesNamespaceTitleRouteHandler,
  )
  .openapi(
    deleteConvertApiPromRulesNamespaceTitleGroupRoute,
    deleteConvertApiPromRulesNamespaceTitleGroupRouteHandler,
  )
  .openapi(
    getConvertApiPromRulesNamespaceTitleGroupRoute,
    getConvertApiPromRulesNamespaceTitleGroupRouteHandler,
  )
  .openapi(getConvertPrometheusConfigV1RulesRoute, getConvertPrometheusConfigV1RulesRouteHandler)
  .openapi(postConvertPrometheusConfigV1RulesRoute, postConvertPrometheusConfigV1RulesRouteHandler)
  .openapi(
    deleteConvertPrometheusConfigV1RulesNamespaceTitleRoute,
    deleteConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  )
  .openapi(
    getConvertPrometheusConfigV1RulesNamespaceTitleRoute,
    getConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  )
  .openapi(
    postConvertPrometheusConfigV1RulesNamespaceTitleRoute,
    postConvertPrometheusConfigV1RulesNamespaceTitleRouteHandler,
  )
  .openapi(
    deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
    deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRouteHandler,
  )
  .openapi(
    getConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
    getConvertPrometheusConfigV1RulesNamespaceTitleGroupRouteHandler,
  )
  .openapi(getDashboardSnapshotsRoute, getDashboardSnapshotsRouteHandler)
  .openapi(postDashboardsDbRoute, postDashboardsDbRouteHandler)
  .openapi(getDashboardsHomeRoute, getDashboardsHomeRouteHandler)
  .openapi(postDashboardsImportRoute, postDashboardsImportRouteHandler)
  .openapi(postDashboardsInterpolateRoute, postDashboardsInterpolateRouteHandler)
  .openapi(getDashboardsPublicDashboardsRoute, getDashboardsPublicDashboardsRouteHandler)
  .openapi(getDashboardsTagsRoute, getDashboardsTagsRouteHandler)
  .openapi(
    getDashboardsUidDashboardUidPublicDashboardsRoute,
    getDashboardsUidDashboardUidPublicDashboardsRouteHandler,
  )
  .openapi(
    postDashboardsUidDashboardUidPublicDashboardsRoute,
    postDashboardsUidDashboardUidPublicDashboardsRouteHandler,
  )
  .openapi(
    deleteDashboardsUidDashboardUidPublicDashboardsUidRoute,
    deleteDashboardsUidDashboardUidPublicDashboardsUidRouteHandler,
  )
  .openapi(
    patchDashboardsUidDashboardUidPublicDashboardsUidRoute,
    patchDashboardsUidDashboardUidPublicDashboardsUidRouteHandler,
  )
  .openapi(deleteDashboardsUidUidRoute, deleteDashboardsUidUidRouteHandler)
  .openapi(getDashboardsUidUidRoute, getDashboardsUidUidRouteHandler)
  .openapi(getDashboardsUidUidPermissionsRoute, getDashboardsUidUidPermissionsRouteHandler)
  .openapi(postDashboardsUidUidPermissionsRoute, postDashboardsUidUidPermissionsRouteHandler)
  .openapi(postDashboardsUidUidRestoreRoute, postDashboardsUidUidRestoreRouteHandler)
  .openapi(getDashboardsUidUidVersionsRoute, getDashboardsUidUidVersionsRouteHandler)
  .openapi(
    getDashboardsUidUidVersionsDashboardVersionIDRoute,
    getDashboardsUidUidVersionsDashboardVersionIDRouteHandler,
  )
  .openapi(postDashboardsVariablesPromoteRoute, postDashboardsVariablesPromoteRouteHandler)
  .openapi(
    getDashboardsVariablesSharedClustersRoute,
    getDashboardsVariablesSharedClustersRouteHandler,
  )
  .openapi(
    getDashboardsVariablesSharedClustersOccurrencesRoute,
    getDashboardsVariablesSharedClustersOccurrencesRouteHandler,
  )
  .openapi(
    postDashboardsVariablesSharedClustersRescanRoute,
    postDashboardsVariablesSharedClustersRescanRouteHandler,
  )
  .openapi(getDatasourcesRoute, getDatasourcesRouteHandler)
  .openapi(postDatasourcesRoute, postDatasourcesRouteHandler)
  .openapi(getDatasourcesCorrelationsRoute, getDatasourcesCorrelationsRouteHandler)
  .openapi(getDatasourcesIdNameRoute, getDatasourcesIdNameRouteHandler)
  .openapi(deleteDatasourcesNameNameRoute, deleteDatasourcesNameNameRouteHandler)
  .openapi(getDatasourcesNameNameRoute, getDatasourcesNameNameRouteHandler)
  .openapi(
    deleteDatasourcesProxyUidUidDatasourceProxyRouteRoute,
    deleteDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  )
  .openapi(
    getDatasourcesProxyUidUidDatasourceProxyRouteRoute,
    getDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  )
  .openapi(
    postDatasourcesProxyUidUidDatasourceProxyRouteRoute,
    postDatasourcesProxyUidUidDatasourceProxyRouteRouteHandler,
  )
  .openapi(
    getDatasourcesUidSourceUIDCorrelationsRoute,
    getDatasourcesUidSourceUIDCorrelationsRouteHandler,
  )
  .openapi(
    postDatasourcesUidSourceUIDCorrelationsRoute,
    postDatasourcesUidSourceUIDCorrelationsRouteHandler,
  )
  .openapi(
    getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
    getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRouteHandler,
  )
  .openapi(
    patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
    patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRouteHandler,
  )
  .openapi(deleteDatasourcesUidUidRoute, deleteDatasourcesUidUidRouteHandler)
  .openapi(getDatasourcesUidUidRoute, getDatasourcesUidUidRouteHandler)
  .openapi(putDatasourcesUidUidRoute, putDatasourcesUidUidRouteHandler)
  .openapi(
    deleteDatasourcesUidUidCorrelationsCorrelationUIDRoute,
    deleteDatasourcesUidUidCorrelationsCorrelationUIDRouteHandler,
  )
  .openapi(getDatasourcesUidUidHealthRoute, getDatasourcesUidUidHealthRouteHandler)
  .openapi(getDatasourcesUidUidLbacTeamsRoute, getDatasourcesUidUidLbacTeamsRouteHandler)
  .openapi(putDatasourcesUidUidLbacTeamsRoute, putDatasourcesUidUidLbacTeamsRouteHandler)
  .openapi(
    getDatasourcesUidUidResourcesDatasourceProxyRouteRoute,
    getDatasourcesUidUidResourcesDatasourceProxyRouteRouteHandler,
  )
  .openapi(getDatasourcesDataSourceUIDCacheRoute, getDatasourcesDataSourceUIDCacheRouteHandler)
  .openapi(postDatasourcesDataSourceUIDCacheRoute, postDatasourcesDataSourceUIDCacheRouteHandler)
  .openapi(
    postDatasourcesDataSourceUIDCacheCleanRoute,
    postDatasourcesDataSourceUIDCacheCleanRouteHandler,
  )
  .openapi(
    postDatasourcesDataSourceUIDCacheDisableRoute,
    postDatasourcesDataSourceUIDCacheDisableRouteHandler,
  )
  .openapi(
    postDatasourcesDataSourceUIDCacheEnableRoute,
    postDatasourcesDataSourceUIDCacheEnableRouteHandler,
  )
  .openapi(postDsQueryRoute, postDsQueryRouteHandler)
  .openapi(getFoldersRoute, getFoldersRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(deleteFoldersFolderUidRoute, deleteFoldersFolderUidRouteHandler)
  .openapi(getFoldersFolderUidRoute, getFoldersFolderUidRouteHandler)
  .openapi(putFoldersFolderUidRoute, putFoldersFolderUidRouteHandler)
  .openapi(getFoldersFolderUidCountsRoute, getFoldersFolderUidCountsRouteHandler)
  .openapi(postFoldersFolderUidMoveRoute, postFoldersFolderUidMoveRouteHandler)
  .openapi(getFoldersFolderUidPermissionsRoute, getFoldersFolderUidPermissionsRouteHandler)
  .openapi(postFoldersFolderUidPermissionsRoute, postFoldersFolderUidPermissionsRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getLibraryElementsRoute, getLibraryElementsRouteHandler)
  .openapi(postLibraryElementsRoute, postLibraryElementsRouteHandler)
  .openapi(
    getLibraryElementsNameLibraryElementNameRoute,
    getLibraryElementsNameLibraryElementNameRouteHandler,
  )
  .openapi(
    deleteLibraryElementsLibraryElementUidRoute,
    deleteLibraryElementsLibraryElementUidRouteHandler,
  )
  .openapi(
    getLibraryElementsLibraryElementUidRoute,
    getLibraryElementsLibraryElementUidRouteHandler,
  )
  .openapi(
    patchLibraryElementsLibraryElementUidRoute,
    patchLibraryElementsLibraryElementUidRouteHandler,
  )
  .openapi(
    getLibraryElementsLibraryElementUidConnectionsIndexRoute,
    getLibraryElementsLibraryElementUidConnectionsIndexRouteHandler,
  )
  .openapi(getLicensingCheckRoute, getLicensingCheckRouteHandler)
  .openapi(getLicensingCustomPermissionsRoute, getLicensingCustomPermissionsRouteHandler)
  .openapi(getLicensingCustomPermissionsCsvRoute, getLicensingCustomPermissionsCsvRouteHandler)
  .openapi(getLicensingRefreshStatsRoute, getLicensingRefreshStatsRouteHandler)
  .openapi(deleteLicensingTokenRoute, deleteLicensingTokenRouteHandler)
  .openapi(getLicensingTokenRoute, getLicensingTokenRouteHandler)
  .openapi(postLicensingTokenRoute, postLicensingTokenRouteHandler)
  .openapi(postLicensingTokenRenewRoute, postLicensingTokenRenewRouteHandler)
  .openapi(getLogoutSamlRoute, getLogoutSamlRouteHandler)
  .openapi(getOrgRoute, getOrgRouteHandler)
  .openapi(putOrgRoute, putOrgRouteHandler)
  .openapi(putOrgAddressRoute, putOrgAddressRouteHandler)
  .openapi(getOrgInvitesRoute, getOrgInvitesRouteHandler)
  .openapi(postOrgInvitesRoute, postOrgInvitesRouteHandler)
  .openapi(
    deleteOrgInvitesInvitationCodeRevokeRoute,
    deleteOrgInvitesInvitationCodeRevokeRouteHandler,
  )
  .openapi(getOrgPreferencesRoute, getOrgPreferencesRouteHandler)
  .openapi(patchOrgPreferencesRoute, patchOrgPreferencesRouteHandler)
  .openapi(putOrgPreferencesRoute, putOrgPreferencesRouteHandler)
  .openapi(getOrgQuotasRoute, getOrgQuotasRouteHandler)
  .openapi(getOrgUsersRoute, getOrgUsersRouteHandler)
  .openapi(postOrgUsersRoute, postOrgUsersRouteHandler)
  .openapi(getOrgUsersLookupRoute, getOrgUsersLookupRouteHandler)
  .openapi(deleteOrgUsersUserIdRoute, deleteOrgUsersUserIdRouteHandler)
  .openapi(patchOrgUsersUserIdRoute, patchOrgUsersUserIdRouteHandler)
  .openapi(getOrgsRoute, getOrgsRouteHandler)
  .openapi(postOrgsRoute, postOrgsRouteHandler)
  .openapi(getOrgsNameOrgNameRoute, getOrgsNameOrgNameRouteHandler)
  .openapi(deleteOrgsOrgIdRoute, deleteOrgsOrgIdRouteHandler)
  .openapi(getOrgsOrgIdRoute, getOrgsOrgIdRouteHandler)
  .openapi(putOrgsOrgIdRoute, putOrgsOrgIdRouteHandler)
  .openapi(putOrgsOrgIdAddressRoute, putOrgsOrgIdAddressRouteHandler)
  .openapi(getOrgsOrgIdQuotasRoute, getOrgsOrgIdQuotasRouteHandler)
  .openapi(putOrgsOrgIdQuotasQuotaTargetRoute, putOrgsOrgIdQuotasQuotaTargetRouteHandler)
  .openapi(getOrgsOrgIdUsersRoute, getOrgsOrgIdUsersRouteHandler)
  .openapi(postOrgsOrgIdUsersRoute, postOrgsOrgIdUsersRouteHandler)
  .openapi(getOrgsOrgIdUsersSearchRoute, getOrgsOrgIdUsersSearchRouteHandler)
  .openapi(deleteOrgsOrgIdUsersUserIdRoute, deleteOrgsOrgIdUsersUserIdRouteHandler)
  .openapi(patchOrgsOrgIdUsersUserIdRoute, patchOrgsOrgIdUsersUserIdRouteHandler)
  .openapi(getPlaylistsRoute, getPlaylistsRouteHandler)
  .openapi(postPlaylistsRoute, postPlaylistsRouteHandler)
  .openapi(deletePlaylistsUidRoute, deletePlaylistsUidRouteHandler)
  .openapi(getPlaylistsUidRoute, getPlaylistsUidRouteHandler)
  .openapi(putPlaylistsUidRoute, putPlaylistsUidRouteHandler)
  .openapi(getPlaylistsUidItemsRoute, getPlaylistsUidItemsRouteHandler)
  .openapi(getPublicDashboardsAccessTokenRoute, getPublicDashboardsAccessTokenRouteHandler)
  .openapi(
    getPublicDashboardsAccessTokenAnnotationsRoute,
    getPublicDashboardsAccessTokenAnnotationsRouteHandler,
  )
  .openapi(
    postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute,
    postPublicDashboardsAccessTokenPanelsPanelIdQueryRouteHandler,
  )
  .openapi(getQueryHistoryRoute, getQueryHistoryRouteHandler)
  .openapi(postQueryHistoryRoute, postQueryHistoryRouteHandler)
  .openapi(
    deleteQueryHistoryStarQueryHistoryUidRoute,
    deleteQueryHistoryStarQueryHistoryUidRouteHandler,
  )
  .openapi(
    postQueryHistoryStarQueryHistoryUidRoute,
    postQueryHistoryStarQueryHistoryUidRouteHandler,
  )
  .openapi(deleteQueryHistoryQueryHistoryUidRoute, deleteQueryHistoryQueryHistoryUidRouteHandler)
  .openapi(patchQueryHistoryQueryHistoryUidRoute, patchQueryHistoryQueryHistoryUidRouteHandler)
  .openapi(getRecordingRulesRoute, getRecordingRulesRouteHandler)
  .openapi(postRecordingRulesRoute, postRecordingRulesRouteHandler)
  .openapi(putRecordingRulesRoute, putRecordingRulesRouteHandler)
  .openapi(postRecordingRulesTestRoute, postRecordingRulesTestRouteHandler)
  .openapi(deleteRecordingRulesWriterRoute, deleteRecordingRulesWriterRouteHandler)
  .openapi(getRecordingRulesWriterRoute, getRecordingRulesWriterRouteHandler)
  .openapi(postRecordingRulesWriterRoute, postRecordingRulesWriterRouteHandler)
  .openapi(
    deleteRecordingRulesRecordingRuleIDRoute,
    deleteRecordingRulesRecordingRuleIDRouteHandler,
  )
  .openapi(getReportsRoute, getReportsRouteHandler)
  .openapi(postReportsRoute, postReportsRouteHandler)
  .openapi(getReportsDashboardsUidRoute, getReportsDashboardsUidRouteHandler)
  .openapi(postReportsEmailRoute, postReportsEmailRouteHandler)
  .openapi(getReportsImagesImageRoute, getReportsImagesImageRouteHandler)
  .openapi(getReportsRenderCsvsRoute, getReportsRenderCsvsRouteHandler)
  .openapi(getReportsRenderPdfsRoute, getReportsRenderPdfsRouteHandler)
  .openapi(getReportsSettingsRoute, getReportsSettingsRouteHandler)
  .openapi(postReportsSettingsRoute, postReportsSettingsRouteHandler)
  .openapi(postReportsTestEmailRoute, postReportsTestEmailRouteHandler)
  .openapi(deleteReportsIdRoute, deleteReportsIdRouteHandler)
  .openapi(getReportsIdRoute, getReportsIdRouteHandler)
  .openapi(putReportsIdRoute, putReportsIdRouteHandler)
  .openapi(postSamlAcsRoute, postSamlAcsRouteHandler)
  .openapi(getSamlMetadataRoute, getSamlMetadataRouteHandler)
  .openapi(getSamlSloRoute, getSamlSloRouteHandler)
  .openapi(postSamlSloRoute, postSamlSloRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchSortingRoute, getSearchSortingRouteHandler)
  .openapi(postServiceaccountsRoute, postServiceaccountsRouteHandler)
  .openapi(getServiceaccountsSearchRoute, getServiceaccountsSearchRouteHandler)
  .openapi(
    deleteServiceaccountsServiceAccountIdRoute,
    deleteServiceaccountsServiceAccountIdRouteHandler,
  )
  .openapi(getServiceaccountsServiceAccountIdRoute, getServiceaccountsServiceAccountIdRouteHandler)
  .openapi(
    patchServiceaccountsServiceAccountIdRoute,
    patchServiceaccountsServiceAccountIdRouteHandler,
  )
  .openapi(
    getServiceaccountsServiceAccountIdTokensRoute,
    getServiceaccountsServiceAccountIdTokensRouteHandler,
  )
  .openapi(
    postServiceaccountsServiceAccountIdTokensRoute,
    postServiceaccountsServiceAccountIdTokensRouteHandler,
  )
  .openapi(
    deleteServiceaccountsServiceAccountIdTokensTokenIdRoute,
    deleteServiceaccountsServiceAccountIdTokensTokenIdRouteHandler,
  )
  .openapi(getSigningKeysKeysRoute, getSigningKeysKeysRouteHandler)
  .openapi(getSnapshotSharedOptionsRoute, getSnapshotSharedOptionsRouteHandler)
  .openapi(postSnapshotsRoute, postSnapshotsRouteHandler)
  .openapi(getSnapshotsDeleteDeleteKeyRoute, getSnapshotsDeleteDeleteKeyRouteHandler)
  .openapi(deleteSnapshotsKeyRoute, deleteSnapshotsKeyRouteHandler)
  .openapi(getSnapshotsKeyRoute, getSnapshotsKeyRouteHandler)
  .openapi(postTeamsRoute, postTeamsRouteHandler)
  .openapi(getTeamsSearchRoute, getTeamsSearchRouteHandler)
  .openapi(deleteTeamsTeamIdGroupsRoute, deleteTeamsTeamIdGroupsRouteHandler)
  .openapi(getTeamsTeamIdGroupsRoute, getTeamsTeamIdGroupsRouteHandler)
  .openapi(postTeamsTeamIdGroupsRoute, postTeamsTeamIdGroupsRouteHandler)
  .openapi(getTeamsTeamIdGroupsSearchRoute, getTeamsTeamIdGroupsSearchRouteHandler)
  .openapi(deleteTeamsTeamIdRoute, deleteTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdRoute, getTeamsTeamIdRouteHandler)
  .openapi(putTeamsTeamIdRoute, putTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdMembersRoute, getTeamsTeamIdMembersRouteHandler)
  .openapi(postTeamsTeamIdMembersRoute, postTeamsTeamIdMembersRouteHandler)
  .openapi(putTeamsTeamIdMembersRoute, putTeamsTeamIdMembersRouteHandler)
  .openapi(deleteTeamsTeamIdMembersUserIdRoute, deleteTeamsTeamIdMembersUserIdRouteHandler)
  .openapi(putTeamsTeamIdMembersUserIdRoute, putTeamsTeamIdMembersUserIdRouteHandler)
  .openapi(getTeamsTeamIdPreferencesRoute, getTeamsTeamIdPreferencesRouteHandler)
  .openapi(putTeamsTeamIdPreferencesRoute, putTeamsTeamIdPreferencesRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(getUserAuthTokensRoute, getUserAuthTokensRouteHandler)
  .openapi(getUserEmailUpdateRoute, getUserEmailUpdateRouteHandler)
  .openapi(getUserOrgsRoute, getUserOrgsRouteHandler)
  .openapi(putUserPasswordRoute, putUserPasswordRouteHandler)
  .openapi(getUserPreferencesRoute, getUserPreferencesRouteHandler)
  .openapi(patchUserPreferencesRoute, patchUserPreferencesRouteHandler)
  .openapi(putUserPreferencesRoute, putUserPreferencesRouteHandler)
  .openapi(getUserQuotasRoute, getUserQuotasRouteHandler)
  .openapi(postUserRevokeAuthTokenRoute, postUserRevokeAuthTokenRouteHandler)
  .openapi(
    deleteUserStarsDashboardUidDashboardUidRoute,
    deleteUserStarsDashboardUidDashboardUidRouteHandler,
  )
  .openapi(
    postUserStarsDashboardUidDashboardUidRoute,
    postUserStarsDashboardUidDashboardUidRouteHandler,
  )
  .openapi(getUserTeamsRoute, getUserTeamsRouteHandler)
  .openapi(postUserUsingOrgIdRoute, postUserUsingOrgIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersLookupRoute, getUsersLookupRouteHandler)
  .openapi(getUsersSearchRoute, getUsersSearchRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(getUsersUserIdOrgsRoute, getUsersUserIdOrgsRouteHandler)
  .openapi(getUsersUserIdTeamsRoute, getUsersUserIdTeamsRouteHandler)
  .openapi(getV1ProvisioningAlertRulesRoute, getV1ProvisioningAlertRulesRouteHandler)
  .openapi(postV1ProvisioningAlertRulesRoute, postV1ProvisioningAlertRulesRouteHandler)
  .openapi(getV1ProvisioningAlertRulesExportRoute, getV1ProvisioningAlertRulesExportRouteHandler)
  .openapi(deleteV1ProvisioningAlertRulesUIDRoute, deleteV1ProvisioningAlertRulesUIDRouteHandler)
  .openapi(getV1ProvisioningAlertRulesUIDRoute, getV1ProvisioningAlertRulesUIDRouteHandler)
  .openapi(putV1ProvisioningAlertRulesUIDRoute, putV1ProvisioningAlertRulesUIDRouteHandler)
  .openapi(
    getV1ProvisioningAlertRulesUIDExportRoute,
    getV1ProvisioningAlertRulesUIDExportRouteHandler,
  )
  .openapi(getV1ProvisioningContactPointsRoute, getV1ProvisioningContactPointsRouteHandler)
  .openapi(postV1ProvisioningContactPointsRoute, postV1ProvisioningContactPointsRouteHandler)
  .openapi(
    getV1ProvisioningContactPointsExportRoute,
    getV1ProvisioningContactPointsExportRouteHandler,
  )
  .openapi(
    deleteV1ProvisioningContactPointsUIDRoute,
    deleteV1ProvisioningContactPointsUIDRouteHandler,
  )
  .openapi(putV1ProvisioningContactPointsUIDRoute, putV1ProvisioningContactPointsUIDRouteHandler)
  .openapi(
    deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
    deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  )
  .openapi(
    getV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
    getV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  )
  .openapi(
    putV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
    putV1ProvisioningFolderFolderUIDRuleGroupsGroupRouteHandler,
  )
  .openapi(
    getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRoute,
    getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRouteHandler,
  )
  .openapi(getV1ProvisioningMuteTimingsRoute, getV1ProvisioningMuteTimingsRouteHandler)
  .openapi(postV1ProvisioningMuteTimingsRoute, postV1ProvisioningMuteTimingsRouteHandler)
  .openapi(getV1ProvisioningMuteTimingsExportRoute, getV1ProvisioningMuteTimingsExportRouteHandler)
  .openapi(
    deleteV1ProvisioningMuteTimingsNameRoute,
    deleteV1ProvisioningMuteTimingsNameRouteHandler,
  )
  .openapi(getV1ProvisioningMuteTimingsNameRoute, getV1ProvisioningMuteTimingsNameRouteHandler)
  .openapi(putV1ProvisioningMuteTimingsNameRoute, putV1ProvisioningMuteTimingsNameRouteHandler)
  .openapi(
    getV1ProvisioningMuteTimingsNameExportRoute,
    getV1ProvisioningMuteTimingsNameExportRouteHandler,
  )
  .openapi(deleteV1ProvisioningPoliciesRoute, deleteV1ProvisioningPoliciesRouteHandler)
  .openapi(getV1ProvisioningPoliciesRoute, getV1ProvisioningPoliciesRouteHandler)
  .openapi(putV1ProvisioningPoliciesRoute, putV1ProvisioningPoliciesRouteHandler)
  .openapi(getV1ProvisioningPoliciesExportRoute, getV1ProvisioningPoliciesExportRouteHandler)
  .openapi(getV1ProvisioningTemplatesRoute, getV1ProvisioningTemplatesRouteHandler)
  .openapi(deleteV1ProvisioningTemplatesNameRoute, deleteV1ProvisioningTemplatesNameRouteHandler)
  .openapi(getV1ProvisioningTemplatesNameRoute, getV1ProvisioningTemplatesNameRouteHandler)
  .openapi(putV1ProvisioningTemplatesNameRoute, putV1ProvisioningTemplatesNameRouteHandler)
  .openapi(getV1SsoSettingsRoute, getV1SsoSettingsRouteHandler)
  .openapi(deleteV1SsoSettingsKeyRoute, deleteV1SsoSettingsKeyRouteHandler)
  .openapi(getV1SsoSettingsKeyRoute, getV1SsoSettingsKeyRouteHandler)
  .openapi(patchV1SsoSettingsKeyRoute, patchV1SsoSettingsKeyRouteHandler)
  .openapi(putV1SsoSettingsKeyRoute, putV1SsoSettingsKeyRouteHandler)

export default app

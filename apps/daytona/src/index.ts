import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
  deleteAdminRunnersIdRoute,
  deleteApiKeysNameRoute,
  deleteApiKeysUserIdNameRoute,
  deleteDockerRegistryIdRoute,
  deleteOrganizationsOrganizationIdOtelConfigRoute,
  deleteOrganizationsOrganizationIdRolesRoleIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  deleteOrganizationsOrganizationIdUsersUserIdRoute,
  deleteRegionsIdRoute,
  deleteRunnersIdRoute,
  deleteSandboxSandboxIdOrNameRoute,
  deleteSandboxSandboxIdOrNameSshAccessRoute,
  deleteSnapshotsIdRoute,
  deleteToolboxSandboxIdToolboxFilesRoute,
  deleteToolboxSandboxIdToolboxGitBranchesRoute,
  deleteToolboxSandboxIdToolboxProcessPtySessionIdRoute,
  deleteToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
  deleteUsersLinkedAccountsProviderProviderUserIdRoute,
  deleteVolumesVolumeIdRoute,
  getAdminAuditRoute,
  getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
  getAdminRunnersIdRoute,
  getAdminRunnersRoute,
  getAdminSnapshotsCanCleanupImageRoute,
  getAdminUsersIdRoute,
  getAdminUsersRoute,
  getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRoute,
  getAdminWebhooksStatusRoute,
  getApiKeysCurrentRoute,
  getApiKeysNameRoute,
  getApiKeysRoute,
  getAuditOrganizationsOrganizationIdRoute,
  getConfigRoute,
  getDockerRegistryIdRoute,
  getDockerRegistryRegistryPushAccessRoute,
  getDockerRegistryRoute,
  getHealthReadyRoute,
  getHealthRoute,
  getJobsJobIdRoute,
  getJobsPollRoute,
  getJobsRoute,
  getObjectStoragePushAccessRoute,
  getOrganizationsInvitationsCountRoute,
  getOrganizationsInvitationsRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  getOrganizationsOrganizationIdOtelConfigRoute,
  getOrganizationsOrganizationIdRolesRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdUsageRoute,
  getOrganizationsOrganizationIdUsersRoute,
  getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRoute,
  getOrganizationsRoute,
  getPreviewSandboxIdAccessRoute,
  getPreviewSandboxIdPublicRoute,
  getPreviewSandboxIdValidateAuthTokenRoute,
  getPreviewSignedPreviewTokenPortSandboxIdRoute,
  getRegionsIdRoute,
  getRegionsRoute,
  getRunnersBySandboxSandboxIdRoute,
  getRunnersBySnapshotRefRoute,
  getRunnersIdFullRoute,
  getRunnersIdRoute,
  getRunnersMeRoute,
  getRunnersRoute,
  getSandboxForRunnerRoute,
  getSandboxPaginatedRoute,
  getSandboxRoute,
  getSandboxSandboxIdOrganizationRoute,
  getSandboxSandboxIdOrNameAncestorsRoute,
  getSandboxSandboxIdOrNameBuildLogsRoute,
  getSandboxSandboxIdOrNameBuildLogsUrlRoute,
  getSandboxSandboxIdOrNameForksRoute,
  getSandboxSandboxIdOrNameParentRoute,
  getSandboxSandboxIdOrNamePortsPortPreviewUrlRoute,
  getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRoute,
  getSandboxSandboxIdOrNameRoute,
  getSandboxSandboxIdRegionQuotaRoute,
  getSandboxSandboxIdTelemetryLogsRoute,
  getSandboxSandboxIdTelemetryMetricsRoute,
  getSandboxSandboxIdTelemetryTracesRoute,
  getSandboxSandboxIdTelemetryTracesTraceIdRoute,
  getSandboxSandboxIdToolboxProxyUrlRoute,
  getSandboxSshAccessValidateRoute,
  getSharedRegionsRoute,
  getSnapshotsIdBuildLogsRoute,
  getSnapshotsIdBuildLogsUrlRoute,
  getSnapshotsIdRoute,
  getSnapshotsRoute,
  getToolboxSandboxIdToolboxComputeruseDisplayInfoRoute,
  getToolboxSandboxIdToolboxComputeruseDisplayWindowsRoute,
  getToolboxSandboxIdToolboxComputeruseMousePositionRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRoute,
  getToolboxSandboxIdToolboxComputeruseStatusRoute,
  getToolboxSandboxIdToolboxFilesDownloadRoute,
  getToolboxSandboxIdToolboxFilesFindRoute,
  getToolboxSandboxIdToolboxFilesInfoRoute,
  getToolboxSandboxIdToolboxFilesRoute,
  getToolboxSandboxIdToolboxFilesSearchRoute,
  getToolboxSandboxIdToolboxGitBranchesRoute,
  getToolboxSandboxIdToolboxGitHistoryRoute,
  getToolboxSandboxIdToolboxGitStatusRoute,
  getToolboxSandboxIdToolboxLspDocumentSymbolsRoute,
  getToolboxSandboxIdToolboxLspWorkspaceSymbolsRoute,
  getToolboxSandboxIdToolboxProcessPtyRoute,
  getToolboxSandboxIdToolboxProcessPtySessionIdRoute,
  getToolboxSandboxIdToolboxProcessSessionRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
  getToolboxSandboxIdToolboxProjectDirRoute,
  getToolboxSandboxIdToolboxUserHomeDirRoute,
  getToolboxSandboxIdToolboxWorkDirRoute,
  getUsersAccountProvidersRoute,
  getUsersMeRoute,
  getVolumesByNameNameRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  getWebhooksOrganizationsOrganizationIdInitializationStatusRoute,
  patchAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
  patchAdminRunnersIdSchedulingRoute,
  patchAdminSnapshotsIdGeneralRoute,
  patchDockerRegistryIdRoute,
  patchOrganizationsOrganizationIdDefaultRegionRoute,
  patchOrganizationsOrganizationIdQuotaRegionIdRoute,
  patchOrganizationsOrganizationIdQuotaRoute,
  patchRegionsIdRoute,
  patchRunnersIdDrainingRoute,
  patchRunnersIdSchedulingRoute,
  postAdminDockerRegistryIdSetDefaultRoute,
  postAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
  postAdminRunnersRoute,
  postAdminSandboxSandboxIdRecoverRoute,
  postAdminUsersIdRegenerateKeyPairRoute,
  postAdminUsersRoute,
  postAdminWebhooksOrganizationsOrganizationIdInitializeRoute,
  postAdminWebhooksOrganizationsOrganizationIdSendRoute,
  postApiKeysRoute,
  postDockerRegistryRoute,
  postJobsJobIdStatusRoute,
  postOrganizationsInvitationsInvitationIdAcceptRoute,
  postOrganizationsInvitationsInvitationIdDeclineRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdCancelRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdLeaveRoute,
  postOrganizationsOrganizationIdRolesRoute,
  postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRoute,
  postOrganizationsOrganizationIdSuspendRoute,
  postOrganizationsOrganizationIdUnsuspendRoute,
  postOrganizationsOrganizationIdUsersUserIdAccessRoute,
  postOrganizationsRoute,
  postRegionsIdRegenerateProxyApiKeyRoute,
  postRegionsIdRegenerateSnapshotManagerCredentialsRoute,
  postRegionsIdRegenerateSshGatewayApiKeyRoute,
  postRegionsRoute,
  postRunnersHealthcheckRoute,
  postRunnersRoute,
  postSandboxRoute,
  postSandboxSandboxIdLastActivityRoute,
  postSandboxSandboxIdOrNameArchiveRoute,
  postSandboxSandboxIdOrNameAutoarchiveIntervalRoute,
  postSandboxSandboxIdOrNameAutodeleteIntervalRoute,
  postSandboxSandboxIdOrNameAutostopIntervalRoute,
  postSandboxSandboxIdOrNameBackupRoute,
  postSandboxSandboxIdOrNameForkRoute,
  postSandboxSandboxIdOrNameNetworkSettingsRoute,
  postSandboxSandboxIdOrNamePauseRoute,
  postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRoute,
  postSandboxSandboxIdOrNamePublicIsPublicRoute,
  postSandboxSandboxIdOrNameRecoverRoute,
  postSandboxSandboxIdOrNameResizeRoute,
  postSandboxSandboxIdOrNameSnapshotRoute,
  postSandboxSandboxIdOrNameSshAccessRoute,
  postSandboxSandboxIdOrNameStartRoute,
  postSandboxSandboxIdOrNameStopRoute,
  postSnapshotsIdActivateRoute,
  postSnapshotsIdDeactivateRoute,
  postSnapshotsRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardKeyRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardTypeRoute,
  postToolboxSandboxIdToolboxComputeruseMouseClickRoute,
  postToolboxSandboxIdToolboxComputeruseMouseDragRoute,
  postToolboxSandboxIdToolboxComputeruseMouseMoveRoute,
  postToolboxSandboxIdToolboxComputeruseMouseScrollRoute,
  postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRoute,
  postToolboxSandboxIdToolboxComputeruseStartRoute,
  postToolboxSandboxIdToolboxComputeruseStopRoute,
  postToolboxSandboxIdToolboxFilesBulkDownloadRoute,
  postToolboxSandboxIdToolboxFilesBulkUploadRoute,
  postToolboxSandboxIdToolboxFilesFolderRoute,
  postToolboxSandboxIdToolboxFilesMoveRoute,
  postToolboxSandboxIdToolboxFilesPermissionsRoute,
  postToolboxSandboxIdToolboxFilesReplaceRoute,
  postToolboxSandboxIdToolboxFilesUploadRoute,
  postToolboxSandboxIdToolboxGitAddRoute,
  postToolboxSandboxIdToolboxGitBranchesRoute,
  postToolboxSandboxIdToolboxGitCheckoutRoute,
  postToolboxSandboxIdToolboxGitCloneRoute,
  postToolboxSandboxIdToolboxGitCommitRoute,
  postToolboxSandboxIdToolboxGitPullRoute,
  postToolboxSandboxIdToolboxGitPushRoute,
  postToolboxSandboxIdToolboxLspCompletionsRoute,
  postToolboxSandboxIdToolboxLspDidCloseRoute,
  postToolboxSandboxIdToolboxLspDidOpenRoute,
  postToolboxSandboxIdToolboxLspStartRoute,
  postToolboxSandboxIdToolboxLspStopRoute,
  postToolboxSandboxIdToolboxProcessExecuteRoute,
  postToolboxSandboxIdToolboxProcessPtyRoute,
  postToolboxSandboxIdToolboxProcessPtySessionIdResizeRoute,
  postToolboxSandboxIdToolboxProcessSessionRoute,
  postToolboxSandboxIdToolboxProcessSessionSessionIdExecRoute,
  postUsersLinkedAccountsRoute,
  postUsersMfaSmsEnrollRoute,
  postVolumesRoute,
  postWebhooksOrganizationsOrganizationIdAppPortalAccessRoute,
  postWebhooksOrganizationsOrganizationIdInitializeRoute,
  postWebhooksOrganizationsOrganizationIdRefreshEndpointsRoute,
  putOrganizationsOrganizationIdExperimentalConfigRoute,
  putOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  putOrganizationsOrganizationIdOtelConfigRoute,
  putOrganizationsOrganizationIdRolesRoleIdRoute,
  putSandboxSandboxIdOrNameLabelsRoute,
  putSandboxSandboxIdStateRoute,
} from './routes'
import {
  deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRouteHandler,
  deleteAdminRunnersIdRouteHandler,
  deleteApiKeysNameRouteHandler,
  deleteApiKeysUserIdNameRouteHandler,
  deleteDockerRegistryIdRouteHandler,
  deleteOrganizationsOrganizationIdOtelConfigRouteHandler,
  deleteOrganizationsOrganizationIdRolesRoleIdRouteHandler,
  deleteOrganizationsOrganizationIdRouteHandler,
  deleteOrganizationsOrganizationIdUsersUserIdRouteHandler,
  deleteRegionsIdRouteHandler,
  deleteRunnersIdRouteHandler,
  deleteSandboxSandboxIdOrNameRouteHandler,
  deleteSandboxSandboxIdOrNameSshAccessRouteHandler,
  deleteSnapshotsIdRouteHandler,
  deleteToolboxSandboxIdToolboxFilesRouteHandler,
  deleteToolboxSandboxIdToolboxGitBranchesRouteHandler,
  deleteToolboxSandboxIdToolboxProcessPtySessionIdRouteHandler,
  deleteToolboxSandboxIdToolboxProcessSessionSessionIdRouteHandler,
  deleteUsersLinkedAccountsProviderProviderUserIdRouteHandler,
  deleteVolumesVolumeIdRouteHandler,
  getAdminAuditRouteHandler,
  getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRouteHandler,
  getAdminRunnersIdRouteHandler,
  getAdminRunnersRouteHandler,
  getAdminSnapshotsCanCleanupImageRouteHandler,
  getAdminUsersIdRouteHandler,
  getAdminUsersRouteHandler,
  getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRouteHandler,
  getAdminWebhooksStatusRouteHandler,
  getApiKeysCurrentRouteHandler,
  getApiKeysNameRouteHandler,
  getApiKeysRouteHandler,
  getAuditOrganizationsOrganizationIdRouteHandler,
  getConfigRouteHandler,
  getDockerRegistryIdRouteHandler,
  getDockerRegistryRegistryPushAccessRouteHandler,
  getDockerRegistryRouteHandler,
  getHealthReadyRouteHandler,
  getHealthRouteHandler,
  getJobsJobIdRouteHandler,
  getJobsPollRouteHandler,
  getJobsRouteHandler,
  getObjectStoragePushAccessRouteHandler,
  getOrganizationsInvitationsCountRouteHandler,
  getOrganizationsInvitationsRouteHandler,
  getOrganizationsOrganizationIdInvitationsRouteHandler,
  getOrganizationsOrganizationIdOtelConfigRouteHandler,
  getOrganizationsOrganizationIdRolesRouteHandler,
  getOrganizationsOrganizationIdRouteHandler,
  getOrganizationsOrganizationIdUsageRouteHandler,
  getOrganizationsOrganizationIdUsersRouteHandler,
  getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRouteHandler,
  getOrganizationsRouteHandler,
  getPreviewSandboxIdAccessRouteHandler,
  getPreviewSandboxIdPublicRouteHandler,
  getPreviewSandboxIdValidateAuthTokenRouteHandler,
  getPreviewSignedPreviewTokenPortSandboxIdRouteHandler,
  getRegionsIdRouteHandler,
  getRegionsRouteHandler,
  getRunnersBySandboxSandboxIdRouteHandler,
  getRunnersBySnapshotRefRouteHandler,
  getRunnersIdFullRouteHandler,
  getRunnersIdRouteHandler,
  getRunnersMeRouteHandler,
  getRunnersRouteHandler,
  getSandboxForRunnerRouteHandler,
  getSandboxPaginatedRouteHandler,
  getSandboxRouteHandler,
  getSandboxSandboxIdOrganizationRouteHandler,
  getSandboxSandboxIdOrNameAncestorsRouteHandler,
  getSandboxSandboxIdOrNameBuildLogsRouteHandler,
  getSandboxSandboxIdOrNameBuildLogsUrlRouteHandler,
  getSandboxSandboxIdOrNameForksRouteHandler,
  getSandboxSandboxIdOrNameParentRouteHandler,
  getSandboxSandboxIdOrNamePortsPortPreviewUrlRouteHandler,
  getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRouteHandler,
  getSandboxSandboxIdOrNameRouteHandler,
  getSandboxSandboxIdRegionQuotaRouteHandler,
  getSandboxSandboxIdTelemetryLogsRouteHandler,
  getSandboxSandboxIdTelemetryMetricsRouteHandler,
  getSandboxSandboxIdTelemetryTracesRouteHandler,
  getSandboxSandboxIdTelemetryTracesTraceIdRouteHandler,
  getSandboxSandboxIdToolboxProxyUrlRouteHandler,
  getSandboxSshAccessValidateRouteHandler,
  getSharedRegionsRouteHandler,
  getSnapshotsIdBuildLogsRouteHandler,
  getSnapshotsIdBuildLogsUrlRouteHandler,
  getSnapshotsIdRouteHandler,
  getSnapshotsRouteHandler,
  getToolboxSandboxIdToolboxComputeruseDisplayInfoRouteHandler,
  getToolboxSandboxIdToolboxComputeruseDisplayWindowsRouteHandler,
  getToolboxSandboxIdToolboxComputeruseMousePositionRouteHandler,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRouteHandler,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRouteHandler,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRouteHandler,
  getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRouteHandler,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRouteHandler,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionRouteHandler,
  getToolboxSandboxIdToolboxComputeruseScreenshotRouteHandler,
  getToolboxSandboxIdToolboxComputeruseStatusRouteHandler,
  getToolboxSandboxIdToolboxFilesDownloadRouteHandler,
  getToolboxSandboxIdToolboxFilesFindRouteHandler,
  getToolboxSandboxIdToolboxFilesInfoRouteHandler,
  getToolboxSandboxIdToolboxFilesRouteHandler,
  getToolboxSandboxIdToolboxFilesSearchRouteHandler,
  getToolboxSandboxIdToolboxGitBranchesRouteHandler,
  getToolboxSandboxIdToolboxGitHistoryRouteHandler,
  getToolboxSandboxIdToolboxGitStatusRouteHandler,
  getToolboxSandboxIdToolboxLspDocumentSymbolsRouteHandler,
  getToolboxSandboxIdToolboxLspWorkspaceSymbolsRouteHandler,
  getToolboxSandboxIdToolboxProcessPtyRouteHandler,
  getToolboxSandboxIdToolboxProcessPtySessionIdRouteHandler,
  getToolboxSandboxIdToolboxProcessSessionRouteHandler,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRouteHandler,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRouteHandler,
  getToolboxSandboxIdToolboxProcessSessionSessionIdRouteHandler,
  getToolboxSandboxIdToolboxProjectDirRouteHandler,
  getToolboxSandboxIdToolboxUserHomeDirRouteHandler,
  getToolboxSandboxIdToolboxWorkDirRouteHandler,
  getUsersAccountProvidersRouteHandler,
  getUsersMeRouteHandler,
  getVolumesByNameNameRouteHandler,
  getVolumesRouteHandler,
  getVolumesVolumeIdRouteHandler,
  getWebhooksOrganizationsOrganizationIdInitializationStatusRouteHandler,
  patchAdminOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  patchAdminRunnersIdSchedulingRouteHandler,
  patchAdminSnapshotsIdGeneralRouteHandler,
  patchDockerRegistryIdRouteHandler,
  patchOrganizationsOrganizationIdDefaultRegionRouteHandler,
  patchOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  patchOrganizationsOrganizationIdQuotaRouteHandler,
  patchRegionsIdRouteHandler,
  patchRunnersIdDrainingRouteHandler,
  patchRunnersIdSchedulingRouteHandler,
  postAdminDockerRegistryIdSetDefaultRouteHandler,
  postAdminOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  postAdminRunnersRouteHandler,
  postAdminSandboxSandboxIdRecoverRouteHandler,
  postAdminUsersIdRegenerateKeyPairRouteHandler,
  postAdminUsersRouteHandler,
  postAdminWebhooksOrganizationsOrganizationIdInitializeRouteHandler,
  postAdminWebhooksOrganizationsOrganizationIdSendRouteHandler,
  postApiKeysRouteHandler,
  postDockerRegistryRouteHandler,
  postJobsJobIdStatusRouteHandler,
  postOrganizationsInvitationsInvitationIdAcceptRouteHandler,
  postOrganizationsInvitationsInvitationIdDeclineRouteHandler,
  postOrganizationsOrganizationIdInvitationsInvitationIdCancelRouteHandler,
  postOrganizationsOrganizationIdInvitationsRouteHandler,
  postOrganizationsOrganizationIdLeaveRouteHandler,
  postOrganizationsOrganizationIdRolesRouteHandler,
  postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRouteHandler,
  postOrganizationsOrganizationIdSuspendRouteHandler,
  postOrganizationsOrganizationIdUnsuspendRouteHandler,
  postOrganizationsOrganizationIdUsersUserIdAccessRouteHandler,
  postOrganizationsRouteHandler,
  postRegionsIdRegenerateProxyApiKeyRouteHandler,
  postRegionsIdRegenerateSnapshotManagerCredentialsRouteHandler,
  postRegionsIdRegenerateSshGatewayApiKeyRouteHandler,
  postRegionsRouteHandler,
  postRunnersHealthcheckRouteHandler,
  postRunnersRouteHandler,
  postSandboxRouteHandler,
  postSandboxSandboxIdLastActivityRouteHandler,
  postSandboxSandboxIdOrNameArchiveRouteHandler,
  postSandboxSandboxIdOrNameAutoarchiveIntervalRouteHandler,
  postSandboxSandboxIdOrNameAutodeleteIntervalRouteHandler,
  postSandboxSandboxIdOrNameAutostopIntervalRouteHandler,
  postSandboxSandboxIdOrNameBackupRouteHandler,
  postSandboxSandboxIdOrNameForkRouteHandler,
  postSandboxSandboxIdOrNameNetworkSettingsRouteHandler,
  postSandboxSandboxIdOrNamePauseRouteHandler,
  postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRouteHandler,
  postSandboxSandboxIdOrNamePublicIsPublicRouteHandler,
  postSandboxSandboxIdOrNameRecoverRouteHandler,
  postSandboxSandboxIdOrNameResizeRouteHandler,
  postSandboxSandboxIdOrNameSnapshotRouteHandler,
  postSandboxSandboxIdOrNameSshAccessRouteHandler,
  postSandboxSandboxIdOrNameStartRouteHandler,
  postSandboxSandboxIdOrNameStopRouteHandler,
  postSnapshotsIdActivateRouteHandler,
  postSnapshotsIdDeactivateRouteHandler,
  postSnapshotsRouteHandler,
  postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRouteHandler,
  postToolboxSandboxIdToolboxComputeruseKeyboardKeyRouteHandler,
  postToolboxSandboxIdToolboxComputeruseKeyboardTypeRouteHandler,
  postToolboxSandboxIdToolboxComputeruseMouseClickRouteHandler,
  postToolboxSandboxIdToolboxComputeruseMouseDragRouteHandler,
  postToolboxSandboxIdToolboxComputeruseMouseMoveRouteHandler,
  postToolboxSandboxIdToolboxComputeruseMouseScrollRouteHandler,
  postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRouteHandler,
  postToolboxSandboxIdToolboxComputeruseStartRouteHandler,
  postToolboxSandboxIdToolboxComputeruseStopRouteHandler,
  postToolboxSandboxIdToolboxFilesBulkDownloadRouteHandler,
  postToolboxSandboxIdToolboxFilesBulkUploadRouteHandler,
  postToolboxSandboxIdToolboxFilesFolderRouteHandler,
  postToolboxSandboxIdToolboxFilesMoveRouteHandler,
  postToolboxSandboxIdToolboxFilesPermissionsRouteHandler,
  postToolboxSandboxIdToolboxFilesReplaceRouteHandler,
  postToolboxSandboxIdToolboxFilesUploadRouteHandler,
  postToolboxSandboxIdToolboxGitAddRouteHandler,
  postToolboxSandboxIdToolboxGitBranchesRouteHandler,
  postToolboxSandboxIdToolboxGitCheckoutRouteHandler,
  postToolboxSandboxIdToolboxGitCloneRouteHandler,
  postToolboxSandboxIdToolboxGitCommitRouteHandler,
  postToolboxSandboxIdToolboxGitPullRouteHandler,
  postToolboxSandboxIdToolboxGitPushRouteHandler,
  postToolboxSandboxIdToolboxLspCompletionsRouteHandler,
  postToolboxSandboxIdToolboxLspDidCloseRouteHandler,
  postToolboxSandboxIdToolboxLspDidOpenRouteHandler,
  postToolboxSandboxIdToolboxLspStartRouteHandler,
  postToolboxSandboxIdToolboxLspStopRouteHandler,
  postToolboxSandboxIdToolboxProcessExecuteRouteHandler,
  postToolboxSandboxIdToolboxProcessPtyRouteHandler,
  postToolboxSandboxIdToolboxProcessPtySessionIdResizeRouteHandler,
  postToolboxSandboxIdToolboxProcessSessionRouteHandler,
  postToolboxSandboxIdToolboxProcessSessionSessionIdExecRouteHandler,
  postUsersLinkedAccountsRouteHandler,
  postUsersMfaSmsEnrollRouteHandler,
  postVolumesRouteHandler,
  postWebhooksOrganizationsOrganizationIdAppPortalAccessRouteHandler,
  postWebhooksOrganizationsOrganizationIdInitializeRouteHandler,
  postWebhooksOrganizationsOrganizationIdRefreshEndpointsRouteHandler,
  putOrganizationsOrganizationIdExperimentalConfigRouteHandler,
  putOrganizationsOrganizationIdInvitationsInvitationIdRouteHandler,
  putOrganizationsOrganizationIdOtelConfigRouteHandler,
  putOrganizationsOrganizationIdRolesRoleIdRouteHandler,
  putSandboxSandboxIdOrNameLabelsRouteHandler,
  putSandboxSandboxIdStateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(getApiKeysCurrentRoute, getApiKeysCurrentRouteHandler)
  .openapi(deleteApiKeysNameRoute, deleteApiKeysNameRouteHandler)
  .openapi(getApiKeysNameRoute, getApiKeysNameRouteHandler)
  .openapi(deleteApiKeysUserIdNameRoute, deleteApiKeysUserIdNameRouteHandler)
  .openapi(getOrganizationsInvitationsRoute, getOrganizationsInvitationsRouteHandler)
  .openapi(getOrganizationsInvitationsCountRoute, getOrganizationsInvitationsCountRouteHandler)
  .openapi(
    postOrganizationsInvitationsInvitationIdAcceptRoute,
    postOrganizationsInvitationsInvitationIdAcceptRouteHandler,
  )
  .openapi(
    postOrganizationsInvitationsInvitationIdDeclineRoute,
    postOrganizationsInvitationsInvitationIdDeclineRouteHandler,
  )
  .openapi(getOrganizationsRoute, getOrganizationsRouteHandler)
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(
    patchOrganizationsOrganizationIdDefaultRegionRoute,
    patchOrganizationsOrganizationIdDefaultRegionRouteHandler,
  )
  .openapi(deleteOrganizationsOrganizationIdRoute, deleteOrganizationsOrganizationIdRouteHandler)
  .openapi(getOrganizationsOrganizationIdRoute, getOrganizationsOrganizationIdRouteHandler)
  .openapi(
    getOrganizationsOrganizationIdUsageRoute,
    getOrganizationsOrganizationIdUsageRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationIdQuotaRoute,
    patchOrganizationsOrganizationIdQuotaRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationIdQuotaRegionIdRoute,
    patchOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdLeaveRoute,
    postOrganizationsOrganizationIdLeaveRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdSuspendRoute,
    postOrganizationsOrganizationIdSuspendRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdUnsuspendRoute,
    postOrganizationsOrganizationIdUnsuspendRouteHandler,
  )
  .openapi(
    getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRoute,
    getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationIdOtelConfigRoute,
    deleteOrganizationsOrganizationIdOtelConfigRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdOtelConfigRoute,
    getOrganizationsOrganizationIdOtelConfigRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationIdOtelConfigRoute,
    putOrganizationsOrganizationIdOtelConfigRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRoute,
    postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationIdExperimentalConfigRoute,
    putOrganizationsOrganizationIdExperimentalConfigRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdRolesRoute,
    getOrganizationsOrganizationIdRolesRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdRolesRoute,
    postOrganizationsOrganizationIdRolesRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationIdRolesRoleIdRoute,
    deleteOrganizationsOrganizationIdRolesRoleIdRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationIdRolesRoleIdRoute,
    putOrganizationsOrganizationIdRolesRoleIdRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdUsersRoute,
    getOrganizationsOrganizationIdUsersRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdUsersUserIdAccessRoute,
    postOrganizationsOrganizationIdUsersUserIdAccessRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationIdUsersUserIdRoute,
    deleteOrganizationsOrganizationIdUsersUserIdRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdInvitationsRoute,
    getOrganizationsOrganizationIdInvitationsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdInvitationsRoute,
    postOrganizationsOrganizationIdInvitationsRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationIdInvitationsInvitationIdRoute,
    putOrganizationsOrganizationIdInvitationsInvitationIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdInvitationsInvitationIdCancelRoute,
    postOrganizationsOrganizationIdInvitationsInvitationIdCancelRouteHandler,
  )
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(postRegionsRoute, postRegionsRouteHandler)
  .openapi(deleteRegionsIdRoute, deleteRegionsIdRouteHandler)
  .openapi(getRegionsIdRoute, getRegionsIdRouteHandler)
  .openapi(patchRegionsIdRoute, patchRegionsIdRouteHandler)
  .openapi(postRegionsIdRegenerateProxyApiKeyRoute, postRegionsIdRegenerateProxyApiKeyRouteHandler)
  .openapi(
    postRegionsIdRegenerateSshGatewayApiKeyRoute,
    postRegionsIdRegenerateSshGatewayApiKeyRouteHandler,
  )
  .openapi(
    postRegionsIdRegenerateSnapshotManagerCredentialsRoute,
    postRegionsIdRegenerateSnapshotManagerCredentialsRouteHandler,
  )
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getUsersAccountProvidersRoute, getUsersAccountProvidersRouteHandler)
  .openapi(postUsersLinkedAccountsRoute, postUsersLinkedAccountsRouteHandler)
  .openapi(
    deleteUsersLinkedAccountsProviderProviderUserIdRoute,
    deleteUsersLinkedAccountsProviderProviderUserIdRouteHandler,
  )
  .openapi(postUsersMfaSmsEnrollRoute, postUsersMfaSmsEnrollRouteHandler)
  .openapi(getSharedRegionsRoute, getSharedRegionsRouteHandler)
  .openapi(getSandboxRoute, getSandboxRouteHandler)
  .openapi(postSandboxRoute, postSandboxRouteHandler)
  .openapi(getSandboxPaginatedRoute, getSandboxPaginatedRouteHandler)
  .openapi(getSandboxForRunnerRoute, getSandboxForRunnerRouteHandler)
  .openapi(deleteSandboxSandboxIdOrNameRoute, deleteSandboxSandboxIdOrNameRouteHandler)
  .openapi(getSandboxSandboxIdOrNameRoute, getSandboxSandboxIdOrNameRouteHandler)
  .openapi(postSandboxSandboxIdOrNameRecoverRoute, postSandboxSandboxIdOrNameRecoverRouteHandler)
  .openapi(postSandboxSandboxIdOrNameStartRoute, postSandboxSandboxIdOrNameStartRouteHandler)
  .openapi(postSandboxSandboxIdOrNameStopRoute, postSandboxSandboxIdOrNameStopRouteHandler)
  .openapi(postSandboxSandboxIdOrNamePauseRoute, postSandboxSandboxIdOrNamePauseRouteHandler)
  .openapi(postSandboxSandboxIdOrNameResizeRoute, postSandboxSandboxIdOrNameResizeRouteHandler)
  .openapi(putSandboxSandboxIdOrNameLabelsRoute, putSandboxSandboxIdOrNameLabelsRouteHandler)
  .openapi(putSandboxSandboxIdStateRoute, putSandboxSandboxIdStateRouteHandler)
  .openapi(postSandboxSandboxIdOrNameBackupRoute, postSandboxSandboxIdOrNameBackupRouteHandler)
  .openapi(postSandboxSandboxIdOrNameSnapshotRoute, postSandboxSandboxIdOrNameSnapshotRouteHandler)
  .openapi(postSandboxSandboxIdOrNameForkRoute, postSandboxSandboxIdOrNameForkRouteHandler)
  .openapi(getSandboxSandboxIdOrNameForksRoute, getSandboxSandboxIdOrNameForksRouteHandler)
  .openapi(getSandboxSandboxIdOrNameParentRoute, getSandboxSandboxIdOrNameParentRouteHandler)
  .openapi(getSandboxSandboxIdOrNameAncestorsRoute, getSandboxSandboxIdOrNameAncestorsRouteHandler)
  .openapi(
    postSandboxSandboxIdOrNamePublicIsPublicRoute,
    postSandboxSandboxIdOrNamePublicIsPublicRouteHandler,
  )
  .openapi(postSandboxSandboxIdLastActivityRoute, postSandboxSandboxIdLastActivityRouteHandler)
  .openapi(
    postSandboxSandboxIdOrNameAutostopIntervalRoute,
    postSandboxSandboxIdOrNameAutostopIntervalRouteHandler,
  )
  .openapi(
    postSandboxSandboxIdOrNameAutoarchiveIntervalRoute,
    postSandboxSandboxIdOrNameAutoarchiveIntervalRouteHandler,
  )
  .openapi(
    postSandboxSandboxIdOrNameAutodeleteIntervalRoute,
    postSandboxSandboxIdOrNameAutodeleteIntervalRouteHandler,
  )
  .openapi(
    postSandboxSandboxIdOrNameNetworkSettingsRoute,
    postSandboxSandboxIdOrNameNetworkSettingsRouteHandler,
  )
  .openapi(postSandboxSandboxIdOrNameArchiveRoute, postSandboxSandboxIdOrNameArchiveRouteHandler)
  .openapi(
    getSandboxSandboxIdOrNamePortsPortPreviewUrlRoute,
    getSandboxSandboxIdOrNamePortsPortPreviewUrlRouteHandler,
  )
  .openapi(
    getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRoute,
    getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRouteHandler,
  )
  .openapi(
    postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRoute,
    postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRouteHandler,
  )
  .openapi(getSandboxSandboxIdOrNameBuildLogsRoute, getSandboxSandboxIdOrNameBuildLogsRouteHandler)
  .openapi(
    getSandboxSandboxIdOrNameBuildLogsUrlRoute,
    getSandboxSandboxIdOrNameBuildLogsUrlRouteHandler,
  )
  .openapi(
    deleteSandboxSandboxIdOrNameSshAccessRoute,
    deleteSandboxSandboxIdOrNameSshAccessRouteHandler,
  )
  .openapi(
    postSandboxSandboxIdOrNameSshAccessRoute,
    postSandboxSandboxIdOrNameSshAccessRouteHandler,
  )
  .openapi(getSandboxSshAccessValidateRoute, getSandboxSshAccessValidateRouteHandler)
  .openapi(getSandboxSandboxIdToolboxProxyUrlRoute, getSandboxSandboxIdToolboxProxyUrlRouteHandler)
  .openapi(getSandboxSandboxIdOrganizationRoute, getSandboxSandboxIdOrganizationRouteHandler)
  .openapi(getSandboxSandboxIdRegionQuotaRoute, getSandboxSandboxIdRegionQuotaRouteHandler)
  .openapi(getRunnersRoute, getRunnersRouteHandler)
  .openapi(postRunnersRoute, postRunnersRouteHandler)
  .openapi(getRunnersMeRoute, getRunnersMeRouteHandler)
  .openapi(getRunnersBySandboxSandboxIdRoute, getRunnersBySandboxSandboxIdRouteHandler)
  .openapi(getRunnersBySnapshotRefRoute, getRunnersBySnapshotRefRouteHandler)
  .openapi(deleteRunnersIdRoute, deleteRunnersIdRouteHandler)
  .openapi(getRunnersIdRoute, getRunnersIdRouteHandler)
  .openapi(getRunnersIdFullRoute, getRunnersIdFullRouteHandler)
  .openapi(patchRunnersIdSchedulingRoute, patchRunnersIdSchedulingRouteHandler)
  .openapi(patchRunnersIdDrainingRoute, patchRunnersIdDrainingRouteHandler)
  .openapi(postRunnersHealthcheckRoute, postRunnersHealthcheckRouteHandler)
  .openapi(
    getToolboxSandboxIdToolboxProjectDirRoute,
    getToolboxSandboxIdToolboxProjectDirRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxUserHomeDirRoute,
    getToolboxSandboxIdToolboxUserHomeDirRouteHandler,
  )
  .openapi(getToolboxSandboxIdToolboxWorkDirRoute, getToolboxSandboxIdToolboxWorkDirRouteHandler)
  .openapi(deleteToolboxSandboxIdToolboxFilesRoute, deleteToolboxSandboxIdToolboxFilesRouteHandler)
  .openapi(getToolboxSandboxIdToolboxFilesRoute, getToolboxSandboxIdToolboxFilesRouteHandler)
  .openapi(
    getToolboxSandboxIdToolboxFilesDownloadRoute,
    getToolboxSandboxIdToolboxFilesDownloadRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesBulkDownloadRoute,
    postToolboxSandboxIdToolboxFilesBulkDownloadRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxFilesFindRoute,
    getToolboxSandboxIdToolboxFilesFindRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesFolderRoute,
    postToolboxSandboxIdToolboxFilesFolderRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxFilesInfoRoute,
    getToolboxSandboxIdToolboxFilesInfoRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesMoveRoute,
    postToolboxSandboxIdToolboxFilesMoveRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesPermissionsRoute,
    postToolboxSandboxIdToolboxFilesPermissionsRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesReplaceRoute,
    postToolboxSandboxIdToolboxFilesReplaceRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxFilesSearchRoute,
    getToolboxSandboxIdToolboxFilesSearchRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesUploadRoute,
    postToolboxSandboxIdToolboxFilesUploadRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxFilesBulkUploadRoute,
    postToolboxSandboxIdToolboxFilesBulkUploadRouteHandler,
  )
  .openapi(postToolboxSandboxIdToolboxGitAddRoute, postToolboxSandboxIdToolboxGitAddRouteHandler)
  .openapi(
    deleteToolboxSandboxIdToolboxGitBranchesRoute,
    deleteToolboxSandboxIdToolboxGitBranchesRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxGitBranchesRoute,
    getToolboxSandboxIdToolboxGitBranchesRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxGitBranchesRoute,
    postToolboxSandboxIdToolboxGitBranchesRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxGitCloneRoute,
    postToolboxSandboxIdToolboxGitCloneRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxGitCommitRoute,
    postToolboxSandboxIdToolboxGitCommitRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxGitHistoryRoute,
    getToolboxSandboxIdToolboxGitHistoryRouteHandler,
  )
  .openapi(postToolboxSandboxIdToolboxGitPullRoute, postToolboxSandboxIdToolboxGitPullRouteHandler)
  .openapi(postToolboxSandboxIdToolboxGitPushRoute, postToolboxSandboxIdToolboxGitPushRouteHandler)
  .openapi(
    postToolboxSandboxIdToolboxGitCheckoutRoute,
    postToolboxSandboxIdToolboxGitCheckoutRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxGitStatusRoute,
    getToolboxSandboxIdToolboxGitStatusRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxProcessExecuteRoute,
    postToolboxSandboxIdToolboxProcessExecuteRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessSessionRoute,
    getToolboxSandboxIdToolboxProcessSessionRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxProcessSessionRoute,
    postToolboxSandboxIdToolboxProcessSessionRouteHandler,
  )
  .openapi(
    deleteToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
    deleteToolboxSandboxIdToolboxProcessSessionSessionIdRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
    getToolboxSandboxIdToolboxProcessSessionSessionIdRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxProcessSessionSessionIdExecRoute,
    postToolboxSandboxIdToolboxProcessSessionSessionIdExecRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRoute,
    getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRoute,
    getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessPtyRoute,
    getToolboxSandboxIdToolboxProcessPtyRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxProcessPtyRoute,
    postToolboxSandboxIdToolboxProcessPtyRouteHandler,
  )
  .openapi(
    deleteToolboxSandboxIdToolboxProcessPtySessionIdRoute,
    deleteToolboxSandboxIdToolboxProcessPtySessionIdRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxProcessPtySessionIdRoute,
    getToolboxSandboxIdToolboxProcessPtySessionIdRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxProcessPtySessionIdResizeRoute,
    postToolboxSandboxIdToolboxProcessPtySessionIdResizeRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxLspCompletionsRoute,
    postToolboxSandboxIdToolboxLspCompletionsRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxLspDidCloseRoute,
    postToolboxSandboxIdToolboxLspDidCloseRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxLspDidOpenRoute,
    postToolboxSandboxIdToolboxLspDidOpenRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxLspDocumentSymbolsRoute,
    getToolboxSandboxIdToolboxLspDocumentSymbolsRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxLspStartRoute,
    postToolboxSandboxIdToolboxLspStartRouteHandler,
  )
  .openapi(postToolboxSandboxIdToolboxLspStopRoute, postToolboxSandboxIdToolboxLspStopRouteHandler)
  .openapi(
    getToolboxSandboxIdToolboxLspWorkspaceSymbolsRoute,
    getToolboxSandboxIdToolboxLspWorkspaceSymbolsRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseStartRoute,
    postToolboxSandboxIdToolboxComputeruseStartRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseStopRoute,
    postToolboxSandboxIdToolboxComputeruseStopRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseStatusRoute,
    getToolboxSandboxIdToolboxComputeruseStatusRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRoute,
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRoute,
    postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRoute,
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRoute,
    getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseMousePositionRoute,
    getToolboxSandboxIdToolboxComputeruseMousePositionRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseMouseMoveRoute,
    postToolboxSandboxIdToolboxComputeruseMouseMoveRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseMouseClickRoute,
    postToolboxSandboxIdToolboxComputeruseMouseClickRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseMouseDragRoute,
    postToolboxSandboxIdToolboxComputeruseMouseDragRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseMouseScrollRoute,
    postToolboxSandboxIdToolboxComputeruseMouseScrollRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseKeyboardTypeRoute,
    postToolboxSandboxIdToolboxComputeruseKeyboardTypeRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseKeyboardKeyRoute,
    postToolboxSandboxIdToolboxComputeruseKeyboardKeyRouteHandler,
  )
  .openapi(
    postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRoute,
    postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseScreenshotRoute,
    getToolboxSandboxIdToolboxComputeruseScreenshotRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseScreenshotRegionRoute,
    getToolboxSandboxIdToolboxComputeruseScreenshotRegionRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRoute,
    getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRoute,
    getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseDisplayInfoRoute,
    getToolboxSandboxIdToolboxComputeruseDisplayInfoRouteHandler,
  )
  .openapi(
    getToolboxSandboxIdToolboxComputeruseDisplayWindowsRoute,
    getToolboxSandboxIdToolboxComputeruseDisplayWindowsRouteHandler,
  )
  .openapi(getSnapshotsRoute, getSnapshotsRouteHandler)
  .openapi(postSnapshotsRoute, postSnapshotsRouteHandler)
  .openapi(deleteSnapshotsIdRoute, deleteSnapshotsIdRouteHandler)
  .openapi(getSnapshotsIdRoute, getSnapshotsIdRouteHandler)
  .openapi(getSnapshotsIdBuildLogsRoute, getSnapshotsIdBuildLogsRouteHandler)
  .openapi(getSnapshotsIdBuildLogsUrlRoute, getSnapshotsIdBuildLogsUrlRouteHandler)
  .openapi(postSnapshotsIdActivateRoute, postSnapshotsIdActivateRouteHandler)
  .openapi(postSnapshotsIdDeactivateRoute, postSnapshotsIdDeactivateRouteHandler)
  .openapi(getPreviewSandboxIdPublicRoute, getPreviewSandboxIdPublicRouteHandler)
  .openapi(
    getPreviewSandboxIdValidateAuthTokenRoute,
    getPreviewSandboxIdValidateAuthTokenRouteHandler,
  )
  .openapi(getPreviewSandboxIdAccessRoute, getPreviewSandboxIdAccessRouteHandler)
  .openapi(
    getPreviewSignedPreviewTokenPortSandboxIdRoute,
    getPreviewSignedPreviewTokenPortSandboxIdRouteHandler,
  )
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(deleteVolumesVolumeIdRoute, deleteVolumesVolumeIdRouteHandler)
  .openapi(getVolumesVolumeIdRoute, getVolumesVolumeIdRouteHandler)
  .openapi(getVolumesByNameNameRoute, getVolumesByNameNameRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(getJobsPollRoute, getJobsPollRouteHandler)
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)
  .openapi(postJobsJobIdStatusRoute, postJobsJobIdStatusRouteHandler)
  .openapi(getDockerRegistryRoute, getDockerRegistryRouteHandler)
  .openapi(postDockerRegistryRoute, postDockerRegistryRouteHandler)
  .openapi(
    getDockerRegistryRegistryPushAccessRoute,
    getDockerRegistryRegistryPushAccessRouteHandler,
  )
  .openapi(deleteDockerRegistryIdRoute, deleteDockerRegistryIdRouteHandler)
  .openapi(getDockerRegistryIdRoute, getDockerRegistryIdRouteHandler)
  .openapi(patchDockerRegistryIdRoute, patchDockerRegistryIdRouteHandler)
  .openapi(getAdminRunnersRoute, getAdminRunnersRouteHandler)
  .openapi(postAdminRunnersRoute, postAdminRunnersRouteHandler)
  .openapi(deleteAdminRunnersIdRoute, deleteAdminRunnersIdRouteHandler)
  .openapi(getAdminRunnersIdRoute, getAdminRunnersIdRouteHandler)
  .openapi(patchAdminRunnersIdSchedulingRoute, patchAdminRunnersIdSchedulingRouteHandler)
  .openapi(postAdminSandboxSandboxIdRecoverRoute, postAdminSandboxSandboxIdRecoverRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(postAdminUsersRoute, postAdminUsersRouteHandler)
  .openapi(postAdminUsersIdRegenerateKeyPairRoute, postAdminUsersIdRegenerateKeyPairRouteHandler)
  .openapi(getAdminUsersIdRoute, getAdminUsersIdRouteHandler)
  .openapi(
    postAdminWebhooksOrganizationsOrganizationIdSendRoute,
    postAdminWebhooksOrganizationsOrganizationIdSendRouteHandler,
  )
  .openapi(
    getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRoute,
    getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRouteHandler,
  )
  .openapi(getAdminWebhooksStatusRoute, getAdminWebhooksStatusRouteHandler)
  .openapi(
    postAdminWebhooksOrganizationsOrganizationIdInitializeRoute,
    postAdminWebhooksOrganizationsOrganizationIdInitializeRouteHandler,
  )
  .openapi(
    postAdminDockerRegistryIdSetDefaultRoute,
    postAdminDockerRegistryIdSetDefaultRouteHandler,
  )
  .openapi(getAdminSnapshotsCanCleanupImageRoute, getAdminSnapshotsCanCleanupImageRouteHandler)
  .openapi(patchAdminSnapshotsIdGeneralRoute, patchAdminSnapshotsIdGeneralRouteHandler)
  .openapi(getAdminAuditRoute, getAdminAuditRouteHandler)
  .openapi(
    patchAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
    patchAdminOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  )
  .openapi(
    postAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
    postAdminOrganizationsOrganizationIdQuotaRegionIdRouteHandler,
  )
  .openapi(
    deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
    deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRouteHandler,
  )
  .openapi(
    getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
    getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRouteHandler,
  )
  .openapi(
    postWebhooksOrganizationsOrganizationIdAppPortalAccessRoute,
    postWebhooksOrganizationsOrganizationIdAppPortalAccessRouteHandler,
  )
  .openapi(
    getWebhooksOrganizationsOrganizationIdInitializationStatusRoute,
    getWebhooksOrganizationsOrganizationIdInitializationStatusRouteHandler,
  )
  .openapi(
    postWebhooksOrganizationsOrganizationIdInitializeRoute,
    postWebhooksOrganizationsOrganizationIdInitializeRouteHandler,
  )
  .openapi(
    postWebhooksOrganizationsOrganizationIdRefreshEndpointsRoute,
    postWebhooksOrganizationsOrganizationIdRefreshEndpointsRouteHandler,
  )
  .openapi(
    getAuditOrganizationsOrganizationIdRoute,
    getAuditOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(getObjectStoragePushAccessRoute, getObjectStoragePushAccessRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getHealthReadyRoute, getHealthReadyRouteHandler)
  .openapi(getSandboxSandboxIdTelemetryLogsRoute, getSandboxSandboxIdTelemetryLogsRouteHandler)
  .openapi(getSandboxSandboxIdTelemetryTracesRoute, getSandboxSandboxIdTelemetryTracesRouteHandler)
  .openapi(
    getSandboxSandboxIdTelemetryTracesTraceIdRoute,
    getSandboxSandboxIdTelemetryTracesTraceIdRouteHandler,
  )
  .openapi(
    getSandboxSandboxIdTelemetryMetricsRoute,
    getSandboxSandboxIdTelemetryMetricsRouteHandler,
  )

export default app

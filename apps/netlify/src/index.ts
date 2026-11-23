import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEnvKeyRoute,
  deleteAccountsAccountIdEnvKeyValueIdRoute,
  deleteAccountsAccountIdRoute,
  deleteAccountSlugMembersMemberIdRoute,
  deleteAgentRunnersAgentRunnerIdRoute,
  deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  deleteDeployKeysKeyIdRoute,
  deleteDeploysDeployIdRoute,
  deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  deleteDnsZonesZoneIdRoute,
  deleteHooksHookIdRoute,
  deleteSitesSiteIdAssetsAssetIdRoute,
  deleteSitesSiteIdBuildHooksIdRoute,
  deleteSitesSiteIdDatabaseBranchBranchIdRoute,
  deleteSitesSiteIdDatabaseComputeSettingsRoute,
  deleteSitesSiteIdDatabaseRoute,
  deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute,
  deleteSitesSiteIdDeploysDeployIdRoute,
  deleteSitesSiteIdDevServerHooksIdRoute,
  deleteSitesSiteIdDevServersRoute,
  deleteSitesSiteIdFormsFormIdRoute,
  deleteSitesSiteIdRoute,
  deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  deleteSitesSiteIdSnippetsSnippetIdRoute,
  deleteSubmissionsSubmissionIdRoute,
  getAccountIdBuildsStatusRoute,
  getAccountsAccountIdAiGatewayTokenRoute,
  getAccountsAccountIdAuditRoute,
  getAccountsAccountIdEnvKeyRoute,
  getAccountsAccountIdEnvRoute,
  getAccountsAccountIdRoute,
  getAccountSlugMembersMemberIdRoute,
  getAccountSlugMembersRoute,
  getAccountSlugSitesRoute,
  getAccountsRoute,
  getAccountsTypesRoute,
  getAgentRunnersAgentRunnerIdDiffRoute,
  getAgentRunnersAgentRunnerIdRoute,
  getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  getAgentRunnersAgentRunnerIdSessionsRoute,
  getAgentRunnersRoute,
  getAiGatewayProvidersRoute,
  getApiV1SitesSiteIdEnvRoute,
  getBillingPaymentMethodsRoute,
  getBuildsBuildIdRoute,
  getDeployKeysKeyIdRoute,
  getDeployKeysRoute,
  getDeploysDeployIdRoute,
  getDnsZonesRoute,
  getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getDnsZonesZoneIdDnsRecordsRoute,
  getDnsZonesZoneIdRoute,
  getFormsFormIdSubmissionsRoute,
  getHooksHookIdRoute,
  getHooksRoute,
  getHooksTypesRoute,
  getOauthTicketsTicketIdRoute,
  getServicesAddonNameManifestRoute,
  getServicesAddonNameRoute,
  getServicesIndexRoute,
  getSitesRoute,
  getSitesSiteIdAiGatewayTokenRoute,
  getSitesSiteIdAssetsAssetIdPublicSignatureRoute,
  getSitesSiteIdAssetsAssetIdRoute,
  getSitesSiteIdAssetsRoute,
  getSitesSiteIdBuildHooksIdRoute,
  getSitesSiteIdBuildHooksRoute,
  getSitesSiteIdBuildsRoute,
  getSitesSiteIdDatabaseBranchBranchIdRoute,
  getSitesSiteIdDatabaseBranchesRoute,
  getSitesSiteIdDatabaseComputeSettingsRoute,
  getSitesSiteIdDatabaseMigrationsNameRoute,
  getSitesSiteIdDatabaseMigrationsRoute,
  getSitesSiteIdDatabaseRoute,
  getSitesSiteIdDatabaseSnapshotsRoute,
  getSitesSiteIdDeployedBranchesRoute,
  getSitesSiteIdDeploysDeployIdRoute,
  getSitesSiteIdDeploysRoute,
  getSitesSiteIdDevServerHooksIdRoute,
  getSitesSiteIdDevServerHooksRoute,
  getSitesSiteIdDevServersDevServerIdRoute,
  getSitesSiteIdDevServersRoute,
  getSitesSiteIdDnsRoute,
  getSitesSiteIdFilesFilePathRoute,
  getSitesSiteIdFilesRoute,
  getSitesSiteIdFormsRoute,
  getSitesSiteIdFunctionsRoute,
  getSitesSiteIdIdentityIdentityIdUsersUserIdRoute,
  getSitesSiteIdMetadataRoute,
  getSitesSiteIdRoute,
  getSitesSiteIdServiceInstancesRoute,
  getSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  getSitesSiteIdSnippetsRoute,
  getSitesSiteIdSnippetsSnippetIdRoute,
  getSitesSiteIdSslCertificatesRoute,
  getSitesSiteIdSslRoute,
  getSitesSiteIdSubmissionsRoute,
  getSitesSiteIdTrafficSplitsRoute,
  getSitesSiteIdTrafficSplitsSplitTestIdRoute,
  getSubmissionsSubmissionIdRoute,
  getUserRoute,
  patchAccountsAccountIdEnvKeyRoute,
  patchAgentRunnersAgentRunnerIdRoute,
  patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  patchSitesSiteIdRoute,
  postAccountsAccountIdEnvRoute,
  postAccountSlugMembersRoute,
  postAccountSlugSitesRoute,
  postAccountsRoute,
  postAgentRunnersAgentRunnerIdArchiveRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute,
  postAgentRunnersAgentRunnerIdSessionsRoute,
  postAgentRunnersAgentRunnerIdStopRoute,
  postAgentRunnersRoute,
  postBuildsBuildIdLogRoute,
  postBuildsBuildIdStartRoute,
  postDeployKeysRoute,
  postDeploysDeployIdCancelRoute,
  postDeploysDeployIdLockRoute,
  postDeploysDeployIdUnlockRoute,
  postDnsZonesRoute,
  postDnsZonesZoneIdDnsRecordsRoute,
  postHooksHookIdEnableRoute,
  postHooksRoute,
  postOauthTicketsRoute,
  postOauthTicketsTicketIdExchangeRoute,
  postPurgeRoute,
  postSitesRoute,
  postSitesSiteIdAgentRunnersRoute,
  postSitesSiteIdAssetsRoute,
  postSitesSiteIdBuildHooksRoute,
  postSitesSiteIdBuildsRoute,
  postSitesSiteIdDatabaseBranchBranchIdResetRoute,
  postSitesSiteIdDatabaseBranchRoute,
  postSitesSiteIdDatabaseMigrationsDeployIdRoute,
  postSitesSiteIdDatabaseRoute,
  postSitesSiteIdDatabaseSnapshotRoute,
  postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute,
  postSitesSiteIdDeploysDeployIdRestoreRoute,
  postSitesSiteIdDeploysRoute,
  postSitesSiteIdDevServerHooksRoute,
  postSitesSiteIdDevServersDevServerIdStateRoute,
  postSitesSiteIdDevServersRoute,
  postSitesSiteIdIdentityIdentityIdUsersLookupRoute,
  postSitesSiteIdServicesAddonInstancesRoute,
  postSitesSiteIdSnippetsRoute,
  postSitesSiteIdSslRoute,
  postSitesSiteIdTrafficSplitsRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute,
  putAccountsAccountIdEnvKeyRoute,
  putAccountsAccountIdRoute,
  putAccountSlugMembersMemberIdRoute,
  putDeploysDeployIdEdgeFunctionsCodeShaRoute,
  putDeploysDeployIdFilesPathRoute,
  putDeploysDeployIdFunctionsNameRoute,
  putDeploysDeployIdServerCodeShaRoute,
  putDnsZonesZoneIdTransferRoute,
  putHooksHookIdRoute,
  putSitesSiteIdAssetsAssetIdRoute,
  putSitesSiteIdBuildHooksIdRoute,
  putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute,
  putSitesSiteIdDatabaseComputeSettingsRoute,
  putSitesSiteIdDeploysDeployIdRoute,
  putSitesSiteIdDevServerHooksIdRoute,
  putSitesSiteIdDisableRoute,
  putSitesSiteIdDnsRoute,
  putSitesSiteIdEnableRoute,
  putSitesSiteIdMetadataRoute,
  putSitesSiteIdRollbackRoute,
  putSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  putSitesSiteIdSnippetsSnippetIdRoute,
  putSitesSiteIdTrafficSplitsSplitTestIdRoute,
  putSitesSiteIdUnlinkRepoRoute,
} from './routes'
import {
  deleteAccountsAccountIdEnvKeyRouteHandler,
  deleteAccountsAccountIdEnvKeyValueIdRouteHandler,
  deleteAccountsAccountIdRouteHandler,
  deleteAccountSlugMembersMemberIdRouteHandler,
  deleteAgentRunnersAgentRunnerIdRouteHandler,
  deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  deleteDeployKeysKeyIdRouteHandler,
  deleteDeploysDeployIdRouteHandler,
  deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRouteHandler,
  deleteDnsZonesZoneIdRouteHandler,
  deleteHooksHookIdRouteHandler,
  deleteSitesSiteIdAssetsAssetIdRouteHandler,
  deleteSitesSiteIdBuildHooksIdRouteHandler,
  deleteSitesSiteIdDatabaseBranchBranchIdRouteHandler,
  deleteSitesSiteIdDatabaseComputeSettingsRouteHandler,
  deleteSitesSiteIdDatabaseRouteHandler,
  deleteSitesSiteIdDatabaseSnapshotSnapshotIdRouteHandler,
  deleteSitesSiteIdDeploysDeployIdRouteHandler,
  deleteSitesSiteIdDevServerHooksIdRouteHandler,
  deleteSitesSiteIdDevServersRouteHandler,
  deleteSitesSiteIdFormsFormIdRouteHandler,
  deleteSitesSiteIdRouteHandler,
  deleteSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  deleteSitesSiteIdSnippetsSnippetIdRouteHandler,
  deleteSubmissionsSubmissionIdRouteHandler,
  getAccountIdBuildsStatusRouteHandler,
  getAccountsAccountIdAiGatewayTokenRouteHandler,
  getAccountsAccountIdAuditRouteHandler,
  getAccountsAccountIdEnvKeyRouteHandler,
  getAccountsAccountIdEnvRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountSlugMembersMemberIdRouteHandler,
  getAccountSlugMembersRouteHandler,
  getAccountSlugSitesRouteHandler,
  getAccountsRouteHandler,
  getAccountsTypesRouteHandler,
  getAgentRunnersAgentRunnerIdDiffRouteHandler,
  getAgentRunnersAgentRunnerIdRouteHandler,
  getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  getAgentRunnersAgentRunnerIdSessionsRouteHandler,
  getAgentRunnersRouteHandler,
  getAiGatewayProvidersRouteHandler,
  getApiV1SitesSiteIdEnvRouteHandler,
  getBillingPaymentMethodsRouteHandler,
  getBuildsBuildIdRouteHandler,
  getDeployKeysKeyIdRouteHandler,
  getDeployKeysRouteHandler,
  getDeploysDeployIdRouteHandler,
  getDnsZonesRouteHandler,
  getDnsZonesZoneIdDnsRecordsDnsRecordIdRouteHandler,
  getDnsZonesZoneIdDnsRecordsRouteHandler,
  getDnsZonesZoneIdRouteHandler,
  getFormsFormIdSubmissionsRouteHandler,
  getHooksHookIdRouteHandler,
  getHooksRouteHandler,
  getHooksTypesRouteHandler,
  getOauthTicketsTicketIdRouteHandler,
  getServicesAddonNameManifestRouteHandler,
  getServicesAddonNameRouteHandler,
  getServicesIndexRouteHandler,
  getSitesRouteHandler,
  getSitesSiteIdAiGatewayTokenRouteHandler,
  getSitesSiteIdAssetsAssetIdPublicSignatureRouteHandler,
  getSitesSiteIdAssetsAssetIdRouteHandler,
  getSitesSiteIdAssetsRouteHandler,
  getSitesSiteIdBuildHooksIdRouteHandler,
  getSitesSiteIdBuildHooksRouteHandler,
  getSitesSiteIdBuildsRouteHandler,
  getSitesSiteIdDatabaseBranchBranchIdRouteHandler,
  getSitesSiteIdDatabaseBranchesRouteHandler,
  getSitesSiteIdDatabaseComputeSettingsRouteHandler,
  getSitesSiteIdDatabaseMigrationsNameRouteHandler,
  getSitesSiteIdDatabaseMigrationsRouteHandler,
  getSitesSiteIdDatabaseRouteHandler,
  getSitesSiteIdDatabaseSnapshotsRouteHandler,
  getSitesSiteIdDeployedBranchesRouteHandler,
  getSitesSiteIdDeploysDeployIdRouteHandler,
  getSitesSiteIdDeploysRouteHandler,
  getSitesSiteIdDevServerHooksIdRouteHandler,
  getSitesSiteIdDevServerHooksRouteHandler,
  getSitesSiteIdDevServersDevServerIdRouteHandler,
  getSitesSiteIdDevServersRouteHandler,
  getSitesSiteIdDnsRouteHandler,
  getSitesSiteIdFilesFilePathRouteHandler,
  getSitesSiteIdFilesRouteHandler,
  getSitesSiteIdFormsRouteHandler,
  getSitesSiteIdFunctionsRouteHandler,
  getSitesSiteIdIdentityIdentityIdUsersUserIdRouteHandler,
  getSitesSiteIdMetadataRouteHandler,
  getSitesSiteIdRouteHandler,
  getSitesSiteIdServiceInstancesRouteHandler,
  getSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  getSitesSiteIdSnippetsRouteHandler,
  getSitesSiteIdSnippetsSnippetIdRouteHandler,
  getSitesSiteIdSslCertificatesRouteHandler,
  getSitesSiteIdSslRouteHandler,
  getSitesSiteIdSubmissionsRouteHandler,
  getSitesSiteIdTrafficSplitsRouteHandler,
  getSitesSiteIdTrafficSplitsSplitTestIdRouteHandler,
  getSubmissionsSubmissionIdRouteHandler,
  getUserRouteHandler,
  patchAccountsAccountIdEnvKeyRouteHandler,
  patchAgentRunnersAgentRunnerIdRouteHandler,
  patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  patchSitesSiteIdRouteHandler,
  postAccountsAccountIdEnvRouteHandler,
  postAccountSlugMembersRouteHandler,
  postAccountSlugSitesRouteHandler,
  postAccountsRouteHandler,
  postAgentRunnersAgentRunnerIdArchiveRouteHandler,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRouteHandler,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRouteHandler,
  postAgentRunnersAgentRunnerIdSessionsRouteHandler,
  postAgentRunnersAgentRunnerIdStopRouteHandler,
  postAgentRunnersRouteHandler,
  postBuildsBuildIdLogRouteHandler,
  postBuildsBuildIdStartRouteHandler,
  postDeployKeysRouteHandler,
  postDeploysDeployIdCancelRouteHandler,
  postDeploysDeployIdLockRouteHandler,
  postDeploysDeployIdUnlockRouteHandler,
  postDnsZonesRouteHandler,
  postDnsZonesZoneIdDnsRecordsRouteHandler,
  postHooksHookIdEnableRouteHandler,
  postHooksRouteHandler,
  postOauthTicketsRouteHandler,
  postOauthTicketsTicketIdExchangeRouteHandler,
  postPurgeRouteHandler,
  postSitesRouteHandler,
  postSitesSiteIdAgentRunnersRouteHandler,
  postSitesSiteIdAssetsRouteHandler,
  postSitesSiteIdBuildHooksRouteHandler,
  postSitesSiteIdBuildsRouteHandler,
  postSitesSiteIdDatabaseBranchBranchIdResetRouteHandler,
  postSitesSiteIdDatabaseBranchRouteHandler,
  postSitesSiteIdDatabaseMigrationsDeployIdRouteHandler,
  postSitesSiteIdDatabaseRouteHandler,
  postSitesSiteIdDatabaseSnapshotRouteHandler,
  postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRouteHandler,
  postSitesSiteIdDeploysDeployIdRestoreRouteHandler,
  postSitesSiteIdDeploysRouteHandler,
  postSitesSiteIdDevServerHooksRouteHandler,
  postSitesSiteIdDevServersDevServerIdStateRouteHandler,
  postSitesSiteIdDevServersRouteHandler,
  postSitesSiteIdIdentityIdentityIdUsersLookupRouteHandler,
  postSitesSiteIdServicesAddonInstancesRouteHandler,
  postSitesSiteIdSnippetsRouteHandler,
  postSitesSiteIdSslRouteHandler,
  postSitesSiteIdTrafficSplitsRouteHandler,
  postSitesSiteIdTrafficSplitsSplitTestIdPublishRouteHandler,
  postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRouteHandler,
  putAccountsAccountIdEnvKeyRouteHandler,
  putAccountsAccountIdRouteHandler,
  putAccountSlugMembersMemberIdRouteHandler,
  putDeploysDeployIdEdgeFunctionsCodeShaRouteHandler,
  putDeploysDeployIdFilesPathRouteHandler,
  putDeploysDeployIdFunctionsNameRouteHandler,
  putDeploysDeployIdServerCodeShaRouteHandler,
  putDnsZonesZoneIdTransferRouteHandler,
  putHooksHookIdRouteHandler,
  putSitesSiteIdAssetsAssetIdRouteHandler,
  putSitesSiteIdBuildHooksIdRouteHandler,
  putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRouteHandler,
  putSitesSiteIdDatabaseComputeSettingsRouteHandler,
  putSitesSiteIdDeploysDeployIdRouteHandler,
  putSitesSiteIdDevServerHooksIdRouteHandler,
  putSitesSiteIdDisableRouteHandler,
  putSitesSiteIdDnsRouteHandler,
  putSitesSiteIdEnableRouteHandler,
  putSitesSiteIdMetadataRouteHandler,
  putSitesSiteIdRollbackRouteHandler,
  putSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  putSitesSiteIdSnippetsSnippetIdRouteHandler,
  putSitesSiteIdTrafficSplitsSplitTestIdRouteHandler,
  putSitesSiteIdUnlinkRepoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(postSitesRoute, postSitesRouteHandler)
  .openapi(getSitesSiteIdRoute, getSitesSiteIdRouteHandler)
  .openapi(patchSitesSiteIdRoute, patchSitesSiteIdRouteHandler)
  .openapi(deleteSitesSiteIdRoute, deleteSitesSiteIdRouteHandler)
  .openapi(postSitesSiteIdSslRoute, postSitesSiteIdSslRouteHandler)
  .openapi(getSitesSiteIdSslRoute, getSitesSiteIdSslRouteHandler)
  .openapi(getSitesSiteIdSslCertificatesRoute, getSitesSiteIdSslCertificatesRouteHandler)
  .openapi(getAccountsAccountIdEnvRoute, getAccountsAccountIdEnvRouteHandler)
  .openapi(postAccountsAccountIdEnvRoute, postAccountsAccountIdEnvRouteHandler)
  .openapi(getApiV1SitesSiteIdEnvRoute, getApiV1SitesSiteIdEnvRouteHandler)
  .openapi(getAccountsAccountIdEnvKeyRoute, getAccountsAccountIdEnvKeyRouteHandler)
  .openapi(putAccountsAccountIdEnvKeyRoute, putAccountsAccountIdEnvKeyRouteHandler)
  .openapi(patchAccountsAccountIdEnvKeyRoute, patchAccountsAccountIdEnvKeyRouteHandler)
  .openapi(deleteAccountsAccountIdEnvKeyRoute, deleteAccountsAccountIdEnvKeyRouteHandler)
  .openapi(
    deleteAccountsAccountIdEnvKeyValueIdRoute,
    deleteAccountsAccountIdEnvKeyValueIdRouteHandler,
  )
  .openapi(getSitesSiteIdFunctionsRoute, getSitesSiteIdFunctionsRouteHandler)
  .openapi(getSitesSiteIdFormsRoute, getSitesSiteIdFormsRouteHandler)
  .openapi(deleteSitesSiteIdFormsFormIdRoute, deleteSitesSiteIdFormsFormIdRouteHandler)
  .openapi(getSitesSiteIdSubmissionsRoute, getSitesSiteIdSubmissionsRouteHandler)
  .openapi(getSitesSiteIdFilesRoute, getSitesSiteIdFilesRouteHandler)
  .openapi(getSitesSiteIdAssetsRoute, getSitesSiteIdAssetsRouteHandler)
  .openapi(postSitesSiteIdAssetsRoute, postSitesSiteIdAssetsRouteHandler)
  .openapi(getSitesSiteIdAssetsAssetIdRoute, getSitesSiteIdAssetsAssetIdRouteHandler)
  .openapi(putSitesSiteIdAssetsAssetIdRoute, putSitesSiteIdAssetsAssetIdRouteHandler)
  .openapi(deleteSitesSiteIdAssetsAssetIdRoute, deleteSitesSiteIdAssetsAssetIdRouteHandler)
  .openapi(
    getSitesSiteIdAssetsAssetIdPublicSignatureRoute,
    getSitesSiteIdAssetsAssetIdPublicSignatureRouteHandler,
  )
  .openapi(getSitesSiteIdFilesFilePathRoute, getSitesSiteIdFilesFilePathRouteHandler)
  .openapi(postPurgeRoute, postPurgeRouteHandler)
  .openapi(getSitesSiteIdSnippetsRoute, getSitesSiteIdSnippetsRouteHandler)
  .openapi(postSitesSiteIdSnippetsRoute, postSitesSiteIdSnippetsRouteHandler)
  .openapi(getSitesSiteIdSnippetsSnippetIdRoute, getSitesSiteIdSnippetsSnippetIdRouteHandler)
  .openapi(putSitesSiteIdSnippetsSnippetIdRoute, putSitesSiteIdSnippetsSnippetIdRouteHandler)
  .openapi(deleteSitesSiteIdSnippetsSnippetIdRoute, deleteSitesSiteIdSnippetsSnippetIdRouteHandler)
  .openapi(getSitesSiteIdMetadataRoute, getSitesSiteIdMetadataRouteHandler)
  .openapi(putSitesSiteIdMetadataRoute, putSitesSiteIdMetadataRouteHandler)
  .openapi(getSitesSiteIdBuildHooksRoute, getSitesSiteIdBuildHooksRouteHandler)
  .openapi(postSitesSiteIdBuildHooksRoute, postSitesSiteIdBuildHooksRouteHandler)
  .openapi(getSitesSiteIdBuildHooksIdRoute, getSitesSiteIdBuildHooksIdRouteHandler)
  .openapi(putSitesSiteIdBuildHooksIdRoute, putSitesSiteIdBuildHooksIdRouteHandler)
  .openapi(deleteSitesSiteIdBuildHooksIdRoute, deleteSitesSiteIdBuildHooksIdRouteHandler)
  .openapi(getSitesSiteIdDeploysRoute, getSitesSiteIdDeploysRouteHandler)
  .openapi(postSitesSiteIdDeploysRoute, postSitesSiteIdDeploysRouteHandler)
  .openapi(getSitesSiteIdDeploysDeployIdRoute, getSitesSiteIdDeploysDeployIdRouteHandler)
  .openapi(putSitesSiteIdDeploysDeployIdRoute, putSitesSiteIdDeploysDeployIdRouteHandler)
  .openapi(deleteSitesSiteIdDeploysDeployIdRoute, deleteSitesSiteIdDeploysDeployIdRouteHandler)
  .openapi(postDeploysDeployIdCancelRoute, postDeploysDeployIdCancelRouteHandler)
  .openapi(
    postSitesSiteIdDeploysDeployIdRestoreRoute,
    postSitesSiteIdDeploysDeployIdRestoreRouteHandler,
  )
  .openapi(getSitesSiteIdBuildsRoute, getSitesSiteIdBuildsRouteHandler)
  .openapi(postSitesSiteIdBuildsRoute, postSitesSiteIdBuildsRouteHandler)
  .openapi(getSitesSiteIdDeployedBranchesRoute, getSitesSiteIdDeployedBranchesRouteHandler)
  .openapi(putSitesSiteIdUnlinkRepoRoute, putSitesSiteIdUnlinkRepoRouteHandler)
  .openapi(putSitesSiteIdEnableRoute, putSitesSiteIdEnableRouteHandler)
  .openapi(putSitesSiteIdDisableRoute, putSitesSiteIdDisableRouteHandler)
  .openapi(getBuildsBuildIdRoute, getBuildsBuildIdRouteHandler)
  .openapi(postBuildsBuildIdLogRoute, postBuildsBuildIdLogRouteHandler)
  .openapi(postBuildsBuildIdStartRoute, postBuildsBuildIdStartRouteHandler)
  .openapi(getAccountIdBuildsStatusRoute, getAccountIdBuildsStatusRouteHandler)
  .openapi(getSitesSiteIdDnsRoute, getSitesSiteIdDnsRouteHandler)
  .openapi(putSitesSiteIdDnsRoute, putSitesSiteIdDnsRouteHandler)
  .openapi(putSitesSiteIdRollbackRoute, putSitesSiteIdRollbackRouteHandler)
  .openapi(getDeploysDeployIdRoute, getDeploysDeployIdRouteHandler)
  .openapi(deleteDeploysDeployIdRoute, deleteDeploysDeployIdRouteHandler)
  .openapi(postDeploysDeployIdLockRoute, postDeploysDeployIdLockRouteHandler)
  .openapi(postDeploysDeployIdUnlockRoute, postDeploysDeployIdUnlockRouteHandler)
  .openapi(putDeploysDeployIdFilesPathRoute, putDeploysDeployIdFilesPathRouteHandler)
  .openapi(putDeploysDeployIdFunctionsNameRoute, putDeploysDeployIdFunctionsNameRouteHandler)
  .openapi(putDeploysDeployIdServerCodeShaRoute, putDeploysDeployIdServerCodeShaRouteHandler)
  .openapi(
    putDeploysDeployIdEdgeFunctionsCodeShaRoute,
    putDeploysDeployIdEdgeFunctionsCodeShaRouteHandler,
  )
  .openapi(getFormsFormIdSubmissionsRoute, getFormsFormIdSubmissionsRouteHandler)
  .openapi(getHooksRoute, getHooksRouteHandler)
  .openapi(postHooksRoute, postHooksRouteHandler)
  .openapi(getHooksHookIdRoute, getHooksHookIdRouteHandler)
  .openapi(putHooksHookIdRoute, putHooksHookIdRouteHandler)
  .openapi(deleteHooksHookIdRoute, deleteHooksHookIdRouteHandler)
  .openapi(postHooksHookIdEnableRoute, postHooksHookIdEnableRouteHandler)
  .openapi(getHooksTypesRoute, getHooksTypesRouteHandler)
  .openapi(postOauthTicketsRoute, postOauthTicketsRouteHandler)
  .openapi(getOauthTicketsTicketIdRoute, getOauthTicketsTicketIdRouteHandler)
  .openapi(postOauthTicketsTicketIdExchangeRoute, postOauthTicketsTicketIdExchangeRouteHandler)
  .openapi(getDeployKeysRoute, getDeployKeysRouteHandler)
  .openapi(postDeployKeysRoute, postDeployKeysRouteHandler)
  .openapi(getDeployKeysKeyIdRoute, getDeployKeysKeyIdRouteHandler)
  .openapi(deleteDeployKeysKeyIdRoute, deleteDeployKeysKeyIdRouteHandler)
  .openapi(postAccountSlugSitesRoute, postAccountSlugSitesRouteHandler)
  .openapi(getAccountSlugSitesRoute, getAccountSlugSitesRouteHandler)
  .openapi(getAccountSlugMembersRoute, getAccountSlugMembersRouteHandler)
  .openapi(postAccountSlugMembersRoute, postAccountSlugMembersRouteHandler)
  .openapi(getAccountSlugMembersMemberIdRoute, getAccountSlugMembersMemberIdRouteHandler)
  .openapi(putAccountSlugMembersMemberIdRoute, putAccountSlugMembersMemberIdRouteHandler)
  .openapi(deleteAccountSlugMembersMemberIdRoute, deleteAccountSlugMembersMemberIdRouteHandler)
  .openapi(getBillingPaymentMethodsRoute, getBillingPaymentMethodsRouteHandler)
  .openapi(getAccountsTypesRoute, getAccountsTypesRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(putAccountsAccountIdRoute, putAccountsAccountIdRouteHandler)
  .openapi(deleteAccountsAccountIdRoute, deleteAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdAuditRoute, getAccountsAccountIdAuditRouteHandler)
  .openapi(getAgentRunnersRoute, getAgentRunnersRouteHandler)
  .openapi(postAgentRunnersRoute, postAgentRunnersRouteHandler)
  .openapi(postSitesSiteIdAgentRunnersRoute, postSitesSiteIdAgentRunnersRouteHandler)
  .openapi(getAgentRunnersAgentRunnerIdRoute, getAgentRunnersAgentRunnerIdRouteHandler)
  .openapi(patchAgentRunnersAgentRunnerIdRoute, patchAgentRunnersAgentRunnerIdRouteHandler)
  .openapi(deleteAgentRunnersAgentRunnerIdRoute, deleteAgentRunnersAgentRunnerIdRouteHandler)
  .openapi(postAgentRunnersAgentRunnerIdStopRoute, postAgentRunnersAgentRunnerIdStopRouteHandler)
  .openapi(getAgentRunnersAgentRunnerIdDiffRoute, getAgentRunnersAgentRunnerIdDiffRouteHandler)
  .openapi(
    postAgentRunnersAgentRunnerIdArchiveRoute,
    postAgentRunnersAgentRunnerIdArchiveRouteHandler,
  )
  .openapi(
    getAgentRunnersAgentRunnerIdSessionsRoute,
    getAgentRunnersAgentRunnerIdSessionsRouteHandler,
  )
  .openapi(
    postAgentRunnersAgentRunnerIdSessionsRoute,
    postAgentRunnersAgentRunnerIdSessionsRouteHandler,
  )
  .openapi(
    getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
    getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  )
  .openapi(
    patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
    patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  )
  .openapi(
    deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
    deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRouteHandler,
  )
  .openapi(
    postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute,
    postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRouteHandler,
  )
  .openapi(
    postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute,
    postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRouteHandler,
  )
  .openapi(getSubmissionsSubmissionIdRoute, getSubmissionsSubmissionIdRouteHandler)
  .openapi(deleteSubmissionsSubmissionIdRoute, deleteSubmissionsSubmissionIdRouteHandler)
  .openapi(getSitesSiteIdServiceInstancesRoute, getSitesSiteIdServiceInstancesRouteHandler)
  .openapi(
    postSitesSiteIdServicesAddonInstancesRoute,
    postSitesSiteIdServicesAddonInstancesRouteHandler,
  )
  .openapi(
    getSitesSiteIdServicesAddonInstancesInstanceIdRoute,
    getSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  )
  .openapi(
    putSitesSiteIdServicesAddonInstancesInstanceIdRoute,
    putSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  )
  .openapi(
    deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute,
    deleteSitesSiteIdServicesAddonInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getSitesSiteIdIdentityIdentityIdUsersUserIdRoute,
    getSitesSiteIdIdentityIdentityIdUsersUserIdRouteHandler,
  )
  .openapi(
    postSitesSiteIdIdentityIdentityIdUsersLookupRoute,
    postSitesSiteIdIdentityIdentityIdUsersLookupRouteHandler,
  )
  .openapi(getServicesIndexRoute, getServicesIndexRouteHandler)
  .openapi(getServicesAddonNameRoute, getServicesAddonNameRouteHandler)
  .openapi(getServicesAddonNameManifestRoute, getServicesAddonNameManifestRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(postSitesSiteIdTrafficSplitsRoute, postSitesSiteIdTrafficSplitsRouteHandler)
  .openapi(getSitesSiteIdTrafficSplitsRoute, getSitesSiteIdTrafficSplitsRouteHandler)
  .openapi(
    putSitesSiteIdTrafficSplitsSplitTestIdRoute,
    putSitesSiteIdTrafficSplitsSplitTestIdRouteHandler,
  )
  .openapi(
    getSitesSiteIdTrafficSplitsSplitTestIdRoute,
    getSitesSiteIdTrafficSplitsSplitTestIdRouteHandler,
  )
  .openapi(
    postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute,
    postSitesSiteIdTrafficSplitsSplitTestIdPublishRouteHandler,
  )
  .openapi(
    postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute,
    postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRouteHandler,
  )
  .openapi(postDnsZonesRoute, postDnsZonesRouteHandler)
  .openapi(getDnsZonesRoute, getDnsZonesRouteHandler)
  .openapi(getDnsZonesZoneIdRoute, getDnsZonesZoneIdRouteHandler)
  .openapi(deleteDnsZonesZoneIdRoute, deleteDnsZonesZoneIdRouteHandler)
  .openapi(putDnsZonesZoneIdTransferRoute, putDnsZonesZoneIdTransferRouteHandler)
  .openapi(getDnsZonesZoneIdDnsRecordsRoute, getDnsZonesZoneIdDnsRecordsRouteHandler)
  .openapi(postDnsZonesZoneIdDnsRecordsRoute, postDnsZonesZoneIdDnsRecordsRouteHandler)
  .openapi(
    getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
    getDnsZonesZoneIdDnsRecordsDnsRecordIdRouteHandler,
  )
  .openapi(
    deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
    deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRouteHandler,
  )
  .openapi(getSitesSiteIdDevServersRoute, getSitesSiteIdDevServersRouteHandler)
  .openapi(postSitesSiteIdDevServersRoute, postSitesSiteIdDevServersRouteHandler)
  .openapi(deleteSitesSiteIdDevServersRoute, deleteSitesSiteIdDevServersRouteHandler)
  .openapi(
    getSitesSiteIdDevServersDevServerIdRoute,
    getSitesSiteIdDevServersDevServerIdRouteHandler,
  )
  .openapi(
    postSitesSiteIdDevServersDevServerIdStateRoute,
    postSitesSiteIdDevServersDevServerIdStateRouteHandler,
  )
  .openapi(getSitesSiteIdDevServerHooksRoute, getSitesSiteIdDevServerHooksRouteHandler)
  .openapi(postSitesSiteIdDevServerHooksRoute, postSitesSiteIdDevServerHooksRouteHandler)
  .openapi(getSitesSiteIdDevServerHooksIdRoute, getSitesSiteIdDevServerHooksIdRouteHandler)
  .openapi(putSitesSiteIdDevServerHooksIdRoute, putSitesSiteIdDevServerHooksIdRouteHandler)
  .openapi(deleteSitesSiteIdDevServerHooksIdRoute, deleteSitesSiteIdDevServerHooksIdRouteHandler)
  .openapi(getAiGatewayProvidersRoute, getAiGatewayProvidersRouteHandler)
  .openapi(getSitesSiteIdAiGatewayTokenRoute, getSitesSiteIdAiGatewayTokenRouteHandler)
  .openapi(getAccountsAccountIdAiGatewayTokenRoute, getAccountsAccountIdAiGatewayTokenRouteHandler)
  .openapi(postSitesSiteIdDatabaseRoute, postSitesSiteIdDatabaseRouteHandler)
  .openapi(getSitesSiteIdDatabaseRoute, getSitesSiteIdDatabaseRouteHandler)
  .openapi(deleteSitesSiteIdDatabaseRoute, deleteSitesSiteIdDatabaseRouteHandler)
  .openapi(postSitesSiteIdDatabaseBranchRoute, postSitesSiteIdDatabaseBranchRouteHandler)
  .openapi(getSitesSiteIdDatabaseBranchesRoute, getSitesSiteIdDatabaseBranchesRouteHandler)
  .openapi(
    getSitesSiteIdDatabaseBranchBranchIdRoute,
    getSitesSiteIdDatabaseBranchBranchIdRouteHandler,
  )
  .openapi(
    deleteSitesSiteIdDatabaseBranchBranchIdRoute,
    deleteSitesSiteIdDatabaseBranchBranchIdRouteHandler,
  )
  .openapi(
    postSitesSiteIdDatabaseBranchBranchIdResetRoute,
    postSitesSiteIdDatabaseBranchBranchIdResetRouteHandler,
  )
  .openapi(
    putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute,
    putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRouteHandler,
  )
  .openapi(
    putSitesSiteIdDatabaseComputeSettingsRoute,
    putSitesSiteIdDatabaseComputeSettingsRouteHandler,
  )
  .openapi(
    getSitesSiteIdDatabaseComputeSettingsRoute,
    getSitesSiteIdDatabaseComputeSettingsRouteHandler,
  )
  .openapi(
    deleteSitesSiteIdDatabaseComputeSettingsRoute,
    deleteSitesSiteIdDatabaseComputeSettingsRouteHandler,
  )
  .openapi(getSitesSiteIdDatabaseMigrationsRoute, getSitesSiteIdDatabaseMigrationsRouteHandler)
  .openapi(
    getSitesSiteIdDatabaseMigrationsNameRoute,
    getSitesSiteIdDatabaseMigrationsNameRouteHandler,
  )
  .openapi(
    postSitesSiteIdDatabaseMigrationsDeployIdRoute,
    postSitesSiteIdDatabaseMigrationsDeployIdRouteHandler,
  )
  .openapi(postSitesSiteIdDatabaseSnapshotRoute, postSitesSiteIdDatabaseSnapshotRouteHandler)
  .openapi(getSitesSiteIdDatabaseSnapshotsRoute, getSitesSiteIdDatabaseSnapshotsRouteHandler)
  .openapi(
    deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute,
    deleteSitesSiteIdDatabaseSnapshotSnapshotIdRouteHandler,
  )
  .openapi(
    postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute,
    postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRouteHandler,
  )

export default app

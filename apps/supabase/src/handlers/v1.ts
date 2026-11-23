import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BranchesBranchIdOrRefRoute,
  deleteV1ProjectsRefApiKeysIdRoute,
  deleteV1ProjectsRefBillingAddonsAddonVariantRoute,
  deleteV1ProjectsRefBranchesRoute,
  deleteV1ProjectsRefClaimTokenRoute,
  deleteV1ProjectsRefCliLoginRoleRoute,
  deleteV1ProjectsRefConfigAuthSigningKeysIdRoute,
  deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
  deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
  deleteV1ProjectsRefCustomHostnameRoute,
  deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute,
  deleteV1ProjectsRefDatabaseJitUserIdRoute,
  deleteV1ProjectsRefDatabaseMigrationsRoute,
  deleteV1ProjectsRefFunctionsFunctionSlugRoute,
  deleteV1ProjectsRefFunctionsRoute,
  deleteV1ProjectsRefNetworkBansRoute,
  deleteV1ProjectsRefRoute,
  deleteV1ProjectsRefSecretsRoute,
  deleteV1ProjectsRefVanitySubdomainRoute,
  getV1BranchesBranchIdOrRefDiffRoute,
  getV1BranchesBranchIdOrRefRoute,
  getV1OauthAuthorizeProjectClaimRoute,
  getV1OauthAuthorizeRoute,
  getV1OrganizationsRoute,
  getV1OrganizationsSlugEntitlementsRoute,
  getV1OrganizationsSlugMembersRoute,
  getV1OrganizationsSlugProjectClaimTokenRoute,
  getV1OrganizationsSlugProjectsRoute,
  getV1OrganizationsSlugRoute,
  getV1ProfileRoute,
  getV1ProjectsAvailableRegionsRoute,
  getV1ProjectsRefActionsRoute,
  getV1ProjectsRefActionsRunIdLogsRoute,
  getV1ProjectsRefActionsRunIdRoute,
  getV1ProjectsRefAdvisorsPerformanceRoute,
  getV1ProjectsRefAdvisorsSecurityRoute,
  getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute,
  getV1ProjectsRefAnalyticsEndpointsLogsAllRoute,
  getV1ProjectsRefAnalyticsEndpointsLogsRoute,
  getV1ProjectsRefAnalyticsEndpointsMetricsRoute,
  getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute,
  getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute,
  getV1ProjectsRefApiKeysIdRoute,
  getV1ProjectsRefApiKeysLegacyRoute,
  getV1ProjectsRefApiKeysRoute,
  getV1ProjectsRefBillingAddonsRoute,
  getV1ProjectsRefBranchesNameRoute,
  getV1ProjectsRefBranchesRoute,
  getV1ProjectsRefClaimTokenRoute,
  getV1ProjectsRefConfigAuthRoute,
  getV1ProjectsRefConfigAuthSigningKeysIdRoute,
  getV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
  getV1ProjectsRefConfigAuthSigningKeysRoute,
  getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
  getV1ProjectsRefConfigAuthSsoProvidersRoute,
  getV1ProjectsRefConfigAuthThirdPartyAuthRoute,
  getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
  getV1ProjectsRefConfigDatabasePgbouncerRoute,
  getV1ProjectsRefConfigDatabasePoolerRoute,
  getV1ProjectsRefConfigDatabasePostgresRoute,
  getV1ProjectsRefConfigDiskAutoscaleRoute,
  getV1ProjectsRefConfigDiskRoute,
  getV1ProjectsRefConfigDiskUtilRoute,
  getV1ProjectsRefConfigRealtimeRoute,
  getV1ProjectsRefConfigStorageRoute,
  getV1ProjectsRefCustomHostnameRoute,
  getV1ProjectsRefDatabaseBackupsRestorePointRoute,
  getV1ProjectsRefDatabaseBackupsRoute,
  getV1ProjectsRefDatabaseBackupsScheduleRoute,
  getV1ProjectsRefDatabaseContextRoute,
  getV1ProjectsRefDatabaseJitListRoute,
  getV1ProjectsRefDatabaseJitRoute,
  getV1ProjectsRefDatabaseMigrationsRoute,
  getV1ProjectsRefDatabaseMigrationsVersionRoute,
  getV1ProjectsRefDatabaseOpenapiRoute,
  getV1ProjectsRefFunctionsFunctionSlugBodyRoute,
  getV1ProjectsRefFunctionsFunctionSlugRoute,
  getV1ProjectsRefFunctionsRoute,
  getV1ProjectsRefHealthRoute,
  getV1ProjectsRefJitAccessRoute,
  getV1ProjectsRefNetworkRestrictionsRoute,
  getV1ProjectsRefPgsodiumRoute,
  getV1ProjectsRefPostgrestRoute,
  getV1ProjectsRefReadonlyRoute,
  getV1ProjectsRefRestoreRoute,
  getV1ProjectsRefRoute,
  getV1ProjectsRefSecretsRoute,
  getV1ProjectsRefSslEnforcementRoute,
  getV1ProjectsRefStorageBucketsRoute,
  getV1ProjectsRefTypesTypescriptRoute,
  getV1ProjectsRefUpgradeEligibilityRoute,
  getV1ProjectsRefUpgradeStatusRoute,
  getV1ProjectsRefVanitySubdomainRoute,
  getV1ProjectsRoute,
  getV1SnippetsIdRoute,
  getV1SnippetsRoute,
  headV1ProjectsRefActionsRoute,
  patchV1BranchesBranchIdOrRefRoute,
  patchV1ProjectsRefActionsRunIdStatusRoute,
  patchV1ProjectsRefApiKeysIdRoute,
  patchV1ProjectsRefBillingAddonsRoute,
  patchV1ProjectsRefConfigAuthRoute,
  patchV1ProjectsRefConfigAuthSigningKeysIdRoute,
  patchV1ProjectsRefConfigDatabasePoolerRoute,
  patchV1ProjectsRefConfigDatabasePostgresRoute,
  patchV1ProjectsRefConfigRealtimeRoute,
  patchV1ProjectsRefConfigStorageRoute,
  patchV1ProjectsRefDatabaseBackupsScheduleRoute,
  patchV1ProjectsRefDatabaseMigrationsVersionRoute,
  patchV1ProjectsRefDatabasePasswordRoute,
  patchV1ProjectsRefFunctionsFunctionSlugRoute,
  patchV1ProjectsRefNetworkRestrictionsRoute,
  patchV1ProjectsRefPostgrestRoute,
  patchV1ProjectsRefRoute,
  postV1BranchesBranchIdOrRefMergeRoute,
  postV1BranchesBranchIdOrRefPushRoute,
  postV1BranchesBranchIdOrRefResetRoute,
  postV1BranchesBranchIdOrRefRestoreRoute,
  postV1OauthRevokeRoute,
  postV1OauthTokenRoute,
  postV1OrganizationsRoute,
  postV1OrganizationsSlugProjectClaimTokenRoute,
  postV1ProjectsRefAnalyticsEndpointsLogsRoute,
  postV1ProjectsRefApiKeysRoute,
  postV1ProjectsRefBranchesRoute,
  postV1ProjectsRefClaimTokenRoute,
  postV1ProjectsRefCliLoginRoleRoute,
  postV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
  postV1ProjectsRefConfigAuthSigningKeysRoute,
  postV1ProjectsRefConfigAuthSsoProvidersRoute,
  postV1ProjectsRefConfigAuthThirdPartyAuthRoute,
  postV1ProjectsRefConfigDiskRoute,
  postV1ProjectsRefConfigRealtimeShutdownRoute,
  postV1ProjectsRefCustomHostnameActivateRoute,
  postV1ProjectsRefCustomHostnameInitializeRoute,
  postV1ProjectsRefCustomHostnameReverifyRoute,
  postV1ProjectsRefDatabaseBackupsRestorePitrRoute,
  postV1ProjectsRefDatabaseBackupsRestorePointRoute,
  postV1ProjectsRefDatabaseBackupsRestoreRoute,
  postV1ProjectsRefDatabaseBackupsUndoRoute,
  postV1ProjectsRefDatabaseJitInviteAcceptRoute,
  postV1ProjectsRefDatabaseJitInviteRoute,
  postV1ProjectsRefDatabaseJitRoute,
  postV1ProjectsRefDatabaseMigrationsRoute,
  postV1ProjectsRefDatabaseQueryReadOnlyRoute,
  postV1ProjectsRefDatabaseQueryRoute,
  postV1ProjectsRefDatabaseWebhooksEnableRoute,
  postV1ProjectsRefFunctionsDeployRoute,
  postV1ProjectsRefFunctionsRoute,
  postV1ProjectsRefNetworkBansRetrieveEnrichedRoute,
  postV1ProjectsRefNetworkBansRetrieveRoute,
  postV1ProjectsRefNetworkRestrictionsApplyRoute,
  postV1ProjectsRefNetworkRestrictionsReviewRoute,
  postV1ProjectsRefPauseRoute,
  postV1ProjectsRefReadonlyTemporaryDisableRoute,
  postV1ProjectsRefReadReplicasRemoveRoute,
  postV1ProjectsRefReadReplicasSetupRoute,
  postV1ProjectsRefRestartRoute,
  postV1ProjectsRefRestoreCancelRoute,
  postV1ProjectsRefRestoreRoute,
  postV1ProjectsRefSecretsRoute,
  postV1ProjectsRefUpgradeRoute,
  postV1ProjectsRefVanitySubdomainActivateRoute,
  postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute,
  postV1ProjectsRoute,
  putV1ProjectsRefApiKeysLegacyRoute,
  putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
  putV1ProjectsRefConfigDatabasePostgresRoute,
  putV1ProjectsRefDatabaseJitRoute,
  putV1ProjectsRefDatabaseMigrationsRoute,
  putV1ProjectsRefFunctionsRoute,
  putV1ProjectsRefJitAccessRoute,
  putV1ProjectsRefPgsodiumRoute,
  putV1ProjectsRefSslEnforcementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BranchesBranchIdOrRefDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsAvailableRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OauthAuthorizeProjectClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV1ProjectsRefActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefActionsRunIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefApiKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefApiKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefCustomHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefCustomHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameReverifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCustomHostnameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefJitAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefJitAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkBansRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkBansRetrieveEnrichedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefNetworkBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefNetworkRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefNetworkRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkRestrictionsApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefNetworkRestrictionsReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefPgsodiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefPgsodiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefPostgrestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefPostgrestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefSslEnforcementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefSslEnforcementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefTypesTypescriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefVanitySubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefVanitySubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefVanitySubdomainActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefUpgradeEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefUpgradeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefReadonlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadonlyTemporaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadReplicasSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadReplicasRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthSigningKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthThirdPartyAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthThirdPartyAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefRestoreCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefBillingAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefBillingAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefBillingAddonsAddonVariantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAdvisorsPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAdvisorsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsLogsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefAnalyticsEndpointsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCliLoginRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefCliLoginRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseMigrationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabaseMigrationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseQueryReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseWebhooksEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabasePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseJitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitInviteAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseJitUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefFunctionsDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefFunctionsFunctionSlugBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskUtilRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDiskAutoscaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePgbouncerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePoolerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigDatabasePoolerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigRealtimeShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestorePitrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestorePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsRestorePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabaseBackupsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsUndoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugProjectClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsSlugProjectClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })

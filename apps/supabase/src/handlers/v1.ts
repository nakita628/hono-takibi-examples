import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV1BranchesBranchIdOrRefRouteHandler: RouteHandler<
  typeof getV1BranchesBranchIdOrRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BranchesBranchIdOrRefRouteHandler: RouteHandler<
  typeof patchV1BranchesBranchIdOrRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BranchesBranchIdOrRefRouteHandler: RouteHandler<
  typeof deleteV1BranchesBranchIdOrRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BranchesBranchIdOrRefPushRouteHandler: RouteHandler<
  typeof postV1BranchesBranchIdOrRefPushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BranchesBranchIdOrRefMergeRouteHandler: RouteHandler<
  typeof postV1BranchesBranchIdOrRefMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BranchesBranchIdOrRefResetRouteHandler: RouteHandler<
  typeof postV1BranchesBranchIdOrRefResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BranchesBranchIdOrRefRestoreRouteHandler: RouteHandler<
  typeof postV1BranchesBranchIdOrRefRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BranchesBranchIdOrRefDiffRouteHandler: RouteHandler<
  typeof getV1BranchesBranchIdOrRefDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRouteHandler: RouteHandler<typeof getV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRouteHandler: RouteHandler<typeof postV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsAvailableRegionsRouteHandler: RouteHandler<
  typeof getV1ProjectsAvailableRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsRouteHandler: RouteHandler<typeof getV1OrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsRouteHandler: RouteHandler<
  typeof postV1OrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OauthAuthorizeRouteHandler: RouteHandler<
  typeof getV1OauthAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OauthTokenRouteHandler: RouteHandler<typeof postV1OauthTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OauthRevokeRouteHandler: RouteHandler<typeof postV1OauthRevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OauthAuthorizeProjectClaimRouteHandler: RouteHandler<
  typeof getV1OauthAuthorizeProjectClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SnippetsRouteHandler: RouteHandler<typeof getV1SnippetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SnippetsIdRouteHandler: RouteHandler<typeof getV1SnippetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProfileRouteHandler: RouteHandler<typeof getV1ProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headV1ProjectsRefActionsRouteHandler: RouteHandler<
  typeof headV1ProjectsRefActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefActionsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefActionsRunIdRouteHandler: RouteHandler<
  typeof getV1ProjectsRefActionsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefActionsRunIdStatusRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefActionsRunIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefActionsRunIdLogsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefActionsRunIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefApiKeysRouteHandler: RouteHandler<
  typeof getV1ProjectsRefApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefApiKeysRouteHandler: RouteHandler<
  typeof postV1ProjectsRefApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefApiKeysLegacyRouteHandler: RouteHandler<
  typeof getV1ProjectsRefApiKeysLegacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefApiKeysLegacyRouteHandler: RouteHandler<
  typeof putV1ProjectsRefApiKeysLegacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefApiKeysIdRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefApiKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefApiKeysIdRouteHandler: RouteHandler<
  typeof getV1ProjectsRefApiKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefApiKeysIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefApiKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefBranchesRouteHandler: RouteHandler<
  typeof getV1ProjectsRefBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefBranchesRouteHandler: RouteHandler<
  typeof postV1ProjectsRefBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefBranchesRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefBranchesNameRouteHandler: RouteHandler<
  typeof getV1ProjectsRefBranchesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefCustomHostnameRouteHandler: RouteHandler<
  typeof getV1ProjectsRefCustomHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefCustomHostnameRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefCustomHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefCustomHostnameInitializeRouteHandler: RouteHandler<
  typeof postV1ProjectsRefCustomHostnameInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefCustomHostnameReverifyRouteHandler: RouteHandler<
  typeof postV1ProjectsRefCustomHostnameReverifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefCustomHostnameActivateRouteHandler: RouteHandler<
  typeof postV1ProjectsRefCustomHostnameActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefJitAccessRouteHandler: RouteHandler<
  typeof getV1ProjectsRefJitAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefJitAccessRouteHandler: RouteHandler<
  typeof putV1ProjectsRefJitAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefNetworkBansRetrieveRouteHandler: RouteHandler<
  typeof postV1ProjectsRefNetworkBansRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefNetworkBansRetrieveEnrichedRouteHandler: RouteHandler<
  typeof postV1ProjectsRefNetworkBansRetrieveEnrichedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefNetworkBansRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefNetworkBansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefNetworkRestrictionsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefNetworkRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefNetworkRestrictionsRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefNetworkRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefNetworkRestrictionsApplyRouteHandler: RouteHandler<
  typeof postV1ProjectsRefNetworkRestrictionsApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefNetworkRestrictionsReviewRouteHandler: RouteHandler<
  typeof postV1ProjectsRefNetworkRestrictionsReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefPgsodiumRouteHandler: RouteHandler<
  typeof getV1ProjectsRefPgsodiumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefPgsodiumRouteHandler: RouteHandler<
  typeof putV1ProjectsRefPgsodiumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefPostgrestRouteHandler: RouteHandler<
  typeof getV1ProjectsRefPostgrestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefPostgrestRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefPostgrestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefRouteHandler: RouteHandler<typeof getV1ProjectsRefRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefRouteHandler: RouteHandler<typeof patchV1ProjectsRefRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefSecretsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefSecretsRouteHandler: RouteHandler<
  typeof postV1ProjectsRefSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefSecretsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefSslEnforcementRouteHandler: RouteHandler<
  typeof getV1ProjectsRefSslEnforcementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefSslEnforcementRouteHandler: RouteHandler<
  typeof putV1ProjectsRefSslEnforcementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefTypesTypescriptRouteHandler: RouteHandler<
  typeof getV1ProjectsRefTypesTypescriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefVanitySubdomainRouteHandler: RouteHandler<
  typeof getV1ProjectsRefVanitySubdomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefVanitySubdomainRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefVanitySubdomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefVanitySubdomainCheckAvailabilityRouteHandler: RouteHandler<
  typeof postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefVanitySubdomainActivateRouteHandler: RouteHandler<
  typeof postV1ProjectsRefVanitySubdomainActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefUpgradeRouteHandler: RouteHandler<
  typeof postV1ProjectsRefUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefUpgradeEligibilityRouteHandler: RouteHandler<
  typeof getV1ProjectsRefUpgradeEligibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefUpgradeStatusRouteHandler: RouteHandler<
  typeof getV1ProjectsRefUpgradeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefReadonlyRouteHandler: RouteHandler<
  typeof getV1ProjectsRefReadonlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefReadonlyTemporaryDisableRouteHandler: RouteHandler<
  typeof postV1ProjectsRefReadonlyTemporaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefReadReplicasSetupRouteHandler: RouteHandler<
  typeof postV1ProjectsRefReadReplicasSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefReadReplicasRemoveRouteHandler: RouteHandler<
  typeof postV1ProjectsRefReadReplicasRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefHealthRouteHandler: RouteHandler<
  typeof getV1ProjectsRefHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigAuthSigningKeysLegacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthSigningKeysLegacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigAuthSigningKeysRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigAuthSigningKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthSigningKeysRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthSigningKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthSigningKeysIdRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthSigningKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefConfigAuthSigningKeysIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefConfigAuthSigningKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigAuthSigningKeysIdRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigAuthSigningKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigAuthRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigAuthThirdPartyAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthThirdPartyAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefPauseRouteHandler: RouteHandler<
  typeof postV1ProjectsRefPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefRestartRouteHandler: RouteHandler<
  typeof postV1ProjectsRefRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefRestoreRouteHandler: RouteHandler<
  typeof getV1ProjectsRefRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefRestoreRouteHandler: RouteHandler<
  typeof postV1ProjectsRefRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefRestoreCancelRouteHandler: RouteHandler<
  typeof postV1ProjectsRefRestoreCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefBillingAddonsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefBillingAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefBillingAddonsRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefBillingAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefBillingAddonsAddonVariantRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefBillingAddonsAddonVariantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefClaimTokenRouteHandler: RouteHandler<
  typeof getV1ProjectsRefClaimTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefClaimTokenRouteHandler: RouteHandler<
  typeof postV1ProjectsRefClaimTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefClaimTokenRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefClaimTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAdvisorsPerformanceRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAdvisorsPerformanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAdvisorsSecurityRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAdvisorsSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsLogsAllRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsLogsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsLogsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefAnalyticsEndpointsLogsRouteHandler: RouteHandler<
  typeof postV1ProjectsRefAnalyticsEndpointsLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefAnalyticsEndpointsMetricsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefAnalyticsEndpointsMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefCliLoginRoleRouteHandler: RouteHandler<
  typeof postV1ProjectsRefCliLoginRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefCliLoginRoleRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefCliLoginRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseMigrationsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseMigrationsRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefDatabaseMigrationsRouteHandler: RouteHandler<
  typeof putV1ProjectsRefDatabaseMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefDatabaseMigrationsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefDatabaseMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseMigrationsVersionRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseMigrationsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefDatabaseMigrationsVersionRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefDatabaseMigrationsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseQueryRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseQueryReadOnlyRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseQueryReadOnlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseWebhooksEnableRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseWebhooksEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseContextRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefDatabasePasswordRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefDatabasePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseJitRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseJitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseJitRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseJitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefDatabaseJitRouteHandler: RouteHandler<
  typeof putV1ProjectsRefDatabaseJitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseJitListRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseJitListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseJitInviteRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseJitInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseJitInviteAcceptRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseJitInviteAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefDatabaseJitInviteInviteIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefDatabaseJitUserIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefDatabaseJitUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseOpenapiRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefFunctionsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefFunctionsRouteHandler: RouteHandler<
  typeof postV1ProjectsRefFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefFunctionsRouteHandler: RouteHandler<
  typeof putV1ProjectsRefFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefFunctionsRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefFunctionsDeployRouteHandler: RouteHandler<
  typeof postV1ProjectsRefFunctionsDeployRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefFunctionsFunctionSlugRouteHandler: RouteHandler<
  typeof getV1ProjectsRefFunctionsFunctionSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefFunctionsFunctionSlugRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefFunctionsFunctionSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefFunctionsFunctionSlugRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefFunctionsFunctionSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefFunctionsFunctionSlugBodyRouteHandler: RouteHandler<
  typeof getV1ProjectsRefFunctionsFunctionSlugBodyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefStorageBucketsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefStorageBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDiskRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDiskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigDiskRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigDiskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDiskUtilRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDiskUtilRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDiskAutoscaleRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDiskAutoscaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigStorageRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigStorageRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDatabasePgbouncerRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDatabasePgbouncerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDatabasePoolerRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDatabasePoolerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigDatabasePoolerRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigDatabasePoolerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigDatabasePostgresRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigDatabasePostgresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefConfigDatabasePostgresRouteHandler: RouteHandler<
  typeof putV1ProjectsRefConfigDatabasePostgresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigDatabasePostgresRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigDatabasePostgresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigRealtimeRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigRealtimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefConfigRealtimeRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefConfigRealtimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigRealtimeShutdownRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigRealtimeShutdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefConfigAuthSsoProvidersRouteHandler: RouteHandler<
  typeof postV1ProjectsRefConfigAuthSsoProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthSsoProvidersRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthSsoProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler: RouteHandler<
  typeof getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler: RouteHandler<
  typeof putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseBackupsRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseBackupsRestorePitrRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseBackupsRestorePitrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseBackupsRestorePointRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseBackupsRestorePointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseBackupsRestorePointRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseBackupsRestorePointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseBackupsRestoreRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseBackupsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRefDatabaseBackupsScheduleRouteHandler: RouteHandler<
  typeof getV1ProjectsRefDatabaseBackupsScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsRefDatabaseBackupsScheduleRouteHandler: RouteHandler<
  typeof patchV1ProjectsRefDatabaseBackupsScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRefDatabaseBackupsUndoRouteHandler: RouteHandler<
  typeof postV1ProjectsRefDatabaseBackupsUndoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsSlugEntitlementsRouteHandler: RouteHandler<
  typeof getV1OrganizationsSlugEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsSlugMembersRouteHandler: RouteHandler<
  typeof getV1OrganizationsSlugMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsSlugRouteHandler: RouteHandler<
  typeof getV1OrganizationsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsSlugProjectClaimTokenRouteHandler: RouteHandler<
  typeof getV1OrganizationsSlugProjectClaimTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsSlugProjectClaimTokenRouteHandler: RouteHandler<
  typeof postV1OrganizationsSlugProjectClaimTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsSlugProjectsRouteHandler: RouteHandler<
  typeof getV1OrganizationsSlugProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

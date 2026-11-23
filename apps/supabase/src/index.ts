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
} from './routes'
import {
  deleteV1BranchesBranchIdOrRefRouteHandler,
  deleteV1ProjectsRefApiKeysIdRouteHandler,
  deleteV1ProjectsRefBillingAddonsAddonVariantRouteHandler,
  deleteV1ProjectsRefBranchesRouteHandler,
  deleteV1ProjectsRefClaimTokenRouteHandler,
  deleteV1ProjectsRefCliLoginRoleRouteHandler,
  deleteV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler,
  deleteV1ProjectsRefCustomHostnameRouteHandler,
  deleteV1ProjectsRefDatabaseJitInviteInviteIdRouteHandler,
  deleteV1ProjectsRefDatabaseJitUserIdRouteHandler,
  deleteV1ProjectsRefDatabaseMigrationsRouteHandler,
  deleteV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  deleteV1ProjectsRefFunctionsRouteHandler,
  deleteV1ProjectsRefNetworkBansRouteHandler,
  deleteV1ProjectsRefRouteHandler,
  deleteV1ProjectsRefSecretsRouteHandler,
  deleteV1ProjectsRefVanitySubdomainRouteHandler,
  getV1BranchesBranchIdOrRefDiffRouteHandler,
  getV1BranchesBranchIdOrRefRouteHandler,
  getV1OauthAuthorizeProjectClaimRouteHandler,
  getV1OauthAuthorizeRouteHandler,
  getV1OrganizationsRouteHandler,
  getV1OrganizationsSlugEntitlementsRouteHandler,
  getV1OrganizationsSlugMembersRouteHandler,
  getV1OrganizationsSlugProjectClaimTokenRouteHandler,
  getV1OrganizationsSlugProjectsRouteHandler,
  getV1OrganizationsSlugRouteHandler,
  getV1ProfileRouteHandler,
  getV1ProjectsAvailableRegionsRouteHandler,
  getV1ProjectsRefActionsRouteHandler,
  getV1ProjectsRefActionsRunIdLogsRouteHandler,
  getV1ProjectsRefActionsRunIdRouteHandler,
  getV1ProjectsRefAdvisorsPerformanceRouteHandler,
  getV1ProjectsRefAdvisorsSecurityRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsLogsAllRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsLogsRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsMetricsRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRouteHandler,
  getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRouteHandler,
  getV1ProjectsRefApiKeysIdRouteHandler,
  getV1ProjectsRefApiKeysLegacyRouteHandler,
  getV1ProjectsRefApiKeysRouteHandler,
  getV1ProjectsRefBillingAddonsRouteHandler,
  getV1ProjectsRefBranchesNameRouteHandler,
  getV1ProjectsRefBranchesRouteHandler,
  getV1ProjectsRefClaimTokenRouteHandler,
  getV1ProjectsRefConfigAuthRouteHandler,
  getV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  getV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler,
  getV1ProjectsRefConfigAuthSigningKeysRouteHandler,
  getV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  getV1ProjectsRefConfigAuthSsoProvidersRouteHandler,
  getV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler,
  getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler,
  getV1ProjectsRefConfigDatabasePgbouncerRouteHandler,
  getV1ProjectsRefConfigDatabasePoolerRouteHandler,
  getV1ProjectsRefConfigDatabasePostgresRouteHandler,
  getV1ProjectsRefConfigDiskAutoscaleRouteHandler,
  getV1ProjectsRefConfigDiskRouteHandler,
  getV1ProjectsRefConfigDiskUtilRouteHandler,
  getV1ProjectsRefConfigRealtimeRouteHandler,
  getV1ProjectsRefConfigStorageRouteHandler,
  getV1ProjectsRefCustomHostnameRouteHandler,
  getV1ProjectsRefDatabaseBackupsRestorePointRouteHandler,
  getV1ProjectsRefDatabaseBackupsRouteHandler,
  getV1ProjectsRefDatabaseBackupsScheduleRouteHandler,
  getV1ProjectsRefDatabaseContextRouteHandler,
  getV1ProjectsRefDatabaseJitListRouteHandler,
  getV1ProjectsRefDatabaseJitRouteHandler,
  getV1ProjectsRefDatabaseMigrationsRouteHandler,
  getV1ProjectsRefDatabaseMigrationsVersionRouteHandler,
  getV1ProjectsRefDatabaseOpenapiRouteHandler,
  getV1ProjectsRefFunctionsFunctionSlugBodyRouteHandler,
  getV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  getV1ProjectsRefFunctionsRouteHandler,
  getV1ProjectsRefHealthRouteHandler,
  getV1ProjectsRefJitAccessRouteHandler,
  getV1ProjectsRefNetworkRestrictionsRouteHandler,
  getV1ProjectsRefPgsodiumRouteHandler,
  getV1ProjectsRefPostgrestRouteHandler,
  getV1ProjectsRefReadonlyRouteHandler,
  getV1ProjectsRefRestoreRouteHandler,
  getV1ProjectsRefRouteHandler,
  getV1ProjectsRefSecretsRouteHandler,
  getV1ProjectsRefSslEnforcementRouteHandler,
  getV1ProjectsRefStorageBucketsRouteHandler,
  getV1ProjectsRefTypesTypescriptRouteHandler,
  getV1ProjectsRefUpgradeEligibilityRouteHandler,
  getV1ProjectsRefUpgradeStatusRouteHandler,
  getV1ProjectsRefVanitySubdomainRouteHandler,
  getV1ProjectsRouteHandler,
  getV1SnippetsIdRouteHandler,
  getV1SnippetsRouteHandler,
  headV1ProjectsRefActionsRouteHandler,
  patchV1BranchesBranchIdOrRefRouteHandler,
  patchV1ProjectsRefActionsRunIdStatusRouteHandler,
  patchV1ProjectsRefApiKeysIdRouteHandler,
  patchV1ProjectsRefBillingAddonsRouteHandler,
  patchV1ProjectsRefConfigAuthRouteHandler,
  patchV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  patchV1ProjectsRefConfigDatabasePoolerRouteHandler,
  patchV1ProjectsRefConfigDatabasePostgresRouteHandler,
  patchV1ProjectsRefConfigRealtimeRouteHandler,
  patchV1ProjectsRefConfigStorageRouteHandler,
  patchV1ProjectsRefDatabaseBackupsScheduleRouteHandler,
  patchV1ProjectsRefDatabaseMigrationsVersionRouteHandler,
  patchV1ProjectsRefDatabasePasswordRouteHandler,
  patchV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  patchV1ProjectsRefNetworkRestrictionsRouteHandler,
  patchV1ProjectsRefPostgrestRouteHandler,
  patchV1ProjectsRefRouteHandler,
  postV1BranchesBranchIdOrRefMergeRouteHandler,
  postV1BranchesBranchIdOrRefPushRouteHandler,
  postV1BranchesBranchIdOrRefResetRouteHandler,
  postV1BranchesBranchIdOrRefRestoreRouteHandler,
  postV1OauthRevokeRouteHandler,
  postV1OauthTokenRouteHandler,
  postV1OrganizationsRouteHandler,
  postV1OrganizationsSlugProjectClaimTokenRouteHandler,
  postV1ProjectsRefAnalyticsEndpointsLogsRouteHandler,
  postV1ProjectsRefApiKeysRouteHandler,
  postV1ProjectsRefBranchesRouteHandler,
  postV1ProjectsRefClaimTokenRouteHandler,
  postV1ProjectsRefCliLoginRoleRouteHandler,
  postV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler,
  postV1ProjectsRefConfigAuthSigningKeysRouteHandler,
  postV1ProjectsRefConfigAuthSsoProvidersRouteHandler,
  postV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler,
  postV1ProjectsRefConfigDiskRouteHandler,
  postV1ProjectsRefConfigRealtimeShutdownRouteHandler,
  postV1ProjectsRefCustomHostnameActivateRouteHandler,
  postV1ProjectsRefCustomHostnameInitializeRouteHandler,
  postV1ProjectsRefCustomHostnameReverifyRouteHandler,
  postV1ProjectsRefDatabaseBackupsRestorePitrRouteHandler,
  postV1ProjectsRefDatabaseBackupsRestorePointRouteHandler,
  postV1ProjectsRefDatabaseBackupsRestoreRouteHandler,
  postV1ProjectsRefDatabaseBackupsUndoRouteHandler,
  postV1ProjectsRefDatabaseJitInviteAcceptRouteHandler,
  postV1ProjectsRefDatabaseJitInviteRouteHandler,
  postV1ProjectsRefDatabaseJitRouteHandler,
  postV1ProjectsRefDatabaseMigrationsRouteHandler,
  postV1ProjectsRefDatabaseQueryReadOnlyRouteHandler,
  postV1ProjectsRefDatabaseQueryRouteHandler,
  postV1ProjectsRefDatabaseWebhooksEnableRouteHandler,
  postV1ProjectsRefFunctionsDeployRouteHandler,
  postV1ProjectsRefFunctionsRouteHandler,
  postV1ProjectsRefNetworkBansRetrieveEnrichedRouteHandler,
  postV1ProjectsRefNetworkBansRetrieveRouteHandler,
  postV1ProjectsRefNetworkRestrictionsApplyRouteHandler,
  postV1ProjectsRefNetworkRestrictionsReviewRouteHandler,
  postV1ProjectsRefPauseRouteHandler,
  postV1ProjectsRefReadonlyTemporaryDisableRouteHandler,
  postV1ProjectsRefReadReplicasRemoveRouteHandler,
  postV1ProjectsRefReadReplicasSetupRouteHandler,
  postV1ProjectsRefRestartRouteHandler,
  postV1ProjectsRefRestoreCancelRouteHandler,
  postV1ProjectsRefRestoreRouteHandler,
  postV1ProjectsRefSecretsRouteHandler,
  postV1ProjectsRefUpgradeRouteHandler,
  postV1ProjectsRefVanitySubdomainActivateRouteHandler,
  postV1ProjectsRefVanitySubdomainCheckAvailabilityRouteHandler,
  postV1ProjectsRouteHandler,
  putV1ProjectsRefApiKeysLegacyRouteHandler,
  putV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  putV1ProjectsRefConfigDatabasePostgresRouteHandler,
  putV1ProjectsRefDatabaseJitRouteHandler,
  putV1ProjectsRefDatabaseMigrationsRouteHandler,
  putV1ProjectsRefFunctionsRouteHandler,
  putV1ProjectsRefJitAccessRouteHandler,
  putV1ProjectsRefPgsodiumRouteHandler,
  putV1ProjectsRefSslEnforcementRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1BranchesBranchIdOrRefRoute, getV1BranchesBranchIdOrRefRouteHandler)
  .openapi(patchV1BranchesBranchIdOrRefRoute, patchV1BranchesBranchIdOrRefRouteHandler)
  .openapi(deleteV1BranchesBranchIdOrRefRoute, deleteV1BranchesBranchIdOrRefRouteHandler)
  .openapi(postV1BranchesBranchIdOrRefPushRoute, postV1BranchesBranchIdOrRefPushRouteHandler)
  .openapi(postV1BranchesBranchIdOrRefMergeRoute, postV1BranchesBranchIdOrRefMergeRouteHandler)
  .openapi(postV1BranchesBranchIdOrRefResetRoute, postV1BranchesBranchIdOrRefResetRouteHandler)
  .openapi(postV1BranchesBranchIdOrRefRestoreRoute, postV1BranchesBranchIdOrRefRestoreRouteHandler)
  .openapi(getV1BranchesBranchIdOrRefDiffRoute, getV1BranchesBranchIdOrRefDiffRouteHandler)
  .openapi(getV1ProjectsRoute, getV1ProjectsRouteHandler)
  .openapi(postV1ProjectsRoute, postV1ProjectsRouteHandler)
  .openapi(getV1ProjectsAvailableRegionsRoute, getV1ProjectsAvailableRegionsRouteHandler)
  .openapi(getV1OrganizationsRoute, getV1OrganizationsRouteHandler)
  .openapi(postV1OrganizationsRoute, postV1OrganizationsRouteHandler)
  .openapi(getV1OauthAuthorizeRoute, getV1OauthAuthorizeRouteHandler)
  .openapi(postV1OauthTokenRoute, postV1OauthTokenRouteHandler)
  .openapi(postV1OauthRevokeRoute, postV1OauthRevokeRouteHandler)
  .openapi(getV1OauthAuthorizeProjectClaimRoute, getV1OauthAuthorizeProjectClaimRouteHandler)
  .openapi(getV1SnippetsRoute, getV1SnippetsRouteHandler)
  .openapi(getV1SnippetsIdRoute, getV1SnippetsIdRouteHandler)
  .openapi(getV1ProfileRoute, getV1ProfileRouteHandler)
  .openapi(headV1ProjectsRefActionsRoute, headV1ProjectsRefActionsRouteHandler)
  .openapi(getV1ProjectsRefActionsRoute, getV1ProjectsRefActionsRouteHandler)
  .openapi(getV1ProjectsRefActionsRunIdRoute, getV1ProjectsRefActionsRunIdRouteHandler)
  .openapi(
    patchV1ProjectsRefActionsRunIdStatusRoute,
    patchV1ProjectsRefActionsRunIdStatusRouteHandler,
  )
  .openapi(getV1ProjectsRefActionsRunIdLogsRoute, getV1ProjectsRefActionsRunIdLogsRouteHandler)
  .openapi(getV1ProjectsRefApiKeysRoute, getV1ProjectsRefApiKeysRouteHandler)
  .openapi(postV1ProjectsRefApiKeysRoute, postV1ProjectsRefApiKeysRouteHandler)
  .openapi(getV1ProjectsRefApiKeysLegacyRoute, getV1ProjectsRefApiKeysLegacyRouteHandler)
  .openapi(putV1ProjectsRefApiKeysLegacyRoute, putV1ProjectsRefApiKeysLegacyRouteHandler)
  .openapi(patchV1ProjectsRefApiKeysIdRoute, patchV1ProjectsRefApiKeysIdRouteHandler)
  .openapi(getV1ProjectsRefApiKeysIdRoute, getV1ProjectsRefApiKeysIdRouteHandler)
  .openapi(deleteV1ProjectsRefApiKeysIdRoute, deleteV1ProjectsRefApiKeysIdRouteHandler)
  .openapi(getV1ProjectsRefBranchesRoute, getV1ProjectsRefBranchesRouteHandler)
  .openapi(postV1ProjectsRefBranchesRoute, postV1ProjectsRefBranchesRouteHandler)
  .openapi(deleteV1ProjectsRefBranchesRoute, deleteV1ProjectsRefBranchesRouteHandler)
  .openapi(getV1ProjectsRefBranchesNameRoute, getV1ProjectsRefBranchesNameRouteHandler)
  .openapi(getV1ProjectsRefCustomHostnameRoute, getV1ProjectsRefCustomHostnameRouteHandler)
  .openapi(deleteV1ProjectsRefCustomHostnameRoute, deleteV1ProjectsRefCustomHostnameRouteHandler)
  .openapi(
    postV1ProjectsRefCustomHostnameInitializeRoute,
    postV1ProjectsRefCustomHostnameInitializeRouteHandler,
  )
  .openapi(
    postV1ProjectsRefCustomHostnameReverifyRoute,
    postV1ProjectsRefCustomHostnameReverifyRouteHandler,
  )
  .openapi(
    postV1ProjectsRefCustomHostnameActivateRoute,
    postV1ProjectsRefCustomHostnameActivateRouteHandler,
  )
  .openapi(getV1ProjectsRefJitAccessRoute, getV1ProjectsRefJitAccessRouteHandler)
  .openapi(putV1ProjectsRefJitAccessRoute, putV1ProjectsRefJitAccessRouteHandler)
  .openapi(
    postV1ProjectsRefNetworkBansRetrieveRoute,
    postV1ProjectsRefNetworkBansRetrieveRouteHandler,
  )
  .openapi(
    postV1ProjectsRefNetworkBansRetrieveEnrichedRoute,
    postV1ProjectsRefNetworkBansRetrieveEnrichedRouteHandler,
  )
  .openapi(deleteV1ProjectsRefNetworkBansRoute, deleteV1ProjectsRefNetworkBansRouteHandler)
  .openapi(
    getV1ProjectsRefNetworkRestrictionsRoute,
    getV1ProjectsRefNetworkRestrictionsRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefNetworkRestrictionsRoute,
    patchV1ProjectsRefNetworkRestrictionsRouteHandler,
  )
  .openapi(
    postV1ProjectsRefNetworkRestrictionsApplyRoute,
    postV1ProjectsRefNetworkRestrictionsApplyRouteHandler,
  )
  .openapi(
    postV1ProjectsRefNetworkRestrictionsReviewRoute,
    postV1ProjectsRefNetworkRestrictionsReviewRouteHandler,
  )
  .openapi(getV1ProjectsRefPgsodiumRoute, getV1ProjectsRefPgsodiumRouteHandler)
  .openapi(putV1ProjectsRefPgsodiumRoute, putV1ProjectsRefPgsodiumRouteHandler)
  .openapi(getV1ProjectsRefPostgrestRoute, getV1ProjectsRefPostgrestRouteHandler)
  .openapi(patchV1ProjectsRefPostgrestRoute, patchV1ProjectsRefPostgrestRouteHandler)
  .openapi(getV1ProjectsRefRoute, getV1ProjectsRefRouteHandler)
  .openapi(deleteV1ProjectsRefRoute, deleteV1ProjectsRefRouteHandler)
  .openapi(patchV1ProjectsRefRoute, patchV1ProjectsRefRouteHandler)
  .openapi(getV1ProjectsRefSecretsRoute, getV1ProjectsRefSecretsRouteHandler)
  .openapi(postV1ProjectsRefSecretsRoute, postV1ProjectsRefSecretsRouteHandler)
  .openapi(deleteV1ProjectsRefSecretsRoute, deleteV1ProjectsRefSecretsRouteHandler)
  .openapi(getV1ProjectsRefSslEnforcementRoute, getV1ProjectsRefSslEnforcementRouteHandler)
  .openapi(putV1ProjectsRefSslEnforcementRoute, putV1ProjectsRefSslEnforcementRouteHandler)
  .openapi(getV1ProjectsRefTypesTypescriptRoute, getV1ProjectsRefTypesTypescriptRouteHandler)
  .openapi(getV1ProjectsRefVanitySubdomainRoute, getV1ProjectsRefVanitySubdomainRouteHandler)
  .openapi(deleteV1ProjectsRefVanitySubdomainRoute, deleteV1ProjectsRefVanitySubdomainRouteHandler)
  .openapi(
    postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute,
    postV1ProjectsRefVanitySubdomainCheckAvailabilityRouteHandler,
  )
  .openapi(
    postV1ProjectsRefVanitySubdomainActivateRoute,
    postV1ProjectsRefVanitySubdomainActivateRouteHandler,
  )
  .openapi(postV1ProjectsRefUpgradeRoute, postV1ProjectsRefUpgradeRouteHandler)
  .openapi(getV1ProjectsRefUpgradeEligibilityRoute, getV1ProjectsRefUpgradeEligibilityRouteHandler)
  .openapi(getV1ProjectsRefUpgradeStatusRoute, getV1ProjectsRefUpgradeStatusRouteHandler)
  .openapi(getV1ProjectsRefReadonlyRoute, getV1ProjectsRefReadonlyRouteHandler)
  .openapi(
    postV1ProjectsRefReadonlyTemporaryDisableRoute,
    postV1ProjectsRefReadonlyTemporaryDisableRouteHandler,
  )
  .openapi(postV1ProjectsRefReadReplicasSetupRoute, postV1ProjectsRefReadReplicasSetupRouteHandler)
  .openapi(
    postV1ProjectsRefReadReplicasRemoveRoute,
    postV1ProjectsRefReadReplicasRemoveRouteHandler,
  )
  .openapi(getV1ProjectsRefHealthRoute, getV1ProjectsRefHealthRouteHandler)
  .openapi(
    postV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
    postV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
    getV1ProjectsRefConfigAuthSigningKeysLegacyRouteHandler,
  )
  .openapi(
    postV1ProjectsRefConfigAuthSigningKeysRoute,
    postV1ProjectsRefConfigAuthSigningKeysRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthSigningKeysRoute,
    getV1ProjectsRefConfigAuthSigningKeysRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthSigningKeysIdRoute,
    getV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefConfigAuthSigningKeysIdRoute,
    deleteV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefConfigAuthSigningKeysIdRoute,
    patchV1ProjectsRefConfigAuthSigningKeysIdRouteHandler,
  )
  .openapi(getV1ProjectsRefConfigAuthRoute, getV1ProjectsRefConfigAuthRouteHandler)
  .openapi(patchV1ProjectsRefConfigAuthRoute, patchV1ProjectsRefConfigAuthRouteHandler)
  .openapi(
    postV1ProjectsRefConfigAuthThirdPartyAuthRoute,
    postV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthThirdPartyAuthRoute,
    getV1ProjectsRefConfigAuthThirdPartyAuthRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
    deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
    getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRouteHandler,
  )
  .openapi(postV1ProjectsRefPauseRoute, postV1ProjectsRefPauseRouteHandler)
  .openapi(postV1ProjectsRefRestartRoute, postV1ProjectsRefRestartRouteHandler)
  .openapi(getV1ProjectsRefRestoreRoute, getV1ProjectsRefRestoreRouteHandler)
  .openapi(postV1ProjectsRefRestoreRoute, postV1ProjectsRefRestoreRouteHandler)
  .openapi(postV1ProjectsRefRestoreCancelRoute, postV1ProjectsRefRestoreCancelRouteHandler)
  .openapi(getV1ProjectsRefBillingAddonsRoute, getV1ProjectsRefBillingAddonsRouteHandler)
  .openapi(patchV1ProjectsRefBillingAddonsRoute, patchV1ProjectsRefBillingAddonsRouteHandler)
  .openapi(
    deleteV1ProjectsRefBillingAddonsAddonVariantRoute,
    deleteV1ProjectsRefBillingAddonsAddonVariantRouteHandler,
  )
  .openapi(getV1ProjectsRefClaimTokenRoute, getV1ProjectsRefClaimTokenRouteHandler)
  .openapi(postV1ProjectsRefClaimTokenRoute, postV1ProjectsRefClaimTokenRouteHandler)
  .openapi(deleteV1ProjectsRefClaimTokenRoute, deleteV1ProjectsRefClaimTokenRouteHandler)
  .openapi(
    getV1ProjectsRefAdvisorsPerformanceRoute,
    getV1ProjectsRefAdvisorsPerformanceRouteHandler,
  )
  .openapi(getV1ProjectsRefAdvisorsSecurityRoute, getV1ProjectsRefAdvisorsSecurityRouteHandler)
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsLogsAllRoute,
    getV1ProjectsRefAnalyticsEndpointsLogsAllRouteHandler,
  )
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsLogsRoute,
    getV1ProjectsRefAnalyticsEndpointsLogsRouteHandler,
  )
  .openapi(
    postV1ProjectsRefAnalyticsEndpointsLogsRoute,
    postV1ProjectsRefAnalyticsEndpointsLogsRouteHandler,
  )
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute,
    getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRouteHandler,
  )
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute,
    getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRouteHandler,
  )
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute,
    getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRouteHandler,
  )
  .openapi(
    getV1ProjectsRefAnalyticsEndpointsMetricsRoute,
    getV1ProjectsRefAnalyticsEndpointsMetricsRouteHandler,
  )
  .openapi(postV1ProjectsRefCliLoginRoleRoute, postV1ProjectsRefCliLoginRoleRouteHandler)
  .openapi(deleteV1ProjectsRefCliLoginRoleRoute, deleteV1ProjectsRefCliLoginRoleRouteHandler)
  .openapi(getV1ProjectsRefDatabaseMigrationsRoute, getV1ProjectsRefDatabaseMigrationsRouteHandler)
  .openapi(
    postV1ProjectsRefDatabaseMigrationsRoute,
    postV1ProjectsRefDatabaseMigrationsRouteHandler,
  )
  .openapi(putV1ProjectsRefDatabaseMigrationsRoute, putV1ProjectsRefDatabaseMigrationsRouteHandler)
  .openapi(
    deleteV1ProjectsRefDatabaseMigrationsRoute,
    deleteV1ProjectsRefDatabaseMigrationsRouteHandler,
  )
  .openapi(
    getV1ProjectsRefDatabaseMigrationsVersionRoute,
    getV1ProjectsRefDatabaseMigrationsVersionRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefDatabaseMigrationsVersionRoute,
    patchV1ProjectsRefDatabaseMigrationsVersionRouteHandler,
  )
  .openapi(postV1ProjectsRefDatabaseQueryRoute, postV1ProjectsRefDatabaseQueryRouteHandler)
  .openapi(
    postV1ProjectsRefDatabaseQueryReadOnlyRoute,
    postV1ProjectsRefDatabaseQueryReadOnlyRouteHandler,
  )
  .openapi(
    postV1ProjectsRefDatabaseWebhooksEnableRoute,
    postV1ProjectsRefDatabaseWebhooksEnableRouteHandler,
  )
  .openapi(getV1ProjectsRefDatabaseContextRoute, getV1ProjectsRefDatabaseContextRouteHandler)
  .openapi(patchV1ProjectsRefDatabasePasswordRoute, patchV1ProjectsRefDatabasePasswordRouteHandler)
  .openapi(getV1ProjectsRefDatabaseJitRoute, getV1ProjectsRefDatabaseJitRouteHandler)
  .openapi(postV1ProjectsRefDatabaseJitRoute, postV1ProjectsRefDatabaseJitRouteHandler)
  .openapi(putV1ProjectsRefDatabaseJitRoute, putV1ProjectsRefDatabaseJitRouteHandler)
  .openapi(getV1ProjectsRefDatabaseJitListRoute, getV1ProjectsRefDatabaseJitListRouteHandler)
  .openapi(postV1ProjectsRefDatabaseJitInviteRoute, postV1ProjectsRefDatabaseJitInviteRouteHandler)
  .openapi(
    postV1ProjectsRefDatabaseJitInviteAcceptRoute,
    postV1ProjectsRefDatabaseJitInviteAcceptRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute,
    deleteV1ProjectsRefDatabaseJitInviteInviteIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefDatabaseJitUserIdRoute,
    deleteV1ProjectsRefDatabaseJitUserIdRouteHandler,
  )
  .openapi(getV1ProjectsRefDatabaseOpenapiRoute, getV1ProjectsRefDatabaseOpenapiRouteHandler)
  .openapi(getV1ProjectsRefFunctionsRoute, getV1ProjectsRefFunctionsRouteHandler)
  .openapi(postV1ProjectsRefFunctionsRoute, postV1ProjectsRefFunctionsRouteHandler)
  .openapi(putV1ProjectsRefFunctionsRoute, putV1ProjectsRefFunctionsRouteHandler)
  .openapi(deleteV1ProjectsRefFunctionsRoute, deleteV1ProjectsRefFunctionsRouteHandler)
  .openapi(postV1ProjectsRefFunctionsDeployRoute, postV1ProjectsRefFunctionsDeployRouteHandler)
  .openapi(
    getV1ProjectsRefFunctionsFunctionSlugRoute,
    getV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefFunctionsFunctionSlugRoute,
    patchV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefFunctionsFunctionSlugRoute,
    deleteV1ProjectsRefFunctionsFunctionSlugRouteHandler,
  )
  .openapi(
    getV1ProjectsRefFunctionsFunctionSlugBodyRoute,
    getV1ProjectsRefFunctionsFunctionSlugBodyRouteHandler,
  )
  .openapi(getV1ProjectsRefStorageBucketsRoute, getV1ProjectsRefStorageBucketsRouteHandler)
  .openapi(getV1ProjectsRefConfigDiskRoute, getV1ProjectsRefConfigDiskRouteHandler)
  .openapi(postV1ProjectsRefConfigDiskRoute, postV1ProjectsRefConfigDiskRouteHandler)
  .openapi(getV1ProjectsRefConfigDiskUtilRoute, getV1ProjectsRefConfigDiskUtilRouteHandler)
  .openapi(
    getV1ProjectsRefConfigDiskAutoscaleRoute,
    getV1ProjectsRefConfigDiskAutoscaleRouteHandler,
  )
  .openapi(getV1ProjectsRefConfigStorageRoute, getV1ProjectsRefConfigStorageRouteHandler)
  .openapi(patchV1ProjectsRefConfigStorageRoute, patchV1ProjectsRefConfigStorageRouteHandler)
  .openapi(
    getV1ProjectsRefConfigDatabasePgbouncerRoute,
    getV1ProjectsRefConfigDatabasePgbouncerRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigDatabasePoolerRoute,
    getV1ProjectsRefConfigDatabasePoolerRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefConfigDatabasePoolerRoute,
    patchV1ProjectsRefConfigDatabasePoolerRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigDatabasePostgresRoute,
    getV1ProjectsRefConfigDatabasePostgresRouteHandler,
  )
  .openapi(
    putV1ProjectsRefConfigDatabasePostgresRoute,
    putV1ProjectsRefConfigDatabasePostgresRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefConfigDatabasePostgresRoute,
    patchV1ProjectsRefConfigDatabasePostgresRouteHandler,
  )
  .openapi(getV1ProjectsRefConfigRealtimeRoute, getV1ProjectsRefConfigRealtimeRouteHandler)
  .openapi(patchV1ProjectsRefConfigRealtimeRoute, patchV1ProjectsRefConfigRealtimeRouteHandler)
  .openapi(
    postV1ProjectsRefConfigRealtimeShutdownRoute,
    postV1ProjectsRefConfigRealtimeShutdownRouteHandler,
  )
  .openapi(
    postV1ProjectsRefConfigAuthSsoProvidersRoute,
    postV1ProjectsRefConfigAuthSsoProvidersRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthSsoProvidersRoute,
    getV1ProjectsRefConfigAuthSsoProvidersRouteHandler,
  )
  .openapi(
    getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
    getV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  )
  .openapi(
    putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
    putV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
    deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRouteHandler,
  )
  .openapi(getV1ProjectsRefDatabaseBackupsRoute, getV1ProjectsRefDatabaseBackupsRouteHandler)
  .openapi(
    postV1ProjectsRefDatabaseBackupsRestorePitrRoute,
    postV1ProjectsRefDatabaseBackupsRestorePitrRouteHandler,
  )
  .openapi(
    postV1ProjectsRefDatabaseBackupsRestorePointRoute,
    postV1ProjectsRefDatabaseBackupsRestorePointRouteHandler,
  )
  .openapi(
    getV1ProjectsRefDatabaseBackupsRestorePointRoute,
    getV1ProjectsRefDatabaseBackupsRestorePointRouteHandler,
  )
  .openapi(
    postV1ProjectsRefDatabaseBackupsRestoreRoute,
    postV1ProjectsRefDatabaseBackupsRestoreRouteHandler,
  )
  .openapi(
    getV1ProjectsRefDatabaseBackupsScheduleRoute,
    getV1ProjectsRefDatabaseBackupsScheduleRouteHandler,
  )
  .openapi(
    patchV1ProjectsRefDatabaseBackupsScheduleRoute,
    patchV1ProjectsRefDatabaseBackupsScheduleRouteHandler,
  )
  .openapi(
    postV1ProjectsRefDatabaseBackupsUndoRoute,
    postV1ProjectsRefDatabaseBackupsUndoRouteHandler,
  )
  .openapi(getV1OrganizationsSlugEntitlementsRoute, getV1OrganizationsSlugEntitlementsRouteHandler)
  .openapi(getV1OrganizationsSlugMembersRoute, getV1OrganizationsSlugMembersRouteHandler)
  .openapi(getV1OrganizationsSlugRoute, getV1OrganizationsSlugRouteHandler)
  .openapi(
    getV1OrganizationsSlugProjectClaimTokenRoute,
    getV1OrganizationsSlugProjectClaimTokenRouteHandler,
  )
  .openapi(
    postV1OrganizationsSlugProjectClaimTokenRoute,
    postV1OrganizationsSlugProjectClaimTokenRouteHandler,
  )
  .openapi(getV1OrganizationsSlugProjectsRoute, getV1OrganizationsSlugProjectsRouteHandler)

export default app

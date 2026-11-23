import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  deleteV1AccessGroupsIdOrNameRoute,
  deleteV1BulkRedirectsRoute,
  deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRoute,
  deleteV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  deleteV1ConnectConnectorsConnectorRoute,
  deleteV1ConnectNetworksNetworkIdRoute,
  deleteV1DrainsIdRoute,
  deleteV1DrivesNameOrIdRoute,
  deleteV1EnvRoute,
  deleteV1GlobalConfigEdgeConfigIdRoute,
  deleteV1GlobalConfigEdgeConfigIdSchemaRoute,
  deleteV1GlobalConfigEdgeConfigIdTokensRoute,
  deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
  deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  deleteV1IntegrationsConfigurationIdRoute,
  deleteV1IntegrationsLogDrainsIdRoute,
  deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute,
  deleteV1KmsIssuersIssuerIdRoute,
  deleteV1LogDrainsIdRoute,
  deleteV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRoute,
  deleteV1ProjectsIdOrNameAvatarRoute,
  deleteV1ProjectsIdOrNameEnvRoute,
  deleteV1ProjectsIdOrNameMembersUidRoute,
  deleteV1ProjectsIdOrNameRollingReleaseConfigRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRoute,
  deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  deleteV1ProjectsProjectIdRoutesRoute,
  deleteV1SecurityFirewallBypassRoute,
  deleteV1SecurityFirewallBypassRulesRoute,
  deleteV1SecurityFirewallConfigConfigVersionRoute,
  deleteV1TeamsTeamIdInvitesInviteIdRoute,
  deleteV1TeamsTeamIdMembersUidRoute,
  deleteV1TeamsTeamIdMicrofrontendsGroupIdRoute,
  deleteV1TeamsTeamIdRoute,
  deleteV1UserRoute,
  deleteV1VcrRepositoryIdOrNameImagesImageIdRoute,
  deleteV1VcrRepositoryIdOrNamePermissionsAllRoute,
  deleteV1VcrRepositoryIdOrNamePermissionsRoute,
  deleteV1VcrRepositoryIdOrNameRoute,
  deleteV1WebhooksIdRoute,
  getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  getV1AccessGroupsIdOrNameMembersRoute,
  getV1AccessGroupsIdOrNameProjectsRoute,
  getV1AccessGroupsIdOrNameRoute,
  getV1AccessGroupsRoute,
  getV1AiGatewayRoutersRoute,
  getV1BillingChargesRoute,
  getV1BulkRedirectsRoute,
  getV1BulkRedirectsVersionsRoute,
  getV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  getV1ConnectConnectorsConnectorRoute,
  getV1ConnectNetworksNetworkIdRoute,
  getV1ConnectNetworksRoute,
  getV1DeploymentsDeploymentIdChecksCheckIdRoute,
  getV1DeploymentsDeploymentIdChecksRoute,
  getV1DeploymentsDeploymentIdFeatureFlagsRoute,
  getV1DomainsDomainProjectDomainsRoute,
  getV1DrainsIdRoute,
  getV1DrainsRoute,
  getV1DrivesNameOrIdRoute,
  getV1DrivesRoute,
  getV1EnvIdRoute,
  getV1EnvRoute,
  getV1EventsTypesRoute,
  getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRoute,
  getV1GlobalConfigEdgeConfigIdBackupsRoute,
  getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRoute,
  getV1GlobalConfigEdgeConfigIdItemsRoute,
  getV1GlobalConfigEdgeConfigIdRoute,
  getV1GlobalConfigEdgeConfigIdSchemaRoute,
  getV1GlobalConfigEdgeConfigIdTokensRoute,
  getV1GlobalConfigEdgeConfigIdTokenTokenRoute,
  getV1GlobalConfigRoute,
  getV1InstallationsIntegrationConfigurationIdAccountRoute,
  getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRoute,
  getV1InstallationsIntegrationConfigurationIdMemberMemberIdRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesRoute,
  getV1IntegrationsConfigurationIdProductsRoute,
  getV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationsRoute,
  getV1IntegrationsGitNamespacesRoute,
  getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRoute,
  getV1IntegrationsSearchRepoRoute,
  getV1KmsIssuersIssuerIdRoute,
  getV1KmsIssuersRoute,
  getV1LogDrainsIdRoute,
  getV1LogDrainsRoute,
  getV1MicrofrontendsDeploymentIdConfigRoute,
  getV1MicrofrontendsGroupsGroupIdProjectsRoute,
  getV1MicrofrontendsGroupsRoute,
  getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRoute,
  getV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  getV1NetworkingPrivatelinkEndpointsRoute,
  getV1ObservabilityManageConfigurationProjectsRoute,
  getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  getV1OrganizationsOrganizationIdDsyncGroupsRoute,
  getV1OrganizationsOrganizationIdRoute,
  getV1OrganizationsOrganizationIdTeamsRoute,
  getV1OrganizationsRoute,
  getV1ProjectsIdOrNameDaemonsRoute,
  getV1ProjectsIdOrNameEnvIdRoute,
  getV1ProjectsIdOrNameMembersRoute,
  getV1ProjectsIdOrNameRollingReleaseBillingRoute,
  getV1ProjectsIdOrNameRollingReleaseConfigRoute,
  getV1ProjectsIdOrNameRollingReleaseRoute,
  getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute,
  getV1ProjectsProjectIdPromoteAliasesRoute,
  getV1ProjectsProjectIdRoutesRoute,
  getV1ProjectsProjectIdRoutesVersionsRoute,
  getV1ProjectsTracesRoute,
  getV1QueryWebAnalyticsEventsAggregateRoute,
  getV1QueryWebAnalyticsEventsCountRoute,
  getV1QueryWebAnalyticsVisitsAggregateRoute,
  getV1QueryWebAnalyticsVisitsCountRoute,
  getV1RegistrarDomainsDomainAuthCodeRoute,
  getV1RegistrarDomainsDomainAvailabilityRoute,
  getV1RegistrarDomainsDomainContactInfoSchemaRoute,
  getV1RegistrarDomainsDomainContactVerificationRoute,
  getV1RegistrarDomainsDomainPriceRoute,
  getV1RegistrarDomainsDomainTransferRoute,
  getV1RegistrarOrdersOrderIdRoute,
  getV1RegistrarTldsSupportedRoute,
  getV1RegistrarTldsTldPriceRoute,
  getV1RegistrarTldsTldRoute,
  getV1SecurityFirewallAttackStatusRoute,
  getV1SecurityFirewallBypassRoute,
  getV1SecurityFirewallBypassRulesRoute,
  getV1SecurityFirewallConfigConfigVersionRoute,
  getV1SecurityFirewallConfigRoute,
  getV1SecurityFirewallEventsRoute,
  getV1SecurityFirewallEventsSummaryRoute,
  getV1TeamsTeamIdFeatureFlagsFlagsRoute,
  getV1TeamsTeamIdFeatureFlagsSettingsRoute,
  getV1TeamsTeamIdRequestUserIdRoute,
  getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRoute,
  getV1VcrRepositoryIdOrNameImagesRoute,
  getV1VcrRepositoryIdOrNamePermissionsRoute,
  getV1VcrRepositoryIdOrNameRoute,
  getV1VcrRepositoryIdOrNameTagsRoute,
  getV1VcrRepositoryIdOrNameTagsTagRoute,
  getV1VcrRepositoryRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRoute,
  getV1VercelCiInvocationsInvocationIdAttemptsRoute,
  getV1VercelCiInvocationsInvocationIdTreeRoute,
  getV1VercelCiLogSearchRoute,
  getV1VercelCiRepositorySettingsRoute,
  getV1VercelCiTaskAnalysesAnalysisIdRoute,
  getV1VercelCiTaskAnalysesAnalysisIdTasksRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  patchV1BulkRedirectsRoute,
  patchV1ConnectConnectorsConnectorTriggerDestinationsRoute,
  patchV1ConnectNetworksNetworkIdRoute,
  patchV1DeploymentsDeploymentIdChecksCheckIdRoute,
  patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRoute,
  patchV1DomainsRecordsRecordIdRoute,
  patchV1DrainsIdRoute,
  patchV1EnvIdUnlinkProjectIdRoute,
  patchV1EnvRoute,
  patchV1GlobalConfigEdgeConfigIdItemsRoute,
  patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
  patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  patchV1InstallationsIntegrationConfigurationIdRoute,
  patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute,
  patchV1KmsIssuersIssuerIdRoute,
  patchV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  patchV1OrganizationsOrganizationIdRoute,
  patchV1ProjectsIdOrNameProtectionBypassRoute,
  patchV1ProjectsIdOrNameRollingReleaseConfigRoute,
  patchV1ProjectsIdOrNameSharedConnectLinksRoute,
  patchV1ProjectsProjectIdMicrofrontendsRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute,
  patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute,
  patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRoute,
  patchV1ProjectsProjectIdRoutesRouteIdRoute,
  patchV1RegistrarDomainsDomainAutoRenewRoute,
  patchV1RegistrarDomainsDomainNameserversRoute,
  patchV1SecurityFirewallConfigRoute,
  patchV1TeamsTeamIdMembersUidRoute,
  patchV1TeamsTeamIdMicrofrontendsGroupIdRoute,
  patchV1VercelCiRepositorySettingsRoute,
  postV1AccessGroupsAccessGroupIdOrNameProjectsRoute,
  postV1AccessGroupsIdOrNameRoute,
  postV1AccessGroupsRoute,
  postV1BillingBuyRoute,
  postV1BulkRedirectsRestoreRoute,
  postV1BulkRedirectsVersionsRoute,
  postV1ConnectAuthorizeConnectorRoute,
  postV1ConnectConnectorsConnectorManagedEjectRoute,
  postV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  postV1ConnectConnectorsRoute,
  postV1ConnectNetworksRoute,
  postV1ConnectTokenConnectorRoute,
  postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute,
  postV1DeploymentsDeploymentIdChecksRoute,
  postV1DrainsRoute,
  postV1DrainsTestRoute,
  postV1DrivesNameForkRoute,
  postV1DrivesNameRoute,
  postV1EdgeCacheDangerouslyDeleteBySrcImagesRoute,
  postV1EdgeCacheDangerouslyDeleteByTagsRoute,
  postV1EdgeCacheInvalidateBySrcImagesRoute,
  postV1EdgeCacheInvalidateByTagsRoute,
  postV1EnvRoute,
  postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRoute,
  postV1GlobalConfigEdgeConfigIdSchemaRoute,
  postV1GlobalConfigEdgeConfigIdTokenRoute,
  postV1GlobalConfigRoute,
  postV1InstallationsIntegrationConfigurationIdBillingBalanceRoute,
  postV1InstallationsIntegrationConfigurationIdBillingFinalizeRoute,
  postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRoute,
  postV1InstallationsIntegrationConfigurationIdBillingInvoicesRoute,
  postV1InstallationsIntegrationConfigurationIdBillingRoute,
  postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRoute,
  postV1InstallationsIntegrationConfigurationIdCredentialsRotateRoute,
  postV1InstallationsIntegrationConfigurationIdEventsRoute,
  postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRoute,
  postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRoute,
  postV1IntegrationsSsoTokenRoute,
  postV1KmsIssuersIssuerIdKeysKeyIdActivateRoute,
  postV1KmsIssuersIssuerIdKeysKeyIdRevokeRoute,
  postV1KmsIssuersIssuerIdKeysRoute,
  postV1KmsIssuersIssuerIdPoliciesRoute,
  postV1KmsIssuersIssuerIdSignMessageRoute,
  postV1KmsIssuersIssuerIdSignTokenRoute,
  postV1KmsIssuersRoute,
  postV1LogDrainsRoute,
  postV1MicrofrontendsGroupRoute,
  postV1NetworkingPrivatelinkEndpointsRoute,
  postV1OrganizationsOrganizationIdTeamsRoute,
  postV1OrganizationsRoute,
  postV1ProjectsIdOrNameAvatarRoute,
  postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRoute,
  postV1ProjectsIdOrNameDomainsDomainMoveRoute,
  postV1ProjectsIdOrNameMembersRoute,
  postV1ProjectsIdOrNameRollingReleaseApproveStageRoute,
  postV1ProjectsIdOrNameRollingReleaseCompleteRoute,
  postV1ProjectsIdOrNameRollingReleaseStartRoute,
  postV1ProjectsIdOrNameTokenRoute,
  postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRoute,
  postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRoute,
  postV1ProjectsProjectIdPauseRoute,
  postV1ProjectsProjectIdRollbackDeploymentIdRoute,
  postV1ProjectsProjectIdRoutesGenerateRoute,
  postV1ProjectsProjectIdRoutesRoute,
  postV1ProjectsProjectIdRoutesVersionsRoute,
  postV1ProjectsProjectIdUnpauseRoute,
  postV1ProjectsTracesSessionRoute,
  postV1RegistrarDomainsAvailabilityRoute,
  postV1RegistrarDomainsBuyRoute,
  postV1RegistrarDomainsDomainBuyRoute,
  postV1RegistrarDomainsDomainRenewRoute,
  postV1RegistrarDomainsDomainTransferRoute,
  postV1RegistrarDomainsPriceRoute,
  postV1RegistrarDomainsSearchRoute,
  postV1SecurityAttackModeRoute,
  postV1SecurityFirewallBypassRoute,
  postV1SecurityFirewallBypassRulesRoute,
  postV1SecurityFirewallConfigConfigVersionActivateRoute,
  postV1SecurityFirewallConfigGenerateRuleRoute,
  postV1StorageStoresIntegrationDirectRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdDsyncRolesRoute,
  postV1TeamsTeamIdMembersTeamsJoinRoute,
  postV1TeamsTeamIdRequestRoute,
  postV1VcrRepositoryIdOrNamePermissionsRoute,
  postV1VcrRepositoryRoute,
  postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRoute,
  postV1VercelCiTaskAnalysesAnalysisIdPullRequestRoute,
  postV1VercelCiTaskAnalysesRoute,
  postV1WebhooksRoute,
  putV1BulkRedirectsRoute,
  putV1GlobalConfigEdgeConfigIdRoute,
  putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRoute,
  putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRoute,
  putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute,
  putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRoute,
  putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute,
  putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute,
  putV1ProjectsProjectIdRoutesRoute,
  putV1SecurityFirewallBypassRulesRoute,
  putV1SecurityFirewallConfigRoute,
} from '../routes'

export const getV1AccessGroupsIdOrNameRouteHandler: RouteHandler<
  typeof getV1AccessGroupsIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccessGroupsIdOrNameRouteHandler: RouteHandler<
  typeof postV1AccessGroupsIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccessGroupsIdOrNameRouteHandler: RouteHandler<
  typeof deleteV1AccessGroupsIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccessGroupsIdOrNameMembersRouteHandler: RouteHandler<
  typeof getV1AccessGroupsIdOrNameMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccessGroupsRouteHandler: RouteHandler<typeof getV1AccessGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AccessGroupsRouteHandler: RouteHandler<typeof postV1AccessGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AccessGroupsIdOrNameProjectsRouteHandler: RouteHandler<
  typeof getV1AccessGroupsIdOrNameProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccessGroupsAccessGroupIdOrNameProjectsRouteHandler: RouteHandler<
  typeof postV1AccessGroupsAccessGroupIdOrNameProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AiGatewayRoutersRouteHandler: RouteHandler<
  typeof getV1AiGatewayRoutersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingChargesRouteHandler: RouteHandler<
  typeof getV1BillingChargesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BillingBuyRouteHandler: RouteHandler<typeof postV1BillingBuyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1BulkRedirectsRouteHandler: RouteHandler<typeof putV1BulkRedirectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1BulkRedirectsRouteHandler: RouteHandler<typeof getV1BulkRedirectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1BulkRedirectsRouteHandler: RouteHandler<
  typeof deleteV1BulkRedirectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1BulkRedirectsRouteHandler: RouteHandler<
  typeof patchV1BulkRedirectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BulkRedirectsRestoreRouteHandler: RouteHandler<
  typeof postV1BulkRedirectsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkRedirectsVersionsRouteHandler: RouteHandler<
  typeof getV1BulkRedirectsVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BulkRedirectsVersionsRouteHandler: RouteHandler<
  typeof postV1BulkRedirectsVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeploymentsDeploymentIdChecksRouteHandler: RouteHandler<
  typeof postV1DeploymentsDeploymentIdChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DeploymentsDeploymentIdChecksRouteHandler: RouteHandler<
  typeof getV1DeploymentsDeploymentIdChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DeploymentsDeploymentIdChecksCheckIdRouteHandler: RouteHandler<
  typeof getV1DeploymentsDeploymentIdChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DeploymentsDeploymentIdChecksCheckIdRouteHandler: RouteHandler<
  typeof patchV1DeploymentsDeploymentIdChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DeploymentsDeploymentIdChecksCheckIdRerequestRouteHandler: RouteHandler<
  typeof postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectNetworksRouteHandler: RouteHandler<
  typeof getV1ConnectNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectNetworksRouteHandler: RouteHandler<
  typeof postV1ConnectNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectNetworksNetworkIdRouteHandler: RouteHandler<
  typeof deleteV1ConnectNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConnectNetworksNetworkIdRouteHandler: RouteHandler<
  typeof patchV1ConnectNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectNetworksNetworkIdRouteHandler: RouteHandler<
  typeof getV1ConnectNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NetworkingPrivatelinkEndpointsRouteHandler: RouteHandler<
  typeof postV1NetworkingPrivatelinkEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NetworkingPrivatelinkEndpointsRouteHandler: RouteHandler<
  typeof getV1NetworkingPrivatelinkEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NetworkingPrivatelinkEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof getV1NetworkingPrivatelinkEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NetworkingPrivatelinkEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof deleteV1NetworkingPrivatelinkEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NetworkingPrivatelinkEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof patchV1NetworkingPrivatelinkEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectConnectorsConnectorRouteHandler: RouteHandler<
  typeof getV1ConnectConnectorsConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectConnectorsConnectorRouteHandler: RouteHandler<
  typeof deleteV1ConnectConnectorsConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectConnectorsRouteHandler: RouteHandler<
  typeof postV1ConnectConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ConnectConnectorsConnectorTriggerDestinationsRouteHandler: RouteHandler<
  typeof patchV1ConnectConnectorsConnectorTriggerDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectConnectorsConnectorManagedEjectRouteHandler: RouteHandler<
  typeof postV1ConnectConnectorsConnectorManagedEjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConnectConnectorsConnectorProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1ConnectConnectorsConnectorProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectConnectorsConnectorProjectsProjectIdRouteHandler: RouteHandler<
  typeof postV1ConnectConnectorsConnectorProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectConnectorsConnectorProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV1ConnectConnectorsConnectorProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRouteHandler: RouteHandler<
  typeof deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectTokenConnectorRouteHandler: RouteHandler<
  typeof postV1ConnectTokenConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConnectAuthorizeConnectorRouteHandler: RouteHandler<
  typeof postV1ConnectAuthorizeConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameDaemonsRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameDaemonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRouteHandler: RouteHandler<
  typeof putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRouteHandler: RouteHandler<
  typeof patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DomainsRecordsRecordIdRouteHandler: RouteHandler<
  typeof patchV1DomainsRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsSearchRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarTldsSupportedRouteHandler: RouteHandler<
  typeof getV1RegistrarTldsSupportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarTldsTldRouteHandler: RouteHandler<
  typeof getV1RegistrarTldsTldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarTldsTldPriceRouteHandler: RouteHandler<
  typeof getV1RegistrarTldsTldPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainAvailabilityRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainPriceRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsPriceRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsAvailabilityRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainContactInfoSchemaRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainContactInfoSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainAuthCodeRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainAuthCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsDomainBuyRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsDomainBuyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsBuyRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsBuyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsDomainTransferRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsDomainTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainTransferRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RegistrarDomainsDomainRenewRouteHandler: RouteHandler<
  typeof postV1RegistrarDomainsDomainRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1RegistrarDomainsDomainAutoRenewRouteHandler: RouteHandler<
  typeof patchV1RegistrarDomainsDomainAutoRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1RegistrarDomainsDomainNameserversRouteHandler: RouteHandler<
  typeof patchV1RegistrarDomainsDomainNameserversRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarDomainsDomainContactVerificationRouteHandler: RouteHandler<
  typeof getV1RegistrarDomainsDomainContactVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RegistrarOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1RegistrarOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DomainsDomainProjectDomainsRouteHandler: RouteHandler<
  typeof getV1DomainsDomainProjectDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LogDrainsIdRouteHandler: RouteHandler<typeof getV1LogDrainsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1LogDrainsIdRouteHandler: RouteHandler<
  typeof deleteV1LogDrainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LogDrainsRouteHandler: RouteHandler<typeof getV1LogDrainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LogDrainsRouteHandler: RouteHandler<typeof postV1LogDrainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DrainsRouteHandler: RouteHandler<typeof postV1DrainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DrainsRouteHandler: RouteHandler<typeof getV1DrainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DrainsIdRouteHandler: RouteHandler<typeof deleteV1DrainsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DrainsIdRouteHandler: RouteHandler<typeof getV1DrainsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DrainsIdRouteHandler: RouteHandler<typeof patchV1DrainsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DrainsTestRouteHandler: RouteHandler<typeof postV1DrainsTestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DrivesRouteHandler: RouteHandler<typeof getV1DrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DrivesNameOrIdRouteHandler: RouteHandler<
  typeof getV1DrivesNameOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DrivesNameOrIdRouteHandler: RouteHandler<
  typeof deleteV1DrivesNameOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DrivesNameRouteHandler: RouteHandler<typeof postV1DrivesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DrivesNameForkRouteHandler: RouteHandler<
  typeof postV1DrivesNameForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EdgeCacheInvalidateByTagsRouteHandler: RouteHandler<
  typeof postV1EdgeCacheInvalidateByTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EdgeCacheDangerouslyDeleteByTagsRouteHandler: RouteHandler<
  typeof postV1EdgeCacheDangerouslyDeleteByTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EdgeCacheInvalidateBySrcImagesRouteHandler: RouteHandler<
  typeof postV1EdgeCacheInvalidateBySrcImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EdgeCacheDangerouslyDeleteBySrcImagesRouteHandler: RouteHandler<
  typeof postV1EdgeCacheDangerouslyDeleteBySrcImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigRouteHandler: RouteHandler<typeof getV1GlobalConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GlobalConfigRouteHandler: RouteHandler<typeof postV1GlobalConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GlobalConfigEdgeConfigIdRouteHandler: RouteHandler<
  typeof putV1GlobalConfigEdgeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GlobalConfigEdgeConfigIdRouteHandler: RouteHandler<
  typeof deleteV1GlobalConfigEdgeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdItemsRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1GlobalConfigEdgeConfigIdItemsRouteHandler: RouteHandler<
  typeof patchV1GlobalConfigEdgeConfigIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdSchemaRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GlobalConfigEdgeConfigIdSchemaRouteHandler: RouteHandler<
  typeof postV1GlobalConfigEdgeConfigIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GlobalConfigEdgeConfigIdSchemaRouteHandler: RouteHandler<
  typeof deleteV1GlobalConfigEdgeConfigIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdTokensRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GlobalConfigEdgeConfigIdTokensRouteHandler: RouteHandler<
  typeof deleteV1GlobalConfigEdgeConfigIdTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdTokenTokenRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdTokenTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GlobalConfigEdgeConfigIdTokenRouteHandler: RouteHandler<
  typeof postV1GlobalConfigEdgeConfigIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRouteHandler: RouteHandler<
  typeof postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GlobalConfigEdgeConfigIdBackupsRouteHandler: RouteHandler<
  typeof getV1GlobalConfigEdgeConfigIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EnvRouteHandler: RouteHandler<typeof postV1EnvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EnvRouteHandler: RouteHandler<typeof getV1EnvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1EnvRouteHandler: RouteHandler<typeof patchV1EnvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EnvRouteHandler: RouteHandler<typeof deleteV1EnvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EnvIdRouteHandler: RouteHandler<typeof getV1EnvIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1EnvIdUnlinkProjectIdRouteHandler: RouteHandler<
  typeof patchV1EnvIdUnlinkProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsTypesRouteHandler: RouteHandler<typeof getV1EventsTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TeamsTeamIdFeatureFlagsSettingsRouteHandler: RouteHandler<
  typeof getV1TeamsTeamIdFeatureFlagsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TeamsTeamIdFeatureFlagsFlagsRouteHandler: RouteHandler<
  typeof getV1TeamsTeamIdFeatureFlagsFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DeploymentsDeploymentIdFeatureFlagsRouteHandler: RouteHandler<
  typeof getV1DeploymentsDeploymentIdFeatureFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsGitNamespacesRouteHandler: RouteHandler<
  typeof getV1IntegrationsGitNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsSearchRepoRouteHandler: RouteHandler<
  typeof getV1IntegrationsSearchRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRouteHandler: RouteHandler<
  typeof getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRouteHandler: RouteHandler<
  typeof postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1InstallationsIntegrationConfigurationIdRouteHandler: RouteHandler<
  typeof patchV1InstallationsIntegrationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdAccountRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdMemberMemberIdRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdMemberMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdCredentialsRotateRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdCredentialsRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdEventsRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdResourcesRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdBillingRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdBillingInvoicesRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdBillingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdBillingFinalizeRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdBillingFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdBillingBalanceRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdBillingBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRouteHandler: RouteHandler<
  typeof putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRouteHandler: RouteHandler<
  typeof putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsConfigurationsRouteHandler: RouteHandler<
  typeof getV1IntegrationsConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsConfigurationIdRouteHandler: RouteHandler<
  typeof getV1IntegrationsConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1IntegrationsConfigurationIdRouteHandler: RouteHandler<
  typeof deleteV1IntegrationsConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IntegrationsConfigurationIdProductsRouteHandler: RouteHandler<
  typeof getV1IntegrationsConfigurationIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationsSsoTokenRouteHandler: RouteHandler<
  typeof postV1IntegrationsSsoTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1IntegrationsLogDrainsIdRouteHandler: RouteHandler<
  typeof deleteV1IntegrationsLogDrainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdSignMessageRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdSignMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdSignTokenRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdSignTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1KmsIssuersRouteHandler: RouteHandler<typeof getV1KmsIssuersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersRouteHandler: RouteHandler<typeof postV1KmsIssuersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdKeysRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdKeysKeyIdActivateRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdKeysKeyIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdKeysKeyIdRevokeRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdKeysKeyIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1KmsIssuersIssuerIdRouteHandler: RouteHandler<
  typeof getV1KmsIssuersIssuerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1KmsIssuersIssuerIdRouteHandler: RouteHandler<
  typeof patchV1KmsIssuersIssuerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1KmsIssuersIssuerIdRouteHandler: RouteHandler<
  typeof deleteV1KmsIssuersIssuerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1KmsIssuersIssuerIdPoliciesRouteHandler: RouteHandler<
  typeof postV1KmsIssuersIssuerIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRouteHandler: RouteHandler<
  typeof patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRouteHandler: RouteHandler<
  typeof deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRouteHandler: RouteHandler<
  typeof postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRouteHandler: RouteHandler<
  typeof patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRouteHandler: RouteHandler<
  typeof deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRouteHandler: RouteHandler<
  typeof headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRouteHandler: RouteHandler<
  typeof getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRouteHandler: RouteHandler<
  typeof putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MicrofrontendsGroupsRouteHandler: RouteHandler<
  typeof getV1MicrofrontendsGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MicrofrontendsGroupsGroupIdProjectsRouteHandler: RouteHandler<
  typeof getV1MicrofrontendsGroupsGroupIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MicrofrontendsDeploymentIdConfigRouteHandler: RouteHandler<
  typeof getV1MicrofrontendsDeploymentIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRouteHandler: RouteHandler<
  typeof getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MicrofrontendsGroupRouteHandler: RouteHandler<
  typeof postV1MicrofrontendsGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObservabilityManageConfigurationProjectsRouteHandler: RouteHandler<
  typeof getV1ObservabilityManageConfigurationProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRouteHandler: RouteHandler<
  typeof putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsRouteHandler: RouteHandler<
  typeof postV1OrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsRouteHandler: RouteHandler<typeof getV1OrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof patchV1OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdTeamsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsOrganizationIdTeamsRouteHandler: RouteHandler<
  typeof postV1OrganizationsOrganizationIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdDsyncGroupsRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdDsyncGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRouteHandler: RouteHandler<
  typeof getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameMembersRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameMembersRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsIdOrNameMembersUidRouteHandler: RouteHandler<
  typeof deleteV1ProjectsIdOrNameMembersUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdRoutesRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsProjectIdRoutesRouteHandler: RouteHandler<
  typeof putV1ProjectsProjectIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdRoutesRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsProjectIdRoutesRouteHandler: RouteHandler<
  typeof deleteV1ProjectsProjectIdRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdRoutesRouteIdRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdRoutesRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdRoutesGenerateRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdRoutesGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdRoutesVersionsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdRoutesVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdRoutesVersionsRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdRoutesVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsTracesRouteHandler: RouteHandler<
  typeof getV1ProjectsTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameTokenRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsTracesSessionRouteHandler: RouteHandler<
  typeof postV1ProjectsTracesSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameAvatarRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsIdOrNameAvatarRouteHandler: RouteHandler<
  typeof deleteV1ProjectsIdOrNameAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsIdOrNameSharedConnectLinksRouteHandler: RouteHandler<
  typeof patchV1ProjectsIdOrNameSharedConnectLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameDomainsDomainMoveRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameDomainsDomainMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameEnvIdRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameEnvIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsIdOrNameEnvRouteHandler: RouteHandler<
  typeof deleteV1ProjectsIdOrNameEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameRollingReleaseBillingRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameRollingReleaseBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameRollingReleaseConfigRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameRollingReleaseConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsIdOrNameRollingReleaseConfigRouteHandler: RouteHandler<
  typeof deleteV1ProjectsIdOrNameRollingReleaseConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsIdOrNameRollingReleaseConfigRouteHandler: RouteHandler<
  typeof patchV1ProjectsIdOrNameRollingReleaseConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdOrNameRollingReleaseRouteHandler: RouteHandler<
  typeof getV1ProjectsIdOrNameRollingReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameRollingReleaseApproveStageRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameRollingReleaseApproveStageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameRollingReleaseStartRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameRollingReleaseStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsIdOrNameRollingReleaseCompleteRouteHandler: RouteHandler<
  typeof postV1ProjectsIdOrNameRollingReleaseCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsIdOrNameProtectionBypassRouteHandler: RouteHandler<
  typeof patchV1ProjectsIdOrNameProtectionBypassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdRollbackDeploymentIdRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdRollbackDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ProjectsProjectIdMicrofrontendsRouteHandler: RouteHandler<
  typeof patchV1ProjectsProjectIdMicrofrontendsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdPromoteAliasesRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdPromoteAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdPauseRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdUnpauseRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecurityAttackModeRouteHandler: RouteHandler<
  typeof postV1SecurityAttackModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallConfigRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SecurityFirewallConfigRouteHandler: RouteHandler<
  typeof putV1SecurityFirewallConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1SecurityFirewallConfigRouteHandler: RouteHandler<
  typeof patchV1SecurityFirewallConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallConfigConfigVersionRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallConfigConfigVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SecurityFirewallConfigConfigVersionRouteHandler: RouteHandler<
  typeof deleteV1SecurityFirewallConfigConfigVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecurityFirewallConfigConfigVersionActivateRouteHandler: RouteHandler<
  typeof postV1SecurityFirewallConfigConfigVersionActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallAttackStatusRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallAttackStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallBypassRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallBypassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecurityFirewallBypassRouteHandler: RouteHandler<
  typeof postV1SecurityFirewallBypassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SecurityFirewallBypassRouteHandler: RouteHandler<
  typeof deleteV1SecurityFirewallBypassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallBypassRulesRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallBypassRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecurityFirewallBypassRulesRouteHandler: RouteHandler<
  typeof postV1SecurityFirewallBypassRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SecurityFirewallBypassRulesRouteHandler: RouteHandler<
  typeof putV1SecurityFirewallBypassRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SecurityFirewallBypassRulesRouteHandler: RouteHandler<
  typeof deleteV1SecurityFirewallBypassRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallEventsRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SecurityFirewallEventsSummaryRouteHandler: RouteHandler<
  typeof getV1SecurityFirewallEventsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SecurityFirewallConfigGenerateRuleRouteHandler: RouteHandler<
  typeof postV1SecurityFirewallConfigGenerateRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1StorageStoresIntegrationDirectRouteHandler: RouteHandler<
  typeof postV1StorageStoresIntegrationDirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsTeamIdRequestRouteHandler: RouteHandler<
  typeof postV1TeamsTeamIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TeamsTeamIdRequestUserIdRouteHandler: RouteHandler<
  typeof getV1TeamsTeamIdRequestUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsTeamIdMembersTeamsJoinRouteHandler: RouteHandler<
  typeof postV1TeamsTeamIdMembersTeamsJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TeamsTeamIdMembersUidRouteHandler: RouteHandler<
  typeof patchV1TeamsTeamIdMembersUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsTeamIdMembersUidRouteHandler: RouteHandler<
  typeof deleteV1TeamsTeamIdMembersUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsRouteHandler: RouteHandler<typeof postV1TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsTeamIdDsyncRolesRouteHandler: RouteHandler<
  typeof postV1TeamsTeamIdDsyncRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsTeamIdRouteHandler: RouteHandler<
  typeof deleteV1TeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsTeamIdInvitesInviteIdRouteHandler: RouteHandler<
  typeof deleteV1TeamsTeamIdInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TeamsTeamIdMicrofrontendsGroupIdRouteHandler: RouteHandler<
  typeof patchV1TeamsTeamIdMicrofrontendsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsTeamIdMicrofrontendsGroupIdRouteHandler: RouteHandler<
  typeof deleteV1TeamsTeamIdMicrofrontendsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UserRouteHandler: RouteHandler<typeof deleteV1UserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VcrRepositoryRouteHandler: RouteHandler<
  typeof postV1VcrRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryRouteHandler: RouteHandler<typeof getV1VcrRepositoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNameRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VcrRepositoryIdOrNameRouteHandler: RouteHandler<
  typeof deleteV1VcrRepositoryIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNameImagesRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNameImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VcrRepositoryIdOrNamePermissionsRouteHandler: RouteHandler<
  typeof postV1VcrRepositoryIdOrNamePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VcrRepositoryIdOrNamePermissionsRouteHandler: RouteHandler<
  typeof deleteV1VcrRepositoryIdOrNamePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNamePermissionsRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNamePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VcrRepositoryIdOrNamePermissionsAllRouteHandler: RouteHandler<
  typeof deleteV1VcrRepositoryIdOrNamePermissionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNameTagsRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNameTagsTagRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNameTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRouteHandler: RouteHandler<
  typeof getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1VcrRepositoryIdOrNameImagesImageIdRouteHandler: RouteHandler<
  typeof deleteV1VcrRepositoryIdOrNameImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiRepositorySettingsRouteHandler: RouteHandler<
  typeof getV1VercelCiRepositorySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1VercelCiRepositorySettingsRouteHandler: RouteHandler<
  typeof patchV1VercelCiRepositorySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VercelCiTaskAnalysesRouteHandler: RouteHandler<
  typeof postV1VercelCiTaskAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiTaskAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof getV1VercelCiTaskAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VercelCiTaskAnalysesAnalysisIdPullRequestRouteHandler: RouteHandler<
  typeof postV1VercelCiTaskAnalysesAnalysisIdPullRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiTaskAnalysesAnalysisIdTasksRouteHandler: RouteHandler<
  typeof getV1VercelCiTaskAnalysesAnalysisIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdTreeRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRouteHandler: RouteHandler<
  typeof postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiLogSearchRouteHandler: RouteHandler<
  typeof getV1VercelCiLogSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRouteHandler: RouteHandler<
  typeof getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QueryWebAnalyticsVisitsAggregateRouteHandler: RouteHandler<
  typeof getV1QueryWebAnalyticsVisitsAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QueryWebAnalyticsEventsAggregateRouteHandler: RouteHandler<
  typeof getV1QueryWebAnalyticsEventsAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QueryWebAnalyticsVisitsCountRouteHandler: RouteHandler<
  typeof getV1QueryWebAnalyticsVisitsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QueryWebAnalyticsEventsCountRouteHandler: RouteHandler<
  typeof getV1QueryWebAnalyticsEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebhooksRouteHandler: RouteHandler<typeof postV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksRouteHandler: RouteHandler<typeof getV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksIdRouteHandler: RouteHandler<typeof getV1WebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WebhooksIdRouteHandler: RouteHandler<typeof deleteV1WebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

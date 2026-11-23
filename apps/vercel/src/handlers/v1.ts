import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsIdOrNameProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsAccessGroupIdOrNameProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AiGatewayRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BulkRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkRedirectsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkRedirectsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkRedirectsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NetworkingPrivatelinkEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkingPrivatelinkEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectConnectorsConnectorTriggerDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsConnectorManagedEjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectTokenConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectAuthorizeConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameDaemonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchV1DomainsRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsTldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarTldsTldPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainContactInfoSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainAuthCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrarDomainsDomainRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RegistrarDomainsDomainAutoRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RegistrarDomainsDomainNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarDomainsDomainContactVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistrarOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainProjectDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrainsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrivesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrivesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheInvalidateByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheDangerouslyDeleteByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheInvalidateBySrcImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheDangerouslyDeleteBySrcImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1GlobalConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvIdUnlinkProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdFeatureFlagsFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdOrNameFeatureFlagsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsGitNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsSearchRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchV1InstallationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdMemberMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdCredentialsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsSsoTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsLogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdSignTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KmsIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysKeyIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1MicrofrontendsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsGroupsGroupIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsDeploymentIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MicrofrontendsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObservabilityManageConfigurationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdTeamsTargetTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdDsyncGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdDsyncGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRoutesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsTracesSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameSharedConnectLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameDomainsDomainMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameRollingReleaseBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameRollingReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseApproveStageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameProtectionBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRollbackDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdMicrofrontendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdPromoteAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityAttackModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SecurityFirewallConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallConfigConfigVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallConfigConfigVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallConfigConfigVersionActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallAttackStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SecurityFirewallBypassRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SecurityFirewallEventsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecurityFirewallConfigGenerateRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StorageStoresIntegrationDirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRequestUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersTeamsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdDsyncRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMicrofrontendsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMicrofrontendsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VcrRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNamePermissionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNameImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiRepositorySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1VercelCiRepositorySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiTaskAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiTaskAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiTaskAnalysesAnalysisIdPullRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiTaskAnalysesAnalysisIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VercelCiLogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1QueryWebAnalyticsVisitsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsEventsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsVisitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

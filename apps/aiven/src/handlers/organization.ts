import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOrganizationOrganizationIdAddressAddressIdRoute,
  deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRoute,
  deleteOrganizationOrganizationIdApplicationUsersUserIdRoute,
  deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRoute,
  deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
  deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
  deleteOrganizationOrganizationIdDomainsDomainIdRoute,
  deleteOrganizationOrganizationIdGovernanceAccessAccessIdRoute,
  deleteOrganizationOrganizationIdInvitationUserEmailRoute,
  deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
  deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute,
  deleteOrganizationOrganizationIdProjectProjectIdRoute,
  deleteOrganizationOrganizationIdRoute,
  deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  deleteOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRoute,
  deleteOrganizationOrganizationIdUserMemberUserIdRoute,
  deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRoute,
  deleteOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  getOrganizationOrganizationIdAddressAddressIdRoute,
  getOrganizationOrganizationIdAddressesRoute,
  getOrganizationOrganizationIdAiGatewayBudgetsRoute,
  getOrganizationOrganizationIdAiGatewayKeysRoute,
  getOrganizationOrganizationIdApplicationUsersRoute,
  getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute,
  getOrganizationOrganizationIdApplicationUsersUserIdRoute,
  getOrganizationOrganizationIdApplicationVcsIntegrationsRoute,
  getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdBranchesRoute,
  getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaContainerManifestFilesRoute,
  getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRoute,
  getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
  getOrganizationOrganizationIdBillingGroupsRoute,
  getOrganizationOrganizationIdConfigApiClientIpAllowlistRoute,
  getOrganizationOrganizationIdConfigAuthenticationRoute,
  getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
  getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
  getOrganizationOrganizationIdDiscoveredOrganizationsRoute,
  getOrganizationOrganizationIdDomainsRoute,
  getOrganizationOrganizationIdEmissionsRoute,
  getOrganizationOrganizationIdGovernanceAccessAccessIdCredentialsRoute,
  getOrganizationOrganizationIdGovernanceAccessAccessIdRoute,
  getOrganizationOrganizationIdGovernanceAccessRoute,
  getOrganizationOrganizationIdInvitationRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberRoute,
  getOrganizationOrganizationIdInvoicesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomConnectorsRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsRoute,
  getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRoute,
  getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodBankTransfersRoute,
  getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodCreditCardsRoute,
  getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodCustomRoute,
  getOrganizationOrganizationIdPaymentMethodsRoute,
  getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
  getOrganizationOrganizationIdProjectProjectIdRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRoute,
  getOrganizationOrganizationIdProjectsRoute,
  getOrganizationOrganizationIdRoute,
  getOrganizationOrganizationIdUpgradePipelineStepsRoute,
  getOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  getOrganizationOrganizationIdUserGroupsRoute,
  getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute,
  getOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  getOrganizationOrganizationIdUserMemberUserIdAccessTokensRoute,
  getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRoute,
  getOrganizationOrganizationIdUserMemberUserIdPermissionsRoute,
  getOrganizationOrganizationIdUserMemberUserIdRoute,
  getOrganizationOrganizationIdUserMemberUserIdUserGroupsRoute,
  getOrganizationOrganizationIdUserRoute,
  getOrganizationOrganizationIdVpcCloudsRoute,
  getOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  getOrganizationOrganizationIdVpcPeeringConnectionTypesRoute,
  getOrganizationOrganizationIdVpcsRoute,
  patchOrganizationOrganizationIdAddressAddressIdRoute,
  patchOrganizationOrganizationIdAiGatewayKeysBudgetsRoute,
  patchOrganizationOrganizationIdApplicationUsersUserIdRoute,
  patchOrganizationOrganizationIdConfigAuthenticationRoute,
  patchOrganizationOrganizationIdDomainsDomainIdRoute,
  patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
  patchOrganizationOrganizationIdProjectProjectIdRoute,
  patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRoute,
  patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRoute,
  patchOrganizationOrganizationIdRoute,
  patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute,
  patchOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  patchOrganizationOrganizationIdUserMemberUserIdRoute,
  postOrganizationOrganizationIdAddressesRoute,
  postOrganizationOrganizationIdApplicationUsersRoute,
  postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute,
  postOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaScanContainerManifestRoute,
  postOrganizationOrganizationIdBillingGroupsRoute,
  postOrganizationOrganizationIdBillingReportRoute,
  postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRoute,
  postOrganizationOrganizationIdCustomCloudEnvironmentsRoute,
  postOrganizationOrganizationIdDomainsDomainIdVerifyRoute,
  postOrganizationOrganizationIdDomainsRoute,
  postOrganizationOrganizationIdEventLogsDownloadRoute,
  postOrganizationOrganizationIdEventLogsRoute,
  postOrganizationOrganizationIdGovernanceAccessRoute,
  postOrganizationOrganizationIdInvitationRoute,
  postOrganizationOrganizationIdInvitationUserEmailRoute,
  postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute,
  postOrganizationOrganizationIdPaymentMethodCreditCardsRoute,
  postOrganizationOrganizationIdProjectProjectIdEventLogsDownloadRoute,
  postOrganizationOrganizationIdProjectProjectIdEventLogsRoute,
  postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsCountsRoute,
  postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRoute,
  postOrganizationOrganizationIdProjectsRoute,
  postOrganizationOrganizationIdUpgradePipelineStepsRoute,
  postOrganizationOrganizationIdUserGroupsRoute,
  postOrganizationOrganizationIdUserMemberUserIdResetPasswordRoute,
  postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRoute,
  postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRoute,
  postOrganizationOrganizationIdVpcsRoute,
  putOrganizationOrganizationIdAiGatewayBudgetRoute,
  putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRoute,
  putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
  putOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
  putOrganizationOrganizationIdConfigApiClientIpAllowlistRoute,
  putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
  putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
  putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRoute,
} from '../routes'

export const putOrganizationOrganizationIdAiGatewayBudgetRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdAiGatewayBudgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdAiGatewayBudgetsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdAiGatewayBudgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdAiGatewayKeysBudgetsRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdAiGatewayKeysBudgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdAiGatewayKeysRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdAiGatewayKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdApplicationUsersRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdApplicationUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationUsersRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdApplicationUsersUserIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdApplicationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationUsersUserIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdApplicationUsersUserIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdApplicationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdAddressesRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdAddressesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdAddressAddressIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdAddressAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdAddressAddressIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdAddressAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdAddressAddressIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdAddressAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdCustomCloudEnvironmentsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdCustomCloudEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdDomainsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdDomainsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdDomainsDomainIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdDomainsDomainIdVerifyRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdDomainsDomainIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdUserGroupsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserGroupsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdUserGroupsUserGroupIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdUserGroupsUserGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserGroupsUserGroupIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserGroupsUserGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdUserGroupsUserGroupIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdUserGroupsUserGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomConnectorsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectCustomPluginsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectCustomPluginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdBillingGroupsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdBillingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdBillingGroupsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdBillingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdBillingGroupBillingGroupIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdBillingGroupBillingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdBillingGroupBillingGroupIdRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdBillingGroupBillingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvoiceInvoiceNumberRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvoiceInvoiceNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvoicesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdEmissionsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdEmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodBankTransfersRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodBankTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdPaymentMethodCreditCardsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdPaymentMethodCreditCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodCreditCardsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodCreditCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodCustomRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPaymentMethodsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdVpcCloudsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdVpcCloudsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdVpcsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdVpcsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdVpcOrganizationVpcIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdVpcOrganizationVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdVpcOrganizationVpcIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdVpcOrganizationVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdVpcOrganizationVpcIdRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdVpcOrganizationVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdVpcPeeringConnectionTypesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdVpcPeeringConnectionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdDiscoveredOrganizationsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdDiscoveredOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdConfigAuthenticationRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdConfigAuthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdConfigAuthenticationRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdConfigAuthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdBillingReportRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdBillingReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdEventLogsDownloadRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdEventLogsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdEventLogsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdEventLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdGovernanceAccessRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdGovernanceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdGovernanceAccessRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdGovernanceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdGovernanceAccessAccessIdCredentialsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdGovernanceAccessAccessIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdGovernanceAccessAccessIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdGovernanceAccessAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdGovernanceAccessAccessIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdGovernanceAccessAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdConfigApiClientIpAllowlistRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdConfigApiClientIpAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdConfigApiClientIpAllowlistRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdConfigApiClientIpAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdProjectProjectIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectProjectIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdProjectProjectIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsCountsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdInvitationUserEmailRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdInvitationUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdInvitationUserEmailRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdInvitationUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdInvitationRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdInvitationRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdInvitationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectIdEventLogsDownloadRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectIdEventLogsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectIdEventLogsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectIdEventLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationVcsIntegrationsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationVcsIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdBranchesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaContainerManifestFilesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaContainerManifestFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaScanContainerManifestRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaScanContainerManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRouteHandler: RouteHandler<
  typeof putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdUpgradePipelineStepsRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdUpgradePipelineStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUpgradePipelineStepsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUpgradePipelineStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUpgradePipelineStepsStepIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserMemberUserIdUserGroupsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserMemberUserIdUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserMemberUserIdPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserMemberUserIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdUserMemberUserIdRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdUserMemberUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserMemberUserIdRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserMemberUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationOrganizationIdUserMemberUserIdRouteHandler: RouteHandler<
  typeof patchOrganizationOrganizationIdUserMemberUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOrganizationIdUserMemberUserIdResetPasswordRouteHandler: RouteHandler<
  typeof postOrganizationOrganizationIdUserMemberUserIdResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRouteHandler: RouteHandler<
  typeof deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationOrganizationIdUserMemberUserIdAccessTokensRouteHandler: RouteHandler<
  typeof getOrganizationOrganizationIdUserMemberUserIdAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

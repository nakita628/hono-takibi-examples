import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(putOrganizationOrganizationIdAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAiGatewayBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdAiGatewayKeysBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdApplicationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationOrganizationIdAuthenticationMethodsAuthenticationMethodIdDomainsDomainIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdAddressAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdCustomCloudEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdDomainsDomainIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdEmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdPaymentMethodCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcCloudsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcPeeringConnectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdDiscoveredOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdConfigAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdConfigAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdBillingReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdEventLogsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdEventLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdGovernanceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdGovernanceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdGovernanceAccessAccessIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdGovernanceAccessAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdGovernanceAccessAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdConfigApiClientIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdConfigApiClientIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectProjectIdServiceServiceIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdInvitationUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdInvitationUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectProjectIdEventLogsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectProjectIdEventLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationVcsIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdBranchesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaContainerManifestFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRemoteRepositoryIdRefsCommitShaScanContainerManifestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdApplicationVcsIntegrationsVcsIntegrationIdRepositoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdUpgradePipelineStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUpgradePipelineStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdUserMemberUserIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserMemberUserIdAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserMemberUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })

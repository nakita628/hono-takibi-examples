import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  deleteAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  deleteAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute,
  deleteAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  deleteAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  deleteAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  deleteAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  deleteAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  deleteAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  deleteAccountOrZoneAccountOrZoneIdTagsRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdUserPolicyChecksRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsCaRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesRoute,
  getAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute,
  getAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessGroupsRoute,
  getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute,
  getAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  getAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute,
  getAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  getAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute,
  getAccountOrZoneAccountOrZoneIdCustomCsrsRoute,
  getAccountOrZoneAccountOrZoneIdCustomNsRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesRoute,
  getAccountOrZoneAccountOrZoneIdDnsRecordsUsageRoute,
  getAccountOrZoneAccountOrZoneIdDnsSettingsRoute,
  getAccountOrZoneAccountOrZoneIdEmailRoutingRulesRoute,
  getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute,
  getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  getAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  getAccountOrZoneAccountOrZoneIdIntelSinkholesSinkholeIdIngressesRoute,
  getAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  getAccountOrZoneAccountOrZoneIdLoadBalancersRoute,
  getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdFieldsRoute,
  getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdJobsRoute,
  getAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  getAccountOrZoneAccountOrZoneIdLogpushJobsRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsAvailableRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute,
  getAccountOrZoneAccountOrZoneIdMonetizationRoute,
  getAccountOrZoneAccountOrZoneIdPayPerUseUsageStatsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsAuditLogRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsClassRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdAuditLogRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsPartnerCountRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsSeverityRoute,
  getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsTypeRoute,
  getAccountOrZoneAccountOrZoneIdSubscriptionsRoute,
  getAccountOrZoneAccountOrZoneIdTagsRoute,
  patchAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute,
  patchAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  patchAccountOrZoneAccountOrZoneIdDnsSettingsRoute,
  patchAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  patchAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  patchAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  patchAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdClassificationRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdRevokeTokensRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsRoute,
  postAccountOrZoneAccountOrZoneIdAccessCertificatesRoute,
  postAccountOrZoneAccountOrZoneIdAccessGroupsRoute,
  postAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute,
  postAccountOrZoneAccountOrZoneIdAccessOrganizationsRevokeUserRoute,
  postAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  postAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute,
  postAccountOrZoneAccountOrZoneIdCustomCsrsRoute,
  postAccountOrZoneAccountOrZoneIdCustomNsRoute,
  postAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute,
  postAccountOrZoneAccountOrZoneIdCustomPagesPreviewTokensRoute,
  postAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute,
  postAccountOrZoneAccountOrZoneIdLoadBalancersRoute,
  postAccountOrZoneAccountOrZoneIdLogpushJobsRoute,
  postAccountOrZoneAccountOrZoneIdLogpushOwnershipRoute,
  postAccountOrZoneAccountOrZoneIdLogpushOwnershipValidateRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationExistsRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationRoute,
  postAccountOrZoneAccountOrZoneIdLogpushValidateOriginRoute,
  postAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute,
  postAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute,
  postAccountOrZoneAccountOrZoneIdMonetizationRoute,
  postAccountOrZoneAccountOrZoneIdRulesetsRoute,
  postAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRoute,
  postAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute,
  postAccountOrZoneAccountOrZoneIdSubscriptionsRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute,
  putAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute,
  putAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  putAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  putAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  putAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute,
  putAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  putAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute,
  putAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute,
  putAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  putAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  putAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  putAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdDismissRoute,
  putAccountOrZoneAccountOrZoneIdTagsRoute,
} from '../routes'

export const getAccountOrZoneAccountOrZoneIdAccessAppsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessAppsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsCaRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessAppsAppIdRevokeTokensRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessAppsAppIdRevokeTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessAppsAppIdUserPolicyChecksRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessAppsAppIdUserPolicyChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessCertificatesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessCertificatesRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessCertificatesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessGroupsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessGroupsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessOrganizationsRevokeUserRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessOrganizationsRevokeUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessServiceTokensRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdAccessServiceTokensRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomCsrsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomCsrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdCustomCsrsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdCustomCsrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomNsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdCustomNsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomPagesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomPagesAssetsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdCustomPagesAssetsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdCustomPagesPreviewTokensRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdCustomPagesPreviewTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdDnsRecordsUsageRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdDnsRecordsUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdDnsSettingsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdDnsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdDnsSettingsRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdDnsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdEmailRoutingRulesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdEmailRoutingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdIntelSinkholesSinkholeIdIngressesRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdIntelSinkholesSinkholeIdIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLoadBalancersRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLoadBalancersRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdFieldsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdJobsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogpushDatasetsDatasetIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogpushJobsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogpushJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushJobsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushOwnershipRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushOwnershipValidateRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushOwnershipValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationExistsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushValidateDestinationExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogpushValidateOriginRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogpushValidateOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsAvailableRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdMonetizationRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdMonetizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdMonetizationRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdMonetizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdPayPerUseUsageStatsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdPayPerUseUsageStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdRulesetsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsAuditLogRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsAuditLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsClassRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsPartnerCountRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsPartnerCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdSecurityCenterInsightsScansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsSeverityRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsSeverityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsTypeRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdAuditLogRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdAuditLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdClassificationRouteHandler: RouteHandler<
  typeof patchAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdClassificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdDismissRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdSecurityCenterInsightsIssueIdDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdSubscriptionsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountOrZoneAccountOrZoneIdSubscriptionsRouteHandler: RouteHandler<
  typeof postAccountOrZoneAccountOrZoneIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountOrZoneAccountOrZoneIdTagsRouteHandler: RouteHandler<
  typeof deleteAccountOrZoneAccountOrZoneIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountOrZoneAccountOrZoneIdTagsRouteHandler: RouteHandler<
  typeof getAccountOrZoneAccountOrZoneIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountOrZoneAccountOrZoneIdTagsRouteHandler: RouteHandler<
  typeof putAccountOrZoneAccountOrZoneIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

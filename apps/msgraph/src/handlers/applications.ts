import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsApplicationIdAppManagementPoliciesAppManagementPolicyIdRefRoute,
  deleteApplicationsApplicationIdAppManagementPoliciesRefRoute,
  deleteApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  deleteApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  deleteApplicationsApplicationIdLogoRoute,
  deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute,
  deleteApplicationsApplicationIdOwnersRefRoute,
  deleteApplicationsApplicationIdRoute,
  deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute,
  deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  deleteApplicationsApplicationIdSynchronizationRoute,
  deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  deleteApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
  deleteApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
  deleteApplicationsApplicationIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
  getApplicationsApplicationIdAppManagementPoliciesCountRoute,
  getApplicationsApplicationIdAppManagementPoliciesRefRoute,
  getApplicationsApplicationIdAppManagementPoliciesRoute,
  getApplicationsApplicationIdCreatedOnBehalfOfRoute,
  getApplicationsApplicationIdExtensionPropertiesCountRoute,
  getApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  getApplicationsApplicationIdExtensionPropertiesRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsRoute,
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesCountRoute,
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute,
  getApplicationsApplicationIdHomeRealmDiscoveryPoliciesRoute,
  getApplicationsApplicationIdLogoRoute,
  getApplicationsApplicationIdOwnersCountRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphEndpointRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphUserRoute,
  getApplicationsApplicationIdOwnersGraphAppRoleAssignmentCountRoute,
  getApplicationsApplicationIdOwnersGraphAppRoleAssignmentRoute,
  getApplicationsApplicationIdOwnersGraphEndpointCountRoute,
  getApplicationsApplicationIdOwnersGraphEndpointRoute,
  getApplicationsApplicationIdOwnersGraphServicePrincipalCountRoute,
  getApplicationsApplicationIdOwnersGraphServicePrincipalRoute,
  getApplicationsApplicationIdOwnersGraphUserCountRoute,
  getApplicationsApplicationIdOwnersGraphUserRoute,
  getApplicationsApplicationIdOwnersRefRoute,
  getApplicationsApplicationIdOwnersRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsApplicationIdSynchronizationJobsCountRoute,
  getApplicationsApplicationIdSynchronizationJobsRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRoute,
  getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  getApplicationsApplicationIdSynchronizationRoute,
  getApplicationsApplicationIdSynchronizationSecretsCountRoute,
  getApplicationsApplicationIdSynchronizationTemplatesCountRoute,
  getApplicationsApplicationIdSynchronizationTemplatesRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRoute,
  getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesCountRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesCountRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesRoute,
  getApplicationsCountRoute,
  getApplicationsDeltaRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  patchApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  patchApplicationsApplicationIdRoute,
  patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute,
  patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute,
  patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute,
  patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute,
  patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute,
  patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute,
  postApplicationsApplicationIdAddKeyRoute,
  postApplicationsApplicationIdAddPasswordRoute,
  postApplicationsApplicationIdAppManagementPoliciesRefRoute,
  postApplicationsApplicationIdCheckMemberGroupsRoute,
  postApplicationsApplicationIdCheckMemberObjectsRoute,
  postApplicationsApplicationIdExtensionPropertiesRoute,
  postApplicationsApplicationIdFederatedIdentityCredentialsRoute,
  postApplicationsApplicationIdGetMemberGroupsRoute,
  postApplicationsApplicationIdGetMemberObjectsRoute,
  postApplicationsApplicationIdOwnersRefRoute,
  postApplicationsApplicationIdRemoveKeyRoute,
  postApplicationsApplicationIdRemovePasswordRoute,
  postApplicationsApplicationIdRestoreRoute,
  postApplicationsApplicationIdSetVerifiedPublisherRoute,
  postApplicationsApplicationIdSynchronizationAcquireAccessTokenRoute,
  postApplicationsApplicationIdSynchronizationJobsRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdPauseRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRestartRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdStartRoute,
  postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRoute,
  postApplicationsApplicationIdSynchronizationJobsValidateCredentialsRoute,
  postApplicationsApplicationIdSynchronizationTemplatesRoute,
  postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute,
  postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute,
  postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRoute,
  postApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  postApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
  postApplicationsApplicationIdUnsetVerifiedPublisherRoute,
  postApplicationsGetAvailableExtensionPropertiesRoute,
  postApplicationsGetByIdsRoute,
  postApplicationsRoute,
  postApplicationsValidatePropertiesRoute,
  putApplicationsApplicationIdLogoRoute,
  putApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute,
  putApplicationsApplicationIdSynchronizationRoute,
  putApplicationsApplicationIdSynchronizationSecretsRoute,
} from '../routes'

export const getApplicationsRouteHandler: RouteHandler<typeof getApplicationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsRouteHandler: RouteHandler<typeof postApplicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdAppManagementPoliciesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdAppManagementPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdAppManagementPoliciesAppManagementPolicyIdRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdAppManagementPoliciesAppManagementPolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdAppManagementPoliciesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdAppManagementPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdAppManagementPoliciesRefRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdAppManagementPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdAppManagementPoliciesRefRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdAppManagementPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdAppManagementPoliciesRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdAppManagementPoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdCreatedOnBehalfOfRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdCreatedOnBehalfOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdExtensionPropertiesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdExtensionPropertiesRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdExtensionPropertiesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdExtensionPropertiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdFederatedIdentityCredentialsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdFederatedIdentityCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdFederatedIdentityCredentialsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdFederatedIdentityCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdFederatedIdentityCredentialsNameNameRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdFederatedIdentityCredentialsCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdHomeRealmDiscoveryPoliciesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdHomeRealmDiscoveryPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdHomeRealmDiscoveryPoliciesHomeRealmDiscoveryPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdHomeRealmDiscoveryPoliciesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdHomeRealmDiscoveryPoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdLogoRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApplicationsApplicationIdLogoRouteHandler: RouteHandler<
  typeof putApplicationsApplicationIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdLogoRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdAddKeyRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdAddKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdAddPasswordRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdAddPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdCheckMemberGroupsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdCheckMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdCheckMemberObjectsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdCheckMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdGetMemberGroupsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdGetMemberGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdGetMemberObjectsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdGetMemberObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdRemoveKeyRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdRemoveKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdRemovePasswordRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdRemovePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdRestoreRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSetVerifiedPublisherRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSetVerifiedPublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdUnsetVerifiedPublisherRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdUnsetVerifiedPublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersDirectoryObjectIdGraphEndpointRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersDirectoryObjectIdGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersDirectoryObjectIdGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersDirectoryObjectIdGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersDirectoryObjectIdGraphUserRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersDirectoryObjectIdGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersRefRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdOwnersRefRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdOwnersRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdOwnersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphAppRoleAssignmentRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphAppRoleAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphAppRoleAssignmentCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphAppRoleAssignmentCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphEndpointRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphEndpointCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphEndpointCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphServicePrincipalRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphServicePrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphServicePrincipalCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphServicePrincipalCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphUserRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdOwnersGraphUserCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdOwnersGraphUserCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApplicationsApplicationIdSynchronizationRouteHandler: RouteHandler<
  typeof putApplicationsApplicationIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof putApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdBulkUploadValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdPauseRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdProvisionOnDemandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRestartRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdStartRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdValidateCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaDirectoriesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsSynchronizationJobIdSchemaParseExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationJobsCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationJobsValidateCredentialsRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationJobsValidateCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationAcquireAccessTokenRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationAcquireAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApplicationsApplicationIdSynchronizationSecretsRouteHandler: RouteHandler<
  typeof putApplicationsApplicationIdSynchronizationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationSecretsCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationSecretsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationTemplatesRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof patchApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesDirectoryDefinitionIdDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaDirectoriesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdSynchronizationTemplatesSynchronizationTemplateIdSchemaParseExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdSynchronizationTemplatesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdSynchronizationTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenIssuancePoliciesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenIssuancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenIssuancePoliciesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenIssuancePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdTokenIssuancePoliciesRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdTokenIssuancePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenLifetimePoliciesRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenLifetimePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenLifetimePoliciesCountRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenLifetimePoliciesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsApplicationIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof postApplicationsApplicationIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsApplicationIdTokenLifetimePoliciesRefRouteHandler: RouteHandler<
  typeof deleteApplicationsApplicationIdTokenLifetimePoliciesRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsCountRouteHandler: RouteHandler<
  typeof getApplicationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsDeltaRouteHandler: RouteHandler<
  typeof getApplicationsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsGetAvailableExtensionPropertiesRouteHandler: RouteHandler<
  typeof postApplicationsGetAvailableExtensionPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsGetByIdsRouteHandler: RouteHandler<
  typeof postApplicationsGetByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsValidatePropertiesRouteHandler: RouteHandler<
  typeof postApplicationsValidatePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

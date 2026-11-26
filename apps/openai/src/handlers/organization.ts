import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationAdminApiKeysRoute,
  postOrganizationAdminApiKeysRoute,
  getOrganizationAdminApiKeysKeyIdRoute,
  deleteOrganizationAdminApiKeysKeyIdRoute,
  getOrganizationAuditLogsRoute,
  getOrganizationCertificatesRoute,
  postOrganizationCertificatesRoute,
  postOrganizationCertificatesActivateRoute,
  postOrganizationCertificatesDeactivateRoute,
  getOrganizationCertificatesCertificateIdRoute,
  postOrganizationCertificatesCertificateIdRoute,
  deleteOrganizationCertificatesCertificateIdRoute,
  getOrganizationCostsRoute,
  getOrganizationDataRetentionRoute,
  postOrganizationDataRetentionRoute,
  getOrganizationGroupsRoute,
  postOrganizationGroupsRoute,
  getOrganizationGroupsGroupIdRoute,
  postOrganizationGroupsGroupIdRoute,
  deleteOrganizationGroupsGroupIdRoute,
  getOrganizationGroupsGroupIdRolesRoute,
  postOrganizationGroupsGroupIdRolesRoute,
  getOrganizationGroupsGroupIdRolesRoleIdRoute,
  deleteOrganizationGroupsGroupIdRolesRoleIdRoute,
  getOrganizationGroupsGroupIdUsersRoute,
  postOrganizationGroupsGroupIdUsersRoute,
  getOrganizationGroupsGroupIdUsersUserIdRoute,
  deleteOrganizationGroupsGroupIdUsersUserIdRoute,
  getOrganizationInvitesRoute,
  postOrganizationInvitesRoute,
  getOrganizationInvitesInviteIdRoute,
  deleteOrganizationInvitesInviteIdRoute,
  getOrganizationProjectsRoute,
  postOrganizationProjectsRoute,
  getOrganizationProjectsProjectIdRoute,
  postOrganizationProjectsProjectIdRoute,
  getOrganizationProjectsProjectIdApiKeysRoute,
  getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  postOrganizationProjectsProjectIdArchiveRoute,
  getOrganizationProjectsProjectIdCertificatesRoute,
  postOrganizationProjectsProjectIdCertificatesActivateRoute,
  postOrganizationProjectsProjectIdCertificatesDeactivateRoute,
  getOrganizationProjectsProjectIdDataRetentionRoute,
  postOrganizationProjectsProjectIdDataRetentionRoute,
  getOrganizationProjectsProjectIdGroupsRoute,
  postOrganizationProjectsProjectIdGroupsRoute,
  getOrganizationProjectsProjectIdGroupsGroupIdRoute,
  deleteOrganizationProjectsProjectIdGroupsGroupIdRoute,
  getOrganizationProjectsProjectIdHostedToolPermissionsRoute,
  postOrganizationProjectsProjectIdHostedToolPermissionsRoute,
  getOrganizationProjectsProjectIdModelPermissionsRoute,
  postOrganizationProjectsProjectIdModelPermissionsRoute,
  deleteOrganizationProjectsProjectIdModelPermissionsRoute,
  getOrganizationProjectsProjectIdRateLimitsRoute,
  postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute,
  getOrganizationProjectsProjectIdServiceAccountsRoute,
  postOrganizationProjectsProjectIdServiceAccountsRoute,
  getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  getOrganizationProjectsProjectIdSpendAlertsRoute,
  postOrganizationProjectsProjectIdSpendAlertsRoute,
  getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  getOrganizationProjectsProjectIdUsersRoute,
  postOrganizationProjectsProjectIdUsersRoute,
  getOrganizationProjectsProjectIdUsersUserIdRoute,
  postOrganizationProjectsProjectIdUsersUserIdRoute,
  deleteOrganizationProjectsProjectIdUsersUserIdRoute,
  getOrganizationRolesRoute,
  postOrganizationRolesRoute,
  getOrganizationRolesRoleIdRoute,
  postOrganizationRolesRoleIdRoute,
  deleteOrganizationRolesRoleIdRoute,
  getOrganizationSpendAlertsRoute,
  postOrganizationSpendAlertsRoute,
  getOrganizationSpendAlertsAlertIdRoute,
  postOrganizationSpendAlertsAlertIdRoute,
  deleteOrganizationSpendAlertsAlertIdRoute,
  getOrganizationUsageAudioSpeechesRoute,
  getOrganizationUsageAudioTranscriptionsRoute,
  getOrganizationUsageCodeInterpreterSessionsRoute,
  getOrganizationUsageCompletionsRoute,
  getOrganizationUsageEmbeddingsRoute,
  getOrganizationUsageFileSearchCallsRoute,
  getOrganizationUsageImagesRoute,
  getOrganizationUsageModerationsRoute,
  getOrganizationUsageVectorStoresRoute,
  getOrganizationUsageWebSearchCallsRoute,
  getOrganizationUsersRoute,
  getOrganizationUsersUserIdRoute,
  postOrganizationUsersUserIdRoute,
  deleteOrganizationUsersUserIdRoute,
  getOrganizationUsersUserIdRolesRoute,
  postOrganizationUsersUserIdRolesRoute,
  getOrganizationUsersUserIdRolesRoleIdRoute,
  deleteOrganizationUsersUserIdRolesRoleIdRoute,
  postOrganizationExternalKeysRoute,
  getOrganizationExternalKeysRoute,
  getOrganizationExternalKeysExternalKeyIdRoute,
  deleteOrganizationExternalKeysExternalKeyIdRoute,
  postOrganizationExternalKeysExternalKeyIdValidateRoute,
  getOrganizationWorkloadIdentityProvidersRoute,
  postOrganizationWorkloadIdentityProvidersRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  getOrganizationUsageDecisionsRoute,
  getOrganizationExternalStorageRoute,
  postOrganizationExternalStorageRoute,
  getOrganizationExternalStorageExternalStorageIdRoute,
  deleteOrganizationExternalStorageExternalStorageIdRoute,
  postOrganizationExternalStorageExternalStorageIdValidateRoute,
  getOrganizationSpendLimitRoute,
  postOrganizationSpendLimitRoute,
  deleteOrganizationSpendLimitRoute,
  getOrganizationProjectsProjectIdSpendLimitRoute,
  deleteOrganizationProjectsProjectIdSpendLimitRoute,
  postOrganizationProjectsProjectIdSpendLimitRoute,
  getOrganizationProjectsProjectIdServiceTierSettingsRoute,
  postOrganizationProjectsProjectIdServiceTierSettingsRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute,
} from '../routes'

export const getOrganizationAdminApiKeysRouteHandler: RouteHandler<
  typeof getOrganizationAdminApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationAdminApiKeysRouteHandler: RouteHandler<
  typeof postOrganizationAdminApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationAdminApiKeysKeyIdRouteHandler: RouteHandler<
  typeof getOrganizationAdminApiKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationAdminApiKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteOrganizationAdminApiKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationAuditLogsRouteHandler: RouteHandler<
  typeof getOrganizationAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationCertificatesRouteHandler: RouteHandler<
  typeof getOrganizationCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationCertificatesRouteHandler: RouteHandler<
  typeof postOrganizationCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationCertificatesActivateRouteHandler: RouteHandler<
  typeof postOrganizationCertificatesActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationCertificatesDeactivateRouteHandler: RouteHandler<
  typeof postOrganizationCertificatesDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getOrganizationCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof postOrganizationCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteOrganizationCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationCostsRouteHandler: RouteHandler<
  typeof getOrganizationCostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationDataRetentionRouteHandler: RouteHandler<
  typeof getOrganizationDataRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationDataRetentionRouteHandler: RouteHandler<
  typeof postOrganizationDataRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsRouteHandler: RouteHandler<
  typeof getOrganizationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationGroupsRouteHandler: RouteHandler<
  typeof postOrganizationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsGroupIdRouteHandler: RouteHandler<
  typeof getOrganizationGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationGroupsGroupIdRouteHandler: RouteHandler<
  typeof postOrganizationGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteOrganizationGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsGroupIdRolesRouteHandler: RouteHandler<
  typeof getOrganizationGroupsGroupIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationGroupsGroupIdRolesRouteHandler: RouteHandler<
  typeof postOrganizationGroupsGroupIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsGroupIdRolesRoleIdRouteHandler: RouteHandler<
  typeof getOrganizationGroupsGroupIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationGroupsGroupIdRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteOrganizationGroupsGroupIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof getOrganizationGroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationGroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof postOrganizationGroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationGroupsGroupIdUsersUserIdRouteHandler: RouteHandler<
  typeof getOrganizationGroupsGroupIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationGroupsGroupIdUsersUserIdRouteHandler: RouteHandler<
  typeof deleteOrganizationGroupsGroupIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationInvitesRouteHandler: RouteHandler<
  typeof getOrganizationInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationInvitesRouteHandler: RouteHandler<
  typeof postOrganizationInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationInvitesInviteIdRouteHandler: RouteHandler<
  typeof getOrganizationInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationInvitesInviteIdRouteHandler: RouteHandler<
  typeof deleteOrganizationInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdApiKeysRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdArchiveRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdCertificatesRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdCertificatesActivateRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdCertificatesActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdCertificatesDeactivateRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdCertificatesDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdDataRetentionRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdDataRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdDataRetentionRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdDataRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdGroupsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdGroupsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdHostedToolPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdHostedToolPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdHostedToolPermissionsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdHostedToolPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdModelPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdModelPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdModelPermissionsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdModelPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdModelPermissionsRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdModelPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdRateLimitsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdRateLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdRateLimitsRateLimitIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdServiceAccountsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdServiceAccountsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdSpendAlertsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdSpendAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdSpendAlertsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdSpendAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdUsersRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdUsersRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdUsersUserIdRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdUsersUserIdRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdUsersUserIdRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationRolesRouteHandler: RouteHandler<
  typeof getOrganizationRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationRolesRouteHandler: RouteHandler<
  typeof postOrganizationRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationRolesRoleIdRouteHandler: RouteHandler<
  typeof getOrganizationRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationRolesRoleIdRouteHandler: RouteHandler<
  typeof postOrganizationRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteOrganizationRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationSpendAlertsRouteHandler: RouteHandler<
  typeof getOrganizationSpendAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationSpendAlertsRouteHandler: RouteHandler<
  typeof postOrganizationSpendAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof getOrganizationSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof postOrganizationSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationSpendAlertsAlertIdRouteHandler: RouteHandler<
  typeof deleteOrganizationSpendAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageAudioSpeechesRouteHandler: RouteHandler<
  typeof getOrganizationUsageAudioSpeechesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageAudioTranscriptionsRouteHandler: RouteHandler<
  typeof getOrganizationUsageAudioTranscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageCodeInterpreterSessionsRouteHandler: RouteHandler<
  typeof getOrganizationUsageCodeInterpreterSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageCompletionsRouteHandler: RouteHandler<
  typeof getOrganizationUsageCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageEmbeddingsRouteHandler: RouteHandler<
  typeof getOrganizationUsageEmbeddingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageFileSearchCallsRouteHandler: RouteHandler<
  typeof getOrganizationUsageFileSearchCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageImagesRouteHandler: RouteHandler<
  typeof getOrganizationUsageImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageModerationsRouteHandler: RouteHandler<
  typeof getOrganizationUsageModerationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageVectorStoresRouteHandler: RouteHandler<
  typeof getOrganizationUsageVectorStoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageWebSearchCallsRouteHandler: RouteHandler<
  typeof getOrganizationUsageWebSearchCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsersRouteHandler: RouteHandler<
  typeof getOrganizationUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsersUserIdRouteHandler: RouteHandler<
  typeof getOrganizationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationUsersUserIdRouteHandler: RouteHandler<
  typeof postOrganizationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationUsersUserIdRouteHandler: RouteHandler<
  typeof deleteOrganizationUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsersUserIdRolesRouteHandler: RouteHandler<
  typeof getOrganizationUsersUserIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationUsersUserIdRolesRouteHandler: RouteHandler<
  typeof postOrganizationUsersUserIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsersUserIdRolesRoleIdRouteHandler: RouteHandler<
  typeof getOrganizationUsersUserIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationUsersUserIdRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteOrganizationUsersUserIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationExternalKeysRouteHandler: RouteHandler<
  typeof postOrganizationExternalKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationExternalKeysRouteHandler: RouteHandler<
  typeof getOrganizationExternalKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationExternalKeysExternalKeyIdRouteHandler: RouteHandler<
  typeof getOrganizationExternalKeysExternalKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationExternalKeysExternalKeyIdRouteHandler: RouteHandler<
  typeof deleteOrganizationExternalKeysExternalKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationExternalKeysExternalKeyIdValidateRouteHandler: RouteHandler<
  typeof postOrganizationExternalKeysExternalKeyIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationWorkloadIdentityProvidersRouteHandler: RouteHandler<
  typeof getOrganizationWorkloadIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationWorkloadIdentityProvidersRouteHandler: RouteHandler<
  typeof postOrganizationWorkloadIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRouteHandler: RouteHandler<
  typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRouteHandler: RouteHandler<
  typeof postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRouteHandler: RouteHandler<
  typeof deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRouteHandler: RouteHandler<
  typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRouteHandler: RouteHandler<
  typeof postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRouteHandler: RouteHandler<
  typeof getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRouteHandler: RouteHandler<
  typeof postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRouteHandler: RouteHandler<
  typeof deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationUsageDecisionsRouteHandler: RouteHandler<
  typeof getOrganizationUsageDecisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationExternalStorageRouteHandler: RouteHandler<
  typeof getOrganizationExternalStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationExternalStorageRouteHandler: RouteHandler<
  typeof postOrganizationExternalStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationExternalStorageExternalStorageIdRouteHandler: RouteHandler<
  typeof getOrganizationExternalStorageExternalStorageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationExternalStorageExternalStorageIdRouteHandler: RouteHandler<
  typeof deleteOrganizationExternalStorageExternalStorageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationExternalStorageExternalStorageIdValidateRouteHandler: RouteHandler<
  typeof postOrganizationExternalStorageExternalStorageIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationSpendLimitRouteHandler: RouteHandler<
  typeof getOrganizationSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationSpendLimitRouteHandler: RouteHandler<
  typeof postOrganizationSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationSpendLimitRouteHandler: RouteHandler<
  typeof deleteOrganizationSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdSpendLimitRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationProjectsProjectIdSpendLimitRouteHandler: RouteHandler<
  typeof deleteOrganizationProjectsProjectIdSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdSpendLimitRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdSpendLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationProjectsProjectIdServiceTierSettingsRouteHandler: RouteHandler<
  typeof getOrganizationProjectsProjectIdServiceTierSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdServiceTierSettingsRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdServiceTierSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRouteHandler: RouteHandler<
  typeof postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationAdminApiKeysKeyIdRoute,
  deleteOrganizationCertificatesCertificateIdRoute,
  deleteOrganizationExternalKeysExternalKeyIdRoute,
  deleteOrganizationExternalStorageExternalStorageIdRoute,
  deleteOrganizationGroupsGroupIdRolesRoleIdRoute,
  deleteOrganizationGroupsGroupIdRoute,
  deleteOrganizationGroupsGroupIdUsersUserIdRoute,
  deleteOrganizationInvitesInviteIdRoute,
  deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  deleteOrganizationProjectsProjectIdGroupsGroupIdRoute,
  deleteOrganizationProjectsProjectIdModelPermissionsRoute,
  deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  deleteOrganizationProjectsProjectIdSpendLimitRoute,
  deleteOrganizationProjectsProjectIdUsersUserIdRoute,
  deleteOrganizationRolesRoleIdRoute,
  deleteOrganizationSpendAlertsAlertIdRoute,
  deleteOrganizationSpendLimitRoute,
  deleteOrganizationUsersUserIdRolesRoleIdRoute,
  deleteOrganizationUsersUserIdRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  getOrganizationAdminApiKeysKeyIdRoute,
  getOrganizationAdminApiKeysRoute,
  getOrganizationAuditLogsRoute,
  getOrganizationCertificatesCertificateIdRoute,
  getOrganizationCertificatesRoute,
  getOrganizationCostsRoute,
  getOrganizationDataRetentionRoute,
  getOrganizationExternalKeysExternalKeyIdRoute,
  getOrganizationExternalKeysRoute,
  getOrganizationExternalStorageExternalStorageIdRoute,
  getOrganizationExternalStorageRoute,
  getOrganizationGroupsGroupIdRolesRoleIdRoute,
  getOrganizationGroupsGroupIdRolesRoute,
  getOrganizationGroupsGroupIdRoute,
  getOrganizationGroupsGroupIdUsersRoute,
  getOrganizationGroupsGroupIdUsersUserIdRoute,
  getOrganizationGroupsRoute,
  getOrganizationInvitesInviteIdRoute,
  getOrganizationInvitesRoute,
  getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  getOrganizationProjectsProjectIdApiKeysRoute,
  getOrganizationProjectsProjectIdCertificatesRoute,
  getOrganizationProjectsProjectIdDataRetentionRoute,
  getOrganizationProjectsProjectIdGroupsGroupIdRoute,
  getOrganizationProjectsProjectIdGroupsRoute,
  getOrganizationProjectsProjectIdHostedToolPermissionsRoute,
  getOrganizationProjectsProjectIdModelPermissionsRoute,
  getOrganizationProjectsProjectIdRateLimitsRoute,
  getOrganizationProjectsProjectIdRoute,
  getOrganizationProjectsProjectIdServiceAccountsRoute,
  getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  getOrganizationProjectsProjectIdServiceTierSettingsRoute,
  getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  getOrganizationProjectsProjectIdSpendAlertsRoute,
  getOrganizationProjectsProjectIdSpendLimitRoute,
  getOrganizationProjectsProjectIdUsersRoute,
  getOrganizationProjectsProjectIdUsersUserIdRoute,
  getOrganizationProjectsRoute,
  getOrganizationRolesRoleIdRoute,
  getOrganizationRolesRoute,
  getOrganizationSpendAlertsAlertIdRoute,
  getOrganizationSpendAlertsRoute,
  getOrganizationSpendLimitRoute,
  getOrganizationUsageAudioSpeechesRoute,
  getOrganizationUsageAudioTranscriptionsRoute,
  getOrganizationUsageCodeInterpreterSessionsRoute,
  getOrganizationUsageCompletionsRoute,
  getOrganizationUsageDecisionsRoute,
  getOrganizationUsageEmbeddingsRoute,
  getOrganizationUsageFileSearchCallsRoute,
  getOrganizationUsageImagesRoute,
  getOrganizationUsageModerationsRoute,
  getOrganizationUsageVectorStoresRoute,
  getOrganizationUsageWebSearchCallsRoute,
  getOrganizationUsersRoute,
  getOrganizationUsersUserIdRolesRoleIdRoute,
  getOrganizationUsersUserIdRolesRoute,
  getOrganizationUsersUserIdRoute,
  getOrganizationWorkloadIdentityProvidersRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
  postOrganizationAdminApiKeysRoute,
  postOrganizationCertificatesActivateRoute,
  postOrganizationCertificatesCertificateIdRoute,
  postOrganizationCertificatesDeactivateRoute,
  postOrganizationCertificatesRoute,
  postOrganizationDataRetentionRoute,
  postOrganizationExternalKeysExternalKeyIdValidateRoute,
  postOrganizationExternalKeysRoute,
  postOrganizationExternalStorageExternalStorageIdValidateRoute,
  postOrganizationExternalStorageRoute,
  postOrganizationGroupsGroupIdRolesRoute,
  postOrganizationGroupsGroupIdRoute,
  postOrganizationGroupsGroupIdUsersRoute,
  postOrganizationGroupsRoute,
  postOrganizationInvitesRoute,
  postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute,
  postOrganizationProjectsProjectIdArchiveRoute,
  postOrganizationProjectsProjectIdCertificatesActivateRoute,
  postOrganizationProjectsProjectIdCertificatesDeactivateRoute,
  postOrganizationProjectsProjectIdDataRetentionRoute,
  postOrganizationProjectsProjectIdGroupsRoute,
  postOrganizationProjectsProjectIdHostedToolPermissionsRoute,
  postOrganizationProjectsProjectIdModelPermissionsRoute,
  postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute,
  postOrganizationProjectsProjectIdRoute,
  postOrganizationProjectsProjectIdServiceAccountsRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute,
  postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute,
  postOrganizationProjectsProjectIdServiceTierSettingsRoute,
  postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  postOrganizationProjectsProjectIdSpendAlertsRoute,
  postOrganizationProjectsProjectIdSpendLimitRoute,
  postOrganizationProjectsProjectIdUsersRoute,
  postOrganizationProjectsProjectIdUsersUserIdRoute,
  postOrganizationProjectsRoute,
  postOrganizationRolesRoleIdRoute,
  postOrganizationRolesRoute,
  postOrganizationSpendAlertsAlertIdRoute,
  postOrganizationSpendAlertsRoute,
  postOrganizationSpendLimitRoute,
  postOrganizationUsersUserIdRolesRoute,
  postOrganizationUsersUserIdRoute,
  postOrganizationWorkloadIdentityProvidersRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
  postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrganizationAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationAdminApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationAdminApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdCertificatesActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdCertificatesDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdDataRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdHostedToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdHostedToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdModelPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdRateLimitsRateLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageAudioSpeechesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageAudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageCodeInterpreterSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageFileSearchCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageModerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageVectorStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageWebSearchCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalKeysExternalKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationExternalKeysExternalKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalKeysExternalKeyIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationWorkloadIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationWorkloadIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationWorkloadIdentityProvidersWorkloadIdentityProviderIdFederationRulesWorkloadIdentityFederationRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationUsageDecisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExternalStorageExternalStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationExternalStorageExternalStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationExternalStorageExternalStorageIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdServiceTierSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceTierSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdServiceAccountsServiceAccountIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

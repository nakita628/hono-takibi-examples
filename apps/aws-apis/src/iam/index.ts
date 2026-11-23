import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddClientIdToOpenIdConnectProviderHandler,
  actionAddRoleToInstanceProfileHandler,
  actionAddUserToGroupHandler,
  actionAttachGroupPolicyHandler,
  actionAttachRolePolicyHandler,
  actionAttachUserPolicyHandler,
  actionChangePasswordHandler,
  actionCreateAccessKeyHandler,
  actionCreateAccountAliasHandler,
  actionCreateGroupHandler,
  actionCreateInstanceProfileHandler,
  actionCreateLoginProfileHandler,
  actionCreateOpenIdConnectProviderHandler,
  actionCreatePolicyHandler,
  actionCreatePolicyVersionHandler,
  actionCreateRoleHandler,
  actionCreateSamlProviderHandler,
  actionCreateServiceLinkedRoleHandler,
  actionCreateServiceSpecificCredentialHandler,
  actionCreateUserHandler,
  actionCreateVirtualMfaDeviceHandler,
  actionDeactivateMfaDeviceHandler,
  actionDeleteAccessKeyHandler,
  actionDeleteAccountAliasHandler,
  actionDeleteAccountPasswordPolicyHandler,
  actionDeleteGroupHandler,
  actionDeleteGroupPolicyHandler,
  actionDeleteInstanceProfileHandler,
  actionDeleteLoginProfileHandler,
  actionDeleteOpenIdConnectProviderHandler,
  actionDeletePolicyHandler,
  actionDeletePolicyVersionHandler,
  actionDeleteRoleHandler,
  actionDeleteRolePermissionsBoundaryHandler,
  actionDeleteRolePolicyHandler,
  actionDeleteSamlProviderHandler,
  actionDeleteServerCertificateHandler,
  actionDeleteServiceLinkedRoleHandler,
  actionDeleteServiceSpecificCredentialHandler,
  actionDeleteSigningCertificateHandler,
  actionDeleteSshPublicKeyHandler,
  actionDeleteUserHandler,
  actionDeleteUserPermissionsBoundaryHandler,
  actionDeleteUserPolicyHandler,
  actionDeleteVirtualMfaDeviceHandler,
  actionDetachGroupPolicyHandler,
  actionDetachRolePolicyHandler,
  actionDetachUserPolicyHandler,
  actionEnableMfaDeviceHandler,
  actionGenerateCredentialReportHandler,
  actionGenerateOrganizationsAccessReportHandler,
  actionGenerateServiceLastAccessedDetailsHandler,
  actionGetAccessKeyLastUsedHandler,
  actionGetAccountAuthorizationDetailsHandler,
  actionGetAccountPasswordPolicyHandler,
  actionGetAccountSummaryHandler,
  actionGetContextKeysForCustomPolicyHandler,
  actionGetContextKeysForPrincipalPolicyHandler,
  actionGetCredentialReportHandler,
  actionGetGroupHandler,
  actionGetGroupPolicyHandler,
  actionGetInstanceProfileHandler,
  actionGetLoginProfileHandler,
  actionGetMfaDeviceHandler,
  actionGetOpenIdConnectProviderHandler,
  actionGetOrganizationsAccessReportHandler,
  actionGetPolicyHandler,
  actionGetPolicyVersionHandler,
  actionGetRoleHandler,
  actionGetRolePolicyHandler,
  actionGetSamlProviderHandler,
  actionGetServerCertificateHandler,
  actionGetServiceLastAccessedDetailsHandler,
  actionGetServiceLastAccessedDetailsWithEntitiesHandler,
  actionGetServiceLinkedRoleDeletionStatusHandler,
  actionGetSshPublicKeyHandler,
  actionGetUserHandler,
  actionGetUserPolicyHandler,
  actionListAccessKeysHandler,
  actionListAccountAliasesHandler,
  actionListAttachedGroupPoliciesHandler,
  actionListAttachedRolePoliciesHandler,
  actionListAttachedUserPoliciesHandler,
  actionListEntitiesForPolicyHandler,
  actionListGroupPoliciesHandler,
  actionListGroupsForUserHandler,
  actionListGroupsHandler,
  actionListInstanceProfilesForRoleHandler,
  actionListInstanceProfilesHandler,
  actionListInstanceProfileTagsHandler,
  actionListMfaDevicesHandler,
  actionListMfaDeviceTagsHandler,
  actionListOpenIdConnectProvidersHandler,
  actionListOpenIdConnectProviderTagsHandler,
  actionListPoliciesGrantingServiceAccessHandler,
  actionListPoliciesHandler,
  actionListPolicyTagsHandler,
  actionListPolicyVersionsHandler,
  actionListRolePoliciesHandler,
  actionListRolesHandler,
  actionListRoleTagsHandler,
  actionListSamlProvidersHandler,
  actionListSamlProviderTagsHandler,
  actionListServerCertificatesHandler,
  actionListServerCertificateTagsHandler,
  actionListServiceSpecificCredentialsHandler,
  actionListSigningCertificatesHandler,
  actionListSshPublicKeysHandler,
  actionListUserPoliciesHandler,
  actionListUsersHandler,
  actionListUserTagsHandler,
  actionListVirtualMfaDevicesHandler,
  actionPutGroupPolicyHandler,
  actionPutRolePermissionsBoundaryHandler,
  actionPutRolePolicyHandler,
  actionPutUserPermissionsBoundaryHandler,
  actionPutUserPolicyHandler,
  actionRemoveClientIdFromOpenIdConnectProviderHandler,
  actionRemoveRoleFromInstanceProfileHandler,
  actionRemoveUserFromGroupHandler,
  actionResetServiceSpecificCredentialHandler,
  actionResyncMfaDeviceHandler,
  actionSetDefaultPolicyVersionHandler,
  actionSetSecurityTokenServicePreferencesHandler,
  actionSimulateCustomPolicyHandler,
  actionSimulatePrincipalPolicyHandler,
  actionTagInstanceProfileHandler,
  actionTagMfaDeviceHandler,
  actionTagOpenIdConnectProviderHandler,
  actionTagPolicyHandler,
  actionTagRoleHandler,
  actionTagSamlProviderHandler,
  actionTagServerCertificateHandler,
  actionTagUserHandler,
  actionUntagInstanceProfileHandler,
  actionUntagMfaDeviceHandler,
  actionUntagOpenIdConnectProviderHandler,
  actionUntagPolicyHandler,
  actionUntagRoleHandler,
  actionUntagSamlProviderHandler,
  actionUntagServerCertificateHandler,
  actionUntagUserHandler,
  actionUpdateAccessKeyHandler,
  actionUpdateAccountPasswordPolicyHandler,
  actionUpdateAssumeRolePolicyHandler,
  actionUpdateGroupHandler,
  actionUpdateLoginProfileHandler,
  actionUpdateOpenIdConnectProviderThumbprintHandler,
  actionUpdateRoleDescriptionHandler,
  actionUpdateRoleHandler,
  actionUpdateSamlProviderHandler,
  actionUpdateServerCertificateHandler,
  actionUpdateServiceSpecificCredentialHandler,
  actionUpdateSigningCertificateHandler,
  actionUpdateSshPublicKeyHandler,
  actionUpdateUserHandler,
  actionUploadServerCertificateHandler,
  actionUploadSigningCertificateHandler,
  actionUploadSshPublicKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddClientIdToOpenIdConnectProviderHandler)
  .route('/', actionAddRoleToInstanceProfileHandler)
  .route('/', actionAddUserToGroupHandler)
  .route('/', actionAttachGroupPolicyHandler)
  .route('/', actionAttachRolePolicyHandler)
  .route('/', actionAttachUserPolicyHandler)
  .route('/', actionChangePasswordHandler)
  .route('/', actionCreateAccessKeyHandler)
  .route('/', actionCreateAccountAliasHandler)
  .route('/', actionCreateGroupHandler)
  .route('/', actionCreateInstanceProfileHandler)
  .route('/', actionCreateLoginProfileHandler)
  .route('/', actionCreateOpenIdConnectProviderHandler)
  .route('/', actionCreatePolicyHandler)
  .route('/', actionCreatePolicyVersionHandler)
  .route('/', actionCreateRoleHandler)
  .route('/', actionCreateSamlProviderHandler)
  .route('/', actionCreateServiceLinkedRoleHandler)
  .route('/', actionCreateServiceSpecificCredentialHandler)
  .route('/', actionCreateUserHandler)
  .route('/', actionCreateVirtualMfaDeviceHandler)
  .route('/', actionDeactivateMfaDeviceHandler)
  .route('/', actionDeleteAccessKeyHandler)
  .route('/', actionDeleteAccountAliasHandler)
  .route('/', actionDeleteAccountPasswordPolicyHandler)
  .route('/', actionDeleteGroupHandler)
  .route('/', actionDeleteGroupPolicyHandler)
  .route('/', actionDeleteInstanceProfileHandler)
  .route('/', actionDeleteLoginProfileHandler)
  .route('/', actionDeleteOpenIdConnectProviderHandler)
  .route('/', actionDeletePolicyHandler)
  .route('/', actionDeletePolicyVersionHandler)
  .route('/', actionDeleteRoleHandler)
  .route('/', actionDeleteRolePermissionsBoundaryHandler)
  .route('/', actionDeleteRolePolicyHandler)
  .route('/', actionDeleteSamlProviderHandler)
  .route('/', actionDeleteSshPublicKeyHandler)
  .route('/', actionDeleteServerCertificateHandler)
  .route('/', actionDeleteServiceLinkedRoleHandler)
  .route('/', actionDeleteServiceSpecificCredentialHandler)
  .route('/', actionDeleteSigningCertificateHandler)
  .route('/', actionDeleteUserHandler)
  .route('/', actionDeleteUserPermissionsBoundaryHandler)
  .route('/', actionDeleteUserPolicyHandler)
  .route('/', actionDeleteVirtualMfaDeviceHandler)
  .route('/', actionDetachGroupPolicyHandler)
  .route('/', actionDetachRolePolicyHandler)
  .route('/', actionDetachUserPolicyHandler)
  .route('/', actionEnableMfaDeviceHandler)
  .route('/', actionGenerateCredentialReportHandler)
  .route('/', actionGenerateOrganizationsAccessReportHandler)
  .route('/', actionGenerateServiceLastAccessedDetailsHandler)
  .route('/', actionGetAccessKeyLastUsedHandler)
  .route('/', actionGetAccountAuthorizationDetailsHandler)
  .route('/', actionGetAccountPasswordPolicyHandler)
  .route('/', actionGetAccountSummaryHandler)
  .route('/', actionGetContextKeysForCustomPolicyHandler)
  .route('/', actionGetContextKeysForPrincipalPolicyHandler)
  .route('/', actionGetCredentialReportHandler)
  .route('/', actionGetGroupHandler)
  .route('/', actionGetGroupPolicyHandler)
  .route('/', actionGetInstanceProfileHandler)
  .route('/', actionGetLoginProfileHandler)
  .route('/', actionGetMfaDeviceHandler)
  .route('/', actionGetOpenIdConnectProviderHandler)
  .route('/', actionGetOrganizationsAccessReportHandler)
  .route('/', actionGetPolicyHandler)
  .route('/', actionGetPolicyVersionHandler)
  .route('/', actionGetRoleHandler)
  .route('/', actionGetRolePolicyHandler)
  .route('/', actionGetSamlProviderHandler)
  .route('/', actionGetSshPublicKeyHandler)
  .route('/', actionGetServerCertificateHandler)
  .route('/', actionGetServiceLastAccessedDetailsHandler)
  .route('/', actionGetServiceLastAccessedDetailsWithEntitiesHandler)
  .route('/', actionGetServiceLinkedRoleDeletionStatusHandler)
  .route('/', actionGetUserHandler)
  .route('/', actionGetUserPolicyHandler)
  .route('/', actionListAccessKeysHandler)
  .route('/', actionListAccountAliasesHandler)
  .route('/', actionListAttachedGroupPoliciesHandler)
  .route('/', actionListAttachedRolePoliciesHandler)
  .route('/', actionListAttachedUserPoliciesHandler)
  .route('/', actionListEntitiesForPolicyHandler)
  .route('/', actionListGroupPoliciesHandler)
  .route('/', actionListGroupsHandler)
  .route('/', actionListGroupsForUserHandler)
  .route('/', actionListInstanceProfileTagsHandler)
  .route('/', actionListInstanceProfilesHandler)
  .route('/', actionListInstanceProfilesForRoleHandler)
  .route('/', actionListMfaDeviceTagsHandler)
  .route('/', actionListMfaDevicesHandler)
  .route('/', actionListOpenIdConnectProviderTagsHandler)
  .route('/', actionListOpenIdConnectProvidersHandler)
  .route('/', actionListPoliciesHandler)
  .route('/', actionListPoliciesGrantingServiceAccessHandler)
  .route('/', actionListPolicyTagsHandler)
  .route('/', actionListPolicyVersionsHandler)
  .route('/', actionListRolePoliciesHandler)
  .route('/', actionListRoleTagsHandler)
  .route('/', actionListRolesHandler)
  .route('/', actionListSamlProviderTagsHandler)
  .route('/', actionListSamlProvidersHandler)
  .route('/', actionListSshPublicKeysHandler)
  .route('/', actionListServerCertificateTagsHandler)
  .route('/', actionListServerCertificatesHandler)
  .route('/', actionListServiceSpecificCredentialsHandler)
  .route('/', actionListSigningCertificatesHandler)
  .route('/', actionListUserPoliciesHandler)
  .route('/', actionListUserTagsHandler)
  .route('/', actionListUsersHandler)
  .route('/', actionListVirtualMfaDevicesHandler)
  .route('/', actionPutGroupPolicyHandler)
  .route('/', actionPutRolePermissionsBoundaryHandler)
  .route('/', actionPutRolePolicyHandler)
  .route('/', actionPutUserPermissionsBoundaryHandler)
  .route('/', actionPutUserPolicyHandler)
  .route('/', actionRemoveClientIdFromOpenIdConnectProviderHandler)
  .route('/', actionRemoveRoleFromInstanceProfileHandler)
  .route('/', actionRemoveUserFromGroupHandler)
  .route('/', actionResetServiceSpecificCredentialHandler)
  .route('/', actionResyncMfaDeviceHandler)
  .route('/', actionSetDefaultPolicyVersionHandler)
  .route('/', actionSetSecurityTokenServicePreferencesHandler)
  .route('/', actionSimulateCustomPolicyHandler)
  .route('/', actionSimulatePrincipalPolicyHandler)
  .route('/', actionTagInstanceProfileHandler)
  .route('/', actionTagMfaDeviceHandler)
  .route('/', actionTagOpenIdConnectProviderHandler)
  .route('/', actionTagPolicyHandler)
  .route('/', actionTagRoleHandler)
  .route('/', actionTagSamlProviderHandler)
  .route('/', actionTagServerCertificateHandler)
  .route('/', actionTagUserHandler)
  .route('/', actionUntagInstanceProfileHandler)
  .route('/', actionUntagMfaDeviceHandler)
  .route('/', actionUntagOpenIdConnectProviderHandler)
  .route('/', actionUntagPolicyHandler)
  .route('/', actionUntagRoleHandler)
  .route('/', actionUntagSamlProviderHandler)
  .route('/', actionUntagServerCertificateHandler)
  .route('/', actionUntagUserHandler)
  .route('/', actionUpdateAccessKeyHandler)
  .route('/', actionUpdateAccountPasswordPolicyHandler)
  .route('/', actionUpdateAssumeRolePolicyHandler)
  .route('/', actionUpdateGroupHandler)
  .route('/', actionUpdateLoginProfileHandler)
  .route('/', actionUpdateOpenIdConnectProviderThumbprintHandler)
  .route('/', actionUpdateRoleHandler)
  .route('/', actionUpdateRoleDescriptionHandler)
  .route('/', actionUpdateSamlProviderHandler)
  .route('/', actionUpdateSshPublicKeyHandler)
  .route('/', actionUpdateServerCertificateHandler)
  .route('/', actionUpdateServiceSpecificCredentialHandler)
  .route('/', actionUpdateSigningCertificateHandler)
  .route('/', actionUpdateUserHandler)
  .route('/', actionUploadSshPublicKeyHandler)
  .route('/', actionUploadServerCertificateHandler)
  .route('/', actionUploadSigningCertificateHandler)

export default app

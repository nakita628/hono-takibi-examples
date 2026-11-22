import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddClientIDToOpenIDConnectProviderHandler,
  ActionAddRoleToInstanceProfileHandler,
  ActionAddUserToGroupHandler,
  ActionAttachGroupPolicyHandler,
  ActionAttachRolePolicyHandler,
  ActionAttachUserPolicyHandler,
  ActionChangePasswordHandler,
  ActionCreateAccessKeyHandler,
  ActionCreateAccountAliasHandler,
  ActionCreateGroupHandler,
  ActionCreateInstanceProfileHandler,
  ActionCreateLoginProfileHandler,
  ActionCreateOpenIDConnectProviderHandler,
  ActionCreatePolicyHandler,
  ActionCreatePolicyVersionHandler,
  ActionCreateRoleHandler,
  ActionCreateSAMLProviderHandler,
  ActionCreateServiceLinkedRoleHandler,
  ActionCreateServiceSpecificCredentialHandler,
  ActionCreateUserHandler,
  ActionCreateVirtualMFADeviceHandler,
  ActionDeactivateMFADeviceHandler,
  ActionDeleteAccessKeyHandler,
  ActionDeleteAccountAliasHandler,
  ActionDeleteAccountPasswordPolicyHandler,
  ActionDeleteGroupHandler,
  ActionDeleteGroupPolicyHandler,
  ActionDeleteInstanceProfileHandler,
  ActionDeleteLoginProfileHandler,
  ActionDeleteOpenIDConnectProviderHandler,
  ActionDeletePolicyHandler,
  ActionDeletePolicyVersionHandler,
  ActionDeleteRoleHandler,
  ActionDeleteRolePermissionsBoundaryHandler,
  ActionDeleteRolePolicyHandler,
  ActionDeleteSAMLProviderHandler,
  ActionDeleteServerCertificateHandler,
  ActionDeleteServiceLinkedRoleHandler,
  ActionDeleteServiceSpecificCredentialHandler,
  ActionDeleteSigningCertificateHandler,
  ActionDeleteSSHPublicKeyHandler,
  ActionDeleteUserHandler,
  ActionDeleteUserPermissionsBoundaryHandler,
  ActionDeleteUserPolicyHandler,
  ActionDeleteVirtualMFADeviceHandler,
  ActionDetachGroupPolicyHandler,
  ActionDetachRolePolicyHandler,
  ActionDetachUserPolicyHandler,
  ActionEnableMFADeviceHandler,
  ActionGenerateCredentialReportHandler,
  ActionGenerateOrganizationsAccessReportHandler,
  ActionGenerateServiceLastAccessedDetailsHandler,
  ActionGetAccessKeyLastUsedHandler,
  ActionGetAccountAuthorizationDetailsHandler,
  ActionGetAccountPasswordPolicyHandler,
  ActionGetAccountSummaryHandler,
  ActionGetContextKeysForCustomPolicyHandler,
  ActionGetContextKeysForPrincipalPolicyHandler,
  ActionGetCredentialReportHandler,
  ActionGetGroupHandler,
  ActionGetGroupPolicyHandler,
  ActionGetInstanceProfileHandler,
  ActionGetLoginProfileHandler,
  ActionGetMFADeviceHandler,
  ActionGetOpenIDConnectProviderHandler,
  ActionGetOrganizationsAccessReportHandler,
  ActionGetPolicyHandler,
  ActionGetPolicyVersionHandler,
  ActionGetRoleHandler,
  ActionGetRolePolicyHandler,
  ActionGetSAMLProviderHandler,
  ActionGetServerCertificateHandler,
  ActionGetServiceLastAccessedDetailsHandler,
  ActionGetServiceLastAccessedDetailsWithEntitiesHandler,
  ActionGetServiceLinkedRoleDeletionStatusHandler,
  ActionGetSSHPublicKeyHandler,
  ActionGetUserHandler,
  ActionGetUserPolicyHandler,
  ActionListAccessKeysHandler,
  ActionListAccountAliasesHandler,
  ActionListAttachedGroupPoliciesHandler,
  ActionListAttachedRolePoliciesHandler,
  ActionListAttachedUserPoliciesHandler,
  ActionListEntitiesForPolicyHandler,
  ActionListGroupPoliciesHandler,
  ActionListGroupsForUserHandler,
  ActionListGroupsHandler,
  ActionListInstanceProfilesForRoleHandler,
  ActionListInstanceProfilesHandler,
  ActionListInstanceProfileTagsHandler,
  ActionListMFADevicesHandler,
  ActionListMFADeviceTagsHandler,
  ActionListOpenIDConnectProvidersHandler,
  ActionListOpenIDConnectProviderTagsHandler,
  ActionListPoliciesGrantingServiceAccessHandler,
  ActionListPoliciesHandler,
  ActionListPolicyTagsHandler,
  ActionListPolicyVersionsHandler,
  ActionListRolePoliciesHandler,
  ActionListRolesHandler,
  ActionListRoleTagsHandler,
  ActionListSAMLProvidersHandler,
  ActionListSAMLProviderTagsHandler,
  ActionListServerCertificatesHandler,
  ActionListServerCertificateTagsHandler,
  ActionListServiceSpecificCredentialsHandler,
  ActionListSigningCertificatesHandler,
  ActionListSSHPublicKeysHandler,
  ActionListUserPoliciesHandler,
  ActionListUsersHandler,
  ActionListUserTagsHandler,
  ActionListVirtualMFADevicesHandler,
  ActionPutGroupPolicyHandler,
  ActionPutRolePermissionsBoundaryHandler,
  ActionPutRolePolicyHandler,
  ActionPutUserPermissionsBoundaryHandler,
  ActionPutUserPolicyHandler,
  ActionRemoveClientIDFromOpenIDConnectProviderHandler,
  ActionRemoveRoleFromInstanceProfileHandler,
  ActionRemoveUserFromGroupHandler,
  ActionResetServiceSpecificCredentialHandler,
  ActionResyncMFADeviceHandler,
  ActionSetDefaultPolicyVersionHandler,
  ActionSetSecurityTokenServicePreferencesHandler,
  ActionSimulateCustomPolicyHandler,
  ActionSimulatePrincipalPolicyHandler,
  ActionTagInstanceProfileHandler,
  ActionTagMFADeviceHandler,
  ActionTagOpenIDConnectProviderHandler,
  ActionTagPolicyHandler,
  ActionTagRoleHandler,
  ActionTagSAMLProviderHandler,
  ActionTagServerCertificateHandler,
  ActionTagUserHandler,
  ActionUntagInstanceProfileHandler,
  ActionUntagMFADeviceHandler,
  ActionUntagOpenIDConnectProviderHandler,
  ActionUntagPolicyHandler,
  ActionUntagRoleHandler,
  ActionUntagSAMLProviderHandler,
  ActionUntagServerCertificateHandler,
  ActionUntagUserHandler,
  ActionUpdateAccessKeyHandler,
  ActionUpdateAccountPasswordPolicyHandler,
  ActionUpdateAssumeRolePolicyHandler,
  ActionUpdateGroupHandler,
  ActionUpdateLoginProfileHandler,
  ActionUpdateOpenIDConnectProviderThumbprintHandler,
  ActionUpdateRoleDescriptionHandler,
  ActionUpdateRoleHandler,
  ActionUpdateSAMLProviderHandler,
  ActionUpdateServerCertificateHandler,
  ActionUpdateServiceSpecificCredentialHandler,
  ActionUpdateSigningCertificateHandler,
  ActionUpdateSSHPublicKeyHandler,
  ActionUpdateUserHandler,
  ActionUploadServerCertificateHandler,
  ActionUploadSigningCertificateHandler,
  ActionUploadSSHPublicKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddClientIDToOpenIDConnectProviderHandler)
  .route('/', ActionAddRoleToInstanceProfileHandler)
  .route('/', ActionAddUserToGroupHandler)
  .route('/', ActionAttachGroupPolicyHandler)
  .route('/', ActionAttachRolePolicyHandler)
  .route('/', ActionAttachUserPolicyHandler)
  .route('/', ActionChangePasswordHandler)
  .route('/', ActionCreateAccessKeyHandler)
  .route('/', ActionCreateAccountAliasHandler)
  .route('/', ActionCreateGroupHandler)
  .route('/', ActionCreateInstanceProfileHandler)
  .route('/', ActionCreateLoginProfileHandler)
  .route('/', ActionCreateOpenIDConnectProviderHandler)
  .route('/', ActionCreatePolicyHandler)
  .route('/', ActionCreatePolicyVersionHandler)
  .route('/', ActionCreateRoleHandler)
  .route('/', ActionCreateSAMLProviderHandler)
  .route('/', ActionCreateServiceLinkedRoleHandler)
  .route('/', ActionCreateServiceSpecificCredentialHandler)
  .route('/', ActionCreateUserHandler)
  .route('/', ActionCreateVirtualMFADeviceHandler)
  .route('/', ActionDeactivateMFADeviceHandler)
  .route('/', ActionDeleteAccessKeyHandler)
  .route('/', ActionDeleteAccountAliasHandler)
  .route('/', ActionDeleteAccountPasswordPolicyHandler)
  .route('/', ActionDeleteGroupHandler)
  .route('/', ActionDeleteGroupPolicyHandler)
  .route('/', ActionDeleteInstanceProfileHandler)
  .route('/', ActionDeleteLoginProfileHandler)
  .route('/', ActionDeleteOpenIDConnectProviderHandler)
  .route('/', ActionDeletePolicyHandler)
  .route('/', ActionDeletePolicyVersionHandler)
  .route('/', ActionDeleteRoleHandler)
  .route('/', ActionDeleteRolePermissionsBoundaryHandler)
  .route('/', ActionDeleteRolePolicyHandler)
  .route('/', ActionDeleteSAMLProviderHandler)
  .route('/', ActionDeleteSSHPublicKeyHandler)
  .route('/', ActionDeleteServerCertificateHandler)
  .route('/', ActionDeleteServiceLinkedRoleHandler)
  .route('/', ActionDeleteServiceSpecificCredentialHandler)
  .route('/', ActionDeleteSigningCertificateHandler)
  .route('/', ActionDeleteUserHandler)
  .route('/', ActionDeleteUserPermissionsBoundaryHandler)
  .route('/', ActionDeleteUserPolicyHandler)
  .route('/', ActionDeleteVirtualMFADeviceHandler)
  .route('/', ActionDetachGroupPolicyHandler)
  .route('/', ActionDetachRolePolicyHandler)
  .route('/', ActionDetachUserPolicyHandler)
  .route('/', ActionEnableMFADeviceHandler)
  .route('/', ActionGenerateCredentialReportHandler)
  .route('/', ActionGenerateOrganizationsAccessReportHandler)
  .route('/', ActionGenerateServiceLastAccessedDetailsHandler)
  .route('/', ActionGetAccessKeyLastUsedHandler)
  .route('/', ActionGetAccountAuthorizationDetailsHandler)
  .route('/', ActionGetAccountPasswordPolicyHandler)
  .route('/', ActionGetAccountSummaryHandler)
  .route('/', ActionGetContextKeysForCustomPolicyHandler)
  .route('/', ActionGetContextKeysForPrincipalPolicyHandler)
  .route('/', ActionGetCredentialReportHandler)
  .route('/', ActionGetGroupHandler)
  .route('/', ActionGetGroupPolicyHandler)
  .route('/', ActionGetInstanceProfileHandler)
  .route('/', ActionGetLoginProfileHandler)
  .route('/', ActionGetMFADeviceHandler)
  .route('/', ActionGetOpenIDConnectProviderHandler)
  .route('/', ActionGetOrganizationsAccessReportHandler)
  .route('/', ActionGetPolicyHandler)
  .route('/', ActionGetPolicyVersionHandler)
  .route('/', ActionGetRoleHandler)
  .route('/', ActionGetRolePolicyHandler)
  .route('/', ActionGetSAMLProviderHandler)
  .route('/', ActionGetSSHPublicKeyHandler)
  .route('/', ActionGetServerCertificateHandler)
  .route('/', ActionGetServiceLastAccessedDetailsHandler)
  .route('/', ActionGetServiceLastAccessedDetailsWithEntitiesHandler)
  .route('/', ActionGetServiceLinkedRoleDeletionStatusHandler)
  .route('/', ActionGetUserHandler)
  .route('/', ActionGetUserPolicyHandler)
  .route('/', ActionListAccessKeysHandler)
  .route('/', ActionListAccountAliasesHandler)
  .route('/', ActionListAttachedGroupPoliciesHandler)
  .route('/', ActionListAttachedRolePoliciesHandler)
  .route('/', ActionListAttachedUserPoliciesHandler)
  .route('/', ActionListEntitiesForPolicyHandler)
  .route('/', ActionListGroupPoliciesHandler)
  .route('/', ActionListGroupsHandler)
  .route('/', ActionListGroupsForUserHandler)
  .route('/', ActionListInstanceProfileTagsHandler)
  .route('/', ActionListInstanceProfilesHandler)
  .route('/', ActionListInstanceProfilesForRoleHandler)
  .route('/', ActionListMFADeviceTagsHandler)
  .route('/', ActionListMFADevicesHandler)
  .route('/', ActionListOpenIDConnectProviderTagsHandler)
  .route('/', ActionListOpenIDConnectProvidersHandler)
  .route('/', ActionListPoliciesHandler)
  .route('/', ActionListPoliciesGrantingServiceAccessHandler)
  .route('/', ActionListPolicyTagsHandler)
  .route('/', ActionListPolicyVersionsHandler)
  .route('/', ActionListRolePoliciesHandler)
  .route('/', ActionListRoleTagsHandler)
  .route('/', ActionListRolesHandler)
  .route('/', ActionListSAMLProviderTagsHandler)
  .route('/', ActionListSAMLProvidersHandler)
  .route('/', ActionListSSHPublicKeysHandler)
  .route('/', ActionListServerCertificateTagsHandler)
  .route('/', ActionListServerCertificatesHandler)
  .route('/', ActionListServiceSpecificCredentialsHandler)
  .route('/', ActionListSigningCertificatesHandler)
  .route('/', ActionListUserPoliciesHandler)
  .route('/', ActionListUserTagsHandler)
  .route('/', ActionListUsersHandler)
  .route('/', ActionListVirtualMFADevicesHandler)
  .route('/', ActionPutGroupPolicyHandler)
  .route('/', ActionPutRolePermissionsBoundaryHandler)
  .route('/', ActionPutRolePolicyHandler)
  .route('/', ActionPutUserPermissionsBoundaryHandler)
  .route('/', ActionPutUserPolicyHandler)
  .route('/', ActionRemoveClientIDFromOpenIDConnectProviderHandler)
  .route('/', ActionRemoveRoleFromInstanceProfileHandler)
  .route('/', ActionRemoveUserFromGroupHandler)
  .route('/', ActionResetServiceSpecificCredentialHandler)
  .route('/', ActionResyncMFADeviceHandler)
  .route('/', ActionSetDefaultPolicyVersionHandler)
  .route('/', ActionSetSecurityTokenServicePreferencesHandler)
  .route('/', ActionSimulateCustomPolicyHandler)
  .route('/', ActionSimulatePrincipalPolicyHandler)
  .route('/', ActionTagInstanceProfileHandler)
  .route('/', ActionTagMFADeviceHandler)
  .route('/', ActionTagOpenIDConnectProviderHandler)
  .route('/', ActionTagPolicyHandler)
  .route('/', ActionTagRoleHandler)
  .route('/', ActionTagSAMLProviderHandler)
  .route('/', ActionTagServerCertificateHandler)
  .route('/', ActionTagUserHandler)
  .route('/', ActionUntagInstanceProfileHandler)
  .route('/', ActionUntagMFADeviceHandler)
  .route('/', ActionUntagOpenIDConnectProviderHandler)
  .route('/', ActionUntagPolicyHandler)
  .route('/', ActionUntagRoleHandler)
  .route('/', ActionUntagSAMLProviderHandler)
  .route('/', ActionUntagServerCertificateHandler)
  .route('/', ActionUntagUserHandler)
  .route('/', ActionUpdateAccessKeyHandler)
  .route('/', ActionUpdateAccountPasswordPolicyHandler)
  .route('/', ActionUpdateAssumeRolePolicyHandler)
  .route('/', ActionUpdateGroupHandler)
  .route('/', ActionUpdateLoginProfileHandler)
  .route('/', ActionUpdateOpenIDConnectProviderThumbprintHandler)
  .route('/', ActionUpdateRoleHandler)
  .route('/', ActionUpdateRoleDescriptionHandler)
  .route('/', ActionUpdateSAMLProviderHandler)
  .route('/', ActionUpdateSSHPublicKeyHandler)
  .route('/', ActionUpdateServerCertificateHandler)
  .route('/', ActionUpdateServiceSpecificCredentialHandler)
  .route('/', ActionUpdateSigningCertificateHandler)
  .route('/', ActionUpdateUserHandler)
  .route('/', ActionUploadSSHPublicKeyHandler)
  .route('/', ActionUploadServerCertificateHandler)
  .route('/', ActionUploadSigningCertificateHandler)

export default app

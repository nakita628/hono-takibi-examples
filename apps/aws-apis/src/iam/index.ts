import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddClientIDToOpenIDConnectProviderRoute,
  getActionAddRoleToInstanceProfileRoute,
  getActionAddUserToGroupRoute,
  getActionAttachGroupPolicyRoute,
  getActionAttachRolePolicyRoute,
  getActionAttachUserPolicyRoute,
  getActionChangePasswordRoute,
  getActionCreateAccessKeyRoute,
  getActionCreateAccountAliasRoute,
  getActionCreateGroupRoute,
  getActionCreateInstanceProfileRoute,
  getActionCreateLoginProfileRoute,
  getActionCreateOpenIDConnectProviderRoute,
  getActionCreatePolicyRoute,
  getActionCreatePolicyVersionRoute,
  getActionCreateRoleRoute,
  getActionCreateSAMLProviderRoute,
  getActionCreateServiceLinkedRoleRoute,
  getActionCreateServiceSpecificCredentialRoute,
  getActionCreateUserRoute,
  getActionCreateVirtualMFADeviceRoute,
  getActionDeactivateMFADeviceRoute,
  getActionDeleteAccessKeyRoute,
  getActionDeleteAccountAliasRoute,
  getActionDeleteAccountPasswordPolicyRoute,
  getActionDeleteGroupPolicyRoute,
  getActionDeleteGroupRoute,
  getActionDeleteInstanceProfileRoute,
  getActionDeleteLoginProfileRoute,
  getActionDeleteOpenIDConnectProviderRoute,
  getActionDeletePolicyRoute,
  getActionDeletePolicyVersionRoute,
  getActionDeleteRolePermissionsBoundaryRoute,
  getActionDeleteRolePolicyRoute,
  getActionDeleteRoleRoute,
  getActionDeleteSAMLProviderRoute,
  getActionDeleteServerCertificateRoute,
  getActionDeleteServiceLinkedRoleRoute,
  getActionDeleteServiceSpecificCredentialRoute,
  getActionDeleteSigningCertificateRoute,
  getActionDeleteSSHPublicKeyRoute,
  getActionDeleteUserPermissionsBoundaryRoute,
  getActionDeleteUserPolicyRoute,
  getActionDeleteUserRoute,
  getActionDeleteVirtualMFADeviceRoute,
  getActionDetachGroupPolicyRoute,
  getActionDetachRolePolicyRoute,
  getActionDetachUserPolicyRoute,
  getActionEnableMFADeviceRoute,
  getActionGenerateCredentialReportRoute,
  getActionGenerateOrganizationsAccessReportRoute,
  getActionGenerateServiceLastAccessedDetailsRoute,
  getActionGetAccessKeyLastUsedRoute,
  getActionGetAccountAuthorizationDetailsRoute,
  getActionGetAccountPasswordPolicyRoute,
  getActionGetAccountSummaryRoute,
  getActionGetContextKeysForCustomPolicyRoute,
  getActionGetContextKeysForPrincipalPolicyRoute,
  getActionGetCredentialReportRoute,
  getActionGetGroupPolicyRoute,
  getActionGetGroupRoute,
  getActionGetInstanceProfileRoute,
  getActionGetLoginProfileRoute,
  getActionGetMFADeviceRoute,
  getActionGetOpenIDConnectProviderRoute,
  getActionGetOrganizationsAccessReportRoute,
  getActionGetPolicyRoute,
  getActionGetPolicyVersionRoute,
  getActionGetRolePolicyRoute,
  getActionGetRoleRoute,
  getActionGetSAMLProviderRoute,
  getActionGetServerCertificateRoute,
  getActionGetServiceLastAccessedDetailsRoute,
  getActionGetServiceLastAccessedDetailsWithEntitiesRoute,
  getActionGetServiceLinkedRoleDeletionStatusRoute,
  getActionGetSSHPublicKeyRoute,
  getActionGetUserPolicyRoute,
  getActionGetUserRoute,
  getActionListAccessKeysRoute,
  getActionListAccountAliasesRoute,
  getActionListAttachedGroupPoliciesRoute,
  getActionListAttachedRolePoliciesRoute,
  getActionListAttachedUserPoliciesRoute,
  getActionListEntitiesForPolicyRoute,
  getActionListGroupPoliciesRoute,
  getActionListGroupsForUserRoute,
  getActionListGroupsRoute,
  getActionListInstanceProfilesForRoleRoute,
  getActionListInstanceProfilesRoute,
  getActionListInstanceProfileTagsRoute,
  getActionListMFADevicesRoute,
  getActionListMFADeviceTagsRoute,
  getActionListOpenIDConnectProvidersRoute,
  getActionListOpenIDConnectProviderTagsRoute,
  getActionListPoliciesGrantingServiceAccessRoute,
  getActionListPoliciesRoute,
  getActionListPolicyTagsRoute,
  getActionListPolicyVersionsRoute,
  getActionListRolePoliciesRoute,
  getActionListRolesRoute,
  getActionListRoleTagsRoute,
  getActionListSAMLProvidersRoute,
  getActionListSAMLProviderTagsRoute,
  getActionListServerCertificatesRoute,
  getActionListServerCertificateTagsRoute,
  getActionListServiceSpecificCredentialsRoute,
  getActionListSigningCertificatesRoute,
  getActionListSSHPublicKeysRoute,
  getActionListUserPoliciesRoute,
  getActionListUsersRoute,
  getActionListUserTagsRoute,
  getActionListVirtualMFADevicesRoute,
  getActionPutGroupPolicyRoute,
  getActionPutRolePermissionsBoundaryRoute,
  getActionPutRolePolicyRoute,
  getActionPutUserPermissionsBoundaryRoute,
  getActionPutUserPolicyRoute,
  getActionRemoveClientIDFromOpenIDConnectProviderRoute,
  getActionRemoveRoleFromInstanceProfileRoute,
  getActionRemoveUserFromGroupRoute,
  getActionResetServiceSpecificCredentialRoute,
  getActionResyncMFADeviceRoute,
  getActionSetDefaultPolicyVersionRoute,
  getActionSetSecurityTokenServicePreferencesRoute,
  getActionSimulateCustomPolicyRoute,
  getActionSimulatePrincipalPolicyRoute,
  getActionTagInstanceProfileRoute,
  getActionTagMFADeviceRoute,
  getActionTagOpenIDConnectProviderRoute,
  getActionTagPolicyRoute,
  getActionTagRoleRoute,
  getActionTagSAMLProviderRoute,
  getActionTagServerCertificateRoute,
  getActionTagUserRoute,
  getActionUntagInstanceProfileRoute,
  getActionUntagMFADeviceRoute,
  getActionUntagOpenIDConnectProviderRoute,
  getActionUntagPolicyRoute,
  getActionUntagRoleRoute,
  getActionUntagSAMLProviderRoute,
  getActionUntagServerCertificateRoute,
  getActionUntagUserRoute,
  getActionUpdateAccessKeyRoute,
  getActionUpdateAccountPasswordPolicyRoute,
  getActionUpdateAssumeRolePolicyRoute,
  getActionUpdateGroupRoute,
  getActionUpdateLoginProfileRoute,
  getActionUpdateOpenIDConnectProviderThumbprintRoute,
  getActionUpdateRoleDescriptionRoute,
  getActionUpdateRoleRoute,
  getActionUpdateSAMLProviderRoute,
  getActionUpdateServerCertificateRoute,
  getActionUpdateServiceSpecificCredentialRoute,
  getActionUpdateSigningCertificateRoute,
  getActionUpdateSSHPublicKeyRoute,
  getActionUpdateUserRoute,
  getActionUploadServerCertificateRoute,
  getActionUploadSigningCertificateRoute,
  getActionUploadSSHPublicKeyRoute,
  postActionAddClientIDToOpenIDConnectProviderRoute,
  postActionAddRoleToInstanceProfileRoute,
  postActionAddUserToGroupRoute,
  postActionAttachGroupPolicyRoute,
  postActionAttachRolePolicyRoute,
  postActionAttachUserPolicyRoute,
  postActionChangePasswordRoute,
  postActionCreateAccessKeyRoute,
  postActionCreateAccountAliasRoute,
  postActionCreateGroupRoute,
  postActionCreateInstanceProfileRoute,
  postActionCreateLoginProfileRoute,
  postActionCreateOpenIDConnectProviderRoute,
  postActionCreatePolicyRoute,
  postActionCreatePolicyVersionRoute,
  postActionCreateRoleRoute,
  postActionCreateSAMLProviderRoute,
  postActionCreateServiceLinkedRoleRoute,
  postActionCreateServiceSpecificCredentialRoute,
  postActionCreateUserRoute,
  postActionCreateVirtualMFADeviceRoute,
  postActionDeactivateMFADeviceRoute,
  postActionDeleteAccessKeyRoute,
  postActionDeleteAccountAliasRoute,
  postActionDeleteAccountPasswordPolicyRoute,
  postActionDeleteGroupPolicyRoute,
  postActionDeleteGroupRoute,
  postActionDeleteInstanceProfileRoute,
  postActionDeleteLoginProfileRoute,
  postActionDeleteOpenIDConnectProviderRoute,
  postActionDeletePolicyRoute,
  postActionDeletePolicyVersionRoute,
  postActionDeleteRolePermissionsBoundaryRoute,
  postActionDeleteRolePolicyRoute,
  postActionDeleteRoleRoute,
  postActionDeleteSAMLProviderRoute,
  postActionDeleteServerCertificateRoute,
  postActionDeleteServiceLinkedRoleRoute,
  postActionDeleteServiceSpecificCredentialRoute,
  postActionDeleteSigningCertificateRoute,
  postActionDeleteSSHPublicKeyRoute,
  postActionDeleteUserPermissionsBoundaryRoute,
  postActionDeleteUserPolicyRoute,
  postActionDeleteUserRoute,
  postActionDeleteVirtualMFADeviceRoute,
  postActionDetachGroupPolicyRoute,
  postActionDetachRolePolicyRoute,
  postActionDetachUserPolicyRoute,
  postActionEnableMFADeviceRoute,
  postActionGenerateCredentialReportRoute,
  postActionGenerateOrganizationsAccessReportRoute,
  postActionGenerateServiceLastAccessedDetailsRoute,
  postActionGetAccessKeyLastUsedRoute,
  postActionGetAccountAuthorizationDetailsRoute,
  postActionGetAccountPasswordPolicyRoute,
  postActionGetAccountSummaryRoute,
  postActionGetContextKeysForCustomPolicyRoute,
  postActionGetContextKeysForPrincipalPolicyRoute,
  postActionGetCredentialReportRoute,
  postActionGetGroupPolicyRoute,
  postActionGetGroupRoute,
  postActionGetInstanceProfileRoute,
  postActionGetLoginProfileRoute,
  postActionGetMFADeviceRoute,
  postActionGetOpenIDConnectProviderRoute,
  postActionGetOrganizationsAccessReportRoute,
  postActionGetPolicyRoute,
  postActionGetPolicyVersionRoute,
  postActionGetRolePolicyRoute,
  postActionGetRoleRoute,
  postActionGetSAMLProviderRoute,
  postActionGetServerCertificateRoute,
  postActionGetServiceLastAccessedDetailsRoute,
  postActionGetServiceLastAccessedDetailsWithEntitiesRoute,
  postActionGetServiceLinkedRoleDeletionStatusRoute,
  postActionGetSSHPublicKeyRoute,
  postActionGetUserPolicyRoute,
  postActionGetUserRoute,
  postActionListAccessKeysRoute,
  postActionListAccountAliasesRoute,
  postActionListAttachedGroupPoliciesRoute,
  postActionListAttachedRolePoliciesRoute,
  postActionListAttachedUserPoliciesRoute,
  postActionListEntitiesForPolicyRoute,
  postActionListGroupPoliciesRoute,
  postActionListGroupsForUserRoute,
  postActionListGroupsRoute,
  postActionListInstanceProfilesForRoleRoute,
  postActionListInstanceProfilesRoute,
  postActionListInstanceProfileTagsRoute,
  postActionListMFADevicesRoute,
  postActionListMFADeviceTagsRoute,
  postActionListOpenIDConnectProvidersRoute,
  postActionListOpenIDConnectProviderTagsRoute,
  postActionListPoliciesGrantingServiceAccessRoute,
  postActionListPoliciesRoute,
  postActionListPolicyTagsRoute,
  postActionListPolicyVersionsRoute,
  postActionListRolePoliciesRoute,
  postActionListRolesRoute,
  postActionListRoleTagsRoute,
  postActionListSAMLProvidersRoute,
  postActionListSAMLProviderTagsRoute,
  postActionListServerCertificatesRoute,
  postActionListServerCertificateTagsRoute,
  postActionListServiceSpecificCredentialsRoute,
  postActionListSigningCertificatesRoute,
  postActionListSSHPublicKeysRoute,
  postActionListUserPoliciesRoute,
  postActionListUsersRoute,
  postActionListUserTagsRoute,
  postActionListVirtualMFADevicesRoute,
  postActionPutGroupPolicyRoute,
  postActionPutRolePermissionsBoundaryRoute,
  postActionPutRolePolicyRoute,
  postActionPutUserPermissionsBoundaryRoute,
  postActionPutUserPolicyRoute,
  postActionRemoveClientIDFromOpenIDConnectProviderRoute,
  postActionRemoveRoleFromInstanceProfileRoute,
  postActionRemoveUserFromGroupRoute,
  postActionResetServiceSpecificCredentialRoute,
  postActionResyncMFADeviceRoute,
  postActionSetDefaultPolicyVersionRoute,
  postActionSetSecurityTokenServicePreferencesRoute,
  postActionSimulateCustomPolicyRoute,
  postActionSimulatePrincipalPolicyRoute,
  postActionTagInstanceProfileRoute,
  postActionTagMFADeviceRoute,
  postActionTagOpenIDConnectProviderRoute,
  postActionTagPolicyRoute,
  postActionTagRoleRoute,
  postActionTagSAMLProviderRoute,
  postActionTagServerCertificateRoute,
  postActionTagUserRoute,
  postActionUntagInstanceProfileRoute,
  postActionUntagMFADeviceRoute,
  postActionUntagOpenIDConnectProviderRoute,
  postActionUntagPolicyRoute,
  postActionUntagRoleRoute,
  postActionUntagSAMLProviderRoute,
  postActionUntagServerCertificateRoute,
  postActionUntagUserRoute,
  postActionUpdateAccessKeyRoute,
  postActionUpdateAccountPasswordPolicyRoute,
  postActionUpdateAssumeRolePolicyRoute,
  postActionUpdateGroupRoute,
  postActionUpdateLoginProfileRoute,
  postActionUpdateOpenIDConnectProviderThumbprintRoute,
  postActionUpdateRoleDescriptionRoute,
  postActionUpdateRoleRoute,
  postActionUpdateSAMLProviderRoute,
  postActionUpdateServerCertificateRoute,
  postActionUpdateServiceSpecificCredentialRoute,
  postActionUpdateSigningCertificateRoute,
  postActionUpdateSSHPublicKeyRoute,
  postActionUpdateUserRoute,
  postActionUploadServerCertificateRoute,
  postActionUploadSigningCertificateRoute,
  postActionUploadSSHPublicKeyRoute,
} from './routes'
import {
  getActionAddClientIDToOpenIDConnectProviderRouteHandler,
  getActionAddRoleToInstanceProfileRouteHandler,
  getActionAddUserToGroupRouteHandler,
  getActionAttachGroupPolicyRouteHandler,
  getActionAttachRolePolicyRouteHandler,
  getActionAttachUserPolicyRouteHandler,
  getActionChangePasswordRouteHandler,
  getActionCreateAccessKeyRouteHandler,
  getActionCreateAccountAliasRouteHandler,
  getActionCreateGroupRouteHandler,
  getActionCreateInstanceProfileRouteHandler,
  getActionCreateLoginProfileRouteHandler,
  getActionCreateOpenIDConnectProviderRouteHandler,
  getActionCreatePolicyRouteHandler,
  getActionCreatePolicyVersionRouteHandler,
  getActionCreateRoleRouteHandler,
  getActionCreateSAMLProviderRouteHandler,
  getActionCreateServiceLinkedRoleRouteHandler,
  getActionCreateServiceSpecificCredentialRouteHandler,
  getActionCreateUserRouteHandler,
  getActionCreateVirtualMFADeviceRouteHandler,
  getActionDeactivateMFADeviceRouteHandler,
  getActionDeleteAccessKeyRouteHandler,
  getActionDeleteAccountAliasRouteHandler,
  getActionDeleteAccountPasswordPolicyRouteHandler,
  getActionDeleteGroupPolicyRouteHandler,
  getActionDeleteGroupRouteHandler,
  getActionDeleteInstanceProfileRouteHandler,
  getActionDeleteLoginProfileRouteHandler,
  getActionDeleteOpenIDConnectProviderRouteHandler,
  getActionDeletePolicyRouteHandler,
  getActionDeletePolicyVersionRouteHandler,
  getActionDeleteRolePermissionsBoundaryRouteHandler,
  getActionDeleteRolePolicyRouteHandler,
  getActionDeleteRoleRouteHandler,
  getActionDeleteSAMLProviderRouteHandler,
  getActionDeleteServerCertificateRouteHandler,
  getActionDeleteServiceLinkedRoleRouteHandler,
  getActionDeleteServiceSpecificCredentialRouteHandler,
  getActionDeleteSigningCertificateRouteHandler,
  getActionDeleteSSHPublicKeyRouteHandler,
  getActionDeleteUserPermissionsBoundaryRouteHandler,
  getActionDeleteUserPolicyRouteHandler,
  getActionDeleteUserRouteHandler,
  getActionDeleteVirtualMFADeviceRouteHandler,
  getActionDetachGroupPolicyRouteHandler,
  getActionDetachRolePolicyRouteHandler,
  getActionDetachUserPolicyRouteHandler,
  getActionEnableMFADeviceRouteHandler,
  getActionGenerateCredentialReportRouteHandler,
  getActionGenerateOrganizationsAccessReportRouteHandler,
  getActionGenerateServiceLastAccessedDetailsRouteHandler,
  getActionGetAccessKeyLastUsedRouteHandler,
  getActionGetAccountAuthorizationDetailsRouteHandler,
  getActionGetAccountPasswordPolicyRouteHandler,
  getActionGetAccountSummaryRouteHandler,
  getActionGetContextKeysForCustomPolicyRouteHandler,
  getActionGetContextKeysForPrincipalPolicyRouteHandler,
  getActionGetCredentialReportRouteHandler,
  getActionGetGroupPolicyRouteHandler,
  getActionGetGroupRouteHandler,
  getActionGetInstanceProfileRouteHandler,
  getActionGetLoginProfileRouteHandler,
  getActionGetMFADeviceRouteHandler,
  getActionGetOpenIDConnectProviderRouteHandler,
  getActionGetOrganizationsAccessReportRouteHandler,
  getActionGetPolicyRouteHandler,
  getActionGetPolicyVersionRouteHandler,
  getActionGetRolePolicyRouteHandler,
  getActionGetRoleRouteHandler,
  getActionGetSAMLProviderRouteHandler,
  getActionGetServerCertificateRouteHandler,
  getActionGetServiceLastAccessedDetailsRouteHandler,
  getActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler,
  getActionGetServiceLinkedRoleDeletionStatusRouteHandler,
  getActionGetSSHPublicKeyRouteHandler,
  getActionGetUserPolicyRouteHandler,
  getActionGetUserRouteHandler,
  getActionListAccessKeysRouteHandler,
  getActionListAccountAliasesRouteHandler,
  getActionListAttachedGroupPoliciesRouteHandler,
  getActionListAttachedRolePoliciesRouteHandler,
  getActionListAttachedUserPoliciesRouteHandler,
  getActionListEntitiesForPolicyRouteHandler,
  getActionListGroupPoliciesRouteHandler,
  getActionListGroupsForUserRouteHandler,
  getActionListGroupsRouteHandler,
  getActionListInstanceProfilesForRoleRouteHandler,
  getActionListInstanceProfilesRouteHandler,
  getActionListInstanceProfileTagsRouteHandler,
  getActionListMFADevicesRouteHandler,
  getActionListMFADeviceTagsRouteHandler,
  getActionListOpenIDConnectProvidersRouteHandler,
  getActionListOpenIDConnectProviderTagsRouteHandler,
  getActionListPoliciesGrantingServiceAccessRouteHandler,
  getActionListPoliciesRouteHandler,
  getActionListPolicyTagsRouteHandler,
  getActionListPolicyVersionsRouteHandler,
  getActionListRolePoliciesRouteHandler,
  getActionListRolesRouteHandler,
  getActionListRoleTagsRouteHandler,
  getActionListSAMLProvidersRouteHandler,
  getActionListSAMLProviderTagsRouteHandler,
  getActionListServerCertificatesRouteHandler,
  getActionListServerCertificateTagsRouteHandler,
  getActionListServiceSpecificCredentialsRouteHandler,
  getActionListSigningCertificatesRouteHandler,
  getActionListSSHPublicKeysRouteHandler,
  getActionListUserPoliciesRouteHandler,
  getActionListUsersRouteHandler,
  getActionListUserTagsRouteHandler,
  getActionListVirtualMFADevicesRouteHandler,
  getActionPutGroupPolicyRouteHandler,
  getActionPutRolePermissionsBoundaryRouteHandler,
  getActionPutRolePolicyRouteHandler,
  getActionPutUserPermissionsBoundaryRouteHandler,
  getActionPutUserPolicyRouteHandler,
  getActionRemoveClientIDFromOpenIDConnectProviderRouteHandler,
  getActionRemoveRoleFromInstanceProfileRouteHandler,
  getActionRemoveUserFromGroupRouteHandler,
  getActionResetServiceSpecificCredentialRouteHandler,
  getActionResyncMFADeviceRouteHandler,
  getActionSetDefaultPolicyVersionRouteHandler,
  getActionSetSecurityTokenServicePreferencesRouteHandler,
  getActionSimulateCustomPolicyRouteHandler,
  getActionSimulatePrincipalPolicyRouteHandler,
  getActionTagInstanceProfileRouteHandler,
  getActionTagMFADeviceRouteHandler,
  getActionTagOpenIDConnectProviderRouteHandler,
  getActionTagPolicyRouteHandler,
  getActionTagRoleRouteHandler,
  getActionTagSAMLProviderRouteHandler,
  getActionTagServerCertificateRouteHandler,
  getActionTagUserRouteHandler,
  getActionUntagInstanceProfileRouteHandler,
  getActionUntagMFADeviceRouteHandler,
  getActionUntagOpenIDConnectProviderRouteHandler,
  getActionUntagPolicyRouteHandler,
  getActionUntagRoleRouteHandler,
  getActionUntagSAMLProviderRouteHandler,
  getActionUntagServerCertificateRouteHandler,
  getActionUntagUserRouteHandler,
  getActionUpdateAccessKeyRouteHandler,
  getActionUpdateAccountPasswordPolicyRouteHandler,
  getActionUpdateAssumeRolePolicyRouteHandler,
  getActionUpdateGroupRouteHandler,
  getActionUpdateLoginProfileRouteHandler,
  getActionUpdateOpenIDConnectProviderThumbprintRouteHandler,
  getActionUpdateRoleDescriptionRouteHandler,
  getActionUpdateRoleRouteHandler,
  getActionUpdateSAMLProviderRouteHandler,
  getActionUpdateServerCertificateRouteHandler,
  getActionUpdateServiceSpecificCredentialRouteHandler,
  getActionUpdateSigningCertificateRouteHandler,
  getActionUpdateSSHPublicKeyRouteHandler,
  getActionUpdateUserRouteHandler,
  getActionUploadServerCertificateRouteHandler,
  getActionUploadSigningCertificateRouteHandler,
  getActionUploadSSHPublicKeyRouteHandler,
  postActionAddClientIDToOpenIDConnectProviderRouteHandler,
  postActionAddRoleToInstanceProfileRouteHandler,
  postActionAddUserToGroupRouteHandler,
  postActionAttachGroupPolicyRouteHandler,
  postActionAttachRolePolicyRouteHandler,
  postActionAttachUserPolicyRouteHandler,
  postActionChangePasswordRouteHandler,
  postActionCreateAccessKeyRouteHandler,
  postActionCreateAccountAliasRouteHandler,
  postActionCreateGroupRouteHandler,
  postActionCreateInstanceProfileRouteHandler,
  postActionCreateLoginProfileRouteHandler,
  postActionCreateOpenIDConnectProviderRouteHandler,
  postActionCreatePolicyRouteHandler,
  postActionCreatePolicyVersionRouteHandler,
  postActionCreateRoleRouteHandler,
  postActionCreateSAMLProviderRouteHandler,
  postActionCreateServiceLinkedRoleRouteHandler,
  postActionCreateServiceSpecificCredentialRouteHandler,
  postActionCreateUserRouteHandler,
  postActionCreateVirtualMFADeviceRouteHandler,
  postActionDeactivateMFADeviceRouteHandler,
  postActionDeleteAccessKeyRouteHandler,
  postActionDeleteAccountAliasRouteHandler,
  postActionDeleteAccountPasswordPolicyRouteHandler,
  postActionDeleteGroupPolicyRouteHandler,
  postActionDeleteGroupRouteHandler,
  postActionDeleteInstanceProfileRouteHandler,
  postActionDeleteLoginProfileRouteHandler,
  postActionDeleteOpenIDConnectProviderRouteHandler,
  postActionDeletePolicyRouteHandler,
  postActionDeletePolicyVersionRouteHandler,
  postActionDeleteRolePermissionsBoundaryRouteHandler,
  postActionDeleteRolePolicyRouteHandler,
  postActionDeleteRoleRouteHandler,
  postActionDeleteSAMLProviderRouteHandler,
  postActionDeleteServerCertificateRouteHandler,
  postActionDeleteServiceLinkedRoleRouteHandler,
  postActionDeleteServiceSpecificCredentialRouteHandler,
  postActionDeleteSigningCertificateRouteHandler,
  postActionDeleteSSHPublicKeyRouteHandler,
  postActionDeleteUserPermissionsBoundaryRouteHandler,
  postActionDeleteUserPolicyRouteHandler,
  postActionDeleteUserRouteHandler,
  postActionDeleteVirtualMFADeviceRouteHandler,
  postActionDetachGroupPolicyRouteHandler,
  postActionDetachRolePolicyRouteHandler,
  postActionDetachUserPolicyRouteHandler,
  postActionEnableMFADeviceRouteHandler,
  postActionGenerateCredentialReportRouteHandler,
  postActionGenerateOrganizationsAccessReportRouteHandler,
  postActionGenerateServiceLastAccessedDetailsRouteHandler,
  postActionGetAccessKeyLastUsedRouteHandler,
  postActionGetAccountAuthorizationDetailsRouteHandler,
  postActionGetAccountPasswordPolicyRouteHandler,
  postActionGetAccountSummaryRouteHandler,
  postActionGetContextKeysForCustomPolicyRouteHandler,
  postActionGetContextKeysForPrincipalPolicyRouteHandler,
  postActionGetCredentialReportRouteHandler,
  postActionGetGroupPolicyRouteHandler,
  postActionGetGroupRouteHandler,
  postActionGetInstanceProfileRouteHandler,
  postActionGetLoginProfileRouteHandler,
  postActionGetMFADeviceRouteHandler,
  postActionGetOpenIDConnectProviderRouteHandler,
  postActionGetOrganizationsAccessReportRouteHandler,
  postActionGetPolicyRouteHandler,
  postActionGetPolicyVersionRouteHandler,
  postActionGetRolePolicyRouteHandler,
  postActionGetRoleRouteHandler,
  postActionGetSAMLProviderRouteHandler,
  postActionGetServerCertificateRouteHandler,
  postActionGetServiceLastAccessedDetailsRouteHandler,
  postActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler,
  postActionGetServiceLinkedRoleDeletionStatusRouteHandler,
  postActionGetSSHPublicKeyRouteHandler,
  postActionGetUserPolicyRouteHandler,
  postActionGetUserRouteHandler,
  postActionListAccessKeysRouteHandler,
  postActionListAccountAliasesRouteHandler,
  postActionListAttachedGroupPoliciesRouteHandler,
  postActionListAttachedRolePoliciesRouteHandler,
  postActionListAttachedUserPoliciesRouteHandler,
  postActionListEntitiesForPolicyRouteHandler,
  postActionListGroupPoliciesRouteHandler,
  postActionListGroupsForUserRouteHandler,
  postActionListGroupsRouteHandler,
  postActionListInstanceProfilesForRoleRouteHandler,
  postActionListInstanceProfilesRouteHandler,
  postActionListInstanceProfileTagsRouteHandler,
  postActionListMFADevicesRouteHandler,
  postActionListMFADeviceTagsRouteHandler,
  postActionListOpenIDConnectProvidersRouteHandler,
  postActionListOpenIDConnectProviderTagsRouteHandler,
  postActionListPoliciesGrantingServiceAccessRouteHandler,
  postActionListPoliciesRouteHandler,
  postActionListPolicyTagsRouteHandler,
  postActionListPolicyVersionsRouteHandler,
  postActionListRolePoliciesRouteHandler,
  postActionListRolesRouteHandler,
  postActionListRoleTagsRouteHandler,
  postActionListSAMLProvidersRouteHandler,
  postActionListSAMLProviderTagsRouteHandler,
  postActionListServerCertificatesRouteHandler,
  postActionListServerCertificateTagsRouteHandler,
  postActionListServiceSpecificCredentialsRouteHandler,
  postActionListSigningCertificatesRouteHandler,
  postActionListSSHPublicKeysRouteHandler,
  postActionListUserPoliciesRouteHandler,
  postActionListUsersRouteHandler,
  postActionListUserTagsRouteHandler,
  postActionListVirtualMFADevicesRouteHandler,
  postActionPutGroupPolicyRouteHandler,
  postActionPutRolePermissionsBoundaryRouteHandler,
  postActionPutRolePolicyRouteHandler,
  postActionPutUserPermissionsBoundaryRouteHandler,
  postActionPutUserPolicyRouteHandler,
  postActionRemoveClientIDFromOpenIDConnectProviderRouteHandler,
  postActionRemoveRoleFromInstanceProfileRouteHandler,
  postActionRemoveUserFromGroupRouteHandler,
  postActionResetServiceSpecificCredentialRouteHandler,
  postActionResyncMFADeviceRouteHandler,
  postActionSetDefaultPolicyVersionRouteHandler,
  postActionSetSecurityTokenServicePreferencesRouteHandler,
  postActionSimulateCustomPolicyRouteHandler,
  postActionSimulatePrincipalPolicyRouteHandler,
  postActionTagInstanceProfileRouteHandler,
  postActionTagMFADeviceRouteHandler,
  postActionTagOpenIDConnectProviderRouteHandler,
  postActionTagPolicyRouteHandler,
  postActionTagRoleRouteHandler,
  postActionTagSAMLProviderRouteHandler,
  postActionTagServerCertificateRouteHandler,
  postActionTagUserRouteHandler,
  postActionUntagInstanceProfileRouteHandler,
  postActionUntagMFADeviceRouteHandler,
  postActionUntagOpenIDConnectProviderRouteHandler,
  postActionUntagPolicyRouteHandler,
  postActionUntagRoleRouteHandler,
  postActionUntagSAMLProviderRouteHandler,
  postActionUntagServerCertificateRouteHandler,
  postActionUntagUserRouteHandler,
  postActionUpdateAccessKeyRouteHandler,
  postActionUpdateAccountPasswordPolicyRouteHandler,
  postActionUpdateAssumeRolePolicyRouteHandler,
  postActionUpdateGroupRouteHandler,
  postActionUpdateLoginProfileRouteHandler,
  postActionUpdateOpenIDConnectProviderThumbprintRouteHandler,
  postActionUpdateRoleDescriptionRouteHandler,
  postActionUpdateRoleRouteHandler,
  postActionUpdateSAMLProviderRouteHandler,
  postActionUpdateServerCertificateRouteHandler,
  postActionUpdateServiceSpecificCredentialRouteHandler,
  postActionUpdateSigningCertificateRouteHandler,
  postActionUpdateSSHPublicKeyRouteHandler,
  postActionUpdateUserRouteHandler,
  postActionUploadServerCertificateRouteHandler,
  postActionUploadSigningCertificateRouteHandler,
  postActionUploadSSHPublicKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getActionAddClientIDToOpenIDConnectProviderRoute,
    getActionAddClientIDToOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    postActionAddClientIDToOpenIDConnectProviderRoute,
    postActionAddClientIDToOpenIDConnectProviderRouteHandler,
  )
  .openapi(getActionAddRoleToInstanceProfileRoute, getActionAddRoleToInstanceProfileRouteHandler)
  .openapi(postActionAddRoleToInstanceProfileRoute, postActionAddRoleToInstanceProfileRouteHandler)
  .openapi(getActionAddUserToGroupRoute, getActionAddUserToGroupRouteHandler)
  .openapi(postActionAddUserToGroupRoute, postActionAddUserToGroupRouteHandler)
  .openapi(getActionAttachGroupPolicyRoute, getActionAttachGroupPolicyRouteHandler)
  .openapi(postActionAttachGroupPolicyRoute, postActionAttachGroupPolicyRouteHandler)
  .openapi(getActionAttachRolePolicyRoute, getActionAttachRolePolicyRouteHandler)
  .openapi(postActionAttachRolePolicyRoute, postActionAttachRolePolicyRouteHandler)
  .openapi(getActionAttachUserPolicyRoute, getActionAttachUserPolicyRouteHandler)
  .openapi(postActionAttachUserPolicyRoute, postActionAttachUserPolicyRouteHandler)
  .openapi(getActionChangePasswordRoute, getActionChangePasswordRouteHandler)
  .openapi(postActionChangePasswordRoute, postActionChangePasswordRouteHandler)
  .openapi(getActionCreateAccessKeyRoute, getActionCreateAccessKeyRouteHandler)
  .openapi(postActionCreateAccessKeyRoute, postActionCreateAccessKeyRouteHandler)
  .openapi(getActionCreateAccountAliasRoute, getActionCreateAccountAliasRouteHandler)
  .openapi(postActionCreateAccountAliasRoute, postActionCreateAccountAliasRouteHandler)
  .openapi(getActionCreateGroupRoute, getActionCreateGroupRouteHandler)
  .openapi(postActionCreateGroupRoute, postActionCreateGroupRouteHandler)
  .openapi(getActionCreateInstanceProfileRoute, getActionCreateInstanceProfileRouteHandler)
  .openapi(postActionCreateInstanceProfileRoute, postActionCreateInstanceProfileRouteHandler)
  .openapi(getActionCreateLoginProfileRoute, getActionCreateLoginProfileRouteHandler)
  .openapi(postActionCreateLoginProfileRoute, postActionCreateLoginProfileRouteHandler)
  .openapi(
    getActionCreateOpenIDConnectProviderRoute,
    getActionCreateOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    postActionCreateOpenIDConnectProviderRoute,
    postActionCreateOpenIDConnectProviderRouteHandler,
  )
  .openapi(getActionCreatePolicyRoute, getActionCreatePolicyRouteHandler)
  .openapi(postActionCreatePolicyRoute, postActionCreatePolicyRouteHandler)
  .openapi(getActionCreatePolicyVersionRoute, getActionCreatePolicyVersionRouteHandler)
  .openapi(postActionCreatePolicyVersionRoute, postActionCreatePolicyVersionRouteHandler)
  .openapi(getActionCreateRoleRoute, getActionCreateRoleRouteHandler)
  .openapi(postActionCreateRoleRoute, postActionCreateRoleRouteHandler)
  .openapi(getActionCreateSAMLProviderRoute, getActionCreateSAMLProviderRouteHandler)
  .openapi(postActionCreateSAMLProviderRoute, postActionCreateSAMLProviderRouteHandler)
  .openapi(getActionCreateServiceLinkedRoleRoute, getActionCreateServiceLinkedRoleRouteHandler)
  .openapi(postActionCreateServiceLinkedRoleRoute, postActionCreateServiceLinkedRoleRouteHandler)
  .openapi(
    getActionCreateServiceSpecificCredentialRoute,
    getActionCreateServiceSpecificCredentialRouteHandler,
  )
  .openapi(
    postActionCreateServiceSpecificCredentialRoute,
    postActionCreateServiceSpecificCredentialRouteHandler,
  )
  .openapi(getActionCreateUserRoute, getActionCreateUserRouteHandler)
  .openapi(postActionCreateUserRoute, postActionCreateUserRouteHandler)
  .openapi(getActionCreateVirtualMFADeviceRoute, getActionCreateVirtualMFADeviceRouteHandler)
  .openapi(postActionCreateVirtualMFADeviceRoute, postActionCreateVirtualMFADeviceRouteHandler)
  .openapi(getActionDeactivateMFADeviceRoute, getActionDeactivateMFADeviceRouteHandler)
  .openapi(postActionDeactivateMFADeviceRoute, postActionDeactivateMFADeviceRouteHandler)
  .openapi(getActionDeleteAccessKeyRoute, getActionDeleteAccessKeyRouteHandler)
  .openapi(postActionDeleteAccessKeyRoute, postActionDeleteAccessKeyRouteHandler)
  .openapi(getActionDeleteAccountAliasRoute, getActionDeleteAccountAliasRouteHandler)
  .openapi(postActionDeleteAccountAliasRoute, postActionDeleteAccountAliasRouteHandler)
  .openapi(
    getActionDeleteAccountPasswordPolicyRoute,
    getActionDeleteAccountPasswordPolicyRouteHandler,
  )
  .openapi(
    postActionDeleteAccountPasswordPolicyRoute,
    postActionDeleteAccountPasswordPolicyRouteHandler,
  )
  .openapi(getActionDeleteGroupRoute, getActionDeleteGroupRouteHandler)
  .openapi(postActionDeleteGroupRoute, postActionDeleteGroupRouteHandler)
  .openapi(getActionDeleteGroupPolicyRoute, getActionDeleteGroupPolicyRouteHandler)
  .openapi(postActionDeleteGroupPolicyRoute, postActionDeleteGroupPolicyRouteHandler)
  .openapi(getActionDeleteInstanceProfileRoute, getActionDeleteInstanceProfileRouteHandler)
  .openapi(postActionDeleteInstanceProfileRoute, postActionDeleteInstanceProfileRouteHandler)
  .openapi(getActionDeleteLoginProfileRoute, getActionDeleteLoginProfileRouteHandler)
  .openapi(postActionDeleteLoginProfileRoute, postActionDeleteLoginProfileRouteHandler)
  .openapi(
    getActionDeleteOpenIDConnectProviderRoute,
    getActionDeleteOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    postActionDeleteOpenIDConnectProviderRoute,
    postActionDeleteOpenIDConnectProviderRouteHandler,
  )
  .openapi(getActionDeletePolicyRoute, getActionDeletePolicyRouteHandler)
  .openapi(postActionDeletePolicyRoute, postActionDeletePolicyRouteHandler)
  .openapi(getActionDeletePolicyVersionRoute, getActionDeletePolicyVersionRouteHandler)
  .openapi(postActionDeletePolicyVersionRoute, postActionDeletePolicyVersionRouteHandler)
  .openapi(getActionDeleteRoleRoute, getActionDeleteRoleRouteHandler)
  .openapi(postActionDeleteRoleRoute, postActionDeleteRoleRouteHandler)
  .openapi(
    getActionDeleteRolePermissionsBoundaryRoute,
    getActionDeleteRolePermissionsBoundaryRouteHandler,
  )
  .openapi(
    postActionDeleteRolePermissionsBoundaryRoute,
    postActionDeleteRolePermissionsBoundaryRouteHandler,
  )
  .openapi(getActionDeleteRolePolicyRoute, getActionDeleteRolePolicyRouteHandler)
  .openapi(postActionDeleteRolePolicyRoute, postActionDeleteRolePolicyRouteHandler)
  .openapi(getActionDeleteSAMLProviderRoute, getActionDeleteSAMLProviderRouteHandler)
  .openapi(postActionDeleteSAMLProviderRoute, postActionDeleteSAMLProviderRouteHandler)
  .openapi(getActionDeleteSSHPublicKeyRoute, getActionDeleteSSHPublicKeyRouteHandler)
  .openapi(postActionDeleteSSHPublicKeyRoute, postActionDeleteSSHPublicKeyRouteHandler)
  .openapi(getActionDeleteServerCertificateRoute, getActionDeleteServerCertificateRouteHandler)
  .openapi(postActionDeleteServerCertificateRoute, postActionDeleteServerCertificateRouteHandler)
  .openapi(getActionDeleteServiceLinkedRoleRoute, getActionDeleteServiceLinkedRoleRouteHandler)
  .openapi(postActionDeleteServiceLinkedRoleRoute, postActionDeleteServiceLinkedRoleRouteHandler)
  .openapi(
    getActionDeleteServiceSpecificCredentialRoute,
    getActionDeleteServiceSpecificCredentialRouteHandler,
  )
  .openapi(
    postActionDeleteServiceSpecificCredentialRoute,
    postActionDeleteServiceSpecificCredentialRouteHandler,
  )
  .openapi(getActionDeleteSigningCertificateRoute, getActionDeleteSigningCertificateRouteHandler)
  .openapi(postActionDeleteSigningCertificateRoute, postActionDeleteSigningCertificateRouteHandler)
  .openapi(getActionDeleteUserRoute, getActionDeleteUserRouteHandler)
  .openapi(postActionDeleteUserRoute, postActionDeleteUserRouteHandler)
  .openapi(
    getActionDeleteUserPermissionsBoundaryRoute,
    getActionDeleteUserPermissionsBoundaryRouteHandler,
  )
  .openapi(
    postActionDeleteUserPermissionsBoundaryRoute,
    postActionDeleteUserPermissionsBoundaryRouteHandler,
  )
  .openapi(getActionDeleteUserPolicyRoute, getActionDeleteUserPolicyRouteHandler)
  .openapi(postActionDeleteUserPolicyRoute, postActionDeleteUserPolicyRouteHandler)
  .openapi(getActionDeleteVirtualMFADeviceRoute, getActionDeleteVirtualMFADeviceRouteHandler)
  .openapi(postActionDeleteVirtualMFADeviceRoute, postActionDeleteVirtualMFADeviceRouteHandler)
  .openapi(getActionDetachGroupPolicyRoute, getActionDetachGroupPolicyRouteHandler)
  .openapi(postActionDetachGroupPolicyRoute, postActionDetachGroupPolicyRouteHandler)
  .openapi(getActionDetachRolePolicyRoute, getActionDetachRolePolicyRouteHandler)
  .openapi(postActionDetachRolePolicyRoute, postActionDetachRolePolicyRouteHandler)
  .openapi(getActionDetachUserPolicyRoute, getActionDetachUserPolicyRouteHandler)
  .openapi(postActionDetachUserPolicyRoute, postActionDetachUserPolicyRouteHandler)
  .openapi(getActionEnableMFADeviceRoute, getActionEnableMFADeviceRouteHandler)
  .openapi(postActionEnableMFADeviceRoute, postActionEnableMFADeviceRouteHandler)
  .openapi(getActionGenerateCredentialReportRoute, getActionGenerateCredentialReportRouteHandler)
  .openapi(postActionGenerateCredentialReportRoute, postActionGenerateCredentialReportRouteHandler)
  .openapi(
    getActionGenerateOrganizationsAccessReportRoute,
    getActionGenerateOrganizationsAccessReportRouteHandler,
  )
  .openapi(
    postActionGenerateOrganizationsAccessReportRoute,
    postActionGenerateOrganizationsAccessReportRouteHandler,
  )
  .openapi(
    getActionGenerateServiceLastAccessedDetailsRoute,
    getActionGenerateServiceLastAccessedDetailsRouteHandler,
  )
  .openapi(
    postActionGenerateServiceLastAccessedDetailsRoute,
    postActionGenerateServiceLastAccessedDetailsRouteHandler,
  )
  .openapi(getActionGetAccessKeyLastUsedRoute, getActionGetAccessKeyLastUsedRouteHandler)
  .openapi(postActionGetAccessKeyLastUsedRoute, postActionGetAccessKeyLastUsedRouteHandler)
  .openapi(
    getActionGetAccountAuthorizationDetailsRoute,
    getActionGetAccountAuthorizationDetailsRouteHandler,
  )
  .openapi(
    postActionGetAccountAuthorizationDetailsRoute,
    postActionGetAccountAuthorizationDetailsRouteHandler,
  )
  .openapi(getActionGetAccountPasswordPolicyRoute, getActionGetAccountPasswordPolicyRouteHandler)
  .openapi(postActionGetAccountPasswordPolicyRoute, postActionGetAccountPasswordPolicyRouteHandler)
  .openapi(getActionGetAccountSummaryRoute, getActionGetAccountSummaryRouteHandler)
  .openapi(postActionGetAccountSummaryRoute, postActionGetAccountSummaryRouteHandler)
  .openapi(
    getActionGetContextKeysForCustomPolicyRoute,
    getActionGetContextKeysForCustomPolicyRouteHandler,
  )
  .openapi(
    postActionGetContextKeysForCustomPolicyRoute,
    postActionGetContextKeysForCustomPolicyRouteHandler,
  )
  .openapi(
    getActionGetContextKeysForPrincipalPolicyRoute,
    getActionGetContextKeysForPrincipalPolicyRouteHandler,
  )
  .openapi(
    postActionGetContextKeysForPrincipalPolicyRoute,
    postActionGetContextKeysForPrincipalPolicyRouteHandler,
  )
  .openapi(getActionGetCredentialReportRoute, getActionGetCredentialReportRouteHandler)
  .openapi(postActionGetCredentialReportRoute, postActionGetCredentialReportRouteHandler)
  .openapi(getActionGetGroupRoute, getActionGetGroupRouteHandler)
  .openapi(postActionGetGroupRoute, postActionGetGroupRouteHandler)
  .openapi(getActionGetGroupPolicyRoute, getActionGetGroupPolicyRouteHandler)
  .openapi(postActionGetGroupPolicyRoute, postActionGetGroupPolicyRouteHandler)
  .openapi(getActionGetInstanceProfileRoute, getActionGetInstanceProfileRouteHandler)
  .openapi(postActionGetInstanceProfileRoute, postActionGetInstanceProfileRouteHandler)
  .openapi(getActionGetLoginProfileRoute, getActionGetLoginProfileRouteHandler)
  .openapi(postActionGetLoginProfileRoute, postActionGetLoginProfileRouteHandler)
  .openapi(getActionGetMFADeviceRoute, getActionGetMFADeviceRouteHandler)
  .openapi(postActionGetMFADeviceRoute, postActionGetMFADeviceRouteHandler)
  .openapi(getActionGetOpenIDConnectProviderRoute, getActionGetOpenIDConnectProviderRouteHandler)
  .openapi(postActionGetOpenIDConnectProviderRoute, postActionGetOpenIDConnectProviderRouteHandler)
  .openapi(
    getActionGetOrganizationsAccessReportRoute,
    getActionGetOrganizationsAccessReportRouteHandler,
  )
  .openapi(
    postActionGetOrganizationsAccessReportRoute,
    postActionGetOrganizationsAccessReportRouteHandler,
  )
  .openapi(getActionGetPolicyRoute, getActionGetPolicyRouteHandler)
  .openapi(postActionGetPolicyRoute, postActionGetPolicyRouteHandler)
  .openapi(getActionGetPolicyVersionRoute, getActionGetPolicyVersionRouteHandler)
  .openapi(postActionGetPolicyVersionRoute, postActionGetPolicyVersionRouteHandler)
  .openapi(getActionGetRoleRoute, getActionGetRoleRouteHandler)
  .openapi(postActionGetRoleRoute, postActionGetRoleRouteHandler)
  .openapi(getActionGetRolePolicyRoute, getActionGetRolePolicyRouteHandler)
  .openapi(postActionGetRolePolicyRoute, postActionGetRolePolicyRouteHandler)
  .openapi(getActionGetSAMLProviderRoute, getActionGetSAMLProviderRouteHandler)
  .openapi(postActionGetSAMLProviderRoute, postActionGetSAMLProviderRouteHandler)
  .openapi(getActionGetSSHPublicKeyRoute, getActionGetSSHPublicKeyRouteHandler)
  .openapi(postActionGetSSHPublicKeyRoute, postActionGetSSHPublicKeyRouteHandler)
  .openapi(getActionGetServerCertificateRoute, getActionGetServerCertificateRouteHandler)
  .openapi(postActionGetServerCertificateRoute, postActionGetServerCertificateRouteHandler)
  .openapi(
    getActionGetServiceLastAccessedDetailsRoute,
    getActionGetServiceLastAccessedDetailsRouteHandler,
  )
  .openapi(
    postActionGetServiceLastAccessedDetailsRoute,
    postActionGetServiceLastAccessedDetailsRouteHandler,
  )
  .openapi(
    getActionGetServiceLastAccessedDetailsWithEntitiesRoute,
    getActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler,
  )
  .openapi(
    postActionGetServiceLastAccessedDetailsWithEntitiesRoute,
    postActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler,
  )
  .openapi(
    getActionGetServiceLinkedRoleDeletionStatusRoute,
    getActionGetServiceLinkedRoleDeletionStatusRouteHandler,
  )
  .openapi(
    postActionGetServiceLinkedRoleDeletionStatusRoute,
    postActionGetServiceLinkedRoleDeletionStatusRouteHandler,
  )
  .openapi(getActionGetUserRoute, getActionGetUserRouteHandler)
  .openapi(postActionGetUserRoute, postActionGetUserRouteHandler)
  .openapi(getActionGetUserPolicyRoute, getActionGetUserPolicyRouteHandler)
  .openapi(postActionGetUserPolicyRoute, postActionGetUserPolicyRouteHandler)
  .openapi(getActionListAccessKeysRoute, getActionListAccessKeysRouteHandler)
  .openapi(postActionListAccessKeysRoute, postActionListAccessKeysRouteHandler)
  .openapi(getActionListAccountAliasesRoute, getActionListAccountAliasesRouteHandler)
  .openapi(postActionListAccountAliasesRoute, postActionListAccountAliasesRouteHandler)
  .openapi(getActionListAttachedGroupPoliciesRoute, getActionListAttachedGroupPoliciesRouteHandler)
  .openapi(
    postActionListAttachedGroupPoliciesRoute,
    postActionListAttachedGroupPoliciesRouteHandler,
  )
  .openapi(getActionListAttachedRolePoliciesRoute, getActionListAttachedRolePoliciesRouteHandler)
  .openapi(postActionListAttachedRolePoliciesRoute, postActionListAttachedRolePoliciesRouteHandler)
  .openapi(getActionListAttachedUserPoliciesRoute, getActionListAttachedUserPoliciesRouteHandler)
  .openapi(postActionListAttachedUserPoliciesRoute, postActionListAttachedUserPoliciesRouteHandler)
  .openapi(getActionListEntitiesForPolicyRoute, getActionListEntitiesForPolicyRouteHandler)
  .openapi(postActionListEntitiesForPolicyRoute, postActionListEntitiesForPolicyRouteHandler)
  .openapi(getActionListGroupPoliciesRoute, getActionListGroupPoliciesRouteHandler)
  .openapi(postActionListGroupPoliciesRoute, postActionListGroupPoliciesRouteHandler)
  .openapi(getActionListGroupsRoute, getActionListGroupsRouteHandler)
  .openapi(postActionListGroupsRoute, postActionListGroupsRouteHandler)
  .openapi(getActionListGroupsForUserRoute, getActionListGroupsForUserRouteHandler)
  .openapi(postActionListGroupsForUserRoute, postActionListGroupsForUserRouteHandler)
  .openapi(getActionListInstanceProfileTagsRoute, getActionListInstanceProfileTagsRouteHandler)
  .openapi(postActionListInstanceProfileTagsRoute, postActionListInstanceProfileTagsRouteHandler)
  .openapi(getActionListInstanceProfilesRoute, getActionListInstanceProfilesRouteHandler)
  .openapi(postActionListInstanceProfilesRoute, postActionListInstanceProfilesRouteHandler)
  .openapi(
    getActionListInstanceProfilesForRoleRoute,
    getActionListInstanceProfilesForRoleRouteHandler,
  )
  .openapi(
    postActionListInstanceProfilesForRoleRoute,
    postActionListInstanceProfilesForRoleRouteHandler,
  )
  .openapi(getActionListMFADeviceTagsRoute, getActionListMFADeviceTagsRouteHandler)
  .openapi(postActionListMFADeviceTagsRoute, postActionListMFADeviceTagsRouteHandler)
  .openapi(getActionListMFADevicesRoute, getActionListMFADevicesRouteHandler)
  .openapi(postActionListMFADevicesRoute, postActionListMFADevicesRouteHandler)
  .openapi(
    getActionListOpenIDConnectProviderTagsRoute,
    getActionListOpenIDConnectProviderTagsRouteHandler,
  )
  .openapi(
    postActionListOpenIDConnectProviderTagsRoute,
    postActionListOpenIDConnectProviderTagsRouteHandler,
  )
  .openapi(
    getActionListOpenIDConnectProvidersRoute,
    getActionListOpenIDConnectProvidersRouteHandler,
  )
  .openapi(
    postActionListOpenIDConnectProvidersRoute,
    postActionListOpenIDConnectProvidersRouteHandler,
  )
  .openapi(getActionListPoliciesRoute, getActionListPoliciesRouteHandler)
  .openapi(postActionListPoliciesRoute, postActionListPoliciesRouteHandler)
  .openapi(
    getActionListPoliciesGrantingServiceAccessRoute,
    getActionListPoliciesGrantingServiceAccessRouteHandler,
  )
  .openapi(
    postActionListPoliciesGrantingServiceAccessRoute,
    postActionListPoliciesGrantingServiceAccessRouteHandler,
  )
  .openapi(getActionListPolicyTagsRoute, getActionListPolicyTagsRouteHandler)
  .openapi(postActionListPolicyTagsRoute, postActionListPolicyTagsRouteHandler)
  .openapi(getActionListPolicyVersionsRoute, getActionListPolicyVersionsRouteHandler)
  .openapi(postActionListPolicyVersionsRoute, postActionListPolicyVersionsRouteHandler)
  .openapi(getActionListRolePoliciesRoute, getActionListRolePoliciesRouteHandler)
  .openapi(postActionListRolePoliciesRoute, postActionListRolePoliciesRouteHandler)
  .openapi(getActionListRoleTagsRoute, getActionListRoleTagsRouteHandler)
  .openapi(postActionListRoleTagsRoute, postActionListRoleTagsRouteHandler)
  .openapi(getActionListRolesRoute, getActionListRolesRouteHandler)
  .openapi(postActionListRolesRoute, postActionListRolesRouteHandler)
  .openapi(getActionListSAMLProviderTagsRoute, getActionListSAMLProviderTagsRouteHandler)
  .openapi(postActionListSAMLProviderTagsRoute, postActionListSAMLProviderTagsRouteHandler)
  .openapi(getActionListSAMLProvidersRoute, getActionListSAMLProvidersRouteHandler)
  .openapi(postActionListSAMLProvidersRoute, postActionListSAMLProvidersRouteHandler)
  .openapi(getActionListSSHPublicKeysRoute, getActionListSSHPublicKeysRouteHandler)
  .openapi(postActionListSSHPublicKeysRoute, postActionListSSHPublicKeysRouteHandler)
  .openapi(getActionListServerCertificateTagsRoute, getActionListServerCertificateTagsRouteHandler)
  .openapi(
    postActionListServerCertificateTagsRoute,
    postActionListServerCertificateTagsRouteHandler,
  )
  .openapi(getActionListServerCertificatesRoute, getActionListServerCertificatesRouteHandler)
  .openapi(postActionListServerCertificatesRoute, postActionListServerCertificatesRouteHandler)
  .openapi(
    getActionListServiceSpecificCredentialsRoute,
    getActionListServiceSpecificCredentialsRouteHandler,
  )
  .openapi(
    postActionListServiceSpecificCredentialsRoute,
    postActionListServiceSpecificCredentialsRouteHandler,
  )
  .openapi(getActionListSigningCertificatesRoute, getActionListSigningCertificatesRouteHandler)
  .openapi(postActionListSigningCertificatesRoute, postActionListSigningCertificatesRouteHandler)
  .openapi(getActionListUserPoliciesRoute, getActionListUserPoliciesRouteHandler)
  .openapi(postActionListUserPoliciesRoute, postActionListUserPoliciesRouteHandler)
  .openapi(getActionListUserTagsRoute, getActionListUserTagsRouteHandler)
  .openapi(postActionListUserTagsRoute, postActionListUserTagsRouteHandler)
  .openapi(getActionListUsersRoute, getActionListUsersRouteHandler)
  .openapi(postActionListUsersRoute, postActionListUsersRouteHandler)
  .openapi(getActionListVirtualMFADevicesRoute, getActionListVirtualMFADevicesRouteHandler)
  .openapi(postActionListVirtualMFADevicesRoute, postActionListVirtualMFADevicesRouteHandler)
  .openapi(getActionPutGroupPolicyRoute, getActionPutGroupPolicyRouteHandler)
  .openapi(postActionPutGroupPolicyRoute, postActionPutGroupPolicyRouteHandler)
  .openapi(
    getActionPutRolePermissionsBoundaryRoute,
    getActionPutRolePermissionsBoundaryRouteHandler,
  )
  .openapi(
    postActionPutRolePermissionsBoundaryRoute,
    postActionPutRolePermissionsBoundaryRouteHandler,
  )
  .openapi(getActionPutRolePolicyRoute, getActionPutRolePolicyRouteHandler)
  .openapi(postActionPutRolePolicyRoute, postActionPutRolePolicyRouteHandler)
  .openapi(
    getActionPutUserPermissionsBoundaryRoute,
    getActionPutUserPermissionsBoundaryRouteHandler,
  )
  .openapi(
    postActionPutUserPermissionsBoundaryRoute,
    postActionPutUserPermissionsBoundaryRouteHandler,
  )
  .openapi(getActionPutUserPolicyRoute, getActionPutUserPolicyRouteHandler)
  .openapi(postActionPutUserPolicyRoute, postActionPutUserPolicyRouteHandler)
  .openapi(
    getActionRemoveClientIDFromOpenIDConnectProviderRoute,
    getActionRemoveClientIDFromOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    postActionRemoveClientIDFromOpenIDConnectProviderRoute,
    postActionRemoveClientIDFromOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    getActionRemoveRoleFromInstanceProfileRoute,
    getActionRemoveRoleFromInstanceProfileRouteHandler,
  )
  .openapi(
    postActionRemoveRoleFromInstanceProfileRoute,
    postActionRemoveRoleFromInstanceProfileRouteHandler,
  )
  .openapi(getActionRemoveUserFromGroupRoute, getActionRemoveUserFromGroupRouteHandler)
  .openapi(postActionRemoveUserFromGroupRoute, postActionRemoveUserFromGroupRouteHandler)
  .openapi(
    getActionResetServiceSpecificCredentialRoute,
    getActionResetServiceSpecificCredentialRouteHandler,
  )
  .openapi(
    postActionResetServiceSpecificCredentialRoute,
    postActionResetServiceSpecificCredentialRouteHandler,
  )
  .openapi(getActionResyncMFADeviceRoute, getActionResyncMFADeviceRouteHandler)
  .openapi(postActionResyncMFADeviceRoute, postActionResyncMFADeviceRouteHandler)
  .openapi(getActionSetDefaultPolicyVersionRoute, getActionSetDefaultPolicyVersionRouteHandler)
  .openapi(postActionSetDefaultPolicyVersionRoute, postActionSetDefaultPolicyVersionRouteHandler)
  .openapi(
    getActionSetSecurityTokenServicePreferencesRoute,
    getActionSetSecurityTokenServicePreferencesRouteHandler,
  )
  .openapi(
    postActionSetSecurityTokenServicePreferencesRoute,
    postActionSetSecurityTokenServicePreferencesRouteHandler,
  )
  .openapi(getActionSimulateCustomPolicyRoute, getActionSimulateCustomPolicyRouteHandler)
  .openapi(postActionSimulateCustomPolicyRoute, postActionSimulateCustomPolicyRouteHandler)
  .openapi(getActionSimulatePrincipalPolicyRoute, getActionSimulatePrincipalPolicyRouteHandler)
  .openapi(postActionSimulatePrincipalPolicyRoute, postActionSimulatePrincipalPolicyRouteHandler)
  .openapi(getActionTagInstanceProfileRoute, getActionTagInstanceProfileRouteHandler)
  .openapi(postActionTagInstanceProfileRoute, postActionTagInstanceProfileRouteHandler)
  .openapi(getActionTagMFADeviceRoute, getActionTagMFADeviceRouteHandler)
  .openapi(postActionTagMFADeviceRoute, postActionTagMFADeviceRouteHandler)
  .openapi(getActionTagOpenIDConnectProviderRoute, getActionTagOpenIDConnectProviderRouteHandler)
  .openapi(postActionTagOpenIDConnectProviderRoute, postActionTagOpenIDConnectProviderRouteHandler)
  .openapi(getActionTagPolicyRoute, getActionTagPolicyRouteHandler)
  .openapi(postActionTagPolicyRoute, postActionTagPolicyRouteHandler)
  .openapi(getActionTagRoleRoute, getActionTagRoleRouteHandler)
  .openapi(postActionTagRoleRoute, postActionTagRoleRouteHandler)
  .openapi(getActionTagSAMLProviderRoute, getActionTagSAMLProviderRouteHandler)
  .openapi(postActionTagSAMLProviderRoute, postActionTagSAMLProviderRouteHandler)
  .openapi(getActionTagServerCertificateRoute, getActionTagServerCertificateRouteHandler)
  .openapi(postActionTagServerCertificateRoute, postActionTagServerCertificateRouteHandler)
  .openapi(getActionTagUserRoute, getActionTagUserRouteHandler)
  .openapi(postActionTagUserRoute, postActionTagUserRouteHandler)
  .openapi(getActionUntagInstanceProfileRoute, getActionUntagInstanceProfileRouteHandler)
  .openapi(postActionUntagInstanceProfileRoute, postActionUntagInstanceProfileRouteHandler)
  .openapi(getActionUntagMFADeviceRoute, getActionUntagMFADeviceRouteHandler)
  .openapi(postActionUntagMFADeviceRoute, postActionUntagMFADeviceRouteHandler)
  .openapi(
    getActionUntagOpenIDConnectProviderRoute,
    getActionUntagOpenIDConnectProviderRouteHandler,
  )
  .openapi(
    postActionUntagOpenIDConnectProviderRoute,
    postActionUntagOpenIDConnectProviderRouteHandler,
  )
  .openapi(getActionUntagPolicyRoute, getActionUntagPolicyRouteHandler)
  .openapi(postActionUntagPolicyRoute, postActionUntagPolicyRouteHandler)
  .openapi(getActionUntagRoleRoute, getActionUntagRoleRouteHandler)
  .openapi(postActionUntagRoleRoute, postActionUntagRoleRouteHandler)
  .openapi(getActionUntagSAMLProviderRoute, getActionUntagSAMLProviderRouteHandler)
  .openapi(postActionUntagSAMLProviderRoute, postActionUntagSAMLProviderRouteHandler)
  .openapi(getActionUntagServerCertificateRoute, getActionUntagServerCertificateRouteHandler)
  .openapi(postActionUntagServerCertificateRoute, postActionUntagServerCertificateRouteHandler)
  .openapi(getActionUntagUserRoute, getActionUntagUserRouteHandler)
  .openapi(postActionUntagUserRoute, postActionUntagUserRouteHandler)
  .openapi(getActionUpdateAccessKeyRoute, getActionUpdateAccessKeyRouteHandler)
  .openapi(postActionUpdateAccessKeyRoute, postActionUpdateAccessKeyRouteHandler)
  .openapi(
    getActionUpdateAccountPasswordPolicyRoute,
    getActionUpdateAccountPasswordPolicyRouteHandler,
  )
  .openapi(
    postActionUpdateAccountPasswordPolicyRoute,
    postActionUpdateAccountPasswordPolicyRouteHandler,
  )
  .openapi(getActionUpdateAssumeRolePolicyRoute, getActionUpdateAssumeRolePolicyRouteHandler)
  .openapi(postActionUpdateAssumeRolePolicyRoute, postActionUpdateAssumeRolePolicyRouteHandler)
  .openapi(getActionUpdateGroupRoute, getActionUpdateGroupRouteHandler)
  .openapi(postActionUpdateGroupRoute, postActionUpdateGroupRouteHandler)
  .openapi(getActionUpdateLoginProfileRoute, getActionUpdateLoginProfileRouteHandler)
  .openapi(postActionUpdateLoginProfileRoute, postActionUpdateLoginProfileRouteHandler)
  .openapi(
    getActionUpdateOpenIDConnectProviderThumbprintRoute,
    getActionUpdateOpenIDConnectProviderThumbprintRouteHandler,
  )
  .openapi(
    postActionUpdateOpenIDConnectProviderThumbprintRoute,
    postActionUpdateOpenIDConnectProviderThumbprintRouteHandler,
  )
  .openapi(getActionUpdateRoleRoute, getActionUpdateRoleRouteHandler)
  .openapi(postActionUpdateRoleRoute, postActionUpdateRoleRouteHandler)
  .openapi(getActionUpdateRoleDescriptionRoute, getActionUpdateRoleDescriptionRouteHandler)
  .openapi(postActionUpdateRoleDescriptionRoute, postActionUpdateRoleDescriptionRouteHandler)
  .openapi(getActionUpdateSAMLProviderRoute, getActionUpdateSAMLProviderRouteHandler)
  .openapi(postActionUpdateSAMLProviderRoute, postActionUpdateSAMLProviderRouteHandler)
  .openapi(getActionUpdateSSHPublicKeyRoute, getActionUpdateSSHPublicKeyRouteHandler)
  .openapi(postActionUpdateSSHPublicKeyRoute, postActionUpdateSSHPublicKeyRouteHandler)
  .openapi(getActionUpdateServerCertificateRoute, getActionUpdateServerCertificateRouteHandler)
  .openapi(postActionUpdateServerCertificateRoute, postActionUpdateServerCertificateRouteHandler)
  .openapi(
    getActionUpdateServiceSpecificCredentialRoute,
    getActionUpdateServiceSpecificCredentialRouteHandler,
  )
  .openapi(
    postActionUpdateServiceSpecificCredentialRoute,
    postActionUpdateServiceSpecificCredentialRouteHandler,
  )
  .openapi(getActionUpdateSigningCertificateRoute, getActionUpdateSigningCertificateRouteHandler)
  .openapi(postActionUpdateSigningCertificateRoute, postActionUpdateSigningCertificateRouteHandler)
  .openapi(getActionUpdateUserRoute, getActionUpdateUserRouteHandler)
  .openapi(postActionUpdateUserRoute, postActionUpdateUserRouteHandler)
  .openapi(getActionUploadSSHPublicKeyRoute, getActionUploadSSHPublicKeyRouteHandler)
  .openapi(postActionUploadSSHPublicKeyRoute, postActionUploadSSHPublicKeyRouteHandler)
  .openapi(getActionUploadServerCertificateRoute, getActionUploadServerCertificateRouteHandler)
  .openapi(postActionUploadServerCertificateRoute, postActionUploadServerCertificateRouteHandler)
  .openapi(getActionUploadSigningCertificateRoute, getActionUploadSigningCertificateRouteHandler)
  .openapi(postActionUploadSigningCertificateRoute, postActionUploadSigningCertificateRouteHandler)

export default app

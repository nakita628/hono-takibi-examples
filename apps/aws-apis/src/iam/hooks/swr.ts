import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAddClientIDToOpenIDConnectProviderKey() {
  return ['#Action=AddClientIDToOpenIDConnectProvider'] as const
}

export function getActionAddRoleToInstanceProfileKey() {
  return ['#Action=AddRoleToInstanceProfile'] as const
}

export function getActionAddUserToGroupKey() {
  return ['#Action=AddUserToGroup'] as const
}

export function getActionAttachGroupPolicyKey() {
  return ['#Action=AttachGroupPolicy'] as const
}

export function getActionAttachRolePolicyKey() {
  return ['#Action=AttachRolePolicy'] as const
}

export function getActionAttachUserPolicyKey() {
  return ['#Action=AttachUserPolicy'] as const
}

export function getActionChangePasswordKey() {
  return ['#Action=ChangePassword'] as const
}

export function getActionCreateAccessKeyKey() {
  return ['#Action=CreateAccessKey'] as const
}

export function getActionCreateAccountAliasKey() {
  return ['#Action=CreateAccountAlias'] as const
}

export function getActionCreateGroupKey() {
  return ['#Action=CreateGroup'] as const
}

export function getActionCreateInstanceProfileKey() {
  return ['#Action=CreateInstanceProfile'] as const
}

export function getActionCreateLoginProfileKey() {
  return ['#Action=CreateLoginProfile'] as const
}

export function getActionCreateOpenIDConnectProviderKey() {
  return ['#Action=CreateOpenIDConnectProvider'] as const
}

export function getActionCreatePolicyKey() {
  return ['#Action=CreatePolicy'] as const
}

export function getActionCreatePolicyVersionKey() {
  return ['#Action=CreatePolicyVersion'] as const
}

export function getActionCreateRoleKey() {
  return ['#Action=CreateRole'] as const
}

export function getActionCreateSAMLProviderKey() {
  return ['#Action=CreateSAMLProvider'] as const
}

export function getActionCreateServiceLinkedRoleKey() {
  return ['#Action=CreateServiceLinkedRole'] as const
}

export function getActionCreateServiceSpecificCredentialKey() {
  return ['#Action=CreateServiceSpecificCredential'] as const
}

export function getActionCreateUserKey() {
  return ['#Action=CreateUser'] as const
}

export function getActionCreateVirtualMFADeviceKey() {
  return ['#Action=CreateVirtualMFADevice'] as const
}

export function getActionDeactivateMFADeviceKey() {
  return ['#Action=DeactivateMFADevice'] as const
}

export function getActionDeleteAccessKeyKey() {
  return ['#Action=DeleteAccessKey'] as const
}

export function getActionDeleteAccountAliasKey() {
  return ['#Action=DeleteAccountAlias'] as const
}

export function getActionDeleteAccountPasswordPolicyKey() {
  return ['#Action=DeleteAccountPasswordPolicy'] as const
}

export function getActionDeleteGroupKey() {
  return ['#Action=DeleteGroup'] as const
}

export function getActionDeleteGroupPolicyKey() {
  return ['#Action=DeleteGroupPolicy'] as const
}

export function getActionDeleteInstanceProfileKey() {
  return ['#Action=DeleteInstanceProfile'] as const
}

export function getActionDeleteLoginProfileKey() {
  return ['#Action=DeleteLoginProfile'] as const
}

export function getActionDeleteOpenIDConnectProviderKey() {
  return ['#Action=DeleteOpenIDConnectProvider'] as const
}

export function getActionDeletePolicyKey() {
  return ['#Action=DeletePolicy'] as const
}

export function getActionDeletePolicyVersionKey() {
  return ['#Action=DeletePolicyVersion'] as const
}

export function getActionDeleteRoleKey() {
  return ['#Action=DeleteRole'] as const
}

export function getActionDeleteRolePermissionsBoundaryKey() {
  return ['#Action=DeleteRolePermissionsBoundary'] as const
}

export function getActionDeleteRolePolicyKey() {
  return ['#Action=DeleteRolePolicy'] as const
}

export function getActionDeleteSAMLProviderKey() {
  return ['#Action=DeleteSAMLProvider'] as const
}

export function getActionDeleteSSHPublicKeyKey() {
  return ['#Action=DeleteSSHPublicKey'] as const
}

export function getActionDeleteServerCertificateKey() {
  return ['#Action=DeleteServerCertificate'] as const
}

export function getActionDeleteServiceLinkedRoleKey() {
  return ['#Action=DeleteServiceLinkedRole'] as const
}

export function getActionDeleteServiceSpecificCredentialKey() {
  return ['#Action=DeleteServiceSpecificCredential'] as const
}

export function getActionDeleteSigningCertificateKey() {
  return ['#Action=DeleteSigningCertificate'] as const
}

export function getActionDeleteUserKey() {
  return ['#Action=DeleteUser'] as const
}

export function getActionDeleteUserPermissionsBoundaryKey() {
  return ['#Action=DeleteUserPermissionsBoundary'] as const
}

export function getActionDeleteUserPolicyKey() {
  return ['#Action=DeleteUserPolicy'] as const
}

export function getActionDeleteVirtualMFADeviceKey() {
  return ['#Action=DeleteVirtualMFADevice'] as const
}

export function getActionDetachGroupPolicyKey() {
  return ['#Action=DetachGroupPolicy'] as const
}

export function getActionDetachRolePolicyKey() {
  return ['#Action=DetachRolePolicy'] as const
}

export function getActionDetachUserPolicyKey() {
  return ['#Action=DetachUserPolicy'] as const
}

export function getActionEnableMFADeviceKey() {
  return ['#Action=EnableMFADevice'] as const
}

export function getActionGenerateCredentialReportKey() {
  return ['#Action=GenerateCredentialReport'] as const
}

export function getActionGenerateOrganizationsAccessReportKey() {
  return ['#Action=GenerateOrganizationsAccessReport'] as const
}

export function getActionGenerateServiceLastAccessedDetailsKey() {
  return ['#Action=GenerateServiceLastAccessedDetails'] as const
}

export function getActionGetAccessKeyLastUsedKey() {
  return ['#Action=GetAccessKeyLastUsed'] as const
}

export function getActionGetAccountAuthorizationDetailsKey() {
  return ['#Action=GetAccountAuthorizationDetails'] as const
}

export function getActionGetAccountPasswordPolicyKey() {
  return ['#Action=GetAccountPasswordPolicy'] as const
}

export function getActionGetAccountSummaryKey() {
  return ['#Action=GetAccountSummary'] as const
}

export function getActionGetContextKeysForCustomPolicyKey() {
  return ['#Action=GetContextKeysForCustomPolicy'] as const
}

export function getActionGetContextKeysForPrincipalPolicyKey() {
  return ['#Action=GetContextKeysForPrincipalPolicy'] as const
}

export function getActionGetCredentialReportKey() {
  return ['#Action=GetCredentialReport'] as const
}

export function getActionGetGroupKey() {
  return ['#Action=GetGroup'] as const
}

export function getActionGetGroupPolicyKey() {
  return ['#Action=GetGroupPolicy'] as const
}

export function getActionGetInstanceProfileKey() {
  return ['#Action=GetInstanceProfile'] as const
}

export function getActionGetLoginProfileKey() {
  return ['#Action=GetLoginProfile'] as const
}

export function getActionGetMFADeviceKey() {
  return ['#Action=GetMFADevice'] as const
}

export function getActionGetOpenIDConnectProviderKey() {
  return ['#Action=GetOpenIDConnectProvider'] as const
}

export function getActionGetOrganizationsAccessReportKey() {
  return ['#Action=GetOrganizationsAccessReport'] as const
}

export function getActionGetPolicyKey() {
  return ['#Action=GetPolicy'] as const
}

export function getActionGetPolicyVersionKey() {
  return ['#Action=GetPolicyVersion'] as const
}

export function getActionGetRoleKey() {
  return ['#Action=GetRole'] as const
}

export function getActionGetRolePolicyKey() {
  return ['#Action=GetRolePolicy'] as const
}

export function getActionGetSAMLProviderKey() {
  return ['#Action=GetSAMLProvider'] as const
}

export function getActionGetSSHPublicKeyKey() {
  return ['#Action=GetSSHPublicKey'] as const
}

export function getActionGetServerCertificateKey() {
  return ['#Action=GetServerCertificate'] as const
}

export function getActionGetServiceLastAccessedDetailsKey() {
  return ['#Action=GetServiceLastAccessedDetails'] as const
}

export function getActionGetServiceLastAccessedDetailsWithEntitiesKey() {
  return ['#Action=GetServiceLastAccessedDetailsWithEntities'] as const
}

export function getActionGetServiceLinkedRoleDeletionStatusKey() {
  return ['#Action=GetServiceLinkedRoleDeletionStatus'] as const
}

export function getActionGetUserKey() {
  return ['#Action=GetUser'] as const
}

export function getActionGetUserPolicyKey() {
  return ['#Action=GetUserPolicy'] as const
}

export function getActionListAccessKeysKey() {
  return ['#Action=ListAccessKeys'] as const
}

export function getActionListAccountAliasesKey() {
  return ['#Action=ListAccountAliases'] as const
}

export function getActionListAttachedGroupPoliciesKey() {
  return ['#Action=ListAttachedGroupPolicies'] as const
}

export function getActionListAttachedRolePoliciesKey() {
  return ['#Action=ListAttachedRolePolicies'] as const
}

export function getActionListAttachedUserPoliciesKey() {
  return ['#Action=ListAttachedUserPolicies'] as const
}

export function getActionListEntitiesForPolicyKey() {
  return ['#Action=ListEntitiesForPolicy'] as const
}

export function getActionListGroupPoliciesKey() {
  return ['#Action=ListGroupPolicies'] as const
}

export function getActionListGroupsKey() {
  return ['#Action=ListGroups'] as const
}

export function getActionListGroupsForUserKey() {
  return ['#Action=ListGroupsForUser'] as const
}

export function getActionListInstanceProfileTagsKey() {
  return ['#Action=ListInstanceProfileTags'] as const
}

export function getActionListInstanceProfilesKey() {
  return ['#Action=ListInstanceProfiles'] as const
}

export function getActionListInstanceProfilesForRoleKey() {
  return ['#Action=ListInstanceProfilesForRole'] as const
}

export function getActionListMFADeviceTagsKey() {
  return ['#Action=ListMFADeviceTags'] as const
}

export function getActionListMFADevicesKey() {
  return ['#Action=ListMFADevices'] as const
}

export function getActionListOpenIDConnectProviderTagsKey() {
  return ['#Action=ListOpenIDConnectProviderTags'] as const
}

export function getActionListOpenIDConnectProvidersKey() {
  return ['#Action=ListOpenIDConnectProviders'] as const
}

export function getActionListPoliciesKey() {
  return ['#Action=ListPolicies'] as const
}

export function getActionListPoliciesGrantingServiceAccessKey() {
  return ['#Action=ListPoliciesGrantingServiceAccess'] as const
}

export function getActionListPolicyTagsKey() {
  return ['#Action=ListPolicyTags'] as const
}

export function getActionListPolicyVersionsKey() {
  return ['#Action=ListPolicyVersions'] as const
}

export function getActionListRolePoliciesKey() {
  return ['#Action=ListRolePolicies'] as const
}

export function getActionListRoleTagsKey() {
  return ['#Action=ListRoleTags'] as const
}

export function getActionListRolesKey() {
  return ['#Action=ListRoles'] as const
}

export function getActionListSAMLProviderTagsKey() {
  return ['#Action=ListSAMLProviderTags'] as const
}

export function getActionListSAMLProvidersKey() {
  return ['#Action=ListSAMLProviders'] as const
}

export function getActionListSSHPublicKeysKey() {
  return ['#Action=ListSSHPublicKeys'] as const
}

export function getActionListServerCertificateTagsKey() {
  return ['#Action=ListServerCertificateTags'] as const
}

export function getActionListServerCertificatesKey() {
  return ['#Action=ListServerCertificates'] as const
}

export function getActionListServiceSpecificCredentialsKey() {
  return ['#Action=ListServiceSpecificCredentials'] as const
}

export function getActionListSigningCertificatesKey() {
  return ['#Action=ListSigningCertificates'] as const
}

export function getActionListUserPoliciesKey() {
  return ['#Action=ListUserPolicies'] as const
}

export function getActionListUserTagsKey() {
  return ['#Action=ListUserTags'] as const
}

export function getActionListUsersKey() {
  return ['#Action=ListUsers'] as const
}

export function getActionListVirtualMFADevicesKey() {
  return ['#Action=ListVirtualMFADevices'] as const
}

export function getActionPutGroupPolicyKey() {
  return ['#Action=PutGroupPolicy'] as const
}

export function getActionPutRolePermissionsBoundaryKey() {
  return ['#Action=PutRolePermissionsBoundary'] as const
}

export function getActionPutRolePolicyKey() {
  return ['#Action=PutRolePolicy'] as const
}

export function getActionPutUserPermissionsBoundaryKey() {
  return ['#Action=PutUserPermissionsBoundary'] as const
}

export function getActionPutUserPolicyKey() {
  return ['#Action=PutUserPolicy'] as const
}

export function getActionRemoveClientIDFromOpenIDConnectProviderKey() {
  return ['#Action=RemoveClientIDFromOpenIDConnectProvider'] as const
}

export function getActionRemoveRoleFromInstanceProfileKey() {
  return ['#Action=RemoveRoleFromInstanceProfile'] as const
}

export function getActionRemoveUserFromGroupKey() {
  return ['#Action=RemoveUserFromGroup'] as const
}

export function getActionResetServiceSpecificCredentialKey() {
  return ['#Action=ResetServiceSpecificCredential'] as const
}

export function getActionResyncMFADeviceKey() {
  return ['#Action=ResyncMFADevice'] as const
}

export function getActionSetDefaultPolicyVersionKey() {
  return ['#Action=SetDefaultPolicyVersion'] as const
}

export function getActionSetSecurityTokenServicePreferencesKey() {
  return ['#Action=SetSecurityTokenServicePreferences'] as const
}

export function getActionSimulateCustomPolicyKey() {
  return ['#Action=SimulateCustomPolicy'] as const
}

export function getActionSimulatePrincipalPolicyKey() {
  return ['#Action=SimulatePrincipalPolicy'] as const
}

export function getActionTagInstanceProfileKey() {
  return ['#Action=TagInstanceProfile'] as const
}

export function getActionTagMFADeviceKey() {
  return ['#Action=TagMFADevice'] as const
}

export function getActionTagOpenIDConnectProviderKey() {
  return ['#Action=TagOpenIDConnectProvider'] as const
}

export function getActionTagPolicyKey() {
  return ['#Action=TagPolicy'] as const
}

export function getActionTagRoleKey() {
  return ['#Action=TagRole'] as const
}

export function getActionTagSAMLProviderKey() {
  return ['#Action=TagSAMLProvider'] as const
}

export function getActionTagServerCertificateKey() {
  return ['#Action=TagServerCertificate'] as const
}

export function getActionTagUserKey() {
  return ['#Action=TagUser'] as const
}

export function getActionUntagInstanceProfileKey() {
  return ['#Action=UntagInstanceProfile'] as const
}

export function getActionUntagMFADeviceKey() {
  return ['#Action=UntagMFADevice'] as const
}

export function getActionUntagOpenIDConnectProviderKey() {
  return ['#Action=UntagOpenIDConnectProvider'] as const
}

export function getActionUntagPolicyKey() {
  return ['#Action=UntagPolicy'] as const
}

export function getActionUntagRoleKey() {
  return ['#Action=UntagRole'] as const
}

export function getActionUntagSAMLProviderKey() {
  return ['#Action=UntagSAMLProvider'] as const
}

export function getActionUntagServerCertificateKey() {
  return ['#Action=UntagServerCertificate'] as const
}

export function getActionUntagUserKey() {
  return ['#Action=UntagUser'] as const
}

export function getActionUpdateAccessKeyKey() {
  return ['#Action=UpdateAccessKey'] as const
}

export function getActionUpdateAccountPasswordPolicyKey() {
  return ['#Action=UpdateAccountPasswordPolicy'] as const
}

export function getActionUpdateAssumeRolePolicyKey() {
  return ['#Action=UpdateAssumeRolePolicy'] as const
}

export function getActionUpdateGroupKey() {
  return ['#Action=UpdateGroup'] as const
}

export function getActionUpdateLoginProfileKey() {
  return ['#Action=UpdateLoginProfile'] as const
}

export function getActionUpdateOpenIDConnectProviderThumbprintKey() {
  return ['#Action=UpdateOpenIDConnectProviderThumbprint'] as const
}

export function getActionUpdateRoleKey() {
  return ['#Action=UpdateRole'] as const
}

export function getActionUpdateRoleDescriptionKey() {
  return ['#Action=UpdateRoleDescription'] as const
}

export function getActionUpdateSAMLProviderKey() {
  return ['#Action=UpdateSAMLProvider'] as const
}

export function getActionUpdateSSHPublicKeyKey() {
  return ['#Action=UpdateSSHPublicKey'] as const
}

export function getActionUpdateServerCertificateKey() {
  return ['#Action=UpdateServerCertificate'] as const
}

export function getActionUpdateServiceSpecificCredentialKey() {
  return ['#Action=UpdateServiceSpecificCredential'] as const
}

export function getActionUpdateSigningCertificateKey() {
  return ['#Action=UpdateSigningCertificate'] as const
}

export function getActionUpdateUserKey() {
  return ['#Action=UpdateUser'] as const
}

export function getActionUploadSSHPublicKeyKey() {
  return ['#Action=UploadSSHPublicKey'] as const
}

export function getActionUploadServerCertificateKey() {
  return ['#Action=UploadServerCertificate'] as const
}

export function getActionUploadSigningCertificateKey() {
  return ['#Action=UploadSigningCertificate'] as const
}

export function getGetActionAddClientIDToOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AddClientIDToOpenIDConnectProvider',
    '/#Action=AddClientIDToOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function useGetActionAddClientIDToOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddClientIDToOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AddClientIDToOpenIDConnectProvider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddClientIDToOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddClientIDToOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AddClientIDToOpenIDConnectProvider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddClientIDToOpenIDConnectProviderKey() {
  return [
    '#Action=AddClientIDToOpenIDConnectProvider',
    '/#Action=AddClientIDToOpenIDConnectProvider',
    'POST',
  ] as const
}

export function usePostActionAddClientIDToOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddClientIDToOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=AddClientIDToOpenIDConnectProvider'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddRoleToInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddRoleToInstanceProfile', '/#Action=AddRoleToInstanceProfile', keyArgs] as const
}

export function useGetActionAddRoleToInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddRoleToInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AddRoleToInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddRoleToInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddRoleToInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AddRoleToInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddRoleToInstanceProfileKey() {
  return ['#Action=AddRoleToInstanceProfile', '/#Action=AddRoleToInstanceProfile', 'POST'] as const
}

export function usePostActionAddRoleToInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddRoleToInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=AddRoleToInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddUserToGroupKey(
  args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddUserToGroup', '/#Action=AddUserToGroup', keyArgs] as const
}

export function useGetActionAddUserToGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddUserToGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddUserToGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddUserToGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddUserToGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddUserToGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddUserToGroupKey() {
  return ['#Action=AddUserToGroup', '/#Action=AddUserToGroup', 'POST'] as const
}

export function usePostActionAddUserToGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddUserToGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']> },
      ) => parseResponse(client['#Action=AddUserToGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAttachGroupPolicyKey(
  args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachGroupPolicy', '/#Action=AttachGroupPolicy', keyArgs] as const
}

export function useGetActionAttachGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAttachGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAttachGroupPolicyKey() {
  return ['#Action=AttachGroupPolicy', '/#Action=AttachGroupPolicy', 'POST'] as const
}

export function usePostActionAttachGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAttachGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']> },
      ) => parseResponse(client['#Action=AttachGroupPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAttachRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachRolePolicy', '/#Action=AttachRolePolicy', keyArgs] as const
}

export function useGetActionAttachRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAttachRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAttachRolePolicyKey() {
  return ['#Action=AttachRolePolicy', '/#Action=AttachRolePolicy', 'POST'] as const
}

export function usePostActionAttachRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAttachRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=AttachRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAttachUserPolicyKey(
  args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AttachUserPolicy', '/#Action=AttachUserPolicy', keyArgs] as const
}

export function useGetActionAttachUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAttachUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AttachUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAttachUserPolicyKey() {
  return ['#Action=AttachUserPolicy', '/#Action=AttachUserPolicy', 'POST'] as const
}

export function usePostActionAttachUserPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAttachUserPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']> },
      ) => parseResponse(client['#Action=AttachUserPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionChangePasswordKey(
  args: InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ChangePassword', '/#Action=ChangePassword', keyArgs] as const
}

export function useGetActionChangePassword<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionChangePasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ChangePassword'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionChangePassword<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionChangePasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ChangePassword'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionChangePasswordKey() {
  return ['#Action=ChangePassword', '/#Action=ChangePassword', 'POST'] as const
}

export function usePostActionChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ChangePassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ChangePassword']['$post']> },
      ) => parseResponse(client['#Action=ChangePassword'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateAccessKeyKey(
  args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateAccessKey', '/#Action=CreateAccessKey', keyArgs] as const
}

export function useGetActionCreateAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateAccessKeyKey() {
  return ['#Action=CreateAccessKey', '/#Action=CreateAccessKey', 'POST'] as const
}

export function usePostActionCreateAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']> },
      ) => parseResponse(client['#Action=CreateAccessKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateAccountAliasKey(
  args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateAccountAlias', '/#Action=CreateAccountAlias', keyArgs] as const
}

export function useGetActionCreateAccountAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAccountAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateAccountAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateAccountAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAccountAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateAccountAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateAccountAliasKey() {
  return ['#Action=CreateAccountAlias', '/#Action=CreateAccountAlias', 'POST'] as const
}

export function usePostActionCreateAccountAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateAccountAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']> },
      ) => parseResponse(client['#Action=CreateAccountAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateGroup', '/#Action=CreateGroup', keyArgs] as const
}

export function useGetActionCreateGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateGroupKey() {
  return ['#Action=CreateGroup', '/#Action=CreateGroup', 'POST'] as const
}

export function usePostActionCreateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateInstanceProfile', '/#Action=CreateInstanceProfile', keyArgs] as const
}

export function useGetActionCreateInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateInstanceProfileKey() {
  return ['#Action=CreateInstanceProfile', '/#Action=CreateInstanceProfile', 'POST'] as const
}

export function usePostActionCreateInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=CreateInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateLoginProfileKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateLoginProfile', '/#Action=CreateLoginProfile', keyArgs] as const
}

export function useGetActionCreateLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateLoginProfileKey() {
  return ['#Action=CreateLoginProfile', '/#Action=CreateLoginProfile', 'POST'] as const
}

export function usePostActionCreateLoginProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateLoginProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']> },
      ) => parseResponse(client['#Action=CreateLoginProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateOpenIDConnectProvider',
    '/#Action=CreateOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function useGetActionCreateOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateOpenIDConnectProviderKey() {
  return [
    '#Action=CreateOpenIDConnectProvider',
    '/#Action=CreateOpenIDConnectProvider',
    'POST',
  ] as const
}

export function usePostActionCreateOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>
        },
      ) => parseResponse(client['#Action=CreateOpenIDConnectProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreatePolicyKey(
  args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreatePolicy', '/#Action=CreatePolicy', keyArgs] as const
}

export function useGetActionCreatePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreatePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreatePolicyKey() {
  return ['#Action=CreatePolicy', '/#Action=CreatePolicy', 'POST'] as const
}

export function usePostActionCreatePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreatePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']> },
      ) => parseResponse(client['#Action=CreatePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreatePolicyVersionKey(
  args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreatePolicyVersion', '/#Action=CreatePolicyVersion', keyArgs] as const
}

export function useGetActionCreatePolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreatePolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreatePolicyVersionKey() {
  return ['#Action=CreatePolicyVersion', '/#Action=CreatePolicyVersion', 'POST'] as const
}

export function usePostActionCreatePolicyVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreatePolicyVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']> },
      ) => parseResponse(client['#Action=CreatePolicyVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateRoleKey(
  args: InferRequestType<(typeof client)['#Action=CreateRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateRole', '/#Action=CreateRole', keyArgs] as const
}

export function useGetActionCreateRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateRoleKey() {
  return ['#Action=CreateRole', '/#Action=CreateRole', 'POST'] as const
}

export function usePostActionCreateRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateRole']['$post']> },
      ) => parseResponse(client['#Action=CreateRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateSAMLProvider', '/#Action=CreateSAMLProvider', keyArgs] as const
}

export function useGetActionCreateSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateSAMLProviderKey() {
  return ['#Action=CreateSAMLProvider', '/#Action=CreateSAMLProvider', 'POST'] as const
}

export function usePostActionCreateSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=CreateSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateServiceLinkedRoleKey(
  args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateServiceLinkedRole', '/#Action=CreateServiceLinkedRole', keyArgs] as const
}

export function useGetActionCreateServiceLinkedRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateServiceLinkedRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateServiceLinkedRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateServiceLinkedRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateServiceLinkedRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateServiceLinkedRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateServiceLinkedRoleKey() {
  return ['#Action=CreateServiceLinkedRole', '/#Action=CreateServiceLinkedRole', 'POST'] as const
}

export function usePostActionCreateServiceLinkedRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateServiceLinkedRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']> },
      ) => parseResponse(client['#Action=CreateServiceLinkedRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateServiceSpecificCredentialKey(
  args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateServiceSpecificCredential',
    '/#Action=CreateServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function useGetActionCreateServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateServiceSpecificCredentialKey() {
  return [
    '#Action=CreateServiceSpecificCredential',
    '/#Action=CreateServiceSpecificCredential',
    'POST',
  ] as const
}

export function usePostActionCreateServiceSpecificCredential<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateServiceSpecificCredentialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>
        },
      ) =>
        parseResponse(client['#Action=CreateServiceSpecificCredential'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateUserKey(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateUser', '/#Action=CreateUser', keyArgs] as const
}

export function useGetActionCreateUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateUserKey() {
  return ['#Action=CreateUser', '/#Action=CreateUser', 'POST'] as const
}

export function usePostActionCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateUser']['$post']> },
      ) => parseResponse(client['#Action=CreateUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateVirtualMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateVirtualMFADevice', '/#Action=CreateVirtualMFADevice', keyArgs] as const
}

export function useGetActionCreateVirtualMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateVirtualMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateVirtualMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateVirtualMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateVirtualMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateVirtualMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateVirtualMFADeviceKey() {
  return ['#Action=CreateVirtualMFADevice', '/#Action=CreateVirtualMFADevice', 'POST'] as const
}

export function usePostActionCreateVirtualMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateVirtualMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']> },
      ) => parseResponse(client['#Action=CreateVirtualMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeactivateMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeactivateMFADevice', '/#Action=DeactivateMFADevice', keyArgs] as const
}

export function useGetActionDeactivateMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeactivateMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeactivateMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeactivateMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeactivateMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeactivateMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeactivateMFADeviceKey() {
  return ['#Action=DeactivateMFADevice', '/#Action=DeactivateMFADevice', 'POST'] as const
}

export function usePostActionDeactivateMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeactivateMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']> },
      ) => parseResponse(client['#Action=DeactivateMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAccessKeyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAccessKey', '/#Action=DeleteAccessKey', keyArgs] as const
}

export function useGetActionDeleteAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAccessKeyKey() {
  return ['#Action=DeleteAccessKey', '/#Action=DeleteAccessKey', 'POST'] as const
}

export function usePostActionDeleteAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']> },
      ) => parseResponse(client['#Action=DeleteAccessKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAccountAliasKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAccountAlias', '/#Action=DeleteAccountAlias', keyArgs] as const
}

export function useGetActionDeleteAccountAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccountAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAccountAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAccountAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccountAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAccountAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAccountAliasKey() {
  return ['#Action=DeleteAccountAlias', '/#Action=DeleteAccountAlias', 'POST'] as const
}

export function usePostActionDeleteAccountAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAccountAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']> },
      ) => parseResponse(client['#Action=DeleteAccountAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAccountPasswordPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteAccountPasswordPolicy',
    '/#Action=DeleteAccountPasswordPolicy',
    keyArgs,
  ] as const
}

export function useGetActionDeleteAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAccountPasswordPolicyKey() {
  return [
    '#Action=DeleteAccountPasswordPolicy',
    '/#Action=DeleteAccountPasswordPolicy',
    'POST',
  ] as const
}

export function usePostActionDeleteAccountPasswordPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAccountPasswordPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteGroup', '/#Action=DeleteGroup', keyArgs] as const
}

export function useGetActionDeleteGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteGroupKey() {
  return ['#Action=DeleteGroup', '/#Action=DeleteGroup', 'POST'] as const
}

export function usePostActionDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteGroupPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteGroupPolicy', '/#Action=DeleteGroupPolicy', keyArgs] as const
}

export function useGetActionDeleteGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteGroupPolicyKey() {
  return ['#Action=DeleteGroupPolicy', '/#Action=DeleteGroupPolicy', 'POST'] as const
}

export function usePostActionDeleteGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']> },
      ) => parseResponse(client['#Action=DeleteGroupPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteInstanceProfile', '/#Action=DeleteInstanceProfile', keyArgs] as const
}

export function useGetActionDeleteInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteInstanceProfileKey() {
  return ['#Action=DeleteInstanceProfile', '/#Action=DeleteInstanceProfile', 'POST'] as const
}

export function usePostActionDeleteInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=DeleteInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteLoginProfileKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLoginProfile', '/#Action=DeleteLoginProfile', keyArgs] as const
}

export function useGetActionDeleteLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteLoginProfileKey() {
  return ['#Action=DeleteLoginProfile', '/#Action=DeleteLoginProfile', 'POST'] as const
}

export function usePostActionDeleteLoginProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteLoginProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']> },
      ) => parseResponse(client['#Action=DeleteLoginProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteOpenIDConnectProvider',
    '/#Action=DeleteOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function useGetActionDeleteOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteOpenIDConnectProviderKey() {
  return [
    '#Action=DeleteOpenIDConnectProvider',
    '/#Action=DeleteOpenIDConnectProvider',
    'POST',
  ] as const
}

export function usePostActionDeleteOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeletePolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', keyArgs] as const
}

export function useGetActionDeletePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeletePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeletePolicyKey() {
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', 'POST'] as const
}

export function usePostActionDeletePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeletePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']> },
      ) => parseResponse(client['#Action=DeletePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeletePolicyVersionKey(
  args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeletePolicyVersion', '/#Action=DeletePolicyVersion', keyArgs] as const
}

export function useGetActionDeletePolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeletePolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeletePolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeletePolicyVersionKey() {
  return ['#Action=DeletePolicyVersion', '/#Action=DeletePolicyVersion', 'POST'] as const
}

export function usePostActionDeletePolicyVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeletePolicyVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']> },
      ) => parseResponse(client['#Action=DeletePolicyVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteRoleKey(
  args: InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteRole', '/#Action=DeleteRole', keyArgs] as const
}

export function useGetActionDeleteRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteRoleKey() {
  return ['#Action=DeleteRole', '/#Action=DeleteRole', 'POST'] as const
}

export function usePostActionDeleteRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteRole']['$post']> },
      ) => parseResponse(client['#Action=DeleteRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteRolePermissionsBoundaryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteRolePermissionsBoundary',
    '/#Action=DeleteRolePermissionsBoundary',
    keyArgs,
  ] as const
}

export function useGetActionDeleteRolePermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRolePermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteRolePermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRolePermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteRolePermissionsBoundaryKey() {
  return [
    '#Action=DeleteRolePermissionsBoundary',
    '/#Action=DeleteRolePermissionsBoundary',
    'POST',
  ] as const
}

export function usePostActionDeleteRolePermissionsBoundary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteRolePermissionsBoundaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteRolePolicy', '/#Action=DeleteRolePolicy', keyArgs] as const
}

export function useGetActionDeleteRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteRolePolicyKey() {
  return ['#Action=DeleteRolePolicy', '/#Action=DeleteRolePolicy', 'POST'] as const
}

export function usePostActionDeleteRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=DeleteRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSAMLProvider', '/#Action=DeleteSAMLProvider', keyArgs] as const
}

export function useGetActionDeleteSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSAMLProviderKey() {
  return ['#Action=DeleteSAMLProvider', '/#Action=DeleteSAMLProvider', 'POST'] as const
}

export function usePostActionDeleteSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=DeleteSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSSHPublicKeyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSSHPublicKey', '/#Action=DeleteSSHPublicKey', keyArgs] as const
}

export function useGetActionDeleteSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSSHPublicKeyKey() {
  return ['#Action=DeleteSSHPublicKey', '/#Action=DeleteSSHPublicKey', 'POST'] as const
}

export function usePostActionDeleteSSHPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSSHPublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']> },
      ) => parseResponse(client['#Action=DeleteSSHPublicKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteServerCertificate', '/#Action=DeleteServerCertificate', keyArgs] as const
}

export function useGetActionDeleteServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteServerCertificateKey() {
  return ['#Action=DeleteServerCertificate', '/#Action=DeleteServerCertificate', 'POST'] as const
}

export function usePostActionDeleteServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=DeleteServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteServiceLinkedRoleKey(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteServiceLinkedRole', '/#Action=DeleteServiceLinkedRole', keyArgs] as const
}

export function useGetActionDeleteServiceLinkedRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServiceLinkedRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServiceLinkedRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteServiceLinkedRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServiceLinkedRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServiceLinkedRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteServiceLinkedRoleKey() {
  return ['#Action=DeleteServiceLinkedRole', '/#Action=DeleteServiceLinkedRole', 'POST'] as const
}

export function usePostActionDeleteServiceLinkedRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteServiceLinkedRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']> },
      ) => parseResponse(client['#Action=DeleteServiceLinkedRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteServiceSpecificCredentialKey(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteServiceSpecificCredential',
    '/#Action=DeleteServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function useGetActionDeleteServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteServiceSpecificCredentialKey() {
  return [
    '#Action=DeleteServiceSpecificCredential',
    '/#Action=DeleteServiceSpecificCredential',
    'POST',
  ] as const
}

export function usePostActionDeleteServiceSpecificCredential<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteServiceSpecificCredentialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DeleteServiceSpecificCredential'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSigningCertificateKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSigningCertificate', '/#Action=DeleteSigningCertificate', keyArgs] as const
}

export function useGetActionDeleteSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSigningCertificateKey() {
  return ['#Action=DeleteSigningCertificate', '/#Action=DeleteSigningCertificate', 'POST'] as const
}

export function usePostActionDeleteSigningCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSigningCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']> },
      ) => parseResponse(client['#Action=DeleteSigningCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteUserKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteUser', '/#Action=DeleteUser', keyArgs] as const
}

export function useGetActionDeleteUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteUserKey() {
  return ['#Action=DeleteUser', '/#Action=DeleteUser', 'POST'] as const
}

export function usePostActionDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteUser']['$post']> },
      ) => parseResponse(client['#Action=DeleteUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteUserPermissionsBoundaryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteUserPermissionsBoundary',
    '/#Action=DeleteUserPermissionsBoundary',
    keyArgs,
  ] as const
}

export function useGetActionDeleteUserPermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserPermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteUserPermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserPermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteUserPermissionsBoundaryKey() {
  return [
    '#Action=DeleteUserPermissionsBoundary',
    '/#Action=DeleteUserPermissionsBoundary',
    'POST',
  ] as const
}

export function usePostActionDeleteUserPermissionsBoundary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteUserPermissionsBoundaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteUserPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteUserPolicy', '/#Action=DeleteUserPolicy', keyArgs] as const
}

export function useGetActionDeleteUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteUserPolicyKey() {
  return ['#Action=DeleteUserPolicy', '/#Action=DeleteUserPolicy', 'POST'] as const
}

export function usePostActionDeleteUserPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteUserPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']> },
      ) => parseResponse(client['#Action=DeleteUserPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteVirtualMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteVirtualMFADevice', '/#Action=DeleteVirtualMFADevice', keyArgs] as const
}

export function useGetActionDeleteVirtualMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteVirtualMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteVirtualMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteVirtualMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteVirtualMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteVirtualMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteVirtualMFADeviceKey() {
  return ['#Action=DeleteVirtualMFADevice', '/#Action=DeleteVirtualMFADevice', 'POST'] as const
}

export function usePostActionDeleteVirtualMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteVirtualMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']> },
      ) => parseResponse(client['#Action=DeleteVirtualMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDetachGroupPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachGroupPolicy', '/#Action=DetachGroupPolicy', keyArgs] as const
}

export function useGetActionDetachGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDetachGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDetachGroupPolicyKey() {
  return ['#Action=DetachGroupPolicy', '/#Action=DetachGroupPolicy', 'POST'] as const
}

export function usePostActionDetachGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDetachGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']> },
      ) => parseResponse(client['#Action=DetachGroupPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDetachRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachRolePolicy', '/#Action=DetachRolePolicy', keyArgs] as const
}

export function useGetActionDetachRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDetachRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDetachRolePolicyKey() {
  return ['#Action=DetachRolePolicy', '/#Action=DetachRolePolicy', 'POST'] as const
}

export function usePostActionDetachRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDetachRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=DetachRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDetachUserPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetachUserPolicy', '/#Action=DetachUserPolicy', keyArgs] as const
}

export function useGetActionDetachUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDetachUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DetachUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDetachUserPolicyKey() {
  return ['#Action=DetachUserPolicy', '/#Action=DetachUserPolicy', 'POST'] as const
}

export function usePostActionDetachUserPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDetachUserPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']> },
      ) => parseResponse(client['#Action=DetachUserPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EnableMFADevice', '/#Action=EnableMFADevice', keyArgs] as const
}

export function useGetActionEnableMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionEnableMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=EnableMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableMFADeviceKey() {
  return ['#Action=EnableMFADevice', '/#Action=EnableMFADevice', 'POST'] as const
}

export function usePostActionEnableMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']> },
      ) => parseResponse(client['#Action=EnableMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGenerateCredentialReportKey(
  args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GenerateCredentialReport', '/#Action=GenerateCredentialReport', keyArgs] as const
}

export function useGetActionGenerateCredentialReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateCredentialReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GenerateCredentialReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGenerateCredentialReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateCredentialReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GenerateCredentialReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGenerateCredentialReportKey() {
  return ['#Action=GenerateCredentialReport', '/#Action=GenerateCredentialReport', 'POST'] as const
}

export function usePostActionGenerateCredentialReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGenerateCredentialReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']> },
      ) => parseResponse(client['#Action=GenerateCredentialReport'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGenerateOrganizationsAccessReportKey(
  args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GenerateOrganizationsAccessReport',
    '/#Action=GenerateOrganizationsAccessReport',
    keyArgs,
  ] as const
}

export function useGetActionGenerateOrganizationsAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateOrganizationsAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GenerateOrganizationsAccessReport'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGenerateOrganizationsAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateOrganizationsAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GenerateOrganizationsAccessReport'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGenerateOrganizationsAccessReportKey() {
  return [
    '#Action=GenerateOrganizationsAccessReport',
    '/#Action=GenerateOrganizationsAccessReport',
    'POST',
  ] as const
}

export function usePostActionGenerateOrganizationsAccessReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGenerateOrganizationsAccessReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GenerateOrganizationsAccessReport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGenerateServiceLastAccessedDetailsKey(
  args: InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GenerateServiceLastAccessedDetails',
    '/#Action=GenerateServiceLastAccessedDetails',
    keyArgs,
  ] as const
}

export function useGetActionGenerateServiceLastAccessedDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateServiceLastAccessedDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GenerateServiceLastAccessedDetails'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGenerateServiceLastAccessedDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGenerateServiceLastAccessedDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GenerateServiceLastAccessedDetails'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGenerateServiceLastAccessedDetailsKey() {
  return [
    '#Action=GenerateServiceLastAccessedDetails',
    '/#Action=GenerateServiceLastAccessedDetails',
    'POST',
  ] as const
}

export function usePostActionGenerateServiceLastAccessedDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGenerateServiceLastAccessedDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GenerateServiceLastAccessedDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccessKeyLastUsedKey(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccessKeyLastUsed', '/#Action=GetAccessKeyLastUsed', keyArgs] as const
}

export function useGetActionGetAccessKeyLastUsed<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccessKeyLastUsedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccessKeyLastUsed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccessKeyLastUsed<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccessKeyLastUsedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccessKeyLastUsed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccessKeyLastUsedKey() {
  return ['#Action=GetAccessKeyLastUsed', '/#Action=GetAccessKeyLastUsed', 'POST'] as const
}

export function usePostActionGetAccessKeyLastUsed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccessKeyLastUsedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']> },
      ) => parseResponse(client['#Action=GetAccessKeyLastUsed'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccountAuthorizationDetailsKey(
  args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetAccountAuthorizationDetails',
    '/#Action=GetAccountAuthorizationDetails',
    keyArgs,
  ] as const
}

export function useGetActionGetAccountAuthorizationDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountAuthorizationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountAuthorizationDetails'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccountAuthorizationDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountAuthorizationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountAuthorizationDetails'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccountAuthorizationDetailsKey() {
  return [
    '#Action=GetAccountAuthorizationDetails',
    '/#Action=GetAccountAuthorizationDetails',
    'POST',
  ] as const
}

export function usePostActionGetAccountAuthorizationDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccountAuthorizationDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>
        },
      ) =>
        parseResponse(client['#Action=GetAccountAuthorizationDetails'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccountPasswordPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccountPasswordPolicy', '/#Action=GetAccountPasswordPolicy', keyArgs] as const
}

export function useGetActionGetAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccountPasswordPolicyKey() {
  return ['#Action=GetAccountPasswordPolicy', '/#Action=GetAccountPasswordPolicy', 'POST'] as const
}

export function usePostActionGetAccountPasswordPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccountPasswordPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']> },
      ) => parseResponse(client['#Action=GetAccountPasswordPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccountSummaryKey(
  args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccountSummary', '/#Action=GetAccountSummary', keyArgs] as const
}

export function useGetActionGetAccountSummary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccountSummary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccountSummary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccountSummary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccountSummaryKey() {
  return ['#Action=GetAccountSummary', '/#Action=GetAccountSummary', 'POST'] as const
}

export function usePostActionGetAccountSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccountSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']> },
      ) => parseResponse(client['#Action=GetAccountSummary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetContextKeysForCustomPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetContextKeysForCustomPolicy',
    '/#Action=GetContextKeysForCustomPolicy',
    keyArgs,
  ] as const
}

export function useGetActionGetContextKeysForCustomPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetContextKeysForCustomPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetContextKeysForCustomPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetContextKeysForCustomPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetContextKeysForCustomPolicyKey() {
  return [
    '#Action=GetContextKeysForCustomPolicy',
    '/#Action=GetContextKeysForCustomPolicy',
    'POST',
  ] as const
}

export function usePostActionGetContextKeysForCustomPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetContextKeysForCustomPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>
        },
      ) => parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetContextKeysForPrincipalPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetContextKeysForPrincipalPolicy',
    '/#Action=GetContextKeysForPrincipalPolicy',
    keyArgs,
  ] as const
}

export function useGetActionGetContextKeysForPrincipalPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetContextKeysForPrincipalPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetContextKeysForPrincipalPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetContextKeysForPrincipalPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetContextKeysForPrincipalPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetContextKeysForPrincipalPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetContextKeysForPrincipalPolicyKey() {
  return [
    '#Action=GetContextKeysForPrincipalPolicy',
    '/#Action=GetContextKeysForPrincipalPolicy',
    'POST',
  ] as const
}

export function usePostActionGetContextKeysForPrincipalPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetContextKeysForPrincipalPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=GetContextKeysForPrincipalPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetCredentialReportKey(
  args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetCredentialReport', '/#Action=GetCredentialReport', keyArgs] as const
}

export function useGetActionGetCredentialReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetCredentialReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetCredentialReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetCredentialReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetCredentialReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetCredentialReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetCredentialReportKey() {
  return ['#Action=GetCredentialReport', '/#Action=GetCredentialReport', 'POST'] as const
}

export function usePostActionGetCredentialReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetCredentialReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']> },
      ) => parseResponse(client['#Action=GetCredentialReport'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetGroupKey(
  args: InferRequestType<(typeof client)['#Action=GetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetGroup', '/#Action=GetGroup', keyArgs] as const
}

export function useGetActionGetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetGroupKey() {
  return ['#Action=GetGroup', '/#Action=GetGroup', 'POST'] as const
}

export function usePostActionGetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetGroup']['$post']> },
      ) => parseResponse(client['#Action=GetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetGroupPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetGroupPolicy', '/#Action=GetGroupPolicy', keyArgs] as const
}

export function useGetActionGetGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetGroupPolicyKey() {
  return ['#Action=GetGroupPolicy', '/#Action=GetGroupPolicy', 'POST'] as const
}

export function usePostActionGetGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']> },
      ) => parseResponse(client['#Action=GetGroupPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetInstanceProfile', '/#Action=GetInstanceProfile', keyArgs] as const
}

export function useGetActionGetInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetInstanceProfileKey() {
  return ['#Action=GetInstanceProfile', '/#Action=GetInstanceProfile', 'POST'] as const
}

export function usePostActionGetInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=GetInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetLoginProfileKey(
  args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetLoginProfile', '/#Action=GetLoginProfile', keyArgs] as const
}

export function useGetActionGetLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetLoginProfileKey() {
  return ['#Action=GetLoginProfile', '/#Action=GetLoginProfile', 'POST'] as const
}

export function usePostActionGetLoginProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetLoginProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']> },
      ) => parseResponse(client['#Action=GetLoginProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetMFADevice', '/#Action=GetMFADevice', keyArgs] as const
}

export function useGetActionGetMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetMFADeviceKey() {
  return ['#Action=GetMFADevice', '/#Action=GetMFADevice', 'POST'] as const
}

export function usePostActionGetMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']> },
      ) => parseResponse(client['#Action=GetMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetOpenIDConnectProvider', '/#Action=GetOpenIDConnectProvider', keyArgs] as const
}

export function useGetActionGetOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetOpenIDConnectProviderKey() {
  return ['#Action=GetOpenIDConnectProvider', '/#Action=GetOpenIDConnectProvider', 'POST'] as const
}

export function usePostActionGetOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']> },
      ) => parseResponse(client['#Action=GetOpenIDConnectProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetOrganizationsAccessReportKey(
  args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetOrganizationsAccessReport',
    '/#Action=GetOrganizationsAccessReport',
    keyArgs,
  ] as const
}

export function useGetActionGetOrganizationsAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetOrganizationsAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetOrganizationsAccessReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetOrganizationsAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetOrganizationsAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetOrganizationsAccessReport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetOrganizationsAccessReportKey() {
  return [
    '#Action=GetOrganizationsAccessReport',
    '/#Action=GetOrganizationsAccessReport',
    'POST',
  ] as const
}

export function usePostActionGetOrganizationsAccessReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetOrganizationsAccessReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>
        },
      ) => parseResponse(client['#Action=GetOrganizationsAccessReport'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetPolicy', '/#Action=GetPolicy', keyArgs] as const
}

export function useGetActionGetPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetPolicyKey() {
  return ['#Action=GetPolicy', '/#Action=GetPolicy', 'POST'] as const
}

export function usePostActionGetPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetPolicy']['$post']> },
      ) => parseResponse(client['#Action=GetPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetPolicyVersionKey(
  args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetPolicyVersion', '/#Action=GetPolicyVersion', keyArgs] as const
}

export function useGetActionGetPolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetPolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetPolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetPolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetPolicyVersionKey() {
  return ['#Action=GetPolicyVersion', '/#Action=GetPolicyVersion', 'POST'] as const
}

export function usePostActionGetPolicyVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetPolicyVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']> },
      ) => parseResponse(client['#Action=GetPolicyVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetRoleKey(
  args: InferRequestType<(typeof client)['#Action=GetRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetRole', '/#Action=GetRole', keyArgs] as const
}

export function useGetActionGetRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetRoleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetRoleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetRoleKey() {
  return ['#Action=GetRole', '/#Action=GetRole', 'POST'] as const
}

export function usePostActionGetRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetRole']['$post']> },
      ) => parseResponse(client['#Action=GetRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetRolePolicy', '/#Action=GetRolePolicy', keyArgs] as const
}

export function useGetActionGetRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetRolePolicyKey() {
  return ['#Action=GetRolePolicy', '/#Action=GetRolePolicy', 'POST'] as const
}

export function usePostActionGetRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=GetRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSAMLProvider', '/#Action=GetSAMLProvider', keyArgs] as const
}

export function useGetActionGetSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSAMLProviderKey() {
  return ['#Action=GetSAMLProvider', '/#Action=GetSAMLProvider', 'POST'] as const
}

export function usePostActionGetSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=GetSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSSHPublicKeyKey(
  args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSSHPublicKey', '/#Action=GetSSHPublicKey', keyArgs] as const
}

export function useGetActionGetSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSSHPublicKeyKey() {
  return ['#Action=GetSSHPublicKey', '/#Action=GetSSHPublicKey', 'POST'] as const
}

export function usePostActionGetSSHPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSSHPublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']> },
      ) => parseResponse(client['#Action=GetSSHPublicKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetServerCertificate', '/#Action=GetServerCertificate', keyArgs] as const
}

export function useGetActionGetServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetServerCertificateKey() {
  return ['#Action=GetServerCertificate', '/#Action=GetServerCertificate', 'POST'] as const
}

export function usePostActionGetServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=GetServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetServiceLastAccessedDetailsKey(
  args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetServiceLastAccessedDetails',
    '/#Action=GetServiceLastAccessedDetails',
    keyArgs,
  ] as const
}

export function useGetActionGetServiceLastAccessedDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLastAccessedDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetServiceLastAccessedDetails'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetServiceLastAccessedDetails<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLastAccessedDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetServiceLastAccessedDetails'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetServiceLastAccessedDetailsKey() {
  return [
    '#Action=GetServiceLastAccessedDetails',
    '/#Action=GetServiceLastAccessedDetails',
    'POST',
  ] as const
}

export function usePostActionGetServiceLastAccessedDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetServiceLastAccessedDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>
        },
      ) => parseResponse(client['#Action=GetServiceLastAccessedDetails'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetServiceLastAccessedDetailsWithEntitiesKey(
  args: InferRequestType<
    (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetServiceLastAccessedDetailsWithEntities',
    '/#Action=GetServiceLastAccessedDetailsWithEntities',
    keyArgs,
  ] as const
}

export function useGetActionGetServiceLastAccessedDetailsWithEntities<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLastAccessedDetailsWithEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetServiceLastAccessedDetailsWithEntities'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetServiceLastAccessedDetailsWithEntities<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLastAccessedDetailsWithEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetServiceLastAccessedDetailsWithEntities'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetServiceLastAccessedDetailsWithEntitiesKey() {
  return [
    '#Action=GetServiceLastAccessedDetailsWithEntities',
    '/#Action=GetServiceLastAccessedDetailsWithEntities',
    'POST',
  ] as const
}

export function usePostActionGetServiceLastAccessedDetailsWithEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetServiceLastAccessedDetailsWithEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetServiceLastAccessedDetailsWithEntities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetServiceLinkedRoleDeletionStatusKey(
  args: InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetServiceLinkedRoleDeletionStatus',
    '/#Action=GetServiceLinkedRoleDeletionStatus',
    keyArgs,
  ] as const
}

export function useGetActionGetServiceLinkedRoleDeletionStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLinkedRoleDeletionStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetServiceLinkedRoleDeletionStatus'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetServiceLinkedRoleDeletionStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetServiceLinkedRoleDeletionStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetServiceLinkedRoleDeletionStatus'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetServiceLinkedRoleDeletionStatusKey() {
  return [
    '#Action=GetServiceLinkedRoleDeletionStatus',
    '/#Action=GetServiceLinkedRoleDeletionStatus',
    'POST',
  ] as const
}

export function usePostActionGetServiceLinkedRoleDeletionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetServiceLinkedRoleDeletionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetServiceLinkedRoleDeletionStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetUserKey(
  args: InferRequestType<(typeof client)['#Action=GetUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetUser', '/#Action=GetUser', keyArgs] as const
}

export function useGetActionGetUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionGetUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetUserKey() {
  return ['#Action=GetUser', '/#Action=GetUser', 'POST'] as const
}

export function usePostActionGetUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetUser']['$post']> },
      ) => parseResponse(client['#Action=GetUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetUserPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetUserPolicy', '/#Action=GetUserPolicy', keyArgs] as const
}

export function useGetActionGetUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetUserPolicyKey() {
  return ['#Action=GetUserPolicy', '/#Action=GetUserPolicy', 'POST'] as const
}

export function usePostActionGetUserPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetUserPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']> },
      ) => parseResponse(client['#Action=GetUserPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListAccessKeysKey(
  args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListAccessKeys', '/#Action=ListAccessKeys', keyArgs] as const
}

export function useGetActionListAccessKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAccessKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListAccessKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListAccessKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAccessKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListAccessKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListAccessKeysKey() {
  return ['#Action=ListAccessKeys', '/#Action=ListAccessKeys', 'POST'] as const
}

export function usePostActionListAccessKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListAccessKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']> },
      ) => parseResponse(client['#Action=ListAccessKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListAccountAliasesKey(
  args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListAccountAliases', '/#Action=ListAccountAliases', keyArgs] as const
}

export function useGetActionListAccountAliases<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAccountAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListAccountAliases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListAccountAliases<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAccountAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListAccountAliases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListAccountAliasesKey() {
  return ['#Action=ListAccountAliases', '/#Action=ListAccountAliases', 'POST'] as const
}

export function usePostActionListAccountAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListAccountAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']> },
      ) => parseResponse(client['#Action=ListAccountAliases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListAttachedGroupPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListAttachedGroupPolicies',
    '/#Action=ListAttachedGroupPolicies',
    keyArgs,
  ] as const
}

export function useGetActionListAttachedGroupPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedGroupPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedGroupPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListAttachedGroupPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedGroupPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedGroupPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListAttachedGroupPoliciesKey() {
  return [
    '#Action=ListAttachedGroupPolicies',
    '/#Action=ListAttachedGroupPolicies',
    'POST',
  ] as const
}

export function usePostActionListAttachedGroupPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListAttachedGroupPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListAttachedGroupPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListAttachedRolePoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListAttachedRolePolicies', '/#Action=ListAttachedRolePolicies', keyArgs] as const
}

export function useGetActionListAttachedRolePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedRolePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedRolePolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListAttachedRolePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedRolePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedRolePolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListAttachedRolePoliciesKey() {
  return ['#Action=ListAttachedRolePolicies', '/#Action=ListAttachedRolePolicies', 'POST'] as const
}

export function usePostActionListAttachedRolePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListAttachedRolePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']> },
      ) => parseResponse(client['#Action=ListAttachedRolePolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListAttachedUserPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListAttachedUserPolicies', '/#Action=ListAttachedUserPolicies', keyArgs] as const
}

export function useGetActionListAttachedUserPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedUserPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedUserPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListAttachedUserPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListAttachedUserPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListAttachedUserPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListAttachedUserPoliciesKey() {
  return ['#Action=ListAttachedUserPolicies', '/#Action=ListAttachedUserPolicies', 'POST'] as const
}

export function usePostActionListAttachedUserPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListAttachedUserPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListAttachedUserPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListEntitiesForPolicyKey(
  args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListEntitiesForPolicy', '/#Action=ListEntitiesForPolicy', keyArgs] as const
}

export function useGetActionListEntitiesForPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListEntitiesForPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListEntitiesForPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListEntitiesForPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListEntitiesForPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListEntitiesForPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListEntitiesForPolicyKey() {
  return ['#Action=ListEntitiesForPolicy', '/#Action=ListEntitiesForPolicy', 'POST'] as const
}

export function usePostActionListEntitiesForPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListEntitiesForPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']> },
      ) => parseResponse(client['#Action=ListEntitiesForPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListGroupPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListGroupPolicies', '/#Action=ListGroupPolicies', keyArgs] as const
}

export function useGetActionListGroupPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroupPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListGroupPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroupPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListGroupPoliciesKey() {
  return ['#Action=ListGroupPolicies', '/#Action=ListGroupPolicies', 'POST'] as const
}

export function usePostActionListGroupPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListGroupPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListGroupPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListGroupsKey(
  args: InferRequestType<(typeof client)['#Action=ListGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListGroups', '/#Action=ListGroups', keyArgs] as const
}

export function useGetActionListGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListGroupsKey() {
  return ['#Action=ListGroups', '/#Action=ListGroups', 'POST'] as const
}

export function usePostActionListGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListGroups']['$post']> },
      ) => parseResponse(client['#Action=ListGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListGroupsForUserKey(
  args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListGroupsForUser', '/#Action=ListGroupsForUser', keyArgs] as const
}

export function useGetActionListGroupsForUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupsForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroupsForUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListGroupsForUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListGroupsForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListGroupsForUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListGroupsForUserKey() {
  return ['#Action=ListGroupsForUser', '/#Action=ListGroupsForUser', 'POST'] as const
}

export function usePostActionListGroupsForUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListGroupsForUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']> },
      ) => parseResponse(client['#Action=ListGroupsForUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListInstanceProfileTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListInstanceProfileTags', '/#Action=ListInstanceProfileTags', keyArgs] as const
}

export function useGetActionListInstanceProfileTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfileTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListInstanceProfileTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListInstanceProfileTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfileTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListInstanceProfileTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListInstanceProfileTagsKey() {
  return ['#Action=ListInstanceProfileTags', '/#Action=ListInstanceProfileTags', 'POST'] as const
}

export function usePostActionListInstanceProfileTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListInstanceProfileTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']> },
      ) => parseResponse(client['#Action=ListInstanceProfileTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListInstanceProfilesKey(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListInstanceProfiles', '/#Action=ListInstanceProfiles', keyArgs] as const
}

export function useGetActionListInstanceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListInstanceProfiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListInstanceProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListInstanceProfiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListInstanceProfilesKey() {
  return ['#Action=ListInstanceProfiles', '/#Action=ListInstanceProfiles', 'POST'] as const
}

export function usePostActionListInstanceProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListInstanceProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']> },
      ) => parseResponse(client['#Action=ListInstanceProfiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListInstanceProfilesForRoleKey(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListInstanceProfilesForRole',
    '/#Action=ListInstanceProfilesForRole',
    keyArgs,
  ] as const
}

export function useGetActionListInstanceProfilesForRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfilesForRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListInstanceProfilesForRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListInstanceProfilesForRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListInstanceProfilesForRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListInstanceProfilesForRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListInstanceProfilesForRoleKey() {
  return [
    '#Action=ListInstanceProfilesForRole',
    '/#Action=ListInstanceProfilesForRole',
    'POST',
  ] as const
}

export function usePostActionListInstanceProfilesForRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListInstanceProfilesForRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>
        },
      ) => parseResponse(client['#Action=ListInstanceProfilesForRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListMFADeviceTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMFADeviceTags', '/#Action=ListMFADeviceTags', keyArgs] as const
}

export function useGetActionListMFADeviceTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMFADeviceTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMFADeviceTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListMFADeviceTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMFADeviceTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMFADeviceTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListMFADeviceTagsKey() {
  return ['#Action=ListMFADeviceTags', '/#Action=ListMFADeviceTags', 'POST'] as const
}

export function usePostActionListMFADeviceTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListMFADeviceTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']> },
      ) => parseResponse(client['#Action=ListMFADeviceTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListMFADevicesKey(
  args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListMFADevices', '/#Action=ListMFADevices', keyArgs] as const
}

export function useGetActionListMFADevices<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMFADevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMFADevices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListMFADevices<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListMFADevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListMFADevices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListMFADevicesKey() {
  return ['#Action=ListMFADevices', '/#Action=ListMFADevices', 'POST'] as const
}

export function usePostActionListMFADevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListMFADevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']> },
      ) => parseResponse(client['#Action=ListMFADevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListOpenIDConnectProviderTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListOpenIDConnectProviderTags',
    '/#Action=ListOpenIDConnectProviderTags',
    keyArgs,
  ] as const
}

export function useGetActionListOpenIDConnectProviderTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOpenIDConnectProviderTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListOpenIDConnectProviderTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOpenIDConnectProviderTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListOpenIDConnectProviderTagsKey() {
  return [
    '#Action=ListOpenIDConnectProviderTags',
    '/#Action=ListOpenIDConnectProviderTags',
    'POST',
  ] as const
}

export function usePostActionListOpenIDConnectProviderTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListOpenIDConnectProviderTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>
        },
      ) => parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListOpenIDConnectProvidersKey(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListOpenIDConnectProviders',
    '/#Action=ListOpenIDConnectProviders',
    keyArgs,
  ] as const
}

export function useGetActionListOpenIDConnectProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOpenIDConnectProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListOpenIDConnectProviders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListOpenIDConnectProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOpenIDConnectProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListOpenIDConnectProviders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListOpenIDConnectProvidersKey() {
  return [
    '#Action=ListOpenIDConnectProviders',
    '/#Action=ListOpenIDConnectProviders',
    'POST',
  ] as const
}

export function usePostActionListOpenIDConnectProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListOpenIDConnectProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>
        },
      ) => parseResponse(client['#Action=ListOpenIDConnectProviders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPolicies', '/#Action=ListPolicies', keyArgs] as const
}

export function useGetActionListPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPoliciesKey() {
  return ['#Action=ListPolicies', '/#Action=ListPolicies', 'POST'] as const
}

export function usePostActionListPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPoliciesGrantingServiceAccessKey(
  args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListPoliciesGrantingServiceAccess',
    '/#Action=ListPoliciesGrantingServiceAccess',
    keyArgs,
  ] as const
}

export function useGetActionListPoliciesGrantingServiceAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPoliciesGrantingServiceAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListPoliciesGrantingServiceAccess'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPoliciesGrantingServiceAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPoliciesGrantingServiceAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListPoliciesGrantingServiceAccess'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPoliciesGrantingServiceAccessKey() {
  return [
    '#Action=ListPoliciesGrantingServiceAccess',
    '/#Action=ListPoliciesGrantingServiceAccess',
    'POST',
  ] as const
}

export function usePostActionListPoliciesGrantingServiceAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPoliciesGrantingServiceAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=ListPoliciesGrantingServiceAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPolicyTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPolicyTags', '/#Action=ListPolicyTags', keyArgs] as const
}

export function useGetActionListPolicyTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPolicyTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicyTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPolicyTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPolicyTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicyTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPolicyTagsKey() {
  return ['#Action=ListPolicyTags', '/#Action=ListPolicyTags', 'POST'] as const
}

export function usePostActionListPolicyTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPolicyTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']> },
      ) => parseResponse(client['#Action=ListPolicyTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPolicyVersionsKey(
  args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPolicyVersions', '/#Action=ListPolicyVersions', keyArgs] as const
}

export function useGetActionListPolicyVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPolicyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicyVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPolicyVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPolicyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListPolicyVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPolicyVersionsKey() {
  return ['#Action=ListPolicyVersions', '/#Action=ListPolicyVersions', 'POST'] as const
}

export function usePostActionListPolicyVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPolicyVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']> },
      ) => parseResponse(client['#Action=ListPolicyVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListRolePoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListRolePolicies', '/#Action=ListRolePolicies', keyArgs] as const
}

export function useGetActionListRolePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRolePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRolePolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListRolePolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRolePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRolePolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListRolePoliciesKey() {
  return ['#Action=ListRolePolicies', '/#Action=ListRolePolicies', 'POST'] as const
}

export function usePostActionListRolePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListRolePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']> },
      ) => parseResponse(client['#Action=ListRolePolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListRoleTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListRoleTags', '/#Action=ListRoleTags', keyArgs] as const
}

export function useGetActionListRoleTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRoleTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRoleTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListRoleTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRoleTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRoleTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListRoleTagsKey() {
  return ['#Action=ListRoleTags', '/#Action=ListRoleTags', 'POST'] as const
}

export function usePostActionListRoleTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListRoleTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']> },
      ) => parseResponse(client['#Action=ListRoleTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListRolesKey(
  args: InferRequestType<(typeof client)['#Action=ListRoles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListRoles', '/#Action=ListRoles', keyArgs] as const
}

export function useGetActionListRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRoles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListRoles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListRoles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListRolesKey() {
  return ['#Action=ListRoles', '/#Action=ListRoles', 'POST'] as const
}

export function usePostActionListRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListRoles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListRoles']['$post']> },
      ) => parseResponse(client['#Action=ListRoles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSAMLProviderTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSAMLProviderTags', '/#Action=ListSAMLProviderTags', keyArgs] as const
}

export function useGetActionListSAMLProviderTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSAMLProviderTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSAMLProviderTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSAMLProviderTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSAMLProviderTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSAMLProviderTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSAMLProviderTagsKey() {
  return ['#Action=ListSAMLProviderTags', '/#Action=ListSAMLProviderTags', 'POST'] as const
}

export function usePostActionListSAMLProviderTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSAMLProviderTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']> },
      ) => parseResponse(client['#Action=ListSAMLProviderTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSAMLProvidersKey(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSAMLProviders', '/#Action=ListSAMLProviders', keyArgs] as const
}

export function useGetActionListSAMLProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSAMLProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSAMLProviders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSAMLProviders<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSAMLProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSAMLProviders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSAMLProvidersKey() {
  return ['#Action=ListSAMLProviders', '/#Action=ListSAMLProviders', 'POST'] as const
}

export function usePostActionListSAMLProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSAMLProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']> },
      ) => parseResponse(client['#Action=ListSAMLProviders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSSHPublicKeysKey(
  args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSSHPublicKeys', '/#Action=ListSSHPublicKeys', keyArgs] as const
}

export function useGetActionListSSHPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSSHPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSSHPublicKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSSHPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSSHPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSSHPublicKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSSHPublicKeysKey() {
  return ['#Action=ListSSHPublicKeys', '/#Action=ListSSHPublicKeys', 'POST'] as const
}

export function usePostActionListSSHPublicKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSSHPublicKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']> },
      ) => parseResponse(client['#Action=ListSSHPublicKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListServerCertificateTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListServerCertificateTags',
    '/#Action=ListServerCertificateTags',
    keyArgs,
  ] as const
}

export function useGetActionListServerCertificateTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServerCertificateTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListServerCertificateTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListServerCertificateTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServerCertificateTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListServerCertificateTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListServerCertificateTagsKey() {
  return [
    '#Action=ListServerCertificateTags',
    '/#Action=ListServerCertificateTags',
    'POST',
  ] as const
}

export function usePostActionListServerCertificateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListServerCertificateTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']> },
      ) => parseResponse(client['#Action=ListServerCertificateTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListServerCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListServerCertificates', '/#Action=ListServerCertificates', keyArgs] as const
}

export function useGetActionListServerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListServerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListServerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListServerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListServerCertificatesKey() {
  return ['#Action=ListServerCertificates', '/#Action=ListServerCertificates', 'POST'] as const
}

export function usePostActionListServerCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListServerCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']> },
      ) => parseResponse(client['#Action=ListServerCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListServiceSpecificCredentialsKey(
  args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListServiceSpecificCredentials',
    '/#Action=ListServiceSpecificCredentials',
    keyArgs,
  ] as const
}

export function useGetActionListServiceSpecificCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServiceSpecificCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListServiceSpecificCredentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListServiceSpecificCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListServiceSpecificCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListServiceSpecificCredentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListServiceSpecificCredentialsKey() {
  return [
    '#Action=ListServiceSpecificCredentials',
    '/#Action=ListServiceSpecificCredentials',
    'POST',
  ] as const
}

export function usePostActionListServiceSpecificCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListServiceSpecificCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>
        },
      ) =>
        parseResponse(client['#Action=ListServiceSpecificCredentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSigningCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSigningCertificates', '/#Action=ListSigningCertificates', keyArgs] as const
}

export function useGetActionListSigningCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSigningCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSigningCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSigningCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSigningCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSigningCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSigningCertificatesKey() {
  return ['#Action=ListSigningCertificates', '/#Action=ListSigningCertificates', 'POST'] as const
}

export function usePostActionListSigningCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSigningCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']> },
      ) => parseResponse(client['#Action=ListSigningCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListUserPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListUserPolicies', '/#Action=ListUserPolicies', keyArgs] as const
}

export function useGetActionListUserPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUserPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUserPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListUserPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUserPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUserPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListUserPoliciesKey() {
  return ['#Action=ListUserPolicies', '/#Action=ListUserPolicies', 'POST'] as const
}

export function usePostActionListUserPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListUserPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListUserPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListUserTagsKey(
  args: InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListUserTags', '/#Action=ListUserTags', keyArgs] as const
}

export function useGetActionListUserTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUserTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUserTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListUserTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUserTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUserTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListUserTagsKey() {
  return ['#Action=ListUserTags', '/#Action=ListUserTags', 'POST'] as const
}

export function usePostActionListUserTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListUserTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListUserTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListUserTags']['$post']> },
      ) => parseResponse(client['#Action=ListUserTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListUsersKey(
  args: InferRequestType<(typeof client)['#Action=ListUsers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListUsers', '/#Action=ListUsers', keyArgs] as const
}

export function useGetActionListUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListUsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListUsersKey() {
  return ['#Action=ListUsers', '/#Action=ListUsers', 'POST'] as const
}

export function usePostActionListUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListUsers']['$post']> },
      ) => parseResponse(client['#Action=ListUsers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListVirtualMFADevicesKey(
  args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListVirtualMFADevices', '/#Action=ListVirtualMFADevices', keyArgs] as const
}

export function useGetActionListVirtualMFADevices<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListVirtualMFADevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListVirtualMFADevices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListVirtualMFADevices<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListVirtualMFADevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListVirtualMFADevices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListVirtualMFADevicesKey() {
  return ['#Action=ListVirtualMFADevices', '/#Action=ListVirtualMFADevices', 'POST'] as const
}

export function usePostActionListVirtualMFADevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListVirtualMFADevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']> },
      ) => parseResponse(client['#Action=ListVirtualMFADevices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutGroupPolicyKey(
  args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutGroupPolicy', '/#Action=PutGroupPolicy', keyArgs] as const
}

export function useGetActionPutGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutGroupPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutGroupPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutGroupPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutGroupPolicyKey() {
  return ['#Action=PutGroupPolicy', '/#Action=PutGroupPolicy', 'POST'] as const
}

export function usePostActionPutGroupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutGroupPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']> },
      ) => parseResponse(client['#Action=PutGroupPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutRolePermissionsBoundaryKey(
  args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutRolePermissionsBoundary',
    '/#Action=PutRolePermissionsBoundary',
    keyArgs,
  ] as const
}

export function useGetActionPutRolePermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutRolePermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutRolePermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutRolePermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutRolePermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutRolePermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutRolePermissionsBoundaryKey() {
  return [
    '#Action=PutRolePermissionsBoundary',
    '/#Action=PutRolePermissionsBoundary',
    'POST',
  ] as const
}

export function usePostActionPutRolePermissionsBoundary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutRolePermissionsBoundaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>
        },
      ) => parseResponse(client['#Action=PutRolePermissionsBoundary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutRolePolicy', '/#Action=PutRolePolicy', keyArgs] as const
}

export function useGetActionPutRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutRolePolicyKey() {
  return ['#Action=PutRolePolicy', '/#Action=PutRolePolicy', 'POST'] as const
}

export function usePostActionPutRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=PutRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutUserPermissionsBoundaryKey(
  args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutUserPermissionsBoundary',
    '/#Action=PutUserPermissionsBoundary',
    keyArgs,
  ] as const
}

export function useGetActionPutUserPermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutUserPermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutUserPermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutUserPermissionsBoundary<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutUserPermissionsBoundaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutUserPermissionsBoundary'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutUserPermissionsBoundaryKey() {
  return [
    '#Action=PutUserPermissionsBoundary',
    '/#Action=PutUserPermissionsBoundary',
    'POST',
  ] as const
}

export function usePostActionPutUserPermissionsBoundary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutUserPermissionsBoundaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>
        },
      ) => parseResponse(client['#Action=PutUserPermissionsBoundary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutUserPolicyKey(
  args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutUserPolicy', '/#Action=PutUserPolicy', keyArgs] as const
}

export function useGetActionPutUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutUserPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutUserPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutUserPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutUserPolicyKey() {
  return ['#Action=PutUserPolicy', '/#Action=PutUserPolicy', 'POST'] as const
}

export function usePostActionPutUserPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutUserPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']> },
      ) => parseResponse(client['#Action=PutUserPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveClientIDFromOpenIDConnectProviderKey(
  args: InferRequestType<
    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RemoveClientIDFromOpenIDConnectProvider',
    '/#Action=RemoveClientIDFromOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function useGetActionRemoveClientIDFromOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveClientIDFromOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveClientIDFromOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveClientIDFromOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveClientIDFromOpenIDConnectProviderKey() {
  return [
    '#Action=RemoveClientIDFromOpenIDConnectProvider',
    '/#Action=RemoveClientIDFromOpenIDConnectProvider',
    'POST',
  ] as const
}

export function usePostActionRemoveClientIDFromOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveClientIDFromOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveRoleFromInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RemoveRoleFromInstanceProfile',
    '/#Action=RemoveRoleFromInstanceProfile',
    keyArgs,
  ] as const
}

export function useGetActionRemoveRoleFromInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveRoleFromInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveRoleFromInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveRoleFromInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveRoleFromInstanceProfileKey() {
  return [
    '#Action=RemoveRoleFromInstanceProfile',
    '/#Action=RemoveRoleFromInstanceProfile',
    'POST',
  ] as const
}

export function usePostActionRemoveRoleFromInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveRoleFromInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>
        },
      ) => parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveUserFromGroupKey(
  args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveUserFromGroup', '/#Action=RemoveUserFromGroup', keyArgs] as const
}

export function useGetActionRemoveUserFromGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveUserFromGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveUserFromGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveUserFromGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveUserFromGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveUserFromGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveUserFromGroupKey() {
  return ['#Action=RemoveUserFromGroup', '/#Action=RemoveUserFromGroup', 'POST'] as const
}

export function usePostActionRemoveUserFromGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveUserFromGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']> },
      ) => parseResponse(client['#Action=RemoveUserFromGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResetServiceSpecificCredentialKey(
  args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ResetServiceSpecificCredential',
    '/#Action=ResetServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function useGetActionResetServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionResetServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResetServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionResetServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResetServiceSpecificCredentialKey() {
  return [
    '#Action=ResetServiceSpecificCredential',
    '/#Action=ResetServiceSpecificCredential',
    'POST',
  ] as const
}

export function usePostActionResetServiceSpecificCredential<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResetServiceSpecificCredentialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>
        },
      ) =>
        parseResponse(client['#Action=ResetServiceSpecificCredential'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResyncMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResyncMFADevice', '/#Action=ResyncMFADevice', keyArgs] as const
}

export function useGetActionResyncMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionResyncMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResyncMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResyncMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionResyncMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResyncMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResyncMFADeviceKey() {
  return ['#Action=ResyncMFADevice', '/#Action=ResyncMFADevice', 'POST'] as const
}

export function usePostActionResyncMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResyncMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']> },
      ) => parseResponse(client['#Action=ResyncMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetDefaultPolicyVersionKey(
  args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetDefaultPolicyVersion', '/#Action=SetDefaultPolicyVersion', keyArgs] as const
}

export function useGetActionSetDefaultPolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetDefaultPolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetDefaultPolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetDefaultPolicyVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetDefaultPolicyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetDefaultPolicyVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetDefaultPolicyVersionKey() {
  return ['#Action=SetDefaultPolicyVersion', '/#Action=SetDefaultPolicyVersion', 'POST'] as const
}

export function usePostActionSetDefaultPolicyVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetDefaultPolicyVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']> },
      ) => parseResponse(client['#Action=SetDefaultPolicyVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetSecurityTokenServicePreferencesKey(
  args: InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetSecurityTokenServicePreferences',
    '/#Action=SetSecurityTokenServicePreferences',
    keyArgs,
  ] as const
}

export function useGetActionSetSecurityTokenServicePreferences<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSecurityTokenServicePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetSecurityTokenServicePreferences'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetSecurityTokenServicePreferences<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSecurityTokenServicePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetSecurityTokenServicePreferences'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetSecurityTokenServicePreferencesKey() {
  return [
    '#Action=SetSecurityTokenServicePreferences',
    '/#Action=SetSecurityTokenServicePreferences',
    'POST',
  ] as const
}

export function usePostActionSetSecurityTokenServicePreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetSecurityTokenServicePreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetSecurityTokenServicePreferences'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSimulateCustomPolicyKey(
  args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SimulateCustomPolicy', '/#Action=SimulateCustomPolicy', keyArgs] as const
}

export function useGetActionSimulateCustomPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSimulateCustomPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SimulateCustomPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSimulateCustomPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSimulateCustomPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SimulateCustomPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSimulateCustomPolicyKey() {
  return ['#Action=SimulateCustomPolicy', '/#Action=SimulateCustomPolicy', 'POST'] as const
}

export function usePostActionSimulateCustomPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSimulateCustomPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']> },
      ) => parseResponse(client['#Action=SimulateCustomPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSimulatePrincipalPolicyKey(
  args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SimulatePrincipalPolicy', '/#Action=SimulatePrincipalPolicy', keyArgs] as const
}

export function useGetActionSimulatePrincipalPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSimulatePrincipalPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SimulatePrincipalPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSimulatePrincipalPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSimulatePrincipalPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SimulatePrincipalPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSimulatePrincipalPolicyKey() {
  return ['#Action=SimulatePrincipalPolicy', '/#Action=SimulatePrincipalPolicy', 'POST'] as const
}

export function usePostActionSimulatePrincipalPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSimulatePrincipalPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']> },
      ) => parseResponse(client['#Action=SimulatePrincipalPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagInstanceProfile', '/#Action=TagInstanceProfile', keyArgs] as const
}

export function useGetActionTagInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagInstanceProfileKey() {
  return ['#Action=TagInstanceProfile', '/#Action=TagInstanceProfile', 'POST'] as const
}

export function usePostActionTagInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=TagInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagMFADevice', '/#Action=TagMFADevice', keyArgs] as const
}

export function useGetActionTagMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagMFADeviceKey() {
  return ['#Action=TagMFADevice', '/#Action=TagMFADevice', 'POST'] as const
}

export function usePostActionTagMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']> },
      ) => parseResponse(client['#Action=TagMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagOpenIDConnectProvider', '/#Action=TagOpenIDConnectProvider', keyArgs] as const
}

export function useGetActionTagOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=TagOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=TagOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagOpenIDConnectProviderKey() {
  return ['#Action=TagOpenIDConnectProvider', '/#Action=TagOpenIDConnectProvider', 'POST'] as const
}

export function usePostActionTagOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']> },
      ) => parseResponse(client['#Action=TagOpenIDConnectProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagPolicyKey(
  args: InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagPolicy', '/#Action=TagPolicy', keyArgs] as const
}

export function useGetActionTagPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagPolicyKey() {
  return ['#Action=TagPolicy', '/#Action=TagPolicy', 'POST'] as const
}

export function usePostActionTagPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagPolicy']['$post']> },
      ) => parseResponse(client['#Action=TagPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagRoleKey(
  args: InferRequestType<(typeof client)['#Action=TagRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagRole', '/#Action=TagRole', keyArgs] as const
}

export function useGetActionTagRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagRoleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagRoleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagRoleKey() {
  return ['#Action=TagRole', '/#Action=TagRole', 'POST'] as const
}

export function usePostActionTagRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagRole']['$post']> },
      ) => parseResponse(client['#Action=TagRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagSAMLProvider', '/#Action=TagSAMLProvider', keyArgs] as const
}

export function useGetActionTagSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagSAMLProviderKey() {
  return ['#Action=TagSAMLProvider', '/#Action=TagSAMLProvider', 'POST'] as const
}

export function usePostActionTagSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=TagSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagServerCertificate', '/#Action=TagServerCertificate', keyArgs] as const
}

export function useGetActionTagServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagServerCertificateKey() {
  return ['#Action=TagServerCertificate', '/#Action=TagServerCertificate', 'POST'] as const
}

export function usePostActionTagServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=TagServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagUserKey(
  args: InferRequestType<(typeof client)['#Action=TagUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagUser', '/#Action=TagUser', keyArgs] as const
}

export function useGetActionTagUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionTagUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagUserKey() {
  return ['#Action=TagUser', '/#Action=TagUser', 'POST'] as const
}

export function usePostActionTagUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagUser']['$post']> },
      ) => parseResponse(client['#Action=TagUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagInstanceProfileKey(
  args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagInstanceProfile', '/#Action=UntagInstanceProfile', keyArgs] as const
}

export function useGetActionUntagInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagInstanceProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagInstanceProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagInstanceProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagInstanceProfileKey() {
  return ['#Action=UntagInstanceProfile', '/#Action=UntagInstanceProfile', 'POST'] as const
}

export function usePostActionUntagInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagInstanceProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']> },
      ) => parseResponse(client['#Action=UntagInstanceProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagMFADeviceKey(
  args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagMFADevice', '/#Action=UntagMFADevice', keyArgs] as const
}

export function useGetActionUntagMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagMFADevice<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagMFADeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagMFADevice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagMFADeviceKey() {
  return ['#Action=UntagMFADevice', '/#Action=UntagMFADevice', 'POST'] as const
}

export function usePostActionUntagMFADevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagMFADeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']> },
      ) => parseResponse(client['#Action=UntagMFADevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagOpenIDConnectProviderKey(
  args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UntagOpenIDConnectProvider',
    '/#Action=UntagOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function useGetActionUntagOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UntagOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagOpenIDConnectProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagOpenIDConnectProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UntagOpenIDConnectProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagOpenIDConnectProviderKey() {
  return [
    '#Action=UntagOpenIDConnectProvider',
    '/#Action=UntagOpenIDConnectProvider',
    'POST',
  ] as const
}

export function usePostActionUntagOpenIDConnectProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagOpenIDConnectProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>
        },
      ) => parseResponse(client['#Action=UntagOpenIDConnectProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagPolicyKey(
  args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagPolicy', '/#Action=UntagPolicy', keyArgs] as const
}

export function useGetActionUntagPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagPolicyKey() {
  return ['#Action=UntagPolicy', '/#Action=UntagPolicy', 'POST'] as const
}

export function usePostActionUntagPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']> },
      ) => parseResponse(client['#Action=UntagPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagRoleKey(
  args: InferRequestType<(typeof client)['#Action=UntagRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagRole', '/#Action=UntagRole', keyArgs] as const
}

export function useGetActionUntagRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagRoleKey() {
  return ['#Action=UntagRole', '/#Action=UntagRole', 'POST'] as const
}

export function usePostActionUntagRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagRole']['$post']> },
      ) => parseResponse(client['#Action=UntagRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagSAMLProvider', '/#Action=UntagSAMLProvider', keyArgs] as const
}

export function useGetActionUntagSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagSAMLProviderKey() {
  return ['#Action=UntagSAMLProvider', '/#Action=UntagSAMLProvider', 'POST'] as const
}

export function usePostActionUntagSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=UntagSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagServerCertificate', '/#Action=UntagServerCertificate', keyArgs] as const
}

export function useGetActionUntagServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagServerCertificateKey() {
  return ['#Action=UntagServerCertificate', '/#Action=UntagServerCertificate', 'POST'] as const
}

export function usePostActionUntagServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=UntagServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagUserKey(
  args: InferRequestType<(typeof client)['#Action=UntagUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagUser', '/#Action=UntagUser', keyArgs] as const
}

export function useGetActionUntagUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagUserKey() {
  return ['#Action=UntagUser', '/#Action=UntagUser', 'POST'] as const
}

export function usePostActionUntagUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagUser']['$post']> },
      ) => parseResponse(client['#Action=UntagUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateAccessKeyKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateAccessKey', '/#Action=UpdateAccessKey', keyArgs] as const
}

export function useGetActionUpdateAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateAccessKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateAccessKeyKey() {
  return ['#Action=UpdateAccessKey', '/#Action=UpdateAccessKey', 'POST'] as const
}

export function usePostActionUpdateAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']> },
      ) => parseResponse(client['#Action=UpdateAccessKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateAccountPasswordPolicyKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateAccountPasswordPolicy',
    '/#Action=UpdateAccountPasswordPolicy',
    keyArgs,
  ] as const
}

export function useGetActionUpdateAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateAccountPasswordPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccountPasswordPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateAccountPasswordPolicyKey() {
  return [
    '#Action=UpdateAccountPasswordPolicy',
    '/#Action=UpdateAccountPasswordPolicy',
    'POST',
  ] as const
}

export function usePostActionUpdateAccountPasswordPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateAccountPasswordPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>
        },
      ) => parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateAssumeRolePolicyKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateAssumeRolePolicy', '/#Action=UpdateAssumeRolePolicy', keyArgs] as const
}

export function useGetActionUpdateAssumeRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAssumeRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateAssumeRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateAssumeRolePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAssumeRolePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateAssumeRolePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateAssumeRolePolicyKey() {
  return ['#Action=UpdateAssumeRolePolicy', '/#Action=UpdateAssumeRolePolicy', 'POST'] as const
}

export function usePostActionUpdateAssumeRolePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateAssumeRolePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']> },
      ) => parseResponse(client['#Action=UpdateAssumeRolePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateGroupKey(
  args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateGroup', '/#Action=UpdateGroup', keyArgs] as const
}

export function useGetActionUpdateGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateGroupKey() {
  return ['#Action=UpdateGroup', '/#Action=UpdateGroup', 'POST'] as const
}

export function usePostActionUpdateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']> },
      ) => parseResponse(client['#Action=UpdateGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateLoginProfileKey(
  args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateLoginProfile', '/#Action=UpdateLoginProfile', keyArgs] as const
}

export function useGetActionUpdateLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateLoginProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateLoginProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateLoginProfile'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateLoginProfileKey() {
  return ['#Action=UpdateLoginProfile', '/#Action=UpdateLoginProfile', 'POST'] as const
}

export function usePostActionUpdateLoginProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateLoginProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']> },
      ) => parseResponse(client['#Action=UpdateLoginProfile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateOpenIDConnectProviderThumbprintKey(
  args: InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateOpenIDConnectProviderThumbprint',
    '/#Action=UpdateOpenIDConnectProviderThumbprint',
    keyArgs,
  ] as const
}

export function useGetActionUpdateOpenIDConnectProviderThumbprint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateOpenIDConnectProviderThumbprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateOpenIDConnectProviderThumbprint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateOpenIDConnectProviderThumbprint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateOpenIDConnectProviderThumbprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateOpenIDConnectProviderThumbprint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateOpenIDConnectProviderThumbprintKey() {
  return [
    '#Action=UpdateOpenIDConnectProviderThumbprint',
    '/#Action=UpdateOpenIDConnectProviderThumbprint',
    'POST',
  ] as const
}

export function usePostActionUpdateOpenIDConnectProviderThumbprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateOpenIDConnectProviderThumbprintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateOpenIDConnectProviderThumbprint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateRoleKey(
  args: InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateRole', '/#Action=UpdateRole', keyArgs] as const
}

export function useGetActionUpdateRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateRoleKey() {
  return ['#Action=UpdateRole', '/#Action=UpdateRole', 'POST'] as const
}

export function usePostActionUpdateRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateRole']['$post']> },
      ) => parseResponse(client['#Action=UpdateRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateRoleDescriptionKey(
  args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateRoleDescription', '/#Action=UpdateRoleDescription', keyArgs] as const
}

export function useGetActionUpdateRoleDescription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateRoleDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateRoleDescription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateRoleDescription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateRoleDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateRoleDescription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateRoleDescriptionKey() {
  return ['#Action=UpdateRoleDescription', '/#Action=UpdateRoleDescription', 'POST'] as const
}

export function usePostActionUpdateRoleDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateRoleDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']> },
      ) => parseResponse(client['#Action=UpdateRoleDescription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateSAMLProviderKey(
  args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateSAMLProvider', '/#Action=UpdateSAMLProvider', keyArgs] as const
}

export function useGetActionUpdateSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateSAMLProvider<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSAMLProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateSAMLProvider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateSAMLProviderKey() {
  return ['#Action=UpdateSAMLProvider', '/#Action=UpdateSAMLProvider', 'POST'] as const
}

export function usePostActionUpdateSAMLProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateSAMLProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']> },
      ) => parseResponse(client['#Action=UpdateSAMLProvider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateSSHPublicKeyKey(
  args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateSSHPublicKey', '/#Action=UpdateSSHPublicKey', keyArgs] as const
}

export function useGetActionUpdateSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateSSHPublicKeyKey() {
  return ['#Action=UpdateSSHPublicKey', '/#Action=UpdateSSHPublicKey', 'POST'] as const
}

export function usePostActionUpdateSSHPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateSSHPublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']> },
      ) => parseResponse(client['#Action=UpdateSSHPublicKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateServerCertificate', '/#Action=UpdateServerCertificate', keyArgs] as const
}

export function useGetActionUpdateServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateServerCertificateKey() {
  return ['#Action=UpdateServerCertificate', '/#Action=UpdateServerCertificate', 'POST'] as const
}

export function usePostActionUpdateServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=UpdateServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateServiceSpecificCredentialKey(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateServiceSpecificCredential',
    '/#Action=UpdateServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function useGetActionUpdateServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateServiceSpecificCredential<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateServiceSpecificCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServiceSpecificCredential'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateServiceSpecificCredentialKey() {
  return [
    '#Action=UpdateServiceSpecificCredential',
    '/#Action=UpdateServiceSpecificCredential',
    'POST',
  ] as const
}

export function usePostActionUpdateServiceSpecificCredential<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateServiceSpecificCredentialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>
        },
      ) =>
        parseResponse(client['#Action=UpdateServiceSpecificCredential'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateSigningCertificateKey(
  args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateSigningCertificate', '/#Action=UpdateSigningCertificate', keyArgs] as const
}

export function useGetActionUpdateSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateSigningCertificateKey() {
  return ['#Action=UpdateSigningCertificate', '/#Action=UpdateSigningCertificate', 'POST'] as const
}

export function usePostActionUpdateSigningCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateSigningCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']> },
      ) => parseResponse(client['#Action=UpdateSigningCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateUserKey(
  args: InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateUser', '/#Action=UpdateUser', keyArgs] as const
}

export function useGetActionUpdateUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateUser<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateUserKey() {
  return ['#Action=UpdateUser', '/#Action=UpdateUser', 'POST'] as const
}

export function usePostActionUpdateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateUser']['$post']> },
      ) => parseResponse(client['#Action=UpdateUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUploadSSHPublicKeyKey(
  args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UploadSSHPublicKey', '/#Action=UploadSSHPublicKey', keyArgs] as const
}

export function useGetActionUploadSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UploadSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUploadSSHPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadSSHPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UploadSSHPublicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUploadSSHPublicKeyKey() {
  return ['#Action=UploadSSHPublicKey', '/#Action=UploadSSHPublicKey', 'POST'] as const
}

export function usePostActionUploadSSHPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUploadSSHPublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']> },
      ) => parseResponse(client['#Action=UploadSSHPublicKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUploadServerCertificateKey(
  args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UploadServerCertificate', '/#Action=UploadServerCertificate', keyArgs] as const
}

export function useGetActionUploadServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UploadServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUploadServerCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadServerCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UploadServerCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUploadServerCertificateKey() {
  return ['#Action=UploadServerCertificate', '/#Action=UploadServerCertificate', 'POST'] as const
}

export function usePostActionUploadServerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUploadServerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']> },
      ) => parseResponse(client['#Action=UploadServerCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUploadSigningCertificateKey(
  args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UploadSigningCertificate', '/#Action=UploadSigningCertificate', keyArgs] as const
}

export function useGetActionUploadSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UploadSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUploadSigningCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUploadSigningCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UploadSigningCertificate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUploadSigningCertificateKey() {
  return ['#Action=UploadSigningCertificate', '/#Action=UploadSigningCertificate', 'POST'] as const
}

export function usePostActionUploadSigningCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUploadSigningCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']> },
      ) => parseResponse(client['#Action=UploadSigningCertificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

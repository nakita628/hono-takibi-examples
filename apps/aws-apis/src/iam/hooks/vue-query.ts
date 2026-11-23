import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getActionAddClientIDToOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AddClientIDToOpenIDConnectProvider',
    '/#Action=AddClientIDToOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function getActionAddClientIDToOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddClientIDToOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddClientIDToOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddClientIDToOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAddClientIDToOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddClientIDToOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddClientIDToOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddClientIDToOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddClientIDToOpenIDConnectProviderMutationKey() {
  return [
    '#Action=AddClientIDToOpenIDConnectProvider',
    '/#Action=AddClientIDToOpenIDConnectProvider',
    'POST',
  ] as const
}

export function getPostActionAddClientIDToOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddClientIDToOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=AddClientIDToOpenIDConnectProvider'].$post(args, options),
      )
    },
  })
}

export function usePostActionAddClientIDToOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAddClientIDToOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAddRoleToInstanceProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddRoleToInstanceProfile', '/#Action=AddRoleToInstanceProfile', keyArgs] as const
}

export function getActionAddRoleToInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddRoleToInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddRoleToInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddRoleToInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddRoleToInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddRoleToInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddRoleToInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddRoleToInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddRoleToInstanceProfileMutationKey() {
  return ['#Action=AddRoleToInstanceProfile', '/#Action=AddRoleToInstanceProfile', 'POST'] as const
}

export function getPostActionAddRoleToInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddRoleToInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=AddRoleToInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionAddRoleToInstanceProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAddRoleToInstanceProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAddUserToGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddUserToGroup', '/#Action=AddUserToGroup', keyArgs] as const
}

export function getActionAddUserToGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddUserToGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddUserToGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddUserToGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddUserToGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddUserToGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddUserToGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddUserToGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddUserToGroupMutationKey() {
  return ['#Action=AddUserToGroup', '/#Action=AddUserToGroup', 'POST'] as const
}

export function getPostActionAddUserToGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddUserToGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']>) {
      return parseResponse(client['#Action=AddUserToGroup'].$post(args, options))
    },
  })
}

export function usePostActionAddUserToGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddUserToGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAddUserToGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachGroupPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachGroupPolicy', '/#Action=AttachGroupPolicy', keyArgs] as const
}

export function getActionAttachGroupPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachGroupPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachGroupPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachGroupPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachGroupPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachGroupPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachGroupPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachGroupPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAttachGroupPolicyMutationKey() {
  return ['#Action=AttachGroupPolicy', '/#Action=AttachGroupPolicy', 'POST'] as const
}

export function getPostActionAttachGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=AttachGroupPolicy'].$post(args, options))
    },
  })
}

export function usePostActionAttachGroupPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachGroupPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachGroupPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachRolePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachRolePolicy', '/#Action=AttachRolePolicy', keyArgs] as const
}

export function getActionAttachRolePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAttachRolePolicyMutationKey() {
  return ['#Action=AttachRolePolicy', '/#Action=AttachRolePolicy', 'POST'] as const
}

export function getPostActionAttachRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachRolePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']>) {
      return parseResponse(client['#Action=AttachRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionAttachRolePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachRolePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionAttachUserPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AttachUserPolicy', '/#Action=AttachUserPolicy', keyArgs] as const
}

export function getActionAttachUserPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachUserPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachUserPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachUserPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachUserPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachUserPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachUserPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachUserPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAttachUserPolicyMutationKey() {
  return ['#Action=AttachUserPolicy', '/#Action=AttachUserPolicy', 'POST'] as const
}

export function getPostActionAttachUserPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachUserPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']>) {
      return parseResponse(client['#Action=AttachUserPolicy'].$post(args, options))
    },
  })
}

export function usePostActionAttachUserPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachUserPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAttachUserPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionChangePasswordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ChangePassword', '/#Action=ChangePassword', keyArgs] as const
}

export function getActionChangePasswordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionChangePasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ChangePassword'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionChangePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionChangePasswordQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionChangePasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionChangePasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ChangePassword'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionChangePasswordMutationKey() {
  return ['#Action=ChangePassword', '/#Action=ChangePassword', 'POST'] as const
}

export function getPostActionChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ChangePassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ChangePassword']['$post']>) {
      return parseResponse(client['#Action=ChangePassword'].$post(args, options))
    },
  })
}

export function usePostActionChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ChangePassword']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ChangePassword']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionChangePasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateAccessKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateAccessKey', '/#Action=CreateAccessKey', keyArgs] as const
}

export function getActionCreateAccessKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateAccessKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateAccessKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateAccessKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateAccessKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAccessKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateAccessKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateAccessKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateAccessKeyMutationKey() {
  return ['#Action=CreateAccessKey', '/#Action=CreateAccessKey', 'POST'] as const
}

export function getPostActionCreateAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateAccessKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']>) {
      return parseResponse(client['#Action=CreateAccessKey'].$post(args, options))
    },
  })
}

export function usePostActionCreateAccessKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccessKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateAccessKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateAccountAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateAccountAlias', '/#Action=CreateAccountAlias', keyArgs] as const
}

export function getActionCreateAccountAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateAccountAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateAccountAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateAccountAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateAccountAliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAccountAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateAccountAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateAccountAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateAccountAliasMutationKey() {
  return ['#Action=CreateAccountAlias', '/#Action=CreateAccountAlias', 'POST'] as const
}

export function getPostActionCreateAccountAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateAccountAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateAccountAlias'].$post(args, options))
    },
  })
}

export function usePostActionCreateAccountAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateAccountAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateAccountAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateGroup', '/#Action=CreateGroup', keyArgs] as const
}

export function getActionCreateGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateGroupMutationKey() {
  return ['#Action=CreateGroup', '/#Action=CreateGroup', 'POST'] as const
}

export function getPostActionCreateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateGroup']['$post']>) {
      return parseResponse(client['#Action=CreateGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateInstanceProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateInstanceProfile', '/#Action=CreateInstanceProfile', keyArgs] as const
}

export function getActionCreateInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateInstanceProfileMutationKey() {
  return ['#Action=CreateInstanceProfile', '/#Action=CreateInstanceProfile', 'POST'] as const
}

export function getPostActionCreateInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionCreateInstanceProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateInstanceProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateLoginProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateLoginProfile', '/#Action=CreateLoginProfile', keyArgs] as const
}

export function getActionCreateLoginProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLoginProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLoginProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLoginProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateLoginProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoginProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLoginProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLoginProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateLoginProfileMutationKey() {
  return ['#Action=CreateLoginProfile', '/#Action=CreateLoginProfile', 'POST'] as const
}

export function getPostActionCreateLoginProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLoginProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLoginProfile'].$post(args, options))
    },
  })
}

export function usePostActionCreateLoginProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoginProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateLoginProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateOpenIDConnectProvider',
    '/#Action=CreateOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function getActionCreateOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateOpenIDConnectProviderMutationKey() {
  return [
    '#Action=CreateOpenIDConnectProvider',
    '/#Action=CreateOpenIDConnectProvider',
    'POST',
  ] as const
}

export function getPostActionCreateOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateOpenIDConnectProvider'].$post(args, options))
    },
  })
}

export function usePostActionCreateOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreatePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreatePolicy', '/#Action=CreatePolicy', keyArgs] as const
}

export function getActionCreatePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreatePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreatePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreatePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreatePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreatePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreatePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreatePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreatePolicyMutationKey() {
  return ['#Action=CreatePolicy', '/#Action=CreatePolicy', 'POST'] as const
}

export function getPostActionCreatePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreatePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']>) {
      return parseResponse(client['#Action=CreatePolicy'].$post(args, options))
    },
  })
}

export function usePostActionCreatePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreatePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreatePolicyVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreatePolicyVersion', '/#Action=CreatePolicyVersion', keyArgs] as const
}

export function getActionCreatePolicyVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreatePolicyVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreatePolicyVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreatePolicyVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreatePolicyVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreatePolicyVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreatePolicyVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreatePolicyVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreatePolicyVersionMutationKey() {
  return ['#Action=CreatePolicyVersion', '/#Action=CreatePolicyVersion', 'POST'] as const
}

export function getPostActionCreatePolicyVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreatePolicyVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=CreatePolicyVersion'].$post(args, options))
    },
  })
}

export function usePostActionCreatePolicyVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePolicyVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreatePolicyVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateRole', '/#Action=CreateRole', keyArgs] as const
}

export function getActionCreateRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateRoleMutationKey() {
  return ['#Action=CreateRole', '/#Action=CreateRole', 'POST'] as const
}

export function getPostActionCreateRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateRole']['$post']>) {
      return parseResponse(client['#Action=CreateRole'].$post(args, options))
    },
  })
}

export function usePostActionCreateRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateSAMLProvider', '/#Action=CreateSAMLProvider', keyArgs] as const
}

export function getActionCreateSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateSAMLProviderMutationKey() {
  return ['#Action=CreateSAMLProvider', '/#Action=CreateSAMLProvider', 'POST'] as const
}

export function getPostActionCreateSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateSAMLProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionCreateSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateServiceLinkedRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateServiceLinkedRole', '/#Action=CreateServiceLinkedRole', keyArgs] as const
}

export function getActionCreateServiceLinkedRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateServiceLinkedRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateServiceLinkedRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateServiceLinkedRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateServiceLinkedRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateServiceLinkedRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateServiceLinkedRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateServiceLinkedRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateServiceLinkedRoleMutationKey() {
  return ['#Action=CreateServiceLinkedRole', '/#Action=CreateServiceLinkedRole', 'POST'] as const
}

export function getPostActionCreateServiceLinkedRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateServiceLinkedRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateServiceLinkedRole'].$post(args, options))
    },
  })
}

export function usePostActionCreateServiceLinkedRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateServiceLinkedRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateServiceSpecificCredentialQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateServiceSpecificCredential',
    '/#Action=CreateServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function getActionCreateServiceSpecificCredentialQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateServiceSpecificCredentialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateServiceSpecificCredential'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateServiceSpecificCredential<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateServiceSpecificCredentialQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateServiceSpecificCredentialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateServiceSpecificCredentialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateServiceSpecificCredential'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateServiceSpecificCredentialMutationKey() {
  return [
    '#Action=CreateServiceSpecificCredential',
    '/#Action=CreateServiceSpecificCredential',
    'POST',
  ] as const
}

export function getPostActionCreateServiceSpecificCredentialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateServiceSpecificCredentialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateServiceSpecificCredential'].$post(args, options))
    },
  })
}

export function usePostActionCreateServiceSpecificCredential<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateServiceSpecificCredentialMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateUser', '/#Action=CreateUser', keyArgs] as const
}

export function getActionCreateUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateUserMutationKey() {
  return ['#Action=CreateUser', '/#Action=CreateUser', 'POST'] as const
}

export function getPostActionCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateUser']['$post']>) {
      return parseResponse(client['#Action=CreateUser'].$post(args, options))
    },
  })
}

export function usePostActionCreateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateVirtualMFADeviceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateVirtualMFADevice', '/#Action=CreateVirtualMFADevice', keyArgs] as const
}

export function getActionCreateVirtualMFADeviceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateVirtualMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateVirtualMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateVirtualMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateVirtualMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateVirtualMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateVirtualMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateVirtualMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateVirtualMFADeviceMutationKey() {
  return ['#Action=CreateVirtualMFADevice', '/#Action=CreateVirtualMFADevice', 'POST'] as const
}

export function getPostActionCreateVirtualMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateVirtualMFADeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateVirtualMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionCreateVirtualMFADevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateVirtualMFADeviceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeactivateMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeactivateMFADevice', '/#Action=DeactivateMFADevice', keyArgs] as const
}

export function getActionDeactivateMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeactivateMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeactivateMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeactivateMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeactivateMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeactivateMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeactivateMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeactivateMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeactivateMFADeviceMutationKey() {
  return ['#Action=DeactivateMFADevice', '/#Action=DeactivateMFADevice', 'POST'] as const
}

export function getPostActionDeactivateMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeactivateMFADeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']>,
    ) {
      return parseResponse(client['#Action=DeactivateMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionDeactivateMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeactivateMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeactivateMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteAccessKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteAccessKey', '/#Action=DeleteAccessKey', keyArgs] as const
}

export function getActionDeleteAccessKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAccessKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAccessKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAccessKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAccessKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAccessKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAccessKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAccessKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteAccessKeyMutationKey() {
  return ['#Action=DeleteAccessKey', '/#Action=DeleteAccessKey', 'POST'] as const
}

export function getPostActionDeleteAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAccessKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']>) {
      return parseResponse(client['#Action=DeleteAccessKey'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAccessKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccessKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAccessKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteAccountAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteAccountAlias', '/#Action=DeleteAccountAlias', keyArgs] as const
}

export function getActionDeleteAccountAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAccountAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAccountAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAccountAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAccountAliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAccountAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAccountAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAccountAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteAccountAliasMutationKey() {
  return ['#Action=DeleteAccountAlias', '/#Action=DeleteAccountAlias', 'POST'] as const
}

export function getPostActionDeleteAccountAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAccountAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAccountAlias'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAccountAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAccountAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteAccountPasswordPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteAccountPasswordPolicy',
    '/#Action=DeleteAccountPasswordPolicy',
    keyArgs,
  ] as const
}

export function getActionDeleteAccountPasswordPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAccountPasswordPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAccountPasswordPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAccountPasswordPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAccountPasswordPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAccountPasswordPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAccountPasswordPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAccountPasswordPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteAccountPasswordPolicyMutationKey() {
  return [
    '#Action=DeleteAccountPasswordPolicy',
    '/#Action=DeleteAccountPasswordPolicy',
    'POST',
  ] as const
}

export function getPostActionDeleteAccountPasswordPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAccountPasswordPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAccountPasswordPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAccountPasswordPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteGroup', '/#Action=DeleteGroup', keyArgs] as const
}

export function getActionDeleteGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteGroupMutationKey() {
  return ['#Action=DeleteGroup', '/#Action=DeleteGroup', 'POST'] as const
}

export function getPostActionDeleteGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']>) {
      return parseResponse(client['#Action=DeleteGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteGroupPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteGroupPolicy', '/#Action=DeleteGroupPolicy', keyArgs] as const
}

export function getActionDeleteGroupPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteGroupPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteGroupPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteGroupPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteGroupPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteGroupPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteGroupPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteGroupPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteGroupPolicyMutationKey() {
  return ['#Action=DeleteGroupPolicy', '/#Action=DeleteGroupPolicy', 'POST'] as const
}

export function getPostActionDeleteGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteGroupPolicy'].$post(args, options))
    },
  })
}

export function usePostActionDeleteGroupPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteGroupPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteInstanceProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteInstanceProfile', '/#Action=DeleteInstanceProfile', keyArgs] as const
}

export function getActionDeleteInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteInstanceProfileMutationKey() {
  return ['#Action=DeleteInstanceProfile', '/#Action=DeleteInstanceProfile', 'POST'] as const
}

export function getPostActionDeleteInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionDeleteInstanceProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteInstanceProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteLoginProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteLoginProfile', '/#Action=DeleteLoginProfile', keyArgs] as const
}

export function getActionDeleteLoginProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLoginProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLoginProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLoginProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLoginProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoginProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLoginProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLoginProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteLoginProfileMutationKey() {
  return ['#Action=DeleteLoginProfile', '/#Action=DeleteLoginProfile', 'POST'] as const
}

export function getPostActionDeleteLoginProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLoginProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLoginProfile'].$post(args, options))
    },
  })
}

export function usePostActionDeleteLoginProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoginProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteLoginProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteOpenIDConnectProvider',
    '/#Action=DeleteOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function getActionDeleteOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteOpenIDConnectProviderMutationKey() {
  return [
    '#Action=DeleteOpenIDConnectProvider',
    '/#Action=DeleteOpenIDConnectProvider',
    'POST',
  ] as const
}

export function getPostActionDeleteOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$post(args, options))
    },
  })
}

export function usePostActionDeleteOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeletePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', keyArgs] as const
}

export function getActionDeletePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeletePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeletePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeletePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeletePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeletePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeletePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeletePolicyMutationKey() {
  return ['#Action=DeletePolicy', '/#Action=DeletePolicy', 'POST'] as const
}

export function getPostActionDeletePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>) {
      return parseResponse(client['#Action=DeletePolicy'].$post(args, options))
    },
  })
}

export function usePostActionDeletePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeletePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeletePolicyVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeletePolicyVersion', '/#Action=DeletePolicyVersion', keyArgs] as const
}

export function getActionDeletePolicyVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeletePolicyVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeletePolicyVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeletePolicyVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeletePolicyVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePolicyVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeletePolicyVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeletePolicyVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeletePolicyVersionMutationKey() {
  return ['#Action=DeletePolicyVersion', '/#Action=DeletePolicyVersion', 'POST'] as const
}

export function getPostActionDeletePolicyVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePolicyVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=DeletePolicyVersion'].$post(args, options))
    },
  })
}

export function usePostActionDeletePolicyVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePolicyVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeletePolicyVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteRole', '/#Action=DeleteRole', keyArgs] as const
}

export function getActionDeleteRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteRoleMutationKey() {
  return ['#Action=DeleteRole', '/#Action=DeleteRole', 'POST'] as const
}

export function getPostActionDeleteRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteRole']['$post']>) {
      return parseResponse(client['#Action=DeleteRole'].$post(args, options))
    },
  })
}

export function usePostActionDeleteRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteRolePermissionsBoundaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteRolePermissionsBoundary',
    '/#Action=DeleteRolePermissionsBoundary',
    keyArgs,
  ] as const
}

export function getActionDeleteRolePermissionsBoundaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteRolePermissionsBoundaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteRolePermissionsBoundary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteRolePermissionsBoundary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteRolePermissionsBoundaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteRolePermissionsBoundaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteRolePermissionsBoundaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteRolePermissionsBoundary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteRolePermissionsBoundaryMutationKey() {
  return [
    '#Action=DeleteRolePermissionsBoundary',
    '/#Action=DeleteRolePermissionsBoundary',
    'POST',
  ] as const
}

export function getPostActionDeleteRolePermissionsBoundaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteRolePermissionsBoundaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$post(args, options))
    },
  })
}

export function usePostActionDeleteRolePermissionsBoundary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteRolePermissionsBoundaryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteRolePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteRolePolicy', '/#Action=DeleteRolePolicy', keyArgs] as const
}

export function getActionDeleteRolePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteRolePolicyMutationKey() {
  return ['#Action=DeleteRolePolicy', '/#Action=DeleteRolePolicy', 'POST'] as const
}

export function getPostActionDeleteRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteRolePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']>) {
      return parseResponse(client['#Action=DeleteRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionDeleteRolePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteRolePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSAMLProvider', '/#Action=DeleteSAMLProvider', keyArgs] as const
}

export function getActionDeleteSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteSAMLProviderMutationKey() {
  return ['#Action=DeleteSAMLProvider', '/#Action=DeleteSAMLProvider', 'POST'] as const
}

export function getPostActionDeleteSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSAMLProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSSHPublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSSHPublicKey', '/#Action=DeleteSSHPublicKey', keyArgs] as const
}

export function getActionDeleteSSHPublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSSHPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSSHPublicKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSSHPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSSHPublicKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSSHPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSSHPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSSHPublicKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteSSHPublicKeyMutationKey() {
  return ['#Action=DeleteSSHPublicKey', '/#Action=DeleteSSHPublicKey', 'POST'] as const
}

export function getPostActionDeleteSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSSHPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSSHPublicKey'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSSHPublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSSHPublicKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteServerCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteServerCertificate', '/#Action=DeleteServerCertificate', keyArgs] as const
}

export function getActionDeleteServerCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteServerCertificateMutationKey() {
  return ['#Action=DeleteServerCertificate', '/#Action=DeleteServerCertificate', 'POST'] as const
}

export function getPostActionDeleteServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionDeleteServerCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteServiceLinkedRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteServiceLinkedRole', '/#Action=DeleteServiceLinkedRole', keyArgs] as const
}

export function getActionDeleteServiceLinkedRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteServiceLinkedRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteServiceLinkedRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteServiceLinkedRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteServiceLinkedRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteServiceLinkedRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteServiceLinkedRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteServiceLinkedRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteServiceLinkedRoleMutationKey() {
  return ['#Action=DeleteServiceLinkedRole', '/#Action=DeleteServiceLinkedRole', 'POST'] as const
}

export function getPostActionDeleteServiceLinkedRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteServiceLinkedRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteServiceLinkedRole'].$post(args, options))
    },
  })
}

export function usePostActionDeleteServiceLinkedRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteServiceLinkedRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteServiceSpecificCredentialQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteServiceSpecificCredential',
    '/#Action=DeleteServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function getActionDeleteServiceSpecificCredentialQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteServiceSpecificCredentialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteServiceSpecificCredential'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteServiceSpecificCredential<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteServiceSpecificCredentialQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteServiceSpecificCredentialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteServiceSpecificCredentialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteServiceSpecificCredential'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteServiceSpecificCredentialMutationKey() {
  return [
    '#Action=DeleteServiceSpecificCredential',
    '/#Action=DeleteServiceSpecificCredential',
    'POST',
  ] as const
}

export function getPostActionDeleteServiceSpecificCredentialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteServiceSpecificCredentialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteServiceSpecificCredential'].$post(args, options))
    },
  })
}

export function usePostActionDeleteServiceSpecificCredential<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteServiceSpecificCredentialMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSigningCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSigningCertificate', '/#Action=DeleteSigningCertificate', keyArgs] as const
}

export function getActionDeleteSigningCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSigningCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSigningCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSigningCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSigningCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSigningCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSigningCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSigningCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteSigningCertificateMutationKey() {
  return ['#Action=DeleteSigningCertificate', '/#Action=DeleteSigningCertificate', 'POST'] as const
}

export function getPostActionDeleteSigningCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSigningCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSigningCertificate'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSigningCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSigningCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteUser', '/#Action=DeleteUser', keyArgs] as const
}

export function getActionDeleteUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteUserMutationKey() {
  return ['#Action=DeleteUser', '/#Action=DeleteUser', 'POST'] as const
}

export function getPostActionDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>) {
      return parseResponse(client['#Action=DeleteUser'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteUserPermissionsBoundaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteUserPermissionsBoundary',
    '/#Action=DeleteUserPermissionsBoundary',
    keyArgs,
  ] as const
}

export function getActionDeleteUserPermissionsBoundaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUserPermissionsBoundaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUserPermissionsBoundary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUserPermissionsBoundary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteUserPermissionsBoundaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserPermissionsBoundaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUserPermissionsBoundaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUserPermissionsBoundary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteUserPermissionsBoundaryMutationKey() {
  return [
    '#Action=DeleteUserPermissionsBoundary',
    '/#Action=DeleteUserPermissionsBoundary',
    'POST',
  ] as const
}

export function getPostActionDeleteUserPermissionsBoundaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUserPermissionsBoundaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUserPermissionsBoundary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteUserPermissionsBoundaryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteUserPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteUserPolicy', '/#Action=DeleteUserPolicy', keyArgs] as const
}

export function getActionDeleteUserPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUserPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUserPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUserPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteUserPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUserPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUserPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteUserPolicyMutationKey() {
  return ['#Action=DeleteUserPolicy', '/#Action=DeleteUserPolicy', 'POST'] as const
}

export function getPostActionDeleteUserPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUserPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']>) {
      return parseResponse(client['#Action=DeleteUserPolicy'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUserPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUserPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteUserPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteVirtualMFADeviceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteVirtualMFADevice', '/#Action=DeleteVirtualMFADevice', keyArgs] as const
}

export function getActionDeleteVirtualMFADeviceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteVirtualMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteVirtualMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteVirtualMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteVirtualMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteVirtualMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteVirtualMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteVirtualMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteVirtualMFADeviceMutationKey() {
  return ['#Action=DeleteVirtualMFADevice', '/#Action=DeleteVirtualMFADevice', 'POST'] as const
}

export function getPostActionDeleteVirtualMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteVirtualMFADeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteVirtualMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionDeleteVirtualMFADevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteVirtualMFADeviceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachGroupPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachGroupPolicy', '/#Action=DetachGroupPolicy', keyArgs] as const
}

export function getActionDetachGroupPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachGroupPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachGroupPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachGroupPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachGroupPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachGroupPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachGroupPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachGroupPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDetachGroupPolicyMutationKey() {
  return ['#Action=DetachGroupPolicy', '/#Action=DetachGroupPolicy', 'POST'] as const
}

export function getPostActionDetachGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=DetachGroupPolicy'].$post(args, options))
    },
  })
}

export function usePostActionDetachGroupPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachGroupPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachGroupPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachRolePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachRolePolicy', '/#Action=DetachRolePolicy', keyArgs] as const
}

export function getActionDetachRolePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDetachRolePolicyMutationKey() {
  return ['#Action=DetachRolePolicy', '/#Action=DetachRolePolicy', 'POST'] as const
}

export function getPostActionDetachRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachRolePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']>) {
      return parseResponse(client['#Action=DetachRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionDetachRolePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachRolePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDetachUserPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DetachUserPolicy', '/#Action=DetachUserPolicy', keyArgs] as const
}

export function getActionDetachUserPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachUserPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachUserPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachUserPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDetachUserPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachUserPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachUserPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachUserPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDetachUserPolicyMutationKey() {
  return ['#Action=DetachUserPolicy', '/#Action=DetachUserPolicy', 'POST'] as const
}

export function getPostActionDetachUserPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachUserPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']>) {
      return parseResponse(client['#Action=DetachUserPolicy'].$post(args, options))
    },
  })
}

export function usePostActionDetachUserPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DetachUserPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDetachUserPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionEnableMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=EnableMFADevice', '/#Action=EnableMFADevice', keyArgs] as const
}

export function getActionEnableMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnableMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnableMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnableMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionEnableMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnableMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnableMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionEnableMFADeviceMutationKey() {
  return ['#Action=EnableMFADevice', '/#Action=EnableMFADevice', 'POST'] as const
}

export function getPostActionEnableMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableMFADeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']>) {
      return parseResponse(client['#Action=EnableMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionEnableMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=EnableMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionEnableMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGenerateCredentialReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GenerateCredentialReport', '/#Action=GenerateCredentialReport', keyArgs] as const
}

export function getActionGenerateCredentialReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGenerateCredentialReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GenerateCredentialReport'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGenerateCredentialReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGenerateCredentialReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGenerateCredentialReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGenerateCredentialReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GenerateCredentialReport'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGenerateCredentialReportMutationKey() {
  return ['#Action=GenerateCredentialReport', '/#Action=GenerateCredentialReport', 'POST'] as const
}

export function getPostActionGenerateCredentialReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGenerateCredentialReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']>,
    ) {
      return parseResponse(client['#Action=GenerateCredentialReport'].$post(args, options))
    },
  })
}

export function usePostActionGenerateCredentialReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GenerateCredentialReport']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGenerateCredentialReportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGenerateOrganizationsAccessReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GenerateOrganizationsAccessReport',
    '/#Action=GenerateOrganizationsAccessReport',
    keyArgs,
  ] as const
}

export function getActionGenerateOrganizationsAccessReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGenerateOrganizationsAccessReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GenerateOrganizationsAccessReport'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGenerateOrganizationsAccessReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGenerateOrganizationsAccessReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGenerateOrganizationsAccessReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGenerateOrganizationsAccessReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GenerateOrganizationsAccessReport'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGenerateOrganizationsAccessReportMutationKey() {
  return [
    '#Action=GenerateOrganizationsAccessReport',
    '/#Action=GenerateOrganizationsAccessReport',
    'POST',
  ] as const
}

export function getPostActionGenerateOrganizationsAccessReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGenerateOrganizationsAccessReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>,
    ) {
      return parseResponse(client['#Action=GenerateOrganizationsAccessReport'].$post(args, options))
    },
  })
}

export function usePostActionGenerateOrganizationsAccessReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGenerateOrganizationsAccessReportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGenerateServiceLastAccessedDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GenerateServiceLastAccessedDetails',
    '/#Action=GenerateServiceLastAccessedDetails',
    keyArgs,
  ] as const
}

export function getActionGenerateServiceLastAccessedDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGenerateServiceLastAccessedDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GenerateServiceLastAccessedDetails'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGenerateServiceLastAccessedDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGenerateServiceLastAccessedDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGenerateServiceLastAccessedDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGenerateServiceLastAccessedDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GenerateServiceLastAccessedDetails'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGenerateServiceLastAccessedDetailsMutationKey() {
  return [
    '#Action=GenerateServiceLastAccessedDetails',
    '/#Action=GenerateServiceLastAccessedDetails',
    'POST',
  ] as const
}

export function getPostActionGenerateServiceLastAccessedDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGenerateServiceLastAccessedDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GenerateServiceLastAccessedDetails'].$post(args, options),
      )
    },
  })
}

export function usePostActionGenerateServiceLastAccessedDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGenerateServiceLastAccessedDetailsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetAccessKeyLastUsedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetAccessKeyLastUsed', '/#Action=GetAccessKeyLastUsed', keyArgs] as const
}

export function getActionGetAccessKeyLastUsedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccessKeyLastUsedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccessKeyLastUsed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccessKeyLastUsed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAccessKeyLastUsedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccessKeyLastUsedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccessKeyLastUsedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccessKeyLastUsed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetAccessKeyLastUsedMutationKey() {
  return ['#Action=GetAccessKeyLastUsed', '/#Action=GetAccessKeyLastUsed', 'POST'] as const
}

export function getPostActionGetAccessKeyLastUsedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccessKeyLastUsedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>,
    ) {
      return parseResponse(client['#Action=GetAccessKeyLastUsed'].$post(args, options))
    },
  })
}

export function usePostActionGetAccessKeyLastUsed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccessKeyLastUsedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetAccountAuthorizationDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetAccountAuthorizationDetails',
    '/#Action=GetAccountAuthorizationDetails',
    keyArgs,
  ] as const
}

export function getActionGetAccountAuthorizationDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccountAuthorizationDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccountAuthorizationDetails'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccountAuthorizationDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetAccountAuthorizationDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccountAuthorizationDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccountAuthorizationDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccountAuthorizationDetails'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetAccountAuthorizationDetailsMutationKey() {
  return [
    '#Action=GetAccountAuthorizationDetails',
    '/#Action=GetAccountAuthorizationDetails',
    'POST',
  ] as const
}

export function getPostActionGetAccountAuthorizationDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccountAuthorizationDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>,
    ) {
      return parseResponse(client['#Action=GetAccountAuthorizationDetails'].$post(args, options))
    },
  })
}

export function usePostActionGetAccountAuthorizationDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccountAuthorizationDetailsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetAccountPasswordPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetAccountPasswordPolicy', '/#Action=GetAccountPasswordPolicy', keyArgs] as const
}

export function getActionGetAccountPasswordPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccountPasswordPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccountPasswordPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccountPasswordPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAccountPasswordPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccountPasswordPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccountPasswordPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccountPasswordPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetAccountPasswordPolicyMutationKey() {
  return ['#Action=GetAccountPasswordPolicy', '/#Action=GetAccountPasswordPolicy', 'POST'] as const
}

export function getPostActionGetAccountPasswordPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccountPasswordPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=GetAccountPasswordPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetAccountPasswordPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccountPasswordPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetAccountSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetAccountSummary', '/#Action=GetAccountSummary', keyArgs] as const
}

export function getActionGetAccountSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccountSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccountSummary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAccountSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccountSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccountSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccountSummary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetAccountSummaryMutationKey() {
  return ['#Action=GetAccountSummary', '/#Action=GetAccountSummary', 'POST'] as const
}

export function getPostActionGetAccountSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccountSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']>,
    ) {
      return parseResponse(client['#Action=GetAccountSummary'].$post(args, options))
    },
  })
}

export function usePostActionGetAccountSummary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSummary']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccountSummaryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetContextKeysForCustomPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetContextKeysForCustomPolicy',
    '/#Action=GetContextKeysForCustomPolicy',
    keyArgs,
  ] as const
}

export function getActionGetContextKeysForCustomPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetContextKeysForCustomPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetContextKeysForCustomPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetContextKeysForCustomPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetContextKeysForCustomPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetContextKeysForCustomPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetContextKeysForCustomPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetContextKeysForCustomPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetContextKeysForCustomPolicyMutationKey() {
  return [
    '#Action=GetContextKeysForCustomPolicy',
    '/#Action=GetContextKeysForCustomPolicy',
    'POST',
  ] as const
}

export function getPostActionGetContextKeysForCustomPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetContextKeysForCustomPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetContextKeysForCustomPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetContextKeysForCustomPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetContextKeysForPrincipalPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetContextKeysForPrincipalPolicy',
    '/#Action=GetContextKeysForPrincipalPolicy',
    keyArgs,
  ] as const
}

export function getActionGetContextKeysForPrincipalPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetContextKeysForPrincipalPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetContextKeysForPrincipalPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetContextKeysForPrincipalPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetContextKeysForPrincipalPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetContextKeysForPrincipalPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetContextKeysForPrincipalPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetContextKeysForPrincipalPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetContextKeysForPrincipalPolicyMutationKey() {
  return [
    '#Action=GetContextKeysForPrincipalPolicy',
    '/#Action=GetContextKeysForPrincipalPolicy',
    'POST',
  ] as const
}

export function getPostActionGetContextKeysForPrincipalPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetContextKeysForPrincipalPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=GetContextKeysForPrincipalPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetContextKeysForPrincipalPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetContextKeysForPrincipalPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetCredentialReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetCredentialReport', '/#Action=GetCredentialReport', keyArgs] as const
}

export function getActionGetCredentialReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetCredentialReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetCredentialReport'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetCredentialReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetCredentialReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetCredentialReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetCredentialReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetCredentialReport'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetCredentialReportMutationKey() {
  return ['#Action=GetCredentialReport', '/#Action=GetCredentialReport', 'POST'] as const
}

export function getPostActionGetCredentialReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetCredentialReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']>,
    ) {
      return parseResponse(client['#Action=GetCredentialReport'].$post(args, options))
    },
  })
}

export function usePostActionGetCredentialReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetCredentialReport']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetCredentialReportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetGroup', '/#Action=GetGroup', keyArgs] as const
}

export function getActionGetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
            >
          >,
          ReturnType<typeof getActionGetGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetGroupMutationKey() {
  return ['#Action=GetGroup', '/#Action=GetGroup', 'POST'] as const
}

export function getPostActionGetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetGroup']['$post']>) {
      return parseResponse(client['#Action=GetGroup'].$post(args, options))
    },
  })
}

export function usePostActionGetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetGroupPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetGroupPolicy', '/#Action=GetGroupPolicy', keyArgs] as const
}

export function getActionGetGroupPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetGroupPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetGroupPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetGroupPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetGroupPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetGroupPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetGroupPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetGroupPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetGroupPolicyMutationKey() {
  return ['#Action=GetGroupPolicy', '/#Action=GetGroupPolicy', 'POST'] as const
}

export function getPostActionGetGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetGroupPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']>) {
      return parseResponse(client['#Action=GetGroupPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetGroupPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetGroupPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetGroupPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetInstanceProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetInstanceProfile', '/#Action=GetInstanceProfile', keyArgs] as const
}

export function getActionGetInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetInstanceProfileMutationKey() {
  return ['#Action=GetInstanceProfile', '/#Action=GetInstanceProfile', 'POST'] as const
}

export function getPostActionGetInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=GetInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionGetInstanceProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetInstanceProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetLoginProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetLoginProfile', '/#Action=GetLoginProfile', keyArgs] as const
}

export function getActionGetLoginProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetLoginProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetLoginProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetLoginProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetLoginProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetLoginProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetLoginProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetLoginProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetLoginProfileMutationKey() {
  return ['#Action=GetLoginProfile', '/#Action=GetLoginProfile', 'POST'] as const
}

export function getPostActionGetLoginProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetLoginProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']>) {
      return parseResponse(client['#Action=GetLoginProfile'].$post(args, options))
    },
  })
}

export function usePostActionGetLoginProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetLoginProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetLoginProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetMFADevice', '/#Action=GetMFADevice', keyArgs] as const
}

export function getActionGetMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetMFADeviceMutationKey() {
  return ['#Action=GetMFADevice', '/#Action=GetMFADevice', 'POST'] as const
}

export function getPostActionGetMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetMFADeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']>) {
      return parseResponse(client['#Action=GetMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionGetMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetOpenIDConnectProvider', '/#Action=GetOpenIDConnectProvider', keyArgs] as const
}

export function getActionGetOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetOpenIDConnectProviderMutationKey() {
  return ['#Action=GetOpenIDConnectProvider', '/#Action=GetOpenIDConnectProvider', 'POST'] as const
}

export function getPostActionGetOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=GetOpenIDConnectProvider'].$post(args, options))
    },
  })
}

export function usePostActionGetOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetOrganizationsAccessReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetOrganizationsAccessReport',
    '/#Action=GetOrganizationsAccessReport',
    keyArgs,
  ] as const
}

export function getActionGetOrganizationsAccessReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetOrganizationsAccessReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetOrganizationsAccessReport'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetOrganizationsAccessReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetOrganizationsAccessReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetOrganizationsAccessReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetOrganizationsAccessReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetOrganizationsAccessReport'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetOrganizationsAccessReportMutationKey() {
  return [
    '#Action=GetOrganizationsAccessReport',
    '/#Action=GetOrganizationsAccessReport',
    'POST',
  ] as const
}

export function getPostActionGetOrganizationsAccessReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetOrganizationsAccessReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>,
    ) {
      return parseResponse(client['#Action=GetOrganizationsAccessReport'].$post(args, options))
    },
  })
}

export function usePostActionGetOrganizationsAccessReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetOrganizationsAccessReportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetPolicy', '/#Action=GetPolicy', keyArgs] as const
}

export function getActionGetPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetPolicyMutationKey() {
  return ['#Action=GetPolicy', '/#Action=GetPolicy', 'POST'] as const
}

export function getPostActionGetPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetPolicy']['$post']>) {
      return parseResponse(client['#Action=GetPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetPolicyVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetPolicyVersion', '/#Action=GetPolicyVersion', keyArgs] as const
}

export function getActionGetPolicyVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetPolicyVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetPolicyVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetPolicyVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetPolicyVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetPolicyVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetPolicyVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetPolicyVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetPolicyVersionMutationKey() {
  return ['#Action=GetPolicyVersion', '/#Action=GetPolicyVersion', 'POST'] as const
}

export function getPostActionGetPolicyVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetPolicyVersionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']>) {
      return parseResponse(client['#Action=GetPolicyVersion'].$post(args, options))
    },
  })
}

export function usePostActionGetPolicyVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetPolicyVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetPolicyVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetRole', '/#Action=GetRole', keyArgs] as const
}

export function getActionGetRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
            >
          >,
          ReturnType<typeof getActionGetRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetRoleMutationKey() {
  return ['#Action=GetRole', '/#Action=GetRole', 'POST'] as const
}

export function getPostActionGetRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetRole']['$post']>) {
      return parseResponse(client['#Action=GetRole'].$post(args, options))
    },
  })
}

export function usePostActionGetRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRole']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetRolePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetRolePolicy', '/#Action=GetRolePolicy', keyArgs] as const
}

export function getActionGetRolePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetRolePolicyMutationKey() {
  return ['#Action=GetRolePolicy', '/#Action=GetRolePolicy', 'POST'] as const
}

export function getPostActionGetRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetRolePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']>) {
      return parseResponse(client['#Action=GetRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetRolePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetRolePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetSAMLProvider', '/#Action=GetSAMLProvider', keyArgs] as const
}

export function getActionGetSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetSAMLProviderMutationKey() {
  return ['#Action=GetSAMLProvider', '/#Action=GetSAMLProvider', 'POST'] as const
}

export function getPostActionGetSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSAMLProviderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']>) {
      return parseResponse(client['#Action=GetSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionGetSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetSSHPublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetSSHPublicKey', '/#Action=GetSSHPublicKey', keyArgs] as const
}

export function getActionGetSSHPublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetSSHPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetSSHPublicKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetSSHPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetSSHPublicKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSSHPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetSSHPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetSSHPublicKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetSSHPublicKeyMutationKey() {
  return ['#Action=GetSSHPublicKey', '/#Action=GetSSHPublicKey', 'POST'] as const
}

export function getPostActionGetSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSSHPublicKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']>) {
      return parseResponse(client['#Action=GetSSHPublicKey'].$post(args, options))
    },
  })
}

export function usePostActionGetSSHPublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSSHPublicKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSSHPublicKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetServerCertificateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetServerCertificate', '/#Action=GetServerCertificate', keyArgs] as const
}

export function getActionGetServerCertificateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetServerCertificateMutationKey() {
  return ['#Action=GetServerCertificate', '/#Action=GetServerCertificate', 'POST'] as const
}

export function getPostActionGetServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=GetServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionGetServerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetServiceLastAccessedDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetServiceLastAccessedDetails',
    '/#Action=GetServiceLastAccessedDetails',
    keyArgs,
  ] as const
}

export function getActionGetServiceLastAccessedDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetServiceLastAccessedDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetServiceLastAccessedDetails'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetServiceLastAccessedDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetServiceLastAccessedDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetServiceLastAccessedDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetServiceLastAccessedDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetServiceLastAccessedDetails'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetServiceLastAccessedDetailsMutationKey() {
  return [
    '#Action=GetServiceLastAccessedDetails',
    '/#Action=GetServiceLastAccessedDetails',
    'POST',
  ] as const
}

export function getPostActionGetServiceLastAccessedDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetServiceLastAccessedDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>,
    ) {
      return parseResponse(client['#Action=GetServiceLastAccessedDetails'].$post(args, options))
    },
  })
}

export function usePostActionGetServiceLastAccessedDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetServiceLastAccessedDetailsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetServiceLastAccessedDetailsWithEntitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetServiceLastAccessedDetailsWithEntities',
    '/#Action=GetServiceLastAccessedDetailsWithEntities',
    keyArgs,
  ] as const
}

export function getActionGetServiceLastAccessedDetailsWithEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetServiceLastAccessedDetailsWithEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetServiceLastAccessedDetailsWithEntities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetServiceLastAccessedDetailsWithEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getActionGetServiceLastAccessedDetailsWithEntitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetServiceLastAccessedDetailsWithEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetServiceLastAccessedDetailsWithEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetServiceLastAccessedDetailsWithEntities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetServiceLastAccessedDetailsWithEntitiesMutationKey() {
  return [
    '#Action=GetServiceLastAccessedDetailsWithEntities',
    '/#Action=GetServiceLastAccessedDetailsWithEntities',
    'POST',
  ] as const
}

export function getPostActionGetServiceLastAccessedDetailsWithEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetServiceLastAccessedDetailsWithEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GetServiceLastAccessedDetailsWithEntities'].$post(args, options),
      )
    },
  })
}

export function usePostActionGetServiceLastAccessedDetailsWithEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetServiceLastAccessedDetailsWithEntitiesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetServiceLinkedRoleDeletionStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetServiceLinkedRoleDeletionStatus',
    '/#Action=GetServiceLinkedRoleDeletionStatus',
    keyArgs,
  ] as const
}

export function getActionGetServiceLinkedRoleDeletionStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetServiceLinkedRoleDeletionStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetServiceLinkedRoleDeletionStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetServiceLinkedRoleDeletionStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetServiceLinkedRoleDeletionStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetServiceLinkedRoleDeletionStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetServiceLinkedRoleDeletionStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetServiceLinkedRoleDeletionStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetServiceLinkedRoleDeletionStatusMutationKey() {
  return [
    '#Action=GetServiceLinkedRoleDeletionStatus',
    '/#Action=GetServiceLinkedRoleDeletionStatus',
    'POST',
  ] as const
}

export function getPostActionGetServiceLinkedRoleDeletionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetServiceLinkedRoleDeletionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GetServiceLinkedRoleDeletionStatus'].$post(args, options),
      )
    },
  })
}

export function usePostActionGetServiceLinkedRoleDeletionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetServiceLinkedRoleDeletionStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetUser', '/#Action=GetUser', keyArgs] as const
}

export function getActionGetUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
            >
          >,
          ReturnType<typeof getActionGetUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetUserMutationKey() {
  return ['#Action=GetUser', '/#Action=GetUser', 'POST'] as const
}

export function getPostActionGetUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetUser']['$post']>) {
      return parseResponse(client['#Action=GetUser'].$post(args, options))
    },
  })
}

export function usePostActionGetUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUser']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetUserPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetUserPolicy', '/#Action=GetUserPolicy', keyArgs] as const
}

export function getActionGetUserPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetUserPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetUserPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetUserPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetUserPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetUserPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetUserPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetUserPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetUserPolicyMutationKey() {
  return ['#Action=GetUserPolicy', '/#Action=GetUserPolicy', 'POST'] as const
}

export function getPostActionGetUserPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetUserPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']>) {
      return parseResponse(client['#Action=GetUserPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetUserPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetUserPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetUserPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListAccessKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListAccessKeys', '/#Action=ListAccessKeys', keyArgs] as const
}

export function getActionListAccessKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAccessKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAccessKeys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAccessKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAccessKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAccessKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAccessKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAccessKeys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAccessKeysMutationKey() {
  return ['#Action=ListAccessKeys', '/#Action=ListAccessKeys', 'POST'] as const
}

export function getPostActionListAccessKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAccessKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']>) {
      return parseResponse(client['#Action=ListAccessKeys'].$post(args, options))
    },
  })
}

export function usePostActionListAccessKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccessKeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAccessKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListAccountAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListAccountAliases', '/#Action=ListAccountAliases', keyArgs] as const
}

export function getActionListAccountAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAccountAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAccountAliases'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAccountAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAccountAliasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAccountAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAccountAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAccountAliases'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAccountAliasesMutationKey() {
  return ['#Action=ListAccountAliases', '/#Action=ListAccountAliases', 'POST'] as const
}

export function getPostActionListAccountAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAccountAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAccountAliases'].$post(args, options))
    },
  })
}

export function usePostActionListAccountAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAccountAliases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAccountAliasesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListAttachedGroupPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListAttachedGroupPolicies',
    '/#Action=ListAttachedGroupPolicies',
    keyArgs,
  ] as const
}

export function getActionListAttachedGroupPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAttachedGroupPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAttachedGroupPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAttachedGroupPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAttachedGroupPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAttachedGroupPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAttachedGroupPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAttachedGroupPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAttachedGroupPoliciesMutationKey() {
  return [
    '#Action=ListAttachedGroupPolicies',
    '/#Action=ListAttachedGroupPolicies',
    'POST',
  ] as const
}

export function getPostActionListAttachedGroupPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAttachedGroupPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAttachedGroupPolicies'].$post(args, options))
    },
  })
}

export function usePostActionListAttachedGroupPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAttachedGroupPoliciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListAttachedRolePoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListAttachedRolePolicies', '/#Action=ListAttachedRolePolicies', keyArgs] as const
}

export function getActionListAttachedRolePoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAttachedRolePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAttachedRolePolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAttachedRolePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAttachedRolePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAttachedRolePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAttachedRolePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAttachedRolePolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAttachedRolePoliciesMutationKey() {
  return ['#Action=ListAttachedRolePolicies', '/#Action=ListAttachedRolePolicies', 'POST'] as const
}

export function getPostActionListAttachedRolePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAttachedRolePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAttachedRolePolicies'].$post(args, options))
    },
  })
}

export function usePostActionListAttachedRolePolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAttachedRolePoliciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListAttachedUserPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListAttachedUserPolicies', '/#Action=ListAttachedUserPolicies', keyArgs] as const
}

export function getActionListAttachedUserPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAttachedUserPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAttachedUserPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAttachedUserPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAttachedUserPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAttachedUserPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAttachedUserPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAttachedUserPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAttachedUserPoliciesMutationKey() {
  return ['#Action=ListAttachedUserPolicies', '/#Action=ListAttachedUserPolicies', 'POST'] as const
}

export function getPostActionListAttachedUserPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAttachedUserPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAttachedUserPolicies'].$post(args, options))
    },
  })
}

export function usePostActionListAttachedUserPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAttachedUserPoliciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListEntitiesForPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListEntitiesForPolicy', '/#Action=ListEntitiesForPolicy', keyArgs] as const
}

export function getActionListEntitiesForPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListEntitiesForPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListEntitiesForPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListEntitiesForPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListEntitiesForPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListEntitiesForPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListEntitiesForPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListEntitiesForPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListEntitiesForPolicyMutationKey() {
  return ['#Action=ListEntitiesForPolicy', '/#Action=ListEntitiesForPolicy', 'POST'] as const
}

export function getPostActionListEntitiesForPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListEntitiesForPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=ListEntitiesForPolicy'].$post(args, options))
    },
  })
}

export function usePostActionListEntitiesForPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListEntitiesForPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListGroupPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListGroupPolicies', '/#Action=ListGroupPolicies', keyArgs] as const
}

export function getActionListGroupPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListGroupPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListGroupPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListGroupPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListGroupPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListGroupPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListGroupPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListGroupPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListGroupPoliciesMutationKey() {
  return ['#Action=ListGroupPolicies', '/#Action=ListGroupPolicies', 'POST'] as const
}

export function getPostActionListGroupPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListGroupPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=ListGroupPolicies'].$post(args, options))
    },
  })
}

export function usePostActionListGroupPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListGroupPoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListGroups', '/#Action=ListGroups', keyArgs] as const
}

export function getActionListGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListGroupsMutationKey() {
  return ['#Action=ListGroups', '/#Action=ListGroups', 'POST'] as const
}

export function getPostActionListGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListGroups']['$post']>) {
      return parseResponse(client['#Action=ListGroups'].$post(args, options))
    },
  })
}

export function usePostActionListGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListGroups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListGroupsForUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListGroupsForUser', '/#Action=ListGroupsForUser', keyArgs] as const
}

export function getActionListGroupsForUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListGroupsForUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListGroupsForUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListGroupsForUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListGroupsForUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListGroupsForUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListGroupsForUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListGroupsForUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListGroupsForUserMutationKey() {
  return ['#Action=ListGroupsForUser', '/#Action=ListGroupsForUser', 'POST'] as const
}

export function getPostActionListGroupsForUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListGroupsForUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']>,
    ) {
      return parseResponse(client['#Action=ListGroupsForUser'].$post(args, options))
    },
  })
}

export function usePostActionListGroupsForUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListGroupsForUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListGroupsForUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListInstanceProfileTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListInstanceProfileTags', '/#Action=ListInstanceProfileTags', keyArgs] as const
}

export function getActionListInstanceProfileTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListInstanceProfileTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListInstanceProfileTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListInstanceProfileTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListInstanceProfileTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListInstanceProfileTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListInstanceProfileTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListInstanceProfileTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListInstanceProfileTagsMutationKey() {
  return ['#Action=ListInstanceProfileTags', '/#Action=ListInstanceProfileTags', 'POST'] as const
}

export function getPostActionListInstanceProfileTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListInstanceProfileTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>,
    ) {
      return parseResponse(client['#Action=ListInstanceProfileTags'].$post(args, options))
    },
  })
}

export function usePostActionListInstanceProfileTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListInstanceProfileTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListInstanceProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListInstanceProfiles', '/#Action=ListInstanceProfiles', keyArgs] as const
}

export function getActionListInstanceProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListInstanceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListInstanceProfiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListInstanceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListInstanceProfilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListInstanceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListInstanceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListInstanceProfiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListInstanceProfilesMutationKey() {
  return ['#Action=ListInstanceProfiles', '/#Action=ListInstanceProfiles', 'POST'] as const
}

export function getPostActionListInstanceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListInstanceProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']>,
    ) {
      return parseResponse(client['#Action=ListInstanceProfiles'].$post(args, options))
    },
  })
}

export function usePostActionListInstanceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListInstanceProfilesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListInstanceProfilesForRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListInstanceProfilesForRole',
    '/#Action=ListInstanceProfilesForRole',
    keyArgs,
  ] as const
}

export function getActionListInstanceProfilesForRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListInstanceProfilesForRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListInstanceProfilesForRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListInstanceProfilesForRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListInstanceProfilesForRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListInstanceProfilesForRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListInstanceProfilesForRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListInstanceProfilesForRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListInstanceProfilesForRoleMutationKey() {
  return [
    '#Action=ListInstanceProfilesForRole',
    '/#Action=ListInstanceProfilesForRole',
    'POST',
  ] as const
}

export function getPostActionListInstanceProfilesForRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListInstanceProfilesForRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>,
    ) {
      return parseResponse(client['#Action=ListInstanceProfilesForRole'].$post(args, options))
    },
  })
}

export function usePostActionListInstanceProfilesForRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListInstanceProfilesForRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListMFADeviceTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListMFADeviceTags', '/#Action=ListMFADeviceTags', keyArgs] as const
}

export function getActionListMFADeviceTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListMFADeviceTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListMFADeviceTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListMFADeviceTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListMFADeviceTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListMFADeviceTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListMFADeviceTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListMFADeviceTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListMFADeviceTagsMutationKey() {
  return ['#Action=ListMFADeviceTags', '/#Action=ListMFADeviceTags', 'POST'] as const
}

export function getPostActionListMFADeviceTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListMFADeviceTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']>,
    ) {
      return parseResponse(client['#Action=ListMFADeviceTags'].$post(args, options))
    },
  })
}

export function usePostActionListMFADeviceTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADeviceTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListMFADeviceTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListMFADevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListMFADevices', '/#Action=ListMFADevices', keyArgs] as const
}

export function getActionListMFADevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListMFADevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListMFADevices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListMFADevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListMFADevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListMFADevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListMFADevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListMFADevices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListMFADevicesMutationKey() {
  return ['#Action=ListMFADevices', '/#Action=ListMFADevices', 'POST'] as const
}

export function getPostActionListMFADevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListMFADevicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']>) {
      return parseResponse(client['#Action=ListMFADevices'].$post(args, options))
    },
  })
}

export function usePostActionListMFADevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListMFADevices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListMFADevicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListOpenIDConnectProviderTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListOpenIDConnectProviderTags',
    '/#Action=ListOpenIDConnectProviderTags',
    keyArgs,
  ] as const
}

export function getActionListOpenIDConnectProviderTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListOpenIDConnectProviderTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListOpenIDConnectProviderTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListOpenIDConnectProviderTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionListOpenIDConnectProviderTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListOpenIDConnectProviderTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListOpenIDConnectProviderTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListOpenIDConnectProviderTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListOpenIDConnectProviderTagsMutationKey() {
  return [
    '#Action=ListOpenIDConnectProviderTags',
    '/#Action=ListOpenIDConnectProviderTags',
    'POST',
  ] as const
}

export function getPostActionListOpenIDConnectProviderTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListOpenIDConnectProviderTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>,
    ) {
      return parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$post(args, options))
    },
  })
}

export function usePostActionListOpenIDConnectProviderTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListOpenIDConnectProviderTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListOpenIDConnectProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListOpenIDConnectProviders',
    '/#Action=ListOpenIDConnectProviders',
    keyArgs,
  ] as const
}

export function getActionListOpenIDConnectProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListOpenIDConnectProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListOpenIDConnectProviders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListOpenIDConnectProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListOpenIDConnectProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListOpenIDConnectProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListOpenIDConnectProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListOpenIDConnectProviders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListOpenIDConnectProvidersMutationKey() {
  return [
    '#Action=ListOpenIDConnectProviders',
    '/#Action=ListOpenIDConnectProviders',
    'POST',
  ] as const
}

export function getPostActionListOpenIDConnectProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListOpenIDConnectProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>,
    ) {
      return parseResponse(client['#Action=ListOpenIDConnectProviders'].$post(args, options))
    },
  })
}

export function usePostActionListOpenIDConnectProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListOpenIDConnectProvidersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListPolicies', '/#Action=ListPolicies', keyArgs] as const
}

export function getActionListPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPoliciesMutationKey() {
  return ['#Action=ListPolicies', '/#Action=ListPolicies', 'POST'] as const
}

export function getPostActionListPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListPolicies']['$post']>) {
      return parseResponse(client['#Action=ListPolicies'].$post(args, options))
    },
  })
}

export function usePostActionListPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPoliciesGrantingServiceAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListPoliciesGrantingServiceAccess',
    '/#Action=ListPoliciesGrantingServiceAccess',
    keyArgs,
  ] as const
}

export function getActionListPoliciesGrantingServiceAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPoliciesGrantingServiceAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPoliciesGrantingServiceAccess'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPoliciesGrantingServiceAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionListPoliciesGrantingServiceAccessQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPoliciesGrantingServiceAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPoliciesGrantingServiceAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPoliciesGrantingServiceAccess'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPoliciesGrantingServiceAccessMutationKey() {
  return [
    '#Action=ListPoliciesGrantingServiceAccess',
    '/#Action=ListPoliciesGrantingServiceAccess',
    'POST',
  ] as const
}

export function getPostActionListPoliciesGrantingServiceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPoliciesGrantingServiceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPoliciesGrantingServiceAccess'].$post(args, options))
    },
  })
}

export function usePostActionListPoliciesGrantingServiceAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPoliciesGrantingServiceAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPolicyTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListPolicyTags', '/#Action=ListPolicyTags', keyArgs] as const
}

export function getActionListPolicyTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPolicyTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPolicyTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPolicyTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListPolicyTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPolicyTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPolicyTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPolicyTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPolicyTagsMutationKey() {
  return ['#Action=ListPolicyTags', '/#Action=ListPolicyTags', 'POST'] as const
}

export function getPostActionListPolicyTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPolicyTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']>) {
      return parseResponse(client['#Action=ListPolicyTags'].$post(args, options))
    },
  })
}

export function usePostActionListPolicyTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPolicyTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPolicyVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListPolicyVersions', '/#Action=ListPolicyVersions', keyArgs] as const
}

export function getActionListPolicyVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPolicyVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPolicyVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPolicyVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListPolicyVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPolicyVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPolicyVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPolicyVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPolicyVersionsMutationKey() {
  return ['#Action=ListPolicyVersions', '/#Action=ListPolicyVersions', 'POST'] as const
}

export function getPostActionListPolicyVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPolicyVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPolicyVersions'].$post(args, options))
    },
  })
}

export function usePostActionListPolicyVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPolicyVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPolicyVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListRolePoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListRolePolicies', '/#Action=ListRolePolicies', keyArgs] as const
}

export function getActionListRolePoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListRolePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListRolePolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListRolePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListRolePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListRolePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListRolePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListRolePolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListRolePoliciesMutationKey() {
  return ['#Action=ListRolePolicies', '/#Action=ListRolePolicies', 'POST'] as const
}

export function getPostActionListRolePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListRolePoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']>) {
      return parseResponse(client['#Action=ListRolePolicies'].$post(args, options))
    },
  })
}

export function usePostActionListRolePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRolePolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListRolePoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListRoleTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListRoleTags', '/#Action=ListRoleTags', keyArgs] as const
}

export function getActionListRoleTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListRoleTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListRoleTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListRoleTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListRoleTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListRoleTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListRoleTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListRoleTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListRoleTagsMutationKey() {
  return ['#Action=ListRoleTags', '/#Action=ListRoleTags', 'POST'] as const
}

export function getPostActionListRoleTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListRoleTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']>) {
      return parseResponse(client['#Action=ListRoleTags'].$post(args, options))
    },
  })
}

export function usePostActionListRoleTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoleTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListRoleTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListRoles', '/#Action=ListRoles', keyArgs] as const
}

export function getActionListRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListRoles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListRoles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListRolesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListRoles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListRolesMutationKey() {
  return ['#Action=ListRoles', '/#Action=ListRoles', 'POST'] as const
}

export function getPostActionListRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListRoles']['$post']>) {
      return parseResponse(client['#Action=ListRoles'].$post(args, options))
    },
  })
}

export function usePostActionListRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListRoles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListRoles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListRolesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSAMLProviderTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListSAMLProviderTags', '/#Action=ListSAMLProviderTags', keyArgs] as const
}

export function getActionListSAMLProviderTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListSAMLProviderTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListSAMLProviderTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListSAMLProviderTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListSAMLProviderTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSAMLProviderTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListSAMLProviderTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListSAMLProviderTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListSAMLProviderTagsMutationKey() {
  return ['#Action=ListSAMLProviderTags', '/#Action=ListSAMLProviderTags', 'POST'] as const
}

export function getPostActionListSAMLProviderTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSAMLProviderTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSAMLProviderTags'].$post(args, options))
    },
  })
}

export function usePostActionListSAMLProviderTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSAMLProviderTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSAMLProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListSAMLProviders', '/#Action=ListSAMLProviders', keyArgs] as const
}

export function getActionListSAMLProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListSAMLProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListSAMLProviders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListSAMLProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListSAMLProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSAMLProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListSAMLProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListSAMLProviders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListSAMLProvidersMutationKey() {
  return ['#Action=ListSAMLProviders', '/#Action=ListSAMLProviders', 'POST'] as const
}

export function getPostActionListSAMLProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSAMLProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSAMLProviders'].$post(args, options))
    },
  })
}

export function usePostActionListSAMLProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSAMLProviders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSAMLProvidersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSSHPublicKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListSSHPublicKeys', '/#Action=ListSSHPublicKeys', keyArgs] as const
}

export function getActionListSSHPublicKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListSSHPublicKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListSSHPublicKeys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListSSHPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListSSHPublicKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSSHPublicKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListSSHPublicKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListSSHPublicKeys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListSSHPublicKeysMutationKey() {
  return ['#Action=ListSSHPublicKeys', '/#Action=ListSSHPublicKeys', 'POST'] as const
}

export function getPostActionListSSHPublicKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSSHPublicKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSSHPublicKeys'].$post(args, options))
    },
  })
}

export function usePostActionListSSHPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSSHPublicKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListServerCertificateTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListServerCertificateTags',
    '/#Action=ListServerCertificateTags',
    keyArgs,
  ] as const
}

export function getActionListServerCertificateTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListServerCertificateTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListServerCertificateTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListServerCertificateTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListServerCertificateTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListServerCertificateTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListServerCertificateTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListServerCertificateTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListServerCertificateTagsMutationKey() {
  return [
    '#Action=ListServerCertificateTags',
    '/#Action=ListServerCertificateTags',
    'POST',
  ] as const
}

export function getPostActionListServerCertificateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListServerCertificateTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']>,
    ) {
      return parseResponse(client['#Action=ListServerCertificateTags'].$post(args, options))
    },
  })
}

export function usePostActionListServerCertificateTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificateTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListServerCertificateTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListServerCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListServerCertificates', '/#Action=ListServerCertificates', keyArgs] as const
}

export function getActionListServerCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListServerCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListServerCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListServerCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListServerCertificatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListServerCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListServerCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListServerCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListServerCertificatesMutationKey() {
  return ['#Action=ListServerCertificates', '/#Action=ListServerCertificates', 'POST'] as const
}

export function getPostActionListServerCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListServerCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=ListServerCertificates'].$post(args, options))
    },
  })
}

export function usePostActionListServerCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListServerCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListServerCertificatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListServiceSpecificCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListServiceSpecificCredentials',
    '/#Action=ListServiceSpecificCredentials',
    keyArgs,
  ] as const
}

export function getActionListServiceSpecificCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListServiceSpecificCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListServiceSpecificCredentials'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListServiceSpecificCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionListServiceSpecificCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListServiceSpecificCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListServiceSpecificCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListServiceSpecificCredentials'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListServiceSpecificCredentialsMutationKey() {
  return [
    '#Action=ListServiceSpecificCredentials',
    '/#Action=ListServiceSpecificCredentials',
    'POST',
  ] as const
}

export function getPostActionListServiceSpecificCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListServiceSpecificCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>,
    ) {
      return parseResponse(client['#Action=ListServiceSpecificCredentials'].$post(args, options))
    },
  })
}

export function usePostActionListServiceSpecificCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListServiceSpecificCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSigningCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListSigningCertificates', '/#Action=ListSigningCertificates', keyArgs] as const
}

export function getActionListSigningCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListSigningCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListSigningCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListSigningCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListSigningCertificatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSigningCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListSigningCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListSigningCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListSigningCertificatesMutationKey() {
  return ['#Action=ListSigningCertificates', '/#Action=ListSigningCertificates', 'POST'] as const
}

export function getPostActionListSigningCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSigningCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSigningCertificates'].$post(args, options))
    },
  })
}

export function usePostActionListSigningCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListSigningCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSigningCertificatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListUserPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListUserPolicies', '/#Action=ListUserPolicies', keyArgs] as const
}

export function getActionListUserPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListUserPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListUserPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListUserPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListUserPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListUserPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListUserPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListUserPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListUserPoliciesMutationKey() {
  return ['#Action=ListUserPolicies', '/#Action=ListUserPolicies', 'POST'] as const
}

export function getPostActionListUserPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListUserPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']>) {
      return parseResponse(client['#Action=ListUserPolicies'].$post(args, options))
    },
  })
}

export function usePostActionListUserPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListUserPoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListUserTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListUserTags', '/#Action=ListUserTags', keyArgs] as const
}

export function getActionListUserTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListUserTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListUserTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListUserTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListUserTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListUserTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListUserTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListUserTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListUserTagsMutationKey() {
  return ['#Action=ListUserTags', '/#Action=ListUserTags', 'POST'] as const
}

export function getPostActionListUserTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListUserTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListUserTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListUserTags']['$post']>) {
      return parseResponse(client['#Action=ListUserTags'].$post(args, options))
    },
  })
}

export function usePostActionListUserTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUserTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListUserTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListUserTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUsers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListUsers', '/#Action=ListUsers', keyArgs] as const
}

export function getActionListUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUsers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListUsers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListUsers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListUsers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListUsersMutationKey() {
  return ['#Action=ListUsers', '/#Action=ListUsers', 'POST'] as const
}

export function getPostActionListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListUsers']['$post']>) {
      return parseResponse(client['#Action=ListUsers'].$post(args, options))
    },
  })
}

export function usePostActionListUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListUsers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListUsers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListUsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListVirtualMFADevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListVirtualMFADevices', '/#Action=ListVirtualMFADevices', keyArgs] as const
}

export function getActionListVirtualMFADevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListVirtualMFADevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListVirtualMFADevices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListVirtualMFADevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListVirtualMFADevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListVirtualMFADevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListVirtualMFADevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListVirtualMFADevices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListVirtualMFADevicesMutationKey() {
  return ['#Action=ListVirtualMFADevices', '/#Action=ListVirtualMFADevices', 'POST'] as const
}

export function getPostActionListVirtualMFADevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListVirtualMFADevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>,
    ) {
      return parseResponse(client['#Action=ListVirtualMFADevices'].$post(args, options))
    },
  })
}

export function usePostActionListVirtualMFADevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListVirtualMFADevicesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutGroupPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutGroupPolicy', '/#Action=PutGroupPolicy', keyArgs] as const
}

export function getActionPutGroupPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutGroupPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutGroupPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutGroupPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutGroupPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutGroupPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutGroupPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutGroupPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutGroupPolicyMutationKey() {
  return ['#Action=PutGroupPolicy', '/#Action=PutGroupPolicy', 'POST'] as const
}

export function getPostActionPutGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutGroupPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']>) {
      return parseResponse(client['#Action=PutGroupPolicy'].$post(args, options))
    },
  })
}

export function usePostActionPutGroupPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutGroupPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutGroupPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutRolePermissionsBoundaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PutRolePermissionsBoundary',
    '/#Action=PutRolePermissionsBoundary',
    keyArgs,
  ] as const
}

export function getActionPutRolePermissionsBoundaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutRolePermissionsBoundaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutRolePermissionsBoundary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutRolePermissionsBoundary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutRolePermissionsBoundaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutRolePermissionsBoundaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutRolePermissionsBoundaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutRolePermissionsBoundary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutRolePermissionsBoundaryMutationKey() {
  return [
    '#Action=PutRolePermissionsBoundary',
    '/#Action=PutRolePermissionsBoundary',
    'POST',
  ] as const
}

export function getPostActionPutRolePermissionsBoundaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutRolePermissionsBoundaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>,
    ) {
      return parseResponse(client['#Action=PutRolePermissionsBoundary'].$post(args, options))
    },
  })
}

export function usePostActionPutRolePermissionsBoundary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutRolePermissionsBoundaryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutRolePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutRolePolicy', '/#Action=PutRolePolicy', keyArgs] as const
}

export function getActionPutRolePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutRolePolicyMutationKey() {
  return ['#Action=PutRolePolicy', '/#Action=PutRolePolicy', 'POST'] as const
}

export function getPostActionPutRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutRolePolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']>) {
      return parseResponse(client['#Action=PutRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionPutRolePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutRolePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutUserPermissionsBoundaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PutUserPermissionsBoundary',
    '/#Action=PutUserPermissionsBoundary',
    keyArgs,
  ] as const
}

export function getActionPutUserPermissionsBoundaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutUserPermissionsBoundaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutUserPermissionsBoundary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutUserPermissionsBoundary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutUserPermissionsBoundaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutUserPermissionsBoundaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutUserPermissionsBoundaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutUserPermissionsBoundary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutUserPermissionsBoundaryMutationKey() {
  return [
    '#Action=PutUserPermissionsBoundary',
    '/#Action=PutUserPermissionsBoundary',
    'POST',
  ] as const
}

export function getPostActionPutUserPermissionsBoundaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutUserPermissionsBoundaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>,
    ) {
      return parseResponse(client['#Action=PutUserPermissionsBoundary'].$post(args, options))
    },
  })
}

export function usePostActionPutUserPermissionsBoundary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutUserPermissionsBoundaryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutUserPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutUserPolicy', '/#Action=PutUserPolicy', keyArgs] as const
}

export function getActionPutUserPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutUserPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutUserPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutUserPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutUserPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutUserPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutUserPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutUserPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutUserPolicyMutationKey() {
  return ['#Action=PutUserPolicy', '/#Action=PutUserPolicy', 'POST'] as const
}

export function getPostActionPutUserPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutUserPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']>) {
      return parseResponse(client['#Action=PutUserPolicy'].$post(args, options))
    },
  })
}

export function usePostActionPutUserPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutUserPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutUserPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRemoveClientIDFromOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RemoveClientIDFromOpenIDConnectProvider',
    '/#Action=RemoveClientIDFromOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function getActionRemoveClientIDFromOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveClientIDFromOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveClientIDFromOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionRemoveClientIDFromOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveClientIDFromOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveClientIDFromOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveClientIDFromOpenIDConnectProviderMutationKey() {
  return [
    '#Action=RemoveClientIDFromOpenIDConnectProvider',
    '/#Action=RemoveClientIDFromOpenIDConnectProvider',
    'POST',
  ] as const
}

export function getPostActionRemoveClientIDFromOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveClientIDFromOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$post(args, options),
      )
    },
  })
}

export function usePostActionRemoveClientIDFromOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRemoveClientIDFromOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRemoveRoleFromInstanceProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RemoveRoleFromInstanceProfile',
    '/#Action=RemoveRoleFromInstanceProfile',
    keyArgs,
  ] as const
}

export function getActionRemoveRoleFromInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveRoleFromInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveRoleFromInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveRoleFromInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRemoveRoleFromInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveRoleFromInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveRoleFromInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveRoleFromInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveRoleFromInstanceProfileMutationKey() {
  return [
    '#Action=RemoveRoleFromInstanceProfile',
    '/#Action=RemoveRoleFromInstanceProfile',
    'POST',
  ] as const
}

export function getPostActionRemoveRoleFromInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveRoleFromInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionRemoveRoleFromInstanceProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRemoveRoleFromInstanceProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRemoveUserFromGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveUserFromGroup', '/#Action=RemoveUserFromGroup', keyArgs] as const
}

export function getActionRemoveUserFromGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveUserFromGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveUserFromGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveUserFromGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveUserFromGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveUserFromGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveUserFromGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveUserFromGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveUserFromGroupMutationKey() {
  return ['#Action=RemoveUserFromGroup', '/#Action=RemoveUserFromGroup', 'POST'] as const
}

export function getPostActionRemoveUserFromGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveUserFromGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveUserFromGroup'].$post(args, options))
    },
  })
}

export function usePostActionRemoveUserFromGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRemoveUserFromGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionResetServiceSpecificCredentialQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ResetServiceSpecificCredential',
    '/#Action=ResetServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function getActionResetServiceSpecificCredentialQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResetServiceSpecificCredentialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResetServiceSpecificCredential'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResetServiceSpecificCredential<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionResetServiceSpecificCredentialQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResetServiceSpecificCredentialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResetServiceSpecificCredentialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResetServiceSpecificCredential'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResetServiceSpecificCredentialMutationKey() {
  return [
    '#Action=ResetServiceSpecificCredential',
    '/#Action=ResetServiceSpecificCredential',
    'POST',
  ] as const
}

export function getPostActionResetServiceSpecificCredentialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResetServiceSpecificCredentialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>,
    ) {
      return parseResponse(client['#Action=ResetServiceSpecificCredential'].$post(args, options))
    },
  })
}

export function usePostActionResetServiceSpecificCredential<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionResetServiceSpecificCredentialMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionResyncMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResyncMFADevice', '/#Action=ResyncMFADevice', keyArgs] as const
}

export function getActionResyncMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResyncMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResyncMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResyncMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResyncMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResyncMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResyncMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResyncMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResyncMFADeviceMutationKey() {
  return ['#Action=ResyncMFADevice', '/#Action=ResyncMFADevice', 'POST'] as const
}

export function getPostActionResyncMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResyncMFADeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']>) {
      return parseResponse(client['#Action=ResyncMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionResyncMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResyncMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionResyncMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetDefaultPolicyVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetDefaultPolicyVersion', '/#Action=SetDefaultPolicyVersion', keyArgs] as const
}

export function getActionSetDefaultPolicyVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetDefaultPolicyVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetDefaultPolicyVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetDefaultPolicyVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetDefaultPolicyVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetDefaultPolicyVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetDefaultPolicyVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetDefaultPolicyVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetDefaultPolicyVersionMutationKey() {
  return ['#Action=SetDefaultPolicyVersion', '/#Action=SetDefaultPolicyVersion', 'POST'] as const
}

export function getPostActionSetDefaultPolicyVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetDefaultPolicyVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=SetDefaultPolicyVersion'].$post(args, options))
    },
  })
}

export function usePostActionSetDefaultPolicyVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetDefaultPolicyVersionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetSecurityTokenServicePreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetSecurityTokenServicePreferences',
    '/#Action=SetSecurityTokenServicePreferences',
    keyArgs,
  ] as const
}

export function getActionSetSecurityTokenServicePreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetSecurityTokenServicePreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetSecurityTokenServicePreferences'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetSecurityTokenServicePreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionSetSecurityTokenServicePreferencesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetSecurityTokenServicePreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetSecurityTokenServicePreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetSecurityTokenServicePreferences'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetSecurityTokenServicePreferencesMutationKey() {
  return [
    '#Action=SetSecurityTokenServicePreferences',
    '/#Action=SetSecurityTokenServicePreferences',
    'POST',
  ] as const
}

export function getPostActionSetSecurityTokenServicePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetSecurityTokenServicePreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=SetSecurityTokenServicePreferences'].$post(args, options),
      )
    },
  })
}

export function usePostActionSetSecurityTokenServicePreferences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetSecurityTokenServicePreferencesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSimulateCustomPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SimulateCustomPolicy', '/#Action=SimulateCustomPolicy', keyArgs] as const
}

export function getActionSimulateCustomPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSimulateCustomPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SimulateCustomPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSimulateCustomPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSimulateCustomPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSimulateCustomPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSimulateCustomPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SimulateCustomPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSimulateCustomPolicyMutationKey() {
  return ['#Action=SimulateCustomPolicy', '/#Action=SimulateCustomPolicy', 'POST'] as const
}

export function getPostActionSimulateCustomPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSimulateCustomPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=SimulateCustomPolicy'].$post(args, options))
    },
  })
}

export function usePostActionSimulateCustomPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSimulateCustomPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSimulatePrincipalPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SimulatePrincipalPolicy', '/#Action=SimulatePrincipalPolicy', keyArgs] as const
}

export function getActionSimulatePrincipalPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSimulatePrincipalPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SimulatePrincipalPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSimulatePrincipalPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSimulatePrincipalPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSimulatePrincipalPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSimulatePrincipalPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SimulatePrincipalPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSimulatePrincipalPolicyMutationKey() {
  return ['#Action=SimulatePrincipalPolicy', '/#Action=SimulatePrincipalPolicy', 'POST'] as const
}

export function getPostActionSimulatePrincipalPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSimulatePrincipalPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=SimulatePrincipalPolicy'].$post(args, options))
    },
  })
}

export function usePostActionSimulatePrincipalPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSimulatePrincipalPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagInstanceProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagInstanceProfile', '/#Action=TagInstanceProfile', keyArgs] as const
}

export function getActionTagInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagInstanceProfileMutationKey() {
  return ['#Action=TagInstanceProfile', '/#Action=TagInstanceProfile', 'POST'] as const
}

export function getPostActionTagInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=TagInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionTagInstanceProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagInstanceProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagMFADevice', '/#Action=TagMFADevice', keyArgs] as const
}

export function getActionTagMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagMFADeviceMutationKey() {
  return ['#Action=TagMFADevice', '/#Action=TagMFADevice', 'POST'] as const
}

export function getPostActionTagMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagMFADeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']>) {
      return parseResponse(client['#Action=TagMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionTagMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagOpenIDConnectProvider', '/#Action=TagOpenIDConnectProvider', keyArgs] as const
}

export function getActionTagOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagOpenIDConnectProviderMutationKey() {
  return ['#Action=TagOpenIDConnectProvider', '/#Action=TagOpenIDConnectProvider', 'POST'] as const
}

export function getPostActionTagOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=TagOpenIDConnectProvider'].$post(args, options))
    },
  })
}

export function usePostActionTagOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagPolicy', '/#Action=TagPolicy', keyArgs] as const
}

export function getActionTagPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagPolicyMutationKey() {
  return ['#Action=TagPolicy', '/#Action=TagPolicy', 'POST'] as const
}

export function getPostActionTagPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagPolicy']['$post']>) {
      return parseResponse(client['#Action=TagPolicy'].$post(args, options))
    },
  })
}

export function usePostActionTagPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagRole', '/#Action=TagRole', keyArgs] as const
}

export function getActionTagRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
            >
          >,
          ReturnType<typeof getActionTagRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagRoleMutationKey() {
  return ['#Action=TagRole', '/#Action=TagRole', 'POST'] as const
}

export function getPostActionTagRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagRole']['$post']>) {
      return parseResponse(client['#Action=TagRole'].$post(args, options))
    },
  })
}

export function usePostActionTagRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagRole']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagSAMLProvider', '/#Action=TagSAMLProvider', keyArgs] as const
}

export function getActionTagSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagSAMLProviderMutationKey() {
  return ['#Action=TagSAMLProvider', '/#Action=TagSAMLProvider', 'POST'] as const
}

export function getPostActionTagSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagSAMLProviderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']>) {
      return parseResponse(client['#Action=TagSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionTagSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagServerCertificateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagServerCertificate', '/#Action=TagServerCertificate', keyArgs] as const
}

export function getActionTagServerCertificateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTagServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagServerCertificateMutationKey() {
  return ['#Action=TagServerCertificate', '/#Action=TagServerCertificate', 'POST'] as const
}

export function getPostActionTagServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=TagServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionTagServerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TagServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TagUser', '/#Action=TagUser', keyArgs] as const
}

export function getActionTagUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTagUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TagUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTagUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TagUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
            >
          >,
          ReturnType<typeof getActionTagUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTagUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TagUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTagUserMutationKey() {
  return ['#Action=TagUser', '/#Action=TagUser', 'POST'] as const
}

export function getPostActionTagUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagUser']['$post']>) {
      return parseResponse(client['#Action=TagUser'].$post(args, options))
    },
  })
}

export function usePostActionTagUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagUser']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TagUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagInstanceProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagInstanceProfile', '/#Action=UntagInstanceProfile', keyArgs] as const
}

export function getActionUntagInstanceProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagInstanceProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagInstanceProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagInstanceProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagInstanceProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagInstanceProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagInstanceProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagInstanceProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagInstanceProfileMutationKey() {
  return ['#Action=UntagInstanceProfile', '/#Action=UntagInstanceProfile', 'POST'] as const
}

export function getPostActionUntagInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=UntagInstanceProfile'].$post(args, options))
    },
  })
}

export function usePostActionUntagInstanceProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagInstanceProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagInstanceProfileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagMFADeviceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagMFADevice', '/#Action=UntagMFADevice', keyArgs] as const
}

export function getActionUntagMFADeviceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagMFADeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagMFADevice'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagMFADevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagMFADeviceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagMFADeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagMFADeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagMFADevice'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagMFADeviceMutationKey() {
  return ['#Action=UntagMFADevice', '/#Action=UntagMFADevice', 'POST'] as const
}

export function getPostActionUntagMFADeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagMFADeviceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']>) {
      return parseResponse(client['#Action=UntagMFADevice'].$post(args, options))
    },
  })
}

export function usePostActionUntagMFADevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagMFADevice']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagMFADeviceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagOpenIDConnectProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UntagOpenIDConnectProvider',
    '/#Action=UntagOpenIDConnectProvider',
    keyArgs,
  ] as const
}

export function getActionUntagOpenIDConnectProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagOpenIDConnectProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagOpenIDConnectProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagOpenIDConnectProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagOpenIDConnectProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagOpenIDConnectProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagOpenIDConnectProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagOpenIDConnectProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagOpenIDConnectProviderMutationKey() {
  return [
    '#Action=UntagOpenIDConnectProvider',
    '/#Action=UntagOpenIDConnectProvider',
    'POST',
  ] as const
}

export function getPostActionUntagOpenIDConnectProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagOpenIDConnectProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=UntagOpenIDConnectProvider'].$post(args, options))
    },
  })
}

export function usePostActionUntagOpenIDConnectProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagOpenIDConnectProviderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagPolicy', '/#Action=UntagPolicy', keyArgs] as const
}

export function getActionUntagPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagPolicyMutationKey() {
  return ['#Action=UntagPolicy', '/#Action=UntagPolicy', 'POST'] as const
}

export function getPostActionUntagPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']>) {
      return parseResponse(client['#Action=UntagPolicy'].$post(args, options))
    },
  })
}

export function usePostActionUntagPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagRole', '/#Action=UntagRole', keyArgs] as const
}

export function getActionUntagRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagRoleMutationKey() {
  return ['#Action=UntagRole', '/#Action=UntagRole', 'POST'] as const
}

export function getPostActionUntagRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagRole']['$post']>) {
      return parseResponse(client['#Action=UntagRole'].$post(args, options))
    },
  })
}

export function usePostActionUntagRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagSAMLProvider', '/#Action=UntagSAMLProvider', keyArgs] as const
}

export function getActionUntagSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagSAMLProviderMutationKey() {
  return ['#Action=UntagSAMLProvider', '/#Action=UntagSAMLProvider', 'POST'] as const
}

export function getPostActionUntagSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagSAMLProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=UntagSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionUntagSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagServerCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagServerCertificate', '/#Action=UntagServerCertificate', keyArgs] as const
}

export function getActionUntagServerCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagServerCertificateMutationKey() {
  return ['#Action=UntagServerCertificate', '/#Action=UntagServerCertificate', 'POST'] as const
}

export function getPostActionUntagServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=UntagServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionUntagServerCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UntagUser', '/#Action=UntagUser', keyArgs] as const
}

export function getActionUntagUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUntagUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UntagUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUntagUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UntagUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUntagUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUntagUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UntagUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUntagUserMutationKey() {
  return ['#Action=UntagUser', '/#Action=UntagUser', 'POST'] as const
}

export function getPostActionUntagUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagUser']['$post']>) {
      return parseResponse(client['#Action=UntagUser'].$post(args, options))
    },
  })
}

export function usePostActionUntagUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UntagUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UntagUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateAccessKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateAccessKey', '/#Action=UpdateAccessKey', keyArgs] as const
}

export function getActionUpdateAccessKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAccessKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAccessKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAccessKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAccessKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAccessKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAccessKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAccessKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateAccessKeyMutationKey() {
  return ['#Action=UpdateAccessKey', '/#Action=UpdateAccessKey', 'POST'] as const
}

export function getPostActionUpdateAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAccessKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']>) {
      return parseResponse(client['#Action=UpdateAccessKey'].$post(args, options))
    },
  })
}

export function usePostActionUpdateAccessKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccessKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateAccessKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateAccountPasswordPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateAccountPasswordPolicy',
    '/#Action=UpdateAccountPasswordPolicy',
    keyArgs,
  ] as const
}

export function getActionUpdateAccountPasswordPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAccountPasswordPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAccountPasswordPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAccountPasswordPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAccountPasswordPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAccountPasswordPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAccountPasswordPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAccountPasswordPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateAccountPasswordPolicyMutationKey() {
  return [
    '#Action=UpdateAccountPasswordPolicy',
    '/#Action=UpdateAccountPasswordPolicy',
    'POST',
  ] as const
}

export function getPostActionUpdateAccountPasswordPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAccountPasswordPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$post(args, options))
    },
  })
}

export function usePostActionUpdateAccountPasswordPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateAccountPasswordPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateAssumeRolePolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateAssumeRolePolicy', '/#Action=UpdateAssumeRolePolicy', keyArgs] as const
}

export function getActionUpdateAssumeRolePolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAssumeRolePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAssumeRolePolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAssumeRolePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAssumeRolePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAssumeRolePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAssumeRolePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAssumeRolePolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateAssumeRolePolicyMutationKey() {
  return ['#Action=UpdateAssumeRolePolicy', '/#Action=UpdateAssumeRolePolicy', 'POST'] as const
}

export function getPostActionUpdateAssumeRolePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAssumeRolePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateAssumeRolePolicy'].$post(args, options))
    },
  })
}

export function usePostActionUpdateAssumeRolePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateAssumeRolePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateGroup', '/#Action=UpdateGroup', keyArgs] as const
}

export function getActionUpdateGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateGroupMutationKey() {
  return ['#Action=UpdateGroup', '/#Action=UpdateGroup', 'POST'] as const
}

export function getPostActionUpdateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']>) {
      return parseResponse(client['#Action=UpdateGroup'].$post(args, options))
    },
  })
}

export function usePostActionUpdateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateLoginProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateLoginProfile', '/#Action=UpdateLoginProfile', keyArgs] as const
}

export function getActionUpdateLoginProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateLoginProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateLoginProfile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateLoginProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateLoginProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateLoginProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateLoginProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateLoginProfile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateLoginProfileMutationKey() {
  return ['#Action=UpdateLoginProfile', '/#Action=UpdateLoginProfile', 'POST'] as const
}

export function getPostActionUpdateLoginProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateLoginProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateLoginProfile'].$post(args, options))
    },
  })
}

export function usePostActionUpdateLoginProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateLoginProfile']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateLoginProfileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateOpenIDConnectProviderThumbprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateOpenIDConnectProviderThumbprint',
    '/#Action=UpdateOpenIDConnectProviderThumbprint',
    keyArgs,
  ] as const
}

export function getActionUpdateOpenIDConnectProviderThumbprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateOpenIDConnectProviderThumbprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateOpenIDConnectProviderThumbprint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateOpenIDConnectProviderThumbprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateOpenIDConnectProviderThumbprintQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateOpenIDConnectProviderThumbprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateOpenIDConnectProviderThumbprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateOpenIDConnectProviderThumbprint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateOpenIDConnectProviderThumbprintMutationKey() {
  return [
    '#Action=UpdateOpenIDConnectProviderThumbprint',
    '/#Action=UpdateOpenIDConnectProviderThumbprint',
    'POST',
  ] as const
}

export function getPostActionUpdateOpenIDConnectProviderThumbprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateOpenIDConnectProviderThumbprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateOpenIDConnectProviderThumbprint'].$post(args, options),
      )
    },
  })
}

export function usePostActionUpdateOpenIDConnectProviderThumbprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateOpenIDConnectProviderThumbprintMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateRole', '/#Action=UpdateRole', keyArgs] as const
}

export function getActionUpdateRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateRoleMutationKey() {
  return ['#Action=UpdateRole', '/#Action=UpdateRole', 'POST'] as const
}

export function getPostActionUpdateRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateRole']['$post']>) {
      return parseResponse(client['#Action=UpdateRole'].$post(args, options))
    },
  })
}

export function usePostActionUpdateRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateRole']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateRoleDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateRoleDescription', '/#Action=UpdateRoleDescription', keyArgs] as const
}

export function getActionUpdateRoleDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateRoleDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateRoleDescription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateRoleDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateRoleDescriptionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateRoleDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateRoleDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateRoleDescription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateRoleDescriptionMutationKey() {
  return ['#Action=UpdateRoleDescription', '/#Action=UpdateRoleDescription', 'POST'] as const
}

export function getPostActionUpdateRoleDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateRoleDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateRoleDescription'].$post(args, options))
    },
  })
}

export function usePostActionUpdateRoleDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateRoleDescription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateRoleDescriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateSAMLProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateSAMLProvider', '/#Action=UpdateSAMLProvider', keyArgs] as const
}

export function getActionUpdateSAMLProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateSAMLProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateSAMLProvider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateSAMLProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateSAMLProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateSAMLProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateSAMLProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateSAMLProvider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateSAMLProviderMutationKey() {
  return ['#Action=UpdateSAMLProvider', '/#Action=UpdateSAMLProvider', 'POST'] as const
}

export function getPostActionUpdateSAMLProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateSAMLProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateSAMLProvider'].$post(args, options))
    },
  })
}

export function usePostActionUpdateSAMLProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateSAMLProviderMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateSSHPublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateSSHPublicKey', '/#Action=UpdateSSHPublicKey', keyArgs] as const
}

export function getActionUpdateSSHPublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateSSHPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateSSHPublicKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateSSHPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateSSHPublicKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateSSHPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateSSHPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateSSHPublicKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateSSHPublicKeyMutationKey() {
  return ['#Action=UpdateSSHPublicKey', '/#Action=UpdateSSHPublicKey', 'POST'] as const
}

export function getPostActionUpdateSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateSSHPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateSSHPublicKey'].$post(args, options))
    },
  })
}

export function usePostActionUpdateSSHPublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateSSHPublicKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateServerCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateServerCertificate', '/#Action=UpdateServerCertificate', keyArgs] as const
}

export function getActionUpdateServerCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateServerCertificateMutationKey() {
  return ['#Action=UpdateServerCertificate', '/#Action=UpdateServerCertificate', 'POST'] as const
}

export function getPostActionUpdateServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionUpdateServerCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateServiceSpecificCredentialQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateServiceSpecificCredential',
    '/#Action=UpdateServiceSpecificCredential',
    keyArgs,
  ] as const
}

export function getActionUpdateServiceSpecificCredentialQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateServiceSpecificCredentialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateServiceSpecificCredential'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateServiceSpecificCredential<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateServiceSpecificCredentialQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateServiceSpecificCredentialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateServiceSpecificCredentialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateServiceSpecificCredential'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateServiceSpecificCredentialMutationKey() {
  return [
    '#Action=UpdateServiceSpecificCredential',
    '/#Action=UpdateServiceSpecificCredential',
    'POST',
  ] as const
}

export function getPostActionUpdateServiceSpecificCredentialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateServiceSpecificCredentialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateServiceSpecificCredential'].$post(args, options))
    },
  })
}

export function usePostActionUpdateServiceSpecificCredential<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateServiceSpecificCredentialMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateSigningCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateSigningCertificate', '/#Action=UpdateSigningCertificate', keyArgs] as const
}

export function getActionUpdateSigningCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateSigningCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateSigningCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateSigningCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateSigningCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateSigningCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateSigningCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateSigningCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateSigningCertificateMutationKey() {
  return ['#Action=UpdateSigningCertificate', '/#Action=UpdateSigningCertificate', 'POST'] as const
}

export function getPostActionUpdateSigningCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateSigningCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateSigningCertificate'].$post(args, options))
    },
  })
}

export function usePostActionUpdateSigningCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateSigningCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUpdateUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateUser', '/#Action=UpdateUser', keyArgs] as const
}

export function getActionUpdateUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateUserMutationKey() {
  return ['#Action=UpdateUser', '/#Action=UpdateUser', 'POST'] as const
}

export function getPostActionUpdateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateUser']['$post']>) {
      return parseResponse(client['#Action=UpdateUser'].$post(args, options))
    },
  })
}

export function usePostActionUpdateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateUser']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUploadSSHPublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UploadSSHPublicKey', '/#Action=UploadSSHPublicKey', keyArgs] as const
}

export function getActionUploadSSHPublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUploadSSHPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UploadSSHPublicKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUploadSSHPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUploadSSHPublicKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUploadSSHPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUploadSSHPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UploadSSHPublicKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUploadSSHPublicKeyMutationKey() {
  return ['#Action=UploadSSHPublicKey', '/#Action=UploadSSHPublicKey', 'POST'] as const
}

export function getPostActionUploadSSHPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUploadSSHPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>,
    ) {
      return parseResponse(client['#Action=UploadSSHPublicKey'].$post(args, options))
    },
  })
}

export function usePostActionUploadSSHPublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUploadSSHPublicKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUploadServerCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UploadServerCertificate', '/#Action=UploadServerCertificate', keyArgs] as const
}

export function getActionUploadServerCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUploadServerCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UploadServerCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUploadServerCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUploadServerCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUploadServerCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUploadServerCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UploadServerCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUploadServerCertificateMutationKey() {
  return ['#Action=UploadServerCertificate', '/#Action=UploadServerCertificate', 'POST'] as const
}

export function getPostActionUploadServerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUploadServerCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=UploadServerCertificate'].$post(args, options))
    },
  })
}

export function usePostActionUploadServerCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadServerCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUploadServerCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUploadSigningCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UploadSigningCertificate', '/#Action=UploadSigningCertificate', keyArgs] as const
}

export function getActionUploadSigningCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUploadSigningCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UploadSigningCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUploadSigningCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUploadSigningCertificateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUploadSigningCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUploadSigningCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UploadSigningCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUploadSigningCertificateMutationKey() {
  return ['#Action=UploadSigningCertificate', '/#Action=UploadSigningCertificate', 'POST'] as const
}

export function getPostActionUploadSigningCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUploadSigningCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']>,
    ) {
      return parseResponse(client['#Action=UploadSigningCertificate'].$post(args, options))
    },
  })
}

export function usePostActionUploadSigningCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UploadSigningCertificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUploadSigningCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

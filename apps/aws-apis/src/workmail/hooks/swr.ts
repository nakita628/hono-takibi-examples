import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetWorkMailServiceAssociateDelegateToResourceKey() {
  return ['#X-Amz-Target=WorkMailService.AssociateDelegateToResource'] as const
}

export function getXAmzTargetWorkMailServiceAssociateMemberToGroupKey() {
  return ['#X-Amz-Target=WorkMailService.AssociateMemberToGroup'] as const
}

export function getXAmzTargetWorkMailServiceAssumeImpersonationRoleKey() {
  return ['#X-Amz-Target=WorkMailService.AssumeImpersonationRole'] as const
}

export function getXAmzTargetWorkMailServiceCancelMailboxExportJobKey() {
  return ['#X-Amz-Target=WorkMailService.CancelMailboxExportJob'] as const
}

export function getXAmzTargetWorkMailServiceCreateAliasKey() {
  return ['#X-Amz-Target=WorkMailService.CreateAlias'] as const
}

export function getXAmzTargetWorkMailServiceCreateAvailabilityConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceCreateGroupKey() {
  return ['#X-Amz-Target=WorkMailService.CreateGroup'] as const
}

export function getXAmzTargetWorkMailServiceCreateImpersonationRoleKey() {
  return ['#X-Amz-Target=WorkMailService.CreateImpersonationRole'] as const
}

export function getXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleKey() {
  return ['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule'] as const
}

export function getXAmzTargetWorkMailServiceCreateOrganizationKey() {
  return ['#X-Amz-Target=WorkMailService.CreateOrganization'] as const
}

export function getXAmzTargetWorkMailServiceCreateResourceKey() {
  return ['#X-Amz-Target=WorkMailService.CreateResource'] as const
}

export function getXAmzTargetWorkMailServiceCreateUserKey() {
  return ['#X-Amz-Target=WorkMailService.CreateUser'] as const
}

export function getXAmzTargetWorkMailServiceDeleteAccessControlRuleKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteAccessControlRule'] as const
}

export function getXAmzTargetWorkMailServiceDeleteAliasKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteAlias'] as const
}

export function getXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceDeleteGroupKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteGroup'] as const
}

export function getXAmzTargetWorkMailServiceDeleteImpersonationRoleKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteImpersonationRole'] as const
}

export function getXAmzTargetWorkMailServiceDeleteMailboxPermissionsKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions'] as const
}

export function getXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride'] as const
}

export function getXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule'] as const
}

export function getXAmzTargetWorkMailServiceDeleteOrganizationKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteOrganization'] as const
}

export function getXAmzTargetWorkMailServiceDeleteResourceKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteResource'] as const
}

export function getXAmzTargetWorkMailServiceDeleteRetentionPolicyKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy'] as const
}

export function getXAmzTargetWorkMailServiceDeleteUserKey() {
  return ['#X-Amz-Target=WorkMailService.DeleteUser'] as const
}

export function getXAmzTargetWorkMailServiceDeregisterFromWorkMailKey() {
  return ['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail'] as const
}

export function getXAmzTargetWorkMailServiceDeregisterMailDomainKey() {
  return ['#X-Amz-Target=WorkMailService.DeregisterMailDomain'] as const
}

export function getXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceDescribeGroupKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeGroup'] as const
}

export function getXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings'] as const
}

export function getXAmzTargetWorkMailServiceDescribeMailboxExportJobKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob'] as const
}

export function getXAmzTargetWorkMailServiceDescribeOrganizationKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeOrganization'] as const
}

export function getXAmzTargetWorkMailServiceDescribeResourceKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeResource'] as const
}

export function getXAmzTargetWorkMailServiceDescribeUserKey() {
  return ['#X-Amz-Target=WorkMailService.DescribeUser'] as const
}

export function getXAmzTargetWorkMailServiceDisassociateDelegateFromResourceKey() {
  return ['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource'] as const
}

export function getXAmzTargetWorkMailServiceDisassociateMemberFromGroupKey() {
  return ['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup'] as const
}

export function getXAmzTargetWorkMailServiceGetAccessControlEffectKey() {
  return ['#X-Amz-Target=WorkMailService.GetAccessControlEffect'] as const
}

export function getXAmzTargetWorkMailServiceGetDefaultRetentionPolicyKey() {
  return ['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy'] as const
}

export function getXAmzTargetWorkMailServiceGetImpersonationRoleKey() {
  return ['#X-Amz-Target=WorkMailService.GetImpersonationRole'] as const
}

export function getXAmzTargetWorkMailServiceGetImpersonationRoleEffectKey() {
  return ['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect'] as const
}

export function getXAmzTargetWorkMailServiceGetMailDomainKey() {
  return ['#X-Amz-Target=WorkMailService.GetMailDomain'] as const
}

export function getXAmzTargetWorkMailServiceGetMailboxDetailsKey() {
  return ['#X-Amz-Target=WorkMailService.GetMailboxDetails'] as const
}

export function getXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectKey() {
  return ['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect'] as const
}

export function getXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideKey() {
  return ['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride'] as const
}

export function getXAmzTargetWorkMailServiceListAccessControlRulesKey() {
  return ['#X-Amz-Target=WorkMailService.ListAccessControlRules'] as const
}

export function getXAmzTargetWorkMailServiceListAliasesKey() {
  return ['#X-Amz-Target=WorkMailService.ListAliases'] as const
}

export function getXAmzTargetWorkMailServiceListAvailabilityConfigurationsKey() {
  return ['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations'] as const
}

export function getXAmzTargetWorkMailServiceListGroupMembersKey() {
  return ['#X-Amz-Target=WorkMailService.ListGroupMembers'] as const
}

export function getXAmzTargetWorkMailServiceListGroupsKey() {
  return ['#X-Amz-Target=WorkMailService.ListGroups'] as const
}

export function getXAmzTargetWorkMailServiceListImpersonationRolesKey() {
  return ['#X-Amz-Target=WorkMailService.ListImpersonationRoles'] as const
}

export function getXAmzTargetWorkMailServiceListMailDomainsKey() {
  return ['#X-Amz-Target=WorkMailService.ListMailDomains'] as const
}

export function getXAmzTargetWorkMailServiceListMailboxExportJobsKey() {
  return ['#X-Amz-Target=WorkMailService.ListMailboxExportJobs'] as const
}

export function getXAmzTargetWorkMailServiceListMailboxPermissionsKey() {
  return ['#X-Amz-Target=WorkMailService.ListMailboxPermissions'] as const
}

export function getXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesKey() {
  return ['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides'] as const
}

export function getXAmzTargetWorkMailServiceListMobileDeviceAccessRulesKey() {
  return ['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules'] as const
}

export function getXAmzTargetWorkMailServiceListOrganizationsKey() {
  return ['#X-Amz-Target=WorkMailService.ListOrganizations'] as const
}

export function getXAmzTargetWorkMailServiceListResourceDelegatesKey() {
  return ['#X-Amz-Target=WorkMailService.ListResourceDelegates'] as const
}

export function getXAmzTargetWorkMailServiceListResourcesKey() {
  return ['#X-Amz-Target=WorkMailService.ListResources'] as const
}

export function getXAmzTargetWorkMailServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=WorkMailService.ListTagsForResource'] as const
}

export function getXAmzTargetWorkMailServiceListUsersKey() {
  return ['#X-Amz-Target=WorkMailService.ListUsers'] as const
}

export function getXAmzTargetWorkMailServicePutAccessControlRuleKey() {
  return ['#X-Amz-Target=WorkMailService.PutAccessControlRule'] as const
}

export function getXAmzTargetWorkMailServicePutEmailMonitoringConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration'] as const
}

export function getXAmzTargetWorkMailServicePutInboundDmarcSettingsKey() {
  return ['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings'] as const
}

export function getXAmzTargetWorkMailServicePutMailboxPermissionsKey() {
  return ['#X-Amz-Target=WorkMailService.PutMailboxPermissions'] as const
}

export function getXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideKey() {
  return ['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride'] as const
}

export function getXAmzTargetWorkMailServicePutRetentionPolicyKey() {
  return ['#X-Amz-Target=WorkMailService.PutRetentionPolicy'] as const
}

export function getXAmzTargetWorkMailServiceRegisterMailDomainKey() {
  return ['#X-Amz-Target=WorkMailService.RegisterMailDomain'] as const
}

export function getXAmzTargetWorkMailServiceRegisterToWorkMailKey() {
  return ['#X-Amz-Target=WorkMailService.RegisterToWorkMail'] as const
}

export function getXAmzTargetWorkMailServiceResetPasswordKey() {
  return ['#X-Amz-Target=WorkMailService.ResetPassword'] as const
}

export function getXAmzTargetWorkMailServiceStartMailboxExportJobKey() {
  return ['#X-Amz-Target=WorkMailService.StartMailboxExportJob'] as const
}

export function getXAmzTargetWorkMailServiceTagResourceKey() {
  return ['#X-Amz-Target=WorkMailService.TagResource'] as const
}

export function getXAmzTargetWorkMailServiceTestAvailabilityConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceUntagResourceKey() {
  return ['#X-Amz-Target=WorkMailService.UntagResource'] as const
}

export function getXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration'] as const
}

export function getXAmzTargetWorkMailServiceUpdateDefaultMailDomainKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain'] as const
}

export function getXAmzTargetWorkMailServiceUpdateImpersonationRoleKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateImpersonationRole'] as const
}

export function getXAmzTargetWorkMailServiceUpdateMailboxQuotaKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateMailboxQuota'] as const
}

export function getXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule'] as const
}

export function getXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressKey() {
  return ['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress'] as const
}

export function getXAmzTargetWorkMailServiceUpdateResourceKey() {
  return ['#X-Amz-Target=WorkMailService.UpdateResource'] as const
}

export function getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssociateDelegateToResource',
    '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceAssociateDelegateToResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.AssociateDelegateToResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceAssociateMemberToGroupKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssociateMemberToGroup',
    '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceAssociateMemberToGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceAssociateMemberToGroupKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.AssociateMemberToGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssumeImpersonationRole',
    '/#X-Amz-Target=WorkMailService.AssumeImpersonationRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceAssumeImpersonationRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.AssumeImpersonationRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCancelMailboxExportJobKey() {
  return [
    '#X-Amz-Target=WorkMailService.CancelMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.CancelMailboxExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCancelMailboxExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCancelMailboxExportJobKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CancelMailboxExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateAliasKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateAlias',
    '/#X-Amz-Target=WorkMailService.CreateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateAliasKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateAlias'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateAvailabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateGroupKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateGroup',
    '/#X-Amz-Target=WorkMailService.CreateGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateGroupKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateImpersonationRoleKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateImpersonationRole',
    '/#X-Amz-Target=WorkMailService.CreateImpersonationRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateImpersonationRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateImpersonationRoleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateImpersonationRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateOrganizationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateOrganization',
    '/#X-Amz-Target=WorkMailService.CreateOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateOrganizationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateOrganization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateResource',
    '/#X-Amz-Target=WorkMailService.CreateResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.CreateResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceCreateUserKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateUser',
    '/#X-Amz-Target=WorkMailService.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceCreateUserKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=WorkMailService.CreateUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAccessControlRule',
    '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteAccessControlRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteAccessControlRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteAliasKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAlias',
    '/#X-Amz-Target=WorkMailService.DeleteAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteAliasKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteAlias'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteAvailabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteGroupKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteGroup',
    '/#X-Amz-Target=WorkMailService.DeleteGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteGroupKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteImpersonationRole',
    '/#X-Amz-Target=WorkMailService.DeleteImpersonationRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteImpersonationRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteImpersonationRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteMailboxPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverride<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteOrganizationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteOrganization',
    '/#X-Amz-Target=WorkMailService.DeleteOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteOrganizationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteOrganization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteResource',
    '/#X-Amz-Target=WorkMailService.DeleteResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteRetentionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeleteUserKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteUser',
    '/#X-Amz-Target=WorkMailService.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeleteUserKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=WorkMailService.DeleteUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeregisterFromWorkMail',
    '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeregisterFromWorkMail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDeregisterMailDomainKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeregisterMailDomain',
    '/#X-Amz-Target=WorkMailService.DeregisterMailDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDeregisterMailDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDeregisterMailDomainKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DeregisterMailDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeGroupKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeGroup',
    '/#X-Amz-Target=WorkMailService.DescribeGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeGroupKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings',
    '/#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeInboundDmarcSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.DescribeMailboxExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeMailboxExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeOrganizationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeOrganization',
    '/#X-Amz-Target=WorkMailService.DescribeOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeOrganizationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeOrganization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeResource',
    '/#X-Amz-Target=WorkMailService.DescribeResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDescribeUserKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeUser',
    '/#X-Amz-Target=WorkMailService.DescribeUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDescribeUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDescribeUserKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DescribeUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource',
    '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDisassociateDelegateFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupKey() {
  return [
    '#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup',
    '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceDisassociateMemberFromGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetAccessControlEffectKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetAccessControlEffect',
    '/#X-Amz-Target=WorkMailService.GetAccessControlEffect',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetAccessControlEffect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetAccessControlEffectKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetAccessControlEffect'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetDefaultRetentionPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetImpersonationRole',
    '/#X-Amz-Target=WorkMailService.GetImpersonationRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetImpersonationRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetImpersonationRoleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetImpersonationRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect',
    '/#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetImpersonationRoleEffect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetMailDomainKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMailDomain',
    '/#X-Amz-Target=WorkMailService.GetMailDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetMailDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetMailDomainKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetMailDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetMailboxDetailsKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMailboxDetails',
    '/#X-Amz-Target=WorkMailService.GetMailboxDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetMailboxDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetMailboxDetailsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetMailboxDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect',
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverride<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListAccessControlRulesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAccessControlRules',
    '/#X-Amz-Target=WorkMailService.ListAccessControlRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListAccessControlRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListAccessControlRulesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListAccessControlRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListAliasesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAliases',
    '/#X-Amz-Target=WorkMailService.ListAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListAliasesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListAliases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations',
    '/#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListAvailabilityConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListGroupMembersKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListGroupMembers',
    '/#X-Amz-Target=WorkMailService.ListGroupMembers',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListGroupMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListGroupMembersKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListGroupMembers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListGroupsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListGroups',
    '/#X-Amz-Target=WorkMailService.ListGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListGroupsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=WorkMailService.ListGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListImpersonationRolesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListImpersonationRoles',
    '/#X-Amz-Target=WorkMailService.ListImpersonationRoles',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListImpersonationRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListImpersonationRolesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListImpersonationRoles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListMailDomainsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailDomains',
    '/#X-Amz-Target=WorkMailService.ListMailDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListMailDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListMailDomainsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListMailDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListMailboxExportJobsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailboxExportJobs',
    '/#X-Amz-Target=WorkMailService.ListMailboxExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListMailboxExportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListMailboxExportJobsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListMailboxExportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListMailboxPermissionsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.ListMailboxPermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListMailboxPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListMailboxPermissionsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListMailboxPermissions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides',
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListMobileDeviceAccessOverrides<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules',
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListMobileDeviceAccessRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListOrganizationsKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListOrganizations',
    '/#X-Amz-Target=WorkMailService.ListOrganizations',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListOrganizationsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListOrganizations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListResourceDelegatesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListResourceDelegates',
    '/#X-Amz-Target=WorkMailService.ListResourceDelegates',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListResourceDelegates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListResourceDelegatesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListResourceDelegates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListResourcesKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListResources',
    '/#X-Amz-Target=WorkMailService.ListResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListResourcesKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListResources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListTagsForResource',
    '/#X-Amz-Target=WorkMailService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceListUsersKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListUsers',
    '/#X-Amz-Target=WorkMailService.ListUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceListUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceListUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=WorkMailService.ListUsers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutAccessControlRuleKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutAccessControlRule',
    '/#X-Amz-Target=WorkMailService.PutAccessControlRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutAccessControlRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutAccessControlRuleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutAccessControlRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutEmailMonitoringConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutInboundDmarcSettings',
    '/#X-Amz-Target=WorkMailService.PutInboundDmarcSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutInboundDmarcSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutMailboxPermissionsKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.PutMailboxPermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutMailboxPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutMailboxPermissionsKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutMailboxPermissions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutMobileDeviceAccessOverride<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServicePutRetentionPolicyKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.PutRetentionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServicePutRetentionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServicePutRetentionPolicyKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.PutRetentionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceRegisterMailDomainKey() {
  return [
    '#X-Amz-Target=WorkMailService.RegisterMailDomain',
    '/#X-Amz-Target=WorkMailService.RegisterMailDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceRegisterMailDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceRegisterMailDomainKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.RegisterMailDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceRegisterToWorkMailKey() {
  return [
    '#X-Amz-Target=WorkMailService.RegisterToWorkMail',
    '/#X-Amz-Target=WorkMailService.RegisterToWorkMail',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceRegisterToWorkMail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceRegisterToWorkMailKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.RegisterToWorkMail'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceResetPasswordKey() {
  return [
    '#X-Amz-Target=WorkMailService.ResetPassword',
    '/#X-Amz-Target=WorkMailService.ResetPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceResetPasswordKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.ResetPassword'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceStartMailboxExportJobKey() {
  return [
    '#X-Amz-Target=WorkMailService.StartMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.StartMailboxExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceStartMailboxExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceStartMailboxExportJobKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.StartMailboxExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceTagResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.TagResource',
    '/#X-Amz-Target=WorkMailService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceTestAvailabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.UntagResource',
    '/#X-Amz-Target=WorkMailService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateAvailabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain',
    '/#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateDefaultMailDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateImpersonationRole',
    '/#X-Amz-Target=WorkMailService.UpdateImpersonationRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateImpersonationRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateImpersonationRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateMailboxQuota',
    '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateMailboxQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateMailboxQuota'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress',
    '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkMailServiceUpdateResourceKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateResource',
    '/#X-Amz-Target=WorkMailService.UpdateResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkMailServiceUpdateResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkMailServiceUpdateResourceKey()
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
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkMailService.UpdateResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

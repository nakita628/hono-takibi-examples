import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssociateDelegateToResource',
    '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.AssociateDelegateToResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceAssociateDelegateToResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceAssociateDelegateToResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceAssociateMemberToGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssociateMemberToGroup',
    '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceAssociateMemberToGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceAssociateMemberToGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.AssociateMemberToGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceAssociateMemberToGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceAssociateMemberToGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.AssumeImpersonationRole',
    '/#X-Amz-Target=WorkMailService.AssumeImpersonationRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.AssumeImpersonationRole'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceAssumeImpersonationRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceAssumeImpersonationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCancelMailboxExportJobMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CancelMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.CancelMailboxExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCancelMailboxExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCancelMailboxExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CancelMailboxExportJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCancelMailboxExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCancelMailboxExportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateAlias',
    '/#X-Amz-Target=WorkMailService.CreateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.CreateAlias'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateAvailabilityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceCreateAvailabilityConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateGroup',
    '/#X-Amz-Target=WorkMailService.CreateGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.CreateGroup'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateImpersonationRoleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateImpersonationRole',
    '/#X-Amz-Target=WorkMailService.CreateImpersonationRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateImpersonationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateImpersonationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CreateImpersonationRole'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateImpersonationRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateImpersonationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateOrganizationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateOrganization',
    '/#X-Amz-Target=WorkMailService.CreateOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CreateOrganization'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateResource',
    '/#X-Amz-Target=WorkMailService.CreateResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.CreateResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceCreateUserMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.CreateUser',
    '/#X-Amz-Target=WorkMailService.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.CreateUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceCreateUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceCreateUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAccessControlRule',
    '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteAccessControlRule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteAccessControlRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteAccessControlRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAlias',
    '/#X-Amz-Target=WorkMailService.DeleteAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.DeleteAlias'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteAvailabilityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteGroup',
    '/#X-Amz-Target=WorkMailService.DeleteGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.DeleteGroup'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteImpersonationRole',
    '/#X-Amz-Target=WorkMailService.DeleteImpersonationRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteImpersonationRole'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteImpersonationRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteImpersonationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteMailboxPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDeleteMailboxPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteOrganizationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteOrganization',
    '/#X-Amz-Target=WorkMailService.DeleteOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteOrganization'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteResource',
    '/#X-Amz-Target=WorkMailService.DeleteResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteRetentionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeleteUser',
    '/#X-Amz-Target=WorkMailService.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.DeleteUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeleteUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeregisterFromWorkMail',
    '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeregisterFromWorkMail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeregisterFromWorkMailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDeregisterMailDomainMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DeregisterMailDomain',
    '/#X-Amz-Target=WorkMailService.DeregisterMailDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDeregisterMailDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDeregisterMailDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DeregisterMailDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDeregisterMailDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDeregisterMailDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeGroup',
    '/#X-Amz-Target=WorkMailService.DescribeGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDescribeGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings',
    '/#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.DescribeMailboxExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeMailboxExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDescribeMailboxExportJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeOrganizationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeOrganization',
    '/#X-Amz-Target=WorkMailService.DescribeOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeOrganization'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDescribeOrganizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeResource',
    '/#X-Amz-Target=WorkMailService.DescribeResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDescribeResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDescribeUserMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DescribeUser',
    '/#X-Amz-Target=WorkMailService.DescribeUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDescribeUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDescribeUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DescribeUser'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDescribeUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceDescribeUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource',
    '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDisassociateDelegateFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDisassociateDelegateFromResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup',
    '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceDisassociateMemberFromGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceDisassociateMemberFromGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetAccessControlEffectMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetAccessControlEffect',
    '/#X-Amz-Target=WorkMailService.GetAccessControlEffect',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetAccessControlEffectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetAccessControlEffectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetAccessControlEffect'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetAccessControlEffect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceGetAccessControlEffectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceGetDefaultRetentionPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetImpersonationRole',
    '/#X-Amz-Target=WorkMailService.GetImpersonationRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetImpersonationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetImpersonationRole'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetImpersonationRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceGetImpersonationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect',
    '/#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetImpersonationRoleEffect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceGetImpersonationRoleEffectMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetMailDomainMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMailDomain',
    '/#X-Amz-Target=WorkMailService.GetMailDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetMailDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetMailDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetMailDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetMailDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceGetMailDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetMailboxDetailsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMailboxDetails',
    '/#X-Amz-Target=WorkMailService.GetMailboxDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetMailboxDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetMailboxDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetMailboxDetails'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetMailboxDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceGetMailboxDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect',
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListAccessControlRulesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAccessControlRules',
    '/#X-Amz-Target=WorkMailService.ListAccessControlRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListAccessControlRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListAccessControlRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListAccessControlRules'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListAccessControlRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListAccessControlRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListAliasesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAliases',
    '/#X-Amz-Target=WorkMailService.ListAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.ListAliases'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations',
    '/#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListAvailabilityConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceListAvailabilityConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListGroupMembersMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListGroupMembers',
    '/#X-Amz-Target=WorkMailService.ListGroupMembers',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListGroupMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListGroupMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListGroupMembers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListGroupMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListGroupMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListGroupsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListGroups',
    '/#X-Amz-Target=WorkMailService.ListGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.ListGroups'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListImpersonationRolesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListImpersonationRoles',
    '/#X-Amz-Target=WorkMailService.ListImpersonationRoles',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListImpersonationRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListImpersonationRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListImpersonationRoles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListImpersonationRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListImpersonationRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListMailDomainsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailDomains',
    '/#X-Amz-Target=WorkMailService.ListMailDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListMailDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListMailDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListMailDomains'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListMailDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListMailDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListMailboxExportJobsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailboxExportJobs',
    '/#X-Amz-Target=WorkMailService.ListMailboxExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListMailboxExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListMailboxExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListMailboxExportJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListMailboxExportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListMailboxExportJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListMailboxPermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.ListMailboxPermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListMailboxPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListMailboxPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListMailboxPermissions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListMailboxPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListMailboxPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides',
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverrides<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules',
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListMobileDeviceAccessRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceListMobileDeviceAccessRulesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListOrganizationsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListOrganizations',
    '/#X-Amz-Target=WorkMailService.ListOrganizations',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListOrganizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListOrganizations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListOrganizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListOrganizationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListResourceDelegatesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListResourceDelegates',
    '/#X-Amz-Target=WorkMailService.ListResourceDelegates',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListResourceDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListResourceDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListResourceDelegates'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListResourceDelegates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListResourceDelegatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListResourcesMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListResources',
    '/#X-Amz-Target=WorkMailService.ListResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListResources'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListTagsForResource',
    '/#X-Amz-Target=WorkMailService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceListUsersMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ListUsers',
    '/#X-Amz-Target=WorkMailService.ListUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceListUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.ListUsers'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceListUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceListUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutAccessControlRuleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutAccessControlRule',
    '/#X-Amz-Target=WorkMailService.PutAccessControlRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutAccessControlRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutAccessControlRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutAccessControlRule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutAccessControlRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServicePutAccessControlRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration',
    '/#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutEmailMonitoringConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServicePutEmailMonitoringConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutInboundDmarcSettings',
    '/#X-Amz-Target=WorkMailService.PutInboundDmarcSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutInboundDmarcSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServicePutInboundDmarcSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutMailboxPermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutMailboxPermissions',
    '/#X-Amz-Target=WorkMailService.PutMailboxPermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutMailboxPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutMailboxPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutMailboxPermissions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutMailboxPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServicePutMailboxPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride',
    '/#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServicePutRetentionPolicyMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.PutRetentionPolicy',
    '/#X-Amz-Target=WorkMailService.PutRetentionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServicePutRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServicePutRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.PutRetentionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServicePutRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServicePutRetentionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceRegisterMailDomainMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.RegisterMailDomain',
    '/#X-Amz-Target=WorkMailService.RegisterMailDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceRegisterMailDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceRegisterMailDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.RegisterMailDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceRegisterMailDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceRegisterMailDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceRegisterToWorkMailMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.RegisterToWorkMail',
    '/#X-Amz-Target=WorkMailService.RegisterToWorkMail',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceRegisterToWorkMailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceRegisterToWorkMailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.RegisterToWorkMail'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceRegisterToWorkMail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceRegisterToWorkMailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceResetPasswordMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.ResetPassword',
    '/#X-Amz-Target=WorkMailService.ResetPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.ResetPassword'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceStartMailboxExportJobMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.StartMailboxExportJob',
    '/#X-Amz-Target=WorkMailService.StartMailboxExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceStartMailboxExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceStartMailboxExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.StartMailboxExportJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceStartMailboxExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceStartMailboxExportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.TagResource',
    '/#X-Amz-Target=WorkMailService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=WorkMailService.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetWorkMailServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceTestAvailabilityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceTestAvailabilityConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UntagResource',
    '/#X-Amz-Target=WorkMailService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration',
    '/#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateAvailabilityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain',
    '/#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateDefaultMailDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceUpdateDefaultMailDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateImpersonationRole',
    '/#X-Amz-Target=WorkMailService.UpdateImpersonationRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateImpersonationRole'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateImpersonationRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceUpdateImpersonationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateMailboxQuota',
    '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateMailboxQuota'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateMailboxQuota<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceUpdateMailboxQuotaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule',
    '/#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress',
    '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkMailServiceUpdateResourceMutationKey() {
  return [
    '#X-Amz-Target=WorkMailService.UpdateResource',
    '/#X-Amz-Target=WorkMailService.UpdateResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkMailServiceUpdateResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkMailServiceUpdateResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkMailService.UpdateResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkMailServiceUpdateResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkMailServiceUpdateResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

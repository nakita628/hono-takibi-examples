import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSFMS_20180101AssociateAdminAccountKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount'] as const
}

export function getXAmzTargetAWSFMS_20180101AssociateThirdPartyFirewallKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall'] as const
}

export function getXAmzTargetAWSFMS_20180101BatchAssociateResourceKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource'] as const
}

export function getXAmzTargetAWSFMS_20180101BatchDisassociateResourceKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource'] as const
}

export function getXAmzTargetAWSFMS_20180101DeleteAppsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList'] as const
}

export function getXAmzTargetAWSFMS_20180101DeleteNotificationChannelKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel'] as const
}

export function getXAmzTargetAWSFMS_20180101DeletePolicyKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DeletePolicy'] as const
}

export function getXAmzTargetAWSFMS_20180101DeleteProtocolsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList'] as const
}

export function getXAmzTargetAWSFMS_20180101DeleteResourceSetKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet'] as const
}

export function getXAmzTargetAWSFMS_20180101DisassociateAdminAccountKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount'] as const
}

export function getXAmzTargetAWSFMS_20180101DisassociateThirdPartyFirewallKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall'] as const
}

export function getXAmzTargetAWSFMS_20180101GetAdminAccountKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount'] as const
}

export function getXAmzTargetAWSFMS_20180101GetAdminScopeKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetAdminScope'] as const
}

export function getXAmzTargetAWSFMS_20180101GetAppsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetAppsList'] as const
}

export function getXAmzTargetAWSFMS_20180101GetComplianceDetailKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail'] as const
}

export function getXAmzTargetAWSFMS_20180101GetNotificationChannelKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel'] as const
}

export function getXAmzTargetAWSFMS_20180101GetPolicyKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetPolicy'] as const
}

export function getXAmzTargetAWSFMS_20180101GetProtectionStatusKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus'] as const
}

export function getXAmzTargetAWSFMS_20180101GetProtocolsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList'] as const
}

export function getXAmzTargetAWSFMS_20180101GetResourceSetKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetResourceSet'] as const
}

export function getXAmzTargetAWSFMS_20180101GetThirdPartyFirewallAssociationStatusKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'] as const
}

export function getXAmzTargetAWSFMS_20180101GetViolationDetailsKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails'] as const
}

export function getXAmzTargetAWSFMS_20180101ListAdminAccountsForOrganizationKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization'] as const
}

export function getXAmzTargetAWSFMS_20180101ListAdminsManagingAccountKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount'] as const
}

export function getXAmzTargetAWSFMS_20180101ListAppsListsKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListAppsLists'] as const
}

export function getXAmzTargetAWSFMS_20180101ListComplianceStatusKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus'] as const
}

export function getXAmzTargetAWSFMS_20180101ListDiscoveredResourcesKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources'] as const
}

export function getXAmzTargetAWSFMS_20180101ListMemberAccountsKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts'] as const
}

export function getXAmzTargetAWSFMS_20180101ListPoliciesKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListPolicies'] as const
}

export function getXAmzTargetAWSFMS_20180101ListProtocolsListsKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists'] as const
}

export function getXAmzTargetAWSFMS_20180101ListResourceSetResourcesKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources'] as const
}

export function getXAmzTargetAWSFMS_20180101ListResourceSetsKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListResourceSets'] as const
}

export function getXAmzTargetAWSFMS_20180101ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource'] as const
}

export function getXAmzTargetAWSFMS_20180101ListThirdPartyFirewallFirewallPoliciesKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'] as const
}

export function getXAmzTargetAWSFMS_20180101PutAdminAccountKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount'] as const
}

export function getXAmzTargetAWSFMS_20180101PutAppsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutAppsList'] as const
}

export function getXAmzTargetAWSFMS_20180101PutNotificationChannelKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel'] as const
}

export function getXAmzTargetAWSFMS_20180101PutPolicyKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutPolicy'] as const
}

export function getXAmzTargetAWSFMS_20180101PutProtocolsListKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList'] as const
}

export function getXAmzTargetAWSFMS_20180101PutResourceSetKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.PutResourceSet'] as const
}

export function getXAmzTargetAWSFMS_20180101TagResourceKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.TagResource'] as const
}

export function getXAmzTargetAWSFMS_20180101UntagResourceKey() {
  return ['#X-Amz-Target=AWSFMS_20180101.UntagResource'] as const
}

export function getPostXAmzTargetAWSFMS20180101AssociateAdminAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101AssociateAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101AssociateAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101AssociateAdminAccount<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101AssociateAdminAccountMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall',
    '/#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewall<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101BatchAssociateResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource',
    '/#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101BatchAssociateResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101BatchAssociateResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101BatchAssociateResource<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101BatchAssociateResourceMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource',
    '/#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101BatchDisassociateResource<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DeleteAppsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteAppsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DeleteAppsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DeleteAppsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DeleteAppsList<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DeleteAppsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DeleteNotificationChannel<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DeletePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeletePolicy',
    '/#X-Amz-Target=AWSFMS_20180101.DeletePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DeletePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DeletePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DeletePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DeletePolicy<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DeletePolicyMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DeleteProtocolsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DeleteProtocolsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DeleteProtocolsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DeleteProtocolsList<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DeleteProtocolsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DeleteResourceSetMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DeleteResourceSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DeleteResourceSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DeleteResourceSet<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DeleteResourceSetMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DisassociateAdminAccount<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall',
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewall<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetAdminAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetAdminAccount<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetAdminAccountMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetAdminScopeMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAdminScope',
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminScope',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetAdminScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetAdminScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetAdminScope'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetAdminScope<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetAdminScopeMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetAppsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.GetAppsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetAppsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetAppsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSFMS_20180101.GetAppsList'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetAppsList<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetAppsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetComplianceDetailMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail',
    '/#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetComplianceDetailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetComplianceDetailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetComplianceDetail<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetComplianceDetailMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetNotificationChannelMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetNotificationChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetNotificationChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetNotificationChannel<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetNotificationChannelMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetPolicy',
    '/#X-Amz-Target=AWSFMS_20180101.GetPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSFMS_20180101.GetPolicy'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetPolicy<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetPolicyMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetProtectionStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus',
    '/#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetProtectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetProtectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetProtectionStatus<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetProtectionStatusMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetProtocolsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.GetProtocolsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetProtocolsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetProtocolsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetProtocolsList<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetProtocolsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetResourceSetMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.GetResourceSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetResourceSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetResourceSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetResourceSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetResourceSet<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetResourceSetMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus',
    '/#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatus<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101GetViolationDetailsMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetViolationDetails',
    '/#X-Amz-Target=AWSFMS_20180101.GetViolationDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101GetViolationDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101GetViolationDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101GetViolationDetails<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101GetViolationDetailsMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization',
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganization<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount',
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListAdminsManagingAccount<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListAppsListsMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAppsLists',
    '/#X-Amz-Target=AWSFMS_20180101.ListAppsLists',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListAppsListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListAppsListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListAppsLists'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListAppsLists<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListAppsListsMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListComplianceStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus',
    '/#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListComplianceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListComplianceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListComplianceStatus<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListComplianceStatusMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources',
    '/#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListDiscoveredResources<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListMemberAccountsMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts',
    '/#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListMemberAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListMemberAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListMemberAccounts<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListMemberAccountsMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListPoliciesMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListPolicies',
    '/#X-Amz-Target=AWSFMS_20180101.ListPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListPolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListPolicies<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListPoliciesMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListProtocolsListsMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists',
    '/#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListProtocolsListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListProtocolsListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListProtocolsLists<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListProtocolsListsMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources',
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListResourceSetResources<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListResourceSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListResourceSets',
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListResourceSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListResourceSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListResourceSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListResourceSets<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListResourceSetsMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListTagsForResource',
    '/#X-Amz-Target=AWSFMS_20180101.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies',
    '/#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPolicies<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutAdminAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.PutAdminAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutAdminAccount<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutAdminAccountMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutAppsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.PutAppsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutAppsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutAppsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSFMS_20180101.PutAppsList'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutAppsList<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutAppsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutNotificationChannelMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutNotificationChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutNotificationChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutNotificationChannel<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutNotificationChannelMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutPolicy',
    '/#X-Amz-Target=AWSFMS_20180101.PutPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSFMS_20180101.PutPolicy'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutPolicy<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutPolicyMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutProtocolsListMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.PutProtocolsList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutProtocolsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutProtocolsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutProtocolsList<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutProtocolsListMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101PutResourceSetMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.PutResourceSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101PutResourceSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101PutResourceSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.PutResourceSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101PutResourceSet<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101PutResourceSetMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.TagResource',
    '/#X-Amz-Target=AWSFMS_20180101.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSFMS_20180101.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101TagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101TagResourceMutationOptions<
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

export function getPostXAmzTargetAWSFMS20180101UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.UntagResource',
    '/#X-Amz-Target=AWSFMS_20180101.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSFMS20180101UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSFMS20180101UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSFMS_20180101.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSFMS20180101UntagResource<
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
                    (typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSFMS20180101UntagResourceMutationOptions<
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

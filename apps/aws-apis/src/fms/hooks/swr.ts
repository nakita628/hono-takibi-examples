import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSFMS20180101AssociateAdminAccountKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101AssociateAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101AssociateAdminAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall',
    '/#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewall<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101BatchAssociateResourceKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource',
    '/#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101BatchAssociateResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101BatchAssociateResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource',
    '/#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101BatchDisassociateResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101BatchDisassociateResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DeleteAppsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteAppsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DeleteAppsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DeleteAppsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DeleteNotificationChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DeleteNotificationChannelKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DeletePolicyKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeletePolicy',
    '/#X-Amz-Target=AWSFMS_20180101.DeletePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DeletePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DeletePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DeletePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DeleteProtocolsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DeleteProtocolsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DeleteProtocolsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DeleteResourceSetKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DeleteResourceSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DeleteResourceSetKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DisassociateAdminAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DisassociateAdminAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall',
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewall<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetAdminAccountKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetAdminAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetAdminScopeKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAdminScope',
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminScope',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetAdminScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetAdminScopeKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetAdminScope'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetAppsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.GetAppsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetAppsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetAppsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetAppsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetComplianceDetailKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail',
    '/#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetComplianceDetail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetComplianceDetailKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetNotificationChannelKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetNotificationChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetNotificationChannelKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetPolicyKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetPolicy',
    '/#X-Amz-Target=AWSFMS_20180101.GetPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSFMS_20180101.GetPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetProtectionStatusKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus',
    '/#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetProtectionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetProtectionStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetProtocolsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.GetProtocolsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetProtocolsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetProtocolsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetResourceSetKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.GetResourceSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetResourceSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetResourceSetKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetResourceSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus',
    '/#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101GetViolationDetailsKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.GetViolationDetails',
    '/#X-Amz-Target=AWSFMS_20180101.GetViolationDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101GetViolationDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101GetViolationDetailsKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization',
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount',
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListAdminsManagingAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListAdminsManagingAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListAppsListsKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListAppsLists',
    '/#X-Amz-Target=AWSFMS_20180101.ListAppsLists',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListAppsLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListAppsListsKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListAppsLists'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListComplianceStatusKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus',
    '/#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListComplianceStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListComplianceStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources',
    '/#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListDiscoveredResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListDiscoveredResourcesKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListMemberAccountsKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts',
    '/#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListMemberAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListMemberAccountsKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListPoliciesKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListPolicies',
    '/#X-Amz-Target=AWSFMS_20180101.ListPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListPoliciesKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListProtocolsListsKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists',
    '/#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListProtocolsLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListProtocolsListsKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources',
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListResourceSetResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListResourceSetResourcesKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListResourceSetsKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListResourceSets',
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListResourceSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListResourceSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListResourceSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListTagsForResource',
    '/#X-Amz-Target=AWSFMS_20180101.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies',
    '/#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutAdminAccountKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutAdminAccount',
    '/#X-Amz-Target=AWSFMS_20180101.PutAdminAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutAdminAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutAppsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutAppsList',
    '/#X-Amz-Target=AWSFMS_20180101.PutAppsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutAppsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutAppsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.PutAppsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutNotificationChannelKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel',
    '/#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutNotificationChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutNotificationChannelKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutPolicyKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutPolicy',
    '/#X-Amz-Target=AWSFMS_20180101.PutPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSFMS_20180101.PutPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutProtocolsListKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutProtocolsList',
    '/#X-Amz-Target=AWSFMS_20180101.PutProtocolsList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutProtocolsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutProtocolsListKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101PutResourceSetKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.PutResourceSet',
    '/#X-Amz-Target=AWSFMS_20180101.PutResourceSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101PutResourceSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101PutResourceSetKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.PutResourceSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101TagResourceKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.TagResource',
    '/#X-Amz-Target=AWSFMS_20180101.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSFMS20180101UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSFMS_20180101.UntagResource',
    '/#X-Amz-Target=AWSFMS_20180101.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSFMS20180101UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSFMS20180101UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSFMS_20180101.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

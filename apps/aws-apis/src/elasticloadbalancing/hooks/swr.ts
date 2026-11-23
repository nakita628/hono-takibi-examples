import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAddTagsKey() {
  return ['#Action=AddTags'] as const
}

export function getActionApplySecurityGroupsToLoadBalancerKey() {
  return ['#Action=ApplySecurityGroupsToLoadBalancer'] as const
}

export function getActionAttachLoadBalancerToSubnetsKey() {
  return ['#Action=AttachLoadBalancerToSubnets'] as const
}

export function getActionConfigureHealthCheckKey() {
  return ['#Action=ConfigureHealthCheck'] as const
}

export function getActionCreateAppCookieStickinessPolicyKey() {
  return ['#Action=CreateAppCookieStickinessPolicy'] as const
}

export function getActionCreateLBCookieStickinessPolicyKey() {
  return ['#Action=CreateLBCookieStickinessPolicy'] as const
}

export function getActionCreateLoadBalancerKey() {
  return ['#Action=CreateLoadBalancer'] as const
}

export function getActionCreateLoadBalancerListenersKey() {
  return ['#Action=CreateLoadBalancerListeners'] as const
}

export function getActionCreateLoadBalancerPolicyKey() {
  return ['#Action=CreateLoadBalancerPolicy'] as const
}

export function getActionDeleteLoadBalancerKey() {
  return ['#Action=DeleteLoadBalancer'] as const
}

export function getActionDeleteLoadBalancerListenersKey() {
  return ['#Action=DeleteLoadBalancerListeners'] as const
}

export function getActionDeleteLoadBalancerPolicyKey() {
  return ['#Action=DeleteLoadBalancerPolicy'] as const
}

export function getActionDeregisterInstancesFromLoadBalancerKey() {
  return ['#Action=DeregisterInstancesFromLoadBalancer'] as const
}

export function getActionDescribeAccountLimitsKey() {
  return ['#Action=DescribeAccountLimits'] as const
}

export function getActionDescribeInstanceHealthKey() {
  return ['#Action=DescribeInstanceHealth'] as const
}

export function getActionDescribeLoadBalancerAttributesKey() {
  return ['#Action=DescribeLoadBalancerAttributes'] as const
}

export function getActionDescribeLoadBalancerPoliciesKey() {
  return ['#Action=DescribeLoadBalancerPolicies'] as const
}

export function getActionDescribeLoadBalancerPolicyTypesKey() {
  return ['#Action=DescribeLoadBalancerPolicyTypes'] as const
}

export function getActionDescribeLoadBalancersKey() {
  return ['#Action=DescribeLoadBalancers'] as const
}

export function getActionDescribeTagsKey() {
  return ['#Action=DescribeTags'] as const
}

export function getActionDetachLoadBalancerFromSubnetsKey() {
  return ['#Action=DetachLoadBalancerFromSubnets'] as const
}

export function getActionDisableAvailabilityZonesForLoadBalancerKey() {
  return ['#Action=DisableAvailabilityZonesForLoadBalancer'] as const
}

export function getActionEnableAvailabilityZonesForLoadBalancerKey() {
  return ['#Action=EnableAvailabilityZonesForLoadBalancer'] as const
}

export function getActionModifyLoadBalancerAttributesKey() {
  return ['#Action=ModifyLoadBalancerAttributes'] as const
}

export function getActionRegisterInstancesWithLoadBalancerKey() {
  return ['#Action=RegisterInstancesWithLoadBalancer'] as const
}

export function getActionRemoveTagsKey() {
  return ['#Action=RemoveTags'] as const
}

export function getActionSetLoadBalancerListenerSSLCertificateKey() {
  return ['#Action=SetLoadBalancerListenerSSLCertificate'] as const
}

export function getActionSetLoadBalancerPoliciesForBackendServerKey() {
  return ['#Action=SetLoadBalancerPoliciesForBackendServer'] as const
}

export function getActionSetLoadBalancerPoliciesOfListenerKey() {
  return ['#Action=SetLoadBalancerPoliciesOfListener'] as const
}

export function getGetActionAddTagsKey(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddTags', '/#Action=AddTags', keyArgs] as const
}

export function useGetActionAddTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionAddTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionAddTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddTagsKey() {
  return ['#Action=AddTags', '/#Action=AddTags', 'POST'] as const
}

export function usePostActionAddTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddTags']['$post']> },
      ) => parseResponse(client['#Action=AddTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionApplySecurityGroupsToLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ApplySecurityGroupsToLoadBalancer',
    '/#Action=ApplySecurityGroupsToLoadBalancer',
    keyArgs,
  ] as const
}

export function useGetActionApplySecurityGroupsToLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
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
        ? getGetActionApplySecurityGroupsToLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionApplySecurityGroupsToLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
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
        ? getGetActionApplySecurityGroupsToLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionApplySecurityGroupsToLoadBalancerKey() {
  return [
    '#Action=ApplySecurityGroupsToLoadBalancer',
    '/#Action=ApplySecurityGroupsToLoadBalancer',
    'POST',
  ] as const
}

export function usePostActionApplySecurityGroupsToLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionApplySecurityGroupsToLoadBalancerKey()
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
            (typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=ApplySecurityGroupsToLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionAttachLoadBalancerToSubnetsKey(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AttachLoadBalancerToSubnets',
    '/#Action=AttachLoadBalancerToSubnets',
    keyArgs,
  ] as const
}

export function useGetActionAttachLoadBalancerToSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachLoadBalancerToSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAttachLoadBalancerToSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAttachLoadBalancerToSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAttachLoadBalancerToSubnetsKey() {
  return [
    '#Action=AttachLoadBalancerToSubnets',
    '/#Action=AttachLoadBalancerToSubnets',
    'POST',
  ] as const
}

export function usePostActionAttachLoadBalancerToSubnets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAttachLoadBalancerToSubnetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>
        },
      ) => parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionConfigureHealthCheckKey(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ConfigureHealthCheck', '/#Action=ConfigureHealthCheck', keyArgs] as const
}

export function useGetActionConfigureHealthCheck<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionConfigureHealthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ConfigureHealthCheck'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionConfigureHealthCheck<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionConfigureHealthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ConfigureHealthCheck'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionConfigureHealthCheckKey() {
  return ['#Action=ConfigureHealthCheck', '/#Action=ConfigureHealthCheck', 'POST'] as const
}

export function usePostActionConfigureHealthCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionConfigureHealthCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']> },
      ) => parseResponse(client['#Action=ConfigureHealthCheck'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateAppCookieStickinessPolicyKey(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateAppCookieStickinessPolicy',
    '/#Action=CreateAppCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function useGetActionCreateAppCookieStickinessPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAppCookieStickinessPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateAppCookieStickinessPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateAppCookieStickinessPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateAppCookieStickinessPolicyKey() {
  return [
    '#Action=CreateAppCookieStickinessPolicy',
    '/#Action=CreateAppCookieStickinessPolicy',
    'POST',
  ] as const
}

export function usePostActionCreateAppCookieStickinessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateAppCookieStickinessPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateLBCookieStickinessPolicyKey(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateLBCookieStickinessPolicy',
    '/#Action=CreateLBCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function useGetActionCreateLBCookieStickinessPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLBCookieStickinessPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateLBCookieStickinessPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLBCookieStickinessPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateLBCookieStickinessPolicyKey() {
  return [
    '#Action=CreateLBCookieStickinessPolicy',
    '/#Action=CreateLBCookieStickinessPolicy',
    'POST',
  ] as const
}

export function usePostActionCreateLBCookieStickinessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateLBCookieStickinessPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateLoadBalancer', '/#Action=CreateLoadBalancer', keyArgs] as const
}

export function useGetActionCreateLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateLoadBalancer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateLoadBalancer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateLoadBalancerKey() {
  return ['#Action=CreateLoadBalancer', '/#Action=CreateLoadBalancer', 'POST'] as const
}

export function usePostActionCreateLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateLoadBalancerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']> },
      ) => parseResponse(client['#Action=CreateLoadBalancer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateLoadBalancerListenersKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateLoadBalancerListeners',
    '/#Action=CreateLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function useGetActionCreateLoadBalancerListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLoadBalancerListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateLoadBalancerListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLoadBalancerListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateLoadBalancerListenersKey() {
  return [
    '#Action=CreateLoadBalancerListeners',
    '/#Action=CreateLoadBalancerListeners',
    'POST',
  ] as const
}

export function usePostActionCreateLoadBalancerListeners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateLoadBalancerListenersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>
        },
      ) => parseResponse(client['#Action=CreateLoadBalancerListeners'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateLoadBalancerPolicyKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateLoadBalancerPolicy', '/#Action=CreateLoadBalancerPolicy', keyArgs] as const
}

export function useGetActionCreateLoadBalancerPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLoadBalancerPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateLoadBalancerPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateLoadBalancerPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateLoadBalancerPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateLoadBalancerPolicyKey() {
  return ['#Action=CreateLoadBalancerPolicy', '/#Action=CreateLoadBalancerPolicy', 'POST'] as const
}

export function usePostActionCreateLoadBalancerPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateLoadBalancerPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']> },
      ) => parseResponse(client['#Action=CreateLoadBalancerPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLoadBalancer', '/#Action=DeleteLoadBalancer', keyArgs] as const
}

export function useGetActionDeleteLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteLoadBalancer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteLoadBalancer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteLoadBalancerKey() {
  return ['#Action=DeleteLoadBalancer', '/#Action=DeleteLoadBalancer', 'POST'] as const
}

export function usePostActionDeleteLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteLoadBalancerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']> },
      ) => parseResponse(client['#Action=DeleteLoadBalancer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteLoadBalancerListenersKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteLoadBalancerListeners',
    '/#Action=DeleteLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function useGetActionDeleteLoadBalancerListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteLoadBalancerListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteLoadBalancerListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteLoadBalancerListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteLoadBalancerListenersKey() {
  return [
    '#Action=DeleteLoadBalancerListeners',
    '/#Action=DeleteLoadBalancerListeners',
    'POST',
  ] as const
}

export function usePostActionDeleteLoadBalancerListeners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteLoadBalancerListenersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteLoadBalancerListeners'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteLoadBalancerPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLoadBalancerPolicy', '/#Action=DeleteLoadBalancerPolicy', keyArgs] as const
}

export function useGetActionDeleteLoadBalancerPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteLoadBalancerPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteLoadBalancerPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteLoadBalancerPolicyKey() {
  return ['#Action=DeleteLoadBalancerPolicy', '/#Action=DeleteLoadBalancerPolicy', 'POST'] as const
}

export function usePostActionDeleteLoadBalancerPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteLoadBalancerPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']> },
      ) => parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeregisterInstancesFromLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeregisterInstancesFromLoadBalancer',
    '/#Action=DeregisterInstancesFromLoadBalancer',
    keyArgs,
  ] as const
}

export function useGetActionDeregisterInstancesFromLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
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
        ? getGetActionDeregisterInstancesFromLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeregisterInstancesFromLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeregisterInstancesFromLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
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
        ? getGetActionDeregisterInstancesFromLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeregisterInstancesFromLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeregisterInstancesFromLoadBalancerKey() {
  return [
    '#Action=DeregisterInstancesFromLoadBalancer',
    '/#Action=DeregisterInstancesFromLoadBalancer',
    'POST',
  ] as const
}

export function usePostActionDeregisterInstancesFromLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeregisterInstancesFromLoadBalancerKey()
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
            (typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DeregisterInstancesFromLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAccountLimitsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function useGetActionDescribeAccountLimits<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAccountLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAccountLimits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAccountLimits<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeAccountLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeAccountLimits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAccountLimitsKey() {
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', 'POST'] as const
}

export function usePostActionDescribeAccountLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAccountLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']> },
      ) => parseResponse(client['#Action=DescribeAccountLimits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeInstanceHealthKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeInstanceHealth', '/#Action=DescribeInstanceHealth', keyArgs] as const
}

export function useGetActionDescribeInstanceHealth<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeInstanceHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeInstanceHealth'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeInstanceHealth<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeInstanceHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeInstanceHealth'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeInstanceHealthKey() {
  return ['#Action=DescribeInstanceHealth', '/#Action=DescribeInstanceHealth', 'POST'] as const
}

export function usePostActionDescribeInstanceHealth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeInstanceHealthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']> },
      ) => parseResponse(client['#Action=DescribeInstanceHealth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeLoadBalancerAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerAttributes',
    '/#Action=DescribeLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeLoadBalancerAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeLoadBalancerAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeLoadBalancerAttributesKey() {
  return [
    '#Action=DescribeLoadBalancerAttributes',
    '/#Action=DescribeLoadBalancerAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeLoadBalancerAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeLoadBalancerAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeLoadBalancerPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerPolicies',
    '/#Action=DescribeLoadBalancerPolicies',
    keyArgs,
  ] as const
}

export function useGetActionDescribeLoadBalancerPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeLoadBalancerPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeLoadBalancerPoliciesKey() {
  return [
    '#Action=DescribeLoadBalancerPolicies',
    '/#Action=DescribeLoadBalancerPolicies',
    'POST',
  ] as const
}

export function usePostActionDescribeLoadBalancerPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeLoadBalancerPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeLoadBalancerPolicyTypesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerPolicyTypes',
    '/#Action=DescribeLoadBalancerPolicyTypes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeLoadBalancerPolicyTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerPolicyTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeLoadBalancerPolicyTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancerPolicyTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeLoadBalancerPolicyTypesKey() {
  return [
    '#Action=DescribeLoadBalancerPolicyTypes',
    '/#Action=DescribeLoadBalancerPolicyTypes',
    'POST',
  ] as const
}

export function usePostActionDescribeLoadBalancerPolicyTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeLoadBalancerPolicyTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeLoadBalancersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', keyArgs] as const
}

export function useGetActionDescribeLoadBalancers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeLoadBalancers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeLoadBalancers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeLoadBalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeLoadBalancers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeLoadBalancersKey() {
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', 'POST'] as const
}

export function usePostActionDescribeLoadBalancers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeLoadBalancersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']> },
      ) => parseResponse(client['#Action=DescribeLoadBalancers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeTagsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function useGetActionDescribeTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTagsKey() {
  return ['#Action=DescribeTags', '/#Action=DescribeTags', 'POST'] as const
}

export function usePostActionDescribeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']> },
      ) => parseResponse(client['#Action=DescribeTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDetachLoadBalancerFromSubnetsKey(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DetachLoadBalancerFromSubnets',
    '/#Action=DetachLoadBalancerFromSubnets',
    keyArgs,
  ] as const
}

export function useGetActionDetachLoadBalancerFromSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachLoadBalancerFromSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDetachLoadBalancerFromSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDetachLoadBalancerFromSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDetachLoadBalancerFromSubnetsKey() {
  return [
    '#Action=DetachLoadBalancerFromSubnets',
    '/#Action=DetachLoadBalancerFromSubnets',
    'POST',
  ] as const
}

export function usePostActionDetachLoadBalancerFromSubnets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDetachLoadBalancerFromSubnetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>
        },
      ) => parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDisableAvailabilityZonesForLoadBalancerKey(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DisableAvailabilityZonesForLoadBalancer',
    '/#Action=DisableAvailabilityZonesForLoadBalancer',
    keyArgs,
  ] as const
}

export function useGetActionDisableAvailabilityZonesForLoadBalancer<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
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
        ? getGetActionDisableAvailabilityZonesForLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDisableAvailabilityZonesForLoadBalancer<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
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
        ? getGetActionDisableAvailabilityZonesForLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDisableAvailabilityZonesForLoadBalancerKey() {
  return [
    '#Action=DisableAvailabilityZonesForLoadBalancer',
    '/#Action=DisableAvailabilityZonesForLoadBalancer',
    'POST',
  ] as const
}

export function usePostActionDisableAvailabilityZonesForLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDisableAvailabilityZonesForLoadBalancerKey()
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
            (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DisableAvailabilityZonesForLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionEnableAvailabilityZonesForLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=EnableAvailabilityZonesForLoadBalancer',
    '/#Action=EnableAvailabilityZonesForLoadBalancer',
    keyArgs,
  ] as const
}

export function useGetActionEnableAvailabilityZonesForLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
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
        ? getGetActionEnableAvailabilityZonesForLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionEnableAvailabilityZonesForLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
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
        ? getGetActionEnableAvailabilityZonesForLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionEnableAvailabilityZonesForLoadBalancerKey() {
  return [
    '#Action=EnableAvailabilityZonesForLoadBalancer',
    '/#Action=EnableAvailabilityZonesForLoadBalancer',
    'POST',
  ] as const
}

export function usePostActionEnableAvailabilityZonesForLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionEnableAvailabilityZonesForLoadBalancerKey()
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
            (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=EnableAvailabilityZonesForLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyLoadBalancerAttributesKey(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyLoadBalancerAttributes',
    '/#Action=ModifyLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function useGetActionModifyLoadBalancerAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyLoadBalancerAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyLoadBalancerAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyLoadBalancerAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyLoadBalancerAttributesKey() {
  return [
    '#Action=ModifyLoadBalancerAttributes',
    '/#Action=ModifyLoadBalancerAttributes',
    'POST',
  ] as const
}

export function usePostActionModifyLoadBalancerAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyLoadBalancerAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRegisterInstancesWithLoadBalancerKey(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RegisterInstancesWithLoadBalancer',
    '/#Action=RegisterInstancesWithLoadBalancer',
    keyArgs,
  ] as const
}

export function useGetActionRegisterInstancesWithLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
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
        ? getGetActionRegisterInstancesWithLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RegisterInstancesWithLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRegisterInstancesWithLoadBalancer<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
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
        ? getGetActionRegisterInstancesWithLoadBalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RegisterInstancesWithLoadBalancer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionRegisterInstancesWithLoadBalancerKey() {
  return [
    '#Action=RegisterInstancesWithLoadBalancer',
    '/#Action=RegisterInstancesWithLoadBalancer',
    'POST',
  ] as const
}

export function usePostActionRegisterInstancesWithLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRegisterInstancesWithLoadBalancerKey()
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
            (typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=RegisterInstancesWithLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveTagsKey(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveTags', '/#Action=RemoveTags', keyArgs] as const
}

export function useGetActionRemoveTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveTags<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveTags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveTagsKey() {
  return ['#Action=RemoveTags', '/#Action=RemoveTags', 'POST'] as const
}

export function usePostActionRemoveTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RemoveTags']['$post']> },
      ) => parseResponse(client['#Action=RemoveTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetLoadBalancerListenerSSLCertificateKey(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetLoadBalancerListenerSSLCertificate',
    '/#Action=SetLoadBalancerListenerSSLCertificate',
    keyArgs,
  ] as const
}

export function useGetActionSetLoadBalancerListenerSSLCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
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
        ? getGetActionSetLoadBalancerListenerSSLCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetLoadBalancerListenerSSLCertificate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
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
        ? getGetActionSetLoadBalancerListenerSSLCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetLoadBalancerListenerSSLCertificateKey() {
  return [
    '#Action=SetLoadBalancerListenerSSLCertificate',
    '/#Action=SetLoadBalancerListenerSSLCertificate',
    'POST',
  ] as const
}

export function usePostActionSetLoadBalancerListenerSSLCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetLoadBalancerListenerSSLCertificateKey()
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
            (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetLoadBalancerListenerSSLCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetLoadBalancerPoliciesForBackendServerKey(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetLoadBalancerPoliciesForBackendServer',
    '/#Action=SetLoadBalancerPoliciesForBackendServer',
    keyArgs,
  ] as const
}

export function useGetActionSetLoadBalancerPoliciesForBackendServer<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
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
        ? getGetActionSetLoadBalancerPoliciesForBackendServerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetLoadBalancerPoliciesForBackendServer<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
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
        ? getGetActionSetLoadBalancerPoliciesForBackendServerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetLoadBalancerPoliciesForBackendServerKey() {
  return [
    '#Action=SetLoadBalancerPoliciesForBackendServer',
    '/#Action=SetLoadBalancerPoliciesForBackendServer',
    'POST',
  ] as const
}

export function usePostActionSetLoadBalancerPoliciesForBackendServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetLoadBalancerPoliciesForBackendServerKey()
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
            (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesForBackendServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetLoadBalancerPoliciesOfListenerKey(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetLoadBalancerPoliciesOfListener',
    '/#Action=SetLoadBalancerPoliciesOfListener',
    keyArgs,
  ] as const
}

export function useGetActionSetLoadBalancerPoliciesOfListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
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
        ? getGetActionSetLoadBalancerPoliciesOfListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesOfListener'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetLoadBalancerPoliciesOfListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
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
        ? getGetActionSetLoadBalancerPoliciesOfListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesOfListener'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetLoadBalancerPoliciesOfListenerKey() {
  return [
    '#Action=SetLoadBalancerPoliciesOfListener',
    '/#Action=SetLoadBalancerPoliciesOfListener',
    'POST',
  ] as const
}

export function usePostActionSetLoadBalancerPoliciesOfListener<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetLoadBalancerPoliciesOfListenerKey()
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
            (typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetLoadBalancerPoliciesOfListener'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getActionAddTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddTags', '/#Action=AddTags', keyArgs] as const
}

export function getActionAddTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddTagsQueryKey>
  >({
    queryKey: getActionAddTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddTags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionAddTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionAddTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionAddTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostActionAddTagsMutationKey() {
  return ['#Action=AddTags', '/#Action=AddTags', 'POST'] as const
}

export function getPostActionAddTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AddTags']['$post']>) {
      return parseResponse(client['#Action=AddTags'].$post(args, options))
    },
  })
}

export function createPostActionAddTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddTags']['$post']>,
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
    const mutationDefaults = getPostActionAddTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionApplySecurityGroupsToLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ApplySecurityGroupsToLoadBalancer',
    '/#Action=ApplySecurityGroupsToLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionApplySecurityGroupsToLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionApplySecurityGroupsToLoadBalancerQueryKey>
  >({
    queryKey: getActionApplySecurityGroupsToLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionApplySecurityGroupsToLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionApplySecurityGroupsToLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionApplySecurityGroupsToLoadBalancerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionApplySecurityGroupsToLoadBalancerMutationKey() {
  return [
    '#Action=ApplySecurityGroupsToLoadBalancer',
    '/#Action=ApplySecurityGroupsToLoadBalancer',
    'POST',
  ] as const
}

export function getPostActionApplySecurityGroupsToLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionApplySecurityGroupsToLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>,
    ) {
      return parseResponse(client['#Action=ApplySecurityGroupsToLoadBalancer'].$post(args, options))
    },
  })
}

export function createPostActionApplySecurityGroupsToLoadBalancer<
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
                  ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>,
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
    const mutationDefaults = getPostActionApplySecurityGroupsToLoadBalancerMutationOptions<
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

export function getActionAttachLoadBalancerToSubnetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AttachLoadBalancerToSubnets',
    '/#Action=AttachLoadBalancerToSubnets',
    keyArgs,
  ] as const
}

export function getActionAttachLoadBalancerToSubnetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachLoadBalancerToSubnetsQueryKey>
  >({
    queryKey: getActionAttachLoadBalancerToSubnetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AttachLoadBalancerToSubnets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAttachLoadBalancerToSubnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionAttachLoadBalancerToSubnetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionAttachLoadBalancerToSubnetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionAttachLoadBalancerToSubnetsMutationKey() {
  return [
    '#Action=AttachLoadBalancerToSubnets',
    '/#Action=AttachLoadBalancerToSubnets',
    'POST',
  ] as const
}

export function getPostActionAttachLoadBalancerToSubnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAttachLoadBalancerToSubnetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>,
    ) {
      return parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$post(args, options))
    },
  })
}

export function createPostActionAttachLoadBalancerToSubnets<
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
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>,
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
    const mutationDefaults = getPostActionAttachLoadBalancerToSubnetsMutationOptions<
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

export function getActionConfigureHealthCheckQueryKey(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ConfigureHealthCheck', '/#Action=ConfigureHealthCheck', keyArgs] as const
}

export function getActionConfigureHealthCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionConfigureHealthCheckQueryKey>
  >({
    queryKey: getActionConfigureHealthCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ConfigureHealthCheck'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionConfigureHealthCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionConfigureHealthCheckQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionConfigureHealthCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionConfigureHealthCheckMutationKey() {
  return ['#Action=ConfigureHealthCheck', '/#Action=ConfigureHealthCheck', 'POST'] as const
}

export function getPostActionConfigureHealthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionConfigureHealthCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>,
    ) {
      return parseResponse(client['#Action=ConfigureHealthCheck'].$post(args, options))
    },
  })
}

export function createPostActionConfigureHealthCheck<
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
                Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>,
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
    const mutationDefaults = getPostActionConfigureHealthCheckMutationOptions<
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

export function getActionCreateAppCookieStickinessPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateAppCookieStickinessPolicy',
    '/#Action=CreateAppCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function getActionCreateAppCookieStickinessPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAppCookieStickinessPolicyQueryKey>
  >({
    queryKey: getActionCreateAppCookieStickinessPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateAppCookieStickinessPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateAppCookieStickinessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateAppCookieStickinessPolicyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateAppCookieStickinessPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionCreateAppCookieStickinessPolicyMutationKey() {
  return [
    '#Action=CreateAppCookieStickinessPolicy',
    '/#Action=CreateAppCookieStickinessPolicy',
    'POST',
  ] as const
}

export function getPostActionCreateAppCookieStickinessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateAppCookieStickinessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$post(args, options))
    },
  })
}

export function createPostActionCreateAppCookieStickinessPolicy<
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
                  ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>,
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
    const mutationDefaults = getPostActionCreateAppCookieStickinessPolicyMutationOptions<
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

export function getActionCreateLBCookieStickinessPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateLBCookieStickinessPolicy',
    '/#Action=CreateLBCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function getActionCreateLBCookieStickinessPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLBCookieStickinessPolicyQueryKey>
  >({
    queryKey: getActionCreateLBCookieStickinessPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateLBCookieStickinessPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateLBCookieStickinessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateLBCookieStickinessPolicyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateLBCookieStickinessPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionCreateLBCookieStickinessPolicyMutationKey() {
  return [
    '#Action=CreateLBCookieStickinessPolicy',
    '/#Action=CreateLBCookieStickinessPolicy',
    'POST',
  ] as const
}

export function getPostActionCreateLBCookieStickinessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLBCookieStickinessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$post(args, options))
    },
  })
}

export function createPostActionCreateLBCookieStickinessPolicy<
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
                  ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>,
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
    const mutationDefaults = getPostActionCreateLBCookieStickinessPolicyMutationOptions<
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

export function getActionCreateLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateLoadBalancer', '/#Action=CreateLoadBalancer', keyArgs] as const
}

export function getActionCreateLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerQueryKey>
  >({
    queryKey: getActionCreateLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateLoadBalancerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionCreateLoadBalancerMutationKey() {
  return ['#Action=CreateLoadBalancer', '/#Action=CreateLoadBalancer', 'POST'] as const
}

export function getPostActionCreateLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLoadBalancer'].$post(args, options))
    },
  })
}

export function createPostActionCreateLoadBalancer<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']>,
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
    const mutationDefaults = getPostActionCreateLoadBalancerMutationOptions<
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

export function getActionCreateLoadBalancerListenersQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateLoadBalancerListeners',
    '/#Action=CreateLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function getActionCreateLoadBalancerListenersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerListenersQueryKey>
  >({
    queryKey: getActionCreateLoadBalancerListenersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateLoadBalancerListeners'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateLoadBalancerListeners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateLoadBalancerListenersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateLoadBalancerListenersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionCreateLoadBalancerListenersMutationKey() {
  return [
    '#Action=CreateLoadBalancerListeners',
    '/#Action=CreateLoadBalancerListeners',
    'POST',
  ] as const
}

export function getPostActionCreateLoadBalancerListenersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLoadBalancerListenersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLoadBalancerListeners'].$post(args, options))
    },
  })
}

export function createPostActionCreateLoadBalancerListeners<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>,
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
    const mutationDefaults = getPostActionCreateLoadBalancerListenersMutationOptions<
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

export function getActionCreateLoadBalancerPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateLoadBalancerPolicy', '/#Action=CreateLoadBalancerPolicy', keyArgs] as const
}

export function getActionCreateLoadBalancerPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerPolicyQueryKey>
  >({
    queryKey: getActionCreateLoadBalancerPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateLoadBalancerPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateLoadBalancerPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateLoadBalancerPolicyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateLoadBalancerPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionCreateLoadBalancerPolicyMutationKey() {
  return ['#Action=CreateLoadBalancerPolicy', '/#Action=CreateLoadBalancerPolicy', 'POST'] as const
}

export function getPostActionCreateLoadBalancerPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateLoadBalancerPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateLoadBalancerPolicy'].$post(args, options))
    },
  })
}

export function createPostActionCreateLoadBalancerPolicy<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>,
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
    const mutationDefaults = getPostActionCreateLoadBalancerPolicyMutationOptions<
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

export function getActionDeleteLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLoadBalancer', '/#Action=DeleteLoadBalancer', keyArgs] as const
}

export function getActionDeleteLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerQueryKey>
  >({
    queryKey: getActionDeleteLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDeleteLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteLoadBalancerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteLoadBalancerMutationKey() {
  return ['#Action=DeleteLoadBalancer', '/#Action=DeleteLoadBalancer', 'POST'] as const
}

export function getPostActionDeleteLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLoadBalancer'].$post(args, options))
    },
  })
}

export function createPostActionDeleteLoadBalancer<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>,
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
    const mutationDefaults = getPostActionDeleteLoadBalancerMutationOptions<
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

export function getActionDeleteLoadBalancerListenersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteLoadBalancerListeners',
    '/#Action=DeleteLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function getActionDeleteLoadBalancerListenersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerListenersQueryKey>
  >({
    queryKey: getActionDeleteLoadBalancerListenersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteLoadBalancerListeners'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteLoadBalancerListeners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDeleteLoadBalancerListenersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteLoadBalancerListenersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteLoadBalancerListenersMutationKey() {
  return [
    '#Action=DeleteLoadBalancerListeners',
    '/#Action=DeleteLoadBalancerListeners',
    'POST',
  ] as const
}

export function getPostActionDeleteLoadBalancerListenersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLoadBalancerListenersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLoadBalancerListeners'].$post(args, options))
    },
  })
}

export function createPostActionDeleteLoadBalancerListeners<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>,
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
    const mutationDefaults = getPostActionDeleteLoadBalancerListenersMutationOptions<
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

export function getActionDeleteLoadBalancerPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteLoadBalancerPolicy', '/#Action=DeleteLoadBalancerPolicy', keyArgs] as const
}

export function getActionDeleteLoadBalancerPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerPolicyQueryKey>
  >({
    queryKey: getActionDeleteLoadBalancerPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteLoadBalancerPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteLoadBalancerPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDeleteLoadBalancerPolicyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteLoadBalancerPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteLoadBalancerPolicyMutationKey() {
  return ['#Action=DeleteLoadBalancerPolicy', '/#Action=DeleteLoadBalancerPolicy', 'POST'] as const
}

export function getPostActionDeleteLoadBalancerPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteLoadBalancerPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$post(args, options))
    },
  })
}

export function createPostActionDeleteLoadBalancerPolicy<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>,
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
    const mutationDefaults = getPostActionDeleteLoadBalancerPolicyMutationOptions<
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

export function getActionDeregisterInstancesFromLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeregisterInstancesFromLoadBalancer',
    '/#Action=DeregisterInstancesFromLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionDeregisterInstancesFromLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeregisterInstancesFromLoadBalancerQueryKey>
  >({
    queryKey: getActionDeregisterInstancesFromLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeregisterInstancesFromLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeregisterInstancesFromLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDeregisterInstancesFromLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeregisterInstancesFromLoadBalancerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeregisterInstancesFromLoadBalancerMutationKey() {
  return [
    '#Action=DeregisterInstancesFromLoadBalancer',
    '/#Action=DeregisterInstancesFromLoadBalancer',
    'POST',
  ] as const
}

export function getPostActionDeregisterInstancesFromLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeregisterInstancesFromLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DeregisterInstancesFromLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function createPostActionDeregisterInstancesFromLoadBalancer<
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
                    (typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>,
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
    const mutationDefaults = getPostActionDeregisterInstancesFromLoadBalancerMutationOptions<
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

export function getActionDescribeAccountLimitsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function getActionDescribeAccountLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
  >({
    queryKey: getActionDescribeAccountLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAccountLimits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeAccountLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAccountLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeAccountLimitsMutationKey() {
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', 'POST'] as const
}

export function getPostActionDescribeAccountLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
    },
  })
}

export function createPostActionDescribeAccountLimits<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
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
    const mutationDefaults = getPostActionDescribeAccountLimitsMutationOptions<
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

export function getActionDescribeInstanceHealthQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeInstanceHealth', '/#Action=DescribeInstanceHealth', keyArgs] as const
}

export function getActionDescribeInstanceHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeInstanceHealthQueryKey>
  >({
    queryKey: getActionDescribeInstanceHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeInstanceHealth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeInstanceHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeInstanceHealthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeInstanceHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeInstanceHealthMutationKey() {
  return ['#Action=DescribeInstanceHealth', '/#Action=DescribeInstanceHealth', 'POST'] as const
}

export function getPostActionDescribeInstanceHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeInstanceHealthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeInstanceHealth'].$post(args, options))
    },
  })
}

export function createPostActionDescribeInstanceHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>,
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
    const mutationDefaults = getPostActionDescribeInstanceHealthMutationOptions<
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

export function getActionDescribeLoadBalancerAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerAttributes',
    '/#Action=DescribeLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerAttributesQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancerAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeLoadBalancerAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeLoadBalancerAttributesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancerAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeLoadBalancerAttributesMutationKey() {
  return [
    '#Action=DescribeLoadBalancerAttributes',
    '/#Action=DescribeLoadBalancerAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeLoadBalancerAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancerAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$post(args, options))
    },
  })
}

export function createPostActionDescribeLoadBalancerAttributes<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeLoadBalancerAttributesMutationOptions<
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

export function getActionDescribeLoadBalancerPoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerPolicies',
    '/#Action=DescribeLoadBalancerPolicies',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerPoliciesQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancerPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerPolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeLoadBalancerPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeLoadBalancerPoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancerPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeLoadBalancerPoliciesMutationKey() {
  return [
    '#Action=DescribeLoadBalancerPolicies',
    '/#Action=DescribeLoadBalancerPolicies',
    'POST',
  ] as const
}

export function getPostActionDescribeLoadBalancerPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancerPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$post(args, options))
    },
  })
}

export function createPostActionDescribeLoadBalancerPolicies<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>,
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
    const mutationDefaults = getPostActionDescribeLoadBalancerPoliciesMutationOptions<
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

export function getActionDescribeLoadBalancerPolicyTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeLoadBalancerPolicyTypes',
    '/#Action=DescribeLoadBalancerPolicyTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerPolicyTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerPolicyTypesQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancerPolicyTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerPolicyTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeLoadBalancerPolicyTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeLoadBalancerPolicyTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancerPolicyTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeLoadBalancerPolicyTypesMutationKey() {
  return [
    '#Action=DescribeLoadBalancerPolicyTypes',
    '/#Action=DescribeLoadBalancerPolicyTypes',
    'POST',
  ] as const
}

export function getPostActionDescribeLoadBalancerPolicyTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancerPolicyTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$post(args, options))
    },
  })
}

export function createPostActionDescribeLoadBalancerPolicyTypes<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeLoadBalancerPolicyTypesMutationOptions<
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

export function getActionDescribeLoadBalancersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', keyArgs] as const
}

export function getActionDescribeLoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
  >({
    queryKey: getActionDescribeLoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeLoadBalancers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeLoadBalancersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeLoadBalancersMutationKey() {
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', 'POST'] as const
}

export function getPostActionDescribeLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeLoadBalancers'].$post(args, options))
    },
  })
}

export function createPostActionDescribeLoadBalancers<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
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
    const mutationDefaults = getPostActionDescribeLoadBalancersMutationOptions<
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

export function getActionDescribeTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function getActionDescribeTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTagsQueryKey>
  >({
    queryKey: getActionDescribeTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeTags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDescribeTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostActionDescribeTagsMutationKey() {
  return ['#Action=DescribeTags', '/#Action=DescribeTags', 'POST'] as const
}

export function getPostActionDescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>) {
      return parseResponse(client['#Action=DescribeTags'].$post(args, options))
    },
  })
}

export function createPostActionDescribeTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
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
    const mutationDefaults = getPostActionDescribeTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDetachLoadBalancerFromSubnetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DetachLoadBalancerFromSubnets',
    '/#Action=DetachLoadBalancerFromSubnets',
    keyArgs,
  ] as const
}

export function getActionDetachLoadBalancerFromSubnetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachLoadBalancerFromSubnetsQueryKey>
  >({
    queryKey: getActionDetachLoadBalancerFromSubnetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetachLoadBalancerFromSubnets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDetachLoadBalancerFromSubnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDetachLoadBalancerFromSubnetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetachLoadBalancerFromSubnetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDetachLoadBalancerFromSubnetsMutationKey() {
  return [
    '#Action=DetachLoadBalancerFromSubnets',
    '/#Action=DetachLoadBalancerFromSubnets',
    'POST',
  ] as const
}

export function getPostActionDetachLoadBalancerFromSubnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetachLoadBalancerFromSubnetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>,
    ) {
      return parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$post(args, options))
    },
  })
}

export function createPostActionDetachLoadBalancerFromSubnets<
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
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>,
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
    const mutationDefaults = getPostActionDetachLoadBalancerFromSubnetsMutationOptions<
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

export function getActionDisableAvailabilityZonesForLoadBalancerQueryKey(
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

export function getActionDisableAvailabilityZonesForLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableAvailabilityZonesForLoadBalancerQueryKey>
  >({
    queryKey: getActionDisableAvailabilityZonesForLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDisableAvailabilityZonesForLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDisableAvailabilityZonesForLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDisableAvailabilityZonesForLoadBalancerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDisableAvailabilityZonesForLoadBalancerMutationKey() {
  return [
    '#Action=DisableAvailabilityZonesForLoadBalancer',
    '/#Action=DisableAvailabilityZonesForLoadBalancer',
    'POST',
  ] as const
}

export function getPostActionDisableAvailabilityZonesForLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisableAvailabilityZonesForLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DisableAvailabilityZonesForLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function createPostActionDisableAvailabilityZonesForLoadBalancer<
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
                    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']
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
    const mutationDefaults = getPostActionDisableAvailabilityZonesForLoadBalancerMutationOptions<
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

export function getActionEnableAvailabilityZonesForLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=EnableAvailabilityZonesForLoadBalancer',
    '/#Action=EnableAvailabilityZonesForLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionEnableAvailabilityZonesForLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableAvailabilityZonesForLoadBalancerQueryKey>
  >({
    queryKey: getActionEnableAvailabilityZonesForLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionEnableAvailabilityZonesForLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionEnableAvailabilityZonesForLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionEnableAvailabilityZonesForLoadBalancerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionEnableAvailabilityZonesForLoadBalancerMutationKey() {
  return [
    '#Action=EnableAvailabilityZonesForLoadBalancer',
    '/#Action=EnableAvailabilityZonesForLoadBalancer',
    'POST',
  ] as const
}

export function getPostActionEnableAvailabilityZonesForLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEnableAvailabilityZonesForLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=EnableAvailabilityZonesForLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function createPostActionEnableAvailabilityZonesForLoadBalancer<
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
                    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']
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
    const mutationDefaults = getPostActionEnableAvailabilityZonesForLoadBalancerMutationOptions<
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

export function getActionModifyLoadBalancerAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyLoadBalancerAttributes',
    '/#Action=ModifyLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function getActionModifyLoadBalancerAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyLoadBalancerAttributesQueryKey>
  >({
    queryKey: getActionModifyLoadBalancerAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyLoadBalancerAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyLoadBalancerAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionModifyLoadBalancerAttributesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionModifyLoadBalancerAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionModifyLoadBalancerAttributesMutationKey() {
  return [
    '#Action=ModifyLoadBalancerAttributes',
    '/#Action=ModifyLoadBalancerAttributes',
    'POST',
  ] as const
}

export function getPostActionModifyLoadBalancerAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyLoadBalancerAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$post(args, options))
    },
  })
}

export function createPostActionModifyLoadBalancerAttributes<
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
                  ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>,
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
    const mutationDefaults = getPostActionModifyLoadBalancerAttributesMutationOptions<
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

export function getActionRegisterInstancesWithLoadBalancerQueryKey(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RegisterInstancesWithLoadBalancer',
    '/#Action=RegisterInstancesWithLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionRegisterInstancesWithLoadBalancerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterInstancesWithLoadBalancerQueryKey>
  >({
    queryKey: getActionRegisterInstancesWithLoadBalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RegisterInstancesWithLoadBalancer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRegisterInstancesWithLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionRegisterInstancesWithLoadBalancerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionRegisterInstancesWithLoadBalancerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionRegisterInstancesWithLoadBalancerMutationKey() {
  return [
    '#Action=RegisterInstancesWithLoadBalancer',
    '/#Action=RegisterInstancesWithLoadBalancer',
    'POST',
  ] as const
}

export function getPostActionRegisterInstancesWithLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRegisterInstancesWithLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>,
    ) {
      return parseResponse(client['#Action=RegisterInstancesWithLoadBalancer'].$post(args, options))
    },
  })
}

export function createPostActionRegisterInstancesWithLoadBalancer<
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
                  ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>,
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
    const mutationDefaults = getPostActionRegisterInstancesWithLoadBalancerMutationOptions<
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

export function getActionRemoveTagsQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveTags', '/#Action=RemoveTags', keyArgs] as const
}

export function getActionRemoveTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveTagsQueryKey>
  >({
    queryKey: getActionRemoveTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveTags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionRemoveTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionRemoveTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionRemoveTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostActionRemoveTagsMutationKey() {
  return ['#Action=RemoveTags', '/#Action=RemoveTags', 'POST'] as const
}

export function getPostActionRemoveTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RemoveTags']['$post']>) {
      return parseResponse(client['#Action=RemoveTags'].$post(args, options))
    },
  })
}

export function createPostActionRemoveTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveTags']['$post']>,
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
    const mutationDefaults = getPostActionRemoveTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionSetLoadBalancerListenerSSLCertificateQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetLoadBalancerListenerSSLCertificate',
    '/#Action=SetLoadBalancerListenerSSLCertificate',
    keyArgs,
  ] as const
}

export function getActionSetLoadBalancerListenerSSLCertificateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerListenerSSLCertificateQueryKey>
  >({
    queryKey: getActionSetLoadBalancerListenerSSLCertificateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSetLoadBalancerListenerSSLCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionSetLoadBalancerListenerSSLCertificateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetLoadBalancerListenerSSLCertificateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionSetLoadBalancerListenerSSLCertificateMutationKey() {
  return [
    '#Action=SetLoadBalancerListenerSSLCertificate',
    '/#Action=SetLoadBalancerListenerSSLCertificate',
    'POST',
  ] as const
}

export function getPostActionSetLoadBalancerListenerSSLCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetLoadBalancerListenerSSLCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=SetLoadBalancerListenerSSLCertificate'].$post(args, options),
      )
    },
  })
}

export function createPostActionSetLoadBalancerListenerSSLCertificate<
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
                    (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']
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
    const mutationDefaults = getPostActionSetLoadBalancerListenerSSLCertificateMutationOptions<
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

export function getActionSetLoadBalancerPoliciesForBackendServerQueryKey(
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

export function getActionSetLoadBalancerPoliciesForBackendServerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerPoliciesForBackendServerQueryKey>
  >({
    queryKey: getActionSetLoadBalancerPoliciesForBackendServerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSetLoadBalancerPoliciesForBackendServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionSetLoadBalancerPoliciesForBackendServerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetLoadBalancerPoliciesForBackendServerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionSetLoadBalancerPoliciesForBackendServerMutationKey() {
  return [
    '#Action=SetLoadBalancerPoliciesForBackendServer',
    '/#Action=SetLoadBalancerPoliciesForBackendServer',
    'POST',
  ] as const
}

export function getPostActionSetLoadBalancerPoliciesForBackendServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetLoadBalancerPoliciesForBackendServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=SetLoadBalancerPoliciesForBackendServer'].$post(args, options),
      )
    },
  })
}

export function createPostActionSetLoadBalancerPoliciesForBackendServer<
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
                    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']
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
    const mutationDefaults = getPostActionSetLoadBalancerPoliciesForBackendServerMutationOptions<
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

export function getActionSetLoadBalancerPoliciesOfListenerQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetLoadBalancerPoliciesOfListener',
    '/#Action=SetLoadBalancerPoliciesOfListener',
    keyArgs,
  ] as const
}

export function getActionSetLoadBalancerPoliciesOfListenerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerPoliciesOfListenerQueryKey>
  >({
    queryKey: getActionSetLoadBalancerPoliciesOfListenerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetLoadBalancerPoliciesOfListener'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSetLoadBalancerPoliciesOfListener<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionSetLoadBalancerPoliciesOfListenerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetLoadBalancerPoliciesOfListenerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostActionSetLoadBalancerPoliciesOfListenerMutationKey() {
  return [
    '#Action=SetLoadBalancerPoliciesOfListener',
    '/#Action=SetLoadBalancerPoliciesOfListener',
    'POST',
  ] as const
}

export function getPostActionSetLoadBalancerPoliciesOfListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetLoadBalancerPoliciesOfListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>,
    ) {
      return parseResponse(client['#Action=SetLoadBalancerPoliciesOfListener'].$post(args, options))
    },
  })
}

export function createPostActionSetLoadBalancerPoliciesOfListener<
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
                  ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>,
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
    const mutationDefaults = getPostActionSetLoadBalancerPoliciesOfListenerMutationOptions<
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

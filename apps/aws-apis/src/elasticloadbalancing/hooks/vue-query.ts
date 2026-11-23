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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddTags', '/#Action=AddTags', keyArgs] as const
}

export function getActionAddTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
            >
          >,
          ReturnType<typeof getActionAddTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAddTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddTags']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddTags']['$post']>,
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
  const mutationDefaults = getPostActionAddTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionApplySecurityGroupsToLoadBalancerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ApplySecurityGroupsToLoadBalancer',
    '/#Action=ApplySecurityGroupsToLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionApplySecurityGroupsToLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionApplySecurityGroupsToLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionApplySecurityGroupsToLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionApplySecurityGroupsToLoadBalancerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionApplySecurityGroupsToLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionApplySecurityGroupsToLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionApplySecurityGroupsToLoadBalancer<
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
                  ReturnType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>,
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
  const mutationDefaults = getPostActionApplySecurityGroupsToLoadBalancerMutationOptions<
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

export function getActionAttachLoadBalancerToSubnetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AttachLoadBalancerToSubnets',
    '/#Action=AttachLoadBalancerToSubnets',
    keyArgs,
  ] as const
}

export function getActionAttachLoadBalancerToSubnetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAttachLoadBalancerToSubnetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AttachLoadBalancerToSubnets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAttachLoadBalancerToSubnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAttachLoadBalancerToSubnetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAttachLoadBalancerToSubnetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAttachLoadBalancerToSubnetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AttachLoadBalancerToSubnets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionAttachLoadBalancerToSubnets<
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
                Awaited<ReturnType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>,
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
  const mutationDefaults = getPostActionAttachLoadBalancerToSubnetsMutationOptions<
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

export function getActionConfigureHealthCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ConfigureHealthCheck', '/#Action=ConfigureHealthCheck', keyArgs] as const
}

export function getActionConfigureHealthCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionConfigureHealthCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ConfigureHealthCheck'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionConfigureHealthCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionConfigureHealthCheckQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionConfigureHealthCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionConfigureHealthCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ConfigureHealthCheck'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionConfigureHealthCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostActionConfigureHealthCheckMutationOptions<
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

export function getActionCreateAppCookieStickinessPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateAppCookieStickinessPolicy',
    '/#Action=CreateAppCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function getActionCreateAppCookieStickinessPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateAppCookieStickinessPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateAppCookieStickinessPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateAppCookieStickinessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateAppCookieStickinessPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateAppCookieStickinessPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateAppCookieStickinessPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateAppCookieStickinessPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateAppCookieStickinessPolicy<
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
                  ReturnType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>,
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
  const mutationDefaults = getPostActionCreateAppCookieStickinessPolicyMutationOptions<
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

export function getActionCreateLBCookieStickinessPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateLBCookieStickinessPolicy',
    '/#Action=CreateLBCookieStickinessPolicy',
    keyArgs,
  ] as const
}

export function getActionCreateLBCookieStickinessPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLBCookieStickinessPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLBCookieStickinessPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLBCookieStickinessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateLBCookieStickinessPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLBCookieStickinessPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLBCookieStickinessPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLBCookieStickinessPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateLBCookieStickinessPolicy<
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
                  ReturnType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>,
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
  const mutationDefaults = getPostActionCreateLBCookieStickinessPolicyMutationOptions<
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

export function getActionCreateLoadBalancerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateLoadBalancer', '/#Action=CreateLoadBalancer', keyArgs] as const
}

export function getActionCreateLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateLoadBalancerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateLoadBalancer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostActionCreateLoadBalancerMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateLoadBalancerListenersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateLoadBalancerListeners',
    '/#Action=CreateLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function getActionCreateLoadBalancerListenersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLoadBalancerListenersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLoadBalancerListeners'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLoadBalancerListeners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateLoadBalancerListenersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerListenersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLoadBalancerListenersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLoadBalancerListeners'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateLoadBalancerListeners<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>,
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
  const mutationDefaults = getPostActionCreateLoadBalancerListenersMutationOptions<
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

export function getActionCreateLoadBalancerPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateLoadBalancerPolicy', '/#Action=CreateLoadBalancerPolicy', keyArgs] as const
}

export function getActionCreateLoadBalancerPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateLoadBalancerPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateLoadBalancerPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateLoadBalancerPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateLoadBalancerPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateLoadBalancerPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateLoadBalancerPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateLoadBalancerPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateLoadBalancerPolicy<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>,
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
  const mutationDefaults = getPostActionCreateLoadBalancerPolicyMutationOptions<
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

export function getActionDeleteLoadBalancerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteLoadBalancer', '/#Action=DeleteLoadBalancer', keyArgs] as const
}

export function getActionDeleteLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLoadBalancerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteLoadBalancer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostActionDeleteLoadBalancerMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteLoadBalancerListenersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteLoadBalancerListeners',
    '/#Action=DeleteLoadBalancerListeners',
    keyArgs,
  ] as const
}

export function getActionDeleteLoadBalancerListenersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLoadBalancerListenersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLoadBalancerListeners'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLoadBalancerListeners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLoadBalancerListenersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerListenersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLoadBalancerListenersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLoadBalancerListeners'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteLoadBalancerListeners<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>,
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
  const mutationDefaults = getPostActionDeleteLoadBalancerListenersMutationOptions<
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

export function getActionDeleteLoadBalancerPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteLoadBalancerPolicy', '/#Action=DeleteLoadBalancerPolicy', keyArgs] as const
}

export function getActionDeleteLoadBalancerPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteLoadBalancerPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteLoadBalancerPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteLoadBalancerPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteLoadBalancerPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteLoadBalancerPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteLoadBalancerPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteLoadBalancerPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteLoadBalancerPolicy<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>,
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
  const mutationDefaults = getPostActionDeleteLoadBalancerPolicyMutationOptions<
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

export function getActionDeregisterInstancesFromLoadBalancerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeregisterInstancesFromLoadBalancer',
    '/#Action=DeregisterInstancesFromLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionDeregisterInstancesFromLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeregisterInstancesFromLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeregisterInstancesFromLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeregisterInstancesFromLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeregisterInstancesFromLoadBalancerQueryKey>
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
            ReturnType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeregisterInstancesFromLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeregisterInstancesFromLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeregisterInstancesFromLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeregisterInstancesFromLoadBalancer<
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
                    (typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>,
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
  const mutationDefaults = getPostActionDeregisterInstancesFromLoadBalancerMutationOptions<
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

export function getActionDescribeAccountLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function getActionDescribeAccountLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAccountLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAccountLimits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAccountLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAccountLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAccountLimits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAccountLimits<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAccountLimitsMutationOptions<
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

export function getActionDescribeInstanceHealthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeInstanceHealth', '/#Action=DescribeInstanceHealth', keyArgs] as const
}

export function getActionDescribeInstanceHealthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeInstanceHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeInstanceHealth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeInstanceHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeInstanceHealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeInstanceHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeInstanceHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeInstanceHealth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeInstanceHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>,
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
  const mutationDefaults = getPostActionDescribeInstanceHealthMutationOptions<
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

export function getActionDescribeLoadBalancerAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLoadBalancerAttributes',
    '/#Action=DescribeLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancerAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancerAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancerAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancerAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancerAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancerAttributes<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeLoadBalancerAttributesMutationOptions<
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

export function getActionDescribeLoadBalancerPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLoadBalancerPolicies',
    '/#Action=DescribeLoadBalancerPolicies',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancerPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancerPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancerPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancerPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancerPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancerPolicies<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>,
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
  const mutationDefaults = getPostActionDescribeLoadBalancerPoliciesMutationOptions<
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

export function getActionDescribeLoadBalancerPolicyTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeLoadBalancerPolicyTypes',
    '/#Action=DescribeLoadBalancerPolicyTypes',
    keyArgs,
  ] as const
}

export function getActionDescribeLoadBalancerPolicyTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancerPolicyTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancerPolicyTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancerPolicyTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancerPolicyTypesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancerPolicyTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancerPolicyTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancerPolicyTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancerPolicyTypes<
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
                  ReturnType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeLoadBalancerPolicyTypesMutationOptions<
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

export function getActionDescribeLoadBalancersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeLoadBalancers', '/#Action=DescribeLoadBalancers', keyArgs] as const
}

export function getActionDescribeLoadBalancersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeLoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeLoadBalancers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeLoadBalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeLoadBalancersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeLoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeLoadBalancers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeLoadBalancers<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
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
  const mutationDefaults = getPostActionDescribeLoadBalancersMutationOptions<
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

export function getActionDescribeTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTags', '/#Action=DescribeTags', keyArgs] as const
}

export function getActionDescribeTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostActionDescribeTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDetachLoadBalancerFromSubnetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DetachLoadBalancerFromSubnets',
    '/#Action=DetachLoadBalancerFromSubnets',
    keyArgs,
  ] as const
}

export function getActionDetachLoadBalancerFromSubnetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDetachLoadBalancerFromSubnetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DetachLoadBalancerFromSubnets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDetachLoadBalancerFromSubnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDetachLoadBalancerFromSubnetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetachLoadBalancerFromSubnetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDetachLoadBalancerFromSubnetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DetachLoadBalancerFromSubnets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDetachLoadBalancerFromSubnets<
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
                  ReturnType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>,
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
  const mutationDefaults = getPostActionDetachLoadBalancerFromSubnetsMutationOptions<
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

export function getActionDisableAvailabilityZonesForLoadBalancerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DisableAvailabilityZonesForLoadBalancer',
    '/#Action=DisableAvailabilityZonesForLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionDisableAvailabilityZonesForLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisableAvailabilityZonesForLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisableAvailabilityZonesForLoadBalancer<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
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
                    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
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
                    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDisableAvailabilityZonesForLoadBalancerQueryKey>
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
            ReturnType<(typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisableAvailabilityZonesForLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisableAvailabilityZonesForLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDisableAvailabilityZonesForLoadBalancer<
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
  const mutationDefaults = getPostActionDisableAvailabilityZonesForLoadBalancerMutationOptions<
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

export function getActionEnableAvailabilityZonesForLoadBalancerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=EnableAvailabilityZonesForLoadBalancer',
    '/#Action=EnableAvailabilityZonesForLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionEnableAvailabilityZonesForLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionEnableAvailabilityZonesForLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionEnableAvailabilityZonesForLoadBalancer<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
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
                    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']
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
                    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionEnableAvailabilityZonesForLoadBalancerQueryKey>
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
            ReturnType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEnableAvailabilityZonesForLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionEnableAvailabilityZonesForLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionEnableAvailabilityZonesForLoadBalancer<
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
  const mutationDefaults = getPostActionEnableAvailabilityZonesForLoadBalancerMutationOptions<
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

export function getActionModifyLoadBalancerAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyLoadBalancerAttributes',
    '/#Action=ModifyLoadBalancerAttributes',
    keyArgs,
  ] as const
}

export function getActionModifyLoadBalancerAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyLoadBalancerAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyLoadBalancerAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyLoadBalancerAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyLoadBalancerAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyLoadBalancerAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyLoadBalancerAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyLoadBalancerAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionModifyLoadBalancerAttributes<
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
                  ReturnType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>,
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
  const mutationDefaults = getPostActionModifyLoadBalancerAttributesMutationOptions<
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

export function getActionRegisterInstancesWithLoadBalancerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RegisterInstancesWithLoadBalancer',
    '/#Action=RegisterInstancesWithLoadBalancer',
    keyArgs,
  ] as const
}

export function getActionRegisterInstancesWithLoadBalancerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRegisterInstancesWithLoadBalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RegisterInstancesWithLoadBalancer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRegisterInstancesWithLoadBalancer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRegisterInstancesWithLoadBalancerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterInstancesWithLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRegisterInstancesWithLoadBalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RegisterInstancesWithLoadBalancer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionRegisterInstancesWithLoadBalancer<
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
                  ReturnType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>,
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
  const mutationDefaults = getPostActionRegisterInstancesWithLoadBalancerMutationOptions<
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

export function getActionRemoveTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveTags', '/#Action=RemoveTags', keyArgs] as const
}

export function getActionRemoveTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveTags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemoveTags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveTags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionRemoveTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostActionRemoveTagsMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetLoadBalancerListenerSSLCertificateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetLoadBalancerListenerSSLCertificate',
    '/#Action=SetLoadBalancerListenerSSLCertificate',
    keyArgs,
  ] as const
}

export function getActionSetLoadBalancerListenerSSLCertificateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetLoadBalancerListenerSSLCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetLoadBalancerListenerSSLCertificate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
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
                    (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']
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
                    (typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionSetLoadBalancerListenerSSLCertificateQueryKey>
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
            ReturnType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerListenerSSLCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetLoadBalancerListenerSSLCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetLoadBalancerListenerSSLCertificate<
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
  const mutationDefaults = getPostActionSetLoadBalancerListenerSSLCertificateMutationOptions<
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

export function getActionSetLoadBalancerPoliciesForBackendServerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetLoadBalancerPoliciesForBackendServer',
    '/#Action=SetLoadBalancerPoliciesForBackendServer',
    keyArgs,
  ] as const
}

export function getActionSetLoadBalancerPoliciesForBackendServerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetLoadBalancerPoliciesForBackendServerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetLoadBalancerPoliciesForBackendServer<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
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
                    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
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
                    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionSetLoadBalancerPoliciesForBackendServerQueryKey>
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
            ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerPoliciesForBackendServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetLoadBalancerPoliciesForBackendServerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetLoadBalancerPoliciesForBackendServer<
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
  const mutationDefaults = getPostActionSetLoadBalancerPoliciesForBackendServerMutationOptions<
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

export function getActionSetLoadBalancerPoliciesOfListenerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetLoadBalancerPoliciesOfListener',
    '/#Action=SetLoadBalancerPoliciesOfListener',
    keyArgs,
  ] as const
}

export function getActionSetLoadBalancerPoliciesOfListenerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetLoadBalancerPoliciesOfListenerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetLoadBalancerPoliciesOfListener'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetLoadBalancerPoliciesOfListener<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionSetLoadBalancerPoliciesOfListenerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetLoadBalancerPoliciesOfListenerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetLoadBalancerPoliciesOfListenerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetLoadBalancerPoliciesOfListener'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetLoadBalancerPoliciesOfListener<
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
                  ReturnType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>,
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
  const mutationDefaults = getPostActionSetLoadBalancerPoliciesOfListenerMutationOptions<
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

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

export function getActionAddListenerCertificatesKey() {
  return ['#Action=AddListenerCertificates'] as const
}

export function getActionAddTagsKey() {
  return ['#Action=AddTags'] as const
}

export function getActionCreateListenerKey() {
  return ['#Action=CreateListener'] as const
}

export function getActionCreateLoadBalancerKey() {
  return ['#Action=CreateLoadBalancer'] as const
}

export function getActionCreateRuleKey() {
  return ['#Action=CreateRule'] as const
}

export function getActionCreateTargetGroupKey() {
  return ['#Action=CreateTargetGroup'] as const
}

export function getActionDeleteListenerKey() {
  return ['#Action=DeleteListener'] as const
}

export function getActionDeleteLoadBalancerKey() {
  return ['#Action=DeleteLoadBalancer'] as const
}

export function getActionDeleteRuleKey() {
  return ['#Action=DeleteRule'] as const
}

export function getActionDeleteTargetGroupKey() {
  return ['#Action=DeleteTargetGroup'] as const
}

export function getActionDeregisterTargetsKey() {
  return ['#Action=DeregisterTargets'] as const
}

export function getActionDescribeAccountLimitsKey() {
  return ['#Action=DescribeAccountLimits'] as const
}

export function getActionDescribeListenerCertificatesKey() {
  return ['#Action=DescribeListenerCertificates'] as const
}

export function getActionDescribeListenersKey() {
  return ['#Action=DescribeListeners'] as const
}

export function getActionDescribeLoadBalancerAttributesKey() {
  return ['#Action=DescribeLoadBalancerAttributes'] as const
}

export function getActionDescribeLoadBalancersKey() {
  return ['#Action=DescribeLoadBalancers'] as const
}

export function getActionDescribeRulesKey() {
  return ['#Action=DescribeRules'] as const
}

export function getActionDescribeSSLPoliciesKey() {
  return ['#Action=DescribeSSLPolicies'] as const
}

export function getActionDescribeTagsKey() {
  return ['#Action=DescribeTags'] as const
}

export function getActionDescribeTargetGroupAttributesKey() {
  return ['#Action=DescribeTargetGroupAttributes'] as const
}

export function getActionDescribeTargetGroupsKey() {
  return ['#Action=DescribeTargetGroups'] as const
}

export function getActionDescribeTargetHealthKey() {
  return ['#Action=DescribeTargetHealth'] as const
}

export function getActionModifyListenerKey() {
  return ['#Action=ModifyListener'] as const
}

export function getActionModifyLoadBalancerAttributesKey() {
  return ['#Action=ModifyLoadBalancerAttributes'] as const
}

export function getActionModifyRuleKey() {
  return ['#Action=ModifyRule'] as const
}

export function getActionModifyTargetGroupKey() {
  return ['#Action=ModifyTargetGroup'] as const
}

export function getActionModifyTargetGroupAttributesKey() {
  return ['#Action=ModifyTargetGroupAttributes'] as const
}

export function getActionRegisterTargetsKey() {
  return ['#Action=RegisterTargets'] as const
}

export function getActionRemoveListenerCertificatesKey() {
  return ['#Action=RemoveListenerCertificates'] as const
}

export function getActionRemoveTagsKey() {
  return ['#Action=RemoveTags'] as const
}

export function getActionSetIpAddressTypeKey() {
  return ['#Action=SetIpAddressType'] as const
}

export function getActionSetRulePrioritiesKey() {
  return ['#Action=SetRulePriorities'] as const
}

export function getActionSetSecurityGroupsKey() {
  return ['#Action=SetSecurityGroups'] as const
}

export function getActionSetSubnetsKey() {
  return ['#Action=SetSubnets'] as const
}

export function getActionAddListenerCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddListenerCertificates', '/#Action=AddListenerCertificates', keyArgs] as const
}

export function getActionAddListenerCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddListenerCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddListenerCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddListenerCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddListenerCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddListenerCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddListenerCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddListenerCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddListenerCertificatesMutationKey() {
  return ['#Action=AddListenerCertificates', '/#Action=AddListenerCertificates', 'POST'] as const
}

export function getPostActionAddListenerCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddListenerCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=AddListenerCertificates'].$post(args, options))
    },
  })
}

export function usePostActionAddListenerCertificates<
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
                Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']>,
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
  const mutationDefaults = getPostActionAddListenerCertificatesMutationOptions<
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

export function getActionCreateListenerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateListener']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateListener', '/#Action=CreateListener', keyArgs] as const
}

export function getActionCreateListenerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateListener']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateListenerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateListener'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateListener<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateListener']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateListenerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateListenerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateListenerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateListener'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateListenerMutationKey() {
  return ['#Action=CreateListener', '/#Action=CreateListener', 'POST'] as const
}

export function getPostActionCreateListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateListener']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateListenerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateListener']['$post']>) {
      return parseResponse(client['#Action=CreateListener'].$post(args, options))
    },
  })
}

export function usePostActionCreateListener<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateListener']['$post']>,
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
  const mutationDefaults = getPostActionCreateListenerMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateRule', '/#Action=CreateRule', keyArgs] as const
}

export function getActionCreateRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateRuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateRuleMutationKey() {
  return ['#Action=CreateRule', '/#Action=CreateRule', 'POST'] as const
}

export function getPostActionCreateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateRule']['$post']>) {
      return parseResponse(client['#Action=CreateRule'].$post(args, options))
    },
  })
}

export function usePostActionCreateRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateRule']['$post']>,
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
  const mutationDefaults = getPostActionCreateRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateTargetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateTargetGroup', '/#Action=CreateTargetGroup', keyArgs] as const
}

export function getActionCreateTargetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateTargetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateTargetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateTargetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateTargetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateTargetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateTargetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateTargetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateTargetGroupMutationKey() {
  return ['#Action=CreateTargetGroup', '/#Action=CreateTargetGroup', 'POST'] as const
}

export function getPostActionCreateTargetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateTargetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateTargetGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateTargetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateTargetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteListenerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteListener', '/#Action=DeleteListener', keyArgs] as const
}

export function getActionDeleteListenerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteListenerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteListener'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteListener<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteListenerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteListenerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteListenerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteListener'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteListenerMutationKey() {
  return ['#Action=DeleteListener', '/#Action=DeleteListener', 'POST'] as const
}

export function getPostActionDeleteListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteListener']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteListenerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteListener']['$post']>) {
      return parseResponse(client['#Action=DeleteListener'].$post(args, options))
    },
  })
}

export function usePostActionDeleteListener<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteListener']['$post']>,
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
  const mutationDefaults = getPostActionDeleteListenerMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteRule', '/#Action=DeleteRule', keyArgs] as const
}

export function getActionDeleteRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteRuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteRuleMutationKey() {
  return ['#Action=DeleteRule', '/#Action=DeleteRule', 'POST'] as const
}

export function getPostActionDeleteRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteRule']['$post']>) {
      return parseResponse(client['#Action=DeleteRule'].$post(args, options))
    },
  })
}

export function usePostActionDeleteRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteRule']['$post']>,
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
  const mutationDefaults = getPostActionDeleteRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteTargetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteTargetGroup', '/#Action=DeleteTargetGroup', keyArgs] as const
}

export function getActionDeleteTargetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteTargetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteTargetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteTargetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteTargetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTargetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteTargetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteTargetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteTargetGroupMutationKey() {
  return ['#Action=DeleteTargetGroup', '/#Action=DeleteTargetGroup', 'POST'] as const
}

export function getPostActionDeleteTargetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteTargetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteTargetGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteTargetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteTargetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeregisterTargetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeregisterTargets', '/#Action=DeregisterTargets', keyArgs] as const
}

export function getActionDeregisterTargetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeregisterTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeregisterTargets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeregisterTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeregisterTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeregisterTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeregisterTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeregisterTargets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeregisterTargetsMutationKey() {
  return ['#Action=DeregisterTargets', '/#Action=DeregisterTargets', 'POST'] as const
}

export function getPostActionDeregisterTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeregisterTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']>,
    ) {
      return parseResponse(client['#Action=DeregisterTargets'].$post(args, options))
    },
  })
}

export function usePostActionDeregisterTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']>,
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
  const mutationDefaults = getPostActionDeregisterTargetsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeListenerCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeListenerCertificates',
    '/#Action=DescribeListenerCertificates',
    keyArgs,
  ] as const
}

export function getActionDescribeListenerCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeListenerCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeListenerCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeListenerCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeListenerCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeListenerCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeListenerCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeListenerCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeListenerCertificatesMutationKey() {
  return [
    '#Action=DescribeListenerCertificates',
    '/#Action=DescribeListenerCertificates',
    'POST',
  ] as const
}

export function getPostActionDescribeListenerCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeListenerCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeListenerCertificates'].$post(args, options))
    },
  })
}

export function usePostActionDescribeListenerCertificates<
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
                  ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>,
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
  const mutationDefaults = getPostActionDescribeListenerCertificatesMutationOptions<
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

export function getActionDescribeListenersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeListeners', '/#Action=DescribeListeners', keyArgs] as const
}

export function getActionDescribeListenersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeListenersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeListeners'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeListeners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeListenersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeListenersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeListenersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeListeners'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeListenersMutationKey() {
  return ['#Action=DescribeListeners', '/#Action=DescribeListeners', 'POST'] as const
}

export function getPostActionDescribeListenersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeListenersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeListeners'].$post(args, options))
    },
  })
}

export function usePostActionDescribeListeners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']>,
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
  const mutationDefaults = getPostActionDescribeListenersMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeRules', '/#Action=DescribeRules', keyArgs] as const
}

export function getActionDescribeRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeRules'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeRules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeRulesMutationKey() {
  return ['#Action=DescribeRules', '/#Action=DescribeRules', 'POST'] as const
}

export function getPostActionDescribeRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeRules']['$post']>) {
      return parseResponse(client['#Action=DescribeRules'].$post(args, options))
    },
  })
}

export function usePostActionDescribeRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeRules']['$post']>,
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
  const mutationDefaults = getPostActionDescribeRulesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeSSLPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeSSLPolicies', '/#Action=DescribeSSLPolicies', keyArgs] as const
}

export function getActionDescribeSSLPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSSLPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSSLPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeSSLPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSSLPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSSLPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSSLPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSSLPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeSSLPoliciesMutationKey() {
  return ['#Action=DescribeSSLPolicies', '/#Action=DescribeSSLPolicies', 'POST'] as const
}

export function getPostActionDescribeSSLPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSSLPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSSLPolicies'].$post(args, options))
    },
  })
}

export function usePostActionDescribeSSLPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>,
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
  const mutationDefaults = getPostActionDescribeSSLPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeTargetGroupAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeTargetGroupAttributes',
    '/#Action=DescribeTargetGroupAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeTargetGroupAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTargetGroupAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTargetGroupAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTargetGroupAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeTargetGroupAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTargetGroupAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTargetGroupAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTargetGroupAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeTargetGroupAttributesMutationKey() {
  return [
    '#Action=DescribeTargetGroupAttributes',
    '/#Action=DescribeTargetGroupAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeTargetGroupAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTargetGroupAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTargetGroupAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeTargetGroupAttributes<
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
                  ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeTargetGroupAttributesMutationOptions<
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

export function getActionDescribeTargetGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTargetGroups', '/#Action=DescribeTargetGroups', keyArgs] as const
}

export function getActionDescribeTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTargetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTargetGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTargetGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTargetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeTargetGroupsMutationKey() {
  return ['#Action=DescribeTargetGroups', '/#Action=DescribeTargetGroups', 'POST'] as const
}

export function getPostActionDescribeTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTargetGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeTargetGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeTargetGroupsMutationOptions<
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

export function getActionDescribeTargetHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeTargetHealth', '/#Action=DescribeTargetHealth', keyArgs] as const
}

export function getActionDescribeTargetHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeTargetHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeTargetHealth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeTargetHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeTargetHealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTargetHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeTargetHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeTargetHealth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeTargetHealthMutationKey() {
  return ['#Action=DescribeTargetHealth', '/#Action=DescribeTargetHealth', 'POST'] as const
}

export function getPostActionDescribeTargetHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTargetHealthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTargetHealth'].$post(args, options))
    },
  })
}

export function usePostActionDescribeTargetHealth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']>,
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
  const mutationDefaults = getPostActionDescribeTargetHealthMutationOptions<
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

export function getActionModifyListenerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyListener', '/#Action=ModifyListener', keyArgs] as const
}

export function getActionModifyListenerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyListenerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyListener'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyListener<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyListenerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyListenerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyListenerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyListener'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyListenerMutationKey() {
  return ['#Action=ModifyListener', '/#Action=ModifyListener', 'POST'] as const
}

export function getPostActionModifyListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyListener']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyListenerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyListener']['$post']>) {
      return parseResponse(client['#Action=ModifyListener'].$post(args, options))
    },
  })
}

export function usePostActionModifyListener<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyListener']['$post']>,
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
  const mutationDefaults = getPostActionModifyListenerMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyRule', '/#Action=ModifyRule', keyArgs] as const
}

export function getActionModifyRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyRuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyRuleMutationKey() {
  return ['#Action=ModifyRule', '/#Action=ModifyRule', 'POST'] as const
}

export function getPostActionModifyRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyRule']['$post']>) {
      return parseResponse(client['#Action=ModifyRule'].$post(args, options))
    },
  })
}

export function usePostActionModifyRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyRule']['$post']>,
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
  const mutationDefaults = getPostActionModifyRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyTargetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyTargetGroup', '/#Action=ModifyTargetGroup', keyArgs] as const
}

export function getActionModifyTargetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyTargetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyTargetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyTargetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyTargetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyTargetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyTargetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyTargetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyTargetGroupMutationKey() {
  return ['#Action=ModifyTargetGroup', '/#Action=ModifyTargetGroup', 'POST'] as const
}

export function getPostActionModifyTargetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyTargetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyTargetGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyTargetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyTargetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyTargetGroupAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyTargetGroupAttributes',
    '/#Action=ModifyTargetGroupAttributes',
    keyArgs,
  ] as const
}

export function getActionModifyTargetGroupAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyTargetGroupAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyTargetGroupAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyTargetGroupAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyTargetGroupAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyTargetGroupAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyTargetGroupAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyTargetGroupAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyTargetGroupAttributesMutationKey() {
  return [
    '#Action=ModifyTargetGroupAttributes',
    '/#Action=ModifyTargetGroupAttributes',
    'POST',
  ] as const
}

export function getPostActionModifyTargetGroupAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyTargetGroupAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyTargetGroupAttributes'].$post(args, options))
    },
  })
}

export function usePostActionModifyTargetGroupAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>,
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
  const mutationDefaults = getPostActionModifyTargetGroupAttributesMutationOptions<
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

export function getActionRegisterTargetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RegisterTargets', '/#Action=RegisterTargets', keyArgs] as const
}

export function getActionRegisterTargetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRegisterTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RegisterTargets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRegisterTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRegisterTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRegisterTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RegisterTargets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRegisterTargetsMutationKey() {
  return ['#Action=RegisterTargets', '/#Action=RegisterTargets', 'POST'] as const
}

export function getPostActionRegisterTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRegisterTargetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']>) {
      return parseResponse(client['#Action=RegisterTargets'].$post(args, options))
    },
  })
}

export function usePostActionRegisterTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']>,
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
  const mutationDefaults = getPostActionRegisterTargetsMutationOptions<TError, TOnMutateResult>(
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

export function getActionRemoveListenerCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RemoveListenerCertificates',
    '/#Action=RemoveListenerCertificates',
    keyArgs,
  ] as const
}

export function getActionRemoveListenerCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveListenerCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveListenerCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveListenerCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveListenerCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveListenerCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveListenerCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveListenerCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveListenerCertificatesMutationKey() {
  return [
    '#Action=RemoveListenerCertificates',
    '/#Action=RemoveListenerCertificates',
    'POST',
  ] as const
}

export function getPostActionRemoveListenerCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveListenerCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveListenerCertificates'].$post(args, options))
    },
  })
}

export function usePostActionRemoveListenerCertificates<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>,
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
  const mutationDefaults = getPostActionRemoveListenerCertificatesMutationOptions<
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

export function getActionSetIpAddressTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetIpAddressType', '/#Action=SetIpAddressType', keyArgs] as const
}

export function getActionSetIpAddressTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIpAddressTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIpAddressType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIpAddressType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetIpAddressTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIpAddressTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIpAddressTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIpAddressType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetIpAddressTypeMutationKey() {
  return ['#Action=SetIpAddressType', '/#Action=SetIpAddressType', 'POST'] as const
}

export function getPostActionSetIpAddressTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIpAddressTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']>) {
      return parseResponse(client['#Action=SetIpAddressType'].$post(args, options))
    },
  })
}

export function usePostActionSetIpAddressType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']>,
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
  const mutationDefaults = getPostActionSetIpAddressTypeMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetRulePrioritiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetRulePriorities', '/#Action=SetRulePriorities', keyArgs] as const
}

export function getActionSetRulePrioritiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetRulePrioritiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetRulePriorities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetRulePriorities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetRulePrioritiesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetRulePrioritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetRulePrioritiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetRulePriorities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetRulePrioritiesMutationKey() {
  return ['#Action=SetRulePriorities', '/#Action=SetRulePriorities', 'POST'] as const
}

export function getPostActionSetRulePrioritiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetRulePrioritiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']>,
    ) {
      return parseResponse(client['#Action=SetRulePriorities'].$post(args, options))
    },
  })
}

export function usePostActionSetRulePriorities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']>,
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
  const mutationDefaults = getPostActionSetRulePrioritiesMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetSecurityGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetSecurityGroups', '/#Action=SetSecurityGroups', keyArgs] as const
}

export function getActionSetSecurityGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetSecurityGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetSecurityGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetSecurityGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetSecurityGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetSecurityGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetSecurityGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetSecurityGroupsMutationKey() {
  return ['#Action=SetSecurityGroups', '/#Action=SetSecurityGroups', 'POST'] as const
}

export function getPostActionSetSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetSecurityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=SetSecurityGroups'].$post(args, options))
    },
  })
}

export function usePostActionSetSecurityGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']>,
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
  const mutationDefaults = getPostActionSetSecurityGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetSubnetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetSubnets', '/#Action=SetSubnets', keyArgs] as const
}

export function getActionSetSubnetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetSubnetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetSubnets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetSubnets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetSubnetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetSubnetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetSubnetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetSubnets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSetSubnetsMutationKey() {
  return ['#Action=SetSubnets', '/#Action=SetSubnets', 'POST'] as const
}

export function getPostActionSetSubnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetSubnets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetSubnetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SetSubnets']['$post']>) {
      return parseResponse(client['#Action=SetSubnets'].$post(args, options))
    },
  })
}

export function usePostActionSetSubnets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetSubnets']['$post']>,
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
  const mutationDefaults = getPostActionSetSubnetsMutationOptions<TError, TOnMutateResult>(
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

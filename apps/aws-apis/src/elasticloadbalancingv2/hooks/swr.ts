import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetActionAddListenerCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddListenerCertificates', '/#Action=AddListenerCertificates', keyArgs] as const
}

export function useGetActionAddListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AddListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AddListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddListenerCertificatesKey() {
  return ['#Action=AddListenerCertificates', '/#Action=AddListenerCertificates', 'POST'] as const
}

export function usePostActionAddListenerCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddListenerCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']> },
      ) => parseResponse(client['#Action=AddListenerCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getGetActionCreateListenerKey(
  args: InferRequestType<(typeof client)['#Action=CreateListener']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateListener', '/#Action=CreateListener', keyArgs] as const
}

export function useGetActionCreateListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateListenerKey() {
  return ['#Action=CreateListener', '/#Action=CreateListener', 'POST'] as const
}

export function usePostActionCreateListener<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateListener']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateListener']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateListenerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateListener']['$post']> },
      ) => parseResponse(client['#Action=CreateListener'].$post(arg, clientOptions)),
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

export function getGetActionCreateRuleKey(
  args: InferRequestType<(typeof client)['#Action=CreateRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateRule', '/#Action=CreateRule', keyArgs] as const
}

export function useGetActionCreateRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateRuleKey() {
  return ['#Action=CreateRule', '/#Action=CreateRule', 'POST'] as const
}

export function usePostActionCreateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateRule']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateRule']['$post']> },
      ) => parseResponse(client['#Action=CreateRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateTargetGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTargetGroup', '/#Action=CreateTargetGroup', keyArgs] as const
}

export function useGetActionCreateTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateTargetGroupKey() {
  return ['#Action=CreateTargetGroup', '/#Action=CreateTargetGroup', 'POST'] as const
}

export function usePostActionCreateTargetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateTargetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateTargetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteListenerKey(
  args: InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteListener', '/#Action=DeleteListener', keyArgs] as const
}

export function useGetActionDeleteListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteListenerKey() {
  return ['#Action=DeleteListener', '/#Action=DeleteListener', 'POST'] as const
}

export function usePostActionDeleteListener<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteListener']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteListener']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteListenerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteListener']['$post']> },
      ) => parseResponse(client['#Action=DeleteListener'].$post(arg, clientOptions)),
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

export function getGetActionDeleteRuleKey(
  args: InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteRule', '/#Action=DeleteRule', keyArgs] as const
}

export function useGetActionDeleteRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteRuleKey() {
  return ['#Action=DeleteRule', '/#Action=DeleteRule', 'POST'] as const
}

export function usePostActionDeleteRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteRule']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteRule']['$post']> },
      ) => parseResponse(client['#Action=DeleteRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteTargetGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTargetGroup', '/#Action=DeleteTargetGroup', keyArgs] as const
}

export function useGetActionDeleteTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteTargetGroupKey() {
  return ['#Action=DeleteTargetGroup', '/#Action=DeleteTargetGroup', 'POST'] as const
}

export function usePostActionDeleteTargetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteTargetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteTargetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeregisterTargetsKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeregisterTargets', '/#Action=DeregisterTargets', keyArgs] as const
}

export function useGetActionDeregisterTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeregisterTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeregisterTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeregisterTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeregisterTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeregisterTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeregisterTargetsKey() {
  return ['#Action=DeregisterTargets', '/#Action=DeregisterTargets', 'POST'] as const
}

export function usePostActionDeregisterTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeregisterTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeregisterTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']> },
      ) => parseResponse(client['#Action=DeregisterTargets'].$post(arg, clientOptions)),
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

export function getGetActionDescribeListenerCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeListenerCertificates',
    '/#Action=DescribeListenerCertificates',
    keyArgs,
  ] as const
}

export function useGetActionDescribeListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeListenerCertificatesKey() {
  return [
    '#Action=DescribeListenerCertificates',
    '/#Action=DescribeListenerCertificates',
    'POST',
  ] as const
}

export function usePostActionDescribeListenerCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeListenerCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeListenerCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeListenersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeListeners', '/#Action=DescribeListeners', keyArgs] as const
}

export function useGetActionDescribeListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeListeners<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeListenersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeListeners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeListenersKey() {
  return ['#Action=DescribeListeners', '/#Action=DescribeListeners', 'POST'] as const
}

export function usePostActionDescribeListeners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeListeners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeListenersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']> },
      ) => parseResponse(client['#Action=DescribeListeners'].$post(arg, clientOptions)),
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

export function getGetActionDescribeRulesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeRules', '/#Action=DescribeRules', keyArgs] as const
}

export function useGetActionDescribeRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeRules<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeRules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeRulesKey() {
  return ['#Action=DescribeRules', '/#Action=DescribeRules', 'POST'] as const
}

export function usePostActionDescribeRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeRules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeRules']['$post']> },
      ) => parseResponse(client['#Action=DescribeRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeSSLPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSSLPolicies', '/#Action=DescribeSSLPolicies', keyArgs] as const
}

export function useGetActionDescribeSSLPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeSSLPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSSLPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeSSLPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeSSLPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSSLPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeSSLPoliciesKey() {
  return ['#Action=DescribeSSLPolicies', '/#Action=DescribeSSLPolicies', 'POST'] as const
}

export function usePostActionDescribeSSLPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeSSLPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']> },
      ) => parseResponse(client['#Action=DescribeSSLPolicies'].$post(arg, clientOptions)),
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

export function getGetActionDescribeTargetGroupAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeTargetGroupAttributes',
    '/#Action=DescribeTargetGroupAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeTargetGroupAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetGroupAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeTargetGroupAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTargetGroupAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetGroupAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeTargetGroupAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTargetGroupAttributesKey() {
  return [
    '#Action=DescribeTargetGroupAttributes',
    '/#Action=DescribeTargetGroupAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeTargetGroupAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTargetGroupAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeTargetGroupAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeTargetGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTargetGroups', '/#Action=DescribeTargetGroups', keyArgs] as const
}

export function useGetActionDescribeTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTargetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTargetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTargetGroupsKey() {
  return ['#Action=DescribeTargetGroups', '/#Action=DescribeTargetGroups', 'POST'] as const
}

export function usePostActionDescribeTargetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTargetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']> },
      ) => parseResponse(client['#Action=DescribeTargetGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeTargetHealthKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTargetHealth', '/#Action=DescribeTargetHealth', keyArgs] as const
}

export function useGetActionDescribeTargetHealth<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTargetHealth'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeTargetHealth<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeTargetHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeTargetHealth'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeTargetHealthKey() {
  return ['#Action=DescribeTargetHealth', '/#Action=DescribeTargetHealth', 'POST'] as const
}

export function usePostActionDescribeTargetHealth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTargetHealth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeTargetHealthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']> },
      ) => parseResponse(client['#Action=DescribeTargetHealth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyListenerKey(
  args: InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyListener', '/#Action=ModifyListener', keyArgs] as const
}

export function useGetActionModifyListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyListener<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyListenerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyListener'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyListenerKey() {
  return ['#Action=ModifyListener', '/#Action=ModifyListener', 'POST'] as const
}

export function usePostActionModifyListener<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyListener']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyListener']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyListenerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyListener']['$post']> },
      ) => parseResponse(client['#Action=ModifyListener'].$post(arg, clientOptions)),
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

export function getGetActionModifyRuleKey(
  args: InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyRule', '/#Action=ModifyRule', keyArgs] as const
}

export function useGetActionModifyRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyRuleKey() {
  return ['#Action=ModifyRule', '/#Action=ModifyRule', 'POST'] as const
}

export function usePostActionModifyRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyRule']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyRule']['$post']> },
      ) => parseResponse(client['#Action=ModifyRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyTargetGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyTargetGroup', '/#Action=ModifyTargetGroup', keyArgs] as const
}

export function useGetActionModifyTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyTargetGroupKey() {
  return ['#Action=ModifyTargetGroup', '/#Action=ModifyTargetGroup', 'POST'] as const
}

export function usePostActionModifyTargetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyTargetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyTargetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyTargetGroupAttributesKey(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyTargetGroupAttributes',
    '/#Action=ModifyTargetGroupAttributes',
    keyArgs,
  ] as const
}

export function useGetActionModifyTargetGroupAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyTargetGroupAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyTargetGroupAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyTargetGroupAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionModifyTargetGroupAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyTargetGroupAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyTargetGroupAttributesKey() {
  return [
    '#Action=ModifyTargetGroupAttributes',
    '/#Action=ModifyTargetGroupAttributes',
    'POST',
  ] as const
}

export function usePostActionModifyTargetGroupAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyTargetGroupAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyTargetGroupAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRegisterTargetsKey(
  args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RegisterTargets', '/#Action=RegisterTargets', keyArgs] as const
}

export function useGetActionRegisterTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRegisterTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RegisterTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRegisterTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRegisterTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RegisterTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRegisterTargetsKey() {
  return ['#Action=RegisterTargets', '/#Action=RegisterTargets', 'POST'] as const
}

export function usePostActionRegisterTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRegisterTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']> },
      ) => parseResponse(client['#Action=RegisterTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveListenerCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RemoveListenerCertificates',
    '/#Action=RemoveListenerCertificates',
    keyArgs,
  ] as const
}

export function useGetActionRemoveListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveListenerCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemoveListenerCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveListenerCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveListenerCertificatesKey() {
  return [
    '#Action=RemoveListenerCertificates',
    '/#Action=RemoveListenerCertificates',
    'POST',
  ] as const
}

export function usePostActionRemoveListenerCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveListenerCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>
        },
      ) => parseResponse(client['#Action=RemoveListenerCertificates'].$post(arg, clientOptions)),
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

export function getGetActionSetIpAddressTypeKey(
  args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetIpAddressType', '/#Action=SetIpAddressType', keyArgs] as const
}

export function useGetActionSetIpAddressType<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIpAddressTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetIpAddressType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIpAddressType<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIpAddressTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetIpAddressType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIpAddressTypeKey() {
  return ['#Action=SetIpAddressType', '/#Action=SetIpAddressType', 'POST'] as const
}

export function usePostActionSetIpAddressType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIpAddressType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIpAddressTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']> },
      ) => parseResponse(client['#Action=SetIpAddressType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetRulePrioritiesKey(
  args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetRulePriorities', '/#Action=SetRulePriorities', keyArgs] as const
}

export function useGetActionSetRulePriorities<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetRulePrioritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetRulePriorities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetRulePriorities<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetRulePrioritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetRulePriorities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetRulePrioritiesKey() {
  return ['#Action=SetRulePriorities', '/#Action=SetRulePriorities', 'POST'] as const
}

export function usePostActionSetRulePriorities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetRulePriorities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetRulePrioritiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']> },
      ) => parseResponse(client['#Action=SetRulePriorities'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetSecurityGroupsKey(
  args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetSecurityGroups', '/#Action=SetSecurityGroups', keyArgs] as const
}

export function useGetActionSetSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetSecurityGroupsKey() {
  return ['#Action=SetSecurityGroups', '/#Action=SetSecurityGroups', 'POST'] as const
}

export function usePostActionSetSecurityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetSecurityGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']> },
      ) => parseResponse(client['#Action=SetSecurityGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetSubnetsKey(
  args: InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetSubnets', '/#Action=SetSubnets', keyArgs] as const
}

export function useGetActionSetSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetSubnets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSubnetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSubnets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetSubnetsKey() {
  return ['#Action=SetSubnets', '/#Action=SetSubnets', 'POST'] as const
}

export function usePostActionSetSubnets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSubnets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetSubnets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetSubnetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetSubnets']['$post']> },
      ) => parseResponse(client['#Action=SetSubnets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

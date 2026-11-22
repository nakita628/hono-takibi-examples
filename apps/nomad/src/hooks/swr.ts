import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAclKey() {
  return ['acl'] as const
}

export function getAllocationKey() {
  return ['allocation'] as const
}

export function getAllocationsKey() {
  return ['allocations'] as const
}

export function getDeploymentKey() {
  return ['deployment'] as const
}

export function getDeploymentsKey() {
  return ['deployments'] as const
}

export function getEvaluationKey() {
  return ['evaluation'] as const
}

export function getEvaluationsKey() {
  return ['evaluations'] as const
}

export function getJobKey() {
  return ['job'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getNamespaceKey() {
  return ['namespace'] as const
}

export function getNamespacesKey() {
  return ['namespaces'] as const
}

export function getNodeKey() {
  return ['node'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getOperatorKey() {
  return ['operator'] as const
}

export function getPluginKey() {
  return ['plugin'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getQuotaKey() {
  return ['quota'] as const
}

export function getQuotasKey() {
  return ['quotas'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getScalingKey() {
  return ['scaling'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getVarKey() {
  return ['var'] as const
}

export function getVarsKey() {
  return ['vars'] as const
}

export function getVolumeKey() {
  return ['volume'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getPostAclBootstrapKey() {
  return ['acl', '/acl/bootstrap', 'POST'] as const
}

export function usePostAclBootstrap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.bootstrap.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.acl.bootstrap.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAclBootstrapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.acl.bootstrap.$post> }) =>
        parseResponse(client.acl.bootstrap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAclPoliciesKey(args: InferRequestType<typeof client.acl.policies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/policies', keyArgs] as const
}

export function useGetAclPolicies<TError = unknown>(
  args: InferRequestType<typeof client.acl.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAclPolicies<TError = unknown>(
  args: InferRequestType<typeof client.acl.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAclPolicyPolicyNameKey(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/policy/:policyName', keyArgs] as const
}

export function useGetAclPolicyPolicyName<TError = unknown>(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
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
        ? getGetAclPolicyPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.policy[':policyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAclPolicyPolicyName<TError = unknown>(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
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
        ? getGetAclPolicyPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.policy[':policyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAclPolicyPolicyNameKey() {
  return ['acl', '/acl/policy/:policyName', 'POST'] as const
}

export function usePostAclPolicyPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.acl.policy)[':policyName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAclPolicyPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.acl.policy)[':policyName']['$post']> },
      ) => parseResponse(client.acl.policy[':policyName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAclPolicyPolicyNameKey() {
  return ['acl', '/acl/policy/:policyName', 'DELETE'] as const
}

export function useDeleteAclPolicyPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAclPolicyPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']> },
      ) => parseResponse(client.acl.policy[':policyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAclTokenKey(args: InferRequestType<typeof client.acl.token.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/token', keyArgs] as const
}

export function useGetAclToken<TError = unknown>(
  args: InferRequestType<typeof client.acl.token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAclToken<TError = unknown>(
  args: InferRequestType<typeof client.acl.token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAclTokenTokenAccessorKey(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/token/:tokenAccessor', keyArgs] as const
}

export function useGetAclTokenTokenAccessor<TError = unknown>(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
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
        ? getGetAclTokenTokenAccessorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.token[':tokenAccessor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAclTokenTokenAccessor<TError = unknown>(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
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
        ? getGetAclTokenTokenAccessorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.token[':tokenAccessor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAclTokenTokenAccessorKey() {
  return ['acl', '/acl/token/:tokenAccessor', 'POST'] as const
}

export function usePostAclTokenTokenAccessor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAclTokenTokenAccessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']> },
      ) => parseResponse(client.acl.token[':tokenAccessor'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAclTokenTokenAccessorKey() {
  return ['acl', '/acl/token/:tokenAccessor', 'DELETE'] as const
}

export function useDeleteAclTokenTokenAccessor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAclTokenTokenAccessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']> },
      ) => parseResponse(client.acl.token[':tokenAccessor'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAclTokenOnetimeKey() {
  return ['acl', '/acl/token/onetime', 'POST'] as const
}

export function usePostAclTokenOnetime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.onetime.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.acl.token.onetime.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAclTokenOnetimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.acl.token.onetime.$post> }) =>
        parseResponse(client.acl.token.onetime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAclTokenOnetimeExchangeKey() {
  return ['acl', '/acl/token/onetime/exchange', 'POST'] as const
}

export function usePostAclTokenOnetimeExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.onetime.exchange.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.acl.token.onetime.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAclTokenOnetimeExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.acl.token.onetime.exchange.$post> },
      ) => parseResponse(client.acl.token.onetime.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAclTokensKey(args: InferRequestType<typeof client.acl.tokens.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/tokens', keyArgs] as const
}

export function useGetAclTokens<TError = unknown>(
  args: InferRequestType<typeof client.acl.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAclTokens<TError = unknown>(
  args: InferRequestType<typeof client.acl.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAclTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.acl.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAllocationAllocIDKey(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allocation', '/allocation/:allocID', keyArgs] as const
}

export function useGetAllocationAllocID<TError = unknown>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
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
        ? getGetAllocationAllocIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation[':allocID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllocationAllocID<TError = unknown>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
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
        ? getGetAllocationAllocIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation[':allocID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAllocationAllocIDServicesKey(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allocation', '/allocation/:allocID/services', keyArgs] as const
}

export function useGetAllocationAllocIDServices<TError = unknown>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
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
        ? getGetAllocationAllocIDServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation[':allocID'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllocationAllocIDServices<TError = unknown>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
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
        ? getGetAllocationAllocIDServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation[':allocID'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAllocationAllocIDStopKey() {
  return ['allocation', '/allocation/:allocID/stop', 'POST'] as const
}

export function usePostAllocationAllocIDStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocation)[':allocID']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllocationAllocIDStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']> },
      ) => parseResponse(client.allocation[':allocID'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAllocationsKey(args: InferRequestType<typeof client.allocations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['allocations', '/allocations', keyArgs] as const
}

export function useGetAllocations<TError = unknown>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllocations<TError = unknown>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentDeploymentIDKey(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deployment', '/deployment/:deploymentID', keyArgs] as const
}

export function useGetDeploymentDeploymentID<TError = unknown>(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
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
        ? getGetDeploymentDeploymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deployment[':deploymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentDeploymentID<TError = unknown>(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
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
        ? getGetDeploymentDeploymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deployment[':deploymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentAllocationHealthDeploymentIDKey() {
  return ['deployment', '/deployment/allocation-health/:deploymentID', 'POST'] as const
}

export function usePostDeploymentAllocationHealthDeploymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deployment)['allocation-health'][':deploymentID']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deployment)['allocation-health'][':deploymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentAllocationHealthDeploymentIDKey()
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
            (typeof client.deployment)['allocation-health'][':deploymentID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deployment['allocation-health'][':deploymentID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentAllocationsDeploymentIDKey(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deployment', '/deployment/allocations/:deploymentID', keyArgs] as const
}

export function useGetDeploymentAllocationsDeploymentID<TError = unknown>(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
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
        ? getGetDeploymentAllocationsDeploymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deployment.allocations[':deploymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentAllocationsDeploymentID<TError = unknown>(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
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
        ? getGetDeploymentAllocationsDeploymentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deployment.allocations[':deploymentID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentFailDeploymentIDKey() {
  return ['deployment', '/deployment/fail/:deploymentID', 'POST'] as const
}

export function usePostDeploymentFailDeploymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.fail)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentFailDeploymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']> },
      ) => parseResponse(client.deployment.fail[':deploymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploymentPauseDeploymentIDKey() {
  return ['deployment', '/deployment/pause/:deploymentID', 'POST'] as const
}

export function usePostDeploymentPauseDeploymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.pause)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentPauseDeploymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']> },
      ) => parseResponse(client.deployment.pause[':deploymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploymentPromoteDeploymentIDKey() {
  return ['deployment', '/deployment/promote/:deploymentID', 'POST'] as const
}

export function usePostDeploymentPromoteDeploymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.promote)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentPromoteDeploymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']> },
      ) => parseResponse(client.deployment.promote[':deploymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploymentUnblockDeploymentIDKey() {
  return ['deployment', '/deployment/unblock/:deploymentID', 'POST'] as const
}

export function usePostDeploymentUnblockDeploymentID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.unblock)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentUnblockDeploymentIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']> },
      ) => parseResponse(client.deployment.unblock[':deploymentID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentsKey(args: InferRequestType<typeof client.deployments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['deployments', '/deployments', keyArgs] as const
}

export function useGetDeployments<TError = unknown>(
  args: InferRequestType<typeof client.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployments<TError = unknown>(
  args: InferRequestType<typeof client.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvaluationEvalIDKey(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['evaluation', '/evaluation/:evalID', keyArgs] as const
}

export function useGetEvaluationEvalID<TError = unknown>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
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
        ? getGetEvaluationEvalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluation[':evalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvaluationEvalID<TError = unknown>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
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
        ? getGetEvaluationEvalIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluation[':evalID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvaluationEvalIDAllocationsKey(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['evaluation', '/evaluation/:evalID/allocations', keyArgs] as const
}

export function useGetEvaluationEvalIDAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
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
        ? getGetEvaluationEvalIDAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluation[':evalID'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvaluationEvalIDAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
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
        ? getGetEvaluationEvalIDAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluation[':evalID'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvaluationsKey(args: InferRequestType<typeof client.evaluations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['evaluations', '/evaluations', keyArgs] as const
}

export function useGetEvaluations<TError = unknown>(
  args: InferRequestType<typeof client.evaluations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvaluationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvaluations<TError = unknown>(
  args: InferRequestType<typeof client.evaluations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEvaluationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobJobNameKey(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName', keyArgs] as const
}

export function useGetJobJobName<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobJobNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobName<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobJobNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobJobNameKey() {
  return ['job', '/job/:jobName', 'POST'] as const
}

export function usePostJobJobName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['$post']> },
      ) => parseResponse(client.job[':jobName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobJobNameKey() {
  return ['job', '/job/:jobName', 'DELETE'] as const
}

export function useDeleteJobJobName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobJobNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['$delete']> },
      ) => parseResponse(client.job[':jobName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobJobNameAllocationsKey(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/allocations', keyArgs] as const
}

export function useGetJobJobNameAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
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
        ? getGetJobJobNameAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
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
        ? getGetJobJobNameAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobJobNameDeploymentKey(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/deployment', keyArgs] as const
}

export function useGetJobJobNameDeployment<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
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
        ? getGetJobJobNameDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameDeployment<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
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
        ? getGetJobJobNameDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobJobNameDeploymentsKey(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/deployments', keyArgs] as const
}

export function useGetJobJobNameDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
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
        ? getGetJobJobNameDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
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
        ? getGetJobJobNameDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobJobNameDispatchKey() {
  return ['job', '/job/:jobName/dispatch', 'POST'] as const
}

export function usePostJobJobNameDispatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['dispatch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameDispatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']> },
      ) => parseResponse(client.job[':jobName'].dispatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobJobNameEvaluateKey() {
  return ['job', '/job/:jobName/evaluate', 'POST'] as const
}

export function usePostJobJobNameEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']> },
      ) => parseResponse(client.job[':jobName'].evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobJobNameEvaluationsKey(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/evaluations', keyArgs] as const
}

export function useGetJobJobNameEvaluations<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
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
        ? getGetJobJobNameEvaluationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameEvaluations<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
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
        ? getGetJobJobNameEvaluationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobJobNamePeriodicForceKey() {
  return ['job', '/job/:jobName/periodic/force', 'POST'] as const
}

export function usePostJobJobNamePeriodicForce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['periodic']['force']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNamePeriodicForceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']> },
      ) => parseResponse(client.job[':jobName'].periodic.force.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobJobNamePlanKey() {
  return ['job', '/job/:jobName/plan', 'POST'] as const
}

export function usePostJobJobNamePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['plan']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['plan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNamePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['plan']['$post']> },
      ) => parseResponse(client.job[':jobName'].plan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobJobNameRevertKey() {
  return ['job', '/job/:jobName/revert', 'POST'] as const
}

export function usePostJobJobNameRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['revert']['$post']> },
      ) => parseResponse(client.job[':jobName'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobJobNameScaleKey(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/scale', keyArgs] as const
}

export function useGetJobJobNameScale<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
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
        ? getGetJobJobNameScaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].scale.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameScale<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
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
        ? getGetJobJobNameScaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].scale.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobJobNameScaleKey() {
  return ['job', '/job/:jobName/scale', 'POST'] as const
}

export function usePostJobJobNameScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['scale']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameScaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['scale']['$post']> },
      ) => parseResponse(client.job[':jobName'].scale.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobJobNameStableKey() {
  return ['job', '/job/:jobName/stable', 'POST'] as const
}

export function usePostJobJobNameStable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['stable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.job)[':jobName']['stable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobJobNameStableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.job)[':jobName']['stable']['$post']> },
      ) => parseResponse(client.job[':jobName'].stable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobJobNameSummaryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/summary', keyArgs] as const
}

export function useGetJobJobNameSummary<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
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
        ? getGetJobJobNameSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameSummary<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
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
        ? getGetJobJobNameSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobJobNameVersionsKey(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/versions', keyArgs] as const
}

export function useGetJobJobNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
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
        ? getGetJobJobNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobJobNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
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
        ? getGetJobJobNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.job[':jobName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function useGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function usePostJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobs.$post> }) =>
        parseResponse(client.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsParseKey() {
  return ['jobs', '/jobs/parse', 'POST'] as const
}

export function usePostJobsParse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.parse.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jobs.parse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobs.parse.$post> }) =>
        parseResponse(client.jobs.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsKey(args: InferRequestType<typeof client.metrics.$get>) {
  return ['metrics', '/metrics', args] as const
}

export function useGetMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metrics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metrics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostNamespaceKey() {
  return ['namespace', '/namespace', 'POST'] as const
}

export function usePostNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespace.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.namespace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.namespace.$post> }) =>
        parseResponse(client.namespace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNamespaceNamespaceNameKey(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['namespace', '/namespace/:namespaceName', keyArgs] as const
}

export function useGetNamespaceNamespaceName<TError = unknown>(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
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
        ? getGetNamespaceNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespace[':namespaceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespaceNamespaceName<TError = unknown>(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
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
        ? getGetNamespaceNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespace[':namespaceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNamespaceNamespaceNameKey() {
  return ['namespace', '/namespace/:namespaceName', 'POST'] as const
}

export function usePostNamespaceNamespaceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespace)[':namespaceName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespaceNamespaceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.namespace)[':namespaceName']['$post']> },
      ) => parseResponse(client.namespace[':namespaceName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNamespaceNamespaceNameKey() {
  return ['namespace', '/namespace/:namespaceName', 'DELETE'] as const
}

export function useDeleteNamespaceNamespaceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNamespaceNamespaceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']> },
      ) => parseResponse(client.namespace[':namespaceName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesKey(args: InferRequestType<typeof client.namespaces.$get>) {
  const { header: _, ...keyArgs } = args
  return ['namespaces', '/namespaces', keyArgs] as const
}

export function useGetNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamespacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamespacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNodeIdKey(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['node', '/node/:nodeId', keyArgs] as const
}

export function useGetNodeNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNodeNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNodeNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNodeIdAllocationsKey(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['node', '/node/:nodeId/allocations', keyArgs] as const
}

export function useGetNodeNodeIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
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
        ? getGetNodeNodeIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node[':nodeId'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNodeIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
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
        ? getGetNodeNodeIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node[':nodeId'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodeNodeIdDrainKey() {
  return ['node', '/node/:nodeId/drain', 'POST'] as const
}

export function usePostNodeNodeIdDrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['drain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodeNodeIdDrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']> },
      ) => parseResponse(client.node[':nodeId'].drain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodeNodeIdEligibilityKey() {
  return ['node', '/node/:nodeId/eligibility', 'POST'] as const
}

export function usePostNodeNodeIdEligibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node)[':nodeId']['eligibility']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodeNodeIdEligibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']> },
      ) => parseResponse(client.node[':nodeId'].eligibility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodeNodeIdPurgeKey() {
  return ['node', '/node/:nodeId/purge', 'POST'] as const
}

export function usePostNodeNodeIdPurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['purge']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodeNodeIdPurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']> },
      ) => parseResponse(client.node[':nodeId'].purge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesKey(args: InferRequestType<typeof client.nodes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nodes', '/nodes', keyArgs] as const
}

export function useGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOperatorAutopilotConfigurationKey(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/autopilot/configuration', keyArgs] as const
}

export function useGetOperatorAutopilotConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
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
        ? getGetOperatorAutopilotConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.autopilot.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperatorAutopilotConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
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
        ? getGetOperatorAutopilotConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.autopilot.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOperatorAutopilotConfigurationKey() {
  return ['operator', '/operator/autopilot/configuration', 'PUT'] as const
}

export function usePutOperatorAutopilotConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.autopilot.configuration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.operator.autopilot.configuration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOperatorAutopilotConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.operator.autopilot.configuration.$put> },
      ) => parseResponse(client.operator.autopilot.configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperatorAutopilotHealthKey(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/autopilot/health', keyArgs] as const
}

export function useGetOperatorAutopilotHealth<TError = unknown>(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
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
        ? getGetOperatorAutopilotHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.autopilot.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperatorAutopilotHealth<TError = unknown>(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
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
        ? getGetOperatorAutopilotHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.autopilot.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOperatorRaftConfigurationKey(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/raft/configuration', keyArgs] as const
}

export function useGetOperatorRaftConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
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
        ? getGetOperatorRaftConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.raft.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperatorRaftConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
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
        ? getGetOperatorRaftConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.raft.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOperatorRaftPeerKey() {
  return ['operator', '/operator/raft/peer', 'DELETE'] as const
}

export function useDeleteOperatorRaftPeer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.peer.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.operator.raft.peer.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOperatorRaftPeerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.operator.raft.peer.$delete> },
      ) => parseResponse(client.operator.raft.peer.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperatorSchedulerConfigurationKey(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/scheduler/configuration', keyArgs] as const
}

export function useGetOperatorSchedulerConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
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
        ? getGetOperatorSchedulerConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.scheduler.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperatorSchedulerConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
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
        ? getGetOperatorSchedulerConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operator.scheduler.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperatorSchedulerConfigurationKey() {
  return ['operator', '/operator/scheduler/configuration', 'POST'] as const
}

export function usePostOperatorSchedulerConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.scheduler.configuration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.operator.scheduler.configuration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperatorSchedulerConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.operator.scheduler.configuration.$post> },
      ) => parseResponse(client.operator.scheduler.configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginCsiPluginIDKey(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['plugin', '/plugin/csi/:pluginID', keyArgs] as const
}

export function useGetPluginCsiPluginID<TError = unknown>(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
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
        ? getGetPluginCsiPluginIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugin.csi[':pluginID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginCsiPluginID<TError = unknown>(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
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
        ? getGetPluginCsiPluginIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugin.csi[':pluginID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPluginsKey(args: InferRequestType<typeof client.plugins.$get>) {
  const { header: _, ...keyArgs } = args
  return ['plugins', '/plugins', keyArgs] as const
}

export function useGetPlugins<TError = unknown>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plugins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlugins<TError = unknown>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plugins.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostQuotaKey() {
  return ['quota', '/quota', 'POST'] as const
}

export function usePostQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quota.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quota.$post> }) =>
        parseResponse(client.quota.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotaSpecNameKey(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quota', '/quota/:specName', keyArgs] as const
}

export function useGetQuotaSpecName<TError = unknown>(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotaSpecNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota[':specName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotaSpecName<TError = unknown>(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotaSpecNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota[':specName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotaSpecNameKey() {
  return ['quota', '/quota/:specName', 'POST'] as const
}

export function usePostQuotaSpecName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quota)[':specName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotaSpecNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quota)[':specName']['$post']> },
      ) => parseResponse(client.quota[':specName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQuotaSpecNameKey() {
  return ['quota', '/quota/:specName', 'DELETE'] as const
}

export function useDeleteQuotaSpecName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quota)[':specName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuotaSpecNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quota)[':specName']['$delete']> },
      ) => parseResponse(client.quota[':specName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotasKey(args: InferRequestType<typeof client.quotas.$get>) {
  const { header: _, ...keyArgs } = args
  return ['quotas', '/quotas', keyArgs] as const
}

export function useGetQuotas<TError = unknown>(
  args: InferRequestType<typeof client.quotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuotas<TError = unknown>(
  args: InferRequestType<typeof client.quotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRegionsKey() {
  return ['regions', '/regions'] as const
}

export function useGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScalingPoliciesKey(
  args: InferRequestType<typeof client.scaling.policies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['scaling', '/scaling/policies', keyArgs] as const
}

export function useGetScalingPolicies<TError = unknown>(
  args: InferRequestType<typeof client.scaling.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
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
        ? getGetScalingPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaling.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScalingPolicies<TError = unknown>(
  args: InferRequestType<typeof client.scaling.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
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
        ? getGetScalingPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaling.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScalingPolicyPolicyIDKey(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scaling', '/scaling/policy/:policyID', keyArgs] as const
}

export function useGetScalingPolicyPolicyID<TError = unknown>(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
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
        ? getGetScalingPolicyPolicyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaling.policy[':policyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScalingPolicyPolicyID<TError = unknown>(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
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
        ? getGetScalingPolicyPolicyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaling.policy[':policyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchKey() {
  return ['search', '/search', 'POST'] as const
}

export function usePostSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.$post> }) =>
        parseResponse(client.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchFuzzyKey() {
  return ['search', '/search/fuzzy', 'POST'] as const
}

export function usePostSearchFuzzy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.fuzzy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.fuzzy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchFuzzyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.fuzzy.$post> }) =>
        parseResponse(client.search.fuzzy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusLeaderKey(args: InferRequestType<typeof client.status.leader.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status/leader', keyArgs] as const
}

export function useGetStatusLeader<TError = unknown>(
  args: InferRequestType<typeof client.status.leader.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusLeaderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.leader.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusLeader<TError = unknown>(
  args: InferRequestType<typeof client.status.leader.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusLeaderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.leader.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusPeersKey(args: InferRequestType<typeof client.status.peers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status/peers', keyArgs] as const
}

export function useGetStatusPeers<TError = unknown>(
  args: InferRequestType<typeof client.status.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusPeers<TError = unknown>(
  args: InferRequestType<typeof client.status.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSystemGcKey() {
  return ['system', '/system/gc', 'PUT'] as const
}

export function usePutSystemGc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.gc.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.system.gc.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSystemGcKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.gc.$put> }) =>
        parseResponse(client.system.gc.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSystemReconcileSummariesKey() {
  return ['system', '/system/reconcile/summaries', 'PUT'] as const
}

export function usePutSystemReconcileSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reconcile.summaries.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.reconcile.summaries.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSystemReconcileSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.system.reconcile.summaries.$put> },
      ) => parseResponse(client.system.reconcile.summaries.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostValidateJobKey() {
  return ['validate', '/validate/job', 'POST'] as const
}

export function usePostValidateJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.job.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validate.job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validate.job.$post> }) =>
        parseResponse(client.validate.job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVarPathKey(args: InferRequestType<(typeof client.var)[':path']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['var', '/var/:path', keyArgs] as const
}

export function useGetVarPath<TError = unknown>(
  args: InferRequestType<(typeof client.var)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.var[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVarPath<TError = unknown>(
  args: InferRequestType<(typeof client.var)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.var[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVarPathKey() {
  return ['var', '/var/:path', 'PUT'] as const
}

export function usePutVarPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.var)[':path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVarPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.var)[':path']['$put']> }) =>
        parseResponse(client.var[':path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVarPathKey() {
  return ['var', '/var/:path', 'POST'] as const
}

export function usePostVarPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.var)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVarPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.var)[':path']['$post']> }) =>
        parseResponse(client.var[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVarPathKey() {
  return ['var', '/var/:path', 'DELETE'] as const
}

export function useDeleteVarPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.var)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVarPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.var)[':path']['$delete']> }) =>
        parseResponse(client.var[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVarsKey(args: InferRequestType<typeof client.vars.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vars', '/vars', keyArgs] as const
}

export function useGetVars<TError = unknown>(
  args: InferRequestType<typeof client.vars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vars.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVars<TError = unknown>(
  args: InferRequestType<typeof client.vars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vars.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVolumeCsiVolumeIdKey(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volume', '/volume/csi/:volumeId', keyArgs] as const
}

export function useGetVolumeCsiVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
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
        ? getGetVolumeCsiVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volume.csi[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumeCsiVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
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
        ? getGetVolumeCsiVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volume.csi[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVolumeCsiVolumeIdKey() {
  return ['volume', '/volume/csi/:volumeId', 'POST'] as const
}

export function usePostVolumeCsiVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumeCsiVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']> },
      ) => parseResponse(client.volume.csi[':volumeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVolumeCsiVolumeIdKey() {
  return ['volume', '/volume/csi/:volumeId', 'DELETE'] as const
}

export function useDeleteVolumeCsiVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumeCsiVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']> },
      ) => parseResponse(client.volume.csi[':volumeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVolumeCsiVolumeIdActionKey() {
  return ['volume', '/volume/csi/:volumeId/:action', 'POST'] as const
}

export function usePostVolumeCsiVolumeIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumeCsiVolumeIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']> },
      ) => parseResponse(client.volume.csi[':volumeId'][':action'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVolumeCsiVolumeIdActionKey() {
  return ['volume', '/volume/csi/:volumeId/:action', 'DELETE'] as const
}

export function useDeleteVolumeCsiVolumeIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumeCsiVolumeIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']> },
      ) => parseResponse(client.volume.csi[':volumeId'][':action'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesKey(args: InferRequestType<typeof client.volumes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes', keyArgs] as const
}

export function useGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVolumesKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function usePostVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.$post> }) =>
        parseResponse(client.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesExternalKey(
  args: InferRequestType<typeof client.volumes.external.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/external', keyArgs] as const
}

export function useGetVolumesExternal<TError = unknown>(
  args: InferRequestType<typeof client.volumes.external.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
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
        ? getGetVolumesExternalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.external.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesExternal<TError = unknown>(
  args: InferRequestType<typeof client.volumes.external.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
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
        ? getGetVolumesExternalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.external.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVolumesSnapshotKey(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/snapshot', keyArgs] as const
}

export function useGetVolumesSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
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
        ? getGetVolumesSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
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
        ? getGetVolumesSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVolumesSnapshotKey() {
  return ['volumes', '/volumes/snapshot', 'POST'] as const
}

export function usePostVolumesSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.volumes.snapshot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.snapshot.$post> }) =>
        parseResponse(client.volumes.snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVolumesSnapshotKey() {
  return ['volumes', '/volumes/snapshot', 'DELETE'] as const
}

export function useDeleteVolumesSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.volumes.snapshot.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumesSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.snapshot.$delete> }) =>
        parseResponse(client.volumes.snapshot.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

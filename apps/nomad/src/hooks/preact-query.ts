import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getPostAclBootstrapMutationKey() {
  return ['acl', '/acl/bootstrap', 'POST'] as const
}

export function getPostAclBootstrapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.bootstrap.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.acl.bootstrap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAclBootstrapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.acl.bootstrap.$post>) {
      return parseResponse(client.acl.bootstrap.$post(args, options))
    },
  })
}

export function usePostAclBootstrap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.bootstrap.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.acl.bootstrap.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAclBootstrapMutationOptions<TError, TOnMutateResult>(
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

export function getAclPoliciesQueryKey(args: InferRequestType<typeof client.acl.policies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/policies', keyArgs] as const
}

export function getAclPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.acl.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAclPoliciesQueryKey>
  >({
    queryKey: getAclPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.acl.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAclPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAclPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAclPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAclPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAclPolicyPolicyNameQueryKey(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/policy/:policyName', keyArgs] as const
}

export function getAclPolicyPolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAclPolicyPolicyNameQueryKey>
  >({
    queryKey: getAclPolicyPolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.acl.policy[':policyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAclPolicyPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAclPolicyPolicyNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAclPolicyPolicyNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAclPolicyPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAclPolicyPolicyNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAclPolicyPolicyNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAclPolicyPolicyNameMutationKey() {
  return ['acl', '/acl/policy/:policyName', 'POST'] as const
}

export function getPostAclPolicyPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.acl.policy)[':policyName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAclPolicyPolicyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.acl.policy)[':policyName']['$post']>) {
      return parseResponse(client.acl.policy[':policyName'].$post(args, options))
    },
  })
}

export function usePostAclPolicyPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.acl.policy)[':policyName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAclPolicyPolicyNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAclPolicyPolicyNameMutationKey() {
  return ['acl', '/acl/policy/:policyName', 'DELETE'] as const
}

export function getDeleteAclPolicyPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAclPolicyPolicyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']>) {
      return parseResponse(client.acl.policy[':policyName'].$delete(args, options))
    },
  })
}

export function useDeleteAclPolicyPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.policy)[':policyName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAclPolicyPolicyNameMutationOptions<TError, TOnMutateResult>(
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

export function getAclTokenQueryKey(args: InferRequestType<typeof client.acl.token.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/token', keyArgs] as const
}

export function getAclTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.acl.token.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAclTokenQueryKey>
  >({
    queryKey: getAclTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.acl.token.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAclToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAclTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAclToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAclTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAclTokenTokenAccessorQueryKey(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/token/:tokenAccessor', keyArgs] as const
}

export function getAclTokenTokenAccessorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAclTokenTokenAccessorQueryKey>
  >({
    queryKey: getAclTokenTokenAccessorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.acl.token[':tokenAccessor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAclTokenTokenAccessor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokenTokenAccessorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAclTokenTokenAccessorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAclTokenTokenAccessor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokenTokenAccessorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAclTokenTokenAccessorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAclTokenTokenAccessorMutationKey() {
  return ['acl', '/acl/token/:tokenAccessor', 'POST'] as const
}

export function getPostAclTokenTokenAccessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAclTokenTokenAccessorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']>) {
      return parseResponse(client.acl.token[':tokenAccessor'].$post(args, options))
    },
  })
}

export function usePostAclTokenTokenAccessor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAclTokenTokenAccessorMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAclTokenTokenAccessorMutationKey() {
  return ['acl', '/acl/token/:tokenAccessor', 'DELETE'] as const
}

export function getDeleteAclTokenTokenAccessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAclTokenTokenAccessorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']>,
    ) {
      return parseResponse(client.acl.token[':tokenAccessor'].$delete(args, options))
    },
  })
}

export function useDeleteAclTokenTokenAccessor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.acl.token)[':tokenAccessor']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAclTokenTokenAccessorMutationOptions<TError, TOnMutateResult>(
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

export function getPostAclTokenOnetimeMutationKey() {
  return ['acl', '/acl/token/onetime', 'POST'] as const
}

export function getPostAclTokenOnetimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.onetime.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.acl.token.onetime.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAclTokenOnetimeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.acl.token.onetime.$post>) {
      return parseResponse(client.acl.token.onetime.$post(args, options))
    },
  })
}

export function usePostAclTokenOnetime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.onetime.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.acl.token.onetime.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAclTokenOnetimeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAclTokenOnetimeExchangeMutationKey() {
  return ['acl', '/acl/token/onetime/exchange', 'POST'] as const
}

export function getPostAclTokenOnetimeExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.acl.token.onetime.exchange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.acl.token.onetime.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAclTokenOnetimeExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.acl.token.onetime.exchange.$post>) {
      return parseResponse(client.acl.token.onetime.exchange.$post(args, options))
    },
  })
}

export function usePostAclTokenOnetimeExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.acl.token.onetime.exchange.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.acl.token.onetime.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAclTokenOnetimeExchangeMutationOptions<TError, TOnMutateResult>(
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

export function getAclTokensQueryKey(args: InferRequestType<typeof client.acl.tokens.$get>) {
  const { header: _, ...keyArgs } = args
  return ['acl', '/acl/tokens', keyArgs] as const
}

export function getAclTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.acl.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAclTokensQueryKey>
  >({
    queryKey: getAclTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.acl.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAclTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.tokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAclTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAclTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.acl.tokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acl.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAclTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAclTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAllocationAllocIDQueryKey(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allocation', '/allocation/:allocID', keyArgs] as const
}

export function getAllocationAllocIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllocationAllocIDQueryKey>
  >({
    queryKey: getAllocationAllocIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocation[':allocID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAllocationAllocID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationAllocIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllocationAllocIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllocationAllocID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocation)[':allocID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationAllocIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllocationAllocIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAllocationAllocIDServicesQueryKey(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['allocation', '/allocation/:allocID/services', keyArgs] as const
}

export function getAllocationAllocIDServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllocationAllocIDServicesQueryKey>
  >({
    queryKey: getAllocationAllocIDServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocation[':allocID'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAllocationAllocIDServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationAllocIDServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAllocationAllocIDServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAllocationAllocIDServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocation)[':allocID']['services']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationAllocIDServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAllocationAllocIDServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAllocationAllocIDStopMutationKey() {
  return ['allocation', '/allocation/:allocID/stop', 'POST'] as const
}

export function getPostAllocationAllocIDStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allocation)[':allocID']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAllocationAllocIDStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']>,
    ) {
      return parseResponse(client.allocation[':allocID'].stop.$post(args, options))
    },
  })
}

export function usePostAllocationAllocIDStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.allocation)[':allocID']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAllocationAllocIDStopMutationOptions<TError, TOnMutateResult>(
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

export function getAllocationsQueryKey(args: InferRequestType<typeof client.allocations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['allocations', '/allocations', keyArgs] as const
}

export function getAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.allocations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAllocationsQueryKey>
  >({
    queryKey: getAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeploymentDeploymentIDQueryKey(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deployment', '/deployment/:deploymentID', keyArgs] as const
}

export function getDeploymentDeploymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentDeploymentIDQueryKey>
  >({
    queryKey: getDeploymentDeploymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deployment[':deploymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeploymentDeploymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentDeploymentIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentDeploymentIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentDeploymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment)[':deploymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentDeploymentIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentDeploymentIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDeploymentAllocationHealthDeploymentIDMutationKey() {
  return ['deployment', '/deployment/allocation-health/:deploymentID', 'POST'] as const
}

export function getPostDeploymentAllocationHealthDeploymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.deployment)['allocation-health'][':deploymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentAllocationHealthDeploymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployment)['allocation-health'][':deploymentID']['$post']
      >,
    ) {
      return parseResponse(
        client.deployment['allocation-health'][':deploymentID'].$post(args, options),
      )
    },
  })
}

export function usePostDeploymentAllocationHealthDeploymentID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.deployment)['allocation-health'][':deploymentID']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deployment)['allocation-health'][':deploymentID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentAllocationHealthDeploymentIDMutationOptions<
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

export function getDeploymentAllocationsDeploymentIDQueryKey(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deployment', '/deployment/allocations/:deploymentID', keyArgs] as const
}

export function getDeploymentAllocationsDeploymentIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentAllocationsDeploymentIDQueryKey>
  >({
    queryKey: getDeploymentAllocationsDeploymentIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deployment.allocations[':deploymentID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeploymentAllocationsDeploymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentAllocationsDeploymentIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentAllocationsDeploymentIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentAllocationsDeploymentID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.allocations)[':deploymentID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentAllocationsDeploymentIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentAllocationsDeploymentIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDeploymentFailDeploymentIDMutationKey() {
  return ['deployment', '/deployment/fail/:deploymentID', 'POST'] as const
}

export function getPostDeploymentFailDeploymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.fail)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentFailDeploymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']>,
    ) {
      return parseResponse(client.deployment.fail[':deploymentID'].$post(args, options))
    },
  })
}

export function usePostDeploymentFailDeploymentID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.fail)[':deploymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentFailDeploymentIDMutationOptions<
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

export function getPostDeploymentPauseDeploymentIDMutationKey() {
  return ['deployment', '/deployment/pause/:deploymentID', 'POST'] as const
}

export function getPostDeploymentPauseDeploymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.pause)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentPauseDeploymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']>,
    ) {
      return parseResponse(client.deployment.pause[':deploymentID'].$post(args, options))
    },
  })
}

export function usePostDeploymentPauseDeploymentID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.pause)[':deploymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentPauseDeploymentIDMutationOptions<
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

export function getPostDeploymentPromoteDeploymentIDMutationKey() {
  return ['deployment', '/deployment/promote/:deploymentID', 'POST'] as const
}

export function getPostDeploymentPromoteDeploymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.promote)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentPromoteDeploymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']>,
    ) {
      return parseResponse(client.deployment.promote[':deploymentID'].$post(args, options))
    },
  })
}

export function usePostDeploymentPromoteDeploymentID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.promote)[':deploymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentPromoteDeploymentIDMutationOptions<
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

export function getPostDeploymentUnblockDeploymentIDMutationKey() {
  return ['deployment', '/deployment/unblock/:deploymentID', 'POST'] as const
}

export function getPostDeploymentUnblockDeploymentIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deployment.unblock)[':deploymentID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentUnblockDeploymentIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']>,
    ) {
      return parseResponse(client.deployment.unblock[':deploymentID'].$post(args, options))
    },
  })
}

export function usePostDeploymentUnblockDeploymentID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deployment.unblock)[':deploymentID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentUnblockDeploymentIDMutationOptions<
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

export function getDeploymentsQueryKey(args: InferRequestType<typeof client.deployments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['deployments', '/deployments', keyArgs] as const
}

export function getDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deployments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeploymentsQueryKey>
  >({
    queryKey: getDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deployments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deployments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeploymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deployments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeploymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEvaluationEvalIDQueryKey(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['evaluation', '/evaluation/:evalID', keyArgs] as const
}

export function getEvaluationEvalIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvaluationEvalIDQueryKey>
  >({
    queryKey: getEvaluationEvalIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evaluation[':evalID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvaluationEvalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationEvalIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEvaluationEvalIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvaluationEvalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evaluation)[':evalID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationEvalIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEvaluationEvalIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEvaluationEvalIDAllocationsQueryKey(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['evaluation', '/evaluation/:evalID/allocations', keyArgs] as const
}

export function getEvaluationEvalIDAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvaluationEvalIDAllocationsQueryKey>
  >({
    queryKey: getEvaluationEvalIDAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evaluation[':evalID'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEvaluationEvalIDAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationEvalIDAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEvaluationEvalIDAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEvaluationEvalIDAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.evaluation)[':evalID']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationEvalIDAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEvaluationEvalIDAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEvaluationsQueryKey(args: InferRequestType<typeof client.evaluations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['evaluations', '/evaluations', keyArgs] as const
}

export function getEvaluationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.evaluations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvaluationsQueryKey>
  >({
    queryKey: getEvaluationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evaluations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvaluations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.evaluations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEvaluationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvaluations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.evaluations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.evaluations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEvaluationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEvaluationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobJobNameQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName', keyArgs] as const
}

export function getJobJobNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.job)[':jobName']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameQueryKey>
  >({
    queryKey: getJobJobNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobJobName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobJobNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobJobName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobJobNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostJobJobNameMutationKey() {
  return ['job', '/job/:jobName', 'POST'] as const
}

export function getPostJobJobNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['$post']>) {
      return parseResponse(client.job[':jobName'].$post(args, options))
    },
  })
}

export function usePostJobJobName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteJobJobNameMutationKey() {
  return ['job', '/job/:jobName', 'DELETE'] as const
}

export function getDeleteJobJobNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobJobNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['$delete']>) {
      return parseResponse(client.job[':jobName'].$delete(args, options))
    },
  })
}

export function useDeleteJobJobName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteJobJobNameMutationOptions<TError, TOnMutateResult>(
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

export function getJobJobNameAllocationsQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/allocations', keyArgs] as const
}

export function getJobJobNameAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameAllocationsQueryKey>
  >({
    queryKey: getJobJobNameAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getJobJobNameAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseJobJobNameAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getJobJobNameAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getJobJobNameDeploymentQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/deployment', keyArgs] as const
}

export function getJobJobNameDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameDeploymentQueryKey>
  >({
    queryKey: getJobJobNameDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].deployment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameDeploymentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobJobNameDeploymentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobJobNameDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['deployment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameDeploymentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobJobNameDeploymentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobJobNameDeploymentsQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/deployments', keyArgs] as const
}

export function getJobJobNameDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameDeploymentsQueryKey>
  >({
    queryKey: getJobJobNameDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getJobJobNameDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseJobJobNameDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getJobJobNameDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostJobJobNameDispatchMutationKey() {
  return ['job', '/job/:jobName/dispatch', 'POST'] as const
}

export function getPostJobJobNameDispatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['dispatch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameDispatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']>) {
      return parseResponse(client.job[':jobName'].dispatch.$post(args, options))
    },
  })
}

export function usePostJobJobNameDispatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['dispatch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameDispatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobJobNameEvaluateMutationKey() {
  return ['job', '/job/:jobName/evaluate', 'POST'] as const
}

export function getPostJobJobNameEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameEvaluateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']>) {
      return parseResponse(client.job[':jobName'].evaluate.$post(args, options))
    },
  })
}

export function usePostJobJobNameEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['evaluate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameEvaluateMutationOptions<TError, TOnMutateResult>(
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

export function getJobJobNameEvaluationsQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/evaluations', keyArgs] as const
}

export function getJobJobNameEvaluationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameEvaluationsQueryKey>
  >({
    queryKey: getJobJobNameEvaluationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].evaluations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameEvaluations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameEvaluationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getJobJobNameEvaluationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseJobJobNameEvaluations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['evaluations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameEvaluationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getJobJobNameEvaluationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostJobJobNamePeriodicForceMutationKey() {
  return ['job', '/job/:jobName/periodic/force', 'POST'] as const
}

export function getPostJobJobNamePeriodicForceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['periodic']['force']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNamePeriodicForceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']>,
    ) {
      return parseResponse(client.job[':jobName'].periodic.force.$post(args, options))
    },
  })
}

export function usePostJobJobNamePeriodicForce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['periodic']['force']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNamePeriodicForceMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobJobNamePlanMutationKey() {
  return ['job', '/job/:jobName/plan', 'POST'] as const
}

export function getPostJobJobNamePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['plan']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['plan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNamePlanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['plan']['$post']>) {
      return parseResponse(client.job[':jobName'].plan.$post(args, options))
    },
  })
}

export function usePostJobJobNamePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['plan']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['plan']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNamePlanMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobJobNameRevertMutationKey() {
  return ['job', '/job/:jobName/revert', 'POST'] as const
}

export function getPostJobJobNameRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['revert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameRevertMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['revert']['$post']>) {
      return parseResponse(client.job[':jobName'].revert.$post(args, options))
    },
  })
}

export function usePostJobJobNameRevert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['revert']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['revert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameRevertMutationOptions<TError, TOnMutateResult>(
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

export function getJobJobNameScaleQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/scale', keyArgs] as const
}

export function getJobJobNameScaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameScaleQueryKey>
  >({
    queryKey: getJobJobNameScaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].scale.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobJobNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameScaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobJobNameScaleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobJobNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameScaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobJobNameScaleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostJobJobNameScaleMutationKey() {
  return ['job', '/job/:jobName/scale', 'POST'] as const
}

export function getPostJobJobNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['scale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameScaleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['scale']['$post']>) {
      return parseResponse(client.job[':jobName'].scale.$post(args, options))
    },
  })
}

export function usePostJobJobNameScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['scale']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['scale']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameScaleMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobJobNameStableMutationKey() {
  return ['job', '/job/:jobName/stable', 'POST'] as const
}

export function getPostJobJobNameStableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['stable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobName']['stable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobJobNameStableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobName']['stable']['$post']>) {
      return parseResponse(client.job[':jobName'].stable.$post(args, options))
    },
  })
}

export function usePostJobJobNameStable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['stable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.job)[':jobName']['stable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobJobNameStableMutationOptions<TError, TOnMutateResult>(
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

export function getJobJobNameSummaryQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/summary', keyArgs] as const
}

export function getJobJobNameSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameSummaryQueryKey>
  >({
    queryKey: getJobJobNameSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobJobNameSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobJobNameSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobJobNameSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobJobNameVersionsQueryKey(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job', '/job/:jobName/versions', keyArgs] as const
}

export function getJobJobNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobNameVersionsQueryKey>
  >({
    queryKey: getJobJobNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.job[':jobName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useJobJobNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobJobNameVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobJobNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.job)[':jobName']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobJobNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobJobNameVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobsQueryKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >({
    queryKey: getJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsParseMutationKey() {
  return ['jobs', '/jobs/parse', 'POST'] as const
}

export function getPostJobsParseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.parse.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.parse.$post>) {
      return parseResponse(client.jobs.parse.$post(args, options))
    },
  })
}

export function usePostJobsParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.parse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.jobs.parse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsParseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetricsQueryKey(args: InferRequestType<typeof client.metrics.$get>) {
  return ['metrics', '/metrics', args] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNamespaceMutationKey() {
  return ['namespace', '/namespace', 'POST'] as const
}

export function getPostNamespaceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespace.$post>>>>>,
    TError,
    InferRequestType<typeof client.namespace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespaceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.namespace.$post>) {
      return parseResponse(client.namespace.$post(args, options))
    },
  })
}

export function usePostNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespace.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.namespace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNamespaceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNamespaceNamespaceNameQueryKey(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['namespace', '/namespace/:namespaceName', keyArgs] as const
}

export function getNamespaceNamespaceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespaceNamespaceNameQueryKey>
  >({
    queryKey: getNamespaceNamespaceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespace[':namespaceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNamespaceNamespaceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespaceNamespaceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNamespaceNamespaceNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNamespaceNamespaceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespaceNamespaceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNamespaceNamespaceNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNamespaceNamespaceNameMutationKey() {
  return ['namespace', '/namespace/:namespaceName', 'POST'] as const
}

export function getPostNamespaceNamespaceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespace)[':namespaceName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespaceNamespaceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.namespace)[':namespaceName']['$post']>) {
      return parseResponse(client.namespace[':namespaceName'].$post(args, options))
    },
  })
}

export function usePostNamespaceNamespaceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespace)[':namespaceName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNamespaceNamespaceNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNamespaceNamespaceNameMutationKey() {
  return ['namespace', '/namespace/:namespaceName', 'DELETE'] as const
}

export function getDeleteNamespaceNamespaceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNamespaceNamespaceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']>,
    ) {
      return parseResponse(client.namespace[':namespaceName'].$delete(args, options))
    },
  })
}

export function useDeleteNamespaceNamespaceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespace)[':namespaceName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNamespaceNamespaceNameMutationOptions<TError, TOnMutateResult>(
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

export function getNamespacesQueryKey(args: InferRequestType<typeof client.namespaces.$get>) {
  const { header: _, ...keyArgs } = args
  return ['namespaces', '/namespaces', keyArgs] as const
}

export function getNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.namespaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamespacesQueryKey>
  >({
    queryKey: getNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.namespaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.namespaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNodeNodeIdQueryKey(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['node', '/node/:nodeId', keyArgs] as const
}

export function getNodeNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.node)[':nodeId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNodeIdQueryKey>
  >({
    queryKey: getNodeNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node[':nodeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodeNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNodeNodeIdAllocationsQueryKey(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['node', '/node/:nodeId/allocations', keyArgs] as const
}

export function getNodeNodeIdAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNodeIdAllocationsQueryKey>
  >({
    queryKey: getNodeNodeIdAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node[':nodeId'].allocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodeNodeIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNodeIdAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodeNodeIdAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeNodeIdAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.node)[':nodeId']['allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNodeIdAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodeNodeIdAllocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNodeNodeIdDrainMutationKey() {
  return ['node', '/node/:nodeId/drain', 'POST'] as const
}

export function getPostNodeNodeIdDrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['drain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodeNodeIdDrainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']>) {
      return parseResponse(client.node[':nodeId'].drain.$post(args, options))
    },
  })
}

export function usePostNodeNodeIdDrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.node)[':nodeId']['drain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodeNodeIdDrainMutationOptions<TError, TOnMutateResult>(
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

export function getPostNodeNodeIdEligibilityMutationKey() {
  return ['node', '/node/:nodeId/eligibility', 'POST'] as const
}

export function getPostNodeNodeIdEligibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node)[':nodeId']['eligibility']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodeNodeIdEligibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']>,
    ) {
      return parseResponse(client.node[':nodeId'].eligibility.$post(args, options))
    },
  })
}

export function usePostNodeNodeIdEligibility<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.node)[':nodeId']['eligibility']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodeNodeIdEligibilityMutationOptions<TError, TOnMutateResult>(
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

export function getPostNodeNodeIdPurgeMutationKey() {
  return ['node', '/node/:nodeId/purge', 'POST'] as const
}

export function getPostNodeNodeIdPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.node)[':nodeId']['purge']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodeNodeIdPurgeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']>) {
      return parseResponse(client.node[':nodeId'].purge.$post(args, options))
    },
  })
}

export function usePostNodeNodeIdPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.node)[':nodeId']['purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodeNodeIdPurgeMutationOptions<TError, TOnMutateResult>(
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

export function getNodesQueryKey(args: InferRequestType<typeof client.nodes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nodes', '/nodes', keyArgs] as const
}

export function getNodesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesQueryKey>
  >({
    queryKey: getNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOperatorAutopilotConfigurationQueryKey(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/autopilot/configuration', keyArgs] as const
}

export function getOperatorAutopilotConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatorAutopilotConfigurationQueryKey>
  >({
    queryKey: getOperatorAutopilotConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operator.autopilot.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOperatorAutopilotConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorAutopilotConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOperatorAutopilotConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOperatorAutopilotConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.autopilot.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorAutopilotConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOperatorAutopilotConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOperatorAutopilotConfigurationMutationKey() {
  return ['operator', '/operator/autopilot/configuration', 'PUT'] as const
}

export function getPutOperatorAutopilotConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.autopilot.configuration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.operator.autopilot.configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOperatorAutopilotConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operator.autopilot.configuration.$put>) {
      return parseResponse(client.operator.autopilot.configuration.$put(args, options))
    },
  })
}

export function usePutOperatorAutopilotConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.autopilot.configuration.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.operator.autopilot.configuration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOperatorAutopilotConfigurationMutationOptions<
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

export function getOperatorAutopilotHealthQueryKey(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/autopilot/health', keyArgs] as const
}

export function getOperatorAutopilotHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatorAutopilotHealthQueryKey>
  >({
    queryKey: getOperatorAutopilotHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operator.autopilot.health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOperatorAutopilotHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorAutopilotHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOperatorAutopilotHealthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOperatorAutopilotHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.operator.autopilot.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorAutopilotHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOperatorAutopilotHealthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOperatorRaftConfigurationQueryKey(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/raft/configuration', keyArgs] as const
}

export function getOperatorRaftConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatorRaftConfigurationQueryKey>
  >({
    queryKey: getOperatorRaftConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operator.raft.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOperatorRaftConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorRaftConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOperatorRaftConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOperatorRaftConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.raft.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorRaftConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOperatorRaftConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOperatorRaftPeerMutationKey() {
  return ['operator', '/operator/raft/peer', 'DELETE'] as const
}

export function getDeleteOperatorRaftPeerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.peer.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.operator.raft.peer.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOperatorRaftPeerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operator.raft.peer.$delete>) {
      return parseResponse(client.operator.raft.peer.$delete(args, options))
    },
  })
}

export function useDeleteOperatorRaftPeer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.operator.raft.peer.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.operator.raft.peer.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOperatorRaftPeerMutationOptions<TError, TOnMutateResult>(
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

export function getOperatorSchedulerConfigurationQueryKey(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['operator', '/operator/scheduler/configuration', keyArgs] as const
}

export function getOperatorSchedulerConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatorSchedulerConfigurationQueryKey>
  >({
    queryKey: getOperatorSchedulerConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operator.scheduler.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOperatorSchedulerConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorSchedulerConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOperatorSchedulerConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOperatorSchedulerConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.scheduler.configuration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatorSchedulerConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOperatorSchedulerConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOperatorSchedulerConfigurationMutationKey() {
  return ['operator', '/operator/scheduler/configuration', 'POST'] as const
}

export function getPostOperatorSchedulerConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.operator.scheduler.configuration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.operator.scheduler.configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOperatorSchedulerConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operator.scheduler.configuration.$post>) {
      return parseResponse(client.operator.scheduler.configuration.$post(args, options))
    },
  })
}

export function usePostOperatorSchedulerConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.operator.scheduler.configuration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.operator.scheduler.configuration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOperatorSchedulerConfigurationMutationOptions<
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

export function getPluginCsiPluginIDQueryKey(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['plugin', '/plugin/csi/:pluginID', keyArgs] as const
}

export function getPluginCsiPluginIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginCsiPluginIDQueryKey>
  >({
    queryKey: getPluginCsiPluginIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugin.csi[':pluginID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePluginCsiPluginID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginCsiPluginIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginCsiPluginIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePluginCsiPluginID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugin.csi)[':pluginID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginCsiPluginIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginCsiPluginIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPluginsQueryKey(args: InferRequestType<typeof client.plugins.$get>) {
  const { header: _, ...keyArgs } = args
  return ['plugins', '/plugins', keyArgs] as const
}

export function getPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >({
    queryKey: getPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQuotaMutationKey() {
  return ['quota', '/quota', 'POST'] as const
}

export function getPostQuotaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$post>>>>>,
    TError,
    InferRequestType<typeof client.quota.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quota.$post>) {
      return parseResponse(client.quota.$post(args, options))
    },
  })
}

export function usePostQuota<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$post>>>>>,
        TError,
        InferRequestType<typeof client.quota.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuotaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuotaSpecNameQueryKey(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quota', '/quota/:specName', keyArgs] as const
}

export function getQuotaSpecNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotaSpecNameQueryKey>
  >({
    queryKey: getQuotaSpecNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quota[':specName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuotaSpecName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotaSpecNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuotaSpecNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuotaSpecName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotaSpecNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuotaSpecNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQuotaSpecNameMutationKey() {
  return ['quota', '/quota/:specName', 'POST'] as const
}

export function getPostQuotaSpecNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.quota)[':specName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotaSpecNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quota)[':specName']['$post']>) {
      return parseResponse(client.quota[':specName'].$post(args, options))
    },
  })
}

export function usePostQuotaSpecName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.quota)[':specName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuotaSpecNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuotaSpecNameMutationKey() {
  return ['quota', '/quota/:specName', 'DELETE'] as const
}

export function getDeleteQuotaSpecNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.quota)[':specName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuotaSpecNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quota)[':specName']['$delete']>) {
      return parseResponse(client.quota[':specName'].$delete(args, options))
    },
  })
}

export function useDeleteQuotaSpecName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':specName']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.quota)[':specName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuotaSpecNameMutationOptions<TError, TOnMutateResult>(
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

export function getQuotasQueryKey(args: InferRequestType<typeof client.quotas.$get>) {
  const { header: _, ...keyArgs } = args
  return ['quotas', '/quotas', keyArgs] as const
}

export function getQuotasQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotasQueryKey>
  >({
    queryKey: getQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuotas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuotas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScalingPoliciesQueryKey(
  args: InferRequestType<typeof client.scaling.policies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['scaling', '/scaling/policies', keyArgs] as const
}

export function getScalingPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scaling.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScalingPoliciesQueryKey>
  >({
    queryKey: getScalingPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scaling.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScalingPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scaling.policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScalingPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScalingPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScalingPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scaling.policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaling.policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScalingPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScalingPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScalingPolicyPolicyIDQueryKey(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scaling', '/scaling/policy/:policyID', keyArgs] as const
}

export function getScalingPolicyPolicyIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScalingPolicyPolicyIDQueryKey>
  >({
    queryKey: getScalingPolicyPolicyIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scaling.policy[':policyID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScalingPolicyPolicyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScalingPolicyPolicyIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getScalingPolicyPolicyIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScalingPolicyPolicyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scaling.policy)[':policyID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScalingPolicyPolicyIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getScalingPolicyPolicyIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSearchMutationKey() {
  return ['search', '/search', 'POST'] as const
}

export function getPostSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.$post>) {
      return parseResponse(client.search.$post(args, options))
    },
  })
}

export function usePostSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
        TError,
        InferRequestType<typeof client.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSearchFuzzyMutationKey() {
  return ['search', '/search/fuzzy', 'POST'] as const
}

export function getPostSearchFuzzyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.fuzzy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.fuzzy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchFuzzyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.fuzzy.$post>) {
      return parseResponse(client.search.fuzzy.$post(args, options))
    },
  })
}

export function usePostSearchFuzzy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.fuzzy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.search.fuzzy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchFuzzyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatusLeaderQueryKey(args: InferRequestType<typeof client.status.leader.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status/leader', keyArgs] as const
}

export function getStatusLeaderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.leader.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusLeaderQueryKey>
  >({
    queryKey: getStatusLeaderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.leader.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatusLeader<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.leader.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusLeaderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusLeaderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatusLeader<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.leader.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.leader.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusLeaderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusLeaderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatusPeersQueryKey(args: InferRequestType<typeof client.status.peers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['status', '/status/peers', keyArgs] as const
}

export function getStatusPeersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.peers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusPeersQueryKey>
  >({
    queryKey: getStatusPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.peers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatusPeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.peers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusPeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusPeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatusPeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.status.peers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.peers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusPeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusPeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSystemGcMutationKey() {
  return ['system', '/system/gc', 'PUT'] as const
}

export function getPutSystemGcMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.gc.$put>>>>>,
    TError,
    InferRequestType<typeof client.system.gc.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemGcMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.gc.$put>) {
      return parseResponse(client.system.gc.$put(args, options))
    },
  })
}

export function usePutSystemGc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.gc.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.system.gc.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSystemGcMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSystemReconcileSummariesMutationKey() {
  return ['system', '/system/reconcile/summaries', 'PUT'] as const
}

export function getPutSystemReconcileSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reconcile.summaries.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.system.reconcile.summaries.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemReconcileSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.reconcile.summaries.$put>) {
      return parseResponse(client.system.reconcile.summaries.$put(args, options))
    },
  })
}

export function usePutSystemReconcileSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.reconcile.summaries.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.system.reconcile.summaries.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSystemReconcileSummariesMutationOptions<TError, TOnMutateResult>(
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

export function getPostValidateJobMutationKey() {
  return ['validate', '/validate/job', 'POST'] as const
}

export function getPostValidateJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.job.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validate.job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validate.job.$post>) {
      return parseResponse(client.validate.job.$post(args, options))
    },
  })
}

export function usePostValidateJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.job.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.validate.job.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostValidateJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVarPathQueryKey(args: InferRequestType<(typeof client.var)[':path']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['var', '/var/:path', keyArgs] as const
}

export function getVarPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.var)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVarPathQueryKey>
  >({
    queryKey: getVarPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.var[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVarPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.var)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVarPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVarPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVarPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.var)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVarPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVarPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVarPathMutationKey() {
  return ['var', '/var/:path', 'PUT'] as const
}

export function getPutVarPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.var)[':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVarPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.var)[':path']['$put']>) {
      return parseResponse(client.var[':path'].$put(args, options))
    },
  })
}

export function usePutVarPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.var)[':path']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVarPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVarPathMutationKey() {
  return ['var', '/var/:path', 'POST'] as const
}

export function getPostVarPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.var)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVarPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.var)[':path']['$post']>) {
      return parseResponse(client.var[':path'].$post(args, options))
    },
  })
}

export function usePostVarPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.var)[':path']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVarPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVarPathMutationKey() {
  return ['var', '/var/:path', 'DELETE'] as const
}

export function getDeleteVarPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.var)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVarPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.var)[':path']['$delete']>) {
      return parseResponse(client.var[':path'].$delete(args, options))
    },
  })
}

export function useDeleteVarPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.var)[':path']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.var)[':path']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVarPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVarsQueryKey(args: InferRequestType<typeof client.vars.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vars', '/vars', keyArgs] as const
}

export function getVarsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarsQueryKey>
  >({
    queryKey: getVarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVars<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vars.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVars<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vars.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vars.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVolumeCsiVolumeIdQueryKey(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volume', '/volume/csi/:volumeId', keyArgs] as const
}

export function getVolumeCsiVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumeCsiVolumeIdQueryKey>
  >({
    queryKey: getVolumeCsiVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volume.csi[':volumeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVolumeCsiVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumeCsiVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumeCsiVolumeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumeCsiVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumeCsiVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumeCsiVolumeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumeCsiVolumeIdMutationKey() {
  return ['volume', '/volume/csi/:volumeId', 'POST'] as const
}

export function getPostVolumeCsiVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumeCsiVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']>) {
      return parseResponse(client.volume.csi[':volumeId'].$post(args, options))
    },
  })
}

export function usePostVolumeCsiVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumeCsiVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVolumeCsiVolumeIdMutationKey() {
  return ['volume', '/volume/csi/:volumeId', 'DELETE'] as const
}

export function getDeleteVolumeCsiVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumeCsiVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']>) {
      return parseResponse(client.volume.csi[':volumeId'].$delete(args, options))
    },
  })
}

export function useDeleteVolumeCsiVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumeCsiVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumeCsiVolumeIdActionMutationKey() {
  return ['volume', '/volume/csi/:volumeId/:action', 'POST'] as const
}

export function getPostVolumeCsiVolumeIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumeCsiVolumeIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>,
    ) {
      return parseResponse(client.volume.csi[':volumeId'][':action'].$post(args, options))
    },
  })
}

export function usePostVolumeCsiVolumeIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumeCsiVolumeIdActionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVolumeCsiVolumeIdActionMutationKey() {
  return ['volume', '/volume/csi/:volumeId/:action', 'DELETE'] as const
}

export function getDeleteVolumeCsiVolumeIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumeCsiVolumeIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>,
    ) {
      return parseResponse(client.volume.csi[':volumeId'][':action'].$delete(args, options))
    },
  })
}

export function useDeleteVolumeCsiVolumeIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumeCsiVolumeIdActionMutationOptions<TError, TOnMutateResult>(
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

export function getVolumesQueryKey(args: InferRequestType<typeof client.volumes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes', keyArgs] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
        TError,
        InferRequestType<typeof client.volumes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesExternalQueryKey(
  args: InferRequestType<typeof client.volumes.external.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/external', keyArgs] as const
}

export function getVolumesExternalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.external.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesExternalQueryKey>
  >({
    queryKey: getVolumesExternalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.external.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumesExternal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.external.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesExternal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.external.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.external.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVolumesSnapshotQueryKey(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/snapshot', keyArgs] as const
}

export function getVolumesSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesSnapshotQueryKey>
  >({
    queryKey: getVolumesSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumesSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesSnapshotMutationKey() {
  return ['volumes', '/volumes/snapshot', 'POST'] as const
}

export function getPostVolumesSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.volumes.snapshot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.snapshot.$post>) {
      return parseResponse(client.volumes.snapshot.$post(args, options))
    },
  })
}

export function usePostVolumesSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.volumes.snapshot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVolumesSnapshotMutationKey() {
  return ['volumes', '/volumes/snapshot', 'DELETE'] as const
}

export function getDeleteVolumesSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.volumes.snapshot.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.snapshot.$delete>) {
      return parseResponse(client.volumes.snapshot.$delete(args, options))
    },
  })
}

export function useDeleteVolumesSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.volumes.snapshot.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.volumes.snapshot.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumesSnapshotMutationOptions<TError, TOnMutateResult>(
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

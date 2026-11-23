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

export function getApiKey() {
  return ['api'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ClustersClusterArnScramSecretsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', keyArgs] as const
}

export function getV1ClustersClusterArnScramSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnScramSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn']['scram-secrets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnScramSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnScramSecretsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnScramSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnScramSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn']['scram-secrets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ClustersClusterArnScramSecretsMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', 'POST'] as const
}

export function getPostV1ClustersClusterArnScramSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersClusterArnScramSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$post(args, options))
    },
  })
}

export function usePostV1ClustersClusterArnScramSecrets<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>,
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
  const mutationDefaults = getPostV1ClustersClusterArnScramSecretsMutationOptions<
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

export function getPatchV1ClustersClusterArnScramSecretsMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', 'PATCH'] as const
}

export function getPatchV1ClustersClusterArnScramSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ClustersClusterArnScramSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$patch(args, options))
    },
  })
}

export function usePatchV1ClustersClusterArnScramSecrets<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>,
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
  const mutationDefaults = getPatchV1ClustersClusterArnScramSecretsMutationOptions<
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

export function getV1ClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.clusters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters', keyArgs] as const
}

export function getV1ClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.clusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.clusters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
          >,
          ReturnType<typeof getV1ClustersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ClustersMutationKey() {
  return ['v1', '/v1/clusters', 'POST'] as const
}

export function getPostV1ClustersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.clusters.$post>) {
      return parseResponse(client.v1.clusters.$post(args, options))
    },
  })
}

export function usePostV1Clusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.clusters.$post>,
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
  const mutationDefaults = getPostV1ClustersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2ClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.clusters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/clusters', keyArgs] as const
}

export function getApiV2ClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.clusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.clusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.clusters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ClustersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2ClustersMutationKey() {
  return ['api', '/api/v2/clusters', 'POST'] as const
}

export function getPostApiV2ClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2ClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.clusters.$post>) {
      return parseResponse(client.api.v2.clusters.$post(args, options))
    },
  })
}

export function usePostApiV2Clusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.clusters.$post>,
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
  const mutationDefaults = getPostApiV2ClustersMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations', keyArgs] as const
}

export function getV1ConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Configurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
            >
          >,
          ReturnType<typeof getV1ConfigurationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConfigurationsMutationKey() {
  return ['v1', '/v1/configurations', 'POST'] as const
}

export function getPostV1ConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.configurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.configurations.$post>) {
      return parseResponse(client.v1.configurations.$post(args, options))
    },
  })
}

export function usePostV1Configurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.configurations.$post>,
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
  const mutationDefaults = getPostV1ConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1VpcConnectionMutationKey() {
  return ['v1', '/v1/vpc-connection', 'POST'] as const
}

export function getPostV1VpcConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connection']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['vpc-connection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VpcConnectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['vpc-connection']['$post']>) {
      return parseResponse(client.v1['vpc-connection'].$post(args, options))
    },
  })
}

export function usePostV1VpcConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connection']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['vpc-connection']['$post']>,
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
  const mutationDefaults = getPostV1VpcConnectionMutationOptions<TError, TOnMutateResult>(
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

export function getV1ClustersClusterArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn', keyArgs] as const
}

export function getV1ClustersClusterArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ClustersClusterArnMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn', 'DELETE'] as const
}

export function getDeleteV1ClustersClusterArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ClustersClusterArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1ClustersClusterArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']>,
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
  const mutationDefaults = getDeleteV1ClustersClusterArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1ClustersClusterArnPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/policy', keyArgs] as const
}

export function getV1ClustersClusterArnPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ClustersClusterArnPolicyMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/policy', 'PUT'] as const
}

export function getPutV1ClustersClusterArnPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].policy.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ClustersClusterArnPolicyMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/policy', 'DELETE'] as const
}

export function getDeleteV1ClustersClusterArnPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ClustersClusterArnPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].policy.$delete(args, options))
    },
  })
}

export function useDeleteV1ClustersClusterArnPolicy<
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
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>,
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
  const mutationDefaults = getDeleteV1ClustersClusterArnPolicyMutationOptions<
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

export function getV1ConfigurationsArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations/:arn', keyArgs] as const
}

export function getV1ConfigurationsArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ConfigurationsArnMutationKey() {
  return ['v1', '/v1/configurations/:arn', 'PUT'] as const
}

export function getPutV1ConfigurationsArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configurations)[':arn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigurationsArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configurations)[':arn']['$put']>) {
      return parseResponse(client.v1.configurations[':arn'].$put(args, options))
    },
  })
}

export function usePutV1ConfigurationsArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.configurations)[':arn']['$put']>,
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
  const mutationDefaults = getPutV1ConfigurationsArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ConfigurationsArnMutationKey() {
  return ['v1', '/v1/configurations/:arn', 'DELETE'] as const
}

export function getDeleteV1ConfigurationsArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigurationsArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']>) {
      return parseResponse(client.v1.configurations[':arn'].$delete(args, options))
    },
  })
}

export function useDeleteV1ConfigurationsArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']>,
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
  const mutationDefaults = getDeleteV1ConfigurationsArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1VpcConnectionArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/vpc-connection/:arn', keyArgs] as const
}

export function getV1VpcConnectionArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VpcConnectionArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['vpc-connection'][':arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VpcConnectionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VpcConnectionArnQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VpcConnectionArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VpcConnectionArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['vpc-connection'][':arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1VpcConnectionArnMutationKey() {
  return ['v1', '/v1/vpc-connection/:arn', 'DELETE'] as const
}

export function getDeleteV1VpcConnectionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VpcConnectionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>,
    ) {
      return parseResponse(client.v1['vpc-connection'][':arn'].$delete(args, options))
    },
  })
}

export function useDeleteV1VpcConnectionArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>,
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
  const mutationDefaults = getDeleteV1VpcConnectionArnMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ClustersClusterArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/clusters/:clusterArn', keyArgs] as const
}

export function getApiV2ClustersClusterArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClustersClusterArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.clusters[':clusterArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClustersClusterArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ClustersClusterArnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClustersClusterArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClustersClusterArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.clusters[':clusterArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OperationsClusterOperationArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/operations/:clusterOperationArn', keyArgs] as const
}

export function getV1OperationsClusterOperationArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OperationsClusterOperationArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.operations[':clusterOperationArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OperationsClusterOperationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OperationsClusterOperationArnQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OperationsClusterOperationArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OperationsClusterOperationArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.operations[':clusterOperationArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2OperationsClusterOperationArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/operations/:clusterOperationArn', keyArgs] as const
}

export function getApiV2OperationsClusterOperationArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2OperationsClusterOperationArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.operations[':clusterOperationArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2OperationsClusterOperationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>
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
                  ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2OperationsClusterOperationArnQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2OperationsClusterOperationArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2OperationsClusterOperationArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.operations[':clusterOperationArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigurationsArnRevisionsRevisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations/:arn/revisions/:revision', keyArgs] as const
}

export function getV1ConfigurationsArnRevisionsRevisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsArnRevisionsRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':arn'].revisions[':revision'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsArnRevisionsRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']>
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
                    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
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
                    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsArnRevisionsRevisionQueryKey>
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
            ReturnType<(typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsArnRevisionsRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsArnRevisionsRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':arn'].revisions[':revision'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClustersClusterArnBootstrapBrokersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/bootstrap-brokers', keyArgs] as const
}

export function getV1ClustersClusterArnBootstrapBrokersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnBootstrapBrokersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn']['bootstrap-brokers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnBootstrapBrokers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
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
                    (typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']
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
                    (typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnBootstrapBrokersQueryKey>
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
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnBootstrapBrokersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnBootstrapBrokersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn']['bootstrap-brokers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CompatibleKafkaVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/compatible-kafka-versions', keyArgs] as const
}

export function getV1CompatibleKafkaVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CompatibleKafkaVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['compatible-kafka-versions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CompatibleKafkaVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CompatibleKafkaVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompatibleKafkaVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CompatibleKafkaVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['compatible-kafka-versions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClustersClusterArnOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/operations', keyArgs] as const
}

export function getV1ClustersClusterArnOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ClustersClusterArnOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/clusters/:clusterArn/operations', keyArgs] as const
}

export function getApiV2ClustersClusterArnOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClustersClusterArnOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.clusters[':clusterArn'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ClustersClusterArnOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
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
                  ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2ClustersClusterArnOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ClustersClusterArnOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClustersClusterArnOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.clusters[':clusterArn'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigurationsArnRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations/:arn/revisions', keyArgs] as const
}

export function getV1ConfigurationsArnRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsArnRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':arn'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsArnRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsArnRevisionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsArnRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsArnRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':arn'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1KafkaVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['kafka-versions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/kafka-versions', keyArgs] as const
}

export function getV1KafkaVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['kafka-versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1KafkaVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['kafka-versions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1KafkaVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['kafka-versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1KafkaVersionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KafkaVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1KafkaVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['kafka-versions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClustersClusterArnNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/nodes', keyArgs] as const
}

export function getV1ClustersClusterArnNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn'].nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnNodesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn'].nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1ClustersClusterArnClientVpcConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/clusters/:clusterArn/client-vpc-connections', keyArgs] as const
}

export function getV1ClustersClusterArnClientVpcConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterArnClientVpcConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':clusterArn']['client-vpc-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ClustersClusterArnClientVpcConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']>
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
                    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
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
                    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterArnClientVpcConnectionsQueryKey>
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
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterArnClientVpcConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterArnClientVpcConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':clusterArn']['client-vpc-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VpcConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connections']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/vpc-connections', keyArgs] as const
}

export function getV1VpcConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VpcConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['vpc-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VpcConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['vpc-connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VpcConnectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VpcConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VpcConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['vpc-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ClustersClusterArnClientVpcConnectionMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/client-vpc-connection', 'PUT'] as const
}

export function getPutV1ClustersClusterArnClientVpcConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnClientVpcConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':clusterArn']['client-vpc-connection'].$put(args, options),
      )
    },
  })
}

export function usePutV1ClustersClusterArnClientVpcConnection<
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
                    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']
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
  const mutationDefaults = getPutV1ClustersClusterArnClientVpcConnectionMutationOptions<
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

export function getPutV1ClustersClusterArnRebootBrokerMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/reboot-broker', 'PUT'] as const
}

export function getPutV1ClustersClusterArnRebootBrokerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnRebootBrokerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn']['reboot-broker'].$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnRebootBroker<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnRebootBrokerMutationOptions<
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

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getPutV1ClustersClusterArnNodesCountMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/count', 'PUT'] as const
}

export function getPutV1ClustersClusterArnNodesCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnNodesCountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].nodes.count.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnNodesCount<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnNodesCountMutationOptions<
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

export function getPutV1ClustersClusterArnNodesTypeMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/type', 'PUT'] as const
}

export function getPutV1ClustersClusterArnNodesTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnNodesTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].nodes.type.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnNodesType<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnNodesTypeMutationOptions<
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

export function getPutV1ClustersClusterArnNodesStorageMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/storage', 'PUT'] as const
}

export function getPutV1ClustersClusterArnNodesStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnNodesStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']
      >,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].nodes.storage.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnNodesStorage<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnNodesStorageMutationOptions<
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

export function getPutV1ClustersClusterArnConnectivityMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/connectivity', 'PUT'] as const
}

export function getPutV1ClustersClusterArnConnectivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnConnectivityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].connectivity.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnConnectivity<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnConnectivityMutationOptions<
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

export function getPutV1ClustersClusterArnConfigurationMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/configuration', 'PUT'] as const
}

export function getPutV1ClustersClusterArnConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].configuration.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnConfiguration<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnConfigurationMutationOptions<
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

export function getPutV1ClustersClusterArnVersionMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/version', 'PUT'] as const
}

export function getPutV1ClustersClusterArnVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].version.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnVersionMutationOptions<
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

export function getPutV1ClustersClusterArnMonitoringMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/monitoring', 'PUT'] as const
}

export function getPutV1ClustersClusterArnMonitoringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnMonitoringMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].monitoring.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnMonitoring<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnMonitoringMutationOptions<
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

export function getPatchV1ClustersClusterArnSecurityMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/security', 'PATCH'] as const
}

export function getPatchV1ClustersClusterArnSecurityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ClustersClusterArnSecurityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].security.$patch(args, options))
    },
  })
}

export function usePatchV1ClustersClusterArnSecurity<
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
                  ReturnType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>,
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
  const mutationDefaults = getPatchV1ClustersClusterArnSecurityMutationOptions<
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

export function getPutV1ClustersClusterArnStorageMutationKey() {
  return ['v1', '/v1/clusters/:clusterArn/storage', 'PUT'] as const
}

export function getPutV1ClustersClusterArnStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ClustersClusterArnStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>,
    ) {
      return parseResponse(client.v1.clusters[':clusterArn'].storage.$put(args, options))
    },
  })
}

export function usePutV1ClustersClusterArnStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>,
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
  const mutationDefaults = getPutV1ClustersClusterArnStorageMutationOptions<
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

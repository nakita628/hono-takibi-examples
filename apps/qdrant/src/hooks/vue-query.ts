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

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getClusterKey() {
  return ['cluster'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getHealthzKey() {
  return ['healthz'] as const
}

export function getIssuesKey() {
  return ['issues'] as const
}

export function getLivezKey() {
  return ['livez'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getQuotasKey() {
  return ['quotas'] as const
}

export function getReadyzKey() {
  return ['readyz'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getTelemetryKey() {
  return ['telemetry'] as const
}

export function getCollectionsCollectionNameShardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/shards', toValue(args)] as const
}

export function getCollectionsCollectionNameShardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameShardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].shards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameShards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameShardsQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameShardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameShardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].shards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionNameShardsMutationKey() {
  return ['collections', '/collections/:collection_name/shards', 'PUT'] as const
}

export function getPutCollectionsCollectionNameShardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameShardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_name'].shards.$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionNameShards<
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
                  ReturnType<(typeof client.collections)[':collection_name']['shards']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>,
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
  const mutationDefaults = getPutCollectionsCollectionNameShardsMutationOptions<
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

export function getPostCollectionsCollectionNameShardsDeleteMutationKey() {
  return ['collections', '/collections/:collection_name/shards/delete', 'POST'] as const
}

export function getPostCollectionsCollectionNameShardsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['shards']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameShardsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['shards']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].shards.delete.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNameShardsDelete<
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
                    (typeof client.collections)[':collection_name']['shards']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['shards']['delete']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNameShardsDeleteMutationOptions<
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

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTelemetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telemetry.$get>>,
) {
  return ['telemetry', '/telemetry', toValue(args)] as const
}

export function getTelemetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telemetry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelemetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telemetry.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTelemetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telemetry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
          >,
          ReturnType<typeof getTelemetryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTelemetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelemetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telemetry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
) {
  return ['metrics', '/metrics', toValue(args)] as const
}

export function getMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          ReturnType<typeof getHealthzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.healthz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLivezQueryKey() {
  return ['livez', '/livez'] as const
}

export function getLivezQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLivezQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.livez.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLivez<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
          ReturnType<typeof getLivezQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivezQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLivezQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.livez.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyzQueryKey() {
  return ['readyz', '/readyz'] as const
}

export function getReadyzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.readyz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReadyz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
          ReturnType<typeof getReadyzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.readyz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssuesQueryKey() {
  return ['issues', '/issues'] as const
}

export function getIssuesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIssuesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
          ReturnType<typeof getIssuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIssuesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.issues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIssuesMutationKey() {
  return ['issues', '/issues', 'DELETE'] as const
}

export function getDeleteIssuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssuesMutationKey(),
    async mutationFn() {
      return parseResponse(client.issues.$delete(undefined, options))
    },
  })
}

export function useDeleteIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteIssuesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClusterQueryKey() {
  return ['cluster', '/cluster'] as const
}

export function getClusterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClusterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cluster.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
          >,
          ReturnType<typeof getClusterQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClusterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cluster.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClusterTelemetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cluster.telemetry.$get>>,
) {
  return ['cluster', '/cluster/telemetry', toValue(args)] as const
}

export function getClusterTelemetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cluster.telemetry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClusterTelemetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cluster.telemetry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusterTelemetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cluster.telemetry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>
            >
          >,
          ReturnType<typeof getClusterTelemetryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClusterTelemetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClusterTelemetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cluster.telemetry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClusterRecoverMutationKey() {
  return ['cluster', '/cluster/recover', 'POST'] as const
}

export function getPostClusterRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.recover.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostClusterRecoverMutationKey(),
    async mutationFn() {
      return parseResponse(client.cluster.recover.$post(undefined, options))
    },
  })
}

export function usePostClusterRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cluster.recover.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostClusterRecoverMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClusterPeerPeerIdMutationKey() {
  return ['cluster', '/cluster/peer/:peer_id', 'DELETE'] as const
}

export function getDeleteClusterPeerPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.peer)[':peer_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClusterPeerPeerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']>) {
      return parseResponse(client.cluster.peer[':peer_id'].$delete(args, options))
    },
  })
}

export function useDeleteClusterPeerPeerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cluster.peer)[':peer_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']>,
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
  const mutationDefaults = getDeleteClusterPeerPeerIdMutationOptions<TError, TOnMutateResult>(
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

export function getQuotasQueryKey() {
  return ['quotas', '/quotas'] as const
}

export function getQuotasQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQuotasQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuotas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
          ReturnType<typeof getQuotasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQuotasQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.quotas.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutQuotasMutationKey() {
  return ['quotas', '/quotas', 'PUT'] as const
}

export function getPutQuotasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$put>>>>>,
    TError,
    InferRequestType<typeof client.quotas.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quotas.$put>) {
      return parseResponse(client.quotas.$put(args, options))
    },
  })
}

export function usePutQuotas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$put>>>>>,
          TError,
          InferRequestType<typeof client.quotas.$put>,
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
  const mutationDefaults = getPutQuotasMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCollectionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_name']['$get']>>,
) {
  return ['collections', '/collections/:collection_name', toValue(args)] as const
}

export function getCollectionsCollectionNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collection_name', 'PUT'] as const
}

export function getPutCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_name'].$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['$put']>,
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
  const mutationDefaults = getPutCollectionsCollectionNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collection_name', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection_name'].$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionName<
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
                Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
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
  const mutationDefaults = getDeleteCollectionsCollectionNameMutationOptions<
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

export function getPatchCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collection_name', 'PATCH'] as const
}

export function getPatchCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['$patch']>,
    ) {
      return parseResponse(client.collections[':collection_name'].$patch(args, options))
    },
  })
}

export function usePatchCollectionsCollectionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['$patch']>,
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
  const mutationDefaults = getPatchCollectionsCollectionNameMutationOptions<
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

export function getPostCollectionsAliasesMutationKey() {
  return ['collections', '/collections/aliases', 'POST'] as const
}

export function getPostCollectionsAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.aliases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.aliases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.aliases.$post>) {
      return parseResponse(client.collections.aliases.$post(args, options))
    },
  })
}

export function usePostCollectionsAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.aliases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collections.aliases.$post>,
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
  const mutationDefaults = getPostCollectionsAliasesMutationOptions<TError, TOnMutateResult>(
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

export function getPutCollectionsCollectionNameIndexMutationKey() {
  return ['collections', '/collections/:collection_name/index', 'PUT'] as const
}

export function getPutCollectionsCollectionNameIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_name'].index.$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionNameIndex<
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
                  ReturnType<(typeof client.collections)[':collection_name']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>,
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
  const mutationDefaults = getPutCollectionsCollectionNameIndexMutationOptions<
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

export function getCollectionsCollectionNameExistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/exists', toValue(args)] as const
}

export function getCollectionsCollectionNameExistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameExistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].exists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameExistsQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameExistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameExistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].exists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameIndexFieldNameMutationKey() {
  return ['collections', '/collections/:collection_name/index/:field_name', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameIndexFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameIndexFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].index[':field_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionNameIndexFieldName<
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
                    (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
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
  const mutationDefaults = getDeleteCollectionsCollectionNameIndexFieldNameMutationOptions<
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

export function getPutCollectionsCollectionNameVectorsVectorNameMutationKey() {
  return ['collections', '/collections/:collection_name/vectors/:vector_name', 'PUT'] as const
}

export function getPutCollectionsCollectionNameVectorsVectorNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameVectorsVectorNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].vectors[':vector_name'].$put(args, options),
      )
    },
  })
}

export function usePutCollectionsCollectionNameVectorsVectorName<
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
                    (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
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
  const mutationDefaults = getPutCollectionsCollectionNameVectorsVectorNameMutationOptions<
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

export function getDeleteCollectionsCollectionNameVectorsVectorNameMutationKey() {
  return ['collections', '/collections/:collection_name/vectors/:vector_name', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameVectorsVectorNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameVectorsVectorNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].vectors[':vector_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionNameVectorsVectorName<
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
                    (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
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
  const mutationDefaults = getDeleteCollectionsCollectionNameVectorsVectorNameMutationOptions<
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

export function getCollectionsCollectionNameClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/cluster', toValue(args)] as const
}

export function getCollectionsCollectionNameClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].cluster.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameClusterQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].cluster.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameClusterMutationKey() {
  return ['collections', '/collections/:collection_name/cluster', 'POST'] as const
}

export function getPostCollectionsCollectionNameClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>,
    ) {
      return parseResponse(client.collections[':collection_name'].cluster.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNameCluster<
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
                  ReturnType<(typeof client.collections)[':collection_name']['cluster']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionNameClusterMutationOptions<
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

export function getCollectionsCollectionNameOptimizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/optimizations', toValue(args)] as const
}

export function getCollectionsCollectionNameOptimizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameOptimizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].optimizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
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
                    (typeof client.collections)[':collection_name']['optimizations']['$get']
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
                    (typeof client.collections)[':collection_name']['optimizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameOptimizationsQueryKey>
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
            ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameOptimizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameOptimizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].optimizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionNameAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/aliases', toValue(args)] as const
}

export function getCollectionsCollectionNameAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameAliasesQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesQueryKey() {
  return ['aliases', '/aliases'] as const
}

export function getAliasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAliasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          ReturnType<typeof getAliasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAliasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameSnapshotsUploadMutationKey() {
  return ['collections', '/collections/:collection_name/snapshots/upload', 'POST'] as const
}

export function getPostCollectionsCollectionNameSnapshotsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameSnapshotsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].snapshots.upload.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNameSnapshotsUpload<
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
                    (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNameSnapshotsUploadMutationOptions<
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

export function getPutCollectionsCollectionNameSnapshotsRecoverMutationKey() {
  return ['collections', '/collections/:collection_name/snapshots/recover', 'PUT'] as const
}

export function getPutCollectionsCollectionNameSnapshotsRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameSnapshotsRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].snapshots.recover.$put(args, options),
      )
    },
  })
}

export function usePutCollectionsCollectionNameSnapshotsRecover<
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
                    (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
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
  const mutationDefaults = getPutCollectionsCollectionNameSnapshotsRecoverMutationOptions<
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

export function getCollectionsCollectionNameSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/snapshots', toValue(args)] as const
}

export function getCollectionsCollectionNameSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
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
                  ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameSnapshotsMutationKey() {
  return ['collections', '/collections/:collection_name/snapshots', 'POST'] as const
}

export function getPostCollectionsCollectionNameSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$post']>,
    ) {
      return parseResponse(client.collections[':collection_name'].snapshots.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNameSnapshots<
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
                  ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionNameSnapshotsMutationOptions<
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

export function getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_name/snapshots/:snapshot_name',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionNameSnapshotsSnapshotNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].snapshots[':snapshot_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameSnapshotsSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
    >
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
                    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
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
                    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey>
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
            ReturnType<
              (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].snapshots[':snapshot_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameSnapshotsSnapshotNameMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/snapshots/:snapshot_name',
    'DELETE',
  ] as const
}

export function getDeleteCollectionsCollectionNameSnapshotsSnapshotNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameSnapshotsSnapshotNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].snapshots[':snapshot_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionNameSnapshotsSnapshotName<
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
                    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
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
  const mutationDefaults = getDeleteCollectionsCollectionNameSnapshotsSnapshotNameMutationOptions<
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

export function getSnapshotsQueryKey() {
  return ['snapshots', '/snapshots'] as const
}

export function getSnapshotsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSnapshotsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
          >,
          ReturnType<typeof getSnapshotsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSnapshotsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnapshotsMutationKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function getPostSnapshotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    InferRequestType<typeof client.snapshots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snapshots.$post>) {
      return parseResponse(client.snapshots.$post(args, options))
    },
  })
}

export function usePostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snapshots.$post>,
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
  const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapshotsSnapshotNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>>,
) {
  return ['snapshots', '/snapshots/:snapshot_name', toValue(args)] as const
}

export function getSnapshotsSnapshotNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsSnapshotNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':snapshot_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotsSnapshotNameQueryKey>
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
          Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsSnapshotNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsSnapshotNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':snapshot_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSnapshotsSnapshotNameMutationKey() {
  return ['snapshots', '/snapshots/:snapshot_name', 'DELETE'] as const
}

export function getDeleteSnapshotsSnapshotNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapshotsSnapshotNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']>,
    ) {
      return parseResponse(client.snapshots[':snapshot_name'].$delete(args, options))
    },
  })
}

export function useDeleteSnapshotsSnapshotName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']>,
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
  const mutationDefaults = getDeleteSnapshotsSnapshotNameMutationOptions<TError, TOnMutateResult>(
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

export function getCollectionsCollectionNameShardsShardIdSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshot',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameShardsShardIdSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameShardsShardIdSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
    >
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotQueryKey>
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
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameShardsShardIdSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/upload',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots.upload.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCollectionsCollectionNameShardsShardIdSnapshotsUpload<
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
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
    getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadMutationOptions<
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

export function getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/recover',
    'PUT',
  ] as const
}

export function getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots.recover.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCollectionsCollectionNameShardsShardIdSnapshotsRecover<
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
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
    getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverMutationOptions<
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

export function getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameShardsShardIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
    >
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey>
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
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameShardsShardIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNameShardsShardIdSnapshots<
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNameShardsShardIdSnapshotsMutationOptions<
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

export function getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/:snapshot_name',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots[':snapshot_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
    >
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey>
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
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots[
            ':snapshot_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/:snapshot_name',
    'DELETE',
  ] as const
}

export function getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots[
          ':snapshot_name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
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
                    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
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
    getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameMutationOptions<
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

export function getCollectionsCollectionNamePointsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_name/points/:id', toValue(args)] as const
}

export function getCollectionsCollectionNamePointsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNamePointsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_name'].points[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNamePointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
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
                    (typeof client.collections)[':collection_name']['points'][':id']['$get']
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
                    (typeof client.collections)[':collection_name']['points'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNamePointsIdQueryKey>
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
            ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNamePointsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNamePointsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_name'].points[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionNamePointsMutationKey() {
  return ['collections', '/collections/:collection_name/points', 'PUT'] as const
}

export function getPutCollectionsCollectionNamePointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['points']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNamePointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_name'].points.$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionNamePoints<
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
                  ReturnType<(typeof client.collections)[':collection_name']['points']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>,
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
  const mutationDefaults = getPutCollectionsCollectionNamePointsMutationOptions<
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

export function getPostCollectionsCollectionNamePointsMutationKey() {
  return ['collections', '/collections/:collection_name/points', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['points']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>,
    ) {
      return parseResponse(client.collections[':collection_name'].points.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNamePoints<
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
                  ReturnType<(typeof client.collections)[':collection_name']['points']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsMutationOptions<
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

export function getPostCollectionsCollectionNamePointsDeleteMutationKey() {
  return ['collections', '/collections/:collection_name/points/delete', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.delete.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsDelete<
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
                    (typeof client.collections)[':collection_name']['points']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['delete']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsDeleteMutationOptions<
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

export function getPutCollectionsCollectionNamePointsVectorsMutationKey() {
  return ['collections', '/collections/:collection_name/points/vectors', 'PUT'] as const
}

export function getPutCollectionsCollectionNamePointsVectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['vectors']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['vectors']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNamePointsVectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['vectors']['$put']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.vectors.$put(args, options),
      )
    },
  })
}

export function usePutCollectionsCollectionNamePointsVectors<
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
                    (typeof client.collections)[':collection_name']['points']['vectors']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['vectors']['$put']
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
  const mutationDefaults = getPutCollectionsCollectionNamePointsVectorsMutationOptions<
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

export function getPostCollectionsCollectionNamePointsVectorsDeleteMutationKey() {
  return ['collections', '/collections/:collection_name/points/vectors/delete', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsVectorsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsVectorsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.vectors.delete.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsVectorsDelete<
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
                    (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsVectorsDeleteMutationOptions<
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

export function getPutCollectionsCollectionNamePointsPayloadMutationKey() {
  return ['collections', '/collections/:collection_name/points/payload', 'PUT'] as const
}

export function getPutCollectionsCollectionNamePointsPayloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['payload']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['payload']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionNamePointsPayloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['payload']['$put']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.payload.$put(args, options),
      )
    },
  })
}

export function usePutCollectionsCollectionNamePointsPayload<
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
                    (typeof client.collections)[':collection_name']['points']['payload']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['payload']['$put']
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
  const mutationDefaults = getPutCollectionsCollectionNamePointsPayloadMutationOptions<
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

export function getPostCollectionsCollectionNamePointsPayloadMutationKey() {
  return ['collections', '/collections/:collection_name/points/payload', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsPayloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['payload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['payload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsPayloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['payload']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.payload.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsPayload<
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
                    (typeof client.collections)[':collection_name']['points']['payload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['payload']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadMutationOptions<
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

export function getPostCollectionsCollectionNamePointsPayloadDeleteMutationKey() {
  return ['collections', '/collections/:collection_name/points/payload/delete', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsPayloadDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsPayloadDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.payload.delete.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsPayloadDelete<
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
                    (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadDeleteMutationOptions<
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

export function getPostCollectionsCollectionNamePointsPayloadClearMutationKey() {
  return ['collections', '/collections/:collection_name/points/payload/clear', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsPayloadClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsPayloadClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.payload.clear.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsPayloadClear<
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
                    (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadClearMutationOptions<
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

export function getPostCollectionsCollectionNamePointsBatchMutationKey() {
  return ['collections', '/collections/:collection_name/points/batch', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['batch']['$post']
      >,
    ) {
      return parseResponse(client.collections[':collection_name'].points.batch.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNamePointsBatch<
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
                    (typeof client.collections)[':collection_name']['points']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['batch']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsBatchMutationOptions<
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

export function getPostCollectionsCollectionNamePointsScrollMutationKey() {
  return ['collections', '/collections/:collection_name/points/scroll', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsScrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['scroll']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['scroll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsScrollMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['scroll']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.scroll.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsScroll<
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
                    (typeof client.collections)[':collection_name']['points']['scroll']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['scroll']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsScrollMutationOptions<
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

export function getPostCollectionsCollectionNamePointsCountMutationKey() {
  return ['collections', '/collections/:collection_name/points/count', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['count']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['count']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['count']['$post']
      >,
    ) {
      return parseResponse(client.collections[':collection_name'].points.count.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNamePointsCount<
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
                    (typeof client.collections)[':collection_name']['points']['count']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['count']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsCountMutationOptions<
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

export function getPostCollectionsCollectionNameFacetMutationKey() {
  return ['collections', '/collections/:collection_name/facet', 'POST'] as const
}

export function getPostCollectionsCollectionNameFacetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['facet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameFacetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>,
    ) {
      return parseResponse(client.collections[':collection_name'].facet.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNameFacet<
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
                  ReturnType<(typeof client.collections)[':collection_name']['facet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionNameFacetMutationOptions<
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

export function getPostCollectionsCollectionNamePointsQueryMutationKey() {
  return ['collections', '/collections/:collection_name/points/query', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection_name']['points']['query']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['query']['$post']
      >,
    ) {
      return parseResponse(client.collections[':collection_name'].points.query.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNamePointsQuery<
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
                    (typeof client.collections)[':collection_name']['points']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['query']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsQueryMutationOptions<
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

export function getPostCollectionsCollectionNamePointsQueryBatchMutationKey() {
  return ['collections', '/collections/:collection_name/points/query/batch', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsQueryBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsQueryBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.query.batch.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsQueryBatch<
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
                    (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsQueryBatchMutationOptions<
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

export function getPostCollectionsCollectionNamePointsQueryGroupsMutationKey() {
  return ['collections', '/collections/:collection_name/points/query/groups', 'POST'] as const
}

export function getPostCollectionsCollectionNamePointsQueryGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsQueryGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.query.groups.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsQueryGroups<
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
                    (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsQueryGroupsMutationOptions<
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

export function getPostCollectionsCollectionNamePointsSearchMatrixPairsMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/points/search/matrix/pairs',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionNamePointsSearchMatrixPairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsSearchMatrixPairsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.search.matrix.pairs.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsSearchMatrixPairs<
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
                    (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsSearchMatrixPairsMutationOptions<
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

export function getPostCollectionsCollectionNamePointsSearchMatrixOffsetsMutationKey() {
  return [
    'collections',
    '/collections/:collection_name/points/search/matrix/offsets',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionNamePointsSearchMatrixOffsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNamePointsSearchMatrixOffsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_name'].points.search.matrix.offsets.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNamePointsSearchMatrixOffsets<
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
                    (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNamePointsSearchMatrixOffsetsMutationOptions<
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

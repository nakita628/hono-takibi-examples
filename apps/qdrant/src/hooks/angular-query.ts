import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
) {
  return ['collections', '/collections/:collection_name/shards', args] as const
}

export function getCollectionsCollectionNameShardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameShardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].shards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameShards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameShardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNameShards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNameShardsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameShardsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameShardsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTelemetryQueryKey(args: InferRequestType<typeof client.telemetry.$get>) {
  return ['telemetry', '/telemetry', args] as const
}

export function getTelemetryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.telemetry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTelemetryQueryKey>
  >({
    queryKey: getTelemetryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telemetry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTelemetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.telemetry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTelemetryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelemetryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >({
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthzQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLivezQueryKey() {
  return ['livez', '/livez'] as const
}

export function getLivezQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivezQueryKey>
  >({
    queryKey: getLivezQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.livez.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLivez<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLivezQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLivezQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getReadyzQueryKey() {
  return ['readyz', '/readyz'] as const
}

export function getReadyzQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyzQueryKey>
  >({
    queryKey: getReadyzQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.readyz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReadyz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadyzQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIssuesQueryKey() {
  return ['issues', '/issues'] as const
}

export function getIssuesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssuesQueryKey>
  >({
    queryKey: getIssuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.issues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIssues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIssuesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIssuesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getClusterQueryKey() {
  return ['cluster', '/cluster'] as const
}

export function getClusterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClusterQueryKey>
  >({
    queryKey: getClusterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClusterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusterQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getClusterTelemetryQueryKey(
  args: InferRequestType<typeof client.cluster.telemetry.$get>,
) {
  return ['cluster', '/cluster/telemetry', args] as const
}

export function getClusterTelemetryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cluster.telemetry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClusterTelemetryQueryKey>
  >({
    queryKey: getClusterTelemetryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.telemetry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClusterTelemetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cluster.telemetry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterTelemetryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusterTelemetryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostClusterRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.recover.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClusterRecoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteClusterPeerPeerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClusterPeerPeerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQuotasQueryKey() {
  return ['quotas', '/quotas'] as const
}

export function getQuotasQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotasQueryKey>
  >({
    queryKey: getQuotasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuotas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotasQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutQuotas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$put>>>>>,
        TError,
        InferRequestType<typeof client.quotas.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutQuotasMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCollectionsCollectionNameQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
) {
  return ['collections', '/collections/:collection_name', args] as const
}

export function getCollectionsCollectionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCollectionsCollectionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCollectionsCollectionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.collections.aliases.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.collections.aliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsAliasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNameIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNameIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameExistsQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
) {
  return ['collections', '/collections/:collection_name/exists', args] as const
}

export function getCollectionsCollectionNameExistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameExistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].exists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameExistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionNameIndexFieldName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionNameIndexFieldNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNameVectorsVectorName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNameVectorsVectorNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionNameVectorsVectorName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionNameVectorsVectorNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameClusterQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
) {
  return ['collections', '/collections/:collection_name/cluster', args] as const
}

export function getCollectionsCollectionNameClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].cluster.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCollectionsCollectionNameClusterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameClusterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameOptimizationsQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
) {
  return ['collections', '/collections/:collection_name/optimizations', args] as const
}

export function getCollectionsCollectionNameOptimizationsQueryOptions<
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
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameOptimizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].optimizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameOptimizations<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['optimizations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameOptimizationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameAliasesQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
) {
  return ['collections', '/collections/:collection_name/aliases', args] as const
}

export function getCollectionsCollectionNameAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCollectionsCollectionNameAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameAliasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAliasesQueryKey() {
  return ['aliases', '/aliases'] as const
}

export function getAliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >({
    queryKey: getAliasesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameSnapshotsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameSnapshotsUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNameSnapshotsRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNameSnapshotsRecoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameSnapshotsQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
) {
  return ['collections', '/collections/:collection_name/snapshots', args] as const
}

export function getCollectionsCollectionNameSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCollectionsCollectionNameSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/snapshots/:snapshot_name', args] as const
}

export function getCollectionsCollectionNameSnapshotsSnapshotNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameSnapshotsSnapshotNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].snapshots[':snapshot_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameSnapshotsSnapshotName<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameSnapshotsSnapshotNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionNameSnapshotsSnapshotName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionNameSnapshotsSnapshotNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnapshotsQueryKey() {
  return ['snapshots', '/snapshots'] as const
}

export function getSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotsQueryKey>
  >({
    queryKey: getSnapshotsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapshotsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.snapshots.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnapshotsSnapshotNameQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
) {
  return ['snapshots', '/snapshots/:snapshot_name', args] as const
}

export function getSnapshotsSnapshotNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnapshotsSnapshotNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':snapshot_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnapshotsSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSnapshotsSnapshotNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSnapshotsSnapshotName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSnapshotsSnapshotNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameShardsShardIdSnapshotQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/shards/:shard_id/snapshot', args] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotQueryOptions<
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
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameShardsShardIdSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameShardsShardIdSnapshot<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameShardsShardIdSnapshotQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameShardsShardIdSnapshotsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNameShardsShardIdSnapshotsRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/shards/:shard_id/snapshots', args] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsQueryOptions<
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
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameShardsShardIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNameShardsShardIdSnapshots<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameShardsShardIdSnapshotsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameShardsShardIdSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameShardsShardIdSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/:snapshot_name',
    args,
  ] as const
}

export function getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].shards[':shard_id'].snapshots[':snapshot_name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNamePointsIdQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
) {
  return ['collections', '/collections/:collection_name/points/:id', args] as const
}

export function getCollectionsCollectionNamePointsIdQueryOptions<
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
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCollectionsCollectionNamePointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].points[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionNamePointsId<
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
  args: () => InferRequestType<
    (typeof client.collections)[':collection_name']['points'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionNamePointsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNamePoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNamePointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNamePointsVectors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNamePointsVectorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsVectorsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsVectorsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCollectionsCollectionNamePointsPayload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionNamePointsPayloadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsPayload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsPayloadDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsPayloadClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsPayloadClearMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsScroll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsScrollMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsCount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsCountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNameFacet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNameFacetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsQueryBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsQueryBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsQueryGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsQueryGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsSearchMatrixPairs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionNamePointsSearchMatrixPairsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionNamePointsSearchMatrixOffsets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCollectionsCollectionNamePointsSearchMatrixOffsetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

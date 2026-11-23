import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetCollectionsCollectionNameShardsKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
) {
  return ['collections', '/collections/:collection_name/shards', args] as const
}

export function useGetCollectionsCollectionNameShards<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
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
        ? getGetCollectionsCollectionNameShardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].shards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameShards<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
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
        ? getGetCollectionsCollectionNameShardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].shards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameShardsKey() {
  return ['collections', '/collections/:collection_name/shards', 'PUT'] as const
}

export function usePutCollectionsCollectionNameShards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['shards']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameShardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>
        },
      ) => parseResponse(client.collections[':collection_name'].shards.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameShardsDeleteKey() {
  return ['collections', '/collections/:collection_name/shards/delete', 'POST'] as const
}

export function usePostCollectionsCollectionNameShardsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['shards']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameShardsDeleteKey()
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
            (typeof client.collections)[':collection_name']['shards']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].shards.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTelemetryKey(args: InferRequestType<typeof client.telemetry.$get>) {
  return ['telemetry', '/telemetry', args] as const
}

export function useGetTelemetry<TError = unknown>(
  args: InferRequestType<typeof client.telemetry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTelemetryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telemetry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelemetry<TError = unknown>(
  args: InferRequestType<typeof client.telemetry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTelemetryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telemetry.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telemetry.$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetHealthzKey() {
  return ['healthz', '/healthz'] as const
}

export function useGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLivezKey() {
  return ['livez', '/livez'] as const
}

export function useGetLivez<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLivezKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.livez.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLivez<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLivezKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.livez.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.livez.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadyzKey() {
  return ['readyz', '/readyz'] as const
}

export function useGetReadyz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readyz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReadyz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readyz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIssuesKey() {
  return ['issues', '/issues'] as const
}

export function useGetIssues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIssuesKey() {
  return ['issues', '/issues', 'DELETE'] as const
}

export function useDeleteIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.issues.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClusterKey() {
  return ['cluster', '/cluster'] as const
}

export function useGetCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClusterTelemetryKey(
  args: InferRequestType<typeof client.cluster.telemetry.$get>,
) {
  return ['cluster', '/cluster/telemetry', args] as const
}

export function useGetClusterTelemetry<TError = unknown>(
  args: InferRequestType<typeof client.cluster.telemetry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
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
        ? getGetClusterTelemetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.telemetry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterTelemetry<TError = unknown>(
  args: InferRequestType<typeof client.cluster.telemetry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
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
        ? getGetClusterTelemetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.telemetry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.telemetry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClusterRecoverKey() {
  return ['cluster', '/cluster/recover', 'POST'] as const
}

export function usePostClusterRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.recover.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cluster.recover.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClusterPeerPeerIdKey() {
  return ['cluster', '/cluster/peer/:peer_id', 'DELETE'] as const
}

export function useDeleteClusterPeerPeerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.peer)[':peer_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClusterPeerPeerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']> },
      ) => parseResponse(client.cluster.peer[':peer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotasKey() {
  return ['quotas', '/quotas'] as const
}

export function useGetQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotasKey() {
  return ['quotas', '/quotas', 'PUT'] as const
}

export function usePutQuotas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotas.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quotas.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quotas.$put> }) =>
        parseResponse(client.quotas.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsKey() {
  return ['collections', '/collections'] as const
}

export function useGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
) {
  return ['collections', '/collections/:collection_name', args] as const
}

export function useGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
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
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
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
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collection_name', 'PUT'] as const
}

export function usePutCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.collections)[':collection_name']['$put']> },
      ) => parseResponse(client.collections[':collection_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collection_name', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collection_name']['$delete']> },
      ) => parseResponse(client.collections[':collection_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collection_name', 'PATCH'] as const
}

export function usePatchCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collection_name']['$patch']> },
      ) => parseResponse(client.collections[':collection_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsAliasesKey() {
  return ['collections', '/collections/aliases', 'POST'] as const
}

export function usePostCollectionsAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.aliases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections.aliases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.aliases.$post> }) =>
        parseResponse(client.collections.aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameIndexKey() {
  return ['collections', '/collections/:collection_name/index', 'PUT'] as const
}

export function usePutCollectionsCollectionNameIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>
        },
      ) => parseResponse(client.collections[':collection_name'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameExistsKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
) {
  return ['collections', '/collections/:collection_name/exists', args] as const
}

export function useGetCollectionsCollectionNameExists<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
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
        ? getGetCollectionsCollectionNameExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameExists<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
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
        ? getGetCollectionsCollectionNameExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['exists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameIndexFieldNameKey() {
  return ['collections', '/collections/:collection_name/index/:field_name', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionNameIndexFieldName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameIndexFieldNameKey()
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
            (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].index[':field_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameVectorsVectorNameKey() {
  return ['collections', '/collections/:collection_name/vectors/:vector_name', 'PUT'] as const
}

export function usePutCollectionsCollectionNameVectorsVectorName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameVectorsVectorNameKey()
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
            (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].vectors[':vector_name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameVectorsVectorNameKey() {
  return ['collections', '/collections/:collection_name/vectors/:vector_name', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionNameVectorsVectorName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameVectorsVectorNameKey()
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
            (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].vectors[':vector_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameClusterKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
) {
  return ['collections', '/collections/:collection_name/cluster', args] as const
}

export function useGetCollectionsCollectionNameCluster<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
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
        ? getGetCollectionsCollectionNameClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].cluster.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameCluster<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
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
        ? getGetCollectionsCollectionNameClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].cluster.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameClusterKey() {
  return ['collections', '/collections/:collection_name/cluster', 'POST'] as const
}

export function usePostCollectionsCollectionNameCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['cluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>
        },
      ) => parseResponse(client.collections[':collection_name'].cluster.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameOptimizationsKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
) {
  return ['collections', '/collections/:collection_name/optimizations', args] as const
}

export function useGetCollectionsCollectionNameOptimizations<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
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
        ? getGetCollectionsCollectionNameOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].optimizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameOptimizations<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
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
        ? getGetCollectionsCollectionNameOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['optimizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].optimizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameAliasesKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
) {
  return ['collections', '/collections/:collection_name/aliases', args] as const
}

export function useGetCollectionsCollectionNameAliases<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
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
        ? getGetCollectionsCollectionNameAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameAliases<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
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
        ? getGetCollectionsCollectionNameAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_name']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesKey() {
  return ['aliases', '/aliases'] as const
}

export function useGetAliases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameSnapshotsUploadKey() {
  return ['collections', '/collections/:collection_name/snapshots/upload', 'POST'] as const
}

export function usePostCollectionsCollectionNameSnapshotsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameSnapshotsUploadKey()
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
            (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].snapshots.upload.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameSnapshotsRecoverKey() {
  return ['collections', '/collections/:collection_name/snapshots/recover', 'PUT'] as const
}

export function usePutCollectionsCollectionNameSnapshotsRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameSnapshotsRecoverKey()
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
            (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].snapshots.recover.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameSnapshotsKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
) {
  return ['collections', '/collections/:collection_name/snapshots', args] as const
}

export function useGetCollectionsCollectionNameSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
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
        ? getGetCollectionsCollectionNameSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
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
        ? getGetCollectionsCollectionNameSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_name'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameSnapshotsKey() {
  return ['collections', '/collections/:collection_name/snapshots', 'POST'] as const
}

export function usePostCollectionsCollectionNameSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameSnapshotsKey()
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
            (typeof client.collections)[':collection_name']['snapshots']['$post']
          >
        },
      ) =>
        parseResponse(client.collections[':collection_name'].snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameSnapshotsSnapshotNameKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/snapshots/:snapshot_name', args] as const
}

export function useGetCollectionsCollectionNameSnapshotsSnapshotName<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].snapshots[':snapshot_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameSnapshotsSnapshotName<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].snapshots[':snapshot_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameSnapshotsSnapshotNameKey() {
  return [
    'collections',
    '/collections/:collection_name/snapshots/:snapshot_name',
    'DELETE',
  ] as const
}

export function useDeleteCollectionsCollectionNameSnapshotsSnapshotName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameSnapshotsSnapshotNameKey()
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
            (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].snapshots[':snapshot_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsKey() {
  return ['snapshots', '/snapshots'] as const
}

export function useGetSnapshots<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshots<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnapshotsKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function usePostSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snapshots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snapshots.$post> }) =>
        parseResponse(client.snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsSnapshotNameKey(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
) {
  return ['snapshots', '/snapshots/:snapshot_name', args] as const
}

export function useGetSnapshotsSnapshotName<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
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
        ? getGetSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':snapshot_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsSnapshotName<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
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
        ? getGetSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':snapshot_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSnapshotsSnapshotNameKey() {
  return ['snapshots', '/snapshots/:snapshot_name', 'DELETE'] as const
}

export function useDeleteSnapshotsSnapshotName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':snapshot_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnapshotsSnapshotNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']> },
      ) => parseResponse(client.snapshots[':snapshot_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameShardsShardIdSnapshotKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/shards/:shard_id/snapshot', args] as const
}

export function useGetCollectionsCollectionNameShardsShardIdSnapshot<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameShardsShardIdSnapshot<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/upload',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionNameShardsShardIdSnapshotsUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameShardsShardIdSnapshotsUploadKey()
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
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.upload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/recover',
    'PUT',
  ] as const
}

export function usePutCollectionsCollectionNameShardsShardIdSnapshotsRecover<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNameShardsShardIdSnapshotsRecoverKey()
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
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.recover.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameShardsShardIdSnapshotsKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
) {
  return ['collections', '/collections/:collection_name/shards/:shard_id/snapshots', args] as const
}

export function useGetCollectionsCollectionNameShardsShardIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameShardsShardIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameShardsShardIdSnapshotsKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionNameShardsShardIdSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameShardsShardIdSnapshotsKey()
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
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameKey(
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

export function useGetCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots[
            ':snapshot_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots[
            ':snapshot_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameKey() {
  return [
    'collections',
    '/collections/:collection_name/shards/:shard_id/snapshots/:snapshot_name',
    'DELETE',
  ] as const
}

export function useDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameKey()
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
            (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].shards[':shard_id'].snapshots[
            ':snapshot_name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNamePointsIdKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
) {
  return ['collections', '/collections/:collection_name/points/:id', args] as const
}

export function useGetCollectionsCollectionNamePointsId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
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
        ? getGetCollectionsCollectionNamePointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].points[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNamePointsId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
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
        ? getGetCollectionsCollectionNamePointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.collections[':collection_name'].points[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCollectionsCollectionNamePointsKey() {
  return ['collections', '/collections/:collection_name/points', 'PUT'] as const
}

export function usePutCollectionsCollectionNamePoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['points']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNamePointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>
        },
      ) => parseResponse(client.collections[':collection_name'].points.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsKey() {
  return ['collections', '/collections/:collection_name/points', 'POST'] as const
}

export function usePostCollectionsCollectionNamePoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['points']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>
        },
      ) => parseResponse(client.collections[':collection_name'].points.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsDeleteKey() {
  return ['collections', '/collections/:collection_name/points/delete', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsDeleteKey()
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
            (typeof client.collections)[':collection_name']['points']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNamePointsVectorsKey() {
  return ['collections', '/collections/:collection_name/points/vectors', 'PUT'] as const
}

export function usePutCollectionsCollectionNamePointsVectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['vectors']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNamePointsVectorsKey()
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
            (typeof client.collections)[':collection_name']['points']['vectors']['$put']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.vectors.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsVectorsDeleteKey() {
  return ['collections', '/collections/:collection_name/points/vectors/delete', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsVectorsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsVectorsDeleteKey()
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
            (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.vectors.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCollectionsCollectionNamePointsPayloadKey() {
  return ['collections', '/collections/:collection_name/points/payload', 'PUT'] as const
}

export function usePutCollectionsCollectionNamePointsPayload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['payload']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollectionsCollectionNamePointsPayloadKey()
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
            (typeof client.collections)[':collection_name']['points']['payload']['$put']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.payload.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsPayloadKey() {
  return ['collections', '/collections/:collection_name/points/payload', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsPayload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['payload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsPayloadKey()
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
            (typeof client.collections)[':collection_name']['points']['payload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.payload.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsPayloadDeleteKey() {
  return ['collections', '/collections/:collection_name/points/payload/delete', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsPayloadDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsPayloadDeleteKey()
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
            (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.payload.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsPayloadClearKey() {
  return ['collections', '/collections/:collection_name/points/payload/clear', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsPayloadClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsPayloadClearKey()
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
            (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.payload.clear.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsBatchKey() {
  return ['collections', '/collections/:collection_name/points/batch', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsBatchKey()
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
            (typeof client.collections)[':collection_name']['points']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsScrollKey() {
  return ['collections', '/collections/:collection_name/points/scroll', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsScroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['scroll']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsScrollKey()
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
            (typeof client.collections)[':collection_name']['points']['scroll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.scroll.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsCountKey() {
  return ['collections', '/collections/:collection_name/points/count', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['count']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsCountKey()
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
            (typeof client.collections)[':collection_name']['points']['count']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.count.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameFacetKey() {
  return ['collections', '/collections/:collection_name/facet', 'POST'] as const
}

export function usePostCollectionsCollectionNameFacet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['facet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameFacetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>
        },
      ) => parseResponse(client.collections[':collection_name'].facet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsQueryKey() {
  return ['collections', '/collections/:collection_name/points/query', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.collections)[':collection_name']['points']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsQueryKey()
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
            (typeof client.collections)[':collection_name']['points']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsQueryBatchKey() {
  return ['collections', '/collections/:collection_name/points/query/batch', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsQueryBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsQueryBatchKey()
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
            (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.query.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsQueryGroupsKey() {
  return ['collections', '/collections/:collection_name/points/query/groups', 'POST'] as const
}

export function usePostCollectionsCollectionNamePointsQueryGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsQueryGroupsKey()
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
            (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.query.groups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsSearchMatrixPairsKey() {
  return [
    'collections',
    '/collections/:collection_name/points/search/matrix/pairs',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionNamePointsSearchMatrixPairs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsSearchMatrixPairsKey()
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
            (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.search.matrix.pairs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNamePointsSearchMatrixOffsetsKey() {
  return [
    'collections',
    '/collections/:collection_name/points/search/matrix/offsets',
    'POST',
  ] as const
}

export function usePostCollectionsCollectionNamePointsSearchMatrixOffsets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNamePointsSearchMatrixOffsetsKey()
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
            (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collection_name'].points.search.matrix.offsets.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

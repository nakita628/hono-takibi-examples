import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNodeKey() {
  return ['node'] as const
}

export function getGetNodeApiKey() {
  return ['node', '/node/api'] as const
}

export function useGetNodeApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeAttestationsKey() {
  return ['node', '/node/attestations'] as const
}

export function useGetNodeAttestations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeAttestationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.attestations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeAttestations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeAttestationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.attestations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeAttestationsSelfKey() {
  return ['node', '/node/attestations/self'] as const
}

export function useGetNodeAttestationsSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeAttestationsSelfKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.attestations.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeAttestationsSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeAttestationsSelfKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.attestations.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeBackupKey() {
  return ['node', '/node/backup'] as const
}

export function useGetNodeBackup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeBackupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.backup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeBackup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeBackupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.backup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeCommitKey(args: InferRequestType<typeof client.node.commit.$get>) {
  return ['node', '/node/commit', args] as const
}

export function useGetNodeCommit<TError = unknown>(
  args: InferRequestType<typeof client.node.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeCommit<TError = unknown>(
  args: InferRequestType<typeof client.node.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeConfigKey() {
  return ['node', '/node/config'] as const
}

export function useGetNodeConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeConsensusKey() {
  return ['node', '/node/consensus'] as const
}

export function useGetNodeConsensus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeConsensusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.consensus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeConsensus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeConsensusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.consensus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeHistoricalCacheKey() {
  return ['node', '/node/historical_cache'] as const
}

export function useGetNodeHistoricalCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeHistoricalCacheKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.historical_cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeHistoricalCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeHistoricalCacheKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.historical_cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeIndexStrategiesKey() {
  return ['node', '/node/index/strategies'] as const
}

export function useGetNodeIndexStrategies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeIndexStrategiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.index.strategies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeIndexStrategies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeIndexStrategiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.index.strategies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeJsMetricsKey() {
  return ['node', '/node/js_metrics'] as const
}

export function useGetNodeJsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeJsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.js_metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeJsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeJsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.js_metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeJwtKeysRefreshMetricsKey() {
  return ['node', '/node/jwt_keys/refresh/metrics'] as const
}

export function useGetNodeJwtKeysRefreshMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeJwtKeysRefreshMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.node.jwt_keys.refresh.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeJwtKeysRefreshMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeJwtKeysRefreshMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.node.jwt_keys.refresh.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeLedgerChunkKey(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
) {
  return ['node', '/node/ledger_chunk', args] as const
}

export function useGetNodeLedgerChunk<TError = unknown>(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
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
        ? getGetNodeLedgerChunkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ledger_chunk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeLedgerChunk<TError = unknown>(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
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
        ? getGetNodeLedgerChunkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ledger_chunk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadNodeLedgerChunkKey() {
  return ['node', '/node/ledger_chunk', 'HEAD'] as const
}

export function useHeadNodeLedgerChunk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$head>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.node.ledger_chunk.$head>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodeLedgerChunkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.node.ledger_chunk.$head> }) =>
        parseResponse(client.node.ledger_chunk.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeLedgerChunkCommittedPrefixChunkNameKey(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
) {
  return ['node', '/node/ledger_chunk/committed_prefix/:chunk_name', args] as const
}

export function useGetNodeLedgerChunkCommittedPrefixChunkName<TError = unknown>(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
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
        ? getGetNodeLedgerChunkCommittedPrefixChunkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeLedgerChunkCommittedPrefixChunkName<TError = unknown>(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
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
        ? getGetNodeLedgerChunkCommittedPrefixChunkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadNodeLedgerChunkCommittedPrefixChunkNameKey() {
  return ['node', '/node/ledger_chunk/committed_prefix/:chunk_name', 'HEAD'] as const
}

export function useHeadNodeLedgerChunkCommittedPrefixChunkName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodeLedgerChunkCommittedPrefixChunkNameKey()
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
            (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']
          >
        },
      ) =>
        parseResponse(
          client.node.ledger_chunk.committed_prefix[':chunk_name'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNodeLedgerChunkChunkNameKey(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
) {
  return ['node', '/node/ledger_chunk/:chunk_name', args] as const
}

export function useGetNodeLedgerChunkChunkName<TError = unknown>(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
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
        ? getGetNodeLedgerChunkChunkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ledger_chunk[':chunk_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeLedgerChunkChunkName<TError = unknown>(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
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
        ? getGetNodeLedgerChunkChunkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ledger_chunk[':chunk_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadNodeLedgerChunkChunkNameKey() {
  return ['node', '/node/ledger_chunk/:chunk_name', 'HEAD'] as const
}

export function useHeadNodeLedgerChunkChunkName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodeLedgerChunkChunkNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']> },
      ) => parseResponse(client.node.ledger_chunk[':chunk_name'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeMetricsKey() {
  return ['node', '/node/metrics'] as const
}

export function useGetNodeMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNetworkKey() {
  return ['node', '/node/network'] as const
}

export function useGetNodeNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNetworkNodesKey(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
) {
  return ['node', '/node/network/nodes', args] as const
}

export function useGetNodeNetworkNodes<TError = unknown>(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
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
        ? getGetNodeNetworkNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetworkNodes<TError = unknown>(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
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
        ? getGetNodeNetworkNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNetworkNodesPrimaryKey() {
  return ['node', '/node/network/nodes/primary'] as const
}

export function useGetNodeNetworkNodesPrimary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkNodesPrimaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.primary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetworkNodesPrimary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkNodesPrimaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.primary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNetworkNodesSelfKey() {
  return ['node', '/node/network/nodes/self'] as const
}

export function useGetNodeNetworkNodesSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkNodesSelfKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetworkNodesSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkNodesSelfKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeNetworkNodesNodeIdKey(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
) {
  return ['node', '/node/network/nodes/:node_id', args] as const
}

export function useGetNodeNetworkNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
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
        ? getGetNodeNetworkNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes[':node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetworkNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
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
        ? getGetNodeNetworkNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.nodes[':node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNodeNetworkNodesNodeIdKey() {
  return ['node', '/node/network/nodes/:node_id', 'DELETE'] as const
}

export function useDeleteNodeNetworkNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodeNetworkNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']> },
      ) => parseResponse(client.node.network.nodes[':node_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeNetworkRemovableNodesKey() {
  return ['node', '/node/network/removable_nodes'] as const
}

export function useGetNodeNetworkRemovableNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkRemovableNodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.removable_nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeNetworkRemovableNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeNetworkRemovableNodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.network.removable_nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodePrimaryKey() {
  return ['node', '/node/primary'] as const
}

export function useGetNodePrimary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodePrimaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.primary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodePrimary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodePrimaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.primary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadNodePrimaryKey() {
  return ['node', '/node/primary', 'HEAD'] as const
}

export function useHeadNodePrimary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$head>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodePrimaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.node.primary.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeQuotesKey() {
  return ['node', '/node/quotes'] as const
}

export function useGetNodeQuotes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeQuotesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.quotes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeQuotes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeQuotesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.quotes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeQuotesSelfKey() {
  return ['node', '/node/quotes/self'] as const
}

export function useGetNodeQuotesSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeQuotesSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.quotes.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeQuotesSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeQuotesSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.quotes.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeReadyAppKey() {
  return ['node', '/node/ready/app'] as const
}

export function useGetNodeReadyApp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReadyAppKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ready.app.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeReadyApp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReadyAppKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ready.app.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeReadyGovKey() {
  return ['node', '/node/ready/gov'] as const
}

export function useGetNodeReadyGov<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReadyGovKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ready.gov.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeReadyGov<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReadyGovKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.ready.gov.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeReceiptKey(args: InferRequestType<typeof client.node.receipt.$get>) {
  return ['node', '/node/receipt', args] as const
}

export function useGetNodeReceipt<TError = unknown>(
  args: InferRequestType<typeof client.node.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeReceipt<TError = unknown>(
  args: InferRequestType<typeof client.node.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeReceiptCoseKey(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
) {
  return ['node', '/node/receipt/cose', args] as const
}

export function useGetNodeReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
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
        ? getGetNodeReceiptCoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
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
        ? getGetNodeReceiptCoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeSelfSignedCertificateKey() {
  return ['node', '/node/self_signed_certificate'] as const
}

export function useGetNodeSelfSignedCertificate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeSelfSignedCertificateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.self_signed_certificate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeSelfSignedCertificate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeSelfSignedCertificateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.self_signed_certificate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeServiceConfigurationKey() {
  return ['node', '/node/service/configuration'] as const
}

export function useGetNodeServiceConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeServiceConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.service.configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeServiceConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeServiceConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.service.configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeServicePreviousIdentityKey() {
  return ['node', '/node/service/previous_identity'] as const
}

export function useGetNodeServicePreviousIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeServicePreviousIdentityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.node.service.previous_identity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeServicePreviousIdentity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodeServicePreviousIdentityKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.node.service.previous_identity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeSnapshotKey(args: InferRequestType<typeof client.node.snapshot.$get>) {
  return ['node', '/node/snapshot', args] as const
}

export function useGetNodeSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.node.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeSnapshotKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.node.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeSnapshotKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadNodeSnapshotKey() {
  return ['node', '/node/snapshot', 'HEAD'] as const
}

export function useHeadNodeSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$head>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.node.snapshot.$head>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodeSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.node.snapshot.$head> }) =>
        parseResponse(client.node.snapshot.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeSnapshotSnapshotNameKey(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
) {
  return ['node', '/node/snapshot/:snapshot_name', args] as const
}

export function useGetNodeSnapshotSnapshotName<TError = unknown>(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
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
        ? getGetNodeSnapshotSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.snapshot[':snapshot_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeSnapshotSnapshotName<TError = unknown>(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
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
        ? getGetNodeSnapshotSnapshotNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.snapshot[':snapshot_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadNodeSnapshotSnapshotNameKey() {
  return ['node', '/node/snapshot/:snapshot_name', 'HEAD'] as const
}

export function useHeadNodeSnapshotSnapshotName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadNodeSnapshotSnapshotNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']> },
      ) => parseResponse(client.node.snapshot[':snapshot_name'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodeSnapshotCreateKey() {
  return ['node', '/node/snapshot:create', 'POST'] as const
}

export function usePostNodeSnapshotCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)['snapshot:create']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodeSnapshotCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.node['snapshot:create'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodeStateKey() {
  return ['node', '/node/state'] as const
}

export function useGetNodeState<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeStateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.state.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeState<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeStateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.state.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodeTxKey(args: InferRequestType<typeof client.node.tx.$get>) {
  return ['node', '/node/tx', args] as const
}

export function useGetNodeTx<TError = unknown>(
  args: InferRequestType<typeof client.node.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.node.tx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNodeTx<TError = unknown>(
  args: InferRequestType<typeof client.node.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.node.tx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNodeVersionKey() {
  return ['node', '/node/version'] as const
}

export function useGetNodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodeVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodeVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.node.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

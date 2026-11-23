import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNodeKey() {
  return ['node'] as const
}

export function getNodeApiQueryKey() {
  return ['node', '/node/api'] as const
}

export function getNodeApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeApiQueryKey>
  >({
    queryKey: getNodeApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeApiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeAttestationsQueryKey() {
  return ['node', '/node/attestations'] as const
}

export function getNodeAttestationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeAttestationsQueryKey>
  >({
    queryKey: getNodeAttestationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.attestations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeAttestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeAttestationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeAttestationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeAttestationsSelfQueryKey() {
  return ['node', '/node/attestations/self'] as const
}

export function getNodeAttestationsSelfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeAttestationsSelfQueryKey>
  >({
    queryKey: getNodeAttestationsSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.attestations.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeAttestationsSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeAttestationsSelfQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeAttestationsSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeBackupQueryKey() {
  return ['node', '/node/backup'] as const
}

export function getNodeBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeBackupQueryKey>
  >({
    queryKey: getNodeBackupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.backup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeBackupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeBackupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeCommitQueryKey(args: InferRequestType<typeof client.node.commit.$get>) {
  return ['node', '/node/commit', args] as const
}

export function getNodeCommitQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.commit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeCommitQueryKey>
  >({
    queryKey: getNodeCommitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.commit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.commit.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeCommitQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeCommitQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodeConfigQueryKey() {
  return ['node', '/node/config'] as const
}

export function getNodeConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeConfigQueryKey>
  >({
    queryKey: getNodeConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeConsensusQueryKey() {
  return ['node', '/node/consensus'] as const
}

export function getNodeConsensusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeConsensusQueryKey>
  >({
    queryKey: getNodeConsensusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.consensus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeConsensus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeConsensusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeConsensusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeHistoricalCacheQueryKey() {
  return ['node', '/node/historical_cache'] as const
}

export function getNodeHistoricalCacheQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeHistoricalCacheQueryKey>
  >({
    queryKey: getNodeHistoricalCacheQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.historical_cache.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeHistoricalCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeHistoricalCacheQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeHistoricalCacheQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeIndexStrategiesQueryKey() {
  return ['node', '/node/index/strategies'] as const
}

export function getNodeIndexStrategiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeIndexStrategiesQueryKey>
  >({
    queryKey: getNodeIndexStrategiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.index.strategies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeIndexStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeIndexStrategiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeIndexStrategiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeJsMetricsQueryKey() {
  return ['node', '/node/js_metrics'] as const
}

export function getNodeJsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeJsMetricsQueryKey>
  >({
    queryKey: getNodeJsMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.js_metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeJsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeJsMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeJsMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeJwtKeysRefreshMetricsQueryKey() {
  return ['node', '/node/jwt_keys/refresh/metrics'] as const
}

export function getNodeJwtKeysRefreshMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeJwtKeysRefreshMetricsQueryKey>
  >({
    queryKey: getNodeJwtKeysRefreshMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.jwt_keys.refresh.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeJwtKeysRefreshMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeJwtKeysRefreshMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeJwtKeysRefreshMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeLedgerChunkQueryKey(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
) {
  return ['node', '/node/ledger_chunk', args] as const
}

export function getNodeLedgerChunkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.ledger_chunk.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkQueryKey>
  >({
    queryKey: getNodeLedgerChunkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.ledger_chunk.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeLedgerChunk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeLedgerChunkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeLedgerChunkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHeadNodeLedgerChunkMutationKey() {
  return ['node', '/node/ledger_chunk', 'HEAD'] as const
}

export function getHeadNodeLedgerChunkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$head>>>>
    >,
    TError,
    InferRequestType<typeof client.node.ledger_chunk.$head>,
    TOnMutateResult
  >({
    mutationKey: getHeadNodeLedgerChunkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.node.ledger_chunk.$head>) {
      return parseResponse(client.node.ledger_chunk.$head(args, options))
    },
  })
}

export function createHeadNodeLedgerChunk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$head>>>
            >
          >,
          TError,
          InferRequestType<typeof client.node.ledger_chunk.$head>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodeLedgerChunkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeLedgerChunkCommittedPrefixChunkNameQueryKey(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
) {
  return ['node', '/node/ledger_chunk/committed_prefix/:chunk_name', args] as const
}

export function getNodeLedgerChunkCommittedPrefixChunkNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkCommittedPrefixChunkNameQueryKey>
  >({
    queryKey: getNodeLedgerChunkCommittedPrefixChunkNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeLedgerChunkCommittedPrefixChunkName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeLedgerChunkCommittedPrefixChunkNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNodeLedgerChunkCommittedPrefixChunkNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getHeadNodeLedgerChunkCommittedPrefixChunkNameMutationKey() {
  return ['node', '/node/ledger_chunk/committed_prefix/:chunk_name', 'HEAD'] as const
}

export function getHeadNodeLedgerChunkCommittedPrefixChunkNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadNodeLedgerChunkCommittedPrefixChunkNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']
      >,
    ) {
      return parseResponse(
        client.node.ledger_chunk.committed_prefix[':chunk_name'].$head(args, options),
      )
    },
  })
}

export function createHeadNodeLedgerChunkCommittedPrefixChunkName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodeLedgerChunkCommittedPrefixChunkNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeLedgerChunkChunkNameQueryKey(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
) {
  return ['node', '/node/ledger_chunk/:chunk_name', args] as const
}

export function getNodeLedgerChunkChunkNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkChunkNameQueryKey>
  >({
    queryKey: getNodeLedgerChunkChunkNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.ledger_chunk[':chunk_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeLedgerChunkChunkName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeLedgerChunkChunkNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNodeLedgerChunkChunkNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHeadNodeLedgerChunkChunkNameMutationKey() {
  return ['node', '/node/ledger_chunk/:chunk_name', 'HEAD'] as const
}

export function getHeadNodeLedgerChunkChunkNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadNodeLedgerChunkChunkNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>,
    ) {
      return parseResponse(client.node.ledger_chunk[':chunk_name'].$head(args, options))
    },
  })
}

export function createHeadNodeLedgerChunkChunkName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodeLedgerChunkChunkNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeMetricsQueryKey() {
  return ['node', '/node/metrics'] as const
}

export function getNodeMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeMetricsQueryKey>
  >({
    queryKey: getNodeMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeNetworkQueryKey() {
  return ['node', '/node/network'] as const
}

export function getNodeNetworkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkQueryKey>
  >({
    queryKey: getNodeNetworkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeNetworkQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeNetworkNodesQueryKey(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
) {
  return ['node', '/node/network/nodes', args] as const
}

export function getNodeNetworkNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.network.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesQueryKey>
  >({
    queryKey: getNodeNetworkNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeNetworkNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.network.nodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkNodesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeNetworkNodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodeNetworkNodesPrimaryQueryKey() {
  return ['node', '/node/network/nodes/primary'] as const
}

export function getNodeNetworkNodesPrimaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
  >({
    queryKey: getNodeNetworkNodesPrimaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.nodes.primary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeNetworkNodesPrimary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeNetworkNodesPrimaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeNetworkNodesSelfQueryKey() {
  return ['node', '/node/network/nodes/self'] as const
}

export function getNodeNetworkNodesSelfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
  >({
    queryKey: getNodeNetworkNodesSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.nodes.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeNetworkNodesSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeNetworkNodesSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeNetworkNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
) {
  return ['node', '/node/network/nodes/:node_id', args] as const
}

export function getNodeNetworkNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesNodeIdQueryKey>
  >({
    queryKey: getNodeNetworkNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.nodes[':node_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeNetworkNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkNodesNodeIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNodeNetworkNodesNodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteNodeNetworkNodesNodeIdMutationKey() {
  return ['node', '/node/network/nodes/:node_id', 'DELETE'] as const
}

export function getDeleteNodeNetworkNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodeNetworkNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']>,
    ) {
      return parseResponse(client.node.network.nodes[':node_id'].$delete(args, options))
    },
  })
}

export function createDeleteNodeNetworkNodesNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNodeNetworkNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeNetworkRemovableNodesQueryKey() {
  return ['node', '/node/network/removable_nodes'] as const
}

export function getNodeNetworkRemovableNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkRemovableNodesQueryKey>
  >({
    queryKey: getNodeNetworkRemovableNodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.network.removable_nodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeNetworkRemovableNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeNetworkRemovableNodesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeNetworkRemovableNodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodePrimaryQueryKey() {
  return ['node', '/node/primary'] as const
}

export function getNodePrimaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodePrimaryQueryKey>
  >({
    queryKey: getNodePrimaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.primary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodePrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodePrimaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodePrimaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHeadNodePrimaryMutationKey() {
  return ['node', '/node/primary', 'HEAD'] as const
}

export function getHeadNodePrimaryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$head>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadNodePrimaryMutationKey(),
    async mutationFn() {
      return parseResponse(client.node.primary.$head(undefined, options))
    },
  })
}

export function createHeadNodePrimary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$head>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodePrimaryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeQuotesQueryKey() {
  return ['node', '/node/quotes'] as const
}

export function getNodeQuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeQuotesQueryKey>
  >({
    queryKey: getNodeQuotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.quotes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeQuotesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeQuotesSelfQueryKey() {
  return ['node', '/node/quotes/self'] as const
}

export function getNodeQuotesSelfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeQuotesSelfQueryKey>
  >({
    queryKey: getNodeQuotesSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.quotes.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeQuotesSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeQuotesSelfQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeQuotesSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeReadyAppQueryKey() {
  return ['node', '/node/ready/app'] as const
}

export function getNodeReadyAppQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReadyAppQueryKey>
  >({
    queryKey: getNodeReadyAppQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.ready.app.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeReadyApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeReadyAppQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeReadyAppQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeReadyGovQueryKey() {
  return ['node', '/node/ready/gov'] as const
}

export function getNodeReadyGovQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReadyGovQueryKey>
  >({
    queryKey: getNodeReadyGovQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.ready.gov.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeReadyGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeReadyGovQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeReadyGovQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeReceiptQueryKey(args: InferRequestType<typeof client.node.receipt.$get>) {
  return ['node', '/node/receipt', args] as const
}

export function getNodeReceiptQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.receipt.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeReceiptQueryKey>
  >({
    queryKey: getNodeReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.receipt.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.receipt.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeReceiptQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeReceiptQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodeReceiptCoseQueryKey(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
) {
  return ['node', '/node/receipt/cose', args] as const
}

export function getNodeReceiptCoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.receipt.cose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReceiptCoseQueryKey>
  >({
    queryKey: getNodeReceiptCoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.receipt.cose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeReceiptCoseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeReceiptCoseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodeSelfSignedCertificateQueryKey() {
  return ['node', '/node/self_signed_certificate'] as const
}

export function getNodeSelfSignedCertificateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSelfSignedCertificateQueryKey>
  >({
    queryKey: getNodeSelfSignedCertificateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.self_signed_certificate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeSelfSignedCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeSelfSignedCertificateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeSelfSignedCertificateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeServiceConfigurationQueryKey() {
  return ['node', '/node/service/configuration'] as const
}

export function getNodeServiceConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeServiceConfigurationQueryKey>
  >({
    queryKey: getNodeServiceConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.service.configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeServiceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.configuration.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeServiceConfigurationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeServiceConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeServicePreviousIdentityQueryKey() {
  return ['node', '/node/service/previous_identity'] as const
}

export function getNodeServicePreviousIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeServicePreviousIdentityQueryKey>
  >({
    queryKey: getNodeServicePreviousIdentityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.service.previous_identity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeServicePreviousIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeServicePreviousIdentityQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeServicePreviousIdentityQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeSnapshotQueryKey(args: InferRequestType<typeof client.node.snapshot.$get>) {
  return ['node', '/node/snapshot', args] as const
}

export function getNodeSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSnapshotQueryKey>
  >({
    queryKey: getNodeSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.snapshot.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeSnapshotQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeSnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHeadNodeSnapshotMutationKey() {
  return ['node', '/node/snapshot', 'HEAD'] as const
}

export function getHeadNodeSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$head>>>>
    >,
    TError,
    InferRequestType<typeof client.node.snapshot.$head>,
    TOnMutateResult
  >({
    mutationKey: getHeadNodeSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.node.snapshot.$head>) {
      return parseResponse(client.node.snapshot.$head(args, options))
    },
  })
}

export function createHeadNodeSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$head>>>>
          >,
          TError,
          InferRequestType<typeof client.node.snapshot.$head>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodeSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeSnapshotSnapshotNameQueryKey(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
) {
  return ['node', '/node/snapshot/:snapshot_name', args] as const
}

export function getNodeSnapshotSnapshotNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSnapshotSnapshotNameQueryKey>
  >({
    queryKey: getNodeSnapshotSnapshotNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.snapshot[':snapshot_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodeSnapshotSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNodeSnapshotSnapshotNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNodeSnapshotSnapshotNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHeadNodeSnapshotSnapshotNameMutationKey() {
  return ['node', '/node/snapshot/:snapshot_name', 'HEAD'] as const
}

export function getHeadNodeSnapshotSnapshotNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadNodeSnapshotSnapshotNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']>,
    ) {
      return parseResponse(client.node.snapshot[':snapshot_name'].$head(args, options))
    },
  })
}

export function createHeadNodeSnapshotSnapshotName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadNodeSnapshotSnapshotNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNodeSnapshotCreateMutationKey() {
  return ['node', '/node/snapshot:create', 'POST'] as const
}

export function getPostNodeSnapshotCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.node)['snapshot:create']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostNodeSnapshotCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.node['snapshot:create'].$post(undefined, options))
    },
  })
}

export function createPostNodeSnapshotCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.node)['snapshot:create']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNodeSnapshotCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodeStateQueryKey() {
  return ['node', '/node/state'] as const
}

export function getNodeStateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeStateQueryKey>
  >({
    queryKey: getNodeStateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.state.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeStateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeStateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNodeTxQueryKey(args: InferRequestType<typeof client.node.tx.$get>) {
  return ['node', '/node/tx', args] as const
}

export function getNodeTxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.node.tx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeTxQueryKey>
  >({
    queryKey: getNodeTxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.node.tx.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeTx<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.node.tx.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeTxQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeTxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodeVersionQueryKey() {
  return ['node', '/node/version'] as const
}

export function getNodeVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeVersionQueryKey>
  >({
    queryKey: getNodeVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.node.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNodeVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodeVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

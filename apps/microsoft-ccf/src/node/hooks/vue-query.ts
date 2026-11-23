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

export function getNodeKey() {
  return ['node'] as const
}

export function getNodeApiQueryKey() {
  return ['node', '/node/api'] as const
}

export function getNodeApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
          >,
          ReturnType<typeof getNodeApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeAttestationsQueryKey() {
  return ['node', '/node/attestations'] as const
}

export function getNodeAttestationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeAttestationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.attestations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeAttestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>
            >
          >,
          ReturnType<typeof getNodeAttestationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeAttestationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeAttestationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.attestations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeAttestationsSelfQueryKey() {
  return ['node', '/node/attestations/self'] as const
}

export function getNodeAttestationsSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeAttestationsSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.attestations.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeAttestationsSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
            >
          >,
          ReturnType<typeof getNodeAttestationsSelfQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeAttestationsSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeAttestationsSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.attestations.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeBackupQueryKey() {
  return ['node', '/node/backup'] as const
}

export function getNodeBackupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeBackupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.backup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
          >,
          ReturnType<typeof getNodeBackupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeBackupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.backup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeCommitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.commit.$get>>,
) {
  return ['node', '/node/commit', toValue(args)] as const
}

export function getNodeCommitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.commit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.commit.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.commit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
          >,
          ReturnType<typeof getNodeCommitQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.commit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeConfigQueryKey() {
  return ['node', '/node/config'] as const
}

export function getNodeConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
          >,
          ReturnType<typeof getNodeConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeConsensusQueryKey() {
  return ['node', '/node/consensus'] as const
}

export function getNodeConsensusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeConsensusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.consensus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeConsensus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
          >,
          ReturnType<typeof getNodeConsensusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeConsensusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeConsensusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.consensus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeHistoricalCacheQueryKey() {
  return ['node', '/node/historical_cache'] as const
}

export function getNodeHistoricalCacheQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeHistoricalCacheQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.historical_cache.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeHistoricalCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
            >
          >,
          ReturnType<typeof getNodeHistoricalCacheQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeHistoricalCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeHistoricalCacheQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.historical_cache.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeIndexStrategiesQueryKey() {
  return ['node', '/node/index/strategies'] as const
}

export function getNodeIndexStrategiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeIndexStrategiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.index.strategies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeIndexStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
            >
          >,
          ReturnType<typeof getNodeIndexStrategiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeIndexStrategiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeIndexStrategiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.index.strategies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeJsMetricsQueryKey() {
  return ['node', '/node/js_metrics'] as const
}

export function getNodeJsMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeJsMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.js_metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeJsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>
            >
          >,
          ReturnType<typeof getNodeJsMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeJsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeJsMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.js_metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeJwtKeysRefreshMetricsQueryKey() {
  return ['node', '/node/jwt_keys/refresh/metrics'] as const
}

export function getNodeJwtKeysRefreshMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeJwtKeysRefreshMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.jwt_keys.refresh.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeJwtKeysRefreshMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeJwtKeysRefreshMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeJwtKeysRefreshMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeJwtKeysRefreshMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.jwt_keys.refresh.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeLedgerChunkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.ledger_chunk.$get>>,
) {
  return ['node', '/node/ledger_chunk', toValue(args)] as const
}

export function getNodeLedgerChunkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.ledger_chunk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeLedgerChunkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.ledger_chunk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeLedgerChunk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.ledger_chunk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>
            >
          >,
          ReturnType<typeof getNodeLedgerChunkQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeLedgerChunkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.ledger_chunk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodeLedgerChunk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$head>>>
            >
          >,
          TError,
          InferRequestType<typeof client.node.ledger_chunk.$head>,
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
  const mutationDefaults = getHeadNodeLedgerChunkMutationOptions<TError, TOnMutateResult>(
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

export function getNodeLedgerChunkCommittedPrefixChunkNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
  >,
) {
  return ['node', '/node/ledger_chunk/committed_prefix/:chunk_name', toValue(args)] as const
}

export function getNodeLedgerChunkCommittedPrefixChunkNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeLedgerChunkCommittedPrefixChunkNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeLedgerChunkCommittedPrefixChunkName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
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
                    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']
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
                    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNodeLedgerChunkCommittedPrefixChunkNameQueryKey>
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
            ReturnType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkCommittedPrefixChunkNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeLedgerChunkCommittedPrefixChunkNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodeLedgerChunkCommittedPrefixChunkName<
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
  const mutationDefaults = getHeadNodeLedgerChunkCommittedPrefixChunkNameMutationOptions<
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

export function getNodeLedgerChunkChunkNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>
  >,
) {
  return ['node', '/node/ledger_chunk/:chunk_name', toValue(args)] as const
}

export function getNodeLedgerChunkChunkNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeLedgerChunkChunkNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.ledger_chunk[':chunk_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeLedgerChunkChunkName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodeLedgerChunkChunkNameQueryKey>
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
          Awaited<ReturnType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeLedgerChunkChunkNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeLedgerChunkChunkNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.ledger_chunk[':chunk_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodeLedgerChunkChunkName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getHeadNodeLedgerChunkChunkNameMutationOptions<TError, TOnMutateResult>(
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

export function getNodeMetricsQueryKey() {
  return ['node', '/node/metrics'] as const
}

export function getNodeMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
          >,
          ReturnType<typeof getNodeMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeNetworkQueryKey() {
  return ['node', '/node/network'] as const
}

export function getNodeNetworkQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeNetworkQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
          >,
          ReturnType<typeof getNodeNetworkQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeNetworkQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeNetworkNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.network.nodes.$get>>,
) {
  return ['node', '/node/network/nodes', toValue(args)] as const
}

export function getNodeNetworkNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.network.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeNetworkNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeNetworkNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.network.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>
            >
          >,
          ReturnType<typeof getNodeNetworkNodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeNetworkNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeNetworkNodesPrimaryQueryKey() {
  return ['node', '/node/network/nodes/primary'] as const
}

export function getNodeNetworkNodesPrimaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeNetworkNodesPrimaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.nodes.primary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeNetworkNodesPrimary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeNetworkNodesPrimaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.nodes.primary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeNetworkNodesSelfQueryKey() {
  return ['node', '/node/network/nodes/self'] as const
}

export function getNodeNetworkNodesSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeNetworkNodesSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.nodes.self.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeNetworkNodesSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
            >
          >,
          ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeNetworkNodesSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.nodes.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeNetworkNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>>,
) {
  return ['node', '/node/network/nodes/:node_id', toValue(args)] as const
}

export function getNodeNetworkNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeNetworkNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.nodes[':node_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeNetworkNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodeNetworkNodesNodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.node.network.nodes)[':node_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeNetworkNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.nodes[':node_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteNodeNetworkNodesNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteNodeNetworkNodesNodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getNodeNetworkRemovableNodesQueryKey() {
  return ['node', '/node/network/removable_nodes'] as const
}

export function getNodeNetworkRemovableNodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeNetworkRemovableNodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.network.removable_nodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeNetworkRemovableNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeNetworkRemovableNodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeNetworkRemovableNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeNetworkRemovableNodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.network.removable_nodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodePrimaryQueryKey() {
  return ['node', '/node/primary'] as const
}

export function getNodePrimaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodePrimaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.primary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodePrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
          >,
          ReturnType<typeof getNodePrimaryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodePrimaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodePrimaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.primary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodePrimary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$head>>>>
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
  const mutationDefaults = getHeadNodePrimaryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNodeQuotesQueryKey() {
  return ['node', '/node/quotes'] as const
}

export function getNodeQuotesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeQuotesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.quotes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
          >,
          ReturnType<typeof getNodeQuotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeQuotesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.quotes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeQuotesSelfQueryKey() {
  return ['node', '/node/quotes/self'] as const
}

export function getNodeQuotesSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeQuotesSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.quotes.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeQuotesSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>
            >
          >,
          ReturnType<typeof getNodeQuotesSelfQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeQuotesSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeQuotesSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.quotes.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeReadyAppQueryKey() {
  return ['node', '/node/ready/app'] as const
}

export function getNodeReadyAppQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeReadyAppQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.ready.app.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeReadyApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
          >,
          ReturnType<typeof getNodeReadyAppQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReadyAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeReadyAppQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.ready.app.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeReadyGovQueryKey() {
  return ['node', '/node/ready/gov'] as const
}

export function getNodeReadyGovQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeReadyGovQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.ready.gov.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeReadyGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
          >,
          ReturnType<typeof getNodeReadyGovQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReadyGovQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeReadyGovQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.ready.gov.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.$get>>,
) {
  return ['node', '/node/receipt', toValue(args)] as const
}

export function getNodeReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.receipt.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
          >,
          ReturnType<typeof getNodeReceiptQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeReceiptCoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.cose.$get>>,
) {
  return ['node', '/node/receipt/cose', toValue(args)] as const
}

export function getNodeReceiptCoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.cose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeReceiptCoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.receipt.cose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.receipt.cose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>
            >
          >,
          ReturnType<typeof getNodeReceiptCoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeReceiptCoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeReceiptCoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.receipt.cose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeSelfSignedCertificateQueryKey() {
  return ['node', '/node/self_signed_certificate'] as const
}

export function getNodeSelfSignedCertificateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeSelfSignedCertificateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.self_signed_certificate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeSelfSignedCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeSelfSignedCertificateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSelfSignedCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeSelfSignedCertificateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.self_signed_certificate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeServiceConfigurationQueryKey() {
  return ['node', '/node/service/configuration'] as const
}

export function getNodeServiceConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeServiceConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.service.configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeServiceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.configuration.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.configuration.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeServiceConfigurationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeServiceConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeServiceConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.service.configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeServicePreviousIdentityQueryKey() {
  return ['node', '/node/service/previous_identity'] as const
}

export function getNodeServicePreviousIdentityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeServicePreviousIdentityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.service.previous_identity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeServicePreviousIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>
              >
            >
          >,
          ReturnType<typeof getNodeServicePreviousIdentityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeServicePreviousIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeServicePreviousIdentityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.service.previous_identity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.snapshot.$get>>,
) {
  return ['node', '/node/snapshot', toValue(args)] as const
}

export function getNodeSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.snapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.snapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
          >,
          ReturnType<typeof getNodeSnapshotQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodeSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$head>>>>
          >,
          TError,
          InferRequestType<typeof client.node.snapshot.$head>,
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
  const mutationDefaults = getHeadNodeSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getNodeSnapshotSnapshotNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>,
) {
  return ['node', '/node/snapshot/:snapshot_name', toValue(args)] as const
}

export function getNodeSnapshotSnapshotNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeSnapshotSnapshotNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.snapshot[':snapshot_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodeSnapshotSnapshotName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodeSnapshotSnapshotNameQueryKey>
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
          Awaited<ReturnType<(typeof client.node.snapshot)[':snapshot_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodeSnapshotSnapshotNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeSnapshotSnapshotNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.snapshot[':snapshot_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadNodeSnapshotSnapshotName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getHeadNodeSnapshotSnapshotNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostNodeSnapshotCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostNodeSnapshotCreateMutationOptions<TError, TOnMutateResult>(
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

export function getNodeStateQueryKey() {
  return ['node', '/node/state'] as const
}

export function getNodeStateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeStateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.state.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
          >,
          ReturnType<typeof getNodeStateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeStateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.state.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeTxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.tx.$get>>,
) {
  return ['node', '/node/tx', toValue(args)] as const
}

export function getNodeTxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.tx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodeTxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.tx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeTx<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.node.tx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
          >,
          ReturnType<typeof getNodeTxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeTxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodeTxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.node.tx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodeVersionQueryKey() {
  return ['node', '/node/version'] as const
}

export function getNodeVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodeVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.node.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
          >,
          ReturnType<typeof getNodeVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodeVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodeVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.node.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

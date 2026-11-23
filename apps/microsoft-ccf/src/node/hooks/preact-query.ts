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

export function useNodeApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodeApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodeApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeAttestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeAttestationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeAttestationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeAttestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeAttestationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeAttestationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeAttestationsSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeAttestationsSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeAttestationsSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeAttestationsSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.attestations.self.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeAttestationsSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeAttestationsSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeBackupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.backup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeBackupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.commit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.commit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.commit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeConsensus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeConsensusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeConsensusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeConsensus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.consensus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeConsensusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeConsensusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeHistoricalCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeHistoricalCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeHistoricalCacheQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeHistoricalCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.historical_cache.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeHistoricalCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeHistoricalCacheQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeIndexStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeIndexStrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeIndexStrategiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeIndexStrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.index.strategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeIndexStrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeIndexStrategiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeJsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeJsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeJsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeJsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.js_metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeJsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeJsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
        ReturnType<typeof getNodeJwtKeysRefreshMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeJwtKeysRefreshMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeJwtKeysRefreshMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.jwt_keys.refresh.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeJwtKeysRefreshMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeLedgerChunk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeLedgerChunkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeLedgerChunkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeLedgerChunk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.ledger_chunk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeLedgerChunkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeLedgerChunkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNodeLedgerChunkCommittedPrefixChunkNameQueryKey>
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
      ...getNodeLedgerChunkCommittedPrefixChunkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeLedgerChunkCommittedPrefixChunkName<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNodeLedgerChunkCommittedPrefixChunkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNodeLedgerChunkChunkNameQueryKey>
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
      ...getNodeLedgerChunkChunkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeLedgerChunkChunkName<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNodeLedgerChunkChunkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useNodeMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNetworkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNetworkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeNetworkNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNetworkNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNetworkNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNetworkNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNetworkNodesPrimaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNetworkNodesPrimary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.primary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesPrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNetworkNodesPrimaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNetworkNodesSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNetworkNodesSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.network.nodes.self.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeNetworkNodesSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNetworkNodesSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNodeNetworkNodesNodeIdQueryKey>
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
      ...getNodeNetworkNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeNetworkNodesNodeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNodeNetworkNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        ReturnType<typeof getNodeNetworkRemovableNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeNetworkRemovableNodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeNetworkRemovableNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.network.removable_nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeNetworkRemovableNodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodePrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodePrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodePrimaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodePrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodePrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodePrimaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.primary.$head>>>>
        >,
        TError,
        void,
        TOnMutateResult
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

export function useNodeQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeQuotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeQuotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeQuotesSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeQuotesSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeQuotesSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeQuotesSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.quotes.self.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeQuotesSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeQuotesSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeReadyApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReadyAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeReadyAppQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeReadyApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.app.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReadyAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeReadyAppQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeReadyGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReadyGovQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeReadyGovQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeReadyGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.ready.gov.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReadyGovQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeReadyGovQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.receipt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.receipt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReceiptCoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.receipt.cose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeReceiptCoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
        ReturnType<typeof getNodeSelfSignedCertificateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeSelfSignedCertificateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeSelfSignedCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.self_signed_certificate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeSelfSignedCertificateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeServiceConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeServiceConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeServiceConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.node.service.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodeServiceConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeServiceConfigurationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
        ReturnType<typeof getNodeServicePreviousIdentityQueryKey>
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
      ...getNodeServicePreviousIdentityQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeServicePreviousIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.node.service.previous_identity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNodeServicePreviousIdentityQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.snapshot.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.snapshot.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.snapshot.$head>>>>
        >,
        TError,
        InferRequestType<typeof client.node.snapshot.$head>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNodeSnapshotSnapshotNameQueryKey>
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
      ...getNodeSnapshotSnapshotNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodeSnapshotSnapshotName<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNodeSnapshotSnapshotNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useNodeState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeStateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.state.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeStateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeTx<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.tx.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodeTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeTx<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.node.tx.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodeTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodeVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.node.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodeVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

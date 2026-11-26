import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getSapiKey() {
  return ['sapi'] as const
}

export function getApiV3PingQueryKey() {
  return ['api', '/api/v3/ping'] as const
}

export function getApiV3PingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3PingQueryKey>
  >({
    queryKey: getApiV3PingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Ping<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3PingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3PingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Ping<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3PingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3PingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3TimeQueryKey() {
  return ['api', '/api/v3/time'] as const
}

export function getApiV3TimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3TimeQueryKey>
  >({
    queryKey: getApiV3TimeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.time.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Time<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Time<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ExchangeInfoQueryKey(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
) {
  return ['api', '/api/v3/exchangeInfo', args] as const
}

export function getApiV3ExchangeInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExchangeInfoQueryKey>
  >({
    queryKey: getApiV3ExchangeInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.exchangeInfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3ExchangeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExchangeInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ExchangeInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ExchangeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExchangeInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ExchangeInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3DepthQueryKey(args: InferRequestType<typeof client.api.v3.depth.$get>) {
  return ['api', '/api/v3/depth', args] as const
}

export function getApiV3DepthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.depth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3DepthQueryKey>
  >({
    queryKey: getApiV3DepthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.depth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Depth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.depth.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DepthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DepthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Depth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.depth.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DepthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DepthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3TradesQueryKey(args: InferRequestType<typeof client.api.v3.trades.$get>) {
  return ['api', '/api/v3/trades', args] as const
}

export function getApiV3TradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.trades.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TradesQueryKey>
  >({
    queryKey: getApiV3TradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.trades.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Trades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.trades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Trades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.trades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3HistoricalTradesQueryKey(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
) {
  return ['api', '/api/v3/historicalTrades', args] as const
}

export function getApiV3HistoricalTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoricalTradesQueryKey>
  >({
    queryKey: getApiV3HistoricalTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.historicalTrades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3HistoricalTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoricalTradesQueryKey>
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
      ...getApiV3HistoricalTradesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3HistoricalTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoricalTradesQueryKey>
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
      ...getApiV3HistoricalTradesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3AggTradesQueryKey(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
) {
  return ['api', '/api/v3/aggTrades', args] as const
}

export function getApiV3AggTradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.aggTrades.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AggTradesQueryKey>
  >({
    queryKey: getApiV3AggTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.aggTrades.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3AggTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AggTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AggTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AggTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AggTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AggTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3KlinesQueryKey(args: InferRequestType<typeof client.api.v3.klines.$get>) {
  return ['api', '/api/v3/klines', args] as const
}

export function getApiV3KlinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.klines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3KlinesQueryKey>
  >({
    queryKey: getApiV3KlinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.klines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Klines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.klines.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3KlinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3KlinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Klines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.klines.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3KlinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3KlinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3UiKlinesQueryKey(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
) {
  return ['api', '/api/v3/uiKlines', args] as const
}

export function getApiV3UiKlinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.uiKlines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UiKlinesQueryKey>
  >({
    queryKey: getApiV3UiKlinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.uiKlines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3UiKlines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3UiKlinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3UiKlinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3UiKlines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3UiKlinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3UiKlinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AvgPriceQueryKey(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
) {
  return ['api', '/api/v3/avgPrice', args] as const
}

export function getApiV3AvgPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.avgPrice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AvgPriceQueryKey>
  >({
    queryKey: getApiV3AvgPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.avgPrice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3AvgPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AvgPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AvgPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AvgPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AvgPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AvgPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3Ticker24hrQueryKey(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
) {
  return ['api', '/api/v3/ticker/24hr', args] as const
}

export function getApiV3Ticker24hrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3Ticker24hrQueryKey>
  >({
    queryKey: getApiV3Ticker24hrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ticker['24hr'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Ticker24hr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3Ticker24hrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3Ticker24hrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Ticker24hr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3Ticker24hrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3Ticker24hrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3TickerTradingDayQueryKey(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
) {
  return ['api', '/api/v3/ticker/tradingDay', args] as const
}

export function getApiV3TickerTradingDayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerTradingDayQueryKey>
  >({
    queryKey: getApiV3TickerTradingDayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ticker.tradingDay.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3TickerTradingDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerTradingDayQueryKey>
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
      ...getApiV3TickerTradingDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3TickerTradingDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerTradingDayQueryKey>
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
      ...getApiV3TickerTradingDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3TickerPriceQueryKey(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
) {
  return ['api', '/api/v3/ticker/price', args] as const
}

export function getApiV3TickerPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.ticker.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerPriceQueryKey>
  >({
    queryKey: getApiV3TickerPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ticker.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3TickerPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TickerPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3TickerPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TickerPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3TickerBookTickerQueryKey(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
) {
  return ['api', '/api/v3/ticker/bookTicker', args] as const
}

export function getApiV3TickerBookTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerBookTickerQueryKey>
  >({
    queryKey: getApiV3TickerBookTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ticker.bookTicker.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3TickerBookTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerBookTickerQueryKey>
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
      ...getApiV3TickerBookTickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3TickerBookTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerBookTickerQueryKey>
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
      ...getApiV3TickerBookTickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3TickerQueryKey(args: InferRequestType<typeof client.api.v3.ticker.$get>) {
  return ['api', '/api/v3/ticker', args] as const
}

export function getApiV3TickerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.ticker.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerQueryKey>
  >({
    queryKey: getApiV3TickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.ticker.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Ticker<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TickerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Ticker<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.ticker.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TickerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TickerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3OrderTestMutationKey() {
  return ['api', '/api/v3/order/test', 'POST'] as const
}

export function getPostApiV3OrderTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.order.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.order.test.$post>) {
      return parseResponse(client.api.v3.order.test.$post(args, options))
    },
  })
}

export function usePostApiV3OrderTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.order.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderTestMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3OrderQueryKey(args: InferRequestType<typeof client.api.v3.order.$get>) {
  return ['api', '/api/v3/order', args] as const
}

export function getApiV3OrderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.order.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3OrderQueryKey>
  >({
    queryKey: getApiV3OrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.order.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Order<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.order.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3OrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Order<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.order.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3OrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3OrderMutationKey() {
  return ['api', '/api/v3/order', 'POST'] as const
}

export function getPostApiV3OrderMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.order.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.order.$post>) {
      return parseResponse(client.api.v3.order.$post(args, options))
    },
  })
}

export function usePostApiV3Order<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.order.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV3OrderMutationKey() {
  return ['api', '/api/v3/order', 'DELETE'] as const
}

export function getDeleteApiV3OrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.order.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3OrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.order.$delete>) {
      return parseResponse(client.api.v3.order.$delete(args, options))
    },
  })
}

export function useDeleteApiV3Order<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.order.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3OrderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3OrderCancelReplaceMutationKey() {
  return ['api', '/api/v3/order/cancelReplace', 'POST'] as const
}

export function getPostApiV3OrderCancelReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.cancelReplace.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.order.cancelReplace.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderCancelReplaceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.order.cancelReplace.$post>) {
      return parseResponse(client.api.v3.order.cancelReplace.$post(args, options))
    },
  })
}

export function usePostApiV3OrderCancelReplace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.order.cancelReplace.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.order.cancelReplace.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderCancelReplaceMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3OpenOrdersQueryKey(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
) {
  return ['api', '/api/v3/openOrders', args] as const
}

export function getApiV3OpenOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.openOrders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OpenOrdersQueryKey>
  >({
    queryKey: getApiV3OpenOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.openOrders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3OpenOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OpenOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3OpenOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3OpenOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OpenOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3OpenOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3OpenOrdersMutationKey() {
  return ['api', '/api/v3/openOrders', 'DELETE'] as const
}

export function getDeleteApiV3OpenOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.openOrders.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3OpenOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.openOrders.$delete>) {
      return parseResponse(client.api.v3.openOrders.$delete(args, options))
    },
  })
}

export function useDeleteApiV3OpenOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.openOrders.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3OpenOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AllOrdersQueryKey(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
) {
  return ['api', '/api/v3/allOrders', args] as const
}

export function getApiV3AllOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.allOrders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllOrdersQueryKey>
  >({
    queryKey: getApiV3AllOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.allOrders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3AllOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AllOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AllOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AllOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3OrderListOcoMutationKey() {
  return ['api', '/api/v3/orderList/oco', 'POST'] as const
}

export function getPostApiV3OrderListOcoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oco.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.orderList.oco.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderListOcoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.orderList.oco.$post>) {
      return parseResponse(client.api.v3.orderList.oco.$post(args, options))
    },
  })
}

export function usePostApiV3OrderListOco<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oco.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.orderList.oco.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderListOcoMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3OrderListOtoMutationKey() {
  return ['api', '/api/v3/orderList/oto', 'POST'] as const
}

export function getPostApiV3OrderListOtoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oto.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.orderList.oto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderListOtoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.orderList.oto.$post>) {
      return parseResponse(client.api.v3.orderList.oto.$post(args, options))
    },
  })
}

export function usePostApiV3OrderListOto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oto.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.orderList.oto.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderListOtoMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3OrderListOtocoMutationKey() {
  return ['api', '/api/v3/orderList/otoco', 'POST'] as const
}

export function getPostApiV3OrderListOtocoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.otoco.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.orderList.otoco.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3OrderListOtocoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.orderList.otoco.$post>) {
      return parseResponse(client.api.v3.orderList.otoco.$post(args, options))
    },
  })
}

export function usePostApiV3OrderListOtoco<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.otoco.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.orderList.otoco.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3OrderListOtocoMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3OrderListQueryKey(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
) {
  return ['api', '/api/v3/orderList', args] as const
}

export function getApiV3OrderListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.orderList.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OrderListQueryKey>
  >({
    queryKey: getApiV3OrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.orderList.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3OrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3OrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3OrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3OrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3OrderListMutationKey() {
  return ['api', '/api/v3/orderList', 'DELETE'] as const
}

export function getDeleteApiV3OrderListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.orderList.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3OrderListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.orderList.$delete>) {
      return parseResponse(client.api.v3.orderList.$delete(args, options))
    },
  })
}

export function useDeleteApiV3OrderList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.orderList.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3OrderListMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AllOrderListQueryKey(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
) {
  return ['api', '/api/v3/allOrderList', args] as const
}

export function getApiV3AllOrderListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.allOrderList.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllOrderListQueryKey>
  >({
    queryKey: getApiV3AllOrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.allOrderList.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3AllOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllOrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AllOrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AllOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllOrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AllOrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3OpenOrderListQueryKey(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
) {
  return ['api', '/api/v3/openOrderList', args] as const
}

export function getApiV3OpenOrderListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.openOrderList.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OpenOrderListQueryKey>
  >({
    queryKey: getApiV3OpenOrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.openOrderList.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3OpenOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OpenOrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3OpenOrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3OpenOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3OpenOrderListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3OpenOrderListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3SorOrderMutationKey() {
  return ['api', '/api/v3/sor/order', 'POST'] as const
}

export function getPostApiV3SorOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.sor.order.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SorOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.sor.order.$post>) {
      return parseResponse(client.api.v3.sor.order.$post(args, options))
    },
  })
}

export function usePostApiV3SorOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.sor.order.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SorOrderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SorOrderTestMutationKey() {
  return ['api', '/api/v3/sor/order/test', 'POST'] as const
}

export function getPostApiV3SorOrderTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.sor.order.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SorOrderTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.sor.order.test.$post>) {
      return parseResponse(client.api.v3.sor.order.test.$post(args, options))
    },
  })
}

export function usePostApiV3SorOrderTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.sor.order.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SorOrderTestMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AccountQueryKey(args: InferRequestType<typeof client.api.v3.account.$get>) {
  return ['api', '/api/v3/account', args] as const
}

export function getApiV3AccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountQueryKey>
  >({
    queryKey: getApiV3AccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MyTradesQueryKey(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
) {
  return ['api', '/api/v3/myTrades', args] as const
}

export function getApiV3MyTradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.myTrades.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyTradesQueryKey>
  >({
    queryKey: getApiV3MyTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.myTrades.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3MyTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MyTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MyTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MyTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3RateLimitOrderQueryKey(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
) {
  return ['api', '/api/v3/rateLimit/order', args] as const
}

export function getApiV3RateLimitOrderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RateLimitOrderQueryKey>
  >({
    queryKey: getApiV3RateLimitOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rateLimit.order.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3RateLimitOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RateLimitOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3RateLimitOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3RateLimitOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RateLimitOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3RateLimitOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MyPreventedMatchesQueryKey(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
) {
  return ['api', '/api/v3/myPreventedMatches', args] as const
}

export function getApiV3MyPreventedMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyPreventedMatchesQueryKey>
  >({
    queryKey: getApiV3MyPreventedMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.myPreventedMatches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MyPreventedMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyPreventedMatchesQueryKey>
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
      ...getApiV3MyPreventedMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3MyPreventedMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyPreventedMatchesQueryKey>
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
      ...getApiV3MyPreventedMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3MyAllocationsQueryKey(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
) {
  return ['api', '/api/v3/myAllocations', args] as const
}

export function getApiV3MyAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.myAllocations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyAllocationsQueryKey>
  >({
    queryKey: getApiV3MyAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.myAllocations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3MyAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MyAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MyAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MyAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MyAllocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AccountCommissionQueryKey(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
) {
  return ['api', '/api/v3/account/commission', args] as const
}

export function getApiV3AccountCommissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountCommissionQueryKey>
  >({
    queryKey: getApiV3AccountCommissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.account.commission.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3AccountCommission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AccountCommissionQueryKey>
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
      ...getApiV3AccountCommissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3AccountCommission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AccountCommissionQueryKey>
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
      ...getApiV3AccountCommissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginBorrowRepayQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/borrow-repay', args] as const
}

export function getSapiV1MarginBorrowRepayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginBorrowRepayQueryKey>
  >({
    queryKey: getSapiV1MarginBorrowRepayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['borrow-repay'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginBorrowRepay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginBorrowRepayQueryKey>
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
      ...getSapiV1MarginBorrowRepayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginBorrowRepay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginBorrowRepayQueryKey>
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
      ...getSapiV1MarginBorrowRepayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1MarginBorrowRepayMutationKey() {
  return ['sapi', '/sapi/v1/margin/borrow-repay', 'POST'] as const
}

export function getPostSapiV1MarginBorrowRepayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginBorrowRepayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.margin['borrow-repay'].$post(args, options))
    },
  })
}

export function usePostSapiV1MarginBorrowRepay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginBorrowRepayMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginTransferQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/margin/transfer', args] as const
}

export function getSapiV1MarginTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginTransferQueryKey>
  >({
    queryKey: getSapiV1MarginTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.transfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MarginTransferQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MarginTransferQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MarginAllAssetsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allAssets', args] as const
}

export function getSapiV1MarginAllAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllAssetsQueryKey>
  >({
    queryKey: getSapiV1MarginAllAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.allAssets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAllAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllAssetsQueryKey>
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
      ...getSapiV1MarginAllAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAllAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllAssetsQueryKey>
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
      ...getSapiV1MarginAllAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginAllPairsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allPairs', args] as const
}

export function getSapiV1MarginAllPairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllPairsQueryKey>
  >({
    queryKey: getSapiV1MarginAllPairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.allPairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllPairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MarginAllPairsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllPairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MarginAllPairsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MarginPriceIndexQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
) {
  return ['sapi', '/sapi/v1/margin/priceIndex', args] as const
}

export function getSapiV1MarginPriceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginPriceIndexQueryKey>
  >({
    queryKey: getSapiV1MarginPriceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.priceIndex.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginPriceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginPriceIndexQueryKey>
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
      ...getSapiV1MarginPriceIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginPriceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginPriceIndexQueryKey>
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
      ...getSapiV1MarginPriceIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginOrderQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
) {
  return ['sapi', '/sapi/v1/margin/order', args] as const
}

export function getSapiV1MarginOrderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sapi.v1.margin.order.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOrderQueryKey>
  >({
    queryKey: getSapiV1MarginOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.order.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1MarginOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MarginOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MarginOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1MarginOrderMutationKey() {
  return ['sapi', '/sapi/v1/margin/order', 'POST'] as const
}

export function getPostSapiV1MarginOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.order.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.order.$post>) {
      return parseResponse(client.sapi.v1.margin.order.$post(args, options))
    },
  })
}

export function usePostSapiV1MarginOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.order.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginOrderMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSapiV1MarginOrderMutationKey() {
  return ['sapi', '/sapi/v1/margin/order', 'DELETE'] as const
}

export function getDeleteSapiV1MarginOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.order.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1MarginOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.order.$delete>) {
      return parseResponse(client.sapi.v1.margin.order.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1MarginOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.order.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1MarginOrderMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginInterestHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
) {
  return ['sapi', '/sapi/v1/margin/interestHistory', args] as const
}

export function getSapiV1MarginInterestHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginInterestHistoryQueryKey>
  >({
    queryKey: getSapiV1MarginInterestHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.interestHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginInterestHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginInterestHistoryQueryKey>
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
      ...getSapiV1MarginInterestHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginInterestHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginInterestHistoryQueryKey>
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
      ...getSapiV1MarginInterestHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginForceLiquidationRecQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
) {
  return ['sapi', '/sapi/v1/margin/forceLiquidationRec', args] as const
}

export function getSapiV1MarginForceLiquidationRecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginForceLiquidationRecQueryKey>
  >({
    queryKey: getSapiV1MarginForceLiquidationRecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.forceLiquidationRec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginForceLiquidationRec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginForceLiquidationRecQueryKey>
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
      ...getSapiV1MarginForceLiquidationRecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginForceLiquidationRec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginForceLiquidationRecQueryKey>
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
      ...getSapiV1MarginForceLiquidationRecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginAccountQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
) {
  return ['sapi', '/sapi/v1/margin/account', args] as const
}

export function getSapiV1MarginAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAccountQueryKey>
  >({
    queryKey: getSapiV1MarginAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MarginAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MarginAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MarginOpenOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/margin/openOrders', args] as const
}

export function getSapiV1MarginOpenOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOpenOrdersQueryKey>
  >({
    queryKey: getSapiV1MarginOpenOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.openOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOpenOrdersQueryKey>
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
      ...getSapiV1MarginOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOpenOrdersQueryKey>
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
      ...getSapiV1MarginOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSapiV1MarginOpenOrdersMutationKey() {
  return ['sapi', '/sapi/v1/margin/openOrders', 'DELETE'] as const
}

export function getDeleteSapiV1MarginOpenOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1MarginOpenOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete>) {
      return parseResponse(client.sapi.v1.margin.openOrders.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1MarginOpenOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1MarginOpenOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginAllOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allOrders', args] as const
}

export function getSapiV1MarginAllOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllOrdersQueryKey>
  >({
    queryKey: getSapiV1MarginAllOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.allOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAllOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllOrdersQueryKey>
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
      ...getSapiV1MarginAllOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAllOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllOrdersQueryKey>
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
      ...getSapiV1MarginAllOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1MarginOrderOcoMutationKey() {
  return ['sapi', '/sapi/v1/margin/order/oco', 'POST'] as const
}

export function getPostSapiV1MarginOrderOcoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oco.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginOrderOcoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>) {
      return parseResponse(client.sapi.v1.margin.order.oco.$post(args, options))
    },
  })
}

export function usePostSapiV1MarginOrderOco<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oco.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginOrderOcoMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginOrderListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/orderList', args] as const
}

export function getSapiV1MarginOrderListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOrderListQueryKey>
  >({
    queryKey: getSapiV1MarginOrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.orderList.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOrderListQueryKey>
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
      ...getSapiV1MarginOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOrderListQueryKey>
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
      ...getSapiV1MarginOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSapiV1MarginOrderListMutationKey() {
  return ['sapi', '/sapi/v1/margin/orderList', 'DELETE'] as const
}

export function getDeleteSapiV1MarginOrderListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.orderList.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1MarginOrderListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.orderList.$delete>) {
      return parseResponse(client.sapi.v1.margin.orderList.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1MarginOrderList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.orderList.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1MarginOrderListMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginAllOrderListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allOrderList', args] as const
}

export function getSapiV1MarginAllOrderListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllOrderListQueryKey>
  >({
    queryKey: getSapiV1MarginAllOrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.allOrderList.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAllOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllOrderListQueryKey>
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
      ...getSapiV1MarginAllOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAllOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAllOrderListQueryKey>
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
      ...getSapiV1MarginAllOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginOpenOrderListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/openOrderList', args] as const
}

export function getSapiV1MarginOpenOrderListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOpenOrderListQueryKey>
  >({
    queryKey: getSapiV1MarginOpenOrderListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.openOrderList.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginOpenOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOpenOrderListQueryKey>
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
      ...getSapiV1MarginOpenOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginOpenOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginOpenOrderListQueryKey>
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
      ...getSapiV1MarginOpenOrderListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginMyTradesQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
) {
  return ['sapi', '/sapi/v1/margin/myTrades', args] as const
}

export function getSapiV1MarginMyTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMyTradesQueryKey>
  >({
    queryKey: getSapiV1MarginMyTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.myTrades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginMyTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMyTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MarginMyTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginMyTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMyTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MarginMyTradesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MarginMaxBorrowableQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
) {
  return ['sapi', '/sapi/v1/margin/maxBorrowable', args] as const
}

export function getSapiV1MarginMaxBorrowableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMaxBorrowableQueryKey>
  >({
    queryKey: getSapiV1MarginMaxBorrowableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.maxBorrowable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginMaxBorrowable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMaxBorrowableQueryKey>
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
      ...getSapiV1MarginMaxBorrowableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginMaxBorrowable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMaxBorrowableQueryKey>
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
      ...getSapiV1MarginMaxBorrowableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginMaxTransferableQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
) {
  return ['sapi', '/sapi/v1/margin/maxTransferable', args] as const
}

export function getSapiV1MarginMaxTransferableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMaxTransferableQueryKey>
  >({
    queryKey: getSapiV1MarginMaxTransferableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.maxTransferable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginMaxTransferable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMaxTransferableQueryKey>
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
      ...getSapiV1MarginMaxTransferableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginMaxTransferable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginMaxTransferableQueryKey>
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
      ...getSapiV1MarginMaxTransferableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginTradeCoeffQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
) {
  return ['sapi', '/sapi/v1/margin/tradeCoeff', args] as const
}

export function getSapiV1MarginTradeCoeffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginTradeCoeffQueryKey>
  >({
    queryKey: getSapiV1MarginTradeCoeffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.tradeCoeff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginTradeCoeff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginTradeCoeffQueryKey>
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
      ...getSapiV1MarginTradeCoeffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginTradeCoeff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginTradeCoeffQueryKey>
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
      ...getSapiV1MarginTradeCoeffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedAccountQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/account', args] as const
}

export function getSapiV1MarginIsolatedAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAccountQueryKey>
  >({
    queryKey: getSapiV1MarginIsolatedAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.isolated.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginIsolatedAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAccountQueryKey>
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
      ...getSapiV1MarginIsolatedAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginIsolatedAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAccountQueryKey>
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
      ...getSapiV1MarginIsolatedAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1MarginIsolatedAccountMutationKey() {
  return ['sapi', '/sapi/v1/margin/isolated/account', 'POST'] as const
}

export function getPostSapiV1MarginIsolatedAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginIsolatedAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post>) {
      return parseResponse(client.sapi.v1.margin.isolated.account.$post(args, options))
    },
  })
}

export function usePostSapiV1MarginIsolatedAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginIsolatedAccountMutationOptions<
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

export function getDeleteSapiV1MarginIsolatedAccountMutationKey() {
  return ['sapi', '/sapi/v1/margin/isolated/account', 'DELETE'] as const
}

export function getDeleteSapiV1MarginIsolatedAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1MarginIsolatedAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete>,
    ) {
      return parseResponse(client.sapi.v1.margin.isolated.account.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1MarginIsolatedAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1MarginIsolatedAccountMutationOptions<
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

export function getSapiV1MarginIsolatedAccountLimitQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/accountLimit', args] as const
}

export function getSapiV1MarginIsolatedAccountLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAccountLimitQueryKey>
  >({
    queryKey: getSapiV1MarginIsolatedAccountLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.isolated.accountLimit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginIsolatedAccountLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAccountLimitQueryKey>
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
      ...getSapiV1MarginIsolatedAccountLimitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginIsolatedAccountLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAccountLimitQueryKey>
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
      ...getSapiV1MarginIsolatedAccountLimitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedAllPairsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/allPairs', args] as const
}

export function getSapiV1MarginIsolatedAllPairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAllPairsQueryKey>
  >({
    queryKey: getSapiV1MarginIsolatedAllPairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.isolated.allPairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginIsolatedAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAllPairsQueryKey>
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
      ...getSapiV1MarginIsolatedAllPairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginIsolatedAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedAllPairsQueryKey>
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
      ...getSapiV1MarginIsolatedAllPairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1BnbBurnQueryKey(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
) {
  return ['sapi', '/sapi/v1/bnbBurn', args] as const
}

export function getSapiV1BnbBurnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BnbBurnQueryKey>
  >({
    queryKey: getSapiV1BnbBurnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.bnbBurn.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1BnbBurn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BnbBurnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1BnbBurnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1BnbBurn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BnbBurnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1BnbBurnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1BnbBurnMutationKey() {
  return ['sapi', '/sapi/v1/bnbBurn', 'POST'] as const
}

export function getPostSapiV1BnbBurnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.bnbBurn.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1BnbBurnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.bnbBurn.$post>) {
      return parseResponse(client.sapi.v1.bnbBurn.$post(args, options))
    },
  })
}

export function usePostSapiV1BnbBurn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.bnbBurn.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1BnbBurnMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginInterestRateHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
) {
  return ['sapi', '/sapi/v1/margin/interestRateHistory', args] as const
}

export function getSapiV1MarginInterestRateHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginInterestRateHistoryQueryKey>
  >({
    queryKey: getSapiV1MarginInterestRateHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.interestRateHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginInterestRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginInterestRateHistoryQueryKey>
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
      ...getSapiV1MarginInterestRateHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginInterestRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginInterestRateHistoryQueryKey>
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
      ...getSapiV1MarginInterestRateHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginCrossMarginDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
) {
  return ['sapi', '/sapi/v1/margin/crossMarginData', args] as const
}

export function getSapiV1MarginCrossMarginDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCrossMarginDataQueryKey>
  >({
    queryKey: getSapiV1MarginCrossMarginDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.crossMarginData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginCrossMarginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCrossMarginDataQueryKey>
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
      ...getSapiV1MarginCrossMarginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginCrossMarginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCrossMarginDataQueryKey>
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
      ...getSapiV1MarginCrossMarginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedMarginDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginData', args] as const
}

export function getSapiV1MarginIsolatedMarginDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedMarginDataQueryKey>
  >({
    queryKey: getSapiV1MarginIsolatedMarginDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.isolatedMarginData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginIsolatedMarginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedMarginDataQueryKey>
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
      ...getSapiV1MarginIsolatedMarginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginIsolatedMarginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedMarginDataQueryKey>
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
      ...getSapiV1MarginIsolatedMarginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedMarginTierQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginTier', args] as const
}

export function getSapiV1MarginIsolatedMarginTierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedMarginTierQueryKey>
  >({
    queryKey: getSapiV1MarginIsolatedMarginTierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.isolatedMarginTier.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginIsolatedMarginTier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedMarginTierQueryKey>
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
      ...getSapiV1MarginIsolatedMarginTierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginIsolatedMarginTier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginIsolatedMarginTierQueryKey>
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
      ...getSapiV1MarginIsolatedMarginTierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginRateLimitOrderQueryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
) {
  return ['sapi', '/sapi/v1/margin/rateLimit/order', args] as const
}

export function getSapiV1MarginRateLimitOrderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginRateLimitOrderQueryKey>
  >({
    queryKey: getSapiV1MarginRateLimitOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.rateLimit.order.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginRateLimitOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginRateLimitOrderQueryKey>
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
      ...getSapiV1MarginRateLimitOrderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginRateLimitOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginRateLimitOrderQueryKey>
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
      ...getSapiV1MarginRateLimitOrderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginCrossMarginCollateralRatioQueryKey() {
  return ['sapi', '/sapi/v1/margin/crossMarginCollateralRatio'] as const
}

export function getSapiV1MarginCrossMarginCollateralRatioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCrossMarginCollateralRatioQueryKey>
  >({
    queryKey: getSapiV1MarginCrossMarginCollateralRatioQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginCrossMarginCollateralRatio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
      >
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
              Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCrossMarginCollateralRatioQueryKey>
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
      ...getSapiV1MarginCrossMarginCollateralRatioQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginCrossMarginCollateralRatio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
      >
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
              Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCrossMarginCollateralRatioQueryKey>
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
      ...getSapiV1MarginCrossMarginCollateralRatioQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginExchangeSmallLiabilityQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability', args] as const
}

export function getSapiV1MarginExchangeSmallLiabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityQueryKey>
  >({
    queryKey: getSapiV1MarginExchangeSmallLiabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['exchange-small-liability'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginExchangeSmallLiability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityQueryKey>
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
      ...getSapiV1MarginExchangeSmallLiabilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginExchangeSmallLiability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityQueryKey>
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
      ...getSapiV1MarginExchangeSmallLiabilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability-history', args] as const
}

export function getSapiV1MarginExchangeSmallLiabilityHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey>
  >({
    queryKey: getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['exchange-small-liability-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginExchangeSmallLiabilityHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey>
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
      ...getSapiV1MarginExchangeSmallLiabilityHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginExchangeSmallLiabilityHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey>
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
      ...getSapiV1MarginExchangeSmallLiabilityHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginNextHourlyInterestRateQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/next-hourly-interest-rate', args] as const
}

export function getSapiV1MarginNextHourlyInterestRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginNextHourlyInterestRateQueryKey>
  >({
    queryKey: getSapiV1MarginNextHourlyInterestRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['next-hourly-interest-rate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginNextHourlyInterestRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginNextHourlyInterestRateQueryKey>
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
      ...getSapiV1MarginNextHourlyInterestRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginNextHourlyInterestRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginNextHourlyInterestRateQueryKey>
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
      ...getSapiV1MarginNextHourlyInterestRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginCapitalFlowQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/capital-flow', args] as const
}

export function getSapiV1MarginCapitalFlowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCapitalFlowQueryKey>
  >({
    queryKey: getSapiV1MarginCapitalFlowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['capital-flow'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginCapitalFlow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCapitalFlowQueryKey>
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
      ...getSapiV1MarginCapitalFlowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginCapitalFlow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginCapitalFlowQueryKey>
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
      ...getSapiV1MarginCapitalFlowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginDelistScheduleQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/delist-schedule', args] as const
}

export function getSapiV1MarginDelistScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginDelistScheduleQueryKey>
  >({
    queryKey: getSapiV1MarginDelistScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['delist-schedule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginDelistSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginDelistScheduleQueryKey>
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
      ...getSapiV1MarginDelistScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginDelistSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginDelistScheduleQueryKey>
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
      ...getSapiV1MarginDelistScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MarginAvailableInventoryQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/available-inventory', args] as const
}

export function getSapiV1MarginAvailableInventoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAvailableInventoryQueryKey>
  >({
    queryKey: getSapiV1MarginAvailableInventoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin['available-inventory'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginAvailableInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAvailableInventoryQueryKey>
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
      ...getSapiV1MarginAvailableInventoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginAvailableInventory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginAvailableInventoryQueryKey>
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
      ...getSapiV1MarginAvailableInventoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1MarginManualLiquidationMutationKey() {
  return ['sapi', '/sapi/v1/margin/manual-liquidation', 'POST'] as const
}

export function getPostSapiV1MarginManualLiquidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginManualLiquidationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.margin['manual-liquidation'].$post(args, options))
    },
  })
}

export function usePostSapiV1MarginManualLiquidation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginManualLiquidationMutationOptions<
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

export function getPostSapiV1MarginOrderOtoMutationKey() {
  return ['sapi', '/sapi/v1/margin/order/oto', 'POST'] as const
}

export function getPostSapiV1MarginOrderOtoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oto.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginOrderOtoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>) {
      return parseResponse(client.sapi.v1.margin.order.oto.$post(args, options))
    },
  })
}

export function usePostSapiV1MarginOrderOto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oto.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginOrderOtoMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1MarginOrderOtocoMutationKey() {
  return ['sapi', '/sapi/v1/margin/order/otoco', 'POST'] as const
}

export function getPostSapiV1MarginOrderOtocoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.otoco.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginOrderOtocoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post>) {
      return parseResponse(client.sapi.v1.margin.order.otoco.$post(args, options))
    },
  })
}

export function usePostSapiV1MarginOrderOtoco<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.margin.order.otoco.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginOrderOtocoMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1MarginMaxLeverageMutationKey() {
  return ['sapi', '/sapi/v1/margin/max-leverage', 'POST'] as const
}

export function getPostSapiV1MarginMaxLeverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MarginMaxLeverageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.margin['max-leverage'].$post(args, options))
    },
  })
}

export function usePostSapiV1MarginMaxLeverage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MarginMaxLeverageMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1MarginLeverageBracketQueryKey() {
  return ['sapi', '/sapi/v1/margin/leverageBracket'] as const
}

export function getSapiV1MarginLeverageBracketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginLeverageBracketQueryKey>
  >({
    queryKey: getSapiV1MarginLeverageBracketQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.margin.leverageBracket.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MarginLeverageBracket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginLeverageBracketQueryKey>
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
      ...getSapiV1MarginLeverageBracketQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MarginLeverageBracket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MarginLeverageBracketQueryKey>
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
      ...getSapiV1MarginLeverageBracketQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SystemStatusQueryKey() {
  return ['sapi', '/sapi/v1/system/status'] as const
}

export function getSapiV1SystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SystemStatusQueryKey>
  >({
    queryKey: getSapiV1SystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1SystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1SystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1CapitalConfigGetallQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
) {
  return ['sapi', '/sapi/v1/capital/config/getall', args] as const
}

export function getSapiV1CapitalConfigGetallQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalConfigGetallQueryKey>
  >({
    queryKey: getSapiV1CapitalConfigGetallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.config.getall.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalConfigGetall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalConfigGetallQueryKey>
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
      ...getSapiV1CapitalConfigGetallQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalConfigGetall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalConfigGetallQueryKey>
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
      ...getSapiV1CapitalConfigGetallQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AccountSnapshotQueryKey(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
) {
  return ['sapi', '/sapi/v1/accountSnapshot', args] as const
}

export function getSapiV1AccountSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountSnapshotQueryKey>
  >({
    queryKey: getSapiV1AccountSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.accountSnapshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AccountSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountSnapshotQueryKey>
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
      ...getSapiV1AccountSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AccountSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountSnapshotQueryKey>
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
      ...getSapiV1AccountSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1AccountDisableFastWithdrawSwitchMutationKey() {
  return ['sapi', '/sapi/v1/account/disableFastWithdrawSwitch', 'POST'] as const
}

export function getPostSapiV1AccountDisableFastWithdrawSwitchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AccountDisableFastWithdrawSwitchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>,
    ) {
      return parseResponse(client.sapi.v1.account.disableFastWithdrawSwitch.$post(args, options))
    },
  })
}

export function usePostSapiV1AccountDisableFastWithdrawSwitch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AccountDisableFastWithdrawSwitchMutationOptions<
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

export function getPostSapiV1AccountEnableFastWithdrawSwitchMutationKey() {
  return ['sapi', '/sapi/v1/account/enableFastWithdrawSwitch', 'POST'] as const
}

export function getPostSapiV1AccountEnableFastWithdrawSwitchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AccountEnableFastWithdrawSwitchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>,
    ) {
      return parseResponse(client.sapi.v1.account.enableFastWithdrawSwitch.$post(args, options))
    },
  })
}

export function usePostSapiV1AccountEnableFastWithdrawSwitch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AccountEnableFastWithdrawSwitchMutationOptions<
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

export function getPostSapiV1CapitalWithdrawApplyMutationKey() {
  return ['sapi', '/sapi/v1/capital/withdraw/apply', 'POST'] as const
}

export function getPostSapiV1CapitalWithdrawApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.apply.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1CapitalWithdrawApplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post>) {
      return parseResponse(client.sapi.v1.capital.withdraw.apply.$post(args, options))
    },
  })
}

export function usePostSapiV1CapitalWithdrawApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.apply.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1CapitalWithdrawApplyMutationOptions<
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

export function getSapiV1CapitalDepositHisrecQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/hisrec', args] as const
}

export function getSapiV1CapitalDepositHisrecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositHisrecQueryKey>
  >({
    queryKey: getSapiV1CapitalDepositHisrecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.deposit.hisrec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalDepositHisrec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositHisrecQueryKey>
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
      ...getSapiV1CapitalDepositHisrecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalDepositHisrec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositHisrecQueryKey>
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
      ...getSapiV1CapitalDepositHisrecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalWithdrawHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
) {
  return ['sapi', '/sapi/v1/capital/withdraw/history', args] as const
}

export function getSapiV1CapitalWithdrawHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalWithdrawHistoryQueryKey>
  >({
    queryKey: getSapiV1CapitalWithdrawHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.withdraw.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalWithdrawHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalWithdrawHistoryQueryKey>
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
      ...getSapiV1CapitalWithdrawHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalWithdrawHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalWithdrawHistoryQueryKey>
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
      ...getSapiV1CapitalWithdrawHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositAddressQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address', args] as const
}

export function getSapiV1CapitalDepositAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositAddressQueryKey>
  >({
    queryKey: getSapiV1CapitalDepositAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.deposit.address.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalDepositAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositAddressQueryKey>
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
      ...getSapiV1CapitalDepositAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalDepositAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositAddressQueryKey>
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
      ...getSapiV1CapitalDepositAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AccountStatusQueryKey(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
) {
  return ['sapi', '/sapi/v1/account/status', args] as const
}

export function getSapiV1AccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountStatusQueryKey>
  >({
    queryKey: getSapiV1AccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.account.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AccountStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1AccountStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1AccountStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1AccountStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1AccountApiTradingStatusQueryKey(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
) {
  return ['sapi', '/sapi/v1/account/apiTradingStatus', args] as const
}

export function getSapiV1AccountApiTradingStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountApiTradingStatusQueryKey>
  >({
    queryKey: getSapiV1AccountApiTradingStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.account.apiTradingStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AccountApiTradingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountApiTradingStatusQueryKey>
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
      ...getSapiV1AccountApiTradingStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AccountApiTradingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountApiTradingStatusQueryKey>
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
      ...getSapiV1AccountApiTradingStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AssetDribbletQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
) {
  return ['sapi', '/sapi/v1/asset/dribblet', args] as const
}

export function getSapiV1AssetDribbletQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetDribbletQueryKey>
  >({
    queryKey: getSapiV1AssetDribbletQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.dribblet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetDribblet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetDribbletQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1AssetDribbletQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetDribblet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetDribbletQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1AssetDribbletQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1AssetDustBtcMutationKey() {
  return ['sapi', '/sapi/v1/asset/dust-btc', 'POST'] as const
}

export function getPostSapiV1AssetDustBtcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AssetDustBtcMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>) {
      return parseResponse(client.sapi.v1.asset['dust-btc'].$post(args, options))
    },
  })
}

export function usePostSapiV1AssetDustBtc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AssetDustBtcMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1AssetDustMutationKey() {
  return ['sapi', '/sapi/v1/asset/dust', 'POST'] as const
}

export function getPostSapiV1AssetDustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dust.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.asset.dust.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AssetDustMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.asset.dust.$post>) {
      return parseResponse(client.sapi.v1.asset.dust.$post(args, options))
    },
  })
}

export function usePostSapiV1AssetDust<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dust.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.asset.dust.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AssetDustMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1AssetAssetDividendQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
) {
  return ['sapi', '/sapi/v1/asset/assetDividend', args] as const
}

export function getSapiV1AssetAssetDividendQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetAssetDividendQueryKey>
  >({
    queryKey: getSapiV1AssetAssetDividendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.assetDividend.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetAssetDividend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetAssetDividendQueryKey>
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
      ...getSapiV1AssetAssetDividendQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetAssetDividend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetAssetDividendQueryKey>
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
      ...getSapiV1AssetAssetDividendQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AssetAssetDetailQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
) {
  return ['sapi', '/sapi/v1/asset/assetDetail', args] as const
}

export function getSapiV1AssetAssetDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetAssetDetailQueryKey>
  >({
    queryKey: getSapiV1AssetAssetDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.assetDetail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetAssetDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetAssetDetailQueryKey>
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
      ...getSapiV1AssetAssetDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetAssetDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetAssetDetailQueryKey>
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
      ...getSapiV1AssetAssetDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AssetTradeFeeQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
) {
  return ['sapi', '/sapi/v1/asset/tradeFee', args] as const
}

export function getSapiV1AssetTradeFeeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetTradeFeeQueryKey>
  >({
    queryKey: getSapiV1AssetTradeFeeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.tradeFee.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetTradeFee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetTradeFeeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1AssetTradeFeeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetTradeFee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetTradeFeeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1AssetTradeFeeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1AssetTransferQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/asset/transfer', args] as const
}

export function getSapiV1AssetTransferQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetTransferQueryKey>
  >({
    queryKey: getSapiV1AssetTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.transfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1AssetTransferQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1AssetTransferQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1AssetTransferMutationKey() {
  return ['sapi', '/sapi/v1/asset/transfer', 'POST'] as const
}

export function getPostSapiV1AssetTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.asset.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AssetTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.asset.transfer.$post>) {
      return parseResponse(client.sapi.v1.asset.transfer.$post(args, options))
    },
  })
}

export function usePostSapiV1AssetTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.asset.transfer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AssetTransferMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1AssetGetFundingAssetMutationKey() {
  return ['sapi', '/sapi/v1/asset/get-funding-asset', 'POST'] as const
}

export function getPostSapiV1AssetGetFundingAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AssetGetFundingAssetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.asset['get-funding-asset'].$post(args, options))
    },
  })
}

export function usePostSapiV1AssetGetFundingAsset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AssetGetFundingAssetMutationOptions<
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

export function getPostSapiV3AssetGetUserAssetMutationKey() {
  return ['sapi', '/sapi/v3/asset/getUserAsset', 'POST'] as const
}

export function getPostSapiV3AssetGetUserAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v3.asset.getUserAsset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV3AssetGetUserAssetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post>) {
      return parseResponse(client.sapi.v3.asset.getUserAsset.$post(args, options))
    },
  })
}

export function usePostSapiV3AssetGetUserAsset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v3.asset.getUserAsset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV3AssetGetUserAssetMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1AssetConvertTransferMutationKey() {
  return ['sapi', '/sapi/v1/asset/convert-transfer', 'POST'] as const
}

export function getPostSapiV1AssetConvertTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AssetConvertTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.asset['convert-transfer'].$post(args, options))
    },
  })
}

export function usePostSapiV1AssetConvertTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AssetConvertTransferMutationOptions<
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

export function getSapiV1AssetConvertTransferQueryByPageQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
) {
  return ['sapi', '/sapi/v1/asset/convert-transfer/queryByPage', args] as const
}

export function getSapiV1AssetConvertTransferQueryByPageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetConvertTransferQueryByPageQueryKey>
  >({
    queryKey: getSapiV1AssetConvertTransferQueryByPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset['convert-transfer'].queryByPage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetConvertTransferQueryByPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetConvertTransferQueryByPageQueryKey>
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
      ...getSapiV1AssetConvertTransferQueryByPageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetConvertTransferQueryByPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetConvertTransferQueryByPageQueryKey>
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
      ...getSapiV1AssetConvertTransferQueryByPageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage', args] as const
}

export function getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey>
  >({
    queryKey: getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetLedgerTransferCloudMiningQueryByPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey>
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
      ...getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetLedgerTransferCloudMiningQueryByPage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey>
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
      ...getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AccountApiRestrictionsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
) {
  return ['sapi', '/sapi/v1/account/apiRestrictions', args] as const
}

export function getSapiV1AccountApiRestrictionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountApiRestrictionsQueryKey>
  >({
    queryKey: getSapiV1AccountApiRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.account.apiRestrictions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AccountApiRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountApiRestrictionsQueryKey>
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
      ...getSapiV1AccountApiRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AccountApiRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountApiRestrictionsQueryKey>
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
      ...getSapiV1AccountApiRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalContractConvertibleCoinsQueryKey() {
  return ['sapi', '/sapi/v1/capital/contract/convertible-coins'] as const
}

export function getSapiV1CapitalContractConvertibleCoinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalContractConvertibleCoinsQueryKey>
  >({
    queryKey: getSapiV1CapitalContractConvertibleCoinsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalContractConvertibleCoins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalContractConvertibleCoinsQueryKey>
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
      ...getSapiV1CapitalContractConvertibleCoinsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalContractConvertibleCoins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalContractConvertibleCoinsQueryKey>
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
      ...getSapiV1CapitalContractConvertibleCoinsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1CapitalContractConvertibleCoinsMutationKey() {
  return ['sapi', '/sapi/v1/capital/contract/convertible-coins', 'POST'] as const
}

export function getPostSapiV1CapitalContractConvertibleCoinsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1CapitalContractConvertibleCoinsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1.capital.contract['convertible-coins'].$post(args, options),
      )
    },
  })
}

export function usePostSapiV1CapitalContractConvertibleCoins<
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
                ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1CapitalContractConvertibleCoinsMutationOptions<
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

export function getPostSapiV1SubAccountVirtualSubAccountMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/virtualSubAccount', 'POST'] as const
}

export function getPostSapiV1SubAccountVirtualSubAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountVirtualSubAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].virtualSubAccount.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountVirtualSubAccount<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountVirtualSubAccountMutationOptions<
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

export function getSapiV1SubAccountListQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/list', args] as const
}

export function getSapiV1SubAccountListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountListQueryKey>
  >({
    queryKey: getSapiV1SubAccountListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1SubAccountListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1SubAccountListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1SubAccountSubTransferHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/sub/transfer/history', args] as const
}

export function getSapiV1SubAccountSubTransferHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSubTransferHistoryQueryKey>
  >({
    queryKey: getSapiV1SubAccountSubTransferHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].sub.transfer.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountSubTransferHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSubTransferHistoryQueryKey>
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
      ...getSapiV1SubAccountSubTransferHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountSubTransferHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSubTransferHistoryQueryKey>
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
      ...getSapiV1SubAccountSubTransferHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesInternalTransferQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/internalTransfer', args] as const
}

export function getSapiV1SubAccountFuturesInternalTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesInternalTransferQueryKey>
  >({
    queryKey: getSapiV1SubAccountFuturesInternalTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.internalTransfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountFuturesInternalTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesInternalTransferQueryKey>
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
      ...getSapiV1SubAccountFuturesInternalTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountFuturesInternalTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesInternalTransferQueryKey>
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
      ...getSapiV1SubAccountFuturesInternalTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountFuturesInternalTransferMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/internalTransfer', 'POST'] as const
}

export function getPostSapiV1SubAccountFuturesInternalTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountFuturesInternalTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.internalTransfer.$post(args, options),
      )
    },
  })
}

export function usePostSapiV1SubAccountFuturesInternalTransfer<
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
                  (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
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
  const mutationDefaults = getPostSapiV1SubAccountFuturesInternalTransferMutationOptions<
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

export function getSapiV3SubAccountAssetsQueryKey(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
) {
  return ['sapi', '/sapi/v3/sub-account/assets', args] as const
}

export function getSapiV3SubAccountAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV3SubAccountAssetsQueryKey>
  >({
    queryKey: getSapiV3SubAccountAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v3['sub-account'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV3SubAccountAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV3SubAccountAssetsQueryKey>
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
      ...getSapiV3SubAccountAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV3SubAccountAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV3SubAccountAssetsQueryKey>
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
      ...getSapiV3SubAccountAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountSpotSummaryQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/spotSummary', args] as const
}

export function getSapiV1SubAccountSpotSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSpotSummaryQueryKey>
  >({
    queryKey: getSapiV1SubAccountSpotSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].spotSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountSpotSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSpotSummaryQueryKey>
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
      ...getSapiV1SubAccountSpotSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountSpotSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSpotSummaryQueryKey>
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
      ...getSapiV1SubAccountSpotSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositSubAddressQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subAddress', args] as const
}

export function getSapiV1CapitalDepositSubAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositSubAddressQueryKey>
  >({
    queryKey: getSapiV1CapitalDepositSubAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.deposit.subAddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalDepositSubAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositSubAddressQueryKey>
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
      ...getSapiV1CapitalDepositSubAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalDepositSubAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositSubAddressQueryKey>
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
      ...getSapiV1CapitalDepositSubAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositSubHisrecQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subHisrec', args] as const
}

export function getSapiV1CapitalDepositSubHisrecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositSubHisrecQueryKey>
  >({
    queryKey: getSapiV1CapitalDepositSubHisrecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.deposit.subHisrec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalDepositSubHisrec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositSubHisrecQueryKey>
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
      ...getSapiV1CapitalDepositSubHisrecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalDepositSubHisrec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositSubHisrecQueryKey>
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
      ...getSapiV1CapitalDepositSubHisrecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1CapitalDepositCreditApplyMutationKey() {
  return ['sapi', '/sapi/v1/capital/deposit/credit-apply', 'POST'] as const
}

export function getPostSapiV1CapitalDepositCreditApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1CapitalDepositCreditApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.capital.deposit['credit-apply'].$post(args, options))
    },
  })
}

export function usePostSapiV1CapitalDepositCreditApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1CapitalDepositCreditApplyMutationOptions<
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

export function getSapiV1AssetWalletBalanceQueryKey(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
) {
  return ['sapi', '/sapi/v1/asset/wallet/balance', args] as const
}

export function getSapiV1AssetWalletBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetWalletBalanceQueryKey>
  >({
    queryKey: getSapiV1AssetWalletBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.wallet.balance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetWalletBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetWalletBalanceQueryKey>
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
      ...getSapiV1AssetWalletBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetWalletBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetWalletBalanceQueryKey>
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
      ...getSapiV1AssetWalletBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AssetCustodyTransferHistoryQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
) {
  return ['sapi', '/sapi/v1/asset/custody/transfer-history', args] as const
}

export function getSapiV1AssetCustodyTransferHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetCustodyTransferHistoryQueryKey>
  >({
    queryKey: getSapiV1AssetCustodyTransferHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.asset.custody['transfer-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AssetCustodyTransferHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetCustodyTransferHistoryQueryKey>
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
      ...getSapiV1AssetCustodyTransferHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AssetCustodyTransferHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AssetCustodyTransferHistoryQueryKey>
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
      ...getSapiV1AssetCustodyTransferHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositAddressListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address/list', args] as const
}

export function getSapiV1CapitalDepositAddressListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositAddressListQueryKey>
  >({
    queryKey: getSapiV1CapitalDepositAddressListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.deposit.address.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalDepositAddressList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositAddressListQueryKey>
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
      ...getSapiV1CapitalDepositAddressListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalDepositAddressList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalDepositAddressListQueryKey>
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
      ...getSapiV1CapitalDepositAddressListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SpotDelistScheduleQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
) {
  return ['sapi', '/sapi/v1/spot/delist-schedule', args] as const
}

export function getSapiV1SpotDelistScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SpotDelistScheduleQueryKey>
  >({
    queryKey: getSapiV1SpotDelistScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.spot['delist-schedule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SpotDelistSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SpotDelistScheduleQueryKey>
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
      ...getSapiV1SpotDelistScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SpotDelistSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SpotDelistScheduleQueryKey>
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
      ...getSapiV1SpotDelistScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CapitalWithdrawAddressListQueryKey() {
  return ['sapi', '/sapi/v1/capital/withdraw/address/list'] as const
}

export function getSapiV1CapitalWithdrawAddressListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalWithdrawAddressListQueryKey>
  >({
    queryKey: getSapiV1CapitalWithdrawAddressListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.capital.withdraw.address.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CapitalWithdrawAddressList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
      >
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
              Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalWithdrawAddressListQueryKey>
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
      ...getSapiV1CapitalWithdrawAddressListQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CapitalWithdrawAddressList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
      >
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
              Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CapitalWithdrawAddressListQueryKey>
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
      ...getSapiV1CapitalWithdrawAddressListQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AccountInfoQueryKey(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
) {
  return ['sapi', '/sapi/v1/account/info', args] as const
}

export function getSapiV1AccountInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sapi.v1.account.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountInfoQueryKey>
  >({
    queryKey: getSapiV1AccountInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.account.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1AccountInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1AccountInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1AccountInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AccountInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1AccountInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1SubAccountStatusQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/status', args] as const
}

export function getSapiV1SubAccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountStatusQueryKey>
  >({
    queryKey: getSapiV1SubAccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountStatusQueryKey>
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
      ...getSapiV1SubAccountStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountStatusQueryKey>
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
      ...getSapiV1SubAccountStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountMarginEnableMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/margin/enable', 'POST'] as const
}

export function getPostSapiV1SubAccountMarginEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountMarginEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].margin.enable.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountMarginEnable<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountMarginEnableMutationOptions<
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

export function getSapiV1SubAccountMarginAccountQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/account', args] as const
}

export function getSapiV1SubAccountMarginAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountMarginAccountQueryKey>
  >({
    queryKey: getSapiV1SubAccountMarginAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].margin.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountMarginAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountMarginAccountQueryKey>
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
      ...getSapiV1SubAccountMarginAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountMarginAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountMarginAccountQueryKey>
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
      ...getSapiV1SubAccountMarginAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountMarginAccountSummaryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/accountSummary', args] as const
}

export function getSapiV1SubAccountMarginAccountSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountMarginAccountSummaryQueryKey>
  >({
    queryKey: getSapiV1SubAccountMarginAccountSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].margin.accountSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountMarginAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountMarginAccountSummaryQueryKey>
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
      ...getSapiV1SubAccountMarginAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountMarginAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountMarginAccountSummaryQueryKey>
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
      ...getSapiV1SubAccountMarginAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountFuturesEnableMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/enable', 'POST'] as const
}

export function getPostSapiV1SubAccountFuturesEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountFuturesEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].futures.enable.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountFuturesEnable<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountFuturesEnableMutationOptions<
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

export function getSapiV1SubAccountFuturesAccountQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/account', args] as const
}

export function getSapiV1SubAccountFuturesAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesAccountQueryKey>
  >({
    queryKey: getSapiV1SubAccountFuturesAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountFuturesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesAccountQueryKey>
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
      ...getSapiV1SubAccountFuturesAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountFuturesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesAccountQueryKey>
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
      ...getSapiV1SubAccountFuturesAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesAccountSummaryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/accountSummary', args] as const
}

export function getSapiV1SubAccountFuturesAccountSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesAccountSummaryQueryKey>
  >({
    queryKey: getSapiV1SubAccountFuturesAccountSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.accountSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountFuturesAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesAccountSummaryQueryKey>
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
      ...getSapiV1SubAccountFuturesAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountFuturesAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesAccountSummaryQueryKey>
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
      ...getSapiV1SubAccountFuturesAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesPositionRiskQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/positionRisk', args] as const
}

export function getSapiV1SubAccountFuturesPositionRiskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesPositionRiskQueryKey>
  >({
    queryKey: getSapiV1SubAccountFuturesPositionRiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.positionRisk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountFuturesPositionRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesPositionRiskQueryKey>
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
      ...getSapiV1SubAccountFuturesPositionRiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountFuturesPositionRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountFuturesPositionRiskQueryKey>
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
      ...getSapiV1SubAccountFuturesPositionRiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountFuturesTransferMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/transfer', 'POST'] as const
}

export function getPostSapiV1SubAccountFuturesTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountFuturesTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].futures.transfer.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountFuturesTransfer<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountFuturesTransferMutationOptions<
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

export function getPostSapiV1SubAccountMarginTransferMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/margin/transfer', 'POST'] as const
}

export function getPostSapiV1SubAccountMarginTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountMarginTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].margin.transfer.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountMarginTransfer<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountMarginTransferMutationOptions<
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

export function getPostSapiV1SubAccountTransferSubToSubMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/transfer/subToSub', 'POST'] as const
}

export function getPostSapiV1SubAccountTransferSubToSubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountTransferSubToSubMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].transfer.subToSub.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountTransferSubToSub<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountTransferSubToSubMutationOptions<
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

export function getPostSapiV1SubAccountTransferSubToMasterMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/transfer/subToMaster', 'POST'] as const
}

export function getPostSapiV1SubAccountTransferSubToMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountTransferSubToMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].transfer.subToMaster.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountTransferSubToMaster<
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
                  (typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']
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
  const mutationDefaults = getPostSapiV1SubAccountTransferSubToMasterMutationOptions<
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

export function getSapiV1SubAccountTransferSubUserHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/transfer/subUserHistory', args] as const
}

export function getSapiV1SubAccountTransferSubUserHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountTransferSubUserHistoryQueryKey>
  >({
    queryKey: getSapiV1SubAccountTransferSubUserHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].transfer.subUserHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountTransferSubUserHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountTransferSubUserHistoryQueryKey>
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
      ...getSapiV1SubAccountTransferSubUserHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountTransferSubUserHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountTransferSubUserHistoryQueryKey>
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
      ...getSapiV1SubAccountTransferSubUserHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountUniversalTransferQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/universalTransfer', args] as const
}

export function getSapiV1SubAccountUniversalTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountUniversalTransferQueryKey>
  >({
    queryKey: getSapiV1SubAccountUniversalTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].universalTransfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountUniversalTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountUniversalTransferQueryKey>
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
      ...getSapiV1SubAccountUniversalTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountUniversalTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountUniversalTransferQueryKey>
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
      ...getSapiV1SubAccountUniversalTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountUniversalTransferMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/universalTransfer', 'POST'] as const
}

export function getPostSapiV1SubAccountUniversalTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountUniversalTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].universalTransfer.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountUniversalTransfer<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountUniversalTransferMutationOptions<
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

export function getSapiV2SubAccountFuturesAccountQueryKey(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/account', args] as const
}

export function getSapiV2SubAccountFuturesAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesAccountQueryKey>
  >({
    queryKey: getSapiV2SubAccountFuturesAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2SubAccountFuturesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesAccountQueryKey>
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
      ...getSapiV2SubAccountFuturesAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2SubAccountFuturesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesAccountQueryKey>
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
      ...getSapiV2SubAccountFuturesAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2SubAccountFuturesAccountSummaryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/accountSummary', args] as const
}

export function getSapiV2SubAccountFuturesAccountSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesAccountSummaryQueryKey>
  >({
    queryKey: getSapiV2SubAccountFuturesAccountSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.accountSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2SubAccountFuturesAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesAccountSummaryQueryKey>
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
      ...getSapiV2SubAccountFuturesAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2SubAccountFuturesAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesAccountSummaryQueryKey>
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
      ...getSapiV2SubAccountFuturesAccountSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2SubAccountFuturesPositionRiskQueryKey(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/positionRisk', args] as const
}

export function getSapiV2SubAccountFuturesPositionRiskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesPositionRiskQueryKey>
  >({
    queryKey: getSapiV2SubAccountFuturesPositionRiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.positionRisk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2SubAccountFuturesPositionRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesPositionRiskQueryKey>
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
      ...getSapiV2SubAccountFuturesPositionRiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2SubAccountFuturesPositionRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2SubAccountFuturesPositionRiskQueryKey>
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
      ...getSapiV2SubAccountFuturesPositionRiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountBlvtEnableMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/blvt/enable', 'POST'] as const
}

export function getPostSapiV1SubAccountBlvtEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountBlvtEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].blvt.enable.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountBlvtEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountBlvtEnableMutationOptions<
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

export function getPostSapiV1ManagedSubaccountDepositMutationKey() {
  return ['sapi', '/sapi/v1/managed-subaccount/deposit', 'POST'] as const
}

export function getPostSapiV1ManagedSubaccountDepositMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ManagedSubaccountDepositMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['managed-subaccount'].deposit.$post(args, options))
    },
  })
}

export function usePostSapiV1ManagedSubaccountDeposit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ManagedSubaccountDepositMutationOptions<
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

export function getSapiV1ManagedSubaccountAssetQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/asset', args] as const
}

export function getSapiV1ManagedSubaccountAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountAssetQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].asset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1ManagedSubaccountWithdrawMutationKey() {
  return ['sapi', '/sapi/v1/managed-subaccount/withdraw', 'POST'] as const
}

export function getPostSapiV1ManagedSubaccountWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ManagedSubaccountWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['managed-subaccount'].withdraw.$post(args, options))
    },
  })
}

export function usePostSapiV1ManagedSubaccountWithdraw<
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
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ManagedSubaccountWithdrawMutationOptions<
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

export function getSapiV1ManagedSubaccountAccountSnapshotQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/accountSnapshot', args] as const
}

export function getSapiV1ManagedSubaccountAccountSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountAccountSnapshotQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountAccountSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].accountSnapshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountAccountSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountAccountSnapshotQueryKey>
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
      ...getSapiV1ManagedSubaccountAccountSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountAccountSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountAccountSnapshotQueryKey>
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
      ...getSapiV1ManagedSubaccountAccountSnapshotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForInvestor', args] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountQueryTransLogForInvestor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountQueryTransLogForInvestor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForTradeParent', args] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountQueryTransLogForTradeParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountQueryTransLogForTradeParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountFetchFutureAssetQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/fetch-future-asset', args] as const
}

export function getSapiV1ManagedSubaccountFetchFutureAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountFetchFutureAssetQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountFetchFutureAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountFetchFutureAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountFetchFutureAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountFetchFutureAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountFetchFutureAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountFetchFutureAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountFetchFutureAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountMarginAssetQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/marginAsset', args] as const
}

export function getSapiV1ManagedSubaccountMarginAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountMarginAssetQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountMarginAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].marginAsset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountMarginAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountMarginAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountMarginAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountMarginAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountMarginAssetQueryKey>
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
      ...getSapiV1ManagedSubaccountMarginAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountInfoQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/info', args] as const
}

export function getSapiV1ManagedSubaccountInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountInfoQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountInfoQueryKey>
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
      ...getSapiV1ManagedSubaccountInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountInfoQueryKey>
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
      ...getSapiV1ManagedSubaccountInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountDepositAddressQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/deposit/address', args] as const
}

export function getSapiV1ManagedSubaccountDepositAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountDepositAddressQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountDepositAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].deposit.address.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountDepositAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountDepositAddressQueryKey>
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
      ...getSapiV1ManagedSubaccountDepositAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountDepositAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountDepositAddressQueryKey>
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
      ...getSapiV1ManagedSubaccountDepositAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/query-trans-log', args] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogQueryKey>
  >({
    queryKey: getSapiV1ManagedSubaccountQueryTransLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['managed-subaccount']['query-trans-log'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ManagedSubaccountQueryTransLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ManagedSubaccountQueryTransLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogQueryKey>
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
      ...getSapiV1ManagedSubaccountQueryTransLogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/subAccountApi/ipRestriction', args] as const
}

export function getSapiV1SubAccountSubAccountApiIpRestrictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey>
  >({
    queryKey: getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountSubAccountApiIpRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey>
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
      ...getSapiV1SubAccountSubAccountApiIpRestrictionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountSubAccountApiIpRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey>
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
      ...getSapiV1SubAccountSubAccountApiIpRestrictionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList', 'DELETE'] as const
}

export function getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
      >,
    ) {
      return parseResponse(
        client.sapi.v1['sub-account'].subAccountApi.ipRestriction.ipList.$delete(args, options),
      )
    },
  })
}

export function useDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpList<
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
                  (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
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
  const mutationDefaults = getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListMutationOptions<
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

export function getSapiV1SubAccountTransactionStatisticsQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/transaction-statistics', args] as const
}

export function getSapiV1SubAccountTransactionStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountTransactionStatisticsQueryKey>
  >({
    queryKey: getSapiV1SubAccountTransactionStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['sub-account']['transaction-statistics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SubAccountTransactionStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountTransactionStatisticsQueryKey>
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
      ...getSapiV1SubAccountTransactionStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SubAccountTransactionStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SubAccountTransactionStatisticsQueryKey>
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
      ...getSapiV1SubAccountTransactionStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SubAccountEoptionsEnableMutationKey() {
  return ['sapi', '/sapi/v1/sub-account/eoptions/enable', 'POST'] as const
}

export function getPostSapiV1SubAccountEoptionsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SubAccountEoptionsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['sub-account'].eoptions.enable.$post(args, options))
    },
  })
}

export function usePostSapiV1SubAccountEoptionsEnable<
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
                ReturnType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SubAccountEoptionsEnableMutationOptions<
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

export function getPostSapiV2SubAccountSubAccountApiIpRestrictionMutationKey() {
  return ['sapi', '/sapi/v2/sub-account/subAccountApi/ipRestriction', 'POST'] as const
}

export function getPostSapiV2SubAccountSubAccountApiIpRestrictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV2SubAccountSubAccountApiIpRestrictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v2['sub-account'].subAccountApi.ipRestriction.$post(args, options),
      )
    },
  })
}

export function usePostSapiV2SubAccountSubAccountApiIpRestriction<
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
                  (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
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
  const mutationDefaults = getPostSapiV2SubAccountSubAccountApiIpRestrictionMutationOptions<
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

export function getSapiV4SubAccountAssetsQueryKey(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
) {
  return ['sapi', '/sapi/v4/sub-account/assets', args] as const
}

export function getSapiV4SubAccountAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV4SubAccountAssetsQueryKey>
  >({
    queryKey: getSapiV4SubAccountAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v4['sub-account'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV4SubAccountAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV4SubAccountAssetsQueryKey>
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
      ...getSapiV4SubAccountAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV4SubAccountAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV4SubAccountAssetsQueryKey>
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
      ...getSapiV4SubAccountAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3UserDataStreamMutationKey() {
  return ['api', '/api/v3/userDataStream', 'PUT'] as const
}

export function getPutApiV3UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.userDataStream.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3UserDataStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.userDataStream.$put>) {
      return parseResponse(client.api.v3.userDataStream.$put(args, options))
    },
  })
}

export function usePutApiV3UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.userDataStream.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3UserDataStreamMutationKey() {
  return ['api', '/api/v3/userDataStream', 'POST'] as const
}

export function getPostApiV3UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3UserDataStreamMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.userDataStream.$post(undefined, options))
    },
  })
}

export function usePostApiV3UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$post>>>
          >
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
  const mutationDefaults = getPostApiV3UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3UserDataStreamMutationKey() {
  return ['api', '/api/v3/userDataStream', 'DELETE'] as const
}

export function getDeleteApiV3UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.userDataStream.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3UserDataStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.userDataStream.$delete>) {
      return parseResponse(client.api.v3.userDataStream.$delete(args, options))
    },
  })
}

export function useDeleteApiV3UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.userDataStream.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getPutSapiV1UserDataStreamMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'PUT'] as const
}

export function getPutSapiV1UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.userDataStream.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSapiV1UserDataStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.userDataStream.$put>) {
      return parseResponse(client.sapi.v1.userDataStream.$put(args, options))
    },
  })
}

export function usePutSapiV1UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.userDataStream.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSapiV1UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1UserDataStreamMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'POST'] as const
}

export function getPostSapiV1UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1UserDataStreamMutationKey(),
    async mutationFn() {
      return parseResponse(client.sapi.v1.userDataStream.$post(undefined, options))
    },
  })
}

export function usePostSapiV1UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$post>>>
          >
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
  const mutationDefaults = getPostSapiV1UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSapiV1UserDataStreamMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'DELETE'] as const
}

export function getDeleteSapiV1UserDataStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.userDataStream.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1UserDataStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.userDataStream.$delete>) {
      return parseResponse(client.sapi.v1.userDataStream.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1UserDataStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.userDataStream.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1UserDataStreamMutationOptions<TError, TOnMutateResult>(
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

export function getPutSapiV1UserDataStreamIsolatedMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'PUT'] as const
}

export function getPutSapiV1UserDataStreamIsolatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSapiV1UserDataStreamIsolatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put>) {
      return parseResponse(client.sapi.v1.userDataStream.isolated.$put(args, options))
    },
  })
}

export function usePutSapiV1UserDataStreamIsolated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSapiV1UserDataStreamIsolatedMutationOptions<
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

export function getPostSapiV1UserDataStreamIsolatedMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'POST'] as const
}

export function getPostSapiV1UserDataStreamIsolatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1UserDataStreamIsolatedMutationKey(),
    async mutationFn() {
      return parseResponse(client.sapi.v1.userDataStream.isolated.$post(undefined, options))
    },
  })
}

export function usePostSapiV1UserDataStreamIsolated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$post>>
            >
          >
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
  const mutationDefaults = getPostSapiV1UserDataStreamIsolatedMutationOptions<
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

export function getDeleteSapiV1UserDataStreamIsolatedMutationKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'DELETE'] as const
}

export function getDeleteSapiV1UserDataStreamIsolatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1UserDataStreamIsolatedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete>,
    ) {
      return parseResponse(client.sapi.v1.userDataStream.isolated.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1UserDataStreamIsolated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1UserDataStreamIsolatedMutationOptions<
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

export function getSapiV1FiatOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
) {
  return ['sapi', '/sapi/v1/fiat/orders', args] as const
}

export function getSapiV1FiatOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FiatOrdersQueryKey>
  >({
    queryKey: getSapiV1FiatOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.fiat.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1FiatOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FiatOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1FiatOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1FiatOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FiatOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1FiatOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1FiatPaymentsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
) {
  return ['sapi', '/sapi/v1/fiat/payments', args] as const
}

export function getSapiV1FiatPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FiatPaymentsQueryKey>
  >({
    queryKey: getSapiV1FiatPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.fiat.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1FiatPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FiatPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1FiatPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1FiatPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FiatPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1FiatPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1LendingProjectListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
) {
  return ['sapi', '/sapi/v1/lending/project/list', args] as const
}

export function getSapiV1LendingProjectListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingProjectListQueryKey>
  >({
    queryKey: getSapiV1LendingProjectListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending.project.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingProjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingProjectListQueryKey>
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
      ...getSapiV1LendingProjectListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingProjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingProjectListQueryKey>
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
      ...getSapiV1LendingProjectListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LendingCustomizedFixedPurchaseMutationKey() {
  return ['sapi', '/sapi/v1/lending/customizedFixed/purchase', 'POST'] as const
}

export function getPostSapiV1LendingCustomizedFixedPurchaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingCustomizedFixedPurchaseMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>,
    ) {
      return parseResponse(client.sapi.v1.lending.customizedFixed.purchase.$post(args, options))
    },
  })
}

export function usePostSapiV1LendingCustomizedFixedPurchase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingCustomizedFixedPurchaseMutationOptions<
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

export function getSapiV1LendingProjectPositionListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
) {
  return ['sapi', '/sapi/v1/lending/project/position/list', args] as const
}

export function getSapiV1LendingProjectPositionListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingProjectPositionListQueryKey>
  >({
    queryKey: getSapiV1LendingProjectPositionListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending.project.position.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingProjectPositionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingProjectPositionListQueryKey>
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
      ...getSapiV1LendingProjectPositionListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingProjectPositionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingProjectPositionListQueryKey>
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
      ...getSapiV1LendingProjectPositionListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LendingPositionChangedMutationKey() {
  return ['sapi', '/sapi/v1/lending/positionChanged', 'POST'] as const
}

export function getPostSapiV1LendingPositionChangedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.lending.positionChanged.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingPositionChangedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post>) {
      return parseResponse(client.sapi.v1.lending.positionChanged.$post(args, options))
    },
  })
}

export function usePostSapiV1LendingPositionChanged<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.lending.positionChanged.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingPositionChangedMutationOptions<
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

export function getSapiV1MiningPubAlgoListQueryKey() {
  return ['sapi', '/sapi/v1/mining/pub/algoList'] as const
}

export function getSapiV1MiningPubAlgoListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPubAlgoListQueryKey>
  >({
    queryKey: getSapiV1MiningPubAlgoListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.pub.algoList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningPubAlgoList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPubAlgoListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MiningPubAlgoListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningPubAlgoList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPubAlgoListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MiningPubAlgoListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MiningPubCoinListQueryKey() {
  return ['sapi', '/sapi/v1/mining/pub/coinList'] as const
}

export function getSapiV1MiningPubCoinListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPubCoinListQueryKey>
  >({
    queryKey: getSapiV1MiningPubCoinListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.pub.coinList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningPubCoinList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPubCoinListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1MiningPubCoinListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningPubCoinList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPubCoinListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1MiningPubCoinListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1MiningWorkerDetailQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
) {
  return ['sapi', '/sapi/v1/mining/worker/detail', args] as const
}

export function getSapiV1MiningWorkerDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningWorkerDetailQueryKey>
  >({
    queryKey: getSapiV1MiningWorkerDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.worker.detail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningWorkerDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningWorkerDetailQueryKey>
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
      ...getSapiV1MiningWorkerDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningWorkerDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningWorkerDetailQueryKey>
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
      ...getSapiV1MiningWorkerDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningWorkerListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/worker/list', args] as const
}

export function getSapiV1MiningWorkerListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningWorkerListQueryKey>
  >({
    queryKey: getSapiV1MiningWorkerListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.worker.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningWorkerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningWorkerListQueryKey>
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
      ...getSapiV1MiningWorkerListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningWorkerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningWorkerListQueryKey>
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
      ...getSapiV1MiningWorkerListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/list', args] as const
}

export function getSapiV1MiningPaymentListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentListQueryKey>
  >({
    queryKey: getSapiV1MiningPaymentListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.payment.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningPaymentList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentListQueryKey>
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
      ...getSapiV1MiningPaymentListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningPaymentList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentListQueryKey>
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
      ...getSapiV1MiningPaymentListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentOtherQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/other', args] as const
}

export function getSapiV1MiningPaymentOtherQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentOtherQueryKey>
  >({
    queryKey: getSapiV1MiningPaymentOtherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.payment.other.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningPaymentOther<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentOtherQueryKey>
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
      ...getSapiV1MiningPaymentOtherQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningPaymentOther<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentOtherQueryKey>
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
      ...getSapiV1MiningPaymentOtherQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningHashTransferConfigDetailsListQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config/details/list', args] as const
}

export function getSapiV1MiningHashTransferConfigDetailsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningHashTransferConfigDetailsListQueryKey>
  >({
    queryKey: getSapiV1MiningHashTransferConfigDetailsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining['hash-transfer'].config.details.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningHashTransferConfigDetailsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningHashTransferConfigDetailsListQueryKey>
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
      ...getSapiV1MiningHashTransferConfigDetailsListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningHashTransferConfigDetailsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningHashTransferConfigDetailsListQueryKey>
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
      ...getSapiV1MiningHashTransferConfigDetailsListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningHashTransferProfitDetailsQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/profit/details', args] as const
}

export function getSapiV1MiningHashTransferProfitDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningHashTransferProfitDetailsQueryKey>
  >({
    queryKey: getSapiV1MiningHashTransferProfitDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining['hash-transfer'].profit.details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningHashTransferProfitDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningHashTransferProfitDetailsQueryKey>
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
      ...getSapiV1MiningHashTransferProfitDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningHashTransferProfitDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningHashTransferProfitDetailsQueryKey>
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
      ...getSapiV1MiningHashTransferProfitDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1MiningHashTransferConfigMutationKey() {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config', 'POST'] as const
}

export function getPostSapiV1MiningHashTransferConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MiningHashTransferConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.mining['hash-transfer'].config.$post(args, options))
    },
  })
}

export function usePostSapiV1MiningHashTransferConfig<
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
                ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1MiningHashTransferConfigMutationOptions<
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

export function getPostSapiV1MiningHashTransferConfigCancelMutationKey() {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config/cancel', 'POST'] as const
}

export function getPostSapiV1MiningHashTransferConfigCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1MiningHashTransferConfigCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1.mining['hash-transfer'].config.cancel.$post(args, options),
      )
    },
  })
}

export function usePostSapiV1MiningHashTransferConfigCancel<
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
                  (typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']
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
  const mutationDefaults = getPostSapiV1MiningHashTransferConfigCancelMutationOptions<
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

export function getSapiV1MiningStatisticsUserStatusQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/status', args] as const
}

export function getSapiV1MiningStatisticsUserStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningStatisticsUserStatusQueryKey>
  >({
    queryKey: getSapiV1MiningStatisticsUserStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.statistics.user.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningStatisticsUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningStatisticsUserStatusQueryKey>
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
      ...getSapiV1MiningStatisticsUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningStatisticsUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningStatisticsUserStatusQueryKey>
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
      ...getSapiV1MiningStatisticsUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningStatisticsUserListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/list', args] as const
}

export function getSapiV1MiningStatisticsUserListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningStatisticsUserListQueryKey>
  >({
    queryKey: getSapiV1MiningStatisticsUserListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.statistics.user.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningStatisticsUserList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningStatisticsUserListQueryKey>
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
      ...getSapiV1MiningStatisticsUserListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningStatisticsUserList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningStatisticsUserListQueryKey>
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
      ...getSapiV1MiningStatisticsUserListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentUidQueryKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/uid', args] as const
}

export function getSapiV1MiningPaymentUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentUidQueryKey>
  >({
    queryKey: getSapiV1MiningPaymentUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.mining.payment.uid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1MiningPaymentUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentUidQueryKey>
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
      ...getSapiV1MiningPaymentUidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1MiningPaymentUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1MiningPaymentUidQueryKey>
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
      ...getSapiV1MiningPaymentUidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1FuturesTransferQueryKey(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/futures/transfer', args] as const
}

export function getSapiV1FuturesTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FuturesTransferQueryKey>
  >({
    queryKey: getSapiV1FuturesTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.futures.transfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1FuturesTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FuturesTransferQueryKey>
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
      ...getSapiV1FuturesTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1FuturesTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FuturesTransferQueryKey>
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
      ...getSapiV1FuturesTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1FuturesTransferMutationKey() {
  return ['sapi', '/sapi/v1/futures/transfer', 'POST'] as const
}

export function getPostSapiV1FuturesTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.futures.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1FuturesTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.futures.transfer.$post>) {
      return parseResponse(client.sapi.v1.futures.transfer.$post(args, options))
    },
  })
}

export function usePostSapiV1FuturesTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.futures.transfer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1FuturesTransferMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1FuturesHistDataLinkQueryKey(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
) {
  return ['sapi', '/sapi/v1/futures/histDataLink', args] as const
}

export function getSapiV1FuturesHistDataLinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FuturesHistDataLinkQueryKey>
  >({
    queryKey: getSapiV1FuturesHistDataLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.futures.histDataLink.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1FuturesHistDataLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FuturesHistDataLinkQueryKey>
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
      ...getSapiV1FuturesHistDataLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1FuturesHistDataLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1FuturesHistDataLinkQueryKey>
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
      ...getSapiV1FuturesHistDataLinkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1AlgoFuturesNewOrderVpMutationKey() {
  return ['sapi', '/sapi/v1/algo/futures/newOrderVp', 'POST'] as const
}

export function getPostSapiV1AlgoFuturesNewOrderVpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AlgoFuturesNewOrderVpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>) {
      return parseResponse(client.sapi.v1.algo.futures.newOrderVp.$post(args, options))
    },
  })
}

export function usePostSapiV1AlgoFuturesNewOrderVp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AlgoFuturesNewOrderVpMutationOptions<
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

export function getPostSapiV1AlgoFuturesNewOrderTwapMutationKey() {
  return ['sapi', '/sapi/v1/algo/futures/newOrderTwap', 'POST'] as const
}

export function getPostSapiV1AlgoFuturesNewOrderTwapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AlgoFuturesNewOrderTwapMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>,
    ) {
      return parseResponse(client.sapi.v1.algo.futures.newOrderTwap.$post(args, options))
    },
  })
}

export function usePostSapiV1AlgoFuturesNewOrderTwap<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AlgoFuturesNewOrderTwapMutationOptions<
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

export function getDeleteSapiV1AlgoFuturesOrderMutationKey() {
  return ['sapi', '/sapi/v1/algo/futures/order', 'DELETE'] as const
}

export function getDeleteSapiV1AlgoFuturesOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.order.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1AlgoFuturesOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete>) {
      return parseResponse(client.sapi.v1.algo.futures.order.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1AlgoFuturesOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.order.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1AlgoFuturesOrderMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1AlgoFuturesOpenOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/openOrders', args] as const
}

export function getSapiV1AlgoFuturesOpenOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesOpenOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoFuturesOpenOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.futures.openOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoFuturesOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesOpenOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoFuturesOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesOpenOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AlgoFuturesHistoricalOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/historicalOrders', args] as const
}

export function getSapiV1AlgoFuturesHistoricalOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesHistoricalOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoFuturesHistoricalOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.futures.historicalOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoFuturesHistoricalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesHistoricalOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesHistoricalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoFuturesHistoricalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesHistoricalOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesHistoricalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AlgoFuturesSubOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/subOrders', args] as const
}

export function getSapiV1AlgoFuturesSubOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesSubOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoFuturesSubOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.futures.subOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoFuturesSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesSubOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesSubOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoFuturesSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoFuturesSubOrdersQueryKey>
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
      ...getSapiV1AlgoFuturesSubOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1AlgoSpotNewOrderTwapMutationKey() {
  return ['sapi', '/sapi/v1/algo/spot/newOrderTwap', 'POST'] as const
}

export function getPostSapiV1AlgoSpotNewOrderTwapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1AlgoSpotNewOrderTwapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>) {
      return parseResponse(client.sapi.v1.algo.spot.newOrderTwap.$post(args, options))
    },
  })
}

export function usePostSapiV1AlgoSpotNewOrderTwap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1AlgoSpotNewOrderTwapMutationOptions<
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

export function getDeleteSapiV1AlgoSpotOrderMutationKey() {
  return ['sapi', '/sapi/v1/algo/spot/order', 'DELETE'] as const
}

export function getDeleteSapiV1AlgoSpotOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.order.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSapiV1AlgoSpotOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>) {
      return parseResponse(client.sapi.v1.algo.spot.order.$delete(args, options))
    },
  })
}

export function useDeleteSapiV1AlgoSpotOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.order.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSapiV1AlgoSpotOrderMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1AlgoSpotOpenOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/openOrders', args] as const
}

export function getSapiV1AlgoSpotOpenOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotOpenOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoSpotOpenOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.spot.openOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoSpotOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotOpenOrdersQueryKey>
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
      ...getSapiV1AlgoSpotOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoSpotOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotOpenOrdersQueryKey>
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
      ...getSapiV1AlgoSpotOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AlgoSpotHistoricalOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/historicalOrders', args] as const
}

export function getSapiV1AlgoSpotHistoricalOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotHistoricalOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoSpotHistoricalOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.spot.historicalOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoSpotHistoricalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotHistoricalOrdersQueryKey>
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
      ...getSapiV1AlgoSpotHistoricalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoSpotHistoricalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotHistoricalOrdersQueryKey>
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
      ...getSapiV1AlgoSpotHistoricalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1AlgoSpotSubOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/subOrders', args] as const
}

export function getSapiV1AlgoSpotSubOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotSubOrdersQueryKey>
  >({
    queryKey: getSapiV1AlgoSpotSubOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.algo.spot.subOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1AlgoSpotSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotSubOrdersQueryKey>
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
      ...getSapiV1AlgoSpotSubOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1AlgoSpotSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1AlgoSpotSubOrdersQueryKey>
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
      ...getSapiV1AlgoSpotSubOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1PortfolioAccountQueryKey(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
) {
  return ['sapi', '/sapi/v1/portfolio/account', args] as const
}

export function getSapiV1PortfolioAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioAccountQueryKey>
  >({
    queryKey: getSapiV1PortfolioAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioAccountQueryKey>
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
      ...getSapiV1PortfolioAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioAccountQueryKey>
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
      ...getSapiV1PortfolioAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1PortfolioCollateralRateQueryKey() {
  return ['sapi', '/sapi/v1/portfolio/collateralRate'] as const
}

export function getSapiV1PortfolioCollateralRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioCollateralRateQueryKey>
  >({
    queryKey: getSapiV1PortfolioCollateralRateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio.collateralRate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioCollateralRateQueryKey>
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
      ...getSapiV1PortfolioCollateralRateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>>
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
              Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioCollateralRateQueryKey>
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
      ...getSapiV1PortfolioCollateralRateQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2PortfolioCollateralRateQueryKey(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
) {
  return ['sapi', '/sapi/v2/portfolio/collateralRate', args] as const
}

export function getSapiV2PortfolioCollateralRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2PortfolioCollateralRateQueryKey>
  >({
    queryKey: getSapiV2PortfolioCollateralRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.portfolio.collateralRate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2PortfolioCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2PortfolioCollateralRateQueryKey>
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
      ...getSapiV2PortfolioCollateralRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2PortfolioCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2PortfolioCollateralRateQueryKey>
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
      ...getSapiV2PortfolioCollateralRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1PortfolioPmLoanQueryKey(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
) {
  return ['sapi', '/sapi/v1/portfolio/pmLoan', args] as const
}

export function getSapiV1PortfolioPmLoanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioPmLoanQueryKey>
  >({
    queryKey: getSapiV1PortfolioPmLoanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio.pmLoan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioPmLoan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioPmLoanQueryKey>
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
      ...getSapiV1PortfolioPmLoanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioPmLoan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioPmLoanQueryKey>
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
      ...getSapiV1PortfolioPmLoanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1PortfolioRepayMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/repay', 'POST'] as const
}

export function getPostSapiV1PortfolioRepayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.repay.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.portfolio.repay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioRepayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.portfolio.repay.$post>) {
      return parseResponse(client.sapi.v1.portfolio.repay.$post(args, options))
    },
  })
}

export function usePostSapiV1PortfolioRepay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.repay.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.portfolio.repay.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1PortfolioRepayMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1PortfolioInterestHistoryQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/interest-history', args] as const
}

export function getSapiV1PortfolioInterestHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioInterestHistoryQueryKey>
  >({
    queryKey: getSapiV1PortfolioInterestHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio['interest-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioInterestHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioInterestHistoryQueryKey>
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
      ...getSapiV1PortfolioInterestHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioInterestHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioInterestHistoryQueryKey>
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
      ...getSapiV1PortfolioInterestHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1PortfolioAssetIndexPriceQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/asset-index-price', args] as const
}

export function getSapiV1PortfolioAssetIndexPriceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioAssetIndexPriceQueryKey>
  >({
    queryKey: getSapiV1PortfolioAssetIndexPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio['asset-index-price'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioAssetIndexPrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioAssetIndexPriceQueryKey>
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
      ...getSapiV1PortfolioAssetIndexPriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioAssetIndexPrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioAssetIndexPriceQueryKey>
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
      ...getSapiV1PortfolioAssetIndexPriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1PortfolioAutoCollectionMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/auto-collection', 'POST'] as const
}

export function getPostSapiV1PortfolioAutoCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioAutoCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.portfolio['auto-collection'].$post(args, options))
    },
  })
}

export function usePostSapiV1PortfolioAutoCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1PortfolioAutoCollectionMutationOptions<
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

export function getPostSapiV1PortfolioBnbTransferMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/bnb-transfer', 'POST'] as const
}

export function getPostSapiV1PortfolioBnbTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioBnbTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.portfolio['bnb-transfer'].$post(args, options))
    },
  })
}

export function usePostSapiV1PortfolioBnbTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1PortfolioBnbTransferMutationOptions<
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

export function getSapiV1PortfolioRepayFuturesSwitchQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-switch', args] as const
}

export function getSapiV1PortfolioRepayFuturesSwitchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioRepayFuturesSwitchQueryKey>
  >({
    queryKey: getSapiV1PortfolioRepayFuturesSwitchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio['repay-futures-switch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioRepayFuturesSwitch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioRepayFuturesSwitchQueryKey>
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
      ...getSapiV1PortfolioRepayFuturesSwitchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioRepayFuturesSwitch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioRepayFuturesSwitchQueryKey>
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
      ...getSapiV1PortfolioRepayFuturesSwitchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1PortfolioRepayFuturesSwitchMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-switch', 'POST'] as const
}

export function getPostSapiV1PortfolioRepayFuturesSwitchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioRepayFuturesSwitchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$post(args, options))
    },
  })
}

export function usePostSapiV1PortfolioRepayFuturesSwitch<
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
                ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1PortfolioRepayFuturesSwitchMutationOptions<
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

export function getPostSapiV1PortfolioRepayFuturesNegativeBalanceMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-negative-balance', 'POST'] as const
}

export function getPostSapiV1PortfolioRepayFuturesNegativeBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioRepayFuturesNegativeBalanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1.portfolio['repay-futures-negative-balance'].$post(args, options),
      )
    },
  })
}

export function usePostSapiV1PortfolioRepayFuturesNegativeBalance<
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
                  (typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']
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
  const mutationDefaults = getPostSapiV1PortfolioRepayFuturesNegativeBalanceMutationOptions<
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

export function getSapiV1PortfolioMarginAssetLeverageQueryKey() {
  return ['sapi', '/sapi/v1/portfolio/margin-asset-leverage'] as const
}

export function getSapiV1PortfolioMarginAssetLeverageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioMarginAssetLeverageQueryKey>
  >({
    queryKey: getSapiV1PortfolioMarginAssetLeverageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PortfolioMarginAssetLeverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioMarginAssetLeverageQueryKey>
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
      ...getSapiV1PortfolioMarginAssetLeverageQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PortfolioMarginAssetLeverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PortfolioMarginAssetLeverageQueryKey>
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
      ...getSapiV1PortfolioMarginAssetLeverageQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1PortfolioAssetCollectionMutationKey() {
  return ['sapi', '/sapi/v1/portfolio/asset-collection', 'POST'] as const
}

export function getPostSapiV1PortfolioAssetCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1PortfolioAssetCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.portfolio['asset-collection'].$post(args, options))
    },
  })
}

export function usePostSapiV1PortfolioAssetCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1PortfolioAssetCollectionMutationOptions<
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

export function getSapiV1BlvtTokenInfoQueryKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/tokenInfo', args] as const
}

export function getSapiV1BlvtTokenInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtTokenInfoQueryKey>
  >({
    queryKey: getSapiV1BlvtTokenInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.blvt.tokenInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1BlvtTokenInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtTokenInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1BlvtTokenInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1BlvtTokenInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtTokenInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1BlvtTokenInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1BlvtSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/blvt/subscribe', 'POST'] as const
}

export function getPostSapiV1BlvtSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1BlvtSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post>) {
      return parseResponse(client.sapi.v1.blvt.subscribe.$post(args, options))
    },
  })
}

export function usePostSapiV1BlvtSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1BlvtSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1BlvtSubscribeRecordQueryKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/subscribe/record', args] as const
}

export function getSapiV1BlvtSubscribeRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtSubscribeRecordQueryKey>
  >({
    queryKey: getSapiV1BlvtSubscribeRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.blvt.subscribe.record.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1BlvtSubscribeRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtSubscribeRecordQueryKey>
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
      ...getSapiV1BlvtSubscribeRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1BlvtSubscribeRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtSubscribeRecordQueryKey>
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
      ...getSapiV1BlvtSubscribeRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1BlvtRedeemMutationKey() {
  return ['sapi', '/sapi/v1/blvt/redeem', 'POST'] as const
}

export function getPostSapiV1BlvtRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.blvt.redeem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1BlvtRedeemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.blvt.redeem.$post>) {
      return parseResponse(client.sapi.v1.blvt.redeem.$post(args, options))
    },
  })
}

export function usePostSapiV1BlvtRedeem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.blvt.redeem.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1BlvtRedeemMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1BlvtRedeemRecordQueryKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/redeem/record', args] as const
}

export function getSapiV1BlvtRedeemRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtRedeemRecordQueryKey>
  >({
    queryKey: getSapiV1BlvtRedeemRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.blvt.redeem.record.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1BlvtRedeemRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtRedeemRecordQueryKey>
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
      ...getSapiV1BlvtRedeemRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1BlvtRedeemRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtRedeemRecordQueryKey>
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
      ...getSapiV1BlvtRedeemRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1BlvtUserLimitQueryKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/userLimit', args] as const
}

export function getSapiV1BlvtUserLimitQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtUserLimitQueryKey>
  >({
    queryKey: getSapiV1BlvtUserLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.blvt.userLimit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1BlvtUserLimit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtUserLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1BlvtUserLimitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1BlvtUserLimit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1BlvtUserLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1BlvtUserLimitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
) {
  return ['sapi', '/sapi/v1/c2c/orderMatch/listUserOrderHistory', args] as const
}

export function getSapiV1C2cOrderMatchListUserOrderHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey>
  >({
    queryKey: getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1C2cOrderMatchListUserOrderHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey>
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
      ...getSapiV1C2cOrderMatchListUserOrderHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1C2cOrderMatchListUserOrderHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey>
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
      ...getSapiV1C2cOrderMatchListUserOrderHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanVipOngoingOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/ongoing/orders', args] as const
}

export function getSapiV1LoanVipOngoingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipOngoingOrdersQueryKey>
  >({
    queryKey: getSapiV1LoanVipOngoingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.ongoing.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipOngoingOrdersQueryKey>
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
      ...getSapiV1LoanVipOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipOngoingOrdersQueryKey>
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
      ...getSapiV1LoanVipOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanVipRepayMutationKey() {
  return ['sapi', '/sapi/v1/loan/vip/repay', 'POST'] as const
}

export function getPostSapiV1LoanVipRepayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanVipRepayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post>) {
      return parseResponse(client.sapi.v1.loan.vip.repay.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanVipRepay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanVipRepayMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanVipRepayHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/repay/history', args] as const
}

export function getSapiV1LoanVipRepayHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRepayHistoryQueryKey>
  >({
    queryKey: getSapiV1LoanVipRepayHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.repay.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRepayHistoryQueryKey>
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
      ...getSapiV1LoanVipRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRepayHistoryQueryKey>
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
      ...getSapiV1LoanVipRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanVipCollateralAccountQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/account', args] as const
}

export function getSapiV1LoanVipCollateralAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipCollateralAccountQueryKey>
  >({
    queryKey: getSapiV1LoanVipCollateralAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.collateral.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipCollateralAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipCollateralAccountQueryKey>
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
      ...getSapiV1LoanVipCollateralAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipCollateralAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipCollateralAccountQueryKey>
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
      ...getSapiV1LoanVipCollateralAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanVipBorrowMutationKey() {
  return ['sapi', '/sapi/v1/loan/vip/borrow', 'POST'] as const
}

export function getPostSapiV1LoanVipBorrowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.borrow.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanVipBorrowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post>) {
      return parseResponse(client.sapi.v1.loan.vip.borrow.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanVipBorrow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.borrow.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanVipBorrowMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanVipLoanableDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/loanable/data', args] as const
}

export function getSapiV1LoanVipLoanableDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipLoanableDataQueryKey>
  >({
    queryKey: getSapiV1LoanVipLoanableDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.loanable.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipLoanableDataQueryKey>
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
      ...getSapiV1LoanVipLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipLoanableDataQueryKey>
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
      ...getSapiV1LoanVipLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanVipCollateralDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/data', args] as const
}

export function getSapiV1LoanVipCollateralDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipCollateralDataQueryKey>
  >({
    queryKey: getSapiV1LoanVipCollateralDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.collateral.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipCollateralDataQueryKey>
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
      ...getSapiV1LoanVipCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipCollateralDataQueryKey>
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
      ...getSapiV1LoanVipCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanVipRequestDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/data', args] as const
}

export function getSapiV1LoanVipRequestDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRequestDataQueryKey>
  >({
    queryKey: getSapiV1LoanVipRequestDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.request.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipRequestData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRequestDataQueryKey>
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
      ...getSapiV1LoanVipRequestDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipRequestData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRequestDataQueryKey>
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
      ...getSapiV1LoanVipRequestDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanVipRequestInterestRateQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/interestRate', args] as const
}

export function getSapiV1LoanVipRequestInterestRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRequestInterestRateQueryKey>
  >({
    queryKey: getSapiV1LoanVipRequestInterestRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.vip.request.interestRate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanVipRequestInterestRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRequestInterestRateQueryKey>
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
      ...getSapiV1LoanVipRequestInterestRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanVipRequestInterestRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanVipRequestInterestRateQueryKey>
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
      ...getSapiV1LoanVipRequestInterestRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanVipRenewMutationKey() {
  return ['sapi', '/sapi/v1/loan/vip/renew', 'POST'] as const
}

export function getPostSapiV1LoanVipRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.renew.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanVipRenewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post>) {
      return parseResponse(client.sapi.v1.loan.vip.renew.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanVipRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.renew.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanVipRenewMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanIncomeQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
) {
  return ['sapi', '/sapi/v1/loan/income', args] as const
}

export function getSapiV1LoanIncomeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sapi.v1.loan.income.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanIncomeQueryKey>
  >({
    queryKey: getSapiV1LoanIncomeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.income.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSapiV1LoanIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanIncomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1LoanIncomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanIncomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1LoanIncomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1LoanBorrowMutationKey() {
  return ['sapi', '/sapi/v1/loan/borrow', 'POST'] as const
}

export function getPostSapiV1LoanBorrowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.borrow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanBorrowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.borrow.$post>) {
      return parseResponse(client.sapi.v1.loan.borrow.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanBorrow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.borrow.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanBorrowMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanBorrowHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/borrow/history', args] as const
}

export function getSapiV1LoanBorrowHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanBorrowHistoryQueryKey>
  >({
    queryKey: getSapiV1LoanBorrowHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.borrow.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanBorrowHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanBorrowHistoryQueryKey>
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
      ...getSapiV1LoanBorrowHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanBorrowHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanBorrowHistoryQueryKey>
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
      ...getSapiV1LoanBorrowHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanOngoingOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v1/loan/ongoing/orders', args] as const
}

export function getSapiV1LoanOngoingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanOngoingOrdersQueryKey>
  >({
    queryKey: getSapiV1LoanOngoingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.ongoing.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanOngoingOrdersQueryKey>
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
      ...getSapiV1LoanOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanOngoingOrdersQueryKey>
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
      ...getSapiV1LoanOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanRepayMutationKey() {
  return ['sapi', '/sapi/v1/loan/repay', 'POST'] as const
}

export function getPostSapiV1LoanRepayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.repay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanRepayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.repay.$post>) {
      return parseResponse(client.sapi.v1.loan.repay.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanRepay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.repay.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanRepayMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanRepayHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/repay/history', args] as const
}

export function getSapiV1LoanRepayHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanRepayHistoryQueryKey>
  >({
    queryKey: getSapiV1LoanRepayHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.repay.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanRepayHistoryQueryKey>
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
      ...getSapiV1LoanRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanRepayHistoryQueryKey>
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
      ...getSapiV1LoanRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanAdjustLtvMutationKey() {
  return ['sapi', '/sapi/v1/loan/adjust/ltv', 'POST'] as const
}

export function getPostSapiV1LoanAdjustLtvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.adjust.ltv.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanAdjustLtvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post>) {
      return parseResponse(client.sapi.v1.loan.adjust.ltv.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanAdjustLtv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.adjust.ltv.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanAdjustLtvMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1LoanLtvAdjustmentHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/ltv/adjustment/history', args] as const
}

export function getSapiV1LoanLtvAdjustmentHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanLtvAdjustmentHistoryQueryKey>
  >({
    queryKey: getSapiV1LoanLtvAdjustmentHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.ltv.adjustment.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanLtvAdjustmentHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanLtvAdjustmentHistoryQueryKey>
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
      ...getSapiV1LoanLtvAdjustmentHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanLtvAdjustmentHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanLtvAdjustmentHistoryQueryKey>
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
      ...getSapiV1LoanLtvAdjustmentHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanLoanableDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/loanable/data', args] as const
}

export function getSapiV1LoanLoanableDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanLoanableDataQueryKey>
  >({
    queryKey: getSapiV1LoanLoanableDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.loanable.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanLoanableDataQueryKey>
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
      ...getSapiV1LoanLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanLoanableDataQueryKey>
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
      ...getSapiV1LoanLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanCollateralDataQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/collateral/data', args] as const
}

export function getSapiV1LoanCollateralDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanCollateralDataQueryKey>
  >({
    queryKey: getSapiV1LoanCollateralDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.collateral.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanCollateralDataQueryKey>
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
      ...getSapiV1LoanCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanCollateralDataQueryKey>
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
      ...getSapiV1LoanCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LoanRepayCollateralRateQueryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
) {
  return ['sapi', '/sapi/v1/loan/repay/collateral/rate', args] as const
}

export function getSapiV1LoanRepayCollateralRateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanRepayCollateralRateQueryKey>
  >({
    queryKey: getSapiV1LoanRepayCollateralRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.loan.repay.collateral.rate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LoanRepayCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanRepayCollateralRateQueryKey>
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
      ...getSapiV1LoanRepayCollateralRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LoanRepayCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LoanRepayCollateralRateQueryKey>
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
      ...getSapiV1LoanRepayCollateralRateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LoanCustomizeMarginCallMutationKey() {
  return ['sapi', '/sapi/v1/loan/customize/margin_call', 'POST'] as const
}

export function getPostSapiV1LoanCustomizeMarginCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.customize.margin_call.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LoanCustomizeMarginCallMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post>,
    ) {
      return parseResponse(client.sapi.v1.loan.customize.margin_call.$post(args, options))
    },
  })
}

export function usePostSapiV1LoanCustomizeMarginCall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.loan.customize.margin_call.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LoanCustomizeMarginCallMutationOptions<
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

export function getPostSapiV2LoanFlexibleBorrowMutationKey() {
  return ['sapi', '/sapi/v2/loan/flexible/borrow', 'POST'] as const
}

export function getPostSapiV2LoanFlexibleBorrowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV2LoanFlexibleBorrowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post>) {
      return parseResponse(client.sapi.v2.loan.flexible.borrow.$post(args, options))
    },
  })
}

export function usePostSapiV2LoanFlexibleBorrow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV2LoanFlexibleBorrowMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV2LoanFlexibleOngoingOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ongoing/orders', args] as const
}

export function getSapiV2LoanFlexibleOngoingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleOngoingOrdersQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleOngoingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.ongoing.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleOngoingOrdersQueryKey>
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
      ...getSapiV2LoanFlexibleOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleOngoingOrdersQueryKey>
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
      ...getSapiV2LoanFlexibleOngoingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleBorrowHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/borrow/history', args] as const
}

export function getSapiV2LoanFlexibleBorrowHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleBorrowHistoryQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleBorrowHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.borrow.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleBorrowHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleBorrowHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleBorrowHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleBorrowHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleBorrowHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleBorrowHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV2LoanFlexibleRepayMutationKey() {
  return ['sapi', '/sapi/v2/loan/flexible/repay', 'POST'] as const
}

export function getPostSapiV2LoanFlexibleRepayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV2LoanFlexibleRepayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post>) {
      return parseResponse(client.sapi.v2.loan.flexible.repay.$post(args, options))
    },
  })
}

export function usePostSapiV2LoanFlexibleRepay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV2LoanFlexibleRepayMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV2LoanFlexibleRepayHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/repay/history', args] as const
}

export function getSapiV2LoanFlexibleRepayHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleRepayHistoryQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleRepayHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.repay.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleRepayHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleRepayHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleRepayHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV2LoanFlexibleAdjustLtvMutationKey() {
  return ['sapi', '/sapi/v2/loan/flexible/adjust/ltv', 'POST'] as const
}

export function getPostSapiV2LoanFlexibleAdjustLtvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV2LoanFlexibleAdjustLtvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>) {
      return parseResponse(client.sapi.v2.loan.flexible.adjust.ltv.$post(args, options))
    },
  })
}

export function usePostSapiV2LoanFlexibleAdjustLtv<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV2LoanFlexibleAdjustLtvMutationOptions<
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

export function getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ltv/adjustment/history', args] as const
}

export function getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleLtvAdjustmentHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleLtvAdjustmentHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey>
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
      ...getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleLoanableDataQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/loanable/data', args] as const
}

export function getSapiV2LoanFlexibleLoanableDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleLoanableDataQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleLoanableDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.loanable.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleLoanableDataQueryKey>
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
      ...getSapiV2LoanFlexibleLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleLoanableDataQueryKey>
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
      ...getSapiV2LoanFlexibleLoanableDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleCollateralDataQueryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/collateral/data', args] as const
}

export function getSapiV2LoanFlexibleCollateralDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleCollateralDataQueryKey>
  >({
    queryKey: getSapiV2LoanFlexibleCollateralDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2.loan.flexible.collateral.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2LoanFlexibleCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleCollateralDataQueryKey>
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
      ...getSapiV2LoanFlexibleCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2LoanFlexibleCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2LoanFlexibleCollateralDataQueryKey>
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
      ...getSapiV2LoanFlexibleCollateralDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1PayTransactionsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
) {
  return ['sapi', '/sapi/v1/pay/transactions', args] as const
}

export function getSapiV1PayTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PayTransactionsQueryKey>
  >({
    queryKey: getSapiV1PayTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.pay.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1PayTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PayTransactionsQueryKey>
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
      ...getSapiV1PayTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1PayTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1PayTransactionsQueryKey>
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
      ...getSapiV1PayTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ConvertExchangeInfoQueryKey(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
) {
  return ['sapi', '/sapi/v1/convert/exchangeInfo', args] as const
}

export function getSapiV1ConvertExchangeInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertExchangeInfoQueryKey>
  >({
    queryKey: getSapiV1ConvertExchangeInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.convert.exchangeInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ConvertExchangeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertExchangeInfoQueryKey>
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
      ...getSapiV1ConvertExchangeInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ConvertExchangeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertExchangeInfoQueryKey>
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
      ...getSapiV1ConvertExchangeInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ConvertAssetInfoQueryKey(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
) {
  return ['sapi', '/sapi/v1/convert/assetInfo', args] as const
}

export function getSapiV1ConvertAssetInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertAssetInfoQueryKey>
  >({
    queryKey: getSapiV1ConvertAssetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.convert.assetInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ConvertAssetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertAssetInfoQueryKey>
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
      ...getSapiV1ConvertAssetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ConvertAssetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertAssetInfoQueryKey>
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
      ...getSapiV1ConvertAssetInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1ConvertGetQuoteMutationKey() {
  return ['sapi', '/sapi/v1/convert/getQuote', 'POST'] as const
}

export function getPostSapiV1ConvertGetQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.getQuote.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ConvertGetQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>) {
      return parseResponse(client.sapi.v1.convert.getQuote.$post(args, options))
    },
  })
}

export function usePostSapiV1ConvertGetQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.getQuote.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ConvertGetQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1ConvertAcceptQuoteMutationKey() {
  return ['sapi', '/sapi/v1/convert/acceptQuote', 'POST'] as const
}

export function getPostSapiV1ConvertAcceptQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.acceptQuote.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ConvertAcceptQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post>) {
      return parseResponse(client.sapi.v1.convert.acceptQuote.$post(args, options))
    },
  })
}

export function usePostSapiV1ConvertAcceptQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.acceptQuote.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ConvertAcceptQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1ConvertOrderStatusQueryKey(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
) {
  return ['sapi', '/sapi/v1/convert/orderStatus', args] as const
}

export function getSapiV1ConvertOrderStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertOrderStatusQueryKey>
  >({
    queryKey: getSapiV1ConvertOrderStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.convert.orderStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ConvertOrderStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertOrderStatusQueryKey>
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
      ...getSapiV1ConvertOrderStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ConvertOrderStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertOrderStatusQueryKey>
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
      ...getSapiV1ConvertOrderStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1ConvertLimitPlaceOrderMutationKey() {
  return ['sapi', '/sapi/v1/convert/limit/placeOrder', 'POST'] as const
}

export function getPostSapiV1ConvertLimitPlaceOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.placeOrder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ConvertLimitPlaceOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post>) {
      return parseResponse(client.sapi.v1.convert.limit.placeOrder.$post(args, options))
    },
  })
}

export function usePostSapiV1ConvertLimitPlaceOrder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.limit.placeOrder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ConvertLimitPlaceOrderMutationOptions<
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

export function getPostSapiV1ConvertLimitCancelOrderMutationKey() {
  return ['sapi', '/sapi/v1/convert/limit/cancelOrder', 'POST'] as const
}

export function getPostSapiV1ConvertLimitCancelOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1ConvertLimitCancelOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>,
    ) {
      return parseResponse(client.sapi.v1.convert.limit.cancelOrder.$post(args, options))
    },
  })
}

export function usePostSapiV1ConvertLimitCancelOrder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1ConvertLimitCancelOrderMutationOptions<
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

export function getSapiV1ConvertLimitQueryOpenOrdersQueryKey(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
) {
  return ['sapi', '/sapi/v1/convert/limit/queryOpenOrders', args] as const
}

export function getSapiV1ConvertLimitQueryOpenOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertLimitQueryOpenOrdersQueryKey>
  >({
    queryKey: getSapiV1ConvertLimitQueryOpenOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.convert.limit.queryOpenOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ConvertLimitQueryOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertLimitQueryOpenOrdersQueryKey>
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
      ...getSapiV1ConvertLimitQueryOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ConvertLimitQueryOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertLimitQueryOpenOrdersQueryKey>
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
      ...getSapiV1ConvertLimitQueryOpenOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1ConvertTradeFlowQueryKey(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
) {
  return ['sapi', '/sapi/v1/convert/tradeFlow', args] as const
}

export function getSapiV1ConvertTradeFlowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertTradeFlowQueryKey>
  >({
    queryKey: getSapiV1ConvertTradeFlowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.convert.tradeFlow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1ConvertTradeFlow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertTradeFlowQueryKey>
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
      ...getSapiV1ConvertTradeFlowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1ConvertTradeFlow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1ConvertTradeFlowQueryKey>
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
      ...getSapiV1ConvertTradeFlowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1RebateTaxQueryQueryKey(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
) {
  return ['sapi', '/sapi/v1/rebate/taxQuery', args] as const
}

export function getSapiV1RebateTaxQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1RebateTaxQueryQueryKey>
  >({
    queryKey: getSapiV1RebateTaxQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.rebate.taxQuery.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1RebateTaxQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1RebateTaxQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1RebateTaxQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1RebateTaxQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1RebateTaxQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1RebateTaxQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1NftHistoryTransactionsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/transactions', args] as const
}

export function getSapiV1NftHistoryTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryTransactionsQueryKey>
  >({
    queryKey: getSapiV1NftHistoryTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.nft.history.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1NftHistoryTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryTransactionsQueryKey>
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
      ...getSapiV1NftHistoryTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1NftHistoryTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryTransactionsQueryKey>
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
      ...getSapiV1NftHistoryTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1NftHistoryDepositQueryKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/deposit', args] as const
}

export function getSapiV1NftHistoryDepositQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryDepositQueryKey>
  >({
    queryKey: getSapiV1NftHistoryDepositQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.nft.history.deposit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1NftHistoryDeposit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryDepositQueryKey>
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
      ...getSapiV1NftHistoryDepositQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1NftHistoryDeposit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryDepositQueryKey>
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
      ...getSapiV1NftHistoryDepositQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1NftHistoryWithdrawQueryKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/withdraw', args] as const
}

export function getSapiV1NftHistoryWithdrawQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryWithdrawQueryKey>
  >({
    queryKey: getSapiV1NftHistoryWithdrawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.nft.history.withdraw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1NftHistoryWithdraw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryWithdrawQueryKey>
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
      ...getSapiV1NftHistoryWithdrawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1NftHistoryWithdraw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftHistoryWithdrawQueryKey>
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
      ...getSapiV1NftHistoryWithdrawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1NftUserGetAssetQueryKey(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
) {
  return ['sapi', '/sapi/v1/nft/user/getAsset', args] as const
}

export function getSapiV1NftUserGetAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftUserGetAssetQueryKey>
  >({
    queryKey: getSapiV1NftUserGetAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.nft.user.getAsset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1NftUserGetAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftUserGetAssetQueryKey>
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
      ...getSapiV1NftUserGetAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1NftUserGetAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1NftUserGetAssetQueryKey>
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
      ...getSapiV1NftUserGetAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1GiftcardCreateCodeMutationKey() {
  return ['sapi', '/sapi/v1/giftcard/createCode', 'POST'] as const
}

export function getPostSapiV1GiftcardCreateCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.createCode.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1GiftcardCreateCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post>) {
      return parseResponse(client.sapi.v1.giftcard.createCode.$post(args, options))
    },
  })
}

export function usePostSapiV1GiftcardCreateCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.giftcard.createCode.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1GiftcardCreateCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1GiftcardRedeemCodeMutationKey() {
  return ['sapi', '/sapi/v1/giftcard/redeemCode', 'POST'] as const
}

export function getPostSapiV1GiftcardRedeemCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.redeemCode.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1GiftcardRedeemCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post>) {
      return parseResponse(client.sapi.v1.giftcard.redeemCode.$post(args, options))
    },
  })
}

export function usePostSapiV1GiftcardRedeemCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.giftcard.redeemCode.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1GiftcardRedeemCodeMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1GiftcardVerifyQueryKey(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
) {
  return ['sapi', '/sapi/v1/giftcard/verify', args] as const
}

export function getSapiV1GiftcardVerifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardVerifyQueryKey>
  >({
    queryKey: getSapiV1GiftcardVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.giftcard.verify.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1GiftcardVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1GiftcardVerifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1GiftcardVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1GiftcardVerifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
) {
  return ['sapi', '/sapi/v1/giftcard/cryptography/rsa-public-key', args] as const
}

export function getSapiV1GiftcardCryptographyRsaPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey>
  >({
    queryKey: getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1GiftcardCryptographyRsaPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey>
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
      ...getSapiV1GiftcardCryptographyRsaPublicKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1GiftcardCryptographyRsaPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey>
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
      ...getSapiV1GiftcardCryptographyRsaPublicKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1GiftcardBuyCodeMutationKey() {
  return ['sapi', '/sapi/v1/giftcard/buyCode', 'POST'] as const
}

export function getPostSapiV1GiftcardBuyCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.buyCode.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1GiftcardBuyCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>) {
      return parseResponse(client.sapi.v1.giftcard.buyCode.$post(args, options))
    },
  })
}

export function usePostSapiV1GiftcardBuyCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.buyCode.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1GiftcardBuyCodeMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1GiftcardBuyCodeTokenLimitQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
) {
  return ['sapi', '/sapi/v1/giftcard/buyCode/token-limit', args] as const
}

export function getSapiV1GiftcardBuyCodeTokenLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardBuyCodeTokenLimitQueryKey>
  >({
    queryKey: getSapiV1GiftcardBuyCodeTokenLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.giftcard.buyCode['token-limit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1GiftcardBuyCodeTokenLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardBuyCodeTokenLimitQueryKey>
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
      ...getSapiV1GiftcardBuyCodeTokenLimitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1GiftcardBuyCodeTokenLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1GiftcardBuyCodeTokenLimitQueryKey>
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
      ...getSapiV1GiftcardBuyCodeTokenLimitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestTargetAssetListQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/list', args] as const
}

export function getSapiV1LendingAutoInvestTargetAssetListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetListQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestTargetAssetListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestTargetAssetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetListQueryKey>
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
      ...getSapiV1LendingAutoInvestTargetAssetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestTargetAssetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetListQueryKey>
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
      ...getSapiV1LendingAutoInvestTargetAssetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/roi/list', args] as const
}

export function getSapiV1LendingAutoInvestTargetAssetRoiListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestTargetAssetRoiList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey>
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
      ...getSapiV1LendingAutoInvestTargetAssetRoiListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestTargetAssetRoiList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey>
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
      ...getSapiV1LendingAutoInvestTargetAssetRoiListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestAllAssetQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/all/asset', args] as const
}

export function getSapiV1LendingAutoInvestAllAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestAllAssetQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestAllAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].all.asset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestAllAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestAllAssetQueryKey>
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
      ...getSapiV1LendingAutoInvestAllAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestAllAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestAllAssetQueryKey>
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
      ...getSapiV1LendingAutoInvestAllAssetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestSourceAssetListQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/source-asset/list', args] as const
}

export function getSapiV1LendingAutoInvestSourceAssetListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestSourceAssetListQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestSourceAssetListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestSourceAssetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestSourceAssetListQueryKey>
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
      ...getSapiV1LendingAutoInvestSourceAssetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestSourceAssetList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestSourceAssetListQueryKey>
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
      ...getSapiV1LendingAutoInvestSourceAssetListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LendingAutoInvestPlanAddMutationKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/add', 'POST'] as const
}

export function getPostSapiV1LendingAutoInvestPlanAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingAutoInvestPlanAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1.lending['auto-invest'].plan.add.$post(args, options))
    },
  })
}

export function usePostSapiV1LendingAutoInvestPlanAdd<
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
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingAutoInvestPlanAddMutationOptions<
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

export function getPostSapiV1LendingAutoInvestPlanEditMutationKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/edit', 'POST'] as const
}

export function getPostSapiV1LendingAutoInvestPlanEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingAutoInvestPlanEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1.lending['auto-invest'].plan.edit.$post(args, options))
    },
  })
}

export function usePostSapiV1LendingAutoInvestPlanEdit<
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
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingAutoInvestPlanEditMutationOptions<
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

export function getPostSapiV1LendingAutoInvestPlanEditStatusMutationKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/edit-status', 'POST'] as const
}

export function getPostSapiV1LendingAutoInvestPlanEditStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingAutoInvestPlanEditStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].plan['edit-status'].$post(args, options),
      )
    },
  })
}

export function usePostSapiV1LendingAutoInvestPlanEditStatus<
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
                  (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
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
  const mutationDefaults = getPostSapiV1LendingAutoInvestPlanEditStatusMutationOptions<
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

export function getSapiV1LendingAutoInvestPlanListQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/list', args] as const
}

export function getSapiV1LendingAutoInvestPlanListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestPlanListQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestPlanListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].plan.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestPlanList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestPlanListQueryKey>
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
      ...getSapiV1LendingAutoInvestPlanListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestPlanList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestPlanListQueryKey>
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
      ...getSapiV1LendingAutoInvestPlanListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestPlanIdQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/id', args] as const
}

export function getSapiV1LendingAutoInvestPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestPlanIdQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].plan.id.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestPlanIdQueryKey>
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
      ...getSapiV1LendingAutoInvestPlanIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestPlanIdQueryKey>
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
      ...getSapiV1LendingAutoInvestPlanIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestHistoryListQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/history/list', args] as const
}

export function getSapiV1LendingAutoInvestHistoryListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestHistoryListQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestHistoryListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].history.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestHistoryList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestHistoryListQueryKey>
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
      ...getSapiV1LendingAutoInvestHistoryListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestHistoryList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestHistoryListQueryKey>
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
      ...getSapiV1LendingAutoInvestHistoryListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestIndexInfoQueryKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/info', args] as const
}

export function getSapiV1LendingAutoInvestIndexInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestIndexInfoQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestIndexInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].index.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestIndexInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestIndexInfoQueryKey>
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
      ...getSapiV1LendingAutoInvestIndexInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestIndexInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestIndexInfoQueryKey>
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
      ...getSapiV1LendingAutoInvestIndexInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestIndexUserSummaryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/user-summary', args] as const
}

export function getSapiV1LendingAutoInvestIndexUserSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestIndexUserSummaryQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestIndexUserSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestIndexUserSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestIndexUserSummaryQueryKey>
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
      ...getSapiV1LendingAutoInvestIndexUserSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestIndexUserSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestIndexUserSummaryQueryKey>
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
      ...getSapiV1LendingAutoInvestIndexUserSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LendingAutoInvestOneOffMutationKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/one-off', 'POST'] as const
}

export function getPostSapiV1LendingAutoInvestOneOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingAutoInvestOneOffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.lending['auto-invest']['one-off'].$post(args, options))
    },
  })
}

export function usePostSapiV1LendingAutoInvestOneOff<
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
                ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingAutoInvestOneOffMutationOptions<
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

export function getSapiV1LendingAutoInvestOneOffStatusQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/one-off/status', args] as const
}

export function getSapiV1LendingAutoInvestOneOffStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestOneOffStatusQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestOneOffStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['one-off'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestOneOffStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestOneOffStatusQueryKey>
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
      ...getSapiV1LendingAutoInvestOneOffStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestOneOffStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestOneOffStatusQueryKey>
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
      ...getSapiV1LendingAutoInvestOneOffStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1LendingAutoInvestRedeemMutationKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/redeem', 'POST'] as const
}

export function getPostSapiV1LendingAutoInvestRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1LendingAutoInvestRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>,
    ) {
      return parseResponse(client.sapi.v1.lending['auto-invest'].redeem.$post(args, options))
    },
  })
}

export function usePostSapiV1LendingAutoInvestRedeem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1LendingAutoInvestRedeemMutationOptions<
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

export function getSapiV1LendingAutoInvestRedeemHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/redeem/history', args] as const
}

export function getSapiV1LendingAutoInvestRedeemHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestRedeemHistoryQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestRedeemHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].redeem.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestRedeemHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestRedeemHistoryQueryKey>
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
      ...getSapiV1LendingAutoInvestRedeemHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestRedeemHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestRedeemHistoryQueryKey>
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
      ...getSapiV1LendingAutoInvestRedeemHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestRebalanceHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/rebalance/history', args] as const
}

export function getSapiV1LendingAutoInvestRebalanceHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestRebalanceHistoryQueryKey>
  >({
    queryKey: getSapiV1LendingAutoInvestRebalanceHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].rebalance.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1LendingAutoInvestRebalanceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestRebalanceHistoryQueryKey>
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
      ...getSapiV1LendingAutoInvestRebalanceHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1LendingAutoInvestRebalanceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1LendingAutoInvestRebalanceHistoryQueryKey>
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
      ...getSapiV1LendingAutoInvestRebalanceHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV2EthStakingEthStakeMutationKey() {
  return ['sapi', '/sapi/v2/eth-staking/eth/stake', 'POST'] as const
}

export function getPostSapiV2EthStakingEthStakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV2EthStakingEthStakeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>,
    ) {
      return parseResponse(client.sapi.v2['eth-staking'].eth.stake.$post(args, options))
    },
  })
}

export function usePostSapiV2EthStakingEthStake<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV2EthStakingEthStakeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSapiV1EthStakingEthRedeemMutationKey() {
  return ['sapi', '/sapi/v1/eth-staking/eth/redeem', 'POST'] as const
}

export function getPostSapiV1EthStakingEthRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1EthStakingEthRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['eth-staking'].eth.redeem.$post(args, options))
    },
  })
}

export function usePostSapiV1EthStakingEthRedeem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1EthStakingEthRedeemMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1EthStakingEthHistoryStakingHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/stakingHistory', args] as const
}

export function getSapiV1EthStakingEthHistoryStakingHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryStakingHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthHistoryStakingHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthHistoryStakingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryStakingHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryStakingHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthHistoryStakingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryStakingHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryStakingHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/redemptionHistory', args] as const
}

export function getSapiV1EthStakingEthHistoryRedemptionHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthHistoryRedemptionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRedemptionHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthHistoryRedemptionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRedemptionHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rewardsHistory', args] as const
}

export function getSapiV1EthStakingEthHistoryRewardsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthHistoryRewardsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRewardsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthHistoryRewardsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRewardsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthQuotaQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/quota', args] as const
}

export function getSapiV1EthStakingEthQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthQuotaQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.quota.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthQuotaQueryKey>
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
      ...getSapiV1EthStakingEthQuotaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthQuotaQueryKey>
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
      ...getSapiV1EthStakingEthQuotaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRateHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rateHistory', args] as const
}

export function getSapiV1EthStakingEthHistoryRateHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRateHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthHistoryRateHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthHistoryRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRateHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRateHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthHistoryRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryRateHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryRateHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV2EthStakingAccountQueryKey(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
) {
  return ['sapi', '/sapi/v2/eth-staking/account', args] as const
}

export function getSapiV2EthStakingAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2EthStakingAccountQueryKey>
  >({
    queryKey: getSapiV2EthStakingAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v2['eth-staking'].account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV2EthStakingAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2EthStakingAccountQueryKey>
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
      ...getSapiV2EthStakingAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV2EthStakingAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV2EthStakingAccountQueryKey>
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
      ...getSapiV2EthStakingAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1EthStakingWbethWrapMutationKey() {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/wrap', 'POST'] as const
}

export function getPostSapiV1EthStakingWbethWrapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1EthStakingWbethWrapMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['eth-staking'].wbeth.wrap.$post(args, options))
    },
  })
}

export function usePostSapiV1EthStakingWbethWrap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1EthStakingWbethWrapMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/wrapHistory', args] as const
}

export function getSapiV1EthStakingWbethHistoryWrapHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingWbethHistoryWrapHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey>
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
      ...getSapiV1EthStakingWbethHistoryWrapHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingWbethHistoryWrapHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey>
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
      ...getSapiV1EthStakingWbethHistoryWrapHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/unwrapHistory', args] as const
}

export function getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingWbethHistoryUnwrapHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey>
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
      ...getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingWbethHistoryUnwrapHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey>
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
      ...getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/wbethRewardsHistory', args] as const
}

export function getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey>
  >({
    queryKey: getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1EthStakingEthHistoryWbethRewardsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1EthStakingEthHistoryWbethRewardsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey>
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
      ...getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CopyTradingFuturesUserStatusQueryKey(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/userStatus', args] as const
}

export function getSapiV1CopyTradingFuturesUserStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CopyTradingFuturesUserStatusQueryKey>
  >({
    queryKey: getSapiV1CopyTradingFuturesUserStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.copyTrading.futures.userStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CopyTradingFuturesUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CopyTradingFuturesUserStatusQueryKey>
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
      ...getSapiV1CopyTradingFuturesUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CopyTradingFuturesUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CopyTradingFuturesUserStatusQueryKey>
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
      ...getSapiV1CopyTradingFuturesUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1CopyTradingFuturesLeadSymbolQueryKey(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/leadSymbol', args] as const
}

export function getSapiV1CopyTradingFuturesLeadSymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CopyTradingFuturesLeadSymbolQueryKey>
  >({
    queryKey: getSapiV1CopyTradingFuturesLeadSymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.copyTrading.futures.leadSymbol.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1CopyTradingFuturesLeadSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CopyTradingFuturesLeadSymbolQueryKey>
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
      ...getSapiV1CopyTradingFuturesLeadSymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1CopyTradingFuturesLeadSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1CopyTradingFuturesLeadSymbolQueryKey>
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
      ...getSapiV1CopyTradingFuturesLeadSymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleListQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/list', args] as const
}

export function getSapiV1SimpleEarnFlexibleListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleListQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleListQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleListQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedListQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/list', args] as const
}

export function getSapiV1SimpleEarnLockedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedListQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedListQueryKey>
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
      ...getSapiV1SimpleEarnLockedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedListQueryKey>
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
      ...getSapiV1SimpleEarnLockedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SimpleEarnFlexibleSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/subscribe', 'POST'] as const
}

export function getPostSapiV1SimpleEarnFlexibleSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnFlexibleSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1['simple-earn'].flexible.subscribe.$post(args, options))
    },
  })
}

export function usePostSapiV1SimpleEarnFlexibleSubscribe<
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
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SimpleEarnFlexibleSubscribeMutationOptions<
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

export function getPostSapiV1SimpleEarnLockedSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/subscribe', 'POST'] as const
}

export function getPostSapiV1SimpleEarnLockedSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnLockedSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']
      >,
    ) {
      return parseResponse(client.sapi.v1['simple-earn'].locked.subscribe.$post(args, options))
    },
  })
}

export function usePostSapiV1SimpleEarnLockedSubscribe<
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
                ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SimpleEarnLockedSubscribeMutationOptions<
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

export function getPostSapiV1SimpleEarnFlexibleRedeemMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/redeem', 'POST'] as const
}

export function getPostSapiV1SimpleEarnFlexibleRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnFlexibleRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['simple-earn'].flexible.redeem.$post(args, options))
    },
  })
}

export function usePostSapiV1SimpleEarnFlexibleRedeem<
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
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SimpleEarnFlexibleRedeemMutationOptions<
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

export function getPostSapiV1SimpleEarnLockedRedeemMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/redeem', 'POST'] as const
}

export function getPostSapiV1SimpleEarnLockedRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnLockedRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>,
    ) {
      return parseResponse(client.sapi.v1['simple-earn'].locked.redeem.$post(args, options))
    },
  })
}

export function usePostSapiV1SimpleEarnLockedRedeem<
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
                ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1SimpleEarnLockedRedeemMutationOptions<
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

export function getSapiV1SimpleEarnFlexiblePositionQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/position', args] as const
}

export function getSapiV1SimpleEarnFlexiblePositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexiblePositionQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexiblePositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.position.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexiblePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexiblePositionQueryKey>
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
      ...getSapiV1SimpleEarnFlexiblePositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexiblePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexiblePositionQueryKey>
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
      ...getSapiV1SimpleEarnFlexiblePositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedPositionQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/position', args] as const
}

export function getSapiV1SimpleEarnLockedPositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedPositionQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedPositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.position.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedPosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedPositionQueryKey>
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
      ...getSapiV1SimpleEarnLockedPositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedPosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedPositionQueryKey>
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
      ...getSapiV1SimpleEarnLockedPositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnAccountQueryKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/account', args] as const
}

export function getSapiV1SimpleEarnAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnAccountQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnAccountQueryKey>
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
      ...getSapiV1SimpleEarnAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnAccountQueryKey>
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
      ...getSapiV1SimpleEarnAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/subscriptionRecord', args] as const
}

export function getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleHistorySubscriptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleHistorySubscriptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/subscriptionRecord', args] as const
}

export function getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedHistorySubscriptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedHistorySubscriptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/redemptionRecord', args] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleHistoryRedemptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleHistoryRedemptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/redemptionRecord', args] as const
}

export function getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedHistoryRedemptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedHistoryRedemptionRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rewardsRecord', args] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleHistoryRewardsRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleHistoryRewardsRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/rewardsRecord', args] as const
}

export function getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedHistoryRewardsRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedHistoryRewardsRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey>
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
      ...getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/setAutoSubscribe', 'POST'] as const
}

export function getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.setAutoSubscribe.$post(args, options),
      )
    },
  })
}

export function usePostSapiV1SimpleEarnFlexibleSetAutoSubscribe<
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
                  (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
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
  const mutationDefaults = getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeMutationOptions<
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

export function getPostSapiV1SimpleEarnLockedSetAutoSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/setAutoSubscribe', 'POST'] as const
}

export function getPostSapiV1SimpleEarnLockedSetAutoSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1SimpleEarnLockedSetAutoSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.setAutoSubscribe.$post(args, options),
      )
    },
  })
}

export function usePostSapiV1SimpleEarnLockedSetAutoSubscribe<
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
                  (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
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
  const mutationDefaults = getPostSapiV1SimpleEarnLockedSetAutoSubscribeMutationOptions<
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

export function getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/personalLeftQuota', args] as const
}

export function getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexiblePersonalLeftQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey>
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
      ...getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexiblePersonalLeftQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey>
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
      ...getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/personalLeftQuota', args] as const
}

export function getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedPersonalLeftQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey>
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
      ...getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedPersonalLeftQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey>
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
      ...getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/subscriptionPreview', args] as const
}

export function getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleSubscriptionPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleSubscriptionPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/subscriptionPreview', args] as const
}

export function getSapiV1SimpleEarnLockedSubscriptionPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedSubscriptionPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey>
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
      ...getSapiV1SimpleEarnLockedSubscriptionPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedSubscriptionPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey>
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
      ...getSapiV1SimpleEarnLockedSubscriptionPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/setRedeemOption', args] as const
}

export function getSapiV1SimpleEarnLockedSetRedeemOptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnLockedSetRedeemOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey>
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
      ...getSapiV1SimpleEarnLockedSetRedeemOptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnLockedSetRedeemOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey>
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
      ...getSapiV1SimpleEarnLockedSetRedeemOptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rateHistory', args] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleHistoryRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleHistoryRateHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/collateralRecord', args] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey>
  >({
    queryKey: getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1SimpleEarnFlexibleHistoryCollateralRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1SimpleEarnFlexibleHistoryCollateralRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey>
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
      ...getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1DciProductListQueryKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/list', args] as const
}

export function getSapiV1DciProductListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductListQueryKey>
  >({
    queryKey: getSapiV1DciProductListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.dci.product.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1DciProductList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSapiV1DciProductListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSapiV1DciProductList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSapiV1DciProductListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSapiV1DciProductSubscribeMutationKey() {
  return ['sapi', '/sapi/v1/dci/product/subscribe', 'POST'] as const
}

export function getPostSapiV1DciProductSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.subscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1DciProductSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post>) {
      return parseResponse(client.sapi.v1.dci.product.subscribe.$post(args, options))
    },
  })
}

export function usePostSapiV1DciProductSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.dci.product.subscribe.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1DciProductSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getSapiV1DciProductPositionsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/positions', args] as const
}

export function getSapiV1DciProductPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductPositionsQueryKey>
  >({
    queryKey: getSapiV1DciProductPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.dci.product.positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1DciProductPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductPositionsQueryKey>
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
      ...getSapiV1DciProductPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1DciProductPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductPositionsQueryKey>
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
      ...getSapiV1DciProductPositionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSapiV1DciProductAccountsQueryKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/accounts', args] as const
}

export function getSapiV1DciProductAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductAccountsQueryKey>
  >({
    queryKey: getSapiV1DciProductAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sapi.v1.dci.product.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSapiV1DciProductAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductAccountsQueryKey>
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
      ...getSapiV1DciProductAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSapiV1DciProductAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSapiV1DciProductAccountsQueryKey>
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
      ...getSapiV1DciProductAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSapiV1DciProductAutoCompoundEditStatusMutationKey() {
  return ['sapi', '/sapi/v1/dci/product/auto_compound/edit-status', 'POST'] as const
}

export function getPostSapiV1DciProductAutoCompoundEditStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSapiV1DciProductAutoCompoundEditStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']
      >,
    ) {
      return parseResponse(
        client.sapi.v1.dci.product.auto_compound['edit-status'].$post(args, options),
      )
    },
  })
}

export function usePostSapiV1DciProductAutoCompoundEditStatus<
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
                  (typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSapiV1DciProductAutoCompoundEditStatusMutationOptions<
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

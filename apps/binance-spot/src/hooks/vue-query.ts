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

export function getSapiKey() {
  return ['sapi'] as const
}

export function getApiV3PingQueryKey() {
  return ['api', '/api/v3/ping'] as const
}

export function getApiV3PingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3PingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Ping<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
          >,
          ReturnType<typeof getApiV3PingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3PingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3PingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TimeQueryKey() {
  return ['api', '/api/v3/time'] as const
}

export function getApiV3TimeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3TimeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.time.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Time<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
          >,
          ReturnType<typeof getApiV3TimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3TimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3TimeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.time.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ExchangeInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exchangeInfo.$get>>,
) {
  return ['api', '/api/v3/exchangeInfo', toValue(args)] as const
}

export function getApiV3ExchangeInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exchangeInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ExchangeInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.exchangeInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ExchangeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exchangeInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ExchangeInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExchangeInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ExchangeInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.exchangeInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3DepthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.depth.$get>>,
) {
  return ['api', '/api/v3/depth', toValue(args)] as const
}

export function getApiV3DepthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.depth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3DepthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.depth.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Depth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.depth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
          >,
          ReturnType<typeof getApiV3DepthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3DepthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3DepthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.depth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.trades.$get>>,
) {
  return ['api', '/api/v3/trades', toValue(args)] as const
}

export function getApiV3TradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.trades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Trades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.trades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
          >,
          ReturnType<typeof getApiV3TradesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3HistoricalTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.historicalTrades.$get>>,
) {
  return ['api', '/api/v3/historicalTrades', toValue(args)] as const
}

export function getApiV3HistoricalTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.historicalTrades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3HistoricalTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.historicalTrades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3HistoricalTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.historicalTrades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
            >
          >,
          ReturnType<typeof getApiV3HistoricalTradesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoricalTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3HistoricalTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.historicalTrades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AggTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.aggTrades.$get>>,
) {
  return ['api', '/api/v3/aggTrades', toValue(args)] as const
}

export function getApiV3AggTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.aggTrades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AggTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.aggTrades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AggTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.aggTrades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AggTradesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AggTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AggTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.aggTrades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3KlinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.klines.$get>>,
) {
  return ['api', '/api/v3/klines', toValue(args)] as const
}

export function getApiV3KlinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.klines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3KlinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.klines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Klines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.klines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
          >,
          ReturnType<typeof getApiV3KlinesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3KlinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3KlinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.klines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3UiKlinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.uiKlines.$get>>,
) {
  return ['api', '/api/v3/uiKlines', toValue(args)] as const
}

export function getApiV3UiKlinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.uiKlines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3UiKlinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.uiKlines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3UiKlines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.uiKlines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>
            >
          >,
          ReturnType<typeof getApiV3UiKlinesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UiKlinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3UiKlinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.uiKlines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AvgPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.avgPrice.$get>>,
) {
  return ['api', '/api/v3/avgPrice', toValue(args)] as const
}

export function getApiV3AvgPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.avgPrice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AvgPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.avgPrice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AvgPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.avgPrice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AvgPriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AvgPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AvgPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.avgPrice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3Ticker24hrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>>,
) {
  return ['api', '/api/v3/ticker/24hr', toValue(args)] as const
}

export function getApiV3Ticker24hrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3Ticker24hrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ticker['24hr'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Ticker24hr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3Ticker24hrQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3Ticker24hrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3Ticker24hrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ticker['24hr'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TickerTradingDayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>>,
) {
  return ['api', '/api/v3/ticker/tradingDay', toValue(args)] as const
}

export function getApiV3TickerTradingDayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TickerTradingDayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ticker.tradingDay.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TickerTradingDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
            >
          >,
          ReturnType<typeof getApiV3TickerTradingDayQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerTradingDayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TickerTradingDayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ticker.tradingDay.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TickerPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.price.$get>>,
) {
  return ['api', '/api/v3/ticker/price', toValue(args)] as const
}

export function getApiV3TickerPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TickerPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ticker.price.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TickerPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
            >
          >,
          ReturnType<typeof getApiV3TickerPriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TickerPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ticker.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TickerBookTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>>,
) {
  return ['api', '/api/v3/ticker/bookTicker', toValue(args)] as const
}

export function getApiV3TickerBookTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TickerBookTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ticker.bookTicker.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TickerBookTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
            >
          >,
          ReturnType<typeof getApiV3TickerBookTickerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerBookTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TickerBookTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ticker.bookTicker.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.$get>>,
) {
  return ['api', '/api/v3/ticker', toValue(args)] as const
}

export function getApiV3TickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.ticker.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Ticker<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.ticker.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
          >,
          ReturnType<typeof getApiV3TickerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.ticker.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV3OrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.order.$get>>,
) {
  return ['api', '/api/v3/order', toValue(args)] as const
}

export function getApiV3OrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.order.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3OrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.order.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Order<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.order.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
          >,
          ReturnType<typeof getApiV3OrderQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3OrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3OrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.order.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.order.$delete>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrders.$get>>,
) {
  return ['api', '/api/v3/openOrders', toValue(args)] as const
}

export function getApiV3OpenOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3OpenOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.openOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3OpenOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>
            >
          >,
          ReturnType<typeof getApiV3OpenOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OpenOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3OpenOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.openOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrders.$get>>,
) {
  return ['api', '/api/v3/allOrders', toValue(args)] as const
}

export function getApiV3AllOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AllOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.allOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AllOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AllOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AllOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.allOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.orderList.$get>>,
) {
  return ['api', '/api/v3/orderList', toValue(args)] as const
}

export function getApiV3OrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.orderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3OrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.orderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3OrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.orderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>
            >
          >,
          ReturnType<typeof getApiV3OrderListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3OrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.orderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrderList.$get>>,
) {
  return ['api', '/api/v3/allOrderList', toValue(args)] as const
}

export function getApiV3AllOrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AllOrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.allOrderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AllOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allOrderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AllOrderListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllOrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AllOrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.allOrderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3OpenOrderListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrderList.$get>>,
) {
  return ['api', '/api/v3/openOrderList', toValue(args)] as const
}

export function getApiV3OpenOrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3OpenOrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.openOrderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3OpenOrderList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.openOrderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
            >
          >,
          ReturnType<typeof getApiV3OpenOrderListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3OpenOrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3OpenOrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.openOrderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV3AccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.$get>>,
) {
  return ['api', '/api/v3/account', toValue(args)] as const
}

export function getApiV3AccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
          >,
          ReturnType<typeof getApiV3AccountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MyTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myTrades.$get>>,
) {
  return ['api', '/api/v3/myTrades', toValue(args)] as const
}

export function getApiV3MyTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myTrades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MyTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.myTrades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MyTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myTrades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MyTradesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MyTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.myTrades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3RateLimitOrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rateLimit.order.$get>>,
) {
  return ['api', '/api/v3/rateLimit/order', toValue(args)] as const
}

export function getApiV3RateLimitOrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rateLimit.order.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3RateLimitOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.rateLimit.order.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3RateLimitOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rateLimit.order.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
            >
          >,
          ReturnType<typeof getApiV3RateLimitOrderQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RateLimitOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3RateLimitOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.rateLimit.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MyPreventedMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myPreventedMatches.$get>>,
) {
  return ['api', '/api/v3/myPreventedMatches', toValue(args)] as const
}

export function getApiV3MyPreventedMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myPreventedMatches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MyPreventedMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.myPreventedMatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MyPreventedMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myPreventedMatches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3MyPreventedMatchesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyPreventedMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MyPreventedMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.myPreventedMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MyAllocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myAllocations.$get>>,
) {
  return ['api', '/api/v3/myAllocations', toValue(args)] as const
}

export function getApiV3MyAllocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myAllocations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MyAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.myAllocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MyAllocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.myAllocations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MyAllocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MyAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MyAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.myAllocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountCommissionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.commission.$get>>,
) {
  return ['api', '/api/v3/account/commission', toValue(args)] as const
}

export function getApiV3AccountCommissionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.commission.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountCommissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.account.commission.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountCommission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.account.commission.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3AccountCommissionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountCommissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountCommissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.account.commission.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginBorrowRepayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>,
) {
  return ['sapi', '/sapi/v1/margin/borrow-repay', toValue(args)] as const
}

export function getSapiV1MarginBorrowRepayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginBorrowRepayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['borrow-repay'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginBorrowRepayQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginBorrowRepayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginBorrowRepayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['borrow-repay'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.transfer.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/transfer', toValue(args)] as const
}

export function getSapiV1MarginTransferQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.transfer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.transfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.transfer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginTransferQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.transfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginAllAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/allAssets', toValue(args)] as const
}

export function getSapiV1MarginAllAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAllAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.allAssets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginAllAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginAllAssetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAllAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.allAssets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginAllPairsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/allPairs', toValue(args)] as const
}

export function getSapiV1MarginAllPairsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAllPairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.allPairs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginAllPairsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllPairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAllPairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.allPairs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginPriceIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/priceIndex', toValue(args)] as const
}

export function getSapiV1MarginPriceIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginPriceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.priceIndex.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginPriceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginPriceIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginPriceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginPriceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.priceIndex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginOrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.order.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/order', toValue(args)] as const
}

export function getSapiV1MarginOrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.order.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.order.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginOrder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.order.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginOrderQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/interestHistory', toValue(args)] as const
}

export function getSapiV1MarginInterestHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginInterestHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.interestHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginInterestHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginInterestHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginInterestHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginInterestHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.interestHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginForceLiquidationRecQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/forceLiquidationRec', toValue(args)] as const
}

export function getSapiV1MarginForceLiquidationRecQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginForceLiquidationRecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.forceLiquidationRec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginForceLiquidationRecQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginForceLiquidationRecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginForceLiquidationRecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.forceLiquidationRec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.account.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/account', toValue(args)] as const
}

export function getSapiV1MarginAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginAccountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginOpenOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/openOrders', toValue(args)] as const
}

export function getSapiV1MarginOpenOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginOpenOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.openOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginOpenOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOpenOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginOpenOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.openOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/allOrders', toValue(args)] as const
}

export function getSapiV1MarginAllOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAllOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.allOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginAllOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginAllOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAllOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.allOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.order.oco.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.orderList.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/orderList', toValue(args)] as const
}

export function getSapiV1MarginOrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.orderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginOrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.orderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.orderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginOrderListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginOrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.orderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/allOrderList', toValue(args)] as const
}

export function getSapiV1MarginAllOrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAllOrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.allOrderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginAllOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginAllOrderListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAllOrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAllOrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.allOrderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginOpenOrderListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/openOrderList', toValue(args)] as const
}

export function getSapiV1MarginOpenOrderListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginOpenOrderListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.openOrderList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginOpenOrderList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginOpenOrderListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginOpenOrderListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginOpenOrderListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.openOrderList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginMyTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/myTrades', toValue(args)] as const
}

export function getSapiV1MarginMyTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginMyTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.myTrades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginMyTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1MarginMyTradesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMyTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginMyTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.myTrades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginMaxBorrowableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/maxBorrowable', toValue(args)] as const
}

export function getSapiV1MarginMaxBorrowableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginMaxBorrowableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.maxBorrowable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginMaxBorrowable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginMaxBorrowableQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMaxBorrowableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginMaxBorrowableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.maxBorrowable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginMaxTransferableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/maxTransferable', toValue(args)] as const
}

export function getSapiV1MarginMaxTransferableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginMaxTransferableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.maxTransferable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginMaxTransferable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginMaxTransferableQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginMaxTransferableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginMaxTransferableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.maxTransferable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginTradeCoeffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/tradeCoeff', toValue(args)] as const
}

export function getSapiV1MarginTradeCoeffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginTradeCoeffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.tradeCoeff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginTradeCoeff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginTradeCoeffQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginTradeCoeffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginTradeCoeffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.tradeCoeff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/account', toValue(args)] as const
}

export function getSapiV1MarginIsolatedAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginIsolatedAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.isolated.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginIsolatedAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginIsolatedAccountQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginIsolatedAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.isolated.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/accountLimit', toValue(args)] as const
}

export function getSapiV1MarginIsolatedAccountLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginIsolatedAccountLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.isolated.accountLimit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginIsolatedAccountLimitQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAccountLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginIsolatedAccountLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.isolated.accountLimit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedAllPairsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/allPairs', toValue(args)] as const
}

export function getSapiV1MarginIsolatedAllPairsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginIsolatedAllPairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.isolated.allPairs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginIsolatedAllPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginIsolatedAllPairsQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedAllPairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginIsolatedAllPairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.isolated.allPairs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1BnbBurnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.bnbBurn.$get>>,
) {
  return ['sapi', '/sapi/v1/bnbBurn', toValue(args)] as const
}

export function getSapiV1BnbBurnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.bnbBurn.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1BnbBurnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.bnbBurn.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1BnbBurn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.bnbBurn.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1BnbBurnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BnbBurnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1BnbBurnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.bnbBurn.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.bnbBurn.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/interestRateHistory', toValue(args)] as const
}

export function getSapiV1MarginInterestRateHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginInterestRateHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.interestRateHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginInterestRateHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginInterestRateHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginInterestRateHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.interestRateHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginCrossMarginDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/crossMarginData', toValue(args)] as const
}

export function getSapiV1MarginCrossMarginDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginCrossMarginDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.crossMarginData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginCrossMarginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginCrossMarginDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCrossMarginDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginCrossMarginDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.crossMarginData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedMarginDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginData', toValue(args)] as const
}

export function getSapiV1MarginIsolatedMarginDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginIsolatedMarginDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.isolatedMarginData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginIsolatedMarginDataQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedMarginDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginIsolatedMarginDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.isolatedMarginData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginIsolatedMarginTierQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginTier', toValue(args)] as const
}

export function getSapiV1MarginIsolatedMarginTierQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginIsolatedMarginTierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.isolatedMarginTier.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginIsolatedMarginTierQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginIsolatedMarginTierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginIsolatedMarginTierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.isolatedMarginTier.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginRateLimitOrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>>,
) {
  return ['sapi', '/sapi/v1/margin/rateLimit/order', toValue(args)] as const
}

export function getSapiV1MarginRateLimitOrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginRateLimitOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.rateLimit.order.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MarginRateLimitOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginRateLimitOrderQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginRateLimitOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginRateLimitOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.rateLimit.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginCrossMarginCollateralRatioQueryKey() {
  return ['sapi', '/sapi/v1/margin/crossMarginCollateralRatio'] as const
}

export function getSapiV1MarginCrossMarginCollateralRatioQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getSapiV1MarginCrossMarginCollateralRatioQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginCrossMarginCollateralRatioQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCrossMarginCollateralRatioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1MarginCrossMarginCollateralRatioQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginExchangeSmallLiabilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability', toValue(args)] as const
}

export function getSapiV1MarginExchangeSmallLiabilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginExchangeSmallLiabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['exchange-small-liability'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginExchangeSmallLiabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['exchange-small-liability'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability-history', toValue(args)] as const
}

export function getSapiV1MarginExchangeSmallLiabilityHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['exchange-small-liability-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
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
                    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
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
                    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey>
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
            ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginExchangeSmallLiabilityHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['exchange-small-liability-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginNextHourlyInterestRateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/margin/next-hourly-interest-rate', toValue(args)] as const
}

export function getSapiV1MarginNextHourlyInterestRateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginNextHourlyInterestRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['next-hourly-interest-rate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginNextHourlyInterestRateQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginNextHourlyInterestRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginNextHourlyInterestRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['next-hourly-interest-rate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginCapitalFlowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>,
) {
  return ['sapi', '/sapi/v1/margin/capital-flow', toValue(args)] as const
}

export function getSapiV1MarginCapitalFlowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginCapitalFlowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['capital-flow'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginCapitalFlowQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginCapitalFlowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginCapitalFlowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['capital-flow'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginDelistScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/margin/delist-schedule', toValue(args)] as const
}

export function getSapiV1MarginDelistScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginDelistScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['delist-schedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginDelistScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginDelistScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginDelistScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['delist-schedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MarginAvailableInventoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/margin/available-inventory', toValue(args)] as const
}

export function getSapiV1MarginAvailableInventoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MarginAvailableInventoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin['available-inventory'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginAvailableInventoryQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginAvailableInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MarginAvailableInventoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin['available-inventory'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.order.oto.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSapiV1MarginLeverageBracketQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1MarginLeverageBracketQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.margin.leverageBracket.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MarginLeverageBracketQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MarginLeverageBracketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1MarginLeverageBracketQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.margin.leverageBracket.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SystemStatusQueryKey() {
  return ['sapi', '/sapi/v1/system/status'] as const
}

export function getSapiV1SystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1SystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1SystemStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1SystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalConfigGetallQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/config/getall', toValue(args)] as const
}

export function getSapiV1CapitalConfigGetallQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalConfigGetallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.config.getall.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1CapitalConfigGetall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalConfigGetallQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalConfigGetallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalConfigGetallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.config.getall.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AccountSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>>,
) {
  return ['sapi', '/sapi/v1/accountSnapshot', toValue(args)] as const
}

export function getSapiV1AccountSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AccountSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.accountSnapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AccountSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AccountSnapshotQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AccountSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.accountSnapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/hisrec', toValue(args)] as const
}

export function getSapiV1CapitalDepositHisrecQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalDepositHisrecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.deposit.hisrec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1CapitalDepositHisrec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalDepositHisrecQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositHisrecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalDepositHisrecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.deposit.hisrec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalWithdrawHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/withdraw/history', toValue(args)] as const
}

export function getSapiV1CapitalWithdrawHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalWithdrawHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.withdraw.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1CapitalWithdrawHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalWithdrawHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalWithdrawHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalWithdrawHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.withdraw.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address', toValue(args)] as const
}

export function getSapiV1CapitalDepositAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalDepositAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.deposit.address.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1CapitalDepositAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalDepositAddressQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalDepositAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.deposit.address.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AccountStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.status.$get>>,
) {
  return ['sapi', '/sapi/v1/account/status', toValue(args)] as const
}

export function getSapiV1AccountStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AccountStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.account.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AccountStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AccountStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AccountStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.account.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AccountApiTradingStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>>,
) {
  return ['sapi', '/sapi/v1/account/apiTradingStatus', toValue(args)] as const
}

export function getSapiV1AccountApiTradingStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AccountApiTradingStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.account.apiTradingStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AccountApiTradingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AccountApiTradingStatusQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountApiTradingStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AccountApiTradingStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.account.apiTradingStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetDribbletQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/dribblet', toValue(args)] as const
}

export function getSapiV1AssetDribbletQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetDribbletQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.dribblet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetDribblet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AssetDribbletQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetDribbletQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetDribbletQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.dribblet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/assetDividend', toValue(args)] as const
}

export function getSapiV1AssetAssetDividendQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetAssetDividendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.assetDividend.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetAssetDividend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetAssetDividendQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetAssetDividendQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetAssetDividendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.assetDividend.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetAssetDetailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/assetDetail', toValue(args)] as const
}

export function getSapiV1AssetAssetDetailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetAssetDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.assetDetail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetAssetDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetAssetDetailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetAssetDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetAssetDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.assetDetail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetTradeFeeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/tradeFee', toValue(args)] as const
}

export function getSapiV1AssetTradeFeeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetTradeFeeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.tradeFee.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetTradeFee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AssetTradeFeeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetTradeFeeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetTradeFeeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.tradeFee.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetTransferQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.transfer.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/transfer', toValue(args)] as const
}

export function getSapiV1AssetTransferQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.transfer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.transfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.transfer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AssetTransferQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.transfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/asset/convert-transfer/queryByPage', toValue(args)] as const
}

export function getSapiV1AssetConvertTransferQueryByPageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetConvertTransferQueryByPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset['convert-transfer'].queryByPage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
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
                    (typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']
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
                    (typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetConvertTransferQueryByPageQueryKey>
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
            ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetConvertTransferQueryByPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetConvertTransferQueryByPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset['convert-transfer'].queryByPage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage', toValue(args)] as const
}

export function getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
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
                    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
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
                    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey>
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
              (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetLedgerTransferCloudMiningQueryByPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AccountApiRestrictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>>,
) {
  return ['sapi', '/sapi/v1/account/apiRestrictions', toValue(args)] as const
}

export function getSapiV1AccountApiRestrictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AccountApiRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.account.apiRestrictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AccountApiRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AccountApiRestrictionsQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountApiRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AccountApiRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.account.apiRestrictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalContractConvertibleCoinsQueryKey() {
  return ['sapi', '/sapi/v1/capital/contract/convertible-coins'] as const
}

export function getSapiV1CapitalContractConvertibleCoinsQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getSapiV1CapitalContractConvertibleCoinsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalContractConvertibleCoinsQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalContractConvertibleCoinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1CapitalContractConvertibleCoinsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>,
) {
  return ['sapi', '/sapi/v1/sub-account/list', toValue(args)] as const
}

export function getSapiV1SubAccountListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountListQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountSubTransferHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/sub/transfer/history', toValue(args)] as const
}

export function getSapiV1SubAccountSubTransferHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountSubTransferHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].sub.transfer.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountSubTransferHistoryQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSubTransferHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountSubTransferHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].sub.transfer.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesInternalTransferQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/internalTransfer', toValue(args)] as const
}

export function getSapiV1SubAccountFuturesInternalTransferQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountFuturesInternalTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.internalTransfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountFuturesInternalTransferQueryKey>
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
              (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesInternalTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountFuturesInternalTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].futures.internalTransfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>
  >,
) {
  return ['sapi', '/sapi/v3/sub-account/assets', toValue(args)] as const
}

export function getSapiV3SubAccountAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV3SubAccountAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v3['sub-account'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV3SubAccountAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV3SubAccountAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV3SubAccountAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v3['sub-account'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountSpotSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/spotSummary', toValue(args)] as const
}

export function getSapiV1SubAccountSpotSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountSpotSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].spotSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountSpotSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSpotSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountSpotSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].spotSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositSubAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subAddress', toValue(args)] as const
}

export function getSapiV1CapitalDepositSubAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalDepositSubAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.deposit.subAddress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalDepositSubAddressQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositSubAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalDepositSubAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.deposit.subAddress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositSubHisrecQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subHisrec', toValue(args)] as const
}

export function getSapiV1CapitalDepositSubHisrecQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalDepositSubHisrecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.deposit.subHisrec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalDepositSubHisrecQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositSubHisrecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalDepositSubHisrecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.deposit.subHisrec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>>,
) {
  return ['sapi', '/sapi/v1/asset/wallet/balance', toValue(args)] as const
}

export function getSapiV1AssetWalletBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetWalletBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.wallet.balance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AssetWalletBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetWalletBalanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetWalletBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetWalletBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.wallet.balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AssetCustodyTransferHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/asset/custody/transfer-history', toValue(args)] as const
}

export function getSapiV1AssetCustodyTransferHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AssetCustodyTransferHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.asset.custody['transfer-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>
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
                  ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1AssetCustodyTransferHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AssetCustodyTransferHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AssetCustodyTransferHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.asset.custody['transfer-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalDepositAddressListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address/list', toValue(args)] as const
}

export function getSapiV1CapitalDepositAddressListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CapitalDepositAddressListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.deposit.address.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalDepositAddressListQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalDepositAddressListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CapitalDepositAddressListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.deposit.address.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SpotDelistScheduleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>,
) {
  return ['sapi', '/sapi/v1/spot/delist-schedule', toValue(args)] as const
}

export function getSapiV1SpotDelistScheduleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SpotDelistScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.spot['delist-schedule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1SpotDelistScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SpotDelistScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SpotDelistScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.spot['delist-schedule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CapitalWithdrawAddressListQueryKey() {
  return ['sapi', '/sapi/v1/capital/withdraw/address/list'] as const
}

export function getSapiV1CapitalWithdrawAddressListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1CapitalWithdrawAddressListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.capital.withdraw.address.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CapitalWithdrawAddressListQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CapitalWithdrawAddressListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1CapitalWithdrawAddressListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.capital.withdraw.address.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AccountInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.info.$get>>,
) {
  return ['sapi', '/sapi/v1/account/info', toValue(args)] as const
}

export function getSapiV1AccountInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AccountInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.account.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AccountInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.account.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1AccountInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AccountInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AccountInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.account.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/status', toValue(args)] as const
}

export function getSapiV1SubAccountStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/account', toValue(args)] as const
}

export function getSapiV1SubAccountMarginAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountMarginAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].margin.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountMarginAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountMarginAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountMarginAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].margin.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountMarginAccountSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/accountSummary', toValue(args)] as const
}

export function getSapiV1SubAccountMarginAccountSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountMarginAccountSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].margin.accountSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountMarginAccountSummaryQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountMarginAccountSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountMarginAccountSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].margin.accountSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/account', toValue(args)] as const
}

export function getSapiV1SubAccountFuturesAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountFuturesAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountFuturesAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountFuturesAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].futures.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesAccountSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/accountSummary', toValue(args)] as const
}

export function getSapiV1SubAccountFuturesAccountSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountFuturesAccountSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.accountSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountFuturesAccountSummaryQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesAccountSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountFuturesAccountSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].futures.accountSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountFuturesPositionRiskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/positionRisk', toValue(args)] as const
}

export function getSapiV1SubAccountFuturesPositionRiskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountFuturesPositionRiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].futures.positionRisk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountFuturesPositionRiskQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountFuturesPositionRiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountFuturesPositionRiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].futures.positionRisk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/transfer/subUserHistory', toValue(args)] as const
}

export function getSapiV1SubAccountTransferSubUserHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountTransferSubUserHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].transfer.subUserHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountTransferSubUserHistoryQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountTransferSubUserHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountTransferSubUserHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].transfer.subUserHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountUniversalTransferQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/universalTransfer', toValue(args)] as const
}

export function getSapiV1SubAccountUniversalTransferQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountUniversalTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].universalTransfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountUniversalTransferQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountUniversalTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountUniversalTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].universalTransfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
  >,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/account', toValue(args)] as const
}

export function getSapiV2SubAccountFuturesAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2SubAccountFuturesAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV2SubAccountFuturesAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2SubAccountFuturesAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2['sub-account'].futures.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2SubAccountFuturesAccountSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
  >,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/accountSummary', toValue(args)] as const
}

export function getSapiV2SubAccountFuturesAccountSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2SubAccountFuturesAccountSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.accountSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
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
                    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
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
                    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV2SubAccountFuturesAccountSummaryQueryKey>
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
            ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesAccountSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2SubAccountFuturesAccountSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2['sub-account'].futures.accountSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2SubAccountFuturesPositionRiskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
  >,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/positionRisk', toValue(args)] as const
}

export function getSapiV2SubAccountFuturesPositionRiskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2SubAccountFuturesPositionRiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2['sub-account'].futures.positionRisk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
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
                    (typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']
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
                    (typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV2SubAccountFuturesPositionRiskQueryKey>
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
            ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2SubAccountFuturesPositionRiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2SubAccountFuturesPositionRiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2['sub-account'].futures.positionRisk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/asset', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].asset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountAssetQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].asset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/accountSnapshot', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountAccountSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountAccountSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].accountSnapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
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
                    (typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountAccountSnapshotQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountAccountSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountAccountSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].accountSnapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForInvestor', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey>
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
              (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogForInvestorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForTradeParent', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey>
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
              (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogForTradeParentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountFetchFutureAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/fetch-future-asset', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountFetchFutureAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountFetchFutureAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
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
                    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountFetchFutureAssetQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountFetchFutureAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountFetchFutureAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountMarginAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/marginAsset', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountMarginAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountMarginAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].marginAsset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountMarginAssetQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountMarginAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountMarginAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].marginAsset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/info', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountDepositAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/deposit/address', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountDepositAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountDepositAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount'].deposit.address.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
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
                    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountDepositAddressQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountDepositAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountDepositAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount'].deposit.address.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ManagedSubaccountQueryTransLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/query-trans-log', toValue(args)] as const
}

export function getSapiV1ManagedSubaccountQueryTransLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['managed-subaccount']['query-trans-log'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
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
                    (typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']
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
                    (typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ManagedSubaccountQueryTransLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ManagedSubaccountQueryTransLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['managed-subaccount']['query-trans-log'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/subAccountApi/ipRestriction', toValue(args)] as const
}

export function getSapiV1SubAccountSubAccountApiIpRestrictionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey>
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
              (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountSubAccountApiIpRestrictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/transaction-statistics', toValue(args)] as const
}

export function getSapiV1SubAccountTransactionStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SubAccountTransactionStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['sub-account']['transaction-statistics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
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
                    (typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']
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
                    (typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SubAccountTransactionStatisticsQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SubAccountTransactionStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SubAccountTransactionStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['sub-account']['transaction-statistics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>
  >,
) {
  return ['sapi', '/sapi/v4/sub-account/assets', toValue(args)] as const
}

export function getSapiV4SubAccountAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV4SubAccountAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v4['sub-account'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV4SubAccountAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV4SubAccountAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV4SubAccountAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v4['sub-account'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.userDataStream.$delete>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.orders.$get>>,
) {
  return ['sapi', '/sapi/v1/fiat/orders', toValue(args)] as const
}

export function getSapiV1FiatOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1FiatOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.fiat.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1FiatOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1FiatOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FiatOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1FiatOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.fiat.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1FiatPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.payments.$get>>,
) {
  return ['sapi', '/sapi/v1/fiat/payments', toValue(args)] as const
}

export function getSapiV1FiatPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1FiatPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.fiat.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1FiatPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.fiat.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1FiatPaymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FiatPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1FiatPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.fiat.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingProjectListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.lending.project.list.$get>>,
) {
  return ['sapi', '/sapi/v1/lending/project/list', toValue(args)] as const
}

export function getSapiV1LendingProjectListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.lending.project.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingProjectListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending.project.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LendingProjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.lending.project.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingProjectListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingProjectListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingProjectListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending.project.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>
  >,
) {
  return ['sapi', '/sapi/v1/lending/project/position/list', toValue(args)] as const
}

export function getSapiV1LendingProjectPositionListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingProjectPositionListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending.project.position.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingProjectPositionListQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingProjectPositionListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingProjectPositionListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending.project.position.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSapiV1MiningPubAlgoListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1MiningPubAlgoListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.pub.algoList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningPubAlgoListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPubAlgoListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1MiningPubAlgoListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.pub.algoList.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningPubCoinListQueryKey() {
  return ['sapi', '/sapi/v1/mining/pub/coinList'] as const
}

export function getSapiV1MiningPubCoinListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1MiningPubCoinListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.pub.coinList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningPubCoinListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPubCoinListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1MiningPubCoinListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.pub.coinList.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningWorkerDetailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/worker/detail', toValue(args)] as const
}

export function getSapiV1MiningWorkerDetailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningWorkerDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.worker.detail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MiningWorkerDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningWorkerDetailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningWorkerDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningWorkerDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.worker.detail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningWorkerListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/worker/list', toValue(args)] as const
}

export function getSapiV1MiningWorkerListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningWorkerListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.worker.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MiningWorkerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningWorkerListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningWorkerListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningWorkerListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.worker.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/payment/list', toValue(args)] as const
}

export function getSapiV1MiningPaymentListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningPaymentListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.payment.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MiningPaymentList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningPaymentListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningPaymentListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.payment.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentOtherQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/payment/other', toValue(args)] as const
}

export function getSapiV1MiningPaymentOtherQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningPaymentOtherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.payment.other.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MiningPaymentOther<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningPaymentOtherQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentOtherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningPaymentOtherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.payment.other.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningHashTransferConfigDetailsListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config/details/list', toValue(args)] as const
}

export function getSapiV1MiningHashTransferConfigDetailsListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningHashTransferConfigDetailsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining['hash-transfer'].config.details.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
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
                    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
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
                    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningHashTransferConfigDetailsListQueryKey>
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
              (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningHashTransferConfigDetailsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningHashTransferConfigDetailsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining['hash-transfer'].config.details.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningHashTransferProfitDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/profit/details', toValue(args)] as const
}

export function getSapiV1MiningHashTransferProfitDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningHashTransferProfitDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining['hash-transfer'].profit.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
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
                    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
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
                    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningHashTransferProfitDetailsQueryKey>
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
            ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningHashTransferProfitDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningHashTransferProfitDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining['hash-transfer'].profit.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>
  >,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/status', toValue(args)] as const
}

export function getSapiV1MiningStatisticsUserStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningStatisticsUserStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.statistics.user.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningStatisticsUserStatusQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningStatisticsUserStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningStatisticsUserStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.statistics.user.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningStatisticsUserListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/list', toValue(args)] as const
}

export function getSapiV1MiningStatisticsUserListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningStatisticsUserListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.statistics.user.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningStatisticsUserListQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningStatisticsUserListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningStatisticsUserListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.statistics.user.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1MiningPaymentUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>>,
) {
  return ['sapi', '/sapi/v1/mining/payment/uid', toValue(args)] as const
}

export function getSapiV1MiningPaymentUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1MiningPaymentUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.mining.payment.uid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1MiningPaymentUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1MiningPaymentUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1MiningPaymentUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1MiningPaymentUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.mining.payment.uid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1FuturesTransferQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.transfer.$get>>,
) {
  return ['sapi', '/sapi/v1/futures/transfer', toValue(args)] as const
}

export function getSapiV1FuturesTransferQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.transfer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1FuturesTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.futures.transfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1FuturesTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.transfer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1FuturesTransferQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FuturesTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1FuturesTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.futures.transfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.futures.transfer.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>>,
) {
  return ['sapi', '/sapi/v1/futures/histDataLink', toValue(args)] as const
}

export function getSapiV1FuturesHistDataLinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1FuturesHistDataLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.futures.histDataLink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1FuturesHistDataLink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1FuturesHistDataLinkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1FuturesHistDataLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1FuturesHistDataLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.futures.histDataLink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/algo/futures/openOrders', toValue(args)] as const
}

export function getSapiV1AlgoFuturesOpenOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoFuturesOpenOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.futures.openOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AlgoFuturesOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoFuturesOpenOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesOpenOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoFuturesOpenOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.futures.openOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AlgoFuturesHistoricalOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>
  >,
) {
  return ['sapi', '/sapi/v1/algo/futures/historicalOrders', toValue(args)] as const
}

export function getSapiV1AlgoFuturesHistoricalOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoFuturesHistoricalOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.futures.historicalOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoFuturesHistoricalOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesHistoricalOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoFuturesHistoricalOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.futures.historicalOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AlgoFuturesSubOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/algo/futures/subOrders', toValue(args)] as const
}

export function getSapiV1AlgoFuturesSubOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoFuturesSubOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.futures.subOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AlgoFuturesSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoFuturesSubOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoFuturesSubOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoFuturesSubOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.futures.subOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.spot.order.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/algo/spot/openOrders', toValue(args)] as const
}

export function getSapiV1AlgoSpotOpenOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoSpotOpenOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.spot.openOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AlgoSpotOpenOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoSpotOpenOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotOpenOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoSpotOpenOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.spot.openOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AlgoSpotHistoricalOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/algo/spot/historicalOrders', toValue(args)] as const
}

export function getSapiV1AlgoSpotHistoricalOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoSpotHistoricalOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.spot.historicalOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoSpotHistoricalOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotHistoricalOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoSpotHistoricalOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.spot.historicalOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1AlgoSpotSubOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>>,
) {
  return ['sapi', '/sapi/v1/algo/spot/subOrders', toValue(args)] as const
}

export function getSapiV1AlgoSpotSubOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1AlgoSpotSubOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.algo.spot.subOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1AlgoSpotSubOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1AlgoSpotSubOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1AlgoSpotSubOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1AlgoSpotSubOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.algo.spot.subOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1PortfolioAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.account.$get>>,
) {
  return ['sapi', '/sapi/v1/portfolio/account', toValue(args)] as const
}

export function getSapiV1PortfolioAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PortfolioAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1PortfolioAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioAccountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PortfolioAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1PortfolioCollateralRateQueryKey() {
  return ['sapi', '/sapi/v1/portfolio/collateralRate'] as const
}

export function getSapiV1PortfolioCollateralRateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1PortfolioCollateralRateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio.collateralRate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioCollateralRateQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioCollateralRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1PortfolioCollateralRateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio.collateralRate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2PortfolioCollateralRateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>>,
) {
  return ['sapi', '/sapi/v2/portfolio/collateralRate', toValue(args)] as const
}

export function getSapiV2PortfolioCollateralRateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2PortfolioCollateralRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.portfolio.collateralRate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV2PortfolioCollateralRate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2PortfolioCollateralRateQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2PortfolioCollateralRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2PortfolioCollateralRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.portfolio.collateralRate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1PortfolioPmLoanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>>,
) {
  return ['sapi', '/sapi/v1/portfolio/pmLoan', toValue(args)] as const
}

export function getSapiV1PortfolioPmLoanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PortfolioPmLoanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio.pmLoan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1PortfolioPmLoan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1PortfolioPmLoanQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioPmLoanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PortfolioPmLoanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio.pmLoan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/portfolio/interest-history', toValue(args)] as const
}

export function getSapiV1PortfolioInterestHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PortfolioInterestHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio['interest-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioInterestHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioInterestHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PortfolioInterestHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio['interest-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1PortfolioAssetIndexPriceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/portfolio/asset-index-price', toValue(args)] as const
}

export function getSapiV1PortfolioAssetIndexPriceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PortfolioAssetIndexPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio['asset-index-price'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioAssetIndexPriceQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioAssetIndexPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PortfolioAssetIndexPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio['asset-index-price'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-switch', toValue(args)] as const
}

export function getSapiV1PortfolioRepayFuturesSwitchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PortfolioRepayFuturesSwitchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio['repay-futures-switch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>
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
                  ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioRepayFuturesSwitchQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioRepayFuturesSwitchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PortfolioRepayFuturesSwitchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio['repay-futures-switch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSapiV1PortfolioMarginAssetLeverageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSapiV1PortfolioMarginAssetLeverageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1PortfolioMarginAssetLeverageQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PortfolioMarginAssetLeverageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSapiV1PortfolioMarginAssetLeverageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>>,
) {
  return ['sapi', '/sapi/v1/blvt/tokenInfo', toValue(args)] as const
}

export function getSapiV1BlvtTokenInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1BlvtTokenInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.blvt.tokenInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1BlvtTokenInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1BlvtTokenInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtTokenInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1BlvtTokenInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.blvt.tokenInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>>,
) {
  return ['sapi', '/sapi/v1/blvt/subscribe/record', toValue(args)] as const
}

export function getSapiV1BlvtSubscribeRecordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1BlvtSubscribeRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.blvt.subscribe.record.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1BlvtSubscribeRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1BlvtSubscribeRecordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtSubscribeRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1BlvtSubscribeRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.blvt.subscribe.record.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>>,
) {
  return ['sapi', '/sapi/v1/blvt/redeem/record', toValue(args)] as const
}

export function getSapiV1BlvtRedeemRecordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1BlvtRedeemRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.blvt.redeem.record.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1BlvtRedeemRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1BlvtRedeemRecordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtRedeemRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1BlvtRedeemRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.blvt.redeem.record.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1BlvtUserLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>>,
) {
  return ['sapi', '/sapi/v1/blvt/userLimit', toValue(args)] as const
}

export function getSapiV1BlvtUserLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1BlvtUserLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.blvt.userLimit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1BlvtUserLimit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1BlvtUserLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1BlvtUserLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1BlvtUserLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.blvt.userLimit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>
  >,
) {
  return ['sapi', '/sapi/v1/c2c/orderMatch/listUserOrderHistory', toValue(args)] as const
}

export function getSapiV1C2cOrderMatchListUserOrderHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1C2cOrderMatchListUserOrderHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanVipOngoingOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/ongoing/orders', toValue(args)] as const
}

export function getSapiV1LoanVipOngoingOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipOngoingOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.ongoing.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanVipOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipOngoingOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipOngoingOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipOngoingOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.ongoing.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/repay/history', toValue(args)] as const
}

export function getSapiV1LoanVipRepayHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipRepayHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.repay.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanVipRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipRepayHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRepayHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipRepayHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.repay.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanVipCollateralAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/account', toValue(args)] as const
}

export function getSapiV1LoanVipCollateralAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipCollateralAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.collateral.account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipCollateralAccountQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipCollateralAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipCollateralAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.collateral.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/loanable/data', toValue(args)] as const
}

export function getSapiV1LoanVipLoanableDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipLoanableDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.loanable.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanVipLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipLoanableDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipLoanableDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipLoanableDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.loanable.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanVipCollateralDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/data', toValue(args)] as const
}

export function getSapiV1LoanVipCollateralDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipCollateralDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.collateral.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanVipCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipCollateralDataQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipCollateralDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipCollateralDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.collateral.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanVipRequestDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/data', toValue(args)] as const
}

export function getSapiV1LoanVipRequestDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipRequestDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.request.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanVipRequestData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipRequestDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRequestDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipRequestDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.request.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanVipRequestInterestRateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>
  >,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/interestRate', toValue(args)] as const
}

export function getSapiV1LoanVipRequestInterestRateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanVipRequestInterestRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.vip.request.interestRate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanVipRequestInterestRateQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanVipRequestInterestRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanVipRequestInterestRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.vip.request.interestRate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.income.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/income', toValue(args)] as const
}

export function getSapiV1LoanIncomeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.income.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanIncomeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.income.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanIncome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.income.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1LoanIncomeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanIncomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanIncomeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.income.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/borrow/history', toValue(args)] as const
}

export function getSapiV1LoanBorrowHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanBorrowHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.borrow.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanBorrowHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanBorrowHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanBorrowHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanBorrowHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.borrow.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanOngoingOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/ongoing/orders', toValue(args)] as const
}

export function getSapiV1LoanOngoingOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanOngoingOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.ongoing.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanOngoingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanOngoingOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanOngoingOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanOngoingOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.ongoing.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/repay/history', toValue(args)] as const
}

export function getSapiV1LoanRepayHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanRepayHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.repay.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanRepayHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanRepayHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanRepayHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanRepayHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.repay.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/ltv/adjustment/history', toValue(args)] as const
}

export function getSapiV1LoanLtvAdjustmentHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanLtvAdjustmentHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.ltv.adjustment.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanLtvAdjustmentHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanLtvAdjustmentHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanLtvAdjustmentHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.ltv.adjustment.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanLoanableDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/loanable/data', toValue(args)] as const
}

export function getSapiV1LoanLoanableDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanLoanableDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.loanable.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanLoanableData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanLoanableDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanLoanableDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanLoanableDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.loanable.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanCollateralDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/collateral/data', toValue(args)] as const
}

export function getSapiV1LoanCollateralDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanCollateralDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.collateral.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1LoanCollateralData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanCollateralDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanCollateralDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanCollateralDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.collateral.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LoanRepayCollateralRateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>,
) {
  return ['sapi', '/sapi/v1/loan/repay/collateral/rate', toValue(args)] as const
}

export function getSapiV1LoanRepayCollateralRateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LoanRepayCollateralRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.loan.repay.collateral.rate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1LoanRepayCollateralRateQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LoanRepayCollateralRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LoanRepayCollateralRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.loan.repay.collateral.rate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ongoing/orders', toValue(args)] as const
}

export function getSapiV2LoanFlexibleOngoingOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleOngoingOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.ongoing.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleOngoingOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleOngoingOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleOngoingOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.ongoing.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleBorrowHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/borrow/history', toValue(args)] as const
}

export function getSapiV2LoanFlexibleBorrowHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleBorrowHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.borrow.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleBorrowHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleBorrowHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleBorrowHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.borrow.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/repay/history', toValue(args)] as const
}

export function getSapiV2LoanFlexibleRepayHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleRepayHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.repay.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleRepayHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleRepayHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleRepayHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.repay.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>
  >,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ltv/adjustment/history', toValue(args)] as const
}

export function getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleLtvAdjustmentHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleLoanableDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/loanable/data', toValue(args)] as const
}

export function getSapiV2LoanFlexibleLoanableDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleLoanableDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.loanable.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleLoanableDataQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleLoanableDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleLoanableDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.loanable.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2LoanFlexibleCollateralDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>
  >,
) {
  return ['sapi', '/sapi/v2/loan/flexible/collateral/data', toValue(args)] as const
}

export function getSapiV2LoanFlexibleCollateralDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2LoanFlexibleCollateralDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2.loan.flexible.collateral.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV2LoanFlexibleCollateralDataQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2LoanFlexibleCollateralDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2LoanFlexibleCollateralDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2.loan.flexible.collateral.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1PayTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.pay.transactions.$get>>,
) {
  return ['sapi', '/sapi/v1/pay/transactions', toValue(args)] as const
}

export function getSapiV1PayTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.pay.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1PayTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.pay.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1PayTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.pay.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1PayTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1PayTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1PayTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.pay.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ConvertExchangeInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>>,
) {
  return ['sapi', '/sapi/v1/convert/exchangeInfo', toValue(args)] as const
}

export function getSapiV1ConvertExchangeInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ConvertExchangeInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.convert.exchangeInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1ConvertExchangeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ConvertExchangeInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertExchangeInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ConvertExchangeInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.convert.exchangeInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ConvertAssetInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>>,
) {
  return ['sapi', '/sapi/v1/convert/assetInfo', toValue(args)] as const
}

export function getSapiV1ConvertAssetInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ConvertAssetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.convert.assetInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1ConvertAssetInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ConvertAssetInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertAssetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ConvertAssetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.convert.assetInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.getQuote.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>>,
) {
  return ['sapi', '/sapi/v1/convert/orderStatus', toValue(args)] as const
}

export function getSapiV1ConvertOrderStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ConvertOrderStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.convert.orderStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1ConvertOrderStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ConvertOrderStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertOrderStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ConvertOrderStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.convert.orderStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>
  >,
) {
  return ['sapi', '/sapi/v1/convert/limit/queryOpenOrders', toValue(args)] as const
}

export function getSapiV1ConvertLimitQueryOpenOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ConvertLimitQueryOpenOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.convert.limit.queryOpenOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ConvertLimitQueryOpenOrdersQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertLimitQueryOpenOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ConvertLimitQueryOpenOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.convert.limit.queryOpenOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1ConvertTradeFlowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>>,
) {
  return ['sapi', '/sapi/v1/convert/tradeFlow', toValue(args)] as const
}

export function getSapiV1ConvertTradeFlowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1ConvertTradeFlowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.convert.tradeFlow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1ConvertTradeFlow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1ConvertTradeFlowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1ConvertTradeFlowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1ConvertTradeFlowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.convert.tradeFlow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1RebateTaxQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>>,
) {
  return ['sapi', '/sapi/v1/rebate/taxQuery', toValue(args)] as const
}

export function getSapiV1RebateTaxQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1RebateTaxQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.rebate.taxQuery.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1RebateTaxQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1RebateTaxQueryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1RebateTaxQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1RebateTaxQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.rebate.taxQuery.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1NftHistoryTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>>,
) {
  return ['sapi', '/sapi/v1/nft/history/transactions', toValue(args)] as const
}

export function getSapiV1NftHistoryTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1NftHistoryTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.nft.history.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1NftHistoryTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1NftHistoryTransactionsQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1NftHistoryTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.nft.history.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1NftHistoryDepositQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>>,
) {
  return ['sapi', '/sapi/v1/nft/history/deposit', toValue(args)] as const
}

export function getSapiV1NftHistoryDepositQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1NftHistoryDepositQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.nft.history.deposit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1NftHistoryDeposit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1NftHistoryDepositQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryDepositQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1NftHistoryDepositQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.nft.history.deposit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1NftHistoryWithdrawQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>>,
) {
  return ['sapi', '/sapi/v1/nft/history/withdraw', toValue(args)] as const
}

export function getSapiV1NftHistoryWithdrawQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1NftHistoryWithdrawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.nft.history.withdraw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1NftHistoryWithdraw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1NftHistoryWithdrawQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftHistoryWithdrawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1NftHistoryWithdrawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.nft.history.withdraw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1NftUserGetAssetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>>,
) {
  return ['sapi', '/sapi/v1/nft/user/getAsset', toValue(args)] as const
}

export function getSapiV1NftUserGetAssetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1NftUserGetAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.nft.user.getAsset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1NftUserGetAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1NftUserGetAssetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1NftUserGetAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1NftUserGetAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.nft.user.getAsset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>>,
) {
  return ['sapi', '/sapi/v1/giftcard/verify', toValue(args)] as const
}

export function getSapiV1GiftcardVerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1GiftcardVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.giftcard.verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1GiftcardVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1GiftcardVerifyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1GiftcardVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.giftcard.verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/giftcard/cryptography/rsa-public-key', toValue(args)] as const
}

export function getSapiV1GiftcardCryptographyRsaPublicKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
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
                    (typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']
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
                    (typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey>
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
            ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1GiftcardCryptographyRsaPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.giftcard.buyCode.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/giftcard/buyCode/token-limit', toValue(args)] as const
}

export function getSapiV1GiftcardBuyCodeTokenLimitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1GiftcardBuyCodeTokenLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.giftcard.buyCode['token-limit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1GiftcardBuyCodeTokenLimitQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1GiftcardBuyCodeTokenLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1GiftcardBuyCodeTokenLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.giftcard.buyCode['token-limit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestTargetAssetListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/list', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestTargetAssetListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestTargetAssetListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetListQueryKey>
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
              (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestTargetAssetListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/roi/list', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestTargetAssetRoiListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey>
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
              (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestTargetAssetRoiListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestAllAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/all/asset', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestAllAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestAllAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].all.asset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestAllAssetQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestAllAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestAllAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].all.asset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestSourceAssetListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/source-asset/list', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestSourceAssetListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestSourceAssetListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestSourceAssetListQueryKey>
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
              (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestSourceAssetListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestSourceAssetListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/list', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestPlanListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestPlanListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].plan.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestPlanListQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestPlanListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestPlanListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].plan.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/id', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].plan.id.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestPlanIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].plan.id.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestHistoryListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/history/list', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestHistoryListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestHistoryListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].history.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestHistoryListQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestHistoryListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestHistoryListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].history.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestIndexInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/info', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestIndexInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestIndexInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].index.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestIndexInfoQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestIndexInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestIndexInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].index.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestIndexUserSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/user-summary', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestIndexUserSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestIndexUserSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestIndexUserSummaryQueryKey>
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
              (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestIndexUserSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestIndexUserSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/one-off/status', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestOneOffStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestOneOffStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest']['one-off'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestOneOffStatusQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestOneOffStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestOneOffStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest']['one-off'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/redeem/history', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestRedeemHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestRedeemHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].redeem.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestRedeemHistoryQueryKey>
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
            ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestRedeemHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestRedeemHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].redeem.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1LendingAutoInvestRebalanceHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/rebalance/history', toValue(args)] as const
}

export function getSapiV1LendingAutoInvestRebalanceHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1LendingAutoInvestRebalanceHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.lending['auto-invest'].rebalance.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']>
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
                    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
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
                    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1LendingAutoInvestRebalanceHistoryQueryKey>
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
              (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1LendingAutoInvestRebalanceHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1LendingAutoInvestRebalanceHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.lending['auto-invest'].rebalance.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/stakingHistory', toValue(args)] as const
}

export function getSapiV1EthStakingEthHistoryStakingHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthHistoryStakingHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthHistoryStakingHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryStakingHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthHistoryStakingHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/redemptionHistory', toValue(args)] as const
}

export function getSapiV1EthStakingEthHistoryRedemptionHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthHistoryRedemptionHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rewardsHistory', toValue(args)] as const
}

export function getSapiV1EthStakingEthHistoryRewardsHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthHistoryRewardsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthQuotaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/quota', toValue(args)] as const
}

export function getSapiV1EthStakingEthQuotaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.quota.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthQuotaQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.quota.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryRateHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rateHistory', toValue(args)] as const
}

export function getSapiV1EthStakingEthHistoryRateHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthHistoryRateHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthHistoryRateHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryRateHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthHistoryRateHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV2EthStakingAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>
  >,
) {
  return ['sapi', '/sapi/v2/eth-staking/account', toValue(args)] as const
}

export function getSapiV2EthStakingAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV2EthStakingAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v2['eth-staking'].account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV2EthStakingAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV2EthStakingAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV2EthStakingAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v2['eth-staking'].account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/wrapHistory', toValue(args)] as const
}

export function getSapiV1EthStakingWbethHistoryWrapHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingWbethHistoryWrapHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/unwrapHistory', toValue(args)] as const
}

export function getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingWbethHistoryUnwrapHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/wbethRewardsHistory', toValue(args)] as const
}

export function getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
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
                    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey>
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
              (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1EthStakingEthHistoryWbethRewardsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CopyTradingFuturesUserStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>
  >,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/userStatus', toValue(args)] as const
}

export function getSapiV1CopyTradingFuturesUserStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CopyTradingFuturesUserStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.copyTrading.futures.userStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CopyTradingFuturesUserStatusQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CopyTradingFuturesUserStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CopyTradingFuturesUserStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.copyTrading.futures.userStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1CopyTradingFuturesLeadSymbolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>
  >,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/leadSymbol', toValue(args)] as const
}

export function getSapiV1CopyTradingFuturesLeadSymbolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1CopyTradingFuturesLeadSymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.copyTrading.futures.leadSymbol.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1CopyTradingFuturesLeadSymbolQueryKey>
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
          Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1CopyTradingFuturesLeadSymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1CopyTradingFuturesLeadSymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.copyTrading.futures.leadSymbol.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/list', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleListQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/list', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>
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
                  ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedListQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/position', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexiblePositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexiblePositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.position.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexiblePositionQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexiblePositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexiblePositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.position.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedPositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/position', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedPositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedPositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.position.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedPositionQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedPositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedPositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.position.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/account', toValue(args)] as const
}

export function getSapiV1SimpleEarnAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
    >
  >,
) {
  return [
    'sapi',
    '/sapi/v1/simple-earn/flexible/history/subscriptionRecord',
    toValue(args),
  ] as const
}

export function getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/subscriptionRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedHistorySubscriptionRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/redemptionRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/redemptionRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedHistoryRedemptionRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rewardsRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRewardsRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/rewardsRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedHistoryRewardsRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/personalLeftQuota', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexiblePersonalLeftQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/personalLeftQuota', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']>
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedPersonalLeftQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/subscriptionPreview', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleSubscriptionPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/subscriptionPreview', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedSubscriptionPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedSubscriptionPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/setRedeemOption', toValue(args)] as const
}

export function getSapiV1SimpleEarnLockedSetRedeemOptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey>
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
            ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnLockedSetRedeemOptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rateHistory', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryRateHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
    >
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/collateralRecord', toValue(args)] as const
}

export function getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
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
                    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey>
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
              (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1SimpleEarnFlexibleHistoryCollateralRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1DciProductListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.list.$get>>,
) {
  return ['sapi', '/sapi/v1/dci/product/list', toValue(args)] as const
}

export function getSapiV1DciProductListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1DciProductListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.dci.product.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1DciProductList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
            >
          >,
          ReturnType<typeof getSapiV1DciProductListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1DciProductListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.dci.product.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>>,
) {
  return ['sapi', '/sapi/v1/dci/product/positions', toValue(args)] as const
}

export function getSapiV1DciProductPositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1DciProductPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.dci.product.positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1DciProductPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1DciProductPositionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1DciProductPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.dci.product.positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSapiV1DciProductAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>>,
) {
  return ['sapi', '/sapi/v1/dci/product/accounts', toValue(args)] as const
}

export function getSapiV1DciProductAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSapiV1DciProductAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sapi.v1.dci.product.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSapiV1DciProductAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>
              >
            >
          >,
          ReturnType<typeof getSapiV1DciProductAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSapiV1DciProductAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSapiV1DciProductAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sapi.v1.dci.product.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']
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

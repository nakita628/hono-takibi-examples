import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getSapiKey() {
  return ['sapi'] as const
}

export function getGetApiV3PingKey() {
  return ['api', '/api/v3/ping'] as const
}

export function useGetApiV3Ping<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3PingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Ping<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3PingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TimeKey() {
  return ['api', '/api/v3/time'] as const
}

export function useGetApiV3Time<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.time.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Time<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.time.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3ExchangeInfoKey(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
) {
  return ['api', '/api/v3/exchangeInfo', args] as const
}

export function useGetApiV3ExchangeInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
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
        ? getGetApiV3ExchangeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.exchangeInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3ExchangeInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
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
        ? getGetApiV3ExchangeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exchangeInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.exchangeInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3DepthKey(args: InferRequestType<typeof client.api.v3.depth.$get>) {
  return ['api', '/api/v3/depth', args] as const
}

export function useGetApiV3Depth<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.depth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3DepthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.depth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Depth<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.depth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3DepthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.depth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.depth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TradesKey(args: InferRequestType<typeof client.api.v3.trades.$get>) {
  return ['api', '/api/v3/trades', args] as const
}

export function useGetApiV3Trades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Trades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3HistoricalTradesKey(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
) {
  return ['api', '/api/v3/historicalTrades', args] as const
}

export function useGetApiV3HistoricalTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
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
        ? getGetApiV3HistoricalTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.historicalTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3HistoricalTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
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
        ? getGetApiV3HistoricalTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.historicalTrades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.historicalTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AggTradesKey(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
) {
  return ['api', '/api/v3/aggTrades', args] as const
}

export function useGetApiV3AggTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AggTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.aggTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AggTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AggTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.aggTrades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.aggTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3KlinesKey(args: InferRequestType<typeof client.api.v3.klines.$get>) {
  return ['api', '/api/v3/klines', args] as const
}

export function useGetApiV3Klines<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.klines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3KlinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.klines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Klines<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.klines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3KlinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.klines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.klines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3UiKlinesKey(args: InferRequestType<typeof client.api.v3.uiKlines.$get>) {
  return ['api', '/api/v3/uiKlines', args] as const
}

export function useGetApiV3UiKlines<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3UiKlinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.uiKlines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3UiKlines<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3UiKlinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.uiKlines.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.uiKlines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AvgPriceKey(args: InferRequestType<typeof client.api.v3.avgPrice.$get>) {
  return ['api', '/api/v3/avgPrice', args] as const
}

export function useGetApiV3AvgPrice<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AvgPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.avgPrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AvgPrice<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AvgPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.avgPrice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.avgPrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3Ticker24hrKey(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
) {
  return ['api', '/api/v3/ticker/24hr', args] as const
}

export function useGetApiV3Ticker24hr<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
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
        ? getGetApiV3Ticker24hrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker['24hr'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Ticker24hr<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
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
        ? getGetApiV3Ticker24hrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.ticker)['24hr']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker['24hr'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TickerTradingDayKey(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
) {
  return ['api', '/api/v3/ticker/tradingDay', args] as const
}

export function useGetApiV3TickerTradingDay<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
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
        ? getGetApiV3TickerTradingDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.tradingDay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3TickerTradingDay<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
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
        ? getGetApiV3TickerTradingDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.tradingDay.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.tradingDay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TickerPriceKey(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
) {
  return ['api', '/api/v3/ticker/price', args] as const
}

export function useGetApiV3TickerPrice<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
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
        ? getGetApiV3TickerPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3TickerPrice<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
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
        ? getGetApiV3TickerPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.price.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TickerBookTickerKey(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
) {
  return ['api', '/api/v3/ticker/bookTicker', args] as const
}

export function useGetApiV3TickerBookTicker<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
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
        ? getGetApiV3TickerBookTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.bookTicker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3TickerBookTicker<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
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
        ? getGetApiV3TickerBookTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.bookTicker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.bookTicker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3TickerKey(args: InferRequestType<typeof client.api.v3.ticker.$get>) {
  return ['api', '/api/v3/ticker', args] as const
}

export function useGetApiV3Ticker<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TickerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Ticker<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.ticker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3TickerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.ticker.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.ticker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3OrderTestKey() {
  return ['api', '/api/v3/order/test', 'POST'] as const
}

export function usePostApiV3OrderTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.test.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.order.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.order.test.$post> }) =>
        parseResponse(client.api.v3.order.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3OrderKey(args: InferRequestType<typeof client.api.v3.order.$get>) {
  return ['api', '/api/v3/order', args] as const
}

export function useGetApiV3Order<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3OrderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Order<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3OrderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3OrderKey() {
  return ['api', '/api/v3/order', 'POST'] as const
}

export function usePostApiV3Order<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.order.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.order.$post> }) =>
        parseResponse(client.api.v3.order.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3OrderKey() {
  return ['api', '/api/v3/order', 'DELETE'] as const
}

export function useDeleteApiV3Order<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.order.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3OrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.order.$delete> }) =>
        parseResponse(client.api.v3.order.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3OrderCancelReplaceKey() {
  return ['api', '/api/v3/order/cancelReplace', 'POST'] as const
}

export function usePostApiV3OrderCancelReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.order.cancelReplace.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.order.cancelReplace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderCancelReplaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.order.cancelReplace.$post> },
      ) => parseResponse(client.api.v3.order.cancelReplace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3OpenOrdersKey(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
) {
  return ['api', '/api/v3/openOrders', args] as const
}

export function useGetApiV3OpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
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
        ? getGetApiV3OpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3OpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
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
        ? getGetApiV3OpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3OpenOrdersKey() {
  return ['api', '/api/v3/openOrders', 'DELETE'] as const
}

export function useDeleteApiV3OpenOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrders.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.openOrders.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3OpenOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.openOrders.$delete> }) =>
        parseResponse(client.api.v3.openOrders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AllOrdersKey(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
) {
  return ['api', '/api/v3/allOrders', args] as const
}

export function useGetApiV3AllOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AllOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.allOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AllOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AllOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.allOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3OrderListOcoKey() {
  return ['api', '/api/v3/orderList/oco', 'POST'] as const
}

export function usePostApiV3OrderListOco<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oco.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.orderList.oco.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderListOcoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.orderList.oco.$post> },
      ) => parseResponse(client.api.v3.orderList.oco.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3OrderListOtoKey() {
  return ['api', '/api/v3/orderList/oto', 'POST'] as const
}

export function usePostApiV3OrderListOto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.oto.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.orderList.oto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderListOtoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.orderList.oto.$post> },
      ) => parseResponse(client.api.v3.orderList.oto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3OrderListOtocoKey() {
  return ['api', '/api/v3/orderList/otoco', 'POST'] as const
}

export function usePostApiV3OrderListOtoco<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.otoco.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.orderList.otoco.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3OrderListOtocoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.orderList.otoco.$post> },
      ) => parseResponse(client.api.v3.orderList.otoco.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3OrderListKey(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
) {
  return ['api', '/api/v3/orderList', args] as const
}

export function useGetApiV3OrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3OrderListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.orderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3OrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3OrderListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.orderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3OrderListKey() {
  return ['api', '/api/v3/orderList', 'DELETE'] as const
}

export function useDeleteApiV3OrderList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.orderList.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.orderList.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3OrderListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.orderList.$delete> }) =>
        parseResponse(client.api.v3.orderList.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AllOrderListKey(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
) {
  return ['api', '/api/v3/allOrderList', args] as const
}

export function useGetApiV3AllOrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
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
        ? getGetApiV3AllOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.allOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AllOrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
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
        ? getGetApiV3AllOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.allOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3OpenOrderListKey(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
) {
  return ['api', '/api/v3/openOrderList', args] as const
}

export function useGetApiV3OpenOrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
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
        ? getGetApiV3OpenOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.openOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3OpenOrderList<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
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
        ? getGetApiV3OpenOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.openOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.openOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3SorOrderKey() {
  return ['api', '/api/v3/sor/order', 'POST'] as const
}

export function usePostApiV3SorOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.sor.order.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3SorOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.sor.order.$post> }) =>
        parseResponse(client.api.v3.sor.order.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3SorOrderTestKey() {
  return ['api', '/api/v3/sor/order/test', 'POST'] as const
}

export function usePostApiV3SorOrderTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.sor.order.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.sor.order.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3SorOrderTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.sor.order.test.$post> },
      ) => parseResponse(client.api.v3.sor.order.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountKey(args: InferRequestType<typeof client.api.v3.account.$get>) {
  return ['api', '/api/v3/account', args] as const
}

export function useGetApiV3Account<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3Account<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3AccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3MyTradesKey(args: InferRequestType<typeof client.api.v3.myTrades.$get>) {
  return ['api', '/api/v3/myTrades', args] as const
}

export function useGetApiV3MyTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3MyTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3MyTrades<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV3MyTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myTrades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3RateLimitOrderKey(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
) {
  return ['api', '/api/v3/rateLimit/order', args] as const
}

export function useGetApiV3RateLimitOrder<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
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
        ? getGetApiV3RateLimitOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.rateLimit.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3RateLimitOrder<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
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
        ? getGetApiV3RateLimitOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rateLimit.order.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.rateLimit.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3MyPreventedMatchesKey(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
) {
  return ['api', '/api/v3/myPreventedMatches', args] as const
}

export function useGetApiV3MyPreventedMatches<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
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
        ? getGetApiV3MyPreventedMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myPreventedMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3MyPreventedMatches<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
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
        ? getGetApiV3MyPreventedMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myPreventedMatches.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myPreventedMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3MyAllocationsKey(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
) {
  return ['api', '/api/v3/myAllocations', args] as const
}

export function useGetApiV3MyAllocations<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
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
        ? getGetApiV3MyAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myAllocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3MyAllocations<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
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
        ? getGetApiV3MyAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.myAllocations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.myAllocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountCommissionKey(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
) {
  return ['api', '/api/v3/account/commission', args] as const
}

export function useGetApiV3AccountCommission<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
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
        ? getGetApiV3AccountCommissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.account.commission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountCommission<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
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
        ? getGetApiV3AccountCommissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.account.commission.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.account.commission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginBorrowRepayKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/borrow-repay', args] as const
}

export function useGetSapiV1MarginBorrowRepay<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
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
        ? getGetSapiV1MarginBorrowRepayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['borrow-repay'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginBorrowRepay<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
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
        ? getGetSapiV1MarginBorrowRepayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['borrow-repay'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MarginBorrowRepayKey() {
  return ['sapi', '/sapi/v1/margin/borrow-repay', 'POST'] as const
}

export function usePostSapiV1MarginBorrowRepay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginBorrowRepayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']> },
      ) => parseResponse(client.sapi.v1.margin['borrow-repay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginTransferKey(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/margin/transfer', args] as const
}

export function useGetSapiV1MarginTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
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
        ? getGetSapiV1MarginTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
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
        ? getGetSapiV1MarginTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginAllAssetsKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allAssets', args] as const
}

export function useGetSapiV1MarginAllAssets<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
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
        ? getGetSapiV1MarginAllAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allAssets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAllAssets<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
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
        ? getGetSapiV1MarginAllAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allAssets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allAssets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginAllPairsKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allPairs', args] as const
}

export function useGetSapiV1MarginAllPairs<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
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
        ? getGetSapiV1MarginAllPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allPairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAllPairs<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
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
        ? getGetSapiV1MarginAllPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allPairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allPairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginPriceIndexKey(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
) {
  return ['sapi', '/sapi/v1/margin/priceIndex', args] as const
}

export function useGetSapiV1MarginPriceIndex<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
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
        ? getGetSapiV1MarginPriceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.priceIndex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginPriceIndex<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
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
        ? getGetSapiV1MarginPriceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.priceIndex.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.priceIndex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginOrderKey(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
) {
  return ['sapi', '/sapi/v1/margin/order', args] as const
}

export function useGetSapiV1MarginOrder<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
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
        ? getGetSapiV1MarginOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginOrder<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
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
        ? getGetSapiV1MarginOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MarginOrderKey() {
  return ['sapi', '/sapi/v1/margin/order', 'POST'] as const
}

export function usePostSapiV1MarginOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.order.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.order.$post> },
      ) => parseResponse(client.sapi.v1.margin.order.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1MarginOrderKey() {
  return ['sapi', '/sapi/v1/margin/order', 'DELETE'] as const
}

export function useDeleteSapiV1MarginOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.order.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1MarginOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.order.$delete> },
      ) => parseResponse(client.sapi.v1.margin.order.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginInterestHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
) {
  return ['sapi', '/sapi/v1/margin/interestHistory', args] as const
}

export function useGetSapiV1MarginInterestHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
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
        ? getGetSapiV1MarginInterestHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.interestHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginInterestHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
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
        ? getGetSapiV1MarginInterestHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.interestHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginForceLiquidationRecKey(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
) {
  return ['sapi', '/sapi/v1/margin/forceLiquidationRec', args] as const
}

export function useGetSapiV1MarginForceLiquidationRec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
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
        ? getGetSapiV1MarginForceLiquidationRecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.forceLiquidationRec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginForceLiquidationRec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
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
        ? getGetSapiV1MarginForceLiquidationRecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.forceLiquidationRec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginAccountKey(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
) {
  return ['sapi', '/sapi/v1/margin/account', args] as const
}

export function useGetSapiV1MarginAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
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
        ? getGetSapiV1MarginAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
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
        ? getGetSapiV1MarginAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginOpenOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/margin/openOrders', args] as const
}

export function useGetSapiV1MarginOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
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
        ? getGetSapiV1MarginOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
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
        ? getGetSapiV1MarginOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSapiV1MarginOpenOrdersKey() {
  return ['sapi', '/sapi/v1/margin/openOrders', 'DELETE'] as const
}

export function useDeleteSapiV1MarginOpenOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrders.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1MarginOpenOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete> },
      ) => parseResponse(client.sapi.v1.margin.openOrders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginAllOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allOrders', args] as const
}

export function useGetSapiV1MarginAllOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
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
        ? getGetSapiV1MarginAllOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAllOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
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
        ? getGetSapiV1MarginAllOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MarginOrderOcoKey() {
  return ['sapi', '/sapi/v1/margin/order/oco', 'POST'] as const
}

export function usePostSapiV1MarginOrderOco<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oco.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginOrderOcoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.order.oco.$post> },
      ) => parseResponse(client.sapi.v1.margin.order.oco.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginOrderListKey(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/orderList', args] as const
}

export function useGetSapiV1MarginOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
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
        ? getGetSapiV1MarginOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.orderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
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
        ? getGetSapiV1MarginOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.orderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSapiV1MarginOrderListKey() {
  return ['sapi', '/sapi/v1/margin/orderList', 'DELETE'] as const
}

export function useDeleteSapiV1MarginOrderList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.orderList.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.orderList.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1MarginOrderListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.orderList.$delete> },
      ) => parseResponse(client.sapi.v1.margin.orderList.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginAllOrderListKey(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/allOrderList', args] as const
}

export function useGetSapiV1MarginAllOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
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
        ? getGetSapiV1MarginAllOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAllOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
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
        ? getGetSapiV1MarginAllOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.allOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.allOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginOpenOrderListKey(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
) {
  return ['sapi', '/sapi/v1/margin/openOrderList', args] as const
}

export function useGetSapiV1MarginOpenOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
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
        ? getGetSapiV1MarginOpenOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.openOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginOpenOrderList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
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
        ? getGetSapiV1MarginOpenOrderListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.openOrderList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.openOrderList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginMyTradesKey(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
) {
  return ['sapi', '/sapi/v1/margin/myTrades', args] as const
}

export function useGetSapiV1MarginMyTrades<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
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
        ? getGetSapiV1MarginMyTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.myTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginMyTrades<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
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
        ? getGetSapiV1MarginMyTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.myTrades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.myTrades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginMaxBorrowableKey(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
) {
  return ['sapi', '/sapi/v1/margin/maxBorrowable', args] as const
}

export function useGetSapiV1MarginMaxBorrowable<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
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
        ? getGetSapiV1MarginMaxBorrowableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.maxBorrowable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginMaxBorrowable<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
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
        ? getGetSapiV1MarginMaxBorrowableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.maxBorrowable.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.maxBorrowable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginMaxTransferableKey(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
) {
  return ['sapi', '/sapi/v1/margin/maxTransferable', args] as const
}

export function useGetSapiV1MarginMaxTransferable<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
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
        ? getGetSapiV1MarginMaxTransferableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.maxTransferable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginMaxTransferable<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
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
        ? getGetSapiV1MarginMaxTransferableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.maxTransferable.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.maxTransferable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginTradeCoeffKey(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
) {
  return ['sapi', '/sapi/v1/margin/tradeCoeff', args] as const
}

export function useGetSapiV1MarginTradeCoeff<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
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
        ? getGetSapiV1MarginTradeCoeffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.tradeCoeff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginTradeCoeff<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
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
        ? getGetSapiV1MarginTradeCoeffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.tradeCoeff.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.tradeCoeff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginIsolatedAccountKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/account', args] as const
}

export function useGetSapiV1MarginIsolatedAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
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
        ? getGetSapiV1MarginIsolatedAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolated.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginIsolatedAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
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
        ? getGetSapiV1MarginIsolatedAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolated.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MarginIsolatedAccountKey() {
  return ['sapi', '/sapi/v1/margin/isolated/account', 'POST'] as const
}

export function usePostSapiV1MarginIsolatedAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginIsolatedAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post> },
      ) => parseResponse(client.sapi.v1.margin.isolated.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1MarginIsolatedAccountKey() {
  return ['sapi', '/sapi/v1/margin/isolated/account', 'DELETE'] as const
}

export function useDeleteSapiV1MarginIsolatedAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.account.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1MarginIsolatedAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete> },
      ) => parseResponse(client.sapi.v1.margin.isolated.account.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginIsolatedAccountLimitKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/accountLimit', args] as const
}

export function useGetSapiV1MarginIsolatedAccountLimit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
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
        ? getGetSapiV1MarginIsolatedAccountLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.isolated.accountLimit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginIsolatedAccountLimit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
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
        ? getGetSapiV1MarginIsolatedAccountLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.isolated.accountLimit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginIsolatedAllPairsKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolated/allPairs', args] as const
}

export function useGetSapiV1MarginIsolatedAllPairs<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
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
        ? getGetSapiV1MarginIsolatedAllPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolated.allPairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginIsolatedAllPairs<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
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
        ? getGetSapiV1MarginIsolatedAllPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolated.allPairs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolated.allPairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1BnbBurnKey(args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>) {
  return ['sapi', '/sapi/v1/bnbBurn', args] as const
}

export function useGetSapiV1BnbBurn<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSapiV1BnbBurnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.bnbBurn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1BnbBurn<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSapiV1BnbBurnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.bnbBurn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1BnbBurnKey() {
  return ['sapi', '/sapi/v1/bnbBurn', 'POST'] as const
}

export function usePostSapiV1BnbBurn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.bnbBurn.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.bnbBurn.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1BnbBurnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sapi.v1.bnbBurn.$post> }) =>
        parseResponse(client.sapi.v1.bnbBurn.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginInterestRateHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
) {
  return ['sapi', '/sapi/v1/margin/interestRateHistory', args] as const
}

export function useGetSapiV1MarginInterestRateHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
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
        ? getGetSapiV1MarginInterestRateHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.interestRateHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginInterestRateHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
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
        ? getGetSapiV1MarginInterestRateHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.interestRateHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.interestRateHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginCrossMarginDataKey(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
) {
  return ['sapi', '/sapi/v1/margin/crossMarginData', args] as const
}

export function useGetSapiV1MarginCrossMarginData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
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
        ? getGetSapiV1MarginCrossMarginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.crossMarginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginCrossMarginData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
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
        ? getGetSapiV1MarginCrossMarginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.crossMarginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginIsolatedMarginDataKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginData', args] as const
}

export function useGetSapiV1MarginIsolatedMarginData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
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
        ? getGetSapiV1MarginIsolatedMarginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolatedMarginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginIsolatedMarginData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
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
        ? getGetSapiV1MarginIsolatedMarginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolatedMarginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginIsolatedMarginTierKey(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
) {
  return ['sapi', '/sapi/v1/margin/isolatedMarginTier', args] as const
}

export function useGetSapiV1MarginIsolatedMarginTier<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
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
        ? getGetSapiV1MarginIsolatedMarginTierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolatedMarginTier.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginIsolatedMarginTier<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
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
        ? getGetSapiV1MarginIsolatedMarginTierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.isolatedMarginTier.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginRateLimitOrderKey(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
) {
  return ['sapi', '/sapi/v1/margin/rateLimit/order', args] as const
}

export function useGetSapiV1MarginRateLimitOrder<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
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
        ? getGetSapiV1MarginRateLimitOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.rateLimit.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginRateLimitOrder<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
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
        ? getGetSapiV1MarginRateLimitOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.rateLimit.order.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin.rateLimit.order.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginCrossMarginCollateralRatioKey() {
  return ['sapi', '/sapi/v1/margin/crossMarginCollateralRatio'] as const
}

export function useGetSapiV1MarginCrossMarginCollateralRatio<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
        >
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
        ? getGetSapiV1MarginCrossMarginCollateralRatioKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginCrossMarginCollateralRatio<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
        >
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
        ? getGetSapiV1MarginCrossMarginCollateralRatioKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.crossMarginCollateralRatio.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginExchangeSmallLiabilityKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability', args] as const
}

export function useGetSapiV1MarginExchangeSmallLiability<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
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
        ? getGetSapiV1MarginExchangeSmallLiabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['exchange-small-liability'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginExchangeSmallLiability<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
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
        ? getGetSapiV1MarginExchangeSmallLiabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['exchange-small-liability'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginExchangeSmallLiabilityHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/margin/exchange-small-liability-history', args] as const
}

export function useGetSapiV1MarginExchangeSmallLiabilityHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
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
        ? getGetSapiV1MarginExchangeSmallLiabilityHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.margin['exchange-small-liability-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginExchangeSmallLiabilityHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
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
        ? getGetSapiV1MarginExchangeSmallLiabilityHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.margin['exchange-small-liability-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginNextHourlyInterestRateKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/next-hourly-interest-rate', args] as const
}

export function useGetSapiV1MarginNextHourlyInterestRate<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
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
        ? getGetSapiV1MarginNextHourlyInterestRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['next-hourly-interest-rate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginNextHourlyInterestRate<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
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
        ? getGetSapiV1MarginNextHourlyInterestRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['next-hourly-interest-rate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginCapitalFlowKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/capital-flow', args] as const
}

export function useGetSapiV1MarginCapitalFlow<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
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
        ? getGetSapiV1MarginCapitalFlowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['capital-flow'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginCapitalFlow<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
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
        ? getGetSapiV1MarginCapitalFlowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['capital-flow'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginDelistScheduleKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/delist-schedule', args] as const
}

export function useGetSapiV1MarginDelistSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
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
        ? getGetSapiV1MarginDelistScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['delist-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginDelistSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
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
        ? getGetSapiV1MarginDelistScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.margin['delist-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MarginAvailableInventoryKey(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
) {
  return ['sapi', '/sapi/v1/margin/available-inventory', args] as const
}

export function useGetSapiV1MarginAvailableInventory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
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
        ? getGetSapiV1MarginAvailableInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['available-inventory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginAvailableInventory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
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
        ? getGetSapiV1MarginAvailableInventoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin['available-inventory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MarginManualLiquidationKey() {
  return ['sapi', '/sapi/v1/margin/manual-liquidation', 'POST'] as const
}

export function usePostSapiV1MarginManualLiquidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginManualLiquidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']> },
      ) => parseResponse(client.sapi.v1.margin['manual-liquidation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1MarginOrderOtoKey() {
  return ['sapi', '/sapi/v1/margin/order/oto', 'POST'] as const
}

export function usePostSapiV1MarginOrderOto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.oto.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginOrderOtoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.order.oto.$post> },
      ) => parseResponse(client.sapi.v1.margin.order.oto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1MarginOrderOtocoKey() {
  return ['sapi', '/sapi/v1/margin/order/otoco', 'POST'] as const
}

export function usePostSapiV1MarginOrderOtoco<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.order.otoco.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginOrderOtocoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post> },
      ) => parseResponse(client.sapi.v1.margin.order.otoco.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1MarginMaxLeverageKey() {
  return ['sapi', '/sapi/v1/margin/max-leverage', 'POST'] as const
}

export function usePostSapiV1MarginMaxLeverage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MarginMaxLeverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']> },
      ) => parseResponse(client.sapi.v1.margin['max-leverage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MarginLeverageBracketKey() {
  return ['sapi', '/sapi/v1/margin/leverageBracket'] as const
}

export function useGetSapiV1MarginLeverageBracket<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
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
        ? getGetSapiV1MarginLeverageBracketKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.leverageBracket.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MarginLeverageBracket<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>>
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
        ? getGetSapiV1MarginLeverageBracketKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.margin.leverageBracket.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.margin.leverageBracket.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SystemStatusKey() {
  return ['sapi', '/sapi/v1/system/status'] as const
}

export function useGetSapiV1SystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSapiV1SystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSapiV1SystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.system.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalConfigGetallKey(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
) {
  return ['sapi', '/sapi/v1/capital/config/getall', args] as const
}

export function useGetSapiV1CapitalConfigGetall<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
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
        ? getGetSapiV1CapitalConfigGetallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.config.getall.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalConfigGetall<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
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
        ? getGetSapiV1CapitalConfigGetallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.config.getall.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.config.getall.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AccountSnapshotKey(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
) {
  return ['sapi', '/sapi/v1/accountSnapshot', args] as const
}

export function useGetSapiV1AccountSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
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
        ? getGetSapiV1AccountSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.accountSnapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AccountSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
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
        ? getGetSapiV1AccountSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.accountSnapshot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.accountSnapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1AccountDisableFastWithdrawSwitchKey() {
  return ['sapi', '/sapi/v1/account/disableFastWithdrawSwitch', 'POST'] as const
}

export function usePostSapiV1AccountDisableFastWithdrawSwitch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AccountDisableFastWithdrawSwitchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post> },
      ) =>
        parseResponse(client.sapi.v1.account.disableFastWithdrawSwitch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1AccountEnableFastWithdrawSwitchKey() {
  return ['sapi', '/sapi/v1/account/enableFastWithdrawSwitch', 'POST'] as const
}

export function usePostSapiV1AccountEnableFastWithdrawSwitch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AccountEnableFastWithdrawSwitchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post> },
      ) => parseResponse(client.sapi.v1.account.enableFastWithdrawSwitch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1CapitalWithdrawApplyKey() {
  return ['sapi', '/sapi/v1/capital/withdraw/apply', 'POST'] as const
}

export function usePostSapiV1CapitalWithdrawApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.apply.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1CapitalWithdrawApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post> },
      ) => parseResponse(client.sapi.v1.capital.withdraw.apply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1CapitalDepositHisrecKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/hisrec', args] as const
}

export function useGetSapiV1CapitalDepositHisrec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
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
        ? getGetSapiV1CapitalDepositHisrecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.hisrec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalDepositHisrec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
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
        ? getGetSapiV1CapitalDepositHisrecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.hisrec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.hisrec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalWithdrawHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
) {
  return ['sapi', '/sapi/v1/capital/withdraw/history', args] as const
}

export function useGetSapiV1CapitalWithdrawHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
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
        ? getGetSapiV1CapitalWithdrawHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.withdraw.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalWithdrawHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
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
        ? getGetSapiV1CapitalWithdrawHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.withdraw.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalDepositAddressKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address', args] as const
}

export function useGetSapiV1CapitalDepositAddress<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
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
        ? getGetSapiV1CapitalDepositAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalDepositAddress<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
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
        ? getGetSapiV1CapitalDepositAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AccountStatusKey(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
) {
  return ['sapi', '/sapi/v1/account/status', args] as const
}

export function useGetSapiV1AccountStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
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
        ? getGetSapiV1AccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AccountStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
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
        ? getGetSapiV1AccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AccountApiTradingStatusKey(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
) {
  return ['sapi', '/sapi/v1/account/apiTradingStatus', args] as const
}

export function useGetSapiV1AccountApiTradingStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
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
        ? getGetSapiV1AccountApiTradingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.apiTradingStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AccountApiTradingStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
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
        ? getGetSapiV1AccountApiTradingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiTradingStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.apiTradingStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetDribbletKey(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
) {
  return ['sapi', '/sapi/v1/asset/dribblet', args] as const
}

export function useGetSapiV1AssetDribblet<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
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
        ? getGetSapiV1AssetDribbletKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.dribblet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetDribblet<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
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
        ? getGetSapiV1AssetDribbletKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dribblet.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.dribblet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1AssetDustBtcKey() {
  return ['sapi', '/sapi/v1/asset/dust-btc', 'POST'] as const
}

export function usePostSapiV1AssetDustBtc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AssetDustBtcKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']> },
      ) => parseResponse(client.sapi.v1.asset['dust-btc'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1AssetDustKey() {
  return ['sapi', '/sapi/v1/asset/dust', 'POST'] as const
}

export function usePostSapiV1AssetDust<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.dust.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.asset.dust.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AssetDustKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sapi.v1.asset.dust.$post> }) =>
        parseResponse(client.sapi.v1.asset.dust.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1AssetAssetDividendKey(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
) {
  return ['sapi', '/sapi/v1/asset/assetDividend', args] as const
}

export function useGetSapiV1AssetAssetDividend<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
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
        ? getGetSapiV1AssetAssetDividendKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.assetDividend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetAssetDividend<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
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
        ? getGetSapiV1AssetAssetDividendKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDividend.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.assetDividend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetAssetDetailKey(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
) {
  return ['sapi', '/sapi/v1/asset/assetDetail', args] as const
}

export function useGetSapiV1AssetAssetDetail<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
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
        ? getGetSapiV1AssetAssetDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.assetDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetAssetDetail<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
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
        ? getGetSapiV1AssetAssetDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.assetDetail.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.assetDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetTradeFeeKey(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
) {
  return ['sapi', '/sapi/v1/asset/tradeFee', args] as const
}

export function useGetSapiV1AssetTradeFee<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
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
        ? getGetSapiV1AssetTradeFeeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.tradeFee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetTradeFee<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
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
        ? getGetSapiV1AssetTradeFeeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.tradeFee.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.tradeFee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetTransferKey(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/asset/transfer', args] as const
}

export function useGetSapiV1AssetTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
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
        ? getGetSapiV1AssetTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
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
        ? getGetSapiV1AssetTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1AssetTransferKey() {
  return ['sapi', '/sapi/v1/asset/transfer', 'POST'] as const
}

export function usePostSapiV1AssetTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.transfer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.asset.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AssetTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.asset.transfer.$post> },
      ) => parseResponse(client.sapi.v1.asset.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1AssetGetFundingAssetKey() {
  return ['sapi', '/sapi/v1/asset/get-funding-asset', 'POST'] as const
}

export function usePostSapiV1AssetGetFundingAsset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AssetGetFundingAssetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']> },
      ) => parseResponse(client.sapi.v1.asset['get-funding-asset'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV3AssetGetUserAssetKey() {
  return ['sapi', '/sapi/v3/asset/getUserAsset', 'POST'] as const
}

export function usePostSapiV3AssetGetUserAsset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v3.asset.getUserAsset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV3AssetGetUserAssetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post> },
      ) => parseResponse(client.sapi.v3.asset.getUserAsset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1AssetConvertTransferKey() {
  return ['sapi', '/sapi/v1/asset/convert-transfer', 'POST'] as const
}

export function usePostSapiV1AssetConvertTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AssetConvertTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']> },
      ) => parseResponse(client.sapi.v1.asset['convert-transfer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1AssetConvertTransferQueryByPageKey(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
) {
  return ['sapi', '/sapi/v1/asset/convert-transfer/queryByPage', args] as const
}

export function useGetSapiV1AssetConvertTransferQueryByPage<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
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
        ? getGetSapiV1AssetConvertTransferQueryByPageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.asset['convert-transfer'].queryByPage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetConvertTransferQueryByPage<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
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
        ? getGetSapiV1AssetConvertTransferQueryByPageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.asset['convert-transfer'].queryByPage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetLedgerTransferCloudMiningQueryByPageKey(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage', args] as const
}

export function useGetSapiV1AssetLedgerTransferCloudMiningQueryByPage<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1AssetLedgerTransferCloudMiningQueryByPageKey(args)
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
                (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
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
          client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetLedgerTransferCloudMiningQueryByPage<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1AssetLedgerTransferCloudMiningQueryByPageKey(args)
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
                (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
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
          client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AccountApiRestrictionsKey(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
) {
  return ['sapi', '/sapi/v1/account/apiRestrictions', args] as const
}

export function useGetSapiV1AccountApiRestrictions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
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
        ? getGetSapiV1AccountApiRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.apiRestrictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AccountApiRestrictions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
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
        ? getGetSapiV1AccountApiRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.account.apiRestrictions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.apiRestrictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalContractConvertibleCoinsKey() {
  return ['sapi', '/sapi/v1/capital/contract/convertible-coins'] as const
}

export function useGetSapiV1CapitalContractConvertibleCoins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
        >
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
        ? getGetSapiV1CapitalContractConvertibleCoinsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalContractConvertibleCoins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>>
        >
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
        ? getGetSapiV1CapitalContractConvertibleCoinsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1CapitalContractConvertibleCoinsKey() {
  return ['sapi', '/sapi/v1/capital/contract/convertible-coins', 'POST'] as const
}

export function usePostSapiV1CapitalContractConvertibleCoins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1CapitalContractConvertibleCoinsKey()
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
            (typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1.capital.contract['convertible-coins'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SubAccountVirtualSubAccountKey() {
  return ['sapi', '/sapi/v1/sub-account/virtualSubAccount', 'POST'] as const
}

export function usePostSapiV1SubAccountVirtualSubAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountVirtualSubAccountKey()
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
            (typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].virtualSubAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SubAccountListKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/list', args] as const
}

export function useGetSapiV1SubAccountList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
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
        ? getGetSapiV1SubAccountListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['sub-account'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
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
        ? getGetSapiV1SubAccountListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['sub-account'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountSubTransferHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/sub/transfer/history', args] as const
}

export function useGetSapiV1SubAccountSubTransferHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountSubTransferHistoryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].sub.transfer.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountSubTransferHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountSubTransferHistoryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].sub.transfer.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountFuturesInternalTransferKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/internalTransfer', args] as const
}

export function useGetSapiV1SubAccountFuturesInternalTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountFuturesInternalTransferKey(args)
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
                (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
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
          client.sapi.v1['sub-account'].futures.internalTransfer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountFuturesInternalTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountFuturesInternalTransferKey(args)
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
                (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
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
          client.sapi.v1['sub-account'].futures.internalTransfer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountFuturesInternalTransferKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/internalTransfer', 'POST'] as const
}

export function usePostSapiV1SubAccountFuturesInternalTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountFuturesInternalTransferKey()
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
            (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1['sub-account'].futures.internalTransfer.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV3SubAccountAssetsKey(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
) {
  return ['sapi', '/sapi/v3/sub-account/assets', args] as const
}

export function useGetSapiV3SubAccountAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
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
        ? getGetSapiV3SubAccountAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v3['sub-account'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV3SubAccountAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
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
        ? getGetSapiV3SubAccountAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v3['sub-account'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountSpotSummaryKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/spotSummary', args] as const
}

export function useGetSapiV1SubAccountSpotSummary<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
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
        ? getGetSapiV1SubAccountSpotSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].spotSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountSpotSummary<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
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
        ? getGetSapiV1SubAccountSpotSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].spotSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalDepositSubAddressKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subAddress', args] as const
}

export function useGetSapiV1CapitalDepositSubAddress<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
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
        ? getGetSapiV1CapitalDepositSubAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.deposit.subAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalDepositSubAddress<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
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
        ? getGetSapiV1CapitalDepositSubAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subAddress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.deposit.subAddress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalDepositSubHisrecKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/subHisrec', args] as const
}

export function useGetSapiV1CapitalDepositSubHisrec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
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
        ? getGetSapiV1CapitalDepositSubHisrecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.subHisrec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalDepositSubHisrec<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
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
        ? getGetSapiV1CapitalDepositSubHisrecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.capital.deposit.subHisrec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1CapitalDepositCreditApplyKey() {
  return ['sapi', '/sapi/v1/capital/deposit/credit-apply', 'POST'] as const
}

export function usePostSapiV1CapitalDepositCreditApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1CapitalDepositCreditApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>
        },
      ) => parseResponse(client.sapi.v1.capital.deposit['credit-apply'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1AssetWalletBalanceKey(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
) {
  return ['sapi', '/sapi/v1/asset/wallet/balance', args] as const
}

export function useGetSapiV1AssetWalletBalance<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
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
        ? getGetSapiV1AssetWalletBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.wallet.balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetWalletBalance<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
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
        ? getGetSapiV1AssetWalletBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.asset.wallet.balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.asset.wallet.balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AssetCustodyTransferHistoryKey(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
) {
  return ['sapi', '/sapi/v1/asset/custody/transfer-history', args] as const
}

export function useGetSapiV1AssetCustodyTransferHistory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
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
        ? getGetSapiV1AssetCustodyTransferHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.asset.custody['transfer-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AssetCustodyTransferHistory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
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
        ? getGetSapiV1AssetCustodyTransferHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.asset.custody['transfer-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalDepositAddressListKey(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
) {
  return ['sapi', '/sapi/v1/capital/deposit/address/list', args] as const
}

export function useGetSapiV1CapitalDepositAddressList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
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
        ? getGetSapiV1CapitalDepositAddressListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.deposit.address.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalDepositAddressList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
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
        ? getGetSapiV1CapitalDepositAddressListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.deposit.address.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.deposit.address.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SpotDelistScheduleKey(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
) {
  return ['sapi', '/sapi/v1/spot/delist-schedule', args] as const
}

export function useGetSapiV1SpotDelistSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
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
        ? getGetSapiV1SpotDelistScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.spot['delist-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SpotDelistSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
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
        ? getGetSapiV1SpotDelistScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.spot['delist-schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CapitalWithdrawAddressListKey() {
  return ['sapi', '/sapi/v1/capital/withdraw/address/list'] as const
}

export function useGetSapiV1CapitalWithdrawAddressList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
        >
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
        ? getGetSapiV1CapitalWithdrawAddressListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.withdraw.address.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CapitalWithdrawAddressList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
        >
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
        ? getGetSapiV1CapitalWithdrawAddressListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.capital.withdraw.address.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.capital.withdraw.address.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AccountInfoKey(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
) {
  return ['sapi', '/sapi/v1/account/info', args] as const
}

export function useGetSapiV1AccountInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
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
        ? getGetSapiV1AccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AccountInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
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
        ? getGetSapiV1AccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.account.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.account.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountStatusKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/status', args] as const
}

export function useGetSapiV1SubAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
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
        ? getGetSapiV1SubAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['sub-account'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
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
        ? getGetSapiV1SubAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['sub-account'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountMarginEnableKey() {
  return ['sapi', '/sapi/v1/sub-account/margin/enable', 'POST'] as const
}

export function usePostSapiV1SubAccountMarginEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountMarginEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>
        },
      ) => parseResponse(client.sapi.v1['sub-account'].margin.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SubAccountMarginAccountKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/account', args] as const
}

export function useGetSapiV1SubAccountMarginAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
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
        ? getGetSapiV1SubAccountMarginAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].margin.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountMarginAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
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
        ? getGetSapiV1SubAccountMarginAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].margin.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountMarginAccountSummaryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/margin/accountSummary', args] as const
}

export function useGetSapiV1SubAccountMarginAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
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
        ? getGetSapiV1SubAccountMarginAccountSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['sub-account'].margin.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountMarginAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
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
        ? getGetSapiV1SubAccountMarginAccountSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['sub-account'].margin.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountFuturesEnableKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/enable', 'POST'] as const
}

export function usePostSapiV1SubAccountFuturesEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountFuturesEnableKey()
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
            (typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].futures.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SubAccountFuturesAccountKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/account', args] as const
}

export function useGetSapiV1SubAccountFuturesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
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
        ? getGetSapiV1SubAccountFuturesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].futures.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountFuturesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
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
        ? getGetSapiV1SubAccountFuturesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].futures.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountFuturesAccountSummaryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/accountSummary', args] as const
}

export function useGetSapiV1SubAccountFuturesAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountFuturesAccountSummaryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
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
          client.sapi.v1['sub-account'].futures.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountFuturesAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountFuturesAccountSummaryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
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
          client.sapi.v1['sub-account'].futures.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountFuturesPositionRiskKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/futures/positionRisk', args] as const
}

export function useGetSapiV1SubAccountFuturesPositionRisk<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
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
        ? getGetSapiV1SubAccountFuturesPositionRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].futures.positionRisk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountFuturesPositionRisk<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
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
        ? getGetSapiV1SubAccountFuturesPositionRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].futures.positionRisk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountFuturesTransferKey() {
  return ['sapi', '/sapi/v1/sub-account/futures/transfer', 'POST'] as const
}

export function usePostSapiV1SubAccountFuturesTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountFuturesTransferKey()
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
            (typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].futures.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SubAccountMarginTransferKey() {
  return ['sapi', '/sapi/v1/sub-account/margin/transfer', 'POST'] as const
}

export function usePostSapiV1SubAccountMarginTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountMarginTransferKey()
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
            (typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].margin.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SubAccountTransferSubToSubKey() {
  return ['sapi', '/sapi/v1/sub-account/transfer/subToSub', 'POST'] as const
}

export function usePostSapiV1SubAccountTransferSubToSub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountTransferSubToSubKey()
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
            (typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].transfer.subToSub.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SubAccountTransferSubToMasterKey() {
  return ['sapi', '/sapi/v1/sub-account/transfer/subToMaster', 'POST'] as const
}

export function usePostSapiV1SubAccountTransferSubToMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountTransferSubToMasterKey()
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
            (typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']
          >
        },
      ) =>
        parseResponse(client.sapi.v1['sub-account'].transfer.subToMaster.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SubAccountTransferSubUserHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/transfer/subUserHistory', args] as const
}

export function useGetSapiV1SubAccountTransferSubUserHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountTransferSubUserHistoryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
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
          client.sapi.v1['sub-account'].transfer.subUserHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountTransferSubUserHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountTransferSubUserHistoryKey(args)
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
                (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
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
          client.sapi.v1['sub-account'].transfer.subUserHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountUniversalTransferKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/universalTransfer', args] as const
}

export function useGetSapiV1SubAccountUniversalTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
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
        ? getGetSapiV1SubAccountUniversalTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].universalTransfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountUniversalTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
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
        ? getGetSapiV1SubAccountUniversalTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['sub-account'].universalTransfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountUniversalTransferKey() {
  return ['sapi', '/sapi/v1/sub-account/universalTransfer', 'POST'] as const
}

export function usePostSapiV1SubAccountUniversalTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountUniversalTransferKey()
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
            (typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].universalTransfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV2SubAccountFuturesAccountKey(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/account', args] as const
}

export function useGetSapiV2SubAccountFuturesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
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
        ? getGetSapiV2SubAccountFuturesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2['sub-account'].futures.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2SubAccountFuturesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
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
        ? getGetSapiV2SubAccountFuturesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2['sub-account'].futures.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2SubAccountFuturesAccountSummaryKey(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/accountSummary', args] as const
}

export function useGetSapiV2SubAccountFuturesAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV2SubAccountFuturesAccountSummaryKey(args)
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
                (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
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
          client.sapi.v2['sub-account'].futures.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2SubAccountFuturesAccountSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV2SubAccountFuturesAccountSummaryKey(args)
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
                (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
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
          client.sapi.v2['sub-account'].futures.accountSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2SubAccountFuturesPositionRiskKey(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
) {
  return ['sapi', '/sapi/v2/sub-account/futures/positionRisk', args] as const
}

export function useGetSapiV2SubAccountFuturesPositionRisk<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
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
        ? getGetSapiV2SubAccountFuturesPositionRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2['sub-account'].futures.positionRisk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2SubAccountFuturesPositionRisk<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
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
        ? getGetSapiV2SubAccountFuturesPositionRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2['sub-account'].futures.positionRisk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountBlvtEnableKey() {
  return ['sapi', '/sapi/v1/sub-account/blvt/enable', 'POST'] as const
}

export function usePostSapiV1SubAccountBlvtEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountBlvtEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>
        },
      ) => parseResponse(client.sapi.v1['sub-account'].blvt.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1ManagedSubaccountDepositKey() {
  return ['sapi', '/sapi/v1/managed-subaccount/deposit', 'POST'] as const
}

export function usePostSapiV1ManagedSubaccountDeposit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ManagedSubaccountDepositKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>
        },
      ) => parseResponse(client.sapi.v1['managed-subaccount'].deposit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountAssetKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/asset', args] as const
}

export function useGetSapiV1ManagedSubaccountAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
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
        ? getGetSapiV1ManagedSubaccountAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
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
        ? getGetSapiV1ManagedSubaccountAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1ManagedSubaccountWithdrawKey() {
  return ['sapi', '/sapi/v1/managed-subaccount/withdraw', 'POST'] as const
}

export function usePostSapiV1ManagedSubaccountWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ManagedSubaccountWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>
        },
      ) => parseResponse(client.sapi.v1['managed-subaccount'].withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountAccountSnapshotKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/accountSnapshot', args] as const
}

export function useGetSapiV1ManagedSubaccountAccountSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
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
        ? getGetSapiV1ManagedSubaccountAccountSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['managed-subaccount'].accountSnapshot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountAccountSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
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
        ? getGetSapiV1ManagedSubaccountAccountSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['managed-subaccount'].accountSnapshot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountQueryTransLogForInvestorKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForInvestor', args] as const
}

export function useGetSapiV1ManagedSubaccountQueryTransLogForInvestor<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogForInvestorKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
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
          client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountQueryTransLogForInvestor<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogForInvestorKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
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
          client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountQueryTransLogForTradeParentKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/queryTransLogForTradeParent', args] as const
}

export function useGetSapiV1ManagedSubaccountQueryTransLogForTradeParent<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogForTradeParentKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
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
          client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountQueryTransLogForTradeParent<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogForTradeParentKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
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
          client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountFetchFutureAssetKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/fetch-future-asset', args] as const
}

export function useGetSapiV1ManagedSubaccountFetchFutureAsset<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountFetchFutureAssetKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
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
          client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountFetchFutureAsset<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountFetchFutureAssetKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
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
          client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountMarginAssetKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/marginAsset', args] as const
}

export function useGetSapiV1ManagedSubaccountMarginAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
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
        ? getGetSapiV1ManagedSubaccountMarginAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].marginAsset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountMarginAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
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
        ? getGetSapiV1ManagedSubaccountMarginAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].marginAsset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountInfoKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/info', args] as const
}

export function useGetSapiV1ManagedSubaccountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
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
        ? getGetSapiV1ManagedSubaccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
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
        ? getGetSapiV1ManagedSubaccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['managed-subaccount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountDepositAddressKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/deposit/address', args] as const
}

export function useGetSapiV1ManagedSubaccountDepositAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountDepositAddressKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
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
          client.sapi.v1['managed-subaccount'].deposit.address.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountDepositAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1ManagedSubaccountDepositAddressKey(args)
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
                (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
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
          client.sapi.v1['managed-subaccount'].deposit.address.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ManagedSubaccountQueryTransLogKey(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
) {
  return ['sapi', '/sapi/v1/managed-subaccount/query-trans-log', args] as const
}

export function useGetSapiV1ManagedSubaccountQueryTransLog<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['managed-subaccount']['query-trans-log'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ManagedSubaccountQueryTransLog<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
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
        ? getGetSapiV1ManagedSubaccountQueryTransLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['managed-subaccount']['query-trans-log'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SubAccountSubAccountApiIpRestrictionKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/sub-account/subAccountApi/ipRestriction', args] as const
}

export function useGetSapiV1SubAccountSubAccountApiIpRestriction<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountSubAccountApiIpRestrictionKey(args)
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
                (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
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
          client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountSubAccountApiIpRestriction<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SubAccountSubAccountApiIpRestrictionKey(args)
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
                (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
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
          client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListKey() {
  return ['sapi', '/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList', 'DELETE'] as const
}

export function useDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1SubAccountSubAccountApiIpRestrictionIpListKey()
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
            (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1['sub-account'].subAccountApi.ipRestriction.ipList.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SubAccountTransactionStatisticsKey(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
) {
  return ['sapi', '/sapi/v1/sub-account/transaction-statistics', args] as const
}

export function useGetSapiV1SubAccountTransactionStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
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
        ? getGetSapiV1SubAccountTransactionStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['sub-account']['transaction-statistics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SubAccountTransactionStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
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
        ? getGetSapiV1SubAccountTransactionStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1['sub-account']['transaction-statistics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SubAccountEoptionsEnableKey() {
  return ['sapi', '/sapi/v1/sub-account/eoptions/enable', 'POST'] as const
}

export function usePostSapiV1SubAccountEoptionsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SubAccountEoptionsEnableKey()
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
            (typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['sub-account'].eoptions.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV2SubAccountSubAccountApiIpRestrictionKey() {
  return ['sapi', '/sapi/v2/sub-account/subAccountApi/ipRestriction', 'POST'] as const
}

export function usePostSapiV2SubAccountSubAccountApiIpRestriction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV2SubAccountSubAccountApiIpRestrictionKey()
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
            (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v2['sub-account'].subAccountApi.ipRestriction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV4SubAccountAssetsKey(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
) {
  return ['sapi', '/sapi/v4/sub-account/assets', args] as const
}

export function useGetSapiV4SubAccountAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
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
        ? getGetSapiV4SubAccountAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v4['sub-account'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV4SubAccountAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
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
        ? getGetSapiV4SubAccountAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v4['sub-account'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3UserDataStreamKey() {
  return ['api', '/api/v3/userDataStream', 'PUT'] as const
}

export function usePutApiV3UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.userDataStream.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.userDataStream.$put> },
      ) => parseResponse(client.api.v3.userDataStream.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3UserDataStreamKey() {
  return ['api', '/api/v3/userDataStream', 'POST'] as const
}

export function usePostApiV3UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v3.userDataStream.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3UserDataStreamKey() {
  return ['api', '/api/v3/userDataStream', 'DELETE'] as const
}

export function useDeleteApiV3UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.userDataStream.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.userDataStream.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v3.userDataStream.$delete> },
      ) => parseResponse(client.api.v3.userDataStream.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSapiV1UserDataStreamKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'PUT'] as const
}

export function usePutSapiV1UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.userDataStream.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSapiV1UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.userDataStream.$put> },
      ) => parseResponse(client.sapi.v1.userDataStream.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1UserDataStreamKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'POST'] as const
}

export function usePostSapiV1UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.sapi.v1.userDataStream.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1UserDataStreamKey() {
  return ['sapi', '/sapi/v1/userDataStream', 'DELETE'] as const
}

export function useDeleteSapiV1UserDataStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.userDataStream.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.userDataStream.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1UserDataStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.userDataStream.$delete> },
      ) => parseResponse(client.sapi.v1.userDataStream.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSapiV1UserDataStreamIsolatedKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'PUT'] as const
}

export function usePutSapiV1UserDataStreamIsolated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSapiV1UserDataStreamIsolatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put> },
      ) => parseResponse(client.sapi.v1.userDataStream.isolated.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1UserDataStreamIsolatedKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'POST'] as const
}

export function usePostSapiV1UserDataStreamIsolated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1UserDataStreamIsolatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.userDataStream.isolated.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1UserDataStreamIsolatedKey() {
  return ['sapi', '/sapi/v1/userDataStream/isolated', 'DELETE'] as const
}

export function useDeleteSapiV1UserDataStreamIsolated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.userDataStream.isolated.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1UserDataStreamIsolatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete> },
      ) => parseResponse(client.sapi.v1.userDataStream.isolated.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1FiatOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
) {
  return ['sapi', '/sapi/v1/fiat/orders', args] as const
}

export function useGetSapiV1FiatOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
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
        ? getGetSapiV1FiatOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.fiat.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1FiatOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
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
        ? getGetSapiV1FiatOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.fiat.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1FiatPaymentsKey(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
) {
  return ['sapi', '/sapi/v1/fiat/payments', args] as const
}

export function useGetSapiV1FiatPayments<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
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
        ? getGetSapiV1FiatPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.fiat.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1FiatPayments<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
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
        ? getGetSapiV1FiatPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.fiat.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.fiat.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingProjectListKey(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
) {
  return ['sapi', '/sapi/v1/lending/project/list', args] as const
}

export function useGetSapiV1LendingProjectList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
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
        ? getGetSapiV1LendingProjectListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.lending.project.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingProjectList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
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
        ? getGetSapiV1LendingProjectListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.lending.project.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.lending.project.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LendingCustomizedFixedPurchaseKey() {
  return ['sapi', '/sapi/v1/lending/customizedFixed/purchase', 'POST'] as const
}

export function usePostSapiV1LendingCustomizedFixedPurchase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingCustomizedFixedPurchaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post> },
      ) => parseResponse(client.sapi.v1.lending.customizedFixed.purchase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LendingProjectPositionListKey(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
) {
  return ['sapi', '/sapi/v1/lending/project/position/list', args] as const
}

export function useGetSapiV1LendingProjectPositionList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
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
        ? getGetSapiV1LendingProjectPositionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending.project.position.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingProjectPositionList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
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
        ? getGetSapiV1LendingProjectPositionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.lending.project.position.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending.project.position.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LendingPositionChangedKey() {
  return ['sapi', '/sapi/v1/lending/positionChanged', 'POST'] as const
}

export function usePostSapiV1LendingPositionChanged<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.lending.positionChanged.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingPositionChangedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post> },
      ) => parseResponse(client.sapi.v1.lending.positionChanged.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MiningPubAlgoListKey() {
  return ['sapi', '/sapi/v1/mining/pub/algoList'] as const
}

export function useGetSapiV1MiningPubAlgoList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
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
        ? getGetSapiV1MiningPubAlgoListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.pub.algoList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningPubAlgoList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
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
        ? getGetSapiV1MiningPubAlgoListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.algoList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.pub.algoList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningPubCoinListKey() {
  return ['sapi', '/sapi/v1/mining/pub/coinList'] as const
}

export function useGetSapiV1MiningPubCoinList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
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
        ? getGetSapiV1MiningPubCoinListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.pub.coinList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningPubCoinList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
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
        ? getGetSapiV1MiningPubCoinListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.pub.coinList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.pub.coinList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningWorkerDetailKey(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
) {
  return ['sapi', '/sapi/v1/mining/worker/detail', args] as const
}

export function useGetSapiV1MiningWorkerDetail<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
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
        ? getGetSapiV1MiningWorkerDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.worker.detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningWorkerDetail<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
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
        ? getGetSapiV1MiningWorkerDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.detail.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.worker.detail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningWorkerListKey(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/worker/list', args] as const
}

export function useGetSapiV1MiningWorkerList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
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
        ? getGetSapiV1MiningWorkerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.worker.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningWorkerList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
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
        ? getGetSapiV1MiningWorkerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.worker.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.worker.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningPaymentListKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/list', args] as const
}

export function useGetSapiV1MiningPaymentList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
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
        ? getGetSapiV1MiningPaymentListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningPaymentList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
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
        ? getGetSapiV1MiningPaymentListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningPaymentOtherKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/other', args] as const
}

export function useGetSapiV1MiningPaymentOther<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
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
        ? getGetSapiV1MiningPaymentOtherKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.other.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningPaymentOther<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
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
        ? getGetSapiV1MiningPaymentOtherKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.other.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.other.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningHashTransferConfigDetailsListKey(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config/details/list', args] as const
}

export function useGetSapiV1MiningHashTransferConfigDetailsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1MiningHashTransferConfigDetailsListKey(args)
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
                (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
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
          client.sapi.v1.mining['hash-transfer'].config.details.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningHashTransferConfigDetailsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1MiningHashTransferConfigDetailsListKey(args)
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
                (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
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
          client.sapi.v1.mining['hash-transfer'].config.details.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningHashTransferProfitDetailsKey(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/mining/hash-transfer/profit/details', args] as const
}

export function useGetSapiV1MiningHashTransferProfitDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1MiningHashTransferProfitDetailsKey(args)
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
                (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
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
          client.sapi.v1.mining['hash-transfer'].profit.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningHashTransferProfitDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1MiningHashTransferProfitDetailsKey(args)
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
                (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
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
          client.sapi.v1.mining['hash-transfer'].profit.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1MiningHashTransferConfigKey() {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config', 'POST'] as const
}

export function usePostSapiV1MiningHashTransferConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MiningHashTransferConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>
        },
      ) => parseResponse(client.sapi.v1.mining['hash-transfer'].config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1MiningHashTransferConfigCancelKey() {
  return ['sapi', '/sapi/v1/mining/hash-transfer/config/cancel', 'POST'] as const
}

export function usePostSapiV1MiningHashTransferConfigCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1MiningHashTransferConfigCancelKey()
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
            (typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1.mining['hash-transfer'].config.cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1MiningStatisticsUserStatusKey(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/status', args] as const
}

export function useGetSapiV1MiningStatisticsUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
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
        ? getGetSapiV1MiningStatisticsUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.mining.statistics.user.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningStatisticsUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
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
        ? getGetSapiV1MiningStatisticsUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.mining.statistics.user.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningStatisticsUserListKey(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
) {
  return ['sapi', '/sapi/v1/mining/statistics/user/list', args] as const
}

export function useGetSapiV1MiningStatisticsUserList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
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
        ? getGetSapiV1MiningStatisticsUserListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.mining.statistics.user.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningStatisticsUserList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
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
        ? getGetSapiV1MiningStatisticsUserListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.mining.statistics.user.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.mining.statistics.user.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1MiningPaymentUidKey(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
) {
  return ['sapi', '/sapi/v1/mining/payment/uid', args] as const
}

export function useGetSapiV1MiningPaymentUid<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
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
        ? getGetSapiV1MiningPaymentUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.uid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1MiningPaymentUid<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
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
        ? getGetSapiV1MiningPaymentUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.mining.payment.uid.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.mining.payment.uid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1FuturesTransferKey(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
) {
  return ['sapi', '/sapi/v1/futures/transfer', args] as const
}

export function useGetSapiV1FuturesTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
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
        ? getGetSapiV1FuturesTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.futures.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1FuturesTransfer<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
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
        ? getGetSapiV1FuturesTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.futures.transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1FuturesTransferKey() {
  return ['sapi', '/sapi/v1/futures/transfer', 'POST'] as const
}

export function usePostSapiV1FuturesTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.transfer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.futures.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1FuturesTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.futures.transfer.$post> },
      ) => parseResponse(client.sapi.v1.futures.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1FuturesHistDataLinkKey(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
) {
  return ['sapi', '/sapi/v1/futures/histDataLink', args] as const
}

export function useGetSapiV1FuturesHistDataLink<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
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
        ? getGetSapiV1FuturesHistDataLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.futures.histDataLink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1FuturesHistDataLink<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
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
        ? getGetSapiV1FuturesHistDataLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.futures.histDataLink.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.futures.histDataLink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1AlgoFuturesNewOrderVpKey() {
  return ['sapi', '/sapi/v1/algo/futures/newOrderVp', 'POST'] as const
}

export function usePostSapiV1AlgoFuturesNewOrderVp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AlgoFuturesNewOrderVpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post> },
      ) => parseResponse(client.sapi.v1.algo.futures.newOrderVp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1AlgoFuturesNewOrderTwapKey() {
  return ['sapi', '/sapi/v1/algo/futures/newOrderTwap', 'POST'] as const
}

export function usePostSapiV1AlgoFuturesNewOrderTwap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AlgoFuturesNewOrderTwapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post> },
      ) => parseResponse(client.sapi.v1.algo.futures.newOrderTwap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1AlgoFuturesOrderKey() {
  return ['sapi', '/sapi/v1/algo/futures/order', 'DELETE'] as const
}

export function useDeleteSapiV1AlgoFuturesOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.futures.order.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1AlgoFuturesOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete> },
      ) => parseResponse(client.sapi.v1.algo.futures.order.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1AlgoFuturesOpenOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/openOrders', args] as const
}

export function useGetSapiV1AlgoFuturesOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.futures.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoFuturesOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.openOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.futures.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AlgoFuturesHistoricalOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/historicalOrders', args] as const
}

export function useGetSapiV1AlgoFuturesHistoricalOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesHistoricalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.algo.futures.historicalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoFuturesHistoricalOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesHistoricalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.algo.futures.historicalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AlgoFuturesSubOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/futures/subOrders', args] as const
}

export function useGetSapiV1AlgoFuturesSubOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesSubOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.futures.subOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoFuturesSubOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
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
        ? getGetSapiV1AlgoFuturesSubOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.futures.subOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.futures.subOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1AlgoSpotNewOrderTwapKey() {
  return ['sapi', '/sapi/v1/algo/spot/newOrderTwap', 'POST'] as const
}

export function usePostSapiV1AlgoSpotNewOrderTwap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1AlgoSpotNewOrderTwapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post> },
      ) => parseResponse(client.sapi.v1.algo.spot.newOrderTwap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSapiV1AlgoSpotOrderKey() {
  return ['sapi', '/sapi/v1/algo/spot/order', 'DELETE'] as const
}

export function useDeleteSapiV1AlgoSpotOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.order.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSapiV1AlgoSpotOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete> },
      ) => parseResponse(client.sapi.v1.algo.spot.order.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1AlgoSpotOpenOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/openOrders', args] as const
}

export function useGetSapiV1AlgoSpotOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
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
        ? getGetSapiV1AlgoSpotOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.spot.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoSpotOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
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
        ? getGetSapiV1AlgoSpotOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.openOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.spot.openOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AlgoSpotHistoricalOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/historicalOrders', args] as const
}

export function useGetSapiV1AlgoSpotHistoricalOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
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
        ? getGetSapiV1AlgoSpotHistoricalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.algo.spot.historicalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoSpotHistoricalOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
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
        ? getGetSapiV1AlgoSpotHistoricalOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.algo.spot.historicalOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1AlgoSpotSubOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
) {
  return ['sapi', '/sapi/v1/algo/spot/subOrders', args] as const
}

export function useGetSapiV1AlgoSpotSubOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
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
        ? getGetSapiV1AlgoSpotSubOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.spot.subOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1AlgoSpotSubOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
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
        ? getGetSapiV1AlgoSpotSubOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.algo.spot.subOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.algo.spot.subOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1PortfolioAccountKey(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
) {
  return ['sapi', '/sapi/v1/portfolio/account', args] as const
}

export function useGetSapiV1PortfolioAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
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
        ? getGetSapiV1PortfolioAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.portfolio.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
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
        ? getGetSapiV1PortfolioAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.portfolio.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1PortfolioCollateralRateKey() {
  return ['sapi', '/sapi/v1/portfolio/collateralRate'] as const
}

export function useGetSapiV1PortfolioCollateralRate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
        >
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
        ? getGetSapiV1PortfolioCollateralRateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio.collateralRate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioCollateralRate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
        >
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
        ? getGetSapiV1PortfolioCollateralRateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.portfolio.collateralRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio.collateralRate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2PortfolioCollateralRateKey(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
) {
  return ['sapi', '/sapi/v2/portfolio/collateralRate', args] as const
}

export function useGetSapiV2PortfolioCollateralRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
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
        ? getGetSapiV2PortfolioCollateralRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v2.portfolio.collateralRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2PortfolioCollateralRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
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
        ? getGetSapiV2PortfolioCollateralRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.portfolio.collateralRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v2.portfolio.collateralRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1PortfolioPmLoanKey(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
) {
  return ['sapi', '/sapi/v1/portfolio/pmLoan', args] as const
}

export function useGetSapiV1PortfolioPmLoan<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
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
        ? getGetSapiV1PortfolioPmLoanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.portfolio.pmLoan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioPmLoan<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
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
        ? getGetSapiV1PortfolioPmLoanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.pmLoan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.portfolio.pmLoan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1PortfolioRepayKey() {
  return ['sapi', '/sapi/v1/portfolio/repay', 'POST'] as const
}

export function usePostSapiV1PortfolioRepay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.portfolio.repay.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.portfolio.repay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioRepayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.portfolio.repay.$post> },
      ) => parseResponse(client.sapi.v1.portfolio.repay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1PortfolioInterestHistoryKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/interest-history', args] as const
}

export function useGetSapiV1PortfolioInterestHistory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
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
        ? getGetSapiV1PortfolioInterestHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['interest-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioInterestHistory<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
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
        ? getGetSapiV1PortfolioInterestHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['interest-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1PortfolioAssetIndexPriceKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/asset-index-price', args] as const
}

export function useGetSapiV1PortfolioAssetIndexPrice<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
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
        ? getGetSapiV1PortfolioAssetIndexPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['asset-index-price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioAssetIndexPrice<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
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
        ? getGetSapiV1PortfolioAssetIndexPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['asset-index-price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1PortfolioAutoCollectionKey() {
  return ['sapi', '/sapi/v1/portfolio/auto-collection', 'POST'] as const
}

export function usePostSapiV1PortfolioAutoCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioAutoCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']> },
      ) => parseResponse(client.sapi.v1.portfolio['auto-collection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1PortfolioBnbTransferKey() {
  return ['sapi', '/sapi/v1/portfolio/bnb-transfer', 'POST'] as const
}

export function usePostSapiV1PortfolioBnbTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioBnbTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']> },
      ) => parseResponse(client.sapi.v1.portfolio['bnb-transfer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1PortfolioRepayFuturesSwitchKey(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
) {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-switch', args] as const
}

export function useGetSapiV1PortfolioRepayFuturesSwitch<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
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
        ? getGetSapiV1PortfolioRepayFuturesSwitchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioRepayFuturesSwitch<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
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
        ? getGetSapiV1PortfolioRepayFuturesSwitchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1PortfolioRepayFuturesSwitchKey() {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-switch', 'POST'] as const
}

export function usePostSapiV1PortfolioRepayFuturesSwitch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioRepayFuturesSwitchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>
        },
      ) =>
        parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1PortfolioRepayFuturesNegativeBalanceKey() {
  return ['sapi', '/sapi/v1/portfolio/repay-futures-negative-balance', 'POST'] as const
}

export function usePostSapiV1PortfolioRepayFuturesNegativeBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioRepayFuturesNegativeBalanceKey()
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
            (typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1.portfolio['repay-futures-negative-balance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1PortfolioMarginAssetLeverageKey() {
  return ['sapi', '/sapi/v1/portfolio/margin-asset-leverage'] as const
}

export function useGetSapiV1PortfolioMarginAssetLeverage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
        >
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
        ? getGetSapiV1PortfolioMarginAssetLeverageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PortfolioMarginAssetLeverage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
        >
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
        ? getGetSapiV1PortfolioMarginAssetLeverageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['margin-asset-leverage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1PortfolioAssetCollectionKey() {
  return ['sapi', '/sapi/v1/portfolio/asset-collection', 'POST'] as const
}

export function usePostSapiV1PortfolioAssetCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1PortfolioAssetCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>
        },
      ) => parseResponse(client.sapi.v1.portfolio['asset-collection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1BlvtTokenInfoKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/tokenInfo', args] as const
}

export function useGetSapiV1BlvtTokenInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
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
        ? getGetSapiV1BlvtTokenInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.tokenInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1BlvtTokenInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
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
        ? getGetSapiV1BlvtTokenInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.tokenInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.tokenInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1BlvtSubscribeKey() {
  return ['sapi', '/sapi/v1/blvt/subscribe', 'POST'] as const
}

export function usePostSapiV1BlvtSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1BlvtSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post> },
      ) => parseResponse(client.sapi.v1.blvt.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1BlvtSubscribeRecordKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/subscribe/record', args] as const
}

export function useGetSapiV1BlvtSubscribeRecord<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
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
        ? getGetSapiV1BlvtSubscribeRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.subscribe.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1BlvtSubscribeRecord<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
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
        ? getGetSapiV1BlvtSubscribeRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.blvt.subscribe.record.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.subscribe.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1BlvtRedeemKey() {
  return ['sapi', '/sapi/v1/blvt/redeem', 'POST'] as const
}

export function usePostSapiV1BlvtRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.blvt.redeem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1BlvtRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sapi.v1.blvt.redeem.$post> }) =>
        parseResponse(client.sapi.v1.blvt.redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1BlvtRedeemRecordKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/redeem/record', args] as const
}

export function useGetSapiV1BlvtRedeemRecord<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
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
        ? getGetSapiV1BlvtRedeemRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.redeem.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1BlvtRedeemRecord<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
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
        ? getGetSapiV1BlvtRedeemRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.redeem.record.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.redeem.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1BlvtUserLimitKey(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
) {
  return ['sapi', '/sapi/v1/blvt/userLimit', args] as const
}

export function useGetSapiV1BlvtUserLimit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
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
        ? getGetSapiV1BlvtUserLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.userLimit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1BlvtUserLimit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
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
        ? getGetSapiV1BlvtUserLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.blvt.userLimit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.blvt.userLimit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1C2cOrderMatchListUserOrderHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
) {
  return ['sapi', '/sapi/v1/c2c/orderMatch/listUserOrderHistory', args] as const
}

export function useGetSapiV1C2cOrderMatchListUserOrderHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
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
        ? getGetSapiV1C2cOrderMatchListUserOrderHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1C2cOrderMatchListUserOrderHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
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
        ? getGetSapiV1C2cOrderMatchListUserOrderHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanVipOngoingOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/ongoing/orders', args] as const
}

export function useGetSapiV1LoanVipOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
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
        ? getGetSapiV1LoanVipOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
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
        ? getGetSapiV1LoanVipOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanVipRepayKey() {
  return ['sapi', '/sapi/v1/loan/vip/repay', 'POST'] as const
}

export function usePostSapiV1LoanVipRepay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanVipRepayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post> },
      ) => parseResponse(client.sapi.v1.loan.vip.repay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanVipRepayHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/repay/history', args] as const
}

export function useGetSapiV1LoanVipRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
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
        ? getGetSapiV1LoanVipRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
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
        ? getGetSapiV1LoanVipRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.repay.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanVipCollateralAccountKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/account', args] as const
}

export function useGetSapiV1LoanVipCollateralAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
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
        ? getGetSapiV1LoanVipCollateralAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.vip.collateral.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipCollateralAccount<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
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
        ? getGetSapiV1LoanVipCollateralAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.account.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.vip.collateral.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanVipBorrowKey() {
  return ['sapi', '/sapi/v1/loan/vip/borrow', 'POST'] as const
}

export function usePostSapiV1LoanVipBorrow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.borrow.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanVipBorrowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post> },
      ) => parseResponse(client.sapi.v1.loan.vip.borrow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanVipLoanableDataKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/loanable/data', args] as const
}

export function useGetSapiV1LoanVipLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
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
        ? getGetSapiV1LoanVipLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
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
        ? getGetSapiV1LoanVipLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.loanable.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanVipCollateralDataKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/collateral/data', args] as const
}

export function useGetSapiV1LoanVipCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
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
        ? getGetSapiV1LoanVipCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
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
        ? getGetSapiV1LoanVipCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.collateral.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanVipRequestDataKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/data', args] as const
}

export function useGetSapiV1LoanVipRequestData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
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
        ? getGetSapiV1LoanVipRequestDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.request.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipRequestData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
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
        ? getGetSapiV1LoanVipRequestDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.vip.request.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanVipRequestInterestRateKey(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
) {
  return ['sapi', '/sapi/v1/loan/vip/request/interestRate', args] as const
}

export function useGetSapiV1LoanVipRequestInterestRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
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
        ? getGetSapiV1LoanVipRequestInterestRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.vip.request.interestRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanVipRequestInterestRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
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
        ? getGetSapiV1LoanVipRequestInterestRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.vip.request.interestRate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanVipRenewKey() {
  return ['sapi', '/sapi/v1/loan/vip/renew', 'POST'] as const
}

export function usePostSapiV1LoanVipRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.vip.renew.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanVipRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post> },
      ) => parseResponse(client.sapi.v1.loan.vip.renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanIncomeKey(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
) {
  return ['sapi', '/sapi/v1/loan/income', args] as const
}

export function useGetSapiV1LoanIncome<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
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
        ? getGetSapiV1LoanIncomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.income.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanIncome<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
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
        ? getGetSapiV1LoanIncomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.income.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.income.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanBorrowKey() {
  return ['sapi', '/sapi/v1/loan/borrow', 'POST'] as const
}

export function usePostSapiV1LoanBorrow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.borrow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanBorrowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.borrow.$post> }) =>
        parseResponse(client.sapi.v1.loan.borrow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanBorrowHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/borrow/history', args] as const
}

export function useGetSapiV1LoanBorrowHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
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
        ? getGetSapiV1LoanBorrowHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.borrow.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanBorrowHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
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
        ? getGetSapiV1LoanBorrowHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.borrow.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.borrow.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanOngoingOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v1/loan/ongoing/orders', args] as const
}

export function useGetSapiV1LoanOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
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
        ? getGetSapiV1LoanOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
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
        ? getGetSapiV1LoanOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.ongoing.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanRepayKey() {
  return ['sapi', '/sapi/v1/loan/repay', 'POST'] as const
}

export function usePostSapiV1LoanRepay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.repay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanRepayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.repay.$post> }) =>
        parseResponse(client.sapi.v1.loan.repay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanRepayHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/repay/history', args] as const
}

export function useGetSapiV1LoanRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
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
        ? getGetSapiV1LoanRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
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
        ? getGetSapiV1LoanRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.repay.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanAdjustLtvKey() {
  return ['sapi', '/sapi/v1/loan/adjust/ltv', 'POST'] as const
}

export function usePostSapiV1LoanAdjustLtv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.adjust.ltv.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanAdjustLtvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post> },
      ) => parseResponse(client.sapi.v1.loan.adjust.ltv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LoanLtvAdjustmentHistoryKey(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
) {
  return ['sapi', '/sapi/v1/loan/ltv/adjustment/history', args] as const
}

export function useGetSapiV1LoanLtvAdjustmentHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
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
        ? getGetSapiV1LoanLtvAdjustmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.ltv.adjustment.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanLtvAdjustmentHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
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
        ? getGetSapiV1LoanLtvAdjustmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.ltv.adjustment.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanLoanableDataKey(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/loanable/data', args] as const
}

export function useGetSapiV1LoanLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
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
        ? getGetSapiV1LoanLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
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
        ? getGetSapiV1LoanLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.loanable.data.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanCollateralDataKey(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v1/loan/collateral/data', args] as const
}

export function useGetSapiV1LoanCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
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
        ? getGetSapiV1LoanCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
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
        ? getGetSapiV1LoanCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.loan.collateral.data.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.loan.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LoanRepayCollateralRateKey(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
) {
  return ['sapi', '/sapi/v1/loan/repay/collateral/rate', args] as const
}

export function useGetSapiV1LoanRepayCollateralRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
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
        ? getGetSapiV1LoanRepayCollateralRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.repay.collateral.rate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LoanRepayCollateralRate<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
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
        ? getGetSapiV1LoanRepayCollateralRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.loan.repay.collateral.rate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LoanCustomizeMarginCallKey() {
  return ['sapi', '/sapi/v1/loan/customize/margin_call', 'POST'] as const
}

export function usePostSapiV1LoanCustomizeMarginCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.loan.customize.margin_call.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LoanCustomizeMarginCallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post> },
      ) => parseResponse(client.sapi.v1.loan.customize.margin_call.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV2LoanFlexibleBorrowKey() {
  return ['sapi', '/sapi/v2/loan/flexible/borrow', 'POST'] as const
}

export function usePostSapiV2LoanFlexibleBorrow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV2LoanFlexibleBorrowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post> },
      ) => parseResponse(client.sapi.v2.loan.flexible.borrow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleOngoingOrdersKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ongoing/orders', args] as const
}

export function useGetSapiV2LoanFlexibleOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
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
        ? getGetSapiV2LoanFlexibleOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleOngoingOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
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
        ? getGetSapiV2LoanFlexibleOngoingOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.ongoing.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleBorrowHistoryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/borrow/history', args] as const
}

export function useGetSapiV2LoanFlexibleBorrowHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
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
        ? getGetSapiV2LoanFlexibleBorrowHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.borrow.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleBorrowHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
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
        ? getGetSapiV2LoanFlexibleBorrowHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.borrow.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV2LoanFlexibleRepayKey() {
  return ['sapi', '/sapi/v2/loan/flexible/repay', 'POST'] as const
}

export function usePostSapiV2LoanFlexibleRepay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV2LoanFlexibleRepayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post> },
      ) => parseResponse(client.sapi.v2.loan.flexible.repay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleRepayHistoryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/repay/history', args] as const
}

export function useGetSapiV2LoanFlexibleRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
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
        ? getGetSapiV2LoanFlexibleRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleRepayHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
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
        ? getGetSapiV2LoanFlexibleRepayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.repay.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.repay.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV2LoanFlexibleAdjustLtvKey() {
  return ['sapi', '/sapi/v2/loan/flexible/adjust/ltv', 'POST'] as const
}

export function usePostSapiV2LoanFlexibleAdjustLtv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV2LoanFlexibleAdjustLtvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post> },
      ) => parseResponse(client.sapi.v2.loan.flexible.adjust.ltv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleLtvAdjustmentHistoryKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/ltv/adjustment/history', args] as const
}

export function useGetSapiV2LoanFlexibleLtvAdjustmentHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
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
        ? getGetSapiV2LoanFlexibleLtvAdjustmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleLtvAdjustmentHistory<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
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
        ? getGetSapiV2LoanFlexibleLtvAdjustmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleLoanableDataKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/loanable/data', args] as const
}

export function useGetSapiV2LoanFlexibleLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
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
        ? getGetSapiV2LoanFlexibleLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleLoanableData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
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
        ? getGetSapiV2LoanFlexibleLoanableDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.loanable.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2LoanFlexibleCollateralDataKey(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
) {
  return ['sapi', '/sapi/v2/loan/flexible/collateral/data', args] as const
}

export function useGetSapiV2LoanFlexibleCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
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
        ? getGetSapiV2LoanFlexibleCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2LoanFlexibleCollateralData<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
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
        ? getGetSapiV2LoanFlexibleCollateralDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v2.loan.flexible.collateral.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1PayTransactionsKey(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
) {
  return ['sapi', '/sapi/v1/pay/transactions', args] as const
}

export function useGetSapiV1PayTransactions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
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
        ? getGetSapiV1PayTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.pay.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1PayTransactions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
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
        ? getGetSapiV1PayTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.pay.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.pay.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ConvertExchangeInfoKey(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
) {
  return ['sapi', '/sapi/v1/convert/exchangeInfo', args] as const
}

export function useGetSapiV1ConvertExchangeInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
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
        ? getGetSapiV1ConvertExchangeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.exchangeInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ConvertExchangeInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
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
        ? getGetSapiV1ConvertExchangeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.exchangeInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.exchangeInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ConvertAssetInfoKey(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
) {
  return ['sapi', '/sapi/v1/convert/assetInfo', args] as const
}

export function useGetSapiV1ConvertAssetInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
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
        ? getGetSapiV1ConvertAssetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.assetInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ConvertAssetInfo<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
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
        ? getGetSapiV1ConvertAssetInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.assetInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.assetInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1ConvertGetQuoteKey() {
  return ['sapi', '/sapi/v1/convert/getQuote', 'POST'] as const
}

export function usePostSapiV1ConvertGetQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.getQuote.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ConvertGetQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.convert.getQuote.$post> },
      ) => parseResponse(client.sapi.v1.convert.getQuote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1ConvertAcceptQuoteKey() {
  return ['sapi', '/sapi/v1/convert/acceptQuote', 'POST'] as const
}

export function usePostSapiV1ConvertAcceptQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.acceptQuote.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ConvertAcceptQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post> },
      ) => parseResponse(client.sapi.v1.convert.acceptQuote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1ConvertOrderStatusKey(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
) {
  return ['sapi', '/sapi/v1/convert/orderStatus', args] as const
}

export function useGetSapiV1ConvertOrderStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
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
        ? getGetSapiV1ConvertOrderStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.orderStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ConvertOrderStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
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
        ? getGetSapiV1ConvertOrderStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.orderStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.orderStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1ConvertLimitPlaceOrderKey() {
  return ['sapi', '/sapi/v1/convert/limit/placeOrder', 'POST'] as const
}

export function usePostSapiV1ConvertLimitPlaceOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.placeOrder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ConvertLimitPlaceOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post> },
      ) => parseResponse(client.sapi.v1.convert.limit.placeOrder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1ConvertLimitCancelOrderKey() {
  return ['sapi', '/sapi/v1/convert/limit/cancelOrder', 'POST'] as const
}

export function usePostSapiV1ConvertLimitCancelOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1ConvertLimitCancelOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post> },
      ) => parseResponse(client.sapi.v1.convert.limit.cancelOrder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1ConvertLimitQueryOpenOrdersKey(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
) {
  return ['sapi', '/sapi/v1/convert/limit/queryOpenOrders', args] as const
}

export function useGetSapiV1ConvertLimitQueryOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
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
        ? getGetSapiV1ConvertLimitQueryOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.convert.limit.queryOpenOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ConvertLimitQueryOpenOrders<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
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
        ? getGetSapiV1ConvertLimitQueryOpenOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.convert.limit.queryOpenOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1ConvertTradeFlowKey(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
) {
  return ['sapi', '/sapi/v1/convert/tradeFlow', args] as const
}

export function useGetSapiV1ConvertTradeFlow<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
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
        ? getGetSapiV1ConvertTradeFlowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.tradeFlow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1ConvertTradeFlow<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
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
        ? getGetSapiV1ConvertTradeFlowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.convert.tradeFlow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.convert.tradeFlow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1RebateTaxQueryKey(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
) {
  return ['sapi', '/sapi/v1/rebate/taxQuery', args] as const
}

export function useGetSapiV1RebateTaxQuery<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
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
        ? getGetSapiV1RebateTaxQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.rebate.taxQuery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1RebateTaxQuery<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
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
        ? getGetSapiV1RebateTaxQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.rebate.taxQuery.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.rebate.taxQuery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1NftHistoryTransactionsKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/transactions', args] as const
}

export function useGetSapiV1NftHistoryTransactions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
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
        ? getGetSapiV1NftHistoryTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1NftHistoryTransactions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
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
        ? getGetSapiV1NftHistoryTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.nft.history.transactions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1NftHistoryDepositKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/deposit', args] as const
}

export function useGetSapiV1NftHistoryDeposit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
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
        ? getGetSapiV1NftHistoryDepositKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.deposit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1NftHistoryDeposit<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
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
        ? getGetSapiV1NftHistoryDepositKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.deposit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.deposit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1NftHistoryWithdrawKey(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
) {
  return ['sapi', '/sapi/v1/nft/history/withdraw', args] as const
}

export function useGetSapiV1NftHistoryWithdraw<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
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
        ? getGetSapiV1NftHistoryWithdrawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.withdraw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1NftHistoryWithdraw<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
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
        ? getGetSapiV1NftHistoryWithdrawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.history.withdraw.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.history.withdraw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1NftUserGetAssetKey(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
) {
  return ['sapi', '/sapi/v1/nft/user/getAsset', args] as const
}

export function useGetSapiV1NftUserGetAsset<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
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
        ? getGetSapiV1NftUserGetAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.user.getAsset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1NftUserGetAsset<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
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
        ? getGetSapiV1NftUserGetAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.nft.user.getAsset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.nft.user.getAsset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1GiftcardCreateCodeKey() {
  return ['sapi', '/sapi/v1/giftcard/createCode', 'POST'] as const
}

export function usePostSapiV1GiftcardCreateCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.createCode.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1GiftcardCreateCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post> },
      ) => parseResponse(client.sapi.v1.giftcard.createCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1GiftcardRedeemCodeKey() {
  return ['sapi', '/sapi/v1/giftcard/redeemCode', 'POST'] as const
}

export function usePostSapiV1GiftcardRedeemCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.redeemCode.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1GiftcardRedeemCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post> },
      ) => parseResponse(client.sapi.v1.giftcard.redeemCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1GiftcardVerifyKey(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
) {
  return ['sapi', '/sapi/v1/giftcard/verify', args] as const
}

export function useGetSapiV1GiftcardVerify<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
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
        ? getGetSapiV1GiftcardVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.giftcard.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1GiftcardVerify<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
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
        ? getGetSapiV1GiftcardVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.giftcard.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1GiftcardCryptographyRsaPublicKeyKey(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
) {
  return ['sapi', '/sapi/v1/giftcard/cryptography/rsa-public-key', args] as const
}

export function useGetSapiV1GiftcardCryptographyRsaPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
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
        ? getGetSapiV1GiftcardCryptographyRsaPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1GiftcardCryptographyRsaPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
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
        ? getGetSapiV1GiftcardCryptographyRsaPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1GiftcardBuyCodeKey() {
  return ['sapi', '/sapi/v1/giftcard/buyCode', 'POST'] as const
}

export function usePostSapiV1GiftcardBuyCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.giftcard.buyCode.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1GiftcardBuyCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post> },
      ) => parseResponse(client.sapi.v1.giftcard.buyCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1GiftcardBuyCodeTokenLimitKey(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
) {
  return ['sapi', '/sapi/v1/giftcard/buyCode/token-limit', args] as const
}

export function useGetSapiV1GiftcardBuyCodeTokenLimit<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
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
        ? getGetSapiV1GiftcardBuyCodeTokenLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.giftcard.buyCode['token-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1GiftcardBuyCodeTokenLimit<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
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
        ? getGetSapiV1GiftcardBuyCodeTokenLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.giftcard.buyCode['token-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestTargetAssetListKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/list', args] as const
}

export function useGetSapiV1LendingAutoInvestTargetAssetList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestTargetAssetListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestTargetAssetList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestTargetAssetListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestTargetAssetRoiListKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/target-asset/roi/list', args] as const
}

export function useGetSapiV1LendingAutoInvestTargetAssetRoiList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestTargetAssetRoiListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestTargetAssetRoiList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestTargetAssetRoiListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestAllAssetKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/all/asset', args] as const
}

export function useGetSapiV1LendingAutoInvestAllAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
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
        ? getGetSapiV1LendingAutoInvestAllAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].all.asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestAllAsset<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
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
        ? getGetSapiV1LendingAutoInvestAllAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].all.asset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestSourceAssetListKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/source-asset/list', args] as const
}

export function useGetSapiV1LendingAutoInvestSourceAssetList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestSourceAssetListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestSourceAssetList<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestSourceAssetListKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
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
          client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LendingAutoInvestPlanAddKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/add', 'POST'] as const
}

export function usePostSapiV1LendingAutoInvestPlanAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingAutoInvestPlanAddKey()
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
            (typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1.lending['auto-invest'].plan.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1LendingAutoInvestPlanEditKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/edit', 'POST'] as const
}

export function usePostSapiV1LendingAutoInvestPlanEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingAutoInvestPlanEditKey()
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
            (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1.lending['auto-invest'].plan.edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1LendingAutoInvestPlanEditStatusKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/edit-status', 'POST'] as const
}

export function usePostSapiV1LendingAutoInvestPlanEditStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingAutoInvestPlanEditStatusKey()
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
            (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1.lending['auto-invest'].plan['edit-status'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestPlanListKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/list', args] as const
}

export function useGetSapiV1LendingAutoInvestPlanList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
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
        ? getGetSapiV1LendingAutoInvestPlanListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].plan.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestPlanList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
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
        ? getGetSapiV1LendingAutoInvestPlanListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].plan.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestPlanIdKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/plan/id', args] as const
}

export function useGetSapiV1LendingAutoInvestPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
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
        ? getGetSapiV1LendingAutoInvestPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].plan.id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
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
        ? getGetSapiV1LendingAutoInvestPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].plan.id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestHistoryListKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/history/list', args] as const
}

export function useGetSapiV1LendingAutoInvestHistoryList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
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
        ? getGetSapiV1LendingAutoInvestHistoryListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].history.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestHistoryList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
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
        ? getGetSapiV1LendingAutoInvestHistoryListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].history.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestIndexInfoKey(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/info', args] as const
}

export function useGetSapiV1LendingAutoInvestIndexInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
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
        ? getGetSapiV1LendingAutoInvestIndexInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].index.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestIndexInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
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
        ? getGetSapiV1LendingAutoInvestIndexInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.lending['auto-invest'].index.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestIndexUserSummaryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/index/user-summary', args] as const
}

export function useGetSapiV1LendingAutoInvestIndexUserSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestIndexUserSummaryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
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
          client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestIndexUserSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestIndexUserSummaryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
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
          client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LendingAutoInvestOneOffKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/one-off', 'POST'] as const
}

export function usePostSapiV1LendingAutoInvestOneOff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingAutoInvestOneOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>
        },
      ) =>
        parseResponse(client.sapi.v1.lending['auto-invest']['one-off'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestOneOffStatusKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/one-off/status', args] as const
}

export function useGetSapiV1LendingAutoInvestOneOffStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestOneOffStatusKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
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
          client.sapi.v1.lending['auto-invest']['one-off'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestOneOffStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestOneOffStatusKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
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
          client.sapi.v1.lending['auto-invest']['one-off'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1LendingAutoInvestRedeemKey() {
  return ['sapi', '/sapi/v1/lending/auto-invest/redeem', 'POST'] as const
}

export function usePostSapiV1LendingAutoInvestRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1LendingAutoInvestRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>
        },
      ) => parseResponse(client.sapi.v1.lending['auto-invest'].redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestRedeemHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/redeem/history', args] as const
}

export function useGetSapiV1LendingAutoInvestRedeemHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestRedeemHistoryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
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
          client.sapi.v1.lending['auto-invest'].redeem.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestRedeemHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestRedeemHistoryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
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
          client.sapi.v1.lending['auto-invest'].redeem.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1LendingAutoInvestRebalanceHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/lending/auto-invest/rebalance/history', args] as const
}

export function useGetSapiV1LendingAutoInvestRebalanceHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestRebalanceHistoryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
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
          client.sapi.v1.lending['auto-invest'].rebalance.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1LendingAutoInvestRebalanceHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1LendingAutoInvestRebalanceHistoryKey(args)
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
                (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
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
          client.sapi.v1.lending['auto-invest'].rebalance.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV2EthStakingEthStakeKey() {
  return ['sapi', '/sapi/v2/eth-staking/eth/stake', 'POST'] as const
}

export function usePostSapiV2EthStakingEthStake<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV2EthStakingEthStakeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>
        },
      ) => parseResponse(client.sapi.v2['eth-staking'].eth.stake.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1EthStakingEthRedeemKey() {
  return ['sapi', '/sapi/v1/eth-staking/eth/redeem', 'POST'] as const
}

export function usePostSapiV1EthStakingEthRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1EthStakingEthRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>
        },
      ) => parseResponse(client.sapi.v1['eth-staking'].eth.redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthHistoryStakingHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/stakingHistory', args] as const
}

export function useGetSapiV1EthStakingEthHistoryStakingHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryStakingHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthHistoryStakingHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryStakingHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthHistoryRedemptionHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/redemptionHistory', args] as const
}

export function useGetSapiV1EthStakingEthHistoryRedemptionHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRedemptionHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthHistoryRedemptionHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRedemptionHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthHistoryRewardsHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rewardsHistory', args] as const
}

export function useGetSapiV1EthStakingEthHistoryRewardsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRewardsHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthHistoryRewardsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRewardsHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthQuotaKey(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/quota', args] as const
}

export function useGetSapiV1EthStakingEthQuota<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
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
        ? getGetSapiV1EthStakingEthQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['eth-staking'].eth.quota.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthQuota<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
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
        ? getGetSapiV1EthStakingEthQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['eth-staking'].eth.quota.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthHistoryRateHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/rateHistory', args] as const
}

export function useGetSapiV1EthStakingEthHistoryRateHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRateHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthHistoryRateHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryRateHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV2EthStakingAccountKey(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
) {
  return ['sapi', '/sapi/v2/eth-staking/account', args] as const
}

export function useGetSapiV2EthStakingAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
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
        ? getGetSapiV2EthStakingAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v2['eth-staking'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV2EthStakingAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
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
        ? getGetSapiV2EthStakingAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v2['eth-staking'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1EthStakingWbethWrapKey() {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/wrap', 'POST'] as const
}

export function usePostSapiV1EthStakingWbethWrap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1EthStakingWbethWrapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>
        },
      ) => parseResponse(client.sapi.v1['eth-staking'].wbeth.wrap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1EthStakingWbethHistoryWrapHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/wrapHistory', args] as const
}

export function useGetSapiV1EthStakingWbethHistoryWrapHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingWbethHistoryWrapHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
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
          client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingWbethHistoryWrapHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingWbethHistoryWrapHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
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
          client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingWbethHistoryUnwrapHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/wbeth/history/unwrapHistory', args] as const
}

export function useGetSapiV1EthStakingWbethHistoryUnwrapHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingWbethHistoryUnwrapHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
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
          client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingWbethHistoryUnwrapHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingWbethHistoryUnwrapHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
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
          client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1EthStakingEthHistoryWbethRewardsHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/eth-staking/eth/history/wbethRewardsHistory', args] as const
}

export function useGetSapiV1EthStakingEthHistoryWbethRewardsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryWbethRewardsHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1EthStakingEthHistoryWbethRewardsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1EthStakingEthHistoryWbethRewardsHistoryKey(args)
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
                (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
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
          client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CopyTradingFuturesUserStatusKey(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/userStatus', args] as const
}

export function useGetSapiV1CopyTradingFuturesUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
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
        ? getGetSapiV1CopyTradingFuturesUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.copyTrading.futures.userStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CopyTradingFuturesUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
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
        ? getGetSapiV1CopyTradingFuturesUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.copyTrading.futures.userStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1CopyTradingFuturesLeadSymbolKey(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
) {
  return ['sapi', '/sapi/v1/copyTrading/futures/leadSymbol', args] as const
}

export function useGetSapiV1CopyTradingFuturesLeadSymbol<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
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
        ? getGetSapiV1CopyTradingFuturesLeadSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.copyTrading.futures.leadSymbol.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1CopyTradingFuturesLeadSymbol<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
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
        ? getGetSapiV1CopyTradingFuturesLeadSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1.copyTrading.futures.leadSymbol.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleListKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/list', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
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
        ? getGetSapiV1SimpleEarnFlexibleListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].flexible.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
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
        ? getGetSapiV1SimpleEarnFlexibleListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].flexible.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedListKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/list', args] as const
}

export function useGetSapiV1SimpleEarnLockedList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
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
        ? getGetSapiV1SimpleEarnLockedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].locked.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedList<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
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
        ? getGetSapiV1SimpleEarnLockedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].locked.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnFlexibleSubscribeKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/subscribe', 'POST'] as const
}

export function usePostSapiV1SimpleEarnFlexibleSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnFlexibleSubscribeKey()
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
            (typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']
          >
        },
      ) =>
        parseResponse(client.sapi.v1['simple-earn'].flexible.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnLockedSubscribeKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/subscribe', 'POST'] as const
}

export function usePostSapiV1SimpleEarnLockedSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnLockedSubscribeKey()
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
            (typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['simple-earn'].locked.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnFlexibleRedeemKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/redeem', 'POST'] as const
}

export function usePostSapiV1SimpleEarnFlexibleRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnFlexibleRedeemKey()
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
            (typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']
          >
        },
      ) => parseResponse(client.sapi.v1['simple-earn'].flexible.redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnLockedRedeemKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/redeem', 'POST'] as const
}

export function usePostSapiV1SimpleEarnLockedRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnLockedRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>
        },
      ) => parseResponse(client.sapi.v1['simple-earn'].locked.redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexiblePositionKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/position', args] as const
}

export function useGetSapiV1SimpleEarnFlexiblePosition<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
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
        ? getGetSapiV1SimpleEarnFlexiblePositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].flexible.position.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexiblePosition<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
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
        ? getGetSapiV1SimpleEarnFlexiblePositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].flexible.position.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedPositionKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/position', args] as const
}

export function useGetSapiV1SimpleEarnLockedPosition<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
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
        ? getGetSapiV1SimpleEarnLockedPositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].locked.position.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedPosition<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
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
        ? getGetSapiV1SimpleEarnLockedPositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sapi.v1['simple-earn'].locked.position.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnAccountKey(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
) {
  return ['sapi', '/sapi/v1/simple-earn/account', args] as const
}

export function useGetSapiV1SimpleEarnAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
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
        ? getGetSapiV1SimpleEarnAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['simple-earn'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnAccount<TError = unknown>(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
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
        ? getGetSapiV1SimpleEarnAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1['simple-earn'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleHistorySubscriptionRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/subscriptionRecord', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleHistorySubscriptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistorySubscriptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleHistorySubscriptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistorySubscriptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedHistorySubscriptionRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/subscriptionRecord', args] as const
}

export function useGetSapiV1SimpleEarnLockedHistorySubscriptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistorySubscriptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedHistorySubscriptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistorySubscriptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleHistoryRedemptionRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/redemptionRecord', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleHistoryRedemptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRedemptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleHistoryRedemptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRedemptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedHistoryRedemptionRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/redemptionRecord', args] as const
}

export function useGetSapiV1SimpleEarnLockedHistoryRedemptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistoryRedemptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedHistoryRedemptionRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistoryRedemptionRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleHistoryRewardsRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rewardsRecord', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleHistoryRewardsRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRewardsRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleHistoryRewardsRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRewardsRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedHistoryRewardsRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/history/rewardsRecord', args] as const
}

export function useGetSapiV1SimpleEarnLockedHistoryRewardsRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistoryRewardsRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedHistoryRewardsRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedHistoryRewardsRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
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
          client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeKey() {
  return ['sapi', '/sapi/v1/simple-earn/flexible/setAutoSubscribe', 'POST'] as const
}

export function usePostSapiV1SimpleEarnFlexibleSetAutoSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnFlexibleSetAutoSubscribeKey()
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
            (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1['simple-earn'].flexible.setAutoSubscribe.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSapiV1SimpleEarnLockedSetAutoSubscribeKey() {
  return ['sapi', '/sapi/v1/simple-earn/locked/setAutoSubscribe', 'POST'] as const
}

export function usePostSapiV1SimpleEarnLockedSetAutoSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1SimpleEarnLockedSetAutoSubscribeKey()
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
            (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1['simple-earn'].locked.setAutoSubscribe.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexiblePersonalLeftQuotaKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/personalLeftQuota', args] as const
}

export function useGetSapiV1SimpleEarnFlexiblePersonalLeftQuota<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexiblePersonalLeftQuotaKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
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
          client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexiblePersonalLeftQuota<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexiblePersonalLeftQuotaKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
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
          client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedPersonalLeftQuotaKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/personalLeftQuota', args] as const
}

export function useGetSapiV1SimpleEarnLockedPersonalLeftQuota<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedPersonalLeftQuotaKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
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
          client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedPersonalLeftQuota<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedPersonalLeftQuotaKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
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
          client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleSubscriptionPreviewKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/subscriptionPreview', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleSubscriptionPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleSubscriptionPreviewKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
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
          client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleSubscriptionPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleSubscriptionPreviewKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
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
          client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedSubscriptionPreviewKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/subscriptionPreview', args] as const
}

export function useGetSapiV1SimpleEarnLockedSubscriptionPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedSubscriptionPreviewKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
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
          client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedSubscriptionPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedSubscriptionPreviewKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
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
          client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnLockedSetRedeemOptionKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/locked/setRedeemOption', args] as const
}

export function useGetSapiV1SimpleEarnLockedSetRedeemOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedSetRedeemOptionKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
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
          client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnLockedSetRedeemOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnLockedSetRedeemOptionKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
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
          client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleHistoryRateHistoryKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/rateHistory', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleHistoryRateHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRateHistoryKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleHistoryRateHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryRateHistoryKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1SimpleEarnFlexibleHistoryCollateralRecordKey(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
) {
  return ['sapi', '/sapi/v1/simple-earn/flexible/history/collateralRecord', args] as const
}

export function useGetSapiV1SimpleEarnFlexibleHistoryCollateralRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryCollateralRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1SimpleEarnFlexibleHistoryCollateralRecord<TError = unknown>(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSapiV1SimpleEarnFlexibleHistoryCollateralRecordKey(args)
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
                (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
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
          client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1DciProductListKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/list', args] as const
}

export function useGetSapiV1DciProductList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
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
        ? getGetSapiV1DciProductListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1DciProductList<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
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
        ? getGetSapiV1DciProductListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1DciProductSubscribeKey() {
  return ['sapi', '/sapi/v1/dci/product/subscribe', 'POST'] as const
}

export function usePostSapiV1DciProductSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.subscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1DciProductSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post> },
      ) => parseResponse(client.sapi.v1.dci.product.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSapiV1DciProductPositionsKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/positions', args] as const
}

export function useGetSapiV1DciProductPositions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
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
        ? getGetSapiV1DciProductPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1DciProductPositions<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
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
        ? getGetSapiV1DciProductPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sapi.v1.dci.product.positions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSapiV1DciProductAccountsKey(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
) {
  return ['sapi', '/sapi/v1/dci/product/accounts', args] as const
}

export function useGetSapiV1DciProductAccounts<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
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
        ? getGetSapiV1DciProductAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSapiV1DciProductAccounts<TError = unknown>(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
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
        ? getGetSapiV1DciProductAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sapi.v1.dci.product.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sapi.v1.dci.product.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSapiV1DciProductAutoCompoundEditStatusKey() {
  return ['sapi', '/sapi/v1/dci/product/auto_compound/edit-status', 'POST'] as const
}

export function usePostSapiV1DciProductAutoCompoundEditStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSapiV1DciProductAutoCompoundEditStatusKey()
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
            (typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sapi.v1.dci.product.auto_compound['edit-status'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

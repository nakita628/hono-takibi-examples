import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBenzingaKey() {
  return ['benzinga'] as const
}

export function getConsumerSpendingKey() {
  return ['consumer-spending'] as const
}

export function getCryptoKey() {
  return ['crypto'] as const
}

export function getEtfGlobalKey() {
  return ['etf-global'] as const
}

export function getFedKey() {
  return ['fed'] as const
}

export function getForexKey() {
  return ['forex'] as const
}

export function getFuturesKey() {
  return ['futures'] as const
}

export function getOptionsKey() {
  return ['options'] as const
}

export function getStocksKey() {
  return ['stocks'] as const
}

export function getTmxKey() {
  return ['tmx'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getVXKey() {
  return ['vX'] as const
}

export function getGetBenzingaV1AnalystInsightsKey(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/analyst-insights', args] as const
}

export function useGetBenzingaV1AnalystInsights<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1AnalystInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1['analyst-insights'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1AnalystInsights<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1AnalystInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1['analyst-insights'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1AnalystsKey(
  args: InferRequestType<typeof client.benzinga.v1.analysts.$get>,
) {
  return ['benzinga', '/benzinga/v1/analysts', args] as const
}

export function useGetBenzingaV1Analysts<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.analysts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1AnalystsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.analysts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1Analysts<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.analysts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1AnalystsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.analysts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1BullsBearsSayKey(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/bulls-bears-say', args] as const
}

export function useGetBenzingaV1BullsBearsSay<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1BullsBearsSayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1['bulls-bears-say'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1BullsBearsSay<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1BullsBearsSayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1['bulls-bears-say'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1ConsensusRatingsTickerKey(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/consensus-ratings/:ticker', args] as const
}

export function useGetBenzingaV1ConsensusRatingsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1ConsensusRatingsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.benzinga.v1['consensus-ratings'][':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1ConsensusRatingsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1ConsensusRatingsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.benzinga.v1['consensus-ratings'][':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1EarningsKey(
  args: InferRequestType<typeof client.benzinga.v1.earnings.$get>,
) {
  return ['benzinga', '/benzinga/v1/earnings', args] as const
}

export function useGetBenzingaV1Earnings<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.earnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1EarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.earnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1Earnings<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.earnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1EarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.earnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1FirmsKey(
  args: InferRequestType<typeof client.benzinga.v1.firms.$get>,
) {
  return ['benzinga', '/benzinga/v1/firms', args] as const
}

export function useGetBenzingaV1Firms<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.firms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1FirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.firms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1Firms<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.firms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1FirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.firms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1GuidanceKey(
  args: InferRequestType<typeof client.benzinga.v1.guidance.$get>,
) {
  return ['benzinga', '/benzinga/v1/guidance', args] as const
}

export function useGetBenzingaV1Guidance<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.guidance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1GuidanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.guidance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1Guidance<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.guidance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1GuidanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.guidance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV1RatingsKey(
  args: InferRequestType<typeof client.benzinga.v1.ratings.$get>,
) {
  return ['benzinga', '/benzinga/v1/ratings', args] as const
}

export function useGetBenzingaV1Ratings<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1RatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV1Ratings<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v1.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBenzingaV1RatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v1.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBenzingaV2NewsKey(
  args: InferRequestType<typeof client.benzinga.v2.news.$get>,
) {
  return ['benzinga', '/benzinga/v2/news', args] as const
}

export function useGetBenzingaV2News<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v2.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBenzingaV2NewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v2.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenzingaV2News<TError = unknown>(
  args: InferRequestType<typeof client.benzinga.v2.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBenzingaV2NewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benzinga.v2.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerSpendingEuV1MerchantAggregatesKey(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
) {
  return ['consumer-spending', '/consumer-spending/eu/v1/merchant-aggregates', args] as const
}

export function useGetConsumerSpendingEuV1MerchantAggregates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
        ? getGetConsumerSpendingEuV1MerchantAggregatesKey(args)
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
                (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
          client['consumer-spending'].eu.v1['merchant-aggregates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerSpendingEuV1MerchantAggregates<TError = unknown>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
        ? getGetConsumerSpendingEuV1MerchantAggregatesKey(args)
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
                (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
          client['consumer-spending'].eu.v1['merchant-aggregates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumerSpendingEuV1MerchantHierarchyKey(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
) {
  return ['consumer-spending', '/consumer-spending/eu/v1/merchant-hierarchy', args] as const
}

export function useGetConsumerSpendingEuV1MerchantHierarchy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
        ? getGetConsumerSpendingEuV1MerchantHierarchyKey(args)
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
                (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
          client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumerSpendingEuV1MerchantHierarchy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
        ? getGetConsumerSpendingEuV1MerchantHierarchyKey(args)
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
                (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
          client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCryptoV1ExchangesKey(
  args: InferRequestType<typeof client.crypto.v1.exchanges.$get>,
) {
  return ['crypto', '/crypto/v1/exchanges', args] as const
}

export function useGetCryptoV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.crypto.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptoV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crypto.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCryptoV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.crypto.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptoV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crypto.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfGlobalV1AnalyticsKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/analytics', args] as const
}

export function useGetEtfGlobalV1Analytics<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1AnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfGlobalV1Analytics<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1AnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfGlobalV1ConstituentsKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/constituents', args] as const
}

export function useGetEtfGlobalV1Constituents<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1ConstituentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.constituents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfGlobalV1Constituents<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1ConstituentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.constituents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfGlobalV1FundFlowsKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/fund-flows', args] as const
}

export function useGetEtfGlobalV1FundFlows<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1FundFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1['fund-flows'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfGlobalV1FundFlows<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1FundFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1['fund-flows'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfGlobalV1ProfilesKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/profiles', args] as const
}

export function useGetEtfGlobalV1Profiles<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1ProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfGlobalV1Profiles<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1ProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfGlobalV1TaxonomiesKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/taxonomies', args] as const
}

export function useGetEtfGlobalV1Taxonomies<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1TaxonomiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.taxonomies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfGlobalV1Taxonomies<TError = unknown>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfGlobalV1TaxonomiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['etf-global'].v1.taxonomies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFedV1FundingConditionsKey(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
) {
  return ['fed', '/fed/v1/funding-conditions', args] as const
}

export function useGetFedV1FundingConditions<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1FundingConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['funding-conditions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFedV1FundingConditions<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1FundingConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['funding-conditions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFedV1InflationKey(
  args: InferRequestType<typeof client.fed.v1.inflation.$get>,
) {
  return ['fed', '/fed/v1/inflation', args] as const
}

export function useGetFedV1Inflation<TError = unknown>(
  args: InferRequestType<typeof client.fed.v1.inflation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFedV1InflationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1.inflation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFedV1Inflation<TError = unknown>(
  args: InferRequestType<typeof client.fed.v1.inflation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFedV1InflationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1.inflation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFedV1InflationExpectationsKey(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
) {
  return ['fed', '/fed/v1/inflation-expectations', args] as const
}

export function useGetFedV1InflationExpectations<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1InflationExpectationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['inflation-expectations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFedV1InflationExpectations<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1InflationExpectationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['inflation-expectations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFedV1LaborMarketKey(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
) {
  return ['fed', '/fed/v1/labor-market', args] as const
}

export function useGetFedV1LaborMarket<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1LaborMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['labor-market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFedV1LaborMarket<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1LaborMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['labor-market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFedV1TreasuryYieldsKey(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
) {
  return ['fed', '/fed/v1/treasury-yields', args] as const
}

export function useGetFedV1TreasuryYields<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1TreasuryYieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['treasury-yields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFedV1TreasuryYields<TError = unknown>(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFedV1TreasuryYieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fed.v1['treasury-yields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetForexV1ExchangesKey(
  args: InferRequestType<typeof client.forex.v1.exchanges.$get>,
) {
  return ['forex', '/forex/v1/exchanges', args] as const
}

export function useGetForexV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.forex.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForexV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forex.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForexV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.forex.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForexV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forex.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1AggsTickerKey(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/aggs/:ticker', args] as const
}

export function useGetFuturesV1AggsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1AggsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.aggs[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1AggsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1AggsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.aggs[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1ContractsKey(
  args: InferRequestType<typeof client.futures.v1.contracts.$get>,
) {
  return ['futures', '/futures/v1/contracts', args] as const
}

export function useGetFuturesV1Contracts<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1Contracts<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1ExchangesKey(
  args: InferRequestType<typeof client.futures.v1.exchanges.$get>,
) {
  return ['futures', '/futures/v1/exchanges', args] as const
}

export function useGetFuturesV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1MarketStatusKey(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
) {
  return ['futures', '/futures/v1/market-status', args] as const
}

export function useGetFuturesV1MarketStatus<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1MarketStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1['market-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1MarketStatus<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1MarketStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1['market-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1ProductsKey(
  args: InferRequestType<typeof client.futures.v1.products.$get>,
) {
  return ['futures', '/futures/v1/products', args] as const
}

export function useGetFuturesV1Products<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1Products<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1ProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1QuotesTickerKey(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/quotes/:ticker', args] as const
}

export function useGetFuturesV1QuotesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1QuotesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.quotes[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1QuotesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1QuotesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.quotes[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1SchedulesKey(
  args: InferRequestType<typeof client.futures.v1.schedules.$get>,
) {
  return ['futures', '/futures/v1/schedules', args] as const
}

export function useGetFuturesV1Schedules<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1SchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1Schedules<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1SchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1SnapshotKey(
  args: InferRequestType<typeof client.futures.v1.snapshot.$get>,
) {
  return ['futures', '/futures/v1/snapshot', args] as const
}

export function useGetFuturesV1Snapshot<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1SnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1Snapshot<TError = unknown>(
  args: InferRequestType<typeof client.futures.v1.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1SnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFuturesV1TradesTickerKey(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/trades/:ticker', args] as const
}

export function useGetFuturesV1TradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1TradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFuturesV1TradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFuturesV1TradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.futures.v1.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1AdminMessagesKey(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
) {
  return ['options', '/options/v1/admin-messages', args] as const
}

export function useGetOptionsV1AdminMessages<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AdminMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['admin-messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1AdminMessages<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AdminMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['admin-messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1AnalyticsKey(
  args: InferRequestType<typeof client.options.v1.analytics.$get>,
) {
  return ['options', '/options/v1/analytics', args] as const
}

export function useGetOptionsV1Analytics<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1Analytics<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1AnalyticsExpirationKey(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
) {
  return ['options', '/options/v1/analytics/expiration', args] as const
}

export function useGetOptionsV1AnalyticsExpiration<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsExpirationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.expiration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1AnalyticsExpiration<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsExpirationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.expiration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1AnalyticsStrikeKey(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
) {
  return ['options', '/options/v1/analytics/strike', args] as const
}

export function useGetOptionsV1AnalyticsStrike<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsStrikeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.strike.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1AnalyticsStrike<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsStrikeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.strike.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1AnalyticsUnderlyingKey(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
) {
  return ['options', '/options/v1/analytics/underlying', args] as const
}

export function useGetOptionsV1AnalyticsUnderlying<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsUnderlyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.underlying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1AnalyticsUnderlying<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1AnalyticsUnderlyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.analytics.underlying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1ExchangesKey(
  args: InferRequestType<typeof client.options.v1.exchanges.$get>,
) {
  return ['options', '/options/v1/exchanges', args] as const
}

export function useGetOptionsV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.options.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1OpenInterestKey(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
) {
  return ['options', '/options/v1/open-interest', args] as const
}

export function useGetOptionsV1OpenInterest<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1OpenInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['open-interest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1OpenInterest<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1OpenInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['open-interest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1OpenInterestUnderlyingKey(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
) {
  return ['options', '/options/v1/open-interest/underlying', args] as const
}

export function useGetOptionsV1OpenInterestUnderlying<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1OpenInterestUnderlyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.options.v1['open-interest'].underlying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1OpenInterestUnderlying<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1OpenInterestUnderlyingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.options.v1['open-interest'].underlying.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV1UnusualTradesKey(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
) {
  return ['options', '/options/v1/unusual-trades', args] as const
}

export function useGetOptionsV1UnusualTrades<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1UnusualTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['unusual-trades'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV1UnusualTrades<TError = unknown>(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV1UnusualTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v1['unusual-trades'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV3QuotesTickerKey(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
) {
  return ['options', '/options/v3/quotes/:ticker', args] as const
}

export function useGetOptionsV3QuotesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV3QuotesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v3.quotes[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV3QuotesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV3QuotesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v3.quotes[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOptionsV3TradesTickerKey(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
) {
  return ['options', '/options/v3/trades/:ticker', args] as const
}

export function useGetOptionsV3TradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV3TradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v3.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptionsV3TradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOptionsV3TradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.options.v3.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksDevTradesTickerKey(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
) {
  return ['stocks', '/stocks/dev/trades/:ticker', args] as const
}

export function useGetStocksDevTradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksDevTradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.dev.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksDevTradesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksDevTradesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.dev.trades[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilings10KVXSectionsKey(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
) {
  return ['stocks', '/stocks/filings/10-K/vX/sections', args] as const
}

export function useGetStocksFilings10KVXSections<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings10KVXSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['10-K'].vX.sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilings10KVXSections<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings10KVXSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['10-K'].vX.sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilings10KVX0SectionsKey(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
) {
  return ['stocks', '/stocks/filings/10-K/vX_0/sections', args] as const
}

export function useGetStocksFilings10KVX0Sections<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings10KVX0SectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['10-K'].vX_0.sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilings10KVX0Sections<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings10KVX0SectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['10-K'].vX_0.sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilings8KVXDisclosuresKey(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
) {
  return ['stocks', '/stocks/filings/8-K/vX/disclosures', args] as const
}

export function useGetStocksFilings8KVXDisclosures<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings8KVXDisclosuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['8-K'].vX.disclosures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilings8KVXDisclosures<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings8KVXDisclosuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.filings['8-K'].vX.disclosures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilings8KVXTextKey(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
) {
  return ['stocks', '/stocks/filings/8-K/vX/text', args] as const
}

export function useGetStocksFilings8KVXText<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings8KVXTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings['8-K'].vX.text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilings8KVXText<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilings8KVXTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings['8-K'].vX.text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVX13FKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/13-F', args] as const
}

export function useGetStocksFilingsVX13F<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVX13FKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['13-F'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVX13F<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVX13FKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['13-F'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVXForm3Key(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-3', args] as const
}

export function useGetStocksFilingsVXForm3<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVXForm3<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVXForm4Key(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-4', args] as const
}

export function useGetStocksFilingsVXForm4<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVXForm4<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVXForm5Key(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-5', args] as const
}

export function useGetStocksFilingsVXForm5<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-5'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVXForm5<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXForm5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['form-5'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVXIndexKey(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
) {
  return ['stocks', '/stocks/filings/vX/index', args] as const
}

export function useGetStocksFilingsVXIndex<TError = unknown>(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVXIndex<TError = unknown>(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFilingsVXRiskFactorsKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/risk-factors', args] as const
}

export function useGetStocksFilingsVXRiskFactors<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXRiskFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['risk-factors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFilingsVXRiskFactors<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFilingsVXRiskFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.filings.vX['risk-factors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFinancialsV1BalanceSheetsKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/balance-sheets', args] as const
}

export function useGetStocksFinancialsV1BalanceSheets<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1BalanceSheetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.financials.v1['balance-sheets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFinancialsV1BalanceSheets<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1BalanceSheetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.financials.v1['balance-sheets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFinancialsV1CashFlowStatementsKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/cash-flow-statements', args] as const
}

export function useGetStocksFinancialsV1CashFlowStatements<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
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
        ? getGetStocksFinancialsV1CashFlowStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stocks.financials.v1['cash-flow-statements'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFinancialsV1CashFlowStatements<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
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
        ? getGetStocksFinancialsV1CashFlowStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.stocks.financials.v1['cash-flow-statements'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFinancialsV1IncomeStatementsKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/income-statements', args] as const
}

export function useGetStocksFinancialsV1IncomeStatements<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1IncomeStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.financials.v1['income-statements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFinancialsV1IncomeStatements<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1IncomeStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.financials.v1['income-statements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksFinancialsV1RatiosKey(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
) {
  return ['stocks', '/stocks/financials/v1/ratios', args] as const
}

export function useGetStocksFinancialsV1Ratios<TError = unknown>(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1RatiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.financials.v1.ratios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksFinancialsV1Ratios<TError = unknown>(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksFinancialsV1RatiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.financials.v1.ratios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksInsidersVXActivityKey(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
) {
  return ['stocks', '/stocks/insiders/vX/activity', args] as const
}

export function useGetStocksInsidersVXActivity<TError = unknown>(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksInsidersVXActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.insiders.vX.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksInsidersVXActivity<TError = unknown>(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksInsidersVXActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.insiders.vX.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksInsidersVXHoldingsKey(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
) {
  return ['stocks', '/stocks/insiders/vX/holdings', args] as const
}

export function useGetStocksInsidersVXHoldings<TError = unknown>(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksInsidersVXHoldingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.insiders.vX.holdings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksInsidersVXHoldings<TError = unknown>(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksInsidersVXHoldingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.insiders.vX.holdings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksTaxonomiesVXDisclosuresKey(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
) {
  return ['stocks', '/stocks/taxonomies/vX/disclosures', args] as const
}

export function useGetStocksTaxonomiesVXDisclosures<TError = unknown>(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksTaxonomiesVXDisclosuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.taxonomies.vX.disclosures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksTaxonomiesVXDisclosures<TError = unknown>(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksTaxonomiesVXDisclosuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.taxonomies.vX.disclosures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksTaxonomiesVXRiskFactorsKey(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
) {
  return ['stocks', '/stocks/taxonomies/vX/risk-factors', args] as const
}

export function useGetStocksTaxonomiesVXRiskFactors<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksTaxonomiesVXRiskFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.taxonomies.vX['risk-factors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksTaxonomiesVXRiskFactors<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksTaxonomiesVXRiskFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stocks.taxonomies.vX['risk-factors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksV1DividendsKey(
  args: InferRequestType<typeof client.stocks.v1.dividends.$get>,
) {
  return ['stocks', '/stocks/v1/dividends', args] as const
}

export function useGetStocksV1Dividends<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1DividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksV1Dividends<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1DividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksV1ExchangesKey(
  args: InferRequestType<typeof client.stocks.v1.exchanges.$get>,
) {
  return ['stocks', '/stocks/v1/exchanges', args] as const
}

export function useGetStocksV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksV1Exchanges<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksV1ShortInterestKey(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
) {
  return ['stocks', '/stocks/v1/short-interest', args] as const
}

export function useGetStocksV1ShortInterest<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ShortInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1['short-interest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksV1ShortInterest<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ShortInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1['short-interest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksV1ShortVolumeKey(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
) {
  return ['stocks', '/stocks/v1/short-volume', args] as const
}

export function useGetStocksV1ShortVolume<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ShortVolumeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1['short-volume'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksV1ShortVolume<TError = unknown>(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStocksV1ShortVolumeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1['short-volume'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksV1SplitsKey(
  args: InferRequestType<typeof client.stocks.v1.splits.$get>,
) {
  return ['stocks', '/stocks/v1/splits', args] as const
}

export function useGetStocksV1Splits<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksV1SplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksV1Splits<TError = unknown>(
  args: InferRequestType<typeof client.stocks.v1.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksV1SplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.v1.splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStocksVXFloatKey(args: InferRequestType<typeof client.stocks.vX.float.$get>) {
  return ['stocks', '/stocks/vX/float', args] as const
}

export function useGetStocksVXFloat<TError = unknown>(
  args: InferRequestType<typeof client.stocks.vX.float.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksVXFloatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.vX.float.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStocksVXFloat<TError = unknown>(
  args: InferRequestType<typeof client.stocks.vX.float.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksVXFloatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stocks.vX.float.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTmxV1CorporateEventsKey(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
) {
  return ['tmx', '/tmx/v1/corporate-events', args] as const
}

export function useGetTmxV1CorporateEvents<TError = unknown>(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTmxV1CorporateEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tmx.v1['corporate-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTmxV1CorporateEvents<TError = unknown>(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTmxV1CorporateEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tmx.v1['corporate-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConversionFromToKey(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/conversion/:from/:to', args] as const
}

export function useGetV1ConversionFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversionFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.conversion[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConversionFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversionFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.conversion[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1HistoricCryptoFromToDateKey(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
) {
  return ['v1', '/v1/historic/crypto/:from/:to/:date', args] as const
}

export function useGetV1HistoricCryptoFromToDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoricCryptoFromToDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.historic.crypto[':from'][':to'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HistoricCryptoFromToDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoricCryptoFromToDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.historic.crypto[':from'][':to'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1HistoricForexFromToDateKey(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
) {
  return ['v1', '/v1/historic/forex/:from/:to/:date', args] as const
}

export function useGetV1HistoricForexFromToDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoricForexFromToDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.historic.forex[':from'][':to'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HistoricForexFromToDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HistoricForexFromToDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.historic.forex[':from'][':to'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsEmaCryptoTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:cryptoTicker', args] as const
}

export function useGetV1IndicatorsEmaCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsEmaCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsEmaFxTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:fxTicker', args] as const
}

export function useGetV1IndicatorsEmaFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.ema[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsEmaFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.ema[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsEmaIndicesTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:indicesTicker', args] as const
}

export function useGetV1IndicatorsEmaIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsEmaIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsEmaOptionsTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:optionsTicker', args] as const
}

export function useGetV1IndicatorsEmaOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsEmaOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.ema[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsEmaStockTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:stockTicker', args] as const
}

export function useGetV1IndicatorsEmaStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.ema[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsEmaStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsEmaStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.ema[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsMacdCryptoTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:cryptoTicker', args] as const
}

export function useGetV1IndicatorsMacdCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsMacdCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsMacdFxTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:fxTicker', args] as const
}

export function useGetV1IndicatorsMacdFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.macd[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsMacdFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.macd[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsMacdIndicesTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:indicesTicker', args] as const
}

export function useGetV1IndicatorsMacdIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsMacdIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsMacdOptionsTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:optionsTicker', args] as const
}

export function useGetV1IndicatorsMacdOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsMacdOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsMacdStockTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:stockTicker', args] as const
}

export function useGetV1IndicatorsMacdStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsMacdStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsMacdStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.macd[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsRsiCryptoTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:cryptoTicker', args] as const
}

export function useGetV1IndicatorsRsiCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsRsiCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsRsiFxTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:fxTicker', args] as const
}

export function useGetV1IndicatorsRsiFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.rsi[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsRsiFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.rsi[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsRsiIndicesTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:indicesTicker', args] as const
}

export function useGetV1IndicatorsRsiIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsRsiIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsRsiOptionsTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:optionsTicker', args] as const
}

export function useGetV1IndicatorsRsiOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsRsiOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.rsi[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsRsiStockTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:stockTicker', args] as const
}

export function useGetV1IndicatorsRsiStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.rsi[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsRsiStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsRsiStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.rsi[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsSmaCryptoTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:cryptoTicker', args] as const
}

export function useGetV1IndicatorsSmaCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsSmaCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsSmaFxTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:fxTicker', args] as const
}

export function useGetV1IndicatorsSmaFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.sma[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsSmaFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.sma[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsSmaIndicesTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:indicesTicker', args] as const
}

export function useGetV1IndicatorsSmaIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsSmaIndicesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaIndicesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':indicesTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsSmaOptionsTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:optionsTicker', args] as const
}

export function useGetV1IndicatorsSmaOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsSmaOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.indicators.sma[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IndicatorsSmaStockTickerKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:stockTicker', args] as const
}

export function useGetV1IndicatorsSmaStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.sma[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IndicatorsSmaStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IndicatorsSmaStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.indicators.sma[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LastCryptoFromToKey(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/last/crypto/:from/:to', args] as const
}

export function useGetV1LastCryptoFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LastCryptoFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.last.crypto[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LastCryptoFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LastCryptoFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.last.crypto[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LastQuoteCurrenciesFromToKey(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/last_quote/currencies/:from/:to', args] as const
}

export function useGetV1LastQuoteCurrenciesFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LastQuoteCurrenciesFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.last_quote.currencies[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LastQuoteCurrenciesFromTo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LastQuoteCurrenciesFromToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.last_quote.currencies[':from'][':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MarketstatusNowKey() {
  return ['v1', '/v1/marketstatus/now'] as const
}

export function useGetV1MarketstatusNow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MarketstatusNowKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.marketstatus.now.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MarketstatusNow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MarketstatusNowKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.marketstatus.now.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MarketstatusUpcomingKey() {
  return ['v1', '/v1/marketstatus/upcoming'] as const
}

export function useGetV1MarketstatusUpcoming<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
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
        ? getGetV1MarketstatusUpcomingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.marketstatus.upcoming.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MarketstatusUpcoming<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
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
        ? getGetV1MarketstatusUpcomingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.marketstatus.upcoming.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OpenCloseCryptoFromToDateKey(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
) {
  return ['v1', '/v1/open-close/crypto/:from/:to/:date', args] as const
}

export function useGetV1OpenCloseCryptoFromToDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
        ? getGetV1OpenCloseCryptoFromToDateKey(args)
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
                (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
          client.v1['open-close'].crypto[':from'][':to'][':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OpenCloseCryptoFromToDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
        ? getGetV1OpenCloseCryptoFromToDateKey(args)
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
                (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
          client.v1['open-close'].crypto[':from'][':to'][':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OpenCloseIndicesTickerDateKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:indicesTicker/:date', args] as const
}

export function useGetV1OpenCloseIndicesTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseIndicesTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':indicesTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OpenCloseIndicesTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseIndicesTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':indicesTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OpenCloseOptionsTickerDateKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:optionsTicker/:date', args] as const
}

export function useGetV1OpenCloseOptionsTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseOptionsTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':optionsTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OpenCloseOptionsTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseOptionsTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':optionsTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OpenCloseStocksTickerDateKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:stocksTicker/:date', args] as const
}

export function useGetV1OpenCloseStocksTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseStocksTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':stocksTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OpenCloseStocksTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OpenCloseStocksTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['open-close'][':stocksTicker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReferenceIposKey(
  args: InferRequestType<typeof client.v1.reference.ipos.$get>,
) {
  return ['v1', '/v1/reference/ipos', args] as const
}

export function useGetV1ReferenceIpos<TError = unknown>(
  args: InferRequestType<typeof client.v1.reference.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceIposKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reference.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReferenceIpos<TError = unknown>(
  args: InferRequestType<typeof client.v1.reference.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceIposKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reference.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReferenceSecFilingsKey(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
) {
  return ['v1', '/v1/reference/sec/filings', args] as const
}

export function useGetV1ReferenceSecFilings<TError = unknown>(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceSecFilingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reference.sec.filings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReferenceSecFilings<TError = unknown>(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceSecFilingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reference.sec.filings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReferenceSecFilingsFilingIdKey(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id', args] as const
}

export function useGetV1ReferenceSecFilingsFilingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceSecFilingsFilingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reference.sec.filings[':filing_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReferenceSecFilingsFilingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ReferenceSecFilingsFilingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reference.sec.filings[':filing_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReferenceSecFilingsFilingIdFilesKey(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files', args] as const
}

export function useGetV1ReferenceSecFilingsFilingIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
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
        ? getGetV1ReferenceSecFilingsFilingIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reference.sec.filings[':filing_id'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReferenceSecFilingsFilingIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
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
        ? getGetV1ReferenceSecFilingsFilingIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reference.sec.filings[':filing_id'].files.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReferenceSecFilingsFilingIdFilesFileIdKey(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files/:file_id', args] as const
}

export function useGetV1ReferenceSecFilingsFilingIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
        ? getGetV1ReferenceSecFilingsFilingIdFilesFileIdKey(args)
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
                (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
          client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReferenceSecFilingsFilingIdFilesFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
        ? getGetV1ReferenceSecFilingsFilingIdFilesFileIdKey(args)
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
                (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
          client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RelatedCompaniesTickerKey(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
) {
  return ['v1', '/v1/related-companies/:ticker', args] as const
}

export function useGetV1RelatedCompaniesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RelatedCompaniesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['related-companies'][':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RelatedCompaniesTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RelatedCompaniesTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['related-companies'][':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsGroupedLocaleGlobalMarketCryptoDateKey(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/crypto/:date', args] as const
}

export function useGetV2AggsGroupedLocaleGlobalMarketCryptoDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
        ? getGetV2AggsGroupedLocaleGlobalMarketCryptoDateKey(args)
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
                (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
          client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsGroupedLocaleGlobalMarketCryptoDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
        ? getGetV2AggsGroupedLocaleGlobalMarketCryptoDateKey(args)
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
                (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
          client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsGroupedLocaleGlobalMarketFxDateKey(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/fx/:date', args] as const
}

export function useGetV2AggsGroupedLocaleGlobalMarketFxDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
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
        ? getGetV2AggsGroupedLocaleGlobalMarketFxDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsGroupedLocaleGlobalMarketFxDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
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
        ? getGetV2AggsGroupedLocaleGlobalMarketFxDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsGroupedLocaleUsMarketStocksDateKey(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
) {
  return ['v2', '/v2/aggs/grouped/locale/us/market/stocks/:date', args] as const
}

export function useGetV2AggsGroupedLocaleUsMarketStocksDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
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
        ? getGetV2AggsGroupedLocaleUsMarketStocksDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsGroupedLocaleUsMarketStocksDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
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
        ? getGetV2AggsGroupedLocaleUsMarketStocksDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerCryptoTickerPrevKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:cryptoTicker/prev', args] as const
}

export function useGetV2AggsTickerCryptoTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerCryptoTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':cryptoTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerCryptoTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerCryptoTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':cryptoTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:cryptoTicker/range/:multiplier/:timespan/:from/:to',
    args,
  ] as const
}

export function useGetV2AggsTickerCryptoTickerRangeMultiplierTimespanFromTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerCryptoTickerRangeMultiplierTimespanFromTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerForexTickerPrevKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:forexTicker/prev', args] as const
}

export function useGetV2AggsTickerForexTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerForexTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':forexTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerForexTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerForexTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':forexTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerForexTickerRangeMultiplierTimespanFromToKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return ['v2', '/v2/aggs/ticker/:forexTicker/range/:multiplier/:timespan/:from/:to', args] as const
}

export function useGetV2AggsTickerForexTickerRangeMultiplierTimespanFromTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerForexTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerForexTickerRangeMultiplierTimespanFromTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerForexTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerIndicesTickerPrevKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:indicesTicker/prev', args] as const
}

export function useGetV2AggsTickerIndicesTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerIndicesTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':indicesTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerIndicesTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerIndicesTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':indicesTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:indicesTicker/range/:multiplier/:timespan/:from/:to',
    args,
  ] as const
}

export function useGetV2AggsTickerIndicesTickerRangeMultiplierTimespanFromTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerIndicesTickerRangeMultiplierTimespanFromTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerOptionsTickerPrevKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:optionsTicker/prev', args] as const
}

export function useGetV2AggsTickerOptionsTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerOptionsTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':optionsTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerOptionsTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerOptionsTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':optionsTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:optionsTicker/range/:multiplier/:timespan/:from/:to',
    args,
  ] as const
}

export function useGetV2AggsTickerOptionsTickerRangeMultiplierTimespanFromTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerOptionsTickerRangeMultiplierTimespanFromTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerStocksTickerPrevKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:stocksTicker/prev', args] as const
}

export function useGetV2AggsTickerStocksTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerStocksTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':stocksTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerStocksTickerPrev<TError = unknown>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AggsTickerStocksTickerPrevKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.aggs.ticker[':stocksTicker'].prev.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AggsTickerStocksTickerRangeMultiplierTimespanFromToKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:stocksTicker/range/:multiplier/:timespan/:from/:to',
    args,
  ] as const
}

export function useGetV2AggsTickerStocksTickerRangeMultiplierTimespanFromTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerStocksTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AggsTickerStocksTickerRangeMultiplierTimespanFromTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
        ? getGetV2AggsTickerStocksTickerRangeMultiplierTimespanFromToKey(args)
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
                (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
          client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2LastNbboStocksTickerKey(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
) {
  return ['v2', '/v2/last/nbbo/:stocksTicker', args] as const
}

export function useGetV2LastNbboStocksTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastNbboStocksTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.nbbo[':stocksTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LastNbboStocksTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastNbboStocksTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.nbbo[':stocksTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LastTradeOptionsTickerKey(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
) {
  return ['v2', '/v2/last/trade/:optionsTicker', args] as const
}

export function useGetV2LastTradeOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastTradeOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.trade[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LastTradeOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastTradeOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.trade[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LastTradeStocksTickerKey(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
) {
  return ['v2', '/v2/last/trade/:stocksTicker', args] as const
}

export function useGetV2LastTradeStocksTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastTradeStocksTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.trade[':stocksTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LastTradeStocksTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LastTradeStocksTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.last.trade[':stocksTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ReferenceNewsKey(
  args: InferRequestType<typeof client.v2.reference.news.$get>,
) {
  return ['v2', '/v2/reference/news', args] as const
}

export function useGetV2ReferenceNews<TError = unknown>(
  args: InferRequestType<typeof client.v2.reference.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ReferenceNewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reference.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReferenceNews<TError = unknown>(
  args: InferRequestType<typeof client.v2.reference.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ReferenceNewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reference.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsCryptoTickersKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsCryptoTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.global.markets.crypto.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsCryptoTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.global.markets.crypto.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsCryptoTickersTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsCryptoTickersTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker/book', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBook<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBook<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsCryptoDirectionKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/:direction', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsCryptoDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoDirectionKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsCryptoDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsCryptoDirectionKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
          client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsForexTickersKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsForexTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleGlobalMarketsForexTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.global.markets.forex.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsForexTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleGlobalMarketsForexTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.global.markets.forex.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsForexTickersTickerKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers/:ticker', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsForexTickersTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsForexTickersTickerKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
          client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsForexTickersTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsForexTickersTickerKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
          client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleGlobalMarketsForexDirectionKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/:direction', args] as const
}

export function useGetV2SnapshotLocaleGlobalMarketsForexDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsForexDirectionKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
          client.v2.snapshot.locale.global.markets.forex[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleGlobalMarketsForexDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
        ? getGetV2SnapshotLocaleGlobalMarketsForexDirectionKey(args)
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
                (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
          client.v2.snapshot.locale.global.markets.forex[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleUsMarketsStocksTickersKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/tickers', args] as const
}

export function useGetV2SnapshotLocaleUsMarketsStocksTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleUsMarketsStocksTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.us.markets.stocks.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleUsMarketsStocksTickers<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SnapshotLocaleUsMarketsStocksTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.us.markets.stocks.tickers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleUsMarketsStocksTickersStocksTickerKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/tickers/:stocksTicker', args] as const
}

export function useGetV2SnapshotLocaleUsMarketsStocksTickersStocksTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
        ? getGetV2SnapshotLocaleUsMarketsStocksTickersStocksTickerKey(args)
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
                (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
          client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleUsMarketsStocksTickersStocksTicker<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
        ? getGetV2SnapshotLocaleUsMarketsStocksTickersStocksTickerKey(args)
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
                (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
          client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotLocaleUsMarketsStocksDirectionKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/:direction', args] as const
}

export function useGetV2SnapshotLocaleUsMarketsStocksDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
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
        ? getGetV2SnapshotLocaleUsMarketsStocksDirectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotLocaleUsMarketsStocksDirection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
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
        ? getGetV2SnapshotLocaleUsMarketsStocksDirectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TicksStocksNbboTickerDateKey(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
) {
  return ['v2', '/v2/ticks/stocks/nbbo/:ticker/:date', args] as const
}

export function useGetV2TicksStocksNbboTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TicksStocksNbboTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TicksStocksNbboTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TicksStocksNbboTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TicksStocksTradesTickerDateKey(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
) {
  return ['v2', '/v2/ticks/stocks/trades/:ticker/:date', args] as const
}

export function useGetV2TicksStocksTradesTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TicksStocksTradesTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.ticks.stocks.trades[':ticker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TicksStocksTradesTickerDate<TError = unknown>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TicksStocksTradesTickerDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.ticks.stocks.trades[':ticker'][':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3QuotesFxTickerKey(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:fxTicker', args] as const
}

export function useGetV3QuotesFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3QuotesFxTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesFxTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':fxTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3QuotesOptionsTickerKey(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:optionsTicker', args] as const
}

export function useGetV3QuotesOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3QuotesOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3QuotesStockTickerKey(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:stockTicker', args] as const
}

export function useGetV3QuotesStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3QuotesStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3QuotesStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.quotes[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceConditionsKey(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
) {
  return ['v3', '/v3/reference/conditions', args] as const
}

export function useGetV3ReferenceConditions<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.conditions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceConditions<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceConditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.conditions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceDividendsKey(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
) {
  return ['v3', '/v3/reference/dividends', args] as const
}

export function useGetV3ReferenceDividends<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceDividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceDividends<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceDividendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceExchangesKey(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
) {
  return ['v3', '/v3/reference/exchanges', args] as const
}

export function useGetV3ReferenceExchanges<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceExchanges<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceOptionsContractsKey(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
) {
  return ['v3', '/v3/reference/options/contracts', args] as const
}

export function useGetV3ReferenceOptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceOptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceOptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceOptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceOptionsContractsOptionsTickerKey(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
) {
  return ['v3', '/v3/reference/options/contracts/:options_ticker', args] as const
}

export function useGetV3ReferenceOptionsContractsOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
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
        ? getGetV3ReferenceOptionsContractsOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.reference.options.contracts[':options_ticker'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceOptionsContractsOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
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
        ? getGetV3ReferenceOptionsContractsOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.reference.options.contracts[':options_ticker'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceSplitsKey(
  args: InferRequestType<typeof client.v3.reference.splits.$get>,
) {
  return ['v3', '/v3/reference/splits', args] as const
}

export function useGetV3ReferenceSplits<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceSplits<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceTickersKey(
  args: InferRequestType<typeof client.v3.reference.tickers.$get>,
) {
  return ['v3', '/v3/reference/tickers', args] as const
}

export function useGetV3ReferenceTickers<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceTickers<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.tickers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceTickersTypesKey(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
) {
  return ['v3', '/v3/reference/tickers/types', args] as const
}

export function useGetV3ReferenceTickersTypes<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceTickersTypes<TError = unknown>(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ReferenceTickersTickerKey(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
) {
  return ['v3', '/v3/reference/tickers/:ticker', args] as const
}

export function useGetV3ReferenceTickersTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ReferenceTickersTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3ReferenceTickersTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.reference.tickers[':ticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SnapshotKey(args: InferRequestType<typeof client.v3.snapshot.$get>) {
  return ['v3', '/v3/snapshot', args] as const
}

export function useGetV3Snapshot<TError = unknown>(
  args: InferRequestType<typeof client.v3.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SnapshotKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Snapshot<TError = unknown>(
  args: InferRequestType<typeof client.v3.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SnapshotKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SnapshotIndicesKey(
  args: InferRequestType<typeof client.v3.snapshot.indices.$get>,
) {
  return ['v3', '/v3/snapshot/indices', args] as const
}

export function useGetV3SnapshotIndices<TError = unknown>(
  args: InferRequestType<typeof client.v3.snapshot.indices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SnapshotIndicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.snapshot.indices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SnapshotIndices<TError = unknown>(
  args: InferRequestType<typeof client.v3.snapshot.indices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SnapshotIndicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.snapshot.indices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SnapshotOptionsUnderlyingAssetKey(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset', args] as const
}

export function useGetV3SnapshotOptionsUnderlyingAsset<TError = unknown>(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SnapshotOptionsUnderlyingAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.snapshot.options[':underlyingAsset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SnapshotOptionsUnderlyingAsset<TError = unknown>(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SnapshotOptionsUnderlyingAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.snapshot.options[':underlyingAsset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SnapshotOptionsUnderlyingAssetOptionContractKey(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset/:optionContract', args] as const
}

export function useGetV3SnapshotOptionsUnderlyingAssetOptionContract<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
        ? getGetV3SnapshotOptionsUnderlyingAssetOptionContractKey(args)
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
                (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
          client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SnapshotOptionsUnderlyingAssetOptionContract<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
        ? getGetV3SnapshotOptionsUnderlyingAssetOptionContractKey(args)
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
                (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
          client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3TradesCryptoTickerKey(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:cryptoTicker', args] as const
}

export function useGetV3TradesCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TradesCryptoTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesCryptoTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':cryptoTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3TradesOptionsTickerKey(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:optionsTicker', args] as const
}

export function useGetV3TradesOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TradesOptionsTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesOptionsTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':optionsTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3TradesStockTickerKey(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:stockTicker', args] as const
}

export function useGetV3TradesStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TradesStockTicker<TError = unknown>(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3TradesStockTickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.trades[':stockTicker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVXReferenceIposKey(
  args: InferRequestType<typeof client.vX.reference.ipos.$get>,
) {
  return ['vX', '/vX/reference/ipos', args] as const
}

export function useGetVXReferenceIpos<TError = unknown>(
  args: InferRequestType<typeof client.vX.reference.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVXReferenceIposKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vX.reference.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVXReferenceIpos<TError = unknown>(
  args: InferRequestType<typeof client.vX.reference.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVXReferenceIposKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vX.reference.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVXReferenceTickersIdEventsKey(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
) {
  return ['vX', '/vX/reference/tickers/:id/events', args] as const
}

export function useGetVXReferenceTickersIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVXReferenceTickersIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vX.reference.tickers[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVXReferenceTickersIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVXReferenceTickersIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vX.reference.tickers[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

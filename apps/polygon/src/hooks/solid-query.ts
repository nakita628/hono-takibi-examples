import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getBenzingaV1AnalystInsightsQueryKey(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/analyst-insights', args] as const
}

export function getBenzingaV1AnalystInsightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1AnalystInsightsQueryKey>
  >({
    queryKey: getBenzingaV1AnalystInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1['analyst-insights'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBenzingaV1AnalystInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1AnalystInsightsQueryKey>
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
      ...getBenzingaV1AnalystInsightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBenzingaV1AnalystsQueryKey(
  args: InferRequestType<typeof client.benzinga.v1.analysts.$get>,
) {
  return ['benzinga', '/benzinga/v1/analysts', args] as const
}

export function getBenzingaV1AnalystsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v1.analysts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1AnalystsQueryKey>
  >({
    queryKey: getBenzingaV1AnalystsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1.analysts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV1Analysts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v1.analysts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1AnalystsQueryKey>
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
    return { ...getBenzingaV1AnalystsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBenzingaV1BullsBearsSayQueryKey(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/bulls-bears-say', args] as const
}

export function getBenzingaV1BullsBearsSayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1BullsBearsSayQueryKey>
  >({
    queryKey: getBenzingaV1BullsBearsSayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1['bulls-bears-say'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBenzingaV1BullsBearsSay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1BullsBearsSayQueryKey>
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
      ...getBenzingaV1BullsBearsSayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBenzingaV1ConsensusRatingsTickerQueryKey(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
) {
  return ['benzinga', '/benzinga/v1/consensus-ratings/:ticker', args] as const
}

export function getBenzingaV1ConsensusRatingsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1ConsensusRatingsTickerQueryKey>
  >({
    queryKey: getBenzingaV1ConsensusRatingsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1['consensus-ratings'][':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBenzingaV1ConsensusRatingsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1ConsensusRatingsTickerQueryKey>
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
      ...getBenzingaV1ConsensusRatingsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBenzingaV1EarningsQueryKey(
  args: InferRequestType<typeof client.benzinga.v1.earnings.$get>,
) {
  return ['benzinga', '/benzinga/v1/earnings', args] as const
}

export function getBenzingaV1EarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v1.earnings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1EarningsQueryKey>
  >({
    queryKey: getBenzingaV1EarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1.earnings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV1Earnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v1.earnings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1EarningsQueryKey>
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
    return { ...getBenzingaV1EarningsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBenzingaV1FirmsQueryKey(
  args: InferRequestType<typeof client.benzinga.v1.firms.$get>,
) {
  return ['benzinga', '/benzinga/v1/firms', args] as const
}

export function getBenzingaV1FirmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v1.firms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1FirmsQueryKey>
  >({
    queryKey: getBenzingaV1FirmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1.firms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV1Firms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v1.firms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1FirmsQueryKey>
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
    return { ...getBenzingaV1FirmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBenzingaV1GuidanceQueryKey(
  args: InferRequestType<typeof client.benzinga.v1.guidance.$get>,
) {
  return ['benzinga', '/benzinga/v1/guidance', args] as const
}

export function getBenzingaV1GuidanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v1.guidance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1GuidanceQueryKey>
  >({
    queryKey: getBenzingaV1GuidanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1.guidance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV1Guidance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v1.guidance.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1GuidanceQueryKey>
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
    return { ...getBenzingaV1GuidanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBenzingaV1RatingsQueryKey(
  args: InferRequestType<typeof client.benzinga.v1.ratings.$get>,
) {
  return ['benzinga', '/benzinga/v1/ratings', args] as const
}

export function getBenzingaV1RatingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v1.ratings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1RatingsQueryKey>
  >({
    queryKey: getBenzingaV1RatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v1.ratings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV1Ratings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v1.ratings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV1RatingsQueryKey>
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
    return { ...getBenzingaV1RatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBenzingaV2NewsQueryKey(
  args: InferRequestType<typeof client.benzinga.v2.news.$get>,
) {
  return ['benzinga', '/benzinga/v2/news', args] as const
}

export function getBenzingaV2NewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benzinga.v2.news.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV2NewsQueryKey>
  >({
    queryKey: getBenzingaV2NewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benzinga.v2.news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBenzingaV2News<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.benzinga.v2.news.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBenzingaV2NewsQueryKey>
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
    return { ...getBenzingaV2NewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConsumerSpendingEuV1MerchantAggregatesQueryKey(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
) {
  return ['consumer-spending', '/consumer-spending/eu/v1/merchant-aggregates', args] as const
}

export function getConsumerSpendingEuV1MerchantAggregatesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConsumerSpendingEuV1MerchantAggregatesQueryKey>
  >({
    queryKey: getConsumerSpendingEuV1MerchantAggregatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['consumer-spending'].eu.v1['merchant-aggregates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerSpendingEuV1MerchantAggregates<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerSpendingEuV1MerchantAggregatesQueryKey>
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
      ...getConsumerSpendingEuV1MerchantAggregatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConsumerSpendingEuV1MerchantHierarchyQueryKey(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
) {
  return ['consumer-spending', '/consumer-spending/eu/v1/merchant-hierarchy', args] as const
}

export function getConsumerSpendingEuV1MerchantHierarchyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConsumerSpendingEuV1MerchantHierarchyQueryKey>
  >({
    queryKey: getConsumerSpendingEuV1MerchantHierarchyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsumerSpendingEuV1MerchantHierarchy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConsumerSpendingEuV1MerchantHierarchyQueryKey>
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
      ...getConsumerSpendingEuV1MerchantHierarchyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCryptoV1ExchangesQueryKey(
  args: InferRequestType<typeof client.crypto.v1.exchanges.$get>,
) {
  return ['crypto', '/crypto/v1/exchanges', args] as const
}

export function getCryptoV1ExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crypto.v1.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCryptoV1ExchangesQueryKey>
  >({
    queryKey: getCryptoV1ExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crypto.v1.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCryptoV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crypto.v1.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCryptoV1ExchangesQueryKey>
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
    return { ...getCryptoV1ExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEtfGlobalV1AnalyticsQueryKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/analytics', args] as const
}

export function getEtfGlobalV1AnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1AnalyticsQueryKey>
  >({
    queryKey: getEtfGlobalV1AnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['etf-global'].v1.analytics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEtfGlobalV1Analytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEtfGlobalV1AnalyticsQueryKey>
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
      ...getEtfGlobalV1AnalyticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEtfGlobalV1ConstituentsQueryKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/constituents', args] as const
}

export function getEtfGlobalV1ConstituentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1ConstituentsQueryKey>
  >({
    queryKey: getEtfGlobalV1ConstituentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['etf-global'].v1.constituents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEtfGlobalV1Constituents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEtfGlobalV1ConstituentsQueryKey>
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
      ...getEtfGlobalV1ConstituentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEtfGlobalV1FundFlowsQueryKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/fund-flows', args] as const
}

export function getEtfGlobalV1FundFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1FundFlowsQueryKey>
  >({
    queryKey: getEtfGlobalV1FundFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['etf-global'].v1['fund-flows'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEtfGlobalV1FundFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEtfGlobalV1FundFlowsQueryKey>
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
      ...getEtfGlobalV1FundFlowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEtfGlobalV1ProfilesQueryKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/profiles', args] as const
}

export function getEtfGlobalV1ProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1ProfilesQueryKey>
  >({
    queryKey: getEtfGlobalV1ProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['etf-global'].v1.profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEtfGlobalV1Profiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEtfGlobalV1ProfilesQueryKey>
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
    return { ...getEtfGlobalV1ProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEtfGlobalV1TaxonomiesQueryKey(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
) {
  return ['etf-global', '/etf-global/v1/taxonomies', args] as const
}

export function getEtfGlobalV1TaxonomiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1TaxonomiesQueryKey>
  >({
    queryKey: getEtfGlobalV1TaxonomiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['etf-global'].v1.taxonomies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEtfGlobalV1Taxonomies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEtfGlobalV1TaxonomiesQueryKey>
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
      ...getEtfGlobalV1TaxonomiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFedV1FundingConditionsQueryKey(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
) {
  return ['fed', '/fed/v1/funding-conditions', args] as const
}

export function getFedV1FundingConditionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1FundingConditionsQueryKey>
  >({
    queryKey: getFedV1FundingConditionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fed.v1['funding-conditions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFedV1FundingConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFedV1FundingConditionsQueryKey>
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
      ...getFedV1FundingConditionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFedV1InflationQueryKey(
  args: InferRequestType<typeof client.fed.v1.inflation.$get>,
) {
  return ['fed', '/fed/v1/inflation', args] as const
}

export function getFedV1InflationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fed.v1.inflation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1InflationQueryKey>
  >({
    queryKey: getFedV1InflationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fed.v1.inflation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFedV1Inflation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fed.v1.inflation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFedV1InflationQueryKey>
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
    return { ...getFedV1InflationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFedV1InflationExpectationsQueryKey(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
) {
  return ['fed', '/fed/v1/inflation-expectations', args] as const
}

export function getFedV1InflationExpectationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1InflationExpectationsQueryKey>
  >({
    queryKey: getFedV1InflationExpectationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fed.v1['inflation-expectations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFedV1InflationExpectations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFedV1InflationExpectationsQueryKey>
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
      ...getFedV1InflationExpectationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFedV1LaborMarketQueryKey(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
) {
  return ['fed', '/fed/v1/labor-market', args] as const
}

export function getFedV1LaborMarketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1LaborMarketQueryKey>
  >({
    queryKey: getFedV1LaborMarketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fed.v1['labor-market'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFedV1LaborMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFedV1LaborMarketQueryKey>
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
    return { ...getFedV1LaborMarketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFedV1TreasuryYieldsQueryKey(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
) {
  return ['fed', '/fed/v1/treasury-yields', args] as const
}

export function getFedV1TreasuryYieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1TreasuryYieldsQueryKey>
  >({
    queryKey: getFedV1TreasuryYieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fed.v1['treasury-yields'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFedV1TreasuryYields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFedV1TreasuryYieldsQueryKey>
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
    return { ...getFedV1TreasuryYieldsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getForexV1ExchangesQueryKey(
  args: InferRequestType<typeof client.forex.v1.exchanges.$get>,
) {
  return ['forex', '/forex/v1/exchanges', args] as const
}

export function getForexV1ExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.forex.v1.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getForexV1ExchangesQueryKey>
  >({
    queryKey: getForexV1ExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forex.v1.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createForexV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.forex.v1.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getForexV1ExchangesQueryKey>
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
    return { ...getForexV1ExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1AggsTickerQueryKey(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/aggs/:ticker', args] as const
}

export function getFuturesV1AggsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1AggsTickerQueryKey>
  >({
    queryKey: getFuturesV1AggsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.aggs[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFuturesV1AggsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1AggsTickerQueryKey>
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
    return { ...getFuturesV1AggsTickerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1ContractsQueryKey(
  args: InferRequestType<typeof client.futures.v1.contracts.$get>,
) {
  return ['futures', '/futures/v1/contracts', args] as const
}

export function getFuturesV1ContractsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.futures.v1.contracts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ContractsQueryKey>
  >({
    queryKey: getFuturesV1ContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.contracts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFuturesV1Contracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.futures.v1.contracts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1ContractsQueryKey>
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
    return { ...getFuturesV1ContractsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1ExchangesQueryKey(
  args: InferRequestType<typeof client.futures.v1.exchanges.$get>,
) {
  return ['futures', '/futures/v1/exchanges', args] as const
}

export function getFuturesV1ExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.futures.v1.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ExchangesQueryKey>
  >({
    queryKey: getFuturesV1ExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFuturesV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.futures.v1.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1ExchangesQueryKey>
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
    return { ...getFuturesV1ExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1MarketStatusQueryKey(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
) {
  return ['futures', '/futures/v1/market-status', args] as const
}

export function getFuturesV1MarketStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1MarketStatusQueryKey>
  >({
    queryKey: getFuturesV1MarketStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1['market-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFuturesV1MarketStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1MarketStatusQueryKey>
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
      ...getFuturesV1MarketStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFuturesV1ProductsQueryKey(
  args: InferRequestType<typeof client.futures.v1.products.$get>,
) {
  return ['futures', '/futures/v1/products', args] as const
}

export function getFuturesV1ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.futures.v1.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ProductsQueryKey>
  >({
    queryKey: getFuturesV1ProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFuturesV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.futures.v1.products.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1ProductsQueryKey>
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
    return { ...getFuturesV1ProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1QuotesTickerQueryKey(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/quotes/:ticker', args] as const
}

export function getFuturesV1QuotesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1QuotesTickerQueryKey>
  >({
    queryKey: getFuturesV1QuotesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.quotes[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFuturesV1QuotesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1QuotesTickerQueryKey>
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
      ...getFuturesV1QuotesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFuturesV1SchedulesQueryKey(
  args: InferRequestType<typeof client.futures.v1.schedules.$get>,
) {
  return ['futures', '/futures/v1/schedules', args] as const
}

export function getFuturesV1SchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.futures.v1.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1SchedulesQueryKey>
  >({
    queryKey: getFuturesV1SchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFuturesV1Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.futures.v1.schedules.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1SchedulesQueryKey>
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
    return { ...getFuturesV1SchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1SnapshotQueryKey(
  args: InferRequestType<typeof client.futures.v1.snapshot.$get>,
) {
  return ['futures', '/futures/v1/snapshot', args] as const
}

export function getFuturesV1SnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.futures.v1.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1SnapshotQueryKey>
  >({
    queryKey: getFuturesV1SnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFuturesV1Snapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.futures.v1.snapshot.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1SnapshotQueryKey>
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
    return { ...getFuturesV1SnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFuturesV1TradesTickerQueryKey(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
) {
  return ['futures', '/futures/v1/trades/:ticker', args] as const
}

export function getFuturesV1TradesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1TradesTickerQueryKey>
  >({
    queryKey: getFuturesV1TradesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.futures.v1.trades[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFuturesV1TradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFuturesV1TradesTickerQueryKey>
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
      ...getFuturesV1TradesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1AdminMessagesQueryKey(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
) {
  return ['options', '/options/v1/admin-messages', args] as const
}

export function getOptionsV1AdminMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AdminMessagesQueryKey>
  >({
    queryKey: getOptionsV1AdminMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1['admin-messages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1AdminMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1AdminMessagesQueryKey>
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
      ...getOptionsV1AdminMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1AnalyticsQueryKey(
  args: InferRequestType<typeof client.options.v1.analytics.$get>,
) {
  return ['options', '/options/v1/analytics', args] as const
}

export function getOptionsV1AnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.options.v1.analytics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsQueryKey>
  >({
    queryKey: getOptionsV1AnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOptionsV1Analytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.options.v1.analytics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1AnalyticsQueryKey>
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
    return { ...getOptionsV1AnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOptionsV1AnalyticsExpirationQueryKey(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
) {
  return ['options', '/options/v1/analytics/expiration', args] as const
}

export function getOptionsV1AnalyticsExpirationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsExpirationQueryKey>
  >({
    queryKey: getOptionsV1AnalyticsExpirationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1.analytics.expiration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1AnalyticsExpiration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1AnalyticsExpirationQueryKey>
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
      ...getOptionsV1AnalyticsExpirationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1AnalyticsStrikeQueryKey(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
) {
  return ['options', '/options/v1/analytics/strike', args] as const
}

export function getOptionsV1AnalyticsStrikeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsStrikeQueryKey>
  >({
    queryKey: getOptionsV1AnalyticsStrikeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1.analytics.strike.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1AnalyticsStrike<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.options.v1.analytics.strike.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1AnalyticsStrikeQueryKey>
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
      ...getOptionsV1AnalyticsStrikeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1AnalyticsUnderlyingQueryKey(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
) {
  return ['options', '/options/v1/analytics/underlying', args] as const
}

export function getOptionsV1AnalyticsUnderlyingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsUnderlyingQueryKey>
  >({
    queryKey: getOptionsV1AnalyticsUnderlyingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1.analytics.underlying.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1AnalyticsUnderlying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1AnalyticsUnderlyingQueryKey>
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
      ...getOptionsV1AnalyticsUnderlyingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1ExchangesQueryKey(
  args: InferRequestType<typeof client.options.v1.exchanges.$get>,
) {
  return ['options', '/options/v1/exchanges', args] as const
}

export function getOptionsV1ExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.options.v1.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1ExchangesQueryKey>
  >({
    queryKey: getOptionsV1ExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOptionsV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.options.v1.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1ExchangesQueryKey>
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
    return { ...getOptionsV1ExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOptionsV1OpenInterestQueryKey(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
) {
  return ['options', '/options/v1/open-interest', args] as const
}

export function getOptionsV1OpenInterestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1OpenInterestQueryKey>
  >({
    queryKey: getOptionsV1OpenInterestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1['open-interest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1OpenInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1OpenInterestQueryKey>
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
      ...getOptionsV1OpenInterestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1OpenInterestUnderlyingQueryKey(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
) {
  return ['options', '/options/v1/open-interest/underlying', args] as const
}

export function getOptionsV1OpenInterestUnderlyingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1OpenInterestUnderlyingQueryKey>
  >({
    queryKey: getOptionsV1OpenInterestUnderlyingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1['open-interest'].underlying.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1OpenInterestUnderlying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1OpenInterestUnderlyingQueryKey>
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
      ...getOptionsV1OpenInterestUnderlyingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV1UnusualTradesQueryKey(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
) {
  return ['options', '/options/v1/unusual-trades', args] as const
}

export function getOptionsV1UnusualTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1UnusualTradesQueryKey>
  >({
    queryKey: getOptionsV1UnusualTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v1['unusual-trades'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV1UnusualTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV1UnusualTradesQueryKey>
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
      ...getOptionsV1UnusualTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV3QuotesTickerQueryKey(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
) {
  return ['options', '/options/v3/quotes/:ticker', args] as const
}

export function getOptionsV3QuotesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV3QuotesTickerQueryKey>
  >({
    queryKey: getOptionsV3QuotesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v3.quotes[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV3QuotesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV3QuotesTickerQueryKey>
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
      ...getOptionsV3QuotesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOptionsV3TradesTickerQueryKey(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
) {
  return ['options', '/options/v3/trades/:ticker', args] as const
}

export function getOptionsV3TradesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV3TradesTickerQueryKey>
  >({
    queryKey: getOptionsV3TradesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.options.v3.trades[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOptionsV3TradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOptionsV3TradesTickerQueryKey>
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
      ...getOptionsV3TradesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksDevTradesTickerQueryKey(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
) {
  return ['stocks', '/stocks/dev/trades/:ticker', args] as const
}

export function getStocksDevTradesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksDevTradesTickerQueryKey>
  >({
    queryKey: getStocksDevTradesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.dev.trades[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksDevTradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksDevTradesTickerQueryKey>
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
      ...getStocksDevTradesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilings10KVXSectionsQueryKey(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
) {
  return ['stocks', '/stocks/filings/10-K/vX/sections', args] as const
}

export function getStocksFilings10KVXSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings10KVXSectionsQueryKey>
  >({
    queryKey: getStocksFilings10KVXSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings['10-K'].vX.sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilings10KVXSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilings10KVXSectionsQueryKey>
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
      ...getStocksFilings10KVXSectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilings10KVX0SectionsQueryKey(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
) {
  return ['stocks', '/stocks/filings/10-K/vX_0/sections', args] as const
}

export function getStocksFilings10KVX0SectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings10KVX0SectionsQueryKey>
  >({
    queryKey: getStocksFilings10KVX0SectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings['10-K'].vX_0.sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilings10KVX0Sections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilings10KVX0SectionsQueryKey>
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
      ...getStocksFilings10KVX0SectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilings8KVXDisclosuresQueryKey(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
) {
  return ['stocks', '/stocks/filings/8-K/vX/disclosures', args] as const
}

export function getStocksFilings8KVXDisclosuresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings8KVXDisclosuresQueryKey>
  >({
    queryKey: getStocksFilings8KVXDisclosuresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings['8-K'].vX.disclosures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilings8KVXDisclosures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilings8KVXDisclosuresQueryKey>
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
      ...getStocksFilings8KVXDisclosuresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilings8KVXTextQueryKey(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
) {
  return ['stocks', '/stocks/filings/8-K/vX/text', args] as const
}

export function getStocksFilings8KVXTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings8KVXTextQueryKey>
  >({
    queryKey: getStocksFilings8KVXTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings['8-K'].vX.text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilings8KVXText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilings8KVXTextQueryKey>
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
      ...getStocksFilings8KVXTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilingsVX13FQueryKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/13-F', args] as const
}

export function getStocksFilingsVX13FQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVX13FQueryKey>
  >({
    queryKey: getStocksFilingsVX13FQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX['13-F'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVX13F<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVX13FQueryKey>
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
    return { ...getStocksFilingsVX13FQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStocksFilingsVXForm3QueryKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-3', args] as const
}

export function getStocksFilingsVXForm3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm3QueryKey>
  >({
    queryKey: getStocksFilingsVXForm3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX['form-3'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVXForm3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVXForm3QueryKey>
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
      ...getStocksFilingsVXForm3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilingsVXForm4QueryKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-4', args] as const
}

export function getStocksFilingsVXForm4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm4QueryKey>
  >({
    queryKey: getStocksFilingsVXForm4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX['form-4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVXForm4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVXForm4QueryKey>
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
      ...getStocksFilingsVXForm4QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilingsVXForm5QueryKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/form-5', args] as const
}

export function getStocksFilingsVXForm5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm5QueryKey>
  >({
    queryKey: getStocksFilingsVXForm5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX['form-5'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVXForm5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVXForm5QueryKey>
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
      ...getStocksFilingsVXForm5QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilingsVXIndexQueryKey(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
) {
  return ['stocks', '/stocks/filings/vX/index', args] as const
}

export function getStocksFilingsVXIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXIndexQueryKey>
  >({
    queryKey: getStocksFilingsVXIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVXIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.filings.vX.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVXIndexQueryKey>
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
      ...getStocksFilingsVXIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFilingsVXRiskFactorsQueryKey(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
) {
  return ['stocks', '/stocks/filings/vX/risk-factors', args] as const
}

export function getStocksFilingsVXRiskFactorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXRiskFactorsQueryKey>
  >({
    queryKey: getStocksFilingsVXRiskFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.filings.vX['risk-factors'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFilingsVXRiskFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFilingsVXRiskFactorsQueryKey>
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
      ...getStocksFilingsVXRiskFactorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFinancialsV1BalanceSheetsQueryKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/balance-sheets', args] as const
}

export function getStocksFinancialsV1BalanceSheetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1BalanceSheetsQueryKey>
  >({
    queryKey: getStocksFinancialsV1BalanceSheetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.financials.v1['balance-sheets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFinancialsV1BalanceSheets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFinancialsV1BalanceSheetsQueryKey>
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
      ...getStocksFinancialsV1BalanceSheetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFinancialsV1CashFlowStatementsQueryKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/cash-flow-statements', args] as const
}

export function getStocksFinancialsV1CashFlowStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1CashFlowStatementsQueryKey>
  >({
    queryKey: getStocksFinancialsV1CashFlowStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.financials.v1['cash-flow-statements'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFinancialsV1CashFlowStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.stocks.financials.v1)['cash-flow-statements']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFinancialsV1CashFlowStatementsQueryKey>
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
      ...getStocksFinancialsV1CashFlowStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFinancialsV1IncomeStatementsQueryKey(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
) {
  return ['stocks', '/stocks/financials/v1/income-statements', args] as const
}

export function getStocksFinancialsV1IncomeStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1IncomeStatementsQueryKey>
  >({
    queryKey: getStocksFinancialsV1IncomeStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.financials.v1['income-statements'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFinancialsV1IncomeStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFinancialsV1IncomeStatementsQueryKey>
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
      ...getStocksFinancialsV1IncomeStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksFinancialsV1RatiosQueryKey(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
) {
  return ['stocks', '/stocks/financials/v1/ratios', args] as const
}

export function getStocksFinancialsV1RatiosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1RatiosQueryKey>
  >({
    queryKey: getStocksFinancialsV1RatiosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.financials.v1.ratios.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksFinancialsV1Ratios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksFinancialsV1RatiosQueryKey>
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
      ...getStocksFinancialsV1RatiosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksInsidersVXActivityQueryKey(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
) {
  return ['stocks', '/stocks/insiders/vX/activity', args] as const
}

export function getStocksInsidersVXActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksInsidersVXActivityQueryKey>
  >({
    queryKey: getStocksInsidersVXActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.insiders.vX.activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksInsidersVXActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksInsidersVXActivityQueryKey>
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
      ...getStocksInsidersVXActivityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksInsidersVXHoldingsQueryKey(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
) {
  return ['stocks', '/stocks/insiders/vX/holdings', args] as const
}

export function getStocksInsidersVXHoldingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksInsidersVXHoldingsQueryKey>
  >({
    queryKey: getStocksInsidersVXHoldingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.insiders.vX.holdings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksInsidersVXHoldings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksInsidersVXHoldingsQueryKey>
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
      ...getStocksInsidersVXHoldingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksTaxonomiesVXDisclosuresQueryKey(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
) {
  return ['stocks', '/stocks/taxonomies/vX/disclosures', args] as const
}

export function getStocksTaxonomiesVXDisclosuresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksTaxonomiesVXDisclosuresQueryKey>
  >({
    queryKey: getStocksTaxonomiesVXDisclosuresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.taxonomies.vX.disclosures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksTaxonomiesVXDisclosures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksTaxonomiesVXDisclosuresQueryKey>
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
      ...getStocksTaxonomiesVXDisclosuresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksTaxonomiesVXRiskFactorsQueryKey(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
) {
  return ['stocks', '/stocks/taxonomies/vX/risk-factors', args] as const
}

export function getStocksTaxonomiesVXRiskFactorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksTaxonomiesVXRiskFactorsQueryKey>
  >({
    queryKey: getStocksTaxonomiesVXRiskFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.taxonomies.vX['risk-factors'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksTaxonomiesVXRiskFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksTaxonomiesVXRiskFactorsQueryKey>
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
      ...getStocksTaxonomiesVXRiskFactorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksV1DividendsQueryKey(
  args: InferRequestType<typeof client.stocks.v1.dividends.$get>,
) {
  return ['stocks', '/stocks/v1/dividends', args] as const
}

export function getStocksV1DividendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stocks.v1.dividends.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1DividendsQueryKey>
  >({
    queryKey: getStocksV1DividendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.v1.dividends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStocksV1Dividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.v1.dividends.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksV1DividendsQueryKey>
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
    return { ...getStocksV1DividendsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStocksV1ExchangesQueryKey(
  args: InferRequestType<typeof client.stocks.v1.exchanges.$get>,
) {
  return ['stocks', '/stocks/v1/exchanges', args] as const
}

export function getStocksV1ExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stocks.v1.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ExchangesQueryKey>
  >({
    queryKey: getStocksV1ExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.v1.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStocksV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.v1.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksV1ExchangesQueryKey>
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
    return { ...getStocksV1ExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStocksV1ShortInterestQueryKey(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
) {
  return ['stocks', '/stocks/v1/short-interest', args] as const
}

export function getStocksV1ShortInterestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ShortInterestQueryKey>
  >({
    queryKey: getStocksV1ShortInterestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.v1['short-interest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksV1ShortInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksV1ShortInterestQueryKey>
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
      ...getStocksV1ShortInterestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStocksV1ShortVolumeQueryKey(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
) {
  return ['stocks', '/stocks/v1/short-volume', args] as const
}

export function getStocksV1ShortVolumeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ShortVolumeQueryKey>
  >({
    queryKey: getStocksV1ShortVolumeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.v1['short-volume'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStocksV1ShortVolume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksV1ShortVolumeQueryKey>
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
    return { ...getStocksV1ShortVolumeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStocksV1SplitsQueryKey(
  args: InferRequestType<typeof client.stocks.v1.splits.$get>,
) {
  return ['stocks', '/stocks/v1/splits', args] as const
}

export function getStocksV1SplitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stocks.v1.splits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1SplitsQueryKey>
  >({
    queryKey: getStocksV1SplitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.v1.splits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStocksV1Splits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.v1.splits.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksV1SplitsQueryKey>
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
    return { ...getStocksV1SplitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStocksVXFloatQueryKey(
  args: InferRequestType<typeof client.stocks.vX.float.$get>,
) {
  return ['stocks', '/stocks/vX/float', args] as const
}

export function getStocksVXFloatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stocks.vX.float.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksVXFloatQueryKey>
  >({
    queryKey: getStocksVXFloatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.vX.float.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStocksVXFloat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.vX.float.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStocksVXFloatQueryKey>
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
    return { ...getStocksVXFloatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTmxV1CorporateEventsQueryKey(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
) {
  return ['tmx', '/tmx/v1/corporate-events', args] as const
}

export function getTmxV1CorporateEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTmxV1CorporateEventsQueryKey>
  >({
    queryKey: getTmxV1CorporateEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tmx.v1['corporate-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTmxV1CorporateEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTmxV1CorporateEventsQueryKey>
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
      ...getTmxV1CorporateEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ConversionFromToQueryKey(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/conversion/:from/:to', args] as const
}

export function getV1ConversionFromToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversionFromToQueryKey>
  >({
    queryKey: getV1ConversionFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.conversion[':from'][':to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConversionFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConversionFromToQueryKey>
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
    return { ...getV1ConversionFromToQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1HistoricCryptoFromToDateQueryKey(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
) {
  return ['v1', '/v1/historic/crypto/:from/:to/:date', args] as const
}

export function getV1HistoricCryptoFromToDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HistoricCryptoFromToDateQueryKey>
  >({
    queryKey: getV1HistoricCryptoFromToDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.historic.crypto[':from'][':to'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1HistoricCryptoFromToDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1HistoricCryptoFromToDateQueryKey>
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
      ...getV1HistoricCryptoFromToDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1HistoricForexFromToDateQueryKey(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
) {
  return ['v1', '/v1/historic/forex/:from/:to/:date', args] as const
}

export function getV1HistoricForexFromToDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HistoricForexFromToDateQueryKey>
  >({
    queryKey: getV1HistoricForexFromToDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.historic.forex[':from'][':to'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1HistoricForexFromToDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1HistoricForexFromToDateQueryKey>
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
      ...getV1HistoricForexFromToDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsEmaCryptoTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:cryptoTicker', args] as const
}

export function getV1IndicatorsEmaCryptoTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaCryptoTickerQueryKey>
  >({
    queryKey: getV1IndicatorsEmaCryptoTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.ema[':cryptoTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsEmaCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsEmaCryptoTickerQueryKey>
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
      ...getV1IndicatorsEmaCryptoTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsEmaFxTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:fxTicker', args] as const
}

export function getV1IndicatorsEmaFxTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaFxTickerQueryKey>
  >({
    queryKey: getV1IndicatorsEmaFxTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.ema[':fxTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsEmaFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsEmaFxTickerQueryKey>
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
      ...getV1IndicatorsEmaFxTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsEmaIndicesTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:indicesTicker', args] as const
}

export function getV1IndicatorsEmaIndicesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaIndicesTickerQueryKey>
  >({
    queryKey: getV1IndicatorsEmaIndicesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.ema[':indicesTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsEmaIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsEmaIndicesTickerQueryKey>
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
      ...getV1IndicatorsEmaIndicesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsEmaOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:optionsTicker', args] as const
}

export function getV1IndicatorsEmaOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaOptionsTickerQueryKey>
  >({
    queryKey: getV1IndicatorsEmaOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.ema[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsEmaOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsEmaOptionsTickerQueryKey>
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
      ...getV1IndicatorsEmaOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsEmaStockTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/ema/:stockTicker', args] as const
}

export function getV1IndicatorsEmaStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaStockTickerQueryKey>
  >({
    queryKey: getV1IndicatorsEmaStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.ema[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsEmaStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsEmaStockTickerQueryKey>
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
      ...getV1IndicatorsEmaStockTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsMacdCryptoTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:cryptoTicker', args] as const
}

export function getV1IndicatorsMacdCryptoTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdCryptoTickerQueryKey>
  >({
    queryKey: getV1IndicatorsMacdCryptoTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.macd[':cryptoTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsMacdCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsMacdCryptoTickerQueryKey>
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
      ...getV1IndicatorsMacdCryptoTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsMacdFxTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:fxTicker', args] as const
}

export function getV1IndicatorsMacdFxTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdFxTickerQueryKey>
  >({
    queryKey: getV1IndicatorsMacdFxTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.macd[':fxTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsMacdFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsMacdFxTickerQueryKey>
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
      ...getV1IndicatorsMacdFxTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsMacdIndicesTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:indicesTicker', args] as const
}

export function getV1IndicatorsMacdIndicesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdIndicesTickerQueryKey>
  >({
    queryKey: getV1IndicatorsMacdIndicesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.macd[':indicesTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsMacdIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsMacdIndicesTickerQueryKey>
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
      ...getV1IndicatorsMacdIndicesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsMacdOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:optionsTicker', args] as const
}

export function getV1IndicatorsMacdOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdOptionsTickerQueryKey>
  >({
    queryKey: getV1IndicatorsMacdOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.macd[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsMacdOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsMacdOptionsTickerQueryKey>
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
      ...getV1IndicatorsMacdOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsMacdStockTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/macd/:stockTicker', args] as const
}

export function getV1IndicatorsMacdStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdStockTickerQueryKey>
  >({
    queryKey: getV1IndicatorsMacdStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.macd[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsMacdStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsMacdStockTickerQueryKey>
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
      ...getV1IndicatorsMacdStockTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsRsiCryptoTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:cryptoTicker', args] as const
}

export function getV1IndicatorsRsiCryptoTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiCryptoTickerQueryKey>
  >({
    queryKey: getV1IndicatorsRsiCryptoTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.rsi[':cryptoTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsRsiCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsRsiCryptoTickerQueryKey>
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
      ...getV1IndicatorsRsiCryptoTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsRsiFxTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:fxTicker', args] as const
}

export function getV1IndicatorsRsiFxTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiFxTickerQueryKey>
  >({
    queryKey: getV1IndicatorsRsiFxTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.rsi[':fxTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsRsiFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsRsiFxTickerQueryKey>
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
      ...getV1IndicatorsRsiFxTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsRsiIndicesTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:indicesTicker', args] as const
}

export function getV1IndicatorsRsiIndicesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiIndicesTickerQueryKey>
  >({
    queryKey: getV1IndicatorsRsiIndicesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.rsi[':indicesTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsRsiIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsRsiIndicesTickerQueryKey>
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
      ...getV1IndicatorsRsiIndicesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsRsiOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:optionsTicker', args] as const
}

export function getV1IndicatorsRsiOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiOptionsTickerQueryKey>
  >({
    queryKey: getV1IndicatorsRsiOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.rsi[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsRsiOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsRsiOptionsTickerQueryKey>
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
      ...getV1IndicatorsRsiOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsRsiStockTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/rsi/:stockTicker', args] as const
}

export function getV1IndicatorsRsiStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiStockTickerQueryKey>
  >({
    queryKey: getV1IndicatorsRsiStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.rsi[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsRsiStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsRsiStockTickerQueryKey>
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
      ...getV1IndicatorsRsiStockTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsSmaCryptoTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:cryptoTicker', args] as const
}

export function getV1IndicatorsSmaCryptoTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaCryptoTickerQueryKey>
  >({
    queryKey: getV1IndicatorsSmaCryptoTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.sma[':cryptoTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsSmaCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsSmaCryptoTickerQueryKey>
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
      ...getV1IndicatorsSmaCryptoTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsSmaFxTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:fxTicker', args] as const
}

export function getV1IndicatorsSmaFxTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaFxTickerQueryKey>
  >({
    queryKey: getV1IndicatorsSmaFxTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.sma[':fxTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsSmaFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsSmaFxTickerQueryKey>
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
      ...getV1IndicatorsSmaFxTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsSmaIndicesTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:indicesTicker', args] as const
}

export function getV1IndicatorsSmaIndicesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaIndicesTickerQueryKey>
  >({
    queryKey: getV1IndicatorsSmaIndicesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.sma[':indicesTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsSmaIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsSmaIndicesTickerQueryKey>
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
      ...getV1IndicatorsSmaIndicesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsSmaOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:optionsTicker', args] as const
}

export function getV1IndicatorsSmaOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaOptionsTickerQueryKey>
  >({
    queryKey: getV1IndicatorsSmaOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.sma[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsSmaOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsSmaOptionsTickerQueryKey>
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
      ...getV1IndicatorsSmaOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1IndicatorsSmaStockTickerQueryKey(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
) {
  return ['v1', '/v1/indicators/sma/:stockTicker', args] as const
}

export function getV1IndicatorsSmaStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaStockTickerQueryKey>
  >({
    queryKey: getV1IndicatorsSmaStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indicators.sma[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IndicatorsSmaStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicatorsSmaStockTickerQueryKey>
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
      ...getV1IndicatorsSmaStockTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1LastCryptoFromToQueryKey(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/last/crypto/:from/:to', args] as const
}

export function getV1LastCryptoFromToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LastCryptoFromToQueryKey>
  >({
    queryKey: getV1LastCryptoFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.last.crypto[':from'][':to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LastCryptoFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LastCryptoFromToQueryKey>
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
    return { ...getV1LastCryptoFromToQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1LastQuoteCurrenciesFromToQueryKey(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
) {
  return ['v1', '/v1/last_quote/currencies/:from/:to', args] as const
}

export function getV1LastQuoteCurrenciesFromToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LastQuoteCurrenciesFromToQueryKey>
  >({
    queryKey: getV1LastQuoteCurrenciesFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.last_quote.currencies[':from'][':to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LastQuoteCurrenciesFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LastQuoteCurrenciesFromToQueryKey>
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
      ...getV1LastQuoteCurrenciesFromToQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1MarketstatusNowQueryKey() {
  return ['v1', '/v1/marketstatus/now'] as const
}

export function getV1MarketstatusNowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketstatusNowQueryKey>
  >({
    queryKey: getV1MarketstatusNowQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.marketstatus.now.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MarketstatusNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1MarketstatusNowQueryKey>
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
    return { ...getV1MarketstatusNowQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1MarketstatusUpcomingQueryKey() {
  return ['v1', '/v1/marketstatus/upcoming'] as const
}

export function getV1MarketstatusUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketstatusUpcomingQueryKey>
  >({
    queryKey: getV1MarketstatusUpcomingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.marketstatus.upcoming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MarketstatusUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1MarketstatusUpcomingQueryKey>
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
    return { ...getV1MarketstatusUpcomingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OpenCloseCryptoFromToDateQueryKey(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
) {
  return ['v1', '/v1/open-close/crypto/:from/:to/:date', args] as const
}

export function getV1OpenCloseCryptoFromToDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseCryptoFromToDateQueryKey>
  >({
    queryKey: getV1OpenCloseCryptoFromToDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['open-close'].crypto[':from'][':to'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OpenCloseCryptoFromToDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
                    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OpenCloseCryptoFromToDateQueryKey>
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
      ...getV1OpenCloseCryptoFromToDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OpenCloseIndicesTickerDateQueryKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:indicesTicker/:date', args] as const
}

export function getV1OpenCloseIndicesTickerDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseIndicesTickerDateQueryKey>
  >({
    queryKey: getV1OpenCloseIndicesTickerDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['open-close'][':indicesTicker'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OpenCloseIndicesTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OpenCloseIndicesTickerDateQueryKey>
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
      ...getV1OpenCloseIndicesTickerDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OpenCloseOptionsTickerDateQueryKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:optionsTicker/:date', args] as const
}

export function getV1OpenCloseOptionsTickerDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseOptionsTickerDateQueryKey>
  >({
    queryKey: getV1OpenCloseOptionsTickerDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['open-close'][':optionsTicker'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OpenCloseOptionsTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OpenCloseOptionsTickerDateQueryKey>
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
      ...getV1OpenCloseOptionsTickerDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OpenCloseStocksTickerDateQueryKey(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
) {
  return ['v1', '/v1/open-close/:stocksTicker/:date', args] as const
}

export function getV1OpenCloseStocksTickerDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseStocksTickerDateQueryKey>
  >({
    queryKey: getV1OpenCloseStocksTickerDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['open-close'][':stocksTicker'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OpenCloseStocksTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OpenCloseStocksTickerDateQueryKey>
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
      ...getV1OpenCloseStocksTickerDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReferenceIposQueryKey(
  args: InferRequestType<typeof client.v1.reference.ipos.$get>,
) {
  return ['v1', '/v1/reference/ipos', args] as const
}

export function getV1ReferenceIposQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reference.ipos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceIposQueryKey>
  >({
    queryKey: getV1ReferenceIposQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reference.ipos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ReferenceIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reference.ipos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReferenceIposQueryKey>
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
    return { ...getV1ReferenceIposQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ReferenceSecFilingsQueryKey(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
) {
  return ['v1', '/v1/reference/sec/filings', args] as const
}

export function getV1ReferenceSecFilingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsQueryKey>
  >({
    queryKey: getV1ReferenceSecFilingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reference.sec.filings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReferenceSecFilings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reference.sec.filings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReferenceSecFilingsQueryKey>
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
      ...getV1ReferenceSecFilingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReferenceSecFilingsFilingIdQueryKey(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id', args] as const
}

export function getV1ReferenceSecFilingsFilingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdQueryKey>
  >({
    queryKey: getV1ReferenceSecFilingsFilingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReferenceSecFilingsFilingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdQueryKey>
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
      ...getV1ReferenceSecFilingsFilingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReferenceSecFilingsFilingIdFilesQueryKey(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files', args] as const
}

export function getV1ReferenceSecFilingsFilingIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesQueryKey>
  >({
    queryKey: getV1ReferenceSecFilingsFilingIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReferenceSecFilingsFilingIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesQueryKey>
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
      ...getV1ReferenceSecFilingsFilingIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files/:file_id', args] as const
}

export function getV1ReferenceSecFilingsFilingIdFilesFileIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey>
  >({
    queryKey: getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReferenceSecFilingsFilingIdFilesFileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey>
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
      ...getV1ReferenceSecFilingsFilingIdFilesFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1RelatedCompaniesTickerQueryKey(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
) {
  return ['v1', '/v1/related-companies/:ticker', args] as const
}

export function getV1RelatedCompaniesTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RelatedCompaniesTickerQueryKey>
  >({
    queryKey: getV1RelatedCompaniesTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['related-companies'][':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RelatedCompaniesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1RelatedCompaniesTickerQueryKey>
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
      ...getV1RelatedCompaniesTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/crypto/:date', args] as const
}

export function getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey>
  >({
    queryKey: getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsGroupedLocaleGlobalMarketCryptoDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey>
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
      ...getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/fx/:date', args] as const
}

export function getV2AggsGroupedLocaleGlobalMarketFxDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey>
  >({
    queryKey: getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsGroupedLocaleGlobalMarketFxDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey>
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
      ...getV2AggsGroupedLocaleGlobalMarketFxDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsGroupedLocaleUsMarketStocksDateQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
) {
  return ['v2', '/v2/aggs/grouped/locale/us/market/stocks/:date', args] as const
}

export function getV2AggsGroupedLocaleUsMarketStocksDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleUsMarketStocksDateQueryKey>
  >({
    queryKey: getV2AggsGroupedLocaleUsMarketStocksDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsGroupedLocaleUsMarketStocksDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsGroupedLocaleUsMarketStocksDateQueryKey>
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
      ...getV2AggsGroupedLocaleUsMarketStocksDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerCryptoTickerPrevQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:cryptoTicker/prev', args] as const
}

export function getV2AggsTickerCryptoTickerPrevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerCryptoTickerPrevQueryKey>
  >({
    queryKey: getV2AggsTickerCryptoTickerPrevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':cryptoTicker'].prev.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsTickerCryptoTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerCryptoTickerPrevQueryKey>
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
      ...getV2AggsTickerCryptoTickerPrevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey(
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

export function getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey>
  >({
    queryKey: getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AggsTickerCryptoTickerRangeMultiplierTimespanFromTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey>
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
      ...getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerForexTickerPrevQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:forexTicker/prev', args] as const
}

export function getV2AggsTickerForexTickerPrevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerForexTickerPrevQueryKey>
  >({
    queryKey: getV2AggsTickerForexTickerPrevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':forexTicker'].prev.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsTickerForexTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerForexTickerPrevQueryKey>
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
      ...getV2AggsTickerForexTickerPrevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
) {
  return ['v2', '/v2/aggs/ticker/:forexTicker/range/:multiplier/:timespan/:from/:to', args] as const
}

export function getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey>
  >({
    queryKey: getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AggsTickerForexTickerRangeMultiplierTimespanFromTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey>
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
      ...getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerIndicesTickerPrevQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:indicesTicker/prev', args] as const
}

export function getV2AggsTickerIndicesTickerPrevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerIndicesTickerPrevQueryKey>
  >({
    queryKey: getV2AggsTickerIndicesTickerPrevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':indicesTicker'].prev.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsTickerIndicesTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerIndicesTickerPrevQueryKey>
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
      ...getV2AggsTickerIndicesTickerPrevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey(
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

export function getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey>
  >({
    queryKey: getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AggsTickerIndicesTickerRangeMultiplierTimespanFromTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey>
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
      ...getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerOptionsTickerPrevQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:optionsTicker/prev', args] as const
}

export function getV2AggsTickerOptionsTickerPrevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerOptionsTickerPrevQueryKey>
  >({
    queryKey: getV2AggsTickerOptionsTickerPrevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':optionsTicker'].prev.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsTickerOptionsTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerOptionsTickerPrevQueryKey>
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
      ...getV2AggsTickerOptionsTickerPrevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey(
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

export function getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey>
  >({
    queryKey: getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AggsTickerOptionsTickerRangeMultiplierTimespanFromTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey>
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
      ...getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerStocksTickerPrevQueryKey(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
) {
  return ['v2', '/v2/aggs/ticker/:stocksTicker/prev', args] as const
}

export function getV2AggsTickerStocksTickerPrevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerStocksTickerPrevQueryKey>
  >({
    queryKey: getV2AggsTickerStocksTickerPrevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':stocksTicker'].prev.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AggsTickerStocksTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerStocksTickerPrevQueryKey>
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
      ...getV2AggsTickerStocksTickerPrevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey(
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

export function getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey>
  >({
    queryKey: getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AggsTickerStocksTickerRangeMultiplierTimespanFromTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey>
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
      ...getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2LastNbboStocksTickerQueryKey(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
) {
  return ['v2', '/v2/last/nbbo/:stocksTicker', args] as const
}

export function getV2LastNbboStocksTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastNbboStocksTickerQueryKey>
  >({
    queryKey: getV2LastNbboStocksTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.last.nbbo[':stocksTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2LastNbboStocksTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2LastNbboStocksTickerQueryKey>
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
      ...getV2LastNbboStocksTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2LastTradeOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
) {
  return ['v2', '/v2/last/trade/:optionsTicker', args] as const
}

export function getV2LastTradeOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastTradeOptionsTickerQueryKey>
  >({
    queryKey: getV2LastTradeOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.last.trade[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2LastTradeOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2LastTradeOptionsTickerQueryKey>
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
      ...getV2LastTradeOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2LastTradeStocksTickerQueryKey(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
) {
  return ['v2', '/v2/last/trade/:stocksTicker', args] as const
}

export function getV2LastTradeStocksTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastTradeStocksTickerQueryKey>
  >({
    queryKey: getV2LastTradeStocksTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.last.trade[':stocksTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2LastTradeStocksTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2LastTradeStocksTickerQueryKey>
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
      ...getV2LastTradeStocksTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ReferenceNewsQueryKey(
  args: InferRequestType<typeof client.v2.reference.news.$get>,
) {
  return ['v2', '/v2/reference/news', args] as const
}

export function getV2ReferenceNewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.reference.news.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReferenceNewsQueryKey>
  >({
    queryKey: getV2ReferenceNewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reference.news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ReferenceNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.reference.news.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2ReferenceNewsQueryKey>
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
    return { ...getV2ReferenceNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsCryptoTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsCryptoTickersTicker<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker/book', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBook<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/:direction', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsCryptoDirection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex.tickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsForexTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsForexTickersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers/:ticker', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsForexTickersTicker<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/:direction', args] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexDirectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey>
  >({
    queryKey: getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex[':direction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleGlobalMarketsForexDirection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey>
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
      ...getV2SnapshotLocaleGlobalMarketsForexDirectionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleUsMarketsStocksTickersQueryKey(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/tickers', args] as const
}

export function getV2SnapshotLocaleUsMarketsStocksTickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersQueryKey>
  >({
    queryKey: getV2SnapshotLocaleUsMarketsStocksTickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks.tickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleUsMarketsStocksTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersQueryKey>
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
      ...getV2SnapshotLocaleUsMarketsStocksTickersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/tickers/:stocksTicker', args] as const
}

export function getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey>
  >({
    queryKey: getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleUsMarketsStocksTickersStocksTicker<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey>
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
      ...getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/:direction', args] as const
}

export function getV2SnapshotLocaleUsMarketsStocksDirectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey>
  >({
    queryKey: getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SnapshotLocaleUsMarketsStocksDirection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey>
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
      ...getV2SnapshotLocaleUsMarketsStocksDirectionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2TicksStocksNbboTickerDateQueryKey(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
) {
  return ['v2', '/v2/ticks/stocks/nbbo/:ticker/:date', args] as const
}

export function getV2TicksStocksNbboTickerDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TicksStocksNbboTickerDateQueryKey>
  >({
    queryKey: getV2TicksStocksNbboTickerDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2TicksStocksNbboTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2TicksStocksNbboTickerDateQueryKey>
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
      ...getV2TicksStocksNbboTickerDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2TicksStocksTradesTickerDateQueryKey(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
) {
  return ['v2', '/v2/ticks/stocks/trades/:ticker/:date', args] as const
}

export function getV2TicksStocksTradesTickerDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TicksStocksTradesTickerDateQueryKey>
  >({
    queryKey: getV2TicksStocksTradesTickerDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.ticks.stocks.trades[':ticker'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2TicksStocksTradesTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2TicksStocksTradesTickerDateQueryKey>
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
      ...getV2TicksStocksTradesTickerDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3QuotesFxTickerQueryKey(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:fxTicker', args] as const
}

export function getV3QuotesFxTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesFxTickerQueryKey>
  >({
    queryKey: getV3QuotesFxTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.quotes[':fxTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3QuotesFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3QuotesFxTickerQueryKey>
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
    return { ...getV3QuotesFxTickerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3QuotesOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:optionsTicker', args] as const
}

export function getV3QuotesOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesOptionsTickerQueryKey>
  >({
    queryKey: getV3QuotesOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.quotes[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3QuotesOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3QuotesOptionsTickerQueryKey>
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
      ...getV3QuotesOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3QuotesStockTickerQueryKey(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
) {
  return ['v3', '/v3/quotes/:stockTicker', args] as const
}

export function getV3QuotesStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesStockTickerQueryKey>
  >({
    queryKey: getV3QuotesStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.quotes[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3QuotesStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3QuotesStockTickerQueryKey>
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
    return { ...getV3QuotesStockTickerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ReferenceConditionsQueryKey(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
) {
  return ['v3', '/v3/reference/conditions', args] as const
}

export function getV3ReferenceConditionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceConditionsQueryKey>
  >({
    queryKey: getV3ReferenceConditionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.conditions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.conditions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceConditionsQueryKey>
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
      ...getV3ReferenceConditionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceDividendsQueryKey(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
) {
  return ['v3', '/v3/reference/dividends', args] as const
}

export function getV3ReferenceDividendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceDividendsQueryKey>
  >({
    queryKey: getV3ReferenceDividendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.dividends.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceDividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.dividends.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceDividendsQueryKey>
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
      ...getV3ReferenceDividendsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceExchangesQueryKey(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
) {
  return ['v3', '/v3/reference/exchanges', args] as const
}

export function getV3ReferenceExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceExchangesQueryKey>
  >({
    queryKey: getV3ReferenceExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.exchanges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceExchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.exchanges.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceExchangesQueryKey>
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
      ...getV3ReferenceExchangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceOptionsContractsQueryKey(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
) {
  return ['v3', '/v3/reference/options/contracts', args] as const
}

export function getV3ReferenceOptionsContractsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceOptionsContractsQueryKey>
  >({
    queryKey: getV3ReferenceOptionsContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.options.contracts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceOptionsContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.options.contracts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceOptionsContractsQueryKey>
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
      ...getV3ReferenceOptionsContractsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceOptionsContractsOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
) {
  return ['v3', '/v3/reference/options/contracts/:options_ticker', args] as const
}

export function getV3ReferenceOptionsContractsOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceOptionsContractsOptionsTickerQueryKey>
  >({
    queryKey: getV3ReferenceOptionsContractsOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.options.contracts[':options_ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceOptionsContractsOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.reference.options.contracts)[':options_ticker']['$get']
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
                    (typeof client.v3.reference.options.contracts)[':options_ticker']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceOptionsContractsOptionsTickerQueryKey>
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
      ...getV3ReferenceOptionsContractsOptionsTickerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceSplitsQueryKey(
  args: InferRequestType<typeof client.v3.reference.splits.$get>,
) {
  return ['v3', '/v3/reference/splits', args] as const
}

export function getV3ReferenceSplitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.reference.splits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceSplitsQueryKey>
  >({
    queryKey: getV3ReferenceSplitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.splits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ReferenceSplits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.splits.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceSplitsQueryKey>
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
    return { ...getV3ReferenceSplitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ReferenceTickersQueryKey(
  args: InferRequestType<typeof client.v3.reference.tickers.$get>,
) {
  return ['v3', '/v3/reference/tickers', args] as const
}

export function getV3ReferenceTickersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.reference.tickers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersQueryKey>
  >({
    queryKey: getV3ReferenceTickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.tickers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ReferenceTickers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.tickers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceTickersQueryKey>
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
    return { ...getV3ReferenceTickersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ReferenceTickersTypesQueryKey(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
) {
  return ['v3', '/v3/reference/tickers/types', args] as const
}

export function getV3ReferenceTickersTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersTypesQueryKey>
  >({
    queryKey: getV3ReferenceTickersTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.tickers.types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceTickersTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.reference.tickers.types.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceTickersTypesQueryKey>
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
      ...getV3ReferenceTickersTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ReferenceTickersTickerQueryKey(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
) {
  return ['v3', '/v3/reference/tickers/:ticker', args] as const
}

export function getV3ReferenceTickersTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersTickerQueryKey>
  >({
    queryKey: getV3ReferenceTickersTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.reference.tickers[':ticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ReferenceTickersTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ReferenceTickersTickerQueryKey>
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
      ...getV3ReferenceTickersTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SnapshotQueryKey(args: InferRequestType<typeof client.v3.snapshot.$get>) {
  return ['v3', '/v3/snapshot', args] as const
}

export function getV3SnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotQueryKey>
  >({
    queryKey: getV3SnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Snapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.snapshot.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3SnapshotQueryKey>
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
    return { ...getV3SnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3SnapshotIndicesQueryKey(
  args: InferRequestType<typeof client.v3.snapshot.indices.$get>,
) {
  return ['v3', '/v3/snapshot/indices', args] as const
}

export function getV3SnapshotIndicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.snapshot.indices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotIndicesQueryKey>
  >({
    queryKey: getV3SnapshotIndicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.snapshot.indices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3SnapshotIndices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.snapshot.indices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3SnapshotIndicesQueryKey>
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
    return { ...getV3SnapshotIndicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3SnapshotOptionsUnderlyingAssetQueryKey(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset', args] as const
}

export function getV3SnapshotOptionsUnderlyingAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetQueryKey>
  >({
    queryKey: getV3SnapshotOptionsUnderlyingAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.snapshot.options[':underlyingAsset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SnapshotOptionsUnderlyingAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetQueryKey>
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
      ...getV3SnapshotOptionsUnderlyingAssetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset/:optionContract', args] as const
}

export function getV3SnapshotOptionsUnderlyingAssetOptionContractQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey>
  >({
    queryKey: getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SnapshotOptionsUnderlyingAssetOptionContract<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
                    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey>
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
      ...getV3SnapshotOptionsUnderlyingAssetOptionContractQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3TradesCryptoTickerQueryKey(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:cryptoTicker', args] as const
}

export function getV3TradesCryptoTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesCryptoTickerQueryKey>
  >({
    queryKey: getV3TradesCryptoTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.trades[':cryptoTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3TradesCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3TradesCryptoTickerQueryKey>
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
      ...getV3TradesCryptoTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3TradesOptionsTickerQueryKey(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:optionsTicker', args] as const
}

export function getV3TradesOptionsTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesOptionsTickerQueryKey>
  >({
    queryKey: getV3TradesOptionsTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.trades[':optionsTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3TradesOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3TradesOptionsTickerQueryKey>
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
      ...getV3TradesOptionsTickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3TradesStockTickerQueryKey(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
) {
  return ['v3', '/v3/trades/:stockTicker', args] as const
}

export function getV3TradesStockTickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesStockTickerQueryKey>
  >({
    queryKey: getV3TradesStockTickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.trades[':stockTicker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3TradesStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3TradesStockTickerQueryKey>
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
    return { ...getV3TradesStockTickerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVXReferenceIposQueryKey(
  args: InferRequestType<typeof client.vX.reference.ipos.$get>,
) {
  return ['vX', '/vX/reference/ipos', args] as const
}

export function getVXReferenceIposQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vX.reference.ipos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVXReferenceIposQueryKey>
  >({
    queryKey: getVXReferenceIposQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vX.reference.ipos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVXReferenceIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vX.reference.ipos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVXReferenceIposQueryKey>
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
    return { ...getVXReferenceIposQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVXReferenceTickersIdEventsQueryKey(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
) {
  return ['vX', '/vX/reference/tickers/:id/events', args] as const
}

export function getVXReferenceTickersIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVXReferenceTickersIdEventsQueryKey>
  >({
    queryKey: getVXReferenceTickersIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vX.reference.tickers[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVXReferenceTickersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVXReferenceTickersIdEventsQueryKey>
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
      ...getVXReferenceTickersIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

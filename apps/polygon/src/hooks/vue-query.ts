import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>,
) {
  return ['benzinga', '/benzinga/v1/analyst-insights', toValue(args)] as const
}

export function getBenzingaV1AnalystInsightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1AnalystInsightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1['analyst-insights'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1AnalystInsights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBenzingaV1AnalystInsightsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.benzinga.v1)['analyst-insights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1AnalystInsightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1AnalystInsightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1['analyst-insights'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1AnalystsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.analysts.$get>>,
) {
  return ['benzinga', '/benzinga/v1/analysts', toValue(args)] as const
}

export function getBenzingaV1AnalystsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.analysts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1AnalystsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1.analysts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1Analysts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.analysts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV1AnalystsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.analysts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1AnalystsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1AnalystsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1.analysts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1BullsBearsSayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>,
) {
  return ['benzinga', '/benzinga/v1/bulls-bears-say', toValue(args)] as const
}

export function getBenzingaV1BullsBearsSayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1BullsBearsSayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1['bulls-bears-say'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1BullsBearsSay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBenzingaV1BullsBearsSayQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1BullsBearsSayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1BullsBearsSayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1['bulls-bears-say'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1ConsensusRatingsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>
  >,
) {
  return ['benzinga', '/benzinga/v1/consensus-ratings/:ticker', toValue(args)] as const
}

export function getBenzingaV1ConsensusRatingsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1ConsensusRatingsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1['consensus-ratings'][':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1ConsensusRatingsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBenzingaV1ConsensusRatingsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1ConsensusRatingsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1ConsensusRatingsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1['consensus-ratings'][':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1EarningsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.earnings.$get>>,
) {
  return ['benzinga', '/benzinga/v1/earnings', toValue(args)] as const
}

export function getBenzingaV1EarningsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.earnings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1EarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1.earnings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1Earnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.earnings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV1EarningsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.earnings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1EarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1EarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1.earnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1FirmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.firms.$get>>,
) {
  return ['benzinga', '/benzinga/v1/firms', toValue(args)] as const
}

export function getBenzingaV1FirmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.firms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1FirmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1.firms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1Firms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.firms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV1FirmsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.firms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1FirmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1FirmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1.firms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1GuidanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.guidance.$get>>,
) {
  return ['benzinga', '/benzinga/v1/guidance', toValue(args)] as const
}

export function getBenzingaV1GuidanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.guidance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1GuidanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1.guidance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1Guidance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.guidance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV1GuidanceQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.guidance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1GuidanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1GuidanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1.guidance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV1RatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.ratings.$get>>,
) {
  return ['benzinga', '/benzinga/v1/ratings', toValue(args)] as const
}

export function getBenzingaV1RatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.ratings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV1RatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v1.ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV1Ratings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v1.ratings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV1RatingsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v1.ratings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV1RatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV1RatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v1.ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenzingaV2NewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v2.news.$get>>,
) {
  return ['benzinga', '/benzinga/v2/news', toValue(args)] as const
}

export function getBenzingaV2NewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v2.news.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenzingaV2NewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benzinga.v2.news.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBenzingaV2News<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benzinga.v2.news.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>
            >
          >,
          ReturnType<typeof getBenzingaV2NewsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benzinga.v2.news.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBenzingaV2NewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenzingaV2NewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benzinga.v2.news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerSpendingEuV1MerchantAggregatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
    >
  >,
) {
  return [
    'consumer-spending',
    '/consumer-spending/eu/v1/merchant-aggregates',
    toValue(args),
  ] as const
}

export function getConsumerSpendingEuV1MerchantAggregatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerSpendingEuV1MerchantAggregatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['consumer-spending'].eu.v1['merchant-aggregates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerSpendingEuV1MerchantAggregates<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumerSpendingEuV1MerchantAggregatesQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerSpendingEuV1MerchantAggregatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerSpendingEuV1MerchantAggregatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['consumer-spending'].eu.v1['merchant-aggregates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConsumerSpendingEuV1MerchantHierarchyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']>
  >,
) {
  return [
    'consumer-spending',
    '/consumer-spending/eu/v1/merchant-hierarchy',
    toValue(args),
  ] as const
}

export function getConsumerSpendingEuV1MerchantHierarchyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumerSpendingEuV1MerchantHierarchyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumerSpendingEuV1MerchantHierarchy<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']>
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
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
                    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumerSpendingEuV1MerchantHierarchyQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumerSpendingEuV1MerchantHierarchyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumerSpendingEuV1MerchantHierarchyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCryptoV1ExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crypto.v1.exchanges.$get>>,
) {
  return ['crypto', '/crypto/v1/exchanges', toValue(args)] as const
}

export function getCryptoV1ExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crypto.v1.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCryptoV1ExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crypto.v1.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCryptoV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crypto.v1.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getCryptoV1ExchangesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crypto.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCryptoV1ExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCryptoV1ExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crypto.v1.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfGlobalV1AnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>
  >,
) {
  return ['etf-global', '/etf-global/v1/analytics', toValue(args)] as const
}

export function getEtfGlobalV1AnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfGlobalV1AnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['etf-global'].v1.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfGlobalV1Analytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtfGlobalV1AnalyticsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1AnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfGlobalV1AnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['etf-global'].v1.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfGlobalV1ConstituentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>
  >,
) {
  return ['etf-global', '/etf-global/v1/constituents', toValue(args)] as const
}

export function getEtfGlobalV1ConstituentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfGlobalV1ConstituentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['etf-global'].v1.constituents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfGlobalV1Constituents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtfGlobalV1ConstituentsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['constituents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1ConstituentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfGlobalV1ConstituentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['etf-global'].v1.constituents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfGlobalV1FundFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>
  >,
) {
  return ['etf-global', '/etf-global/v1/fund-flows', toValue(args)] as const
}

export function getEtfGlobalV1FundFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfGlobalV1FundFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['etf-global'].v1['fund-flows'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfGlobalV1FundFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtfGlobalV1FundFlowsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1FundFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfGlobalV1FundFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['etf-global'].v1['fund-flows'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfGlobalV1ProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>>,
) {
  return ['etf-global', '/etf-global/v1/profiles', toValue(args)] as const
}

export function getEtfGlobalV1ProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfGlobalV1ProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['etf-global'].v1.profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfGlobalV1Profiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtfGlobalV1ProfilesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1ProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfGlobalV1ProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['etf-global'].v1.profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfGlobalV1TaxonomiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>
  >,
) {
  return ['etf-global', '/etf-global/v1/taxonomies', toValue(args)] as const
}

export function getEtfGlobalV1TaxonomiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfGlobalV1TaxonomiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['etf-global'].v1.taxonomies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfGlobalV1Taxonomies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtfGlobalV1TaxonomiesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfGlobalV1TaxonomiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfGlobalV1TaxonomiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['etf-global'].v1.taxonomies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFedV1FundingConditionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>>,
) {
  return ['fed', '/fed/v1/funding-conditions', toValue(args)] as const
}

export function getFedV1FundingConditionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFedV1FundingConditionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fed.v1['funding-conditions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFedV1FundingConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFedV1FundingConditionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.fed.v1)['funding-conditions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1FundingConditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFedV1FundingConditionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fed.v1['funding-conditions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFedV1InflationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fed.v1.inflation.$get>>,
) {
  return ['fed', '/fed/v1/inflation', toValue(args)] as const
}

export function getFedV1InflationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fed.v1.inflation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFedV1InflationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fed.v1.inflation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFedV1Inflation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fed.v1.inflation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>
            >
          >,
          ReturnType<typeof getFedV1InflationQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fed.v1.inflation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1InflationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFedV1InflationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fed.v1.inflation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFedV1InflationExpectationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>
  >,
) {
  return ['fed', '/fed/v1/inflation-expectations', toValue(args)] as const
}

export function getFedV1InflationExpectationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFedV1InflationExpectationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fed.v1['inflation-expectations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFedV1InflationExpectations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFedV1InflationExpectationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.fed.v1)['inflation-expectations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1InflationExpectationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFedV1InflationExpectationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fed.v1['inflation-expectations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFedV1LaborMarketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>>,
) {
  return ['fed', '/fed/v1/labor-market', toValue(args)] as const
}

export function getFedV1LaborMarketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFedV1LaborMarketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fed.v1['labor-market'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFedV1LaborMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFedV1LaborMarketQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['labor-market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1LaborMarketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFedV1LaborMarketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fed.v1['labor-market'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFedV1TreasuryYieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>>,
) {
  return ['fed', '/fed/v1/treasury-yields', toValue(args)] as const
}

export function getFedV1TreasuryYieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFedV1TreasuryYieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fed.v1['treasury-yields'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFedV1TreasuryYields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFedV1TreasuryYieldsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fed.v1)['treasury-yields']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFedV1TreasuryYieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFedV1TreasuryYieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fed.v1['treasury-yields'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForexV1ExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex.v1.exchanges.$get>>,
) {
  return ['forex', '/forex/v1/exchanges', toValue(args)] as const
}

export function getForexV1ExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex.v1.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForexV1ExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forex.v1.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForexV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex.v1.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getForexV1ExchangesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getForexV1ExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForexV1ExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forex.v1.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1AggsTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>,
) {
  return ['futures', '/futures/v1/aggs/:ticker', toValue(args)] as const
}

export function getFuturesV1AggsTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1AggsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.aggs[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1AggsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFuturesV1AggsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.futures.v1.aggs)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1AggsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1AggsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.aggs[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1ContractsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.contracts.$get>>,
) {
  return ['futures', '/futures/v1/contracts', toValue(args)] as const
}

export function getFuturesV1ContractsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.contracts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1ContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.contracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1Contracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.contracts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>
            >
          >,
          ReturnType<typeof getFuturesV1ContractsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ContractsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1ContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.contracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1ExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.exchanges.$get>>,
) {
  return ['futures', '/futures/v1/exchanges', toValue(args)] as const
}

export function getFuturesV1ExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1ExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getFuturesV1ExchangesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1ExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1MarketStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1)['market-status']['$get']>>,
) {
  return ['futures', '/futures/v1/market-status', toValue(args)] as const
}

export function getFuturesV1MarketStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1)['market-status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1MarketStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1['market-status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1MarketStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1)['market-status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFuturesV1MarketStatusQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.futures.v1)['market-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1MarketStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1MarketStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1['market-status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1ProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.products.$get>>,
) {
  return ['futures', '/futures/v1/products', toValue(args)] as const
}

export function getFuturesV1ProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1ProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>
            >
          >,
          ReturnType<typeof getFuturesV1ProductsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1ProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1ProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1QuotesTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>,
) {
  return ['futures', '/futures/v1/quotes/:ticker', toValue(args)] as const
}

export function getFuturesV1QuotesTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1QuotesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.quotes[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1QuotesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFuturesV1QuotesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.futures.v1.quotes)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1QuotesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1QuotesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.quotes[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1SchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.schedules.$get>>,
) {
  return ['futures', '/futures/v1/schedules', toValue(args)] as const
}

export function getFuturesV1SchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1SchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>
            >
          >,
          ReturnType<typeof getFuturesV1SchedulesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1SchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1SchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1SnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.snapshot.$get>>,
) {
  return ['futures', '/futures/v1/snapshot', toValue(args)] as const
}

export function getFuturesV1SnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.snapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1SnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1Snapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.futures.v1.snapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>
            >
          >,
          ReturnType<typeof getFuturesV1SnapshotQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.futures.v1.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1SnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1SnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFuturesV1TradesTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>>,
) {
  return ['futures', '/futures/v1/trades/:ticker', toValue(args)] as const
}

export function getFuturesV1TradesTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFuturesV1TradesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.futures.v1.trades[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFuturesV1TradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFuturesV1TradesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.futures.v1.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFuturesV1TradesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFuturesV1TradesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.futures.v1.trades[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1AdminMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>>,
) {
  return ['options', '/options/v1/admin-messages', toValue(args)] as const
}

export function getOptionsV1AdminMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1AdminMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1['admin-messages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1AdminMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1AdminMessagesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v1)['admin-messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AdminMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1AdminMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1['admin-messages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1AnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.$get>>,
) {
  return ['options', '/options/v1/analytics', toValue(args)] as const
}

export function getOptionsV1AnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1AnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1Analytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>
            >
          >,
          ReturnType<typeof getOptionsV1AnalyticsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1AnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1AnalyticsExpirationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.expiration.$get>>,
) {
  return ['options', '/options/v1/analytics/expiration', toValue(args)] as const
}

export function getOptionsV1AnalyticsExpirationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.expiration.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1AnalyticsExpirationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1.analytics.expiration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1AnalyticsExpiration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.expiration.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1AnalyticsExpirationQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.options.v1.analytics.expiration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsExpirationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1AnalyticsExpirationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1.analytics.expiration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1AnalyticsStrikeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.strike.$get>>,
) {
  return ['options', '/options/v1/analytics/strike', toValue(args)] as const
}

export function getOptionsV1AnalyticsStrikeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.strike.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1AnalyticsStrikeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1.analytics.strike.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1AnalyticsStrike<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.strike.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1AnalyticsStrikeQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.strike.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsStrikeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1AnalyticsStrikeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1.analytics.strike.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1AnalyticsUnderlyingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.underlying.$get>>,
) {
  return ['options', '/options/v1/analytics/underlying', toValue(args)] as const
}

export function getOptionsV1AnalyticsUnderlyingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.underlying.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1AnalyticsUnderlyingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1.analytics.underlying.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1AnalyticsUnderlying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.analytics.underlying.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1AnalyticsUnderlyingQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.options.v1.analytics.underlying.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1AnalyticsUnderlyingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1AnalyticsUnderlyingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1.analytics.underlying.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1ExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.exchanges.$get>>,
) {
  return ['options', '/options/v1/exchanges', toValue(args)] as const
}

export function getOptionsV1ExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1ExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.options.v1.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getOptionsV1ExchangesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.options.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1ExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1ExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1OpenInterestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['open-interest']['$get']>>,
) {
  return ['options', '/options/v1/open-interest', toValue(args)] as const
}

export function getOptionsV1OpenInterestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['open-interest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1OpenInterestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1['open-interest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1OpenInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['open-interest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1OpenInterestQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v1)['open-interest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1OpenInterestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1OpenInterestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1['open-interest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1OpenInterestUnderlyingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>
  >,
) {
  return ['options', '/options/v1/open-interest/underlying', toValue(args)] as const
}

export function getOptionsV1OpenInterestUnderlyingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1OpenInterestUnderlyingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1['open-interest'].underlying.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1OpenInterestUnderlying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOptionsV1OpenInterestUnderlyingQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v1)['open-interest']['underlying']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1OpenInterestUnderlyingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1OpenInterestUnderlyingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1['open-interest'].underlying.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV1UnusualTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>>,
) {
  return ['options', '/options/v1/unusual-trades', toValue(args)] as const
}

export function getOptionsV1UnusualTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV1UnusualTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v1['unusual-trades'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV1UnusualTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptionsV1UnusualTradesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v1)['unusual-trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV1UnusualTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV1UnusualTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v1['unusual-trades'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV3QuotesTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>>,
) {
  return ['options', '/options/v3/quotes/:ticker', toValue(args)] as const
}

export function getOptionsV3QuotesTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV3QuotesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v3.quotes[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV3QuotesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptionsV3QuotesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v3.quotes)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV3QuotesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV3QuotesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v3.quotes[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsV3TradesTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>>,
) {
  return ['options', '/options/v3/trades/:ticker', toValue(args)] as const
}

export function getOptionsV3TradesTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOptionsV3TradesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.options.v3.trades[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOptionsV3TradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOptionsV3TradesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.options.v3.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOptionsV3TradesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOptionsV3TradesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.options.v3.trades[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksDevTradesTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>,
) {
  return ['stocks', '/stocks/dev/trades/:ticker', toValue(args)] as const
}

export function getStocksDevTradesTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksDevTradesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.dev.trades[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksDevTradesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksDevTradesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.dev.trades)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksDevTradesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksDevTradesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.dev.trades[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilings10KVXSectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>
  >,
) {
  return ['stocks', '/stocks/filings/10-K/vX/sections', toValue(args)] as const
}

export function getStocksFilings10KVXSectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilings10KVXSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings['10-K'].vX.sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilings10KVXSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStocksFilings10KVXSectionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings10KVXSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilings10KVXSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings['10-K'].vX.sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilings10KVX0SectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>
  >,
) {
  return ['stocks', '/stocks/filings/10-K/vX_0/sections', toValue(args)] as const
}

export function getStocksFilings10KVX0SectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilings10KVX0SectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings['10-K'].vX_0.sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilings10KVX0Sections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStocksFilings10KVX0SectionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings10KVX0SectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilings10KVX0SectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings['10-K'].vX_0.sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilings8KVXDisclosuresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>
  >,
) {
  return ['stocks', '/stocks/filings/8-K/vX/disclosures', toValue(args)] as const
}

export function getStocksFilings8KVXDisclosuresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilings8KVXDisclosuresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings['8-K'].vX.disclosures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilings8KVXDisclosures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStocksFilings8KVXDisclosuresQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings8KVXDisclosuresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilings8KVXDisclosuresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings['8-K'].vX.disclosures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilings8KVXTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>
  >,
) {
  return ['stocks', '/stocks/filings/8-K/vX/text', toValue(args)] as const
}

export function getStocksFilings8KVXTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilings8KVXTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings['8-K'].vX.text.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilings8KVXText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilings8KVXTextQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilings8KVXTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilings8KVXTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings['8-K'].vX.text.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVX13FQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>>,
) {
  return ['stocks', '/stocks/filings/vX/13-F', toValue(args)] as const
}

export function getStocksFilingsVX13FQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVX13FQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX['13-F'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVX13F<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilingsVX13FQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['13-F']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVX13FQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVX13FQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX['13-F'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVXForm3QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>>,
) {
  return ['stocks', '/stocks/filings/vX/form-3', toValue(args)] as const
}

export function getStocksFilingsVXForm3QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVXForm3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX['form-3'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVXForm3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilingsVXForm3QueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-3']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVXForm3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX['form-3'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVXForm4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>>,
) {
  return ['stocks', '/stocks/filings/vX/form-4', toValue(args)] as const
}

export function getStocksFilingsVXForm4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVXForm4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX['form-4'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVXForm4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilingsVXForm4QueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVXForm4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX['form-4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVXForm5QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>>,
) {
  return ['stocks', '/stocks/filings/vX/form-5', toValue(args)] as const
}

export function getStocksFilingsVXForm5QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVXForm5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX['form-5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVXForm5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilingsVXForm5QueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['form-5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXForm5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVXForm5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX['form-5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVXIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.filings.vX.index.$get>>,
) {
  return ['stocks', '/stocks/filings/vX/index', toValue(args)] as const
}

export function getStocksFilingsVXIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.filings.vX.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVXIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVXIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.filings.vX.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
            >
          >,
          ReturnType<typeof getStocksFilingsVXIndexQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.filings.vX.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVXIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFilingsVXRiskFactorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>
  >,
) {
  return ['stocks', '/stocks/filings/vX/risk-factors', toValue(args)] as const
}

export function getStocksFilingsVXRiskFactorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFilingsVXRiskFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.filings.vX['risk-factors'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFilingsVXRiskFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFilingsVXRiskFactorsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFilingsVXRiskFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFilingsVXRiskFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.filings.vX['risk-factors'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFinancialsV1BalanceSheetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>
  >,
) {
  return ['stocks', '/stocks/financials/v1/balance-sheets', toValue(args)] as const
}

export function getStocksFinancialsV1BalanceSheetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFinancialsV1BalanceSheetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.financials.v1['balance-sheets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFinancialsV1BalanceSheets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksFinancialsV1BalanceSheetsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1BalanceSheetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFinancialsV1BalanceSheetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.financials.v1['balance-sheets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFinancialsV1CashFlowStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
  >,
) {
  return ['stocks', '/stocks/financials/v1/cash-flow-statements', toValue(args)] as const
}

export function getStocksFinancialsV1CashFlowStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFinancialsV1CashFlowStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.financials.v1['cash-flow-statements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFinancialsV1CashFlowStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStocksFinancialsV1CashFlowStatementsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1CashFlowStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFinancialsV1CashFlowStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.financials.v1['cash-flow-statements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFinancialsV1IncomeStatementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>
  >,
) {
  return ['stocks', '/stocks/financials/v1/income-statements', toValue(args)] as const
}

export function getStocksFinancialsV1IncomeStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFinancialsV1IncomeStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.financials.v1['income-statements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFinancialsV1IncomeStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStocksFinancialsV1IncomeStatementsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.financials.v1)['income-statements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1IncomeStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFinancialsV1IncomeStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.financials.v1['income-statements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksFinancialsV1RatiosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.financials.v1.ratios.$get>>,
) {
  return ['stocks', '/stocks/financials/v1/ratios', toValue(args)] as const
}

export function getStocksFinancialsV1RatiosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.financials.v1.ratios.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksFinancialsV1RatiosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.financials.v1.ratios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksFinancialsV1Ratios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.financials.v1.ratios.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>
              >
            >
          >,
          ReturnType<typeof getStocksFinancialsV1RatiosQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.financials.v1.ratios.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksFinancialsV1RatiosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksFinancialsV1RatiosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.financials.v1.ratios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksInsidersVXActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.activity.$get>>,
) {
  return ['stocks', '/stocks/insiders/vX/activity', toValue(args)] as const
}

export function getStocksInsidersVXActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksInsidersVXActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.insiders.vX.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksInsidersVXActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>
              >
            >
          >,
          ReturnType<typeof getStocksInsidersVXActivityQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksInsidersVXActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksInsidersVXActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.insiders.vX.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksInsidersVXHoldingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>>,
) {
  return ['stocks', '/stocks/insiders/vX/holdings', toValue(args)] as const
}

export function getStocksInsidersVXHoldingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksInsidersVXHoldingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.insiders.vX.holdings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksInsidersVXHoldings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>
              >
            >
          >,
          ReturnType<typeof getStocksInsidersVXHoldingsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stocks.insiders.vX.holdings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksInsidersVXHoldingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksInsidersVXHoldingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.insiders.vX.holdings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksTaxonomiesVXDisclosuresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>>,
) {
  return ['stocks', '/stocks/taxonomies/vX/disclosures', toValue(args)] as const
}

export function getStocksTaxonomiesVXDisclosuresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksTaxonomiesVXDisclosuresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.taxonomies.vX.disclosures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksTaxonomiesVXDisclosures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
              >
            >
          >,
          ReturnType<typeof getStocksTaxonomiesVXDisclosuresQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.stocks.taxonomies.vX.disclosures.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksTaxonomiesVXDisclosuresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksTaxonomiesVXDisclosuresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.taxonomies.vX.disclosures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksTaxonomiesVXRiskFactorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>
  >,
) {
  return ['stocks', '/stocks/taxonomies/vX/risk-factors', toValue(args)] as const
}

export function getStocksTaxonomiesVXRiskFactorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksTaxonomiesVXRiskFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.taxonomies.vX['risk-factors'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksTaxonomiesVXRiskFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksTaxonomiesVXRiskFactorsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksTaxonomiesVXRiskFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksTaxonomiesVXRiskFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.taxonomies.vX['risk-factors'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksV1DividendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.dividends.$get>>,
) {
  return ['stocks', '/stocks/v1/dividends', toValue(args)] as const
}

export function getStocksV1DividendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.dividends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksV1DividendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.v1.dividends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksV1Dividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.dividends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>
            >
          >,
          ReturnType<typeof getStocksV1DividendsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.dividends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1DividendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksV1DividendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.v1.dividends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksV1ExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.exchanges.$get>>,
) {
  return ['stocks', '/stocks/v1/exchanges', toValue(args)] as const
}

export function getStocksV1ExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksV1ExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.v1.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksV1Exchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getStocksV1ExchangesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksV1ExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.v1.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksV1ShortInterestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>>,
) {
  return ['stocks', '/stocks/v1/short-interest', toValue(args)] as const
}

export function getStocksV1ShortInterestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksV1ShortInterestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.v1['short-interest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksV1ShortInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksV1ShortInterestQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.stocks.v1)['short-interest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ShortInterestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksV1ShortInterestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.v1['short-interest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksV1ShortVolumeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>>,
) {
  return ['stocks', '/stocks/v1/short-volume', toValue(args)] as const
}

export function getStocksV1ShortVolumeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksV1ShortVolumeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.v1['short-volume'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksV1ShortVolume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStocksV1ShortVolumeQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stocks.v1)['short-volume']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1ShortVolumeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksV1ShortVolumeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.v1['short-volume'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksV1SplitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.splits.$get>>,
) {
  return ['stocks', '/stocks/v1/splits', toValue(args)] as const
}

export function getStocksV1SplitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.splits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksV1SplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.v1.splits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksV1Splits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.v1.splits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>
            >
          >,
          ReturnType<typeof getStocksV1SplitsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.v1.splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksV1SplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksV1SplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.v1.splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksVXFloatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.vX.float.$get>>,
) {
  return ['stocks', '/stocks/vX/float', toValue(args)] as const
}

export function getStocksVXFloatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.vX.float.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksVXFloatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.vX.float.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStocksVXFloat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.vX.float.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>
            >
          >,
          ReturnType<typeof getStocksVXFloatQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.vX.float.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStocksVXFloatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksVXFloatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.vX.float.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTmxV1CorporateEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>>,
) {
  return ['tmx', '/tmx/v1/corporate-events', toValue(args)] as const
}

export function getTmxV1CorporateEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTmxV1CorporateEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tmx.v1['corporate-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTmxV1CorporateEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTmxV1CorporateEventsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.tmx.v1)['corporate-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTmxV1CorporateEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTmxV1CorporateEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tmx.v1['corporate-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConversionFromToQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>>,
) {
  return ['v1', '/v1/conversion/:from/:to', toValue(args)] as const
}

export function getV1ConversionFromToQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConversionFromToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.conversion[':from'][':to'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConversionFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConversionFromToQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.conversion)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversionFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConversionFromToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.conversion[':from'][':to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1HistoricCryptoFromToDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/historic/crypto/:from/:to/:date', toValue(args)] as const
}

export function getV1HistoricCryptoFromToDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HistoricCryptoFromToDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.historic.crypto[':from'][':to'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1HistoricCryptoFromToDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1HistoricCryptoFromToDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HistoricCryptoFromToDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HistoricCryptoFromToDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.historic.crypto[':from'][':to'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1HistoricForexFromToDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/historic/forex/:from/:to/:date', toValue(args)] as const
}

export function getV1HistoricForexFromToDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HistoricForexFromToDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.historic.forex[':from'][':to'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1HistoricForexFromToDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1HistoricForexFromToDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HistoricForexFromToDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HistoricForexFromToDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.historic.forex[':from'][':to'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsEmaCryptoTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/ema/:cryptoTicker', toValue(args)] as const
}

export function getV1IndicatorsEmaCryptoTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsEmaCryptoTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.ema[':cryptoTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsEmaCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsEmaCryptoTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaCryptoTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsEmaCryptoTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.ema[':cryptoTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsEmaFxTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>,
) {
  return ['v1', '/v1/indicators/ema/:fxTicker', toValue(args)] as const
}

export function getV1IndicatorsEmaFxTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsEmaFxTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.ema[':fxTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsEmaFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsEmaFxTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaFxTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsEmaFxTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.ema[':fxTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsEmaIndicesTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/ema/:indicesTicker', toValue(args)] as const
}

export function getV1IndicatorsEmaIndicesTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsEmaIndicesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.ema[':indicesTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsEmaIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsEmaIndicesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaIndicesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsEmaIndicesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.ema[':indicesTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsEmaOptionsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/ema/:optionsTicker', toValue(args)] as const
}

export function getV1IndicatorsEmaOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsEmaOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.ema[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsEmaOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsEmaOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsEmaOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.ema[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsEmaStockTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/ema/:stockTicker', toValue(args)] as const
}

export function getV1IndicatorsEmaStockTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsEmaStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.ema[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsEmaStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsEmaStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsEmaStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsEmaStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.ema[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsMacdCryptoTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/macd/:cryptoTicker', toValue(args)] as const
}

export function getV1IndicatorsMacdCryptoTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsMacdCryptoTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.macd[':cryptoTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsMacdCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsMacdCryptoTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdCryptoTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsMacdCryptoTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.macd[':cryptoTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsMacdFxTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>,
) {
  return ['v1', '/v1/indicators/macd/:fxTicker', toValue(args)] as const
}

export function getV1IndicatorsMacdFxTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsMacdFxTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.macd[':fxTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsMacdFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsMacdFxTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdFxTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsMacdFxTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.macd[':fxTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsMacdIndicesTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/macd/:indicesTicker', toValue(args)] as const
}

export function getV1IndicatorsMacdIndicesTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsMacdIndicesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.macd[':indicesTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsMacdIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsMacdIndicesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdIndicesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsMacdIndicesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.macd[':indicesTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsMacdOptionsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/macd/:optionsTicker', toValue(args)] as const
}

export function getV1IndicatorsMacdOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsMacdOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.macd[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsMacdOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsMacdOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsMacdOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.macd[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsMacdStockTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/macd/:stockTicker', toValue(args)] as const
}

export function getV1IndicatorsMacdStockTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsMacdStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.macd[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsMacdStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsMacdStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsMacdStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsMacdStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.macd[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsRsiCryptoTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/rsi/:cryptoTicker', toValue(args)] as const
}

export function getV1IndicatorsRsiCryptoTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsRsiCryptoTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.rsi[':cryptoTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsRsiCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsRsiCryptoTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiCryptoTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsRsiCryptoTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.rsi[':cryptoTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsRsiFxTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>,
) {
  return ['v1', '/v1/indicators/rsi/:fxTicker', toValue(args)] as const
}

export function getV1IndicatorsRsiFxTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsRsiFxTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.rsi[':fxTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsRsiFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsRsiFxTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiFxTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsRsiFxTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.rsi[':fxTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsRsiIndicesTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/rsi/:indicesTicker', toValue(args)] as const
}

export function getV1IndicatorsRsiIndicesTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsRsiIndicesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.rsi[':indicesTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsRsiIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsRsiIndicesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiIndicesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsRsiIndicesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.rsi[':indicesTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsRsiOptionsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/rsi/:optionsTicker', toValue(args)] as const
}

export function getV1IndicatorsRsiOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsRsiOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.rsi[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsRsiOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsRsiOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsRsiOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.rsi[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsRsiStockTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/rsi/:stockTicker', toValue(args)] as const
}

export function getV1IndicatorsRsiStockTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsRsiStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.rsi[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsRsiStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsRsiStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsRsiStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsRsiStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.rsi[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsSmaCryptoTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/sma/:cryptoTicker', toValue(args)] as const
}

export function getV1IndicatorsSmaCryptoTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsSmaCryptoTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.sma[':cryptoTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsSmaCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsSmaCryptoTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaCryptoTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsSmaCryptoTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.sma[':cryptoTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsSmaFxTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>,
) {
  return ['v1', '/v1/indicators/sma/:fxTicker', toValue(args)] as const
}

export function getV1IndicatorsSmaFxTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsSmaFxTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.sma[':fxTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsSmaFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsSmaFxTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaFxTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsSmaFxTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.sma[':fxTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsSmaIndicesTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/sma/:indicesTicker', toValue(args)] as const
}

export function getV1IndicatorsSmaIndicesTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsSmaIndicesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.sma[':indicesTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsSmaIndicesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsSmaIndicesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaIndicesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsSmaIndicesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.sma[':indicesTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsSmaOptionsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/sma/:optionsTicker', toValue(args)] as const
}

export function getV1IndicatorsSmaOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsSmaOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.sma[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsSmaOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsSmaOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsSmaOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.sma[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicatorsSmaStockTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>
  >,
) {
  return ['v1', '/v1/indicators/sma/:stockTicker', toValue(args)] as const
}

export function getV1IndicatorsSmaStockTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicatorsSmaStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indicators.sma[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IndicatorsSmaStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IndicatorsSmaStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndicatorsSmaStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicatorsSmaStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indicators.sma[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LastCryptoFromToQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>,
) {
  return ['v1', '/v1/last/crypto/:from/:to', toValue(args)] as const
}

export function getV1LastCryptoFromToQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LastCryptoFromToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.last.crypto[':from'][':to'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LastCryptoFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LastCryptoFromToQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LastCryptoFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LastCryptoFromToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.last.crypto[':from'][':to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LastQuoteCurrenciesFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>
  >,
) {
  return ['v1', '/v1/last_quote/currencies/:from/:to', toValue(args)] as const
}

export function getV1LastQuoteCurrenciesFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LastQuoteCurrenciesFromToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.last_quote.currencies[':from'][':to'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LastQuoteCurrenciesFromTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1LastQuoteCurrenciesFromToQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LastQuoteCurrenciesFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LastQuoteCurrenciesFromToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.last_quote.currencies[':from'][':to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MarketstatusNowQueryKey() {
  return ['v1', '/v1/marketstatus/now'] as const
}

export function getV1MarketstatusNowQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1MarketstatusNowQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.marketstatus.now.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MarketstatusNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>
            >
          >,
          ReturnType<typeof getV1MarketstatusNowQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.now.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketstatusNowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1MarketstatusNowQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.marketstatus.now.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MarketstatusUpcomingQueryKey() {
  return ['v1', '/v1/marketstatus/upcoming'] as const
}

export function getV1MarketstatusUpcomingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1MarketstatusUpcomingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.marketstatus.upcoming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MarketstatusUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getV1MarketstatusUpcomingQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.marketstatus.upcoming.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketstatusUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1MarketstatusUpcomingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.marketstatus.upcoming.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OpenCloseCryptoFromToDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/open-close/crypto/:from/:to/:date', toValue(args)] as const
}

export function getV1OpenCloseCryptoFromToDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OpenCloseCryptoFromToDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['open-close'].crypto[':from'][':to'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OpenCloseCryptoFromToDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
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
                    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
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
                    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OpenCloseCryptoFromToDateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseCryptoFromToDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OpenCloseCryptoFromToDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['open-close'].crypto[':from'][':to'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OpenCloseIndicesTickerDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/open-close/:indicesTicker/:date', toValue(args)] as const
}

export function getV1OpenCloseIndicesTickerDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OpenCloseIndicesTickerDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['open-close'][':indicesTicker'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OpenCloseIndicesTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OpenCloseIndicesTickerDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseIndicesTickerDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OpenCloseIndicesTickerDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['open-close'][':indicesTicker'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OpenCloseOptionsTickerDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/open-close/:optionsTicker/:date', toValue(args)] as const
}

export function getV1OpenCloseOptionsTickerDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OpenCloseOptionsTickerDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['open-close'][':optionsTicker'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OpenCloseOptionsTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OpenCloseOptionsTickerDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseOptionsTickerDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OpenCloseOptionsTickerDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['open-close'][':optionsTicker'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OpenCloseStocksTickerDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>
  >,
) {
  return ['v1', '/v1/open-close/:stocksTicker/:date', toValue(args)] as const
}

export function getV1OpenCloseStocksTickerDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OpenCloseStocksTickerDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['open-close'][':stocksTicker'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OpenCloseStocksTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OpenCloseStocksTickerDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenCloseStocksTickerDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OpenCloseStocksTickerDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['open-close'][':stocksTicker'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReferenceIposQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.ipos.$get>>,
) {
  return ['v1', '/v1/reference/ipos', toValue(args)] as const
}

export function getV1ReferenceIposQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.ipos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReferenceIposQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reference.ipos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReferenceIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.ipos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>
            >
          >,
          ReturnType<typeof getV1ReferenceIposQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceIposQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReferenceIposQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reference.ipos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReferenceSecFilingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.sec.filings.$get>>,
) {
  return ['v1', '/v1/reference/sec/filings', toValue(args)] as const
}

export function getV1ReferenceSecFilingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.sec.filings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReferenceSecFilingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reference.sec.filings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReferenceSecFilings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reference.sec.filings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
            >
          >,
          ReturnType<typeof getV1ReferenceSecFilingsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reference.sec.filings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReferenceSecFilingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reference.sec.filings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReferenceSecFilingsFilingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>
  >,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id', toValue(args)] as const
}

export function getV1ReferenceSecFilingsFilingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReferenceSecFilingsFilingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReferenceSecFilingsFilingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReferenceSecFilingsFilingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reference.sec.filings[':filing_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReferenceSecFilingsFilingIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
  >,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files', toValue(args)] as const
}

export function getV1ReferenceSecFilingsFilingIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReferenceSecFilingsFilingIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReferenceSecFilingsFilingIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReferenceSecFilingsFilingIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reference.sec.filings[':filing_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/reference/sec/filings/:filing_id/files/:file_id', toValue(args)] as const
}

export function getV1ReferenceSecFilingsFilingIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReferenceSecFilingsFilingIdFilesFileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
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
                    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReferenceSecFilingsFilingIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RelatedCompaniesTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>
  >,
) {
  return ['v1', '/v1/related-companies/:ticker', toValue(args)] as const
}

export function getV1RelatedCompaniesTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RelatedCompaniesTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['related-companies'][':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RelatedCompaniesTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RelatedCompaniesTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1)['related-companies'][':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RelatedCompaniesTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RelatedCompaniesTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['related-companies'][':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/crypto/:date', toValue(args)] as const
}

export function getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsGroupedLocaleGlobalMarketCryptoDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
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
                    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsGroupedLocaleGlobalMarketCryptoDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/grouped/locale/global/market/fx/:date', toValue(args)] as const
}

export function getV2AggsGroupedLocaleGlobalMarketFxDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsGroupedLocaleGlobalMarketFxDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
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
                    (typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsGroupedLocaleGlobalMarketFxDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsGroupedLocaleUsMarketStocksDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/grouped/locale/us/market/stocks/:date', toValue(args)] as const
}

export function getV2AggsGroupedLocaleUsMarketStocksDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsGroupedLocaleUsMarketStocksDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsGroupedLocaleUsMarketStocksDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
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
                    (typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']
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
                    (typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsGroupedLocaleUsMarketStocksDateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsGroupedLocaleUsMarketStocksDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsGroupedLocaleUsMarketStocksDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerCryptoTickerPrevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/ticker/:cryptoTicker/prev', toValue(args)] as const
}

export function getV2AggsTickerCryptoTickerPrevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerCryptoTickerPrevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':cryptoTicker'].prev.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsTickerCryptoTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerCryptoTickerPrevQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerCryptoTickerPrevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsTickerCryptoTickerPrevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':cryptoTicker'].prev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:cryptoTicker/range/:multiplier/:timespan/:from/:to',
    toValue(args),
  ] as const
}

export function getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AggsTickerCryptoTickerRangeMultiplierTimespanFromTo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerForexTickerPrevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/ticker/:forexTicker/prev', toValue(args)] as const
}

export function getV2AggsTickerForexTickerPrevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerForexTickerPrevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':forexTicker'].prev.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsTickerForexTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerForexTickerPrevQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerForexTickerPrevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsTickerForexTickerPrevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':forexTicker'].prev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:forexTicker/range/:multiplier/:timespan/:from/:to',
    toValue(args),
  ] as const
}

export function getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AggsTickerForexTickerRangeMultiplierTimespanFromTo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AggsTickerForexTickerRangeMultiplierTimespanFromToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerIndicesTickerPrevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/ticker/:indicesTicker/prev', toValue(args)] as const
}

export function getV2AggsTickerIndicesTickerPrevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerIndicesTickerPrevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':indicesTicker'].prev.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsTickerIndicesTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerIndicesTickerPrevQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerIndicesTickerPrevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsTickerIndicesTickerPrevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':indicesTicker'].prev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:indicesTicker/range/:multiplier/:timespan/:from/:to',
    toValue(args),
  ] as const
}

export function getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AggsTickerIndicesTickerRangeMultiplierTimespanFromTo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerOptionsTickerPrevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/ticker/:optionsTicker/prev', toValue(args)] as const
}

export function getV2AggsTickerOptionsTickerPrevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerOptionsTickerPrevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':optionsTicker'].prev.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsTickerOptionsTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerOptionsTickerPrevQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerOptionsTickerPrevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsTickerOptionsTickerPrevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':optionsTicker'].prev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:optionsTicker/range/:multiplier/:timespan/:from/:to',
    toValue(args),
  ] as const
}

export function getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AggsTickerOptionsTickerRangeMultiplierTimespanFromTo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerStocksTickerPrevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>
  >,
) {
  return ['v2', '/v2/aggs/ticker/:stocksTicker/prev', toValue(args)] as const
}

export function getV2AggsTickerStocksTickerPrevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AggsTickerStocksTickerPrevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':stocksTicker'].prev.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AggsTickerStocksTickerPrev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerStocksTickerPrevQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerStocksTickerPrevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AggsTickerStocksTickerPrevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':stocksTicker'].prev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/aggs/ticker/:stocksTicker/range/:multiplier/:timespan/:from/:to',
    toValue(args),
  ] as const
}

export function getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AggsTickerStocksTickerRangeMultiplierTimespanFromTo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
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
                    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LastNbboStocksTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>,
) {
  return ['v2', '/v2/last/nbbo/:stocksTicker', toValue(args)] as const
}

export function getV2LastNbboStocksTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LastNbboStocksTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.last.nbbo[':stocksTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LastNbboStocksTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LastNbboStocksTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastNbboStocksTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LastNbboStocksTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.last.nbbo[':stocksTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LastTradeOptionsTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>,
) {
  return ['v2', '/v2/last/trade/:optionsTicker', toValue(args)] as const
}

export function getV2LastTradeOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LastTradeOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.last.trade[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LastTradeOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LastTradeOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastTradeOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LastTradeOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.last.trade[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LastTradeStocksTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>,
) {
  return ['v2', '/v2/last/trade/:stocksTicker', toValue(args)] as const
}

export function getV2LastTradeStocksTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LastTradeStocksTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.last.trade[':stocksTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LastTradeStocksTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LastTradeStocksTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LastTradeStocksTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LastTradeStocksTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.last.trade[':stocksTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ReferenceNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reference.news.$get>>,
) {
  return ['v2', '/v2/reference/news', toValue(args)] as const
}

export function getV2ReferenceNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reference.news.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReferenceNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reference.news.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReferenceNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reference.news.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>
            >
          >,
          ReturnType<typeof getV2ReferenceNewsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reference.news.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReferenceNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReferenceNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reference.news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsCryptoTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoTickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.crypto.tickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
    >
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsCryptoTickersTicker<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/snapshot/locale/global/markets/crypto/tickers/:ticker/book',
    toValue(args),
  ] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBook<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']>
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/crypto/:direction', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsCryptoDirection<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']>
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsCryptoDirectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex.tickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsForexTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexTickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.forex.tickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
    >
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/tickers/:ticker', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsForexTickersTicker<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexTickersTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']>
  >,
) {
  return ['v2', '/v2/snapshot/locale/global/markets/forex/:direction', toValue(args)] as const
}

export function getV2SnapshotLocaleGlobalMarketsForexDirectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.global.markets.forex[':direction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleGlobalMarketsForexDirection<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']>
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
                    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleGlobalMarketsForexDirectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.global.markets.forex[':direction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleUsMarketsStocksTickersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/tickers', toValue(args)] as const
}

export function getV2SnapshotLocaleUsMarketsStocksTickersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksTickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks.tickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleUsMarketsStocksTickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksTickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.us.markets.stocks.tickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/snapshot/locale/us/markets/stocks/tickers/:stocksTicker',
    toValue(args),
  ] as const
}

export function getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleUsMarketsStocksTickersStocksTicker<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
  >,
) {
  return ['v2', '/v2/snapshot/locale/us/markets/stocks/:direction', toValue(args)] as const
}

export function getV2SnapshotLocaleUsMarketsStocksDirectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotLocaleUsMarketsStocksDirection<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
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
                    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotLocaleUsMarketsStocksDirectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TicksStocksNbboTickerDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>
  >,
) {
  return ['v2', '/v2/ticks/stocks/nbbo/:ticker/:date', toValue(args)] as const
}

export function getV2TicksStocksNbboTickerDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TicksStocksNbboTickerDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TicksStocksNbboTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2TicksStocksNbboTickerDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TicksStocksNbboTickerDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TicksStocksNbboTickerDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TicksStocksTradesTickerDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>
  >,
) {
  return ['v2', '/v2/ticks/stocks/trades/:ticker/:date', toValue(args)] as const
}

export function getV2TicksStocksTradesTickerDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TicksStocksTradesTickerDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.ticks.stocks.trades[':ticker'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TicksStocksTradesTickerDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2TicksStocksTradesTickerDateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TicksStocksTradesTickerDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TicksStocksTradesTickerDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.ticks.stocks.trades[':ticker'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3QuotesFxTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>>,
) {
  return ['v3', '/v3/quotes/:fxTicker', toValue(args)] as const
}

export function getV3QuotesFxTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3QuotesFxTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.quotes[':fxTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3QuotesFxTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3QuotesFxTickerQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':fxTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesFxTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3QuotesFxTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.quotes[':fxTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3QuotesOptionsTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>,
) {
  return ['v3', '/v3/quotes/:optionsTicker', toValue(args)] as const
}

export function getV3QuotesOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3QuotesOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.quotes[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3QuotesOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3QuotesOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v3.quotes)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3QuotesOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.quotes[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3QuotesStockTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>>,
) {
  return ['v3', '/v3/quotes/:stockTicker', toValue(args)] as const
}

export function getV3QuotesStockTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3QuotesStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.quotes[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3QuotesStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3QuotesStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.quotes)[':stockTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3QuotesStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3QuotesStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.quotes[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceConditionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.conditions.$get>>,
) {
  return ['v3', '/v3/reference/conditions', toValue(args)] as const
}

export function getV3ReferenceConditionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.conditions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceConditionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.conditions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceConditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.conditions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
            >
          >,
          ReturnType<typeof getV3ReferenceConditionsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.conditions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceConditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceConditionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.conditions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceDividendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.dividends.$get>>,
) {
  return ['v3', '/v3/reference/dividends', toValue(args)] as const
}

export function getV3ReferenceDividendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.dividends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceDividendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.dividends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceDividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.dividends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
            >
          >,
          ReturnType<typeof getV3ReferenceDividendsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.dividends.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceDividendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceDividendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.dividends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.exchanges.$get>>,
) {
  return ['v3', '/v3/reference/exchanges', toValue(args)] as const
}

export function getV3ReferenceExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceExchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getV3ReferenceExchangesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceOptionsContractsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.options.contracts.$get>>,
) {
  return ['v3', '/v3/reference/options/contracts', toValue(args)] as const
}

export function getV3ReferenceOptionsContractsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.options.contracts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceOptionsContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.options.contracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceOptionsContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.options.contracts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>
              >
            >
          >,
          ReturnType<typeof getV3ReferenceOptionsContractsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.options.contracts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceOptionsContractsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceOptionsContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.options.contracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceOptionsContractsOptionsTickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
  >,
) {
  return ['v3', '/v3/reference/options/contracts/:options_ticker', toValue(args)] as const
}

export function getV3ReferenceOptionsContractsOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceOptionsContractsOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.options.contracts[':options_ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceOptionsContractsOptionsTicker<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
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
                    (typeof client.v3.reference.options.contracts)[':options_ticker']['$get']
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
                    (typeof client.v3.reference.options.contracts)[':options_ticker']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3ReferenceOptionsContractsOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceOptionsContractsOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceOptionsContractsOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.options.contracts[':options_ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceSplitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.splits.$get>>,
) {
  return ['v3', '/v3/reference/splits', toValue(args)] as const
}

export function getV3ReferenceSplitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.splits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceSplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.splits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceSplits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.splits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>
            >
          >,
          ReturnType<typeof getV3ReferenceSplitsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceSplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceSplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceTickersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.$get>>,
) {
  return ['v3', '/v3/reference/tickers', toValue(args)] as const
}

export function getV3ReferenceTickersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceTickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.tickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceTickers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>
            >
          >,
          ReturnType<typeof getV3ReferenceTickersQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceTickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.tickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceTickersTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.types.$get>>,
) {
  return ['v3', '/v3/reference/tickers/types', toValue(args)] as const
}

export function getV3ReferenceTickersTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceTickersTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.tickers.types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceTickersTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.reference.tickers.types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>
              >
            >
          >,
          ReturnType<typeof getV3ReferenceTickersTypesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.reference.tickers.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceTickersTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.tickers.types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ReferenceTickersTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>,
) {
  return ['v3', '/v3/reference/tickers/:ticker', toValue(args)] as const
}

export function getV3ReferenceTickersTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ReferenceTickersTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.reference.tickers[':ticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ReferenceTickersTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ReferenceTickersTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v3.reference.tickers)[':ticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ReferenceTickersTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ReferenceTickersTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.reference.tickers[':ticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.$get>>,
) {
  return ['v3', '/v3/snapshot', toValue(args)] as const
}

export function getV3SnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.snapshot.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Snapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>
          >,
          ReturnType<typeof getV3SnapshotQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SnapshotIndicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.indices.$get>>,
) {
  return ['v3', '/v3/snapshot/indices', toValue(args)] as const
}

export function getV3SnapshotIndicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.indices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SnapshotIndicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.snapshot.indices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SnapshotIndices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.snapshot.indices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>
            >
          >,
          ReturnType<typeof getV3SnapshotIndicesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.snapshot.indices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotIndicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SnapshotIndicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.snapshot.indices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SnapshotOptionsUnderlyingAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>
  >,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset', toValue(args)] as const
}

export function getV3SnapshotOptionsUnderlyingAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SnapshotOptionsUnderlyingAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.snapshot.options[':underlyingAsset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SnapshotOptionsUnderlyingAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SnapshotOptionsUnderlyingAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.snapshot.options[':underlyingAsset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
    >
  >,
) {
  return ['v3', '/v3/snapshot/options/:underlyingAsset/:optionContract', toValue(args)] as const
}

export function getV3SnapshotOptionsUnderlyingAssetOptionContractQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SnapshotOptionsUnderlyingAssetOptionContract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
                    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
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
                    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SnapshotOptionsUnderlyingAssetOptionContractQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TradesCryptoTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>,
) {
  return ['v3', '/v3/trades/:cryptoTicker', toValue(args)] as const
}

export function getV3TradesCryptoTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TradesCryptoTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.trades[':cryptoTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TradesCryptoTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3TradesCryptoTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v3.trades)[':cryptoTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesCryptoTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TradesCryptoTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.trades[':cryptoTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TradesOptionsTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>>,
) {
  return ['v3', '/v3/trades/:optionsTicker', toValue(args)] as const
}

export function getV3TradesOptionsTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TradesOptionsTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.trades[':optionsTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TradesOptionsTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3TradesOptionsTickerQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v3.trades)[':optionsTicker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesOptionsTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TradesOptionsTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.trades[':optionsTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TradesStockTickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>>,
) {
  return ['v3', '/v3/trades/:stockTicker', toValue(args)] as const
}

export function getV3TradesStockTickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TradesStockTickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.trades[':stockTicker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TradesStockTicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3TradesStockTickerQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.trades)[':stockTicker']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TradesStockTickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TradesStockTickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.trades[':stockTicker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVXReferenceIposQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vX.reference.ipos.$get>>,
) {
  return ['vX', '/vX/reference/ipos', toValue(args)] as const
}

export function getVXReferenceIposQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vX.reference.ipos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVXReferenceIposQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vX.reference.ipos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVXReferenceIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vX.reference.ipos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>
            >
          >,
          ReturnType<typeof getVXReferenceIposQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vX.reference.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVXReferenceIposQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVXReferenceIposQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vX.reference.ipos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVXReferenceTickersIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>
  >,
) {
  return ['vX', '/vX/reference/tickers/:id/events', toValue(args)] as const
}

export function getVXReferenceTickersIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVXReferenceTickersIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vX.reference.tickers[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVXReferenceTickersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVXReferenceTickersIdEventsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVXReferenceTickersIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVXReferenceTickersIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vX.reference.tickers[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

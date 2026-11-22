import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CorrelationQueryKey(
  args: InferRequestType<typeof client.v1.correlation.$get>,
) {
  return ['v1', '/v1/correlation', args] as const
}

export function getV1CorrelationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.correlation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorrelationQueryKey>
  >({
    queryKey: getV1CorrelationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.correlation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Correlation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.correlation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1CorrelationQueryKey>
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
    return { ...getV1CorrelationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1IndicesQueryKey(args: InferRequestType<typeof client.v1.indices.$get>) {
  return ['v1', '/v1/indices', args] as const
}

export function getV1IndicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.indices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IndicesQueryKey>
  >({
    queryKey: getV1IndicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Indices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.indices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndicesQueryKey>
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
    return { ...getV1IndicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1InvestorGradesQueryKey(
  args: InferRequestType<(typeof client.v1)['investor-grades']['$get']>,
) {
  return ['v1', '/v1/investor-grades', args] as const
}

export function getV1InvestorGradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['investor-grades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvestorGradesQueryKey>
  >({
    queryKey: getV1InvestorGradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['investor-grades'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1InvestorGrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['investor-grades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1InvestorGradesQueryKey>
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
    return { ...getV1InvestorGradesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1MarketIndicatorQueryKey(
  args: InferRequestType<(typeof client.v1)['market-indicator']['$get']>,
) {
  return ['v1', '/v1/market-indicator', args] as const
}

export function getV1MarketIndicatorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['market-indicator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketIndicatorQueryKey>
  >({
    queryKey: getV1MarketIndicatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['market-indicator'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MarketIndicator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['market-indicator']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1MarketIndicatorQueryKey>
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
    return { ...getV1MarketIndicatorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PriceQueryKey(args: InferRequestType<typeof client.v1.price.$get>) {
  return ['v1', '/v1/price', args] as const
}

export function getV1PriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PriceQueryKey>
  >({
    queryKey: getV1PriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Price<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.price.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1PriceQueryKey>
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
    return { ...getV1PriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PricePredictionQueryKey(
  args: InferRequestType<(typeof client.v1)['price-prediction']['$get']>,
) {
  return ['v1', '/v1/price-prediction', args] as const
}

export function getV1PricePredictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['price-prediction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PricePredictionQueryKey>
  >({
    queryKey: getV1PricePredictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['price-prediction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PricePrediction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['price-prediction']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PricePredictionQueryKey>
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
    return { ...getV1PricePredictionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1QuantmetricsTier1QueryKey(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>,
) {
  return ['v1', '/v1/quantmetrics-tier-1', args] as const
}

export function getV1QuantmetricsTier1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuantmetricsTier1QueryKey>
  >({
    queryKey: getV1QuantmetricsTier1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['quantmetrics-tier-1'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1QuantmetricsTier1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1QuantmetricsTier1QueryKey>
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
    return { ...getV1QuantmetricsTier1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1QuantmetricsTier2QueryKey(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>,
) {
  return ['v1', '/v1/quantmetrics-tier-2', args] as const
}

export function getV1QuantmetricsTier2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuantmetricsTier2QueryKey>
  >({
    queryKey: getV1QuantmetricsTier2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['quantmetrics-tier-2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1QuantmetricsTier2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1QuantmetricsTier2QueryKey>
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
    return { ...getV1QuantmetricsTier2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ResistanceSupportQueryKey(
  args: InferRequestType<(typeof client.v1)['resistance-support']['$get']>,
) {
  return ['v1', '/v1/resistance-support', args] as const
}

export function getV1ResistanceSupportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['resistance-support']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResistanceSupportQueryKey>
  >({
    queryKey: getV1ResistanceSupportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['resistance-support'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ResistanceSupport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['resistance-support']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ResistanceSupportQueryKey>
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
    return { ...getV1ResistanceSupportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ScenarioAnalysisQueryKey(
  args: InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>,
) {
  return ['v1', '/v1/scenario-analysis', args] as const
}

export function getV1ScenarioAnalysisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScenarioAnalysisQueryKey>
  >({
    queryKey: getV1ScenarioAnalysisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['scenario-analysis'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ScenarioAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ScenarioAnalysisQueryKey>
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
    return { ...getV1ScenarioAnalysisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1SentimentsQueryKey(args: InferRequestType<typeof client.v1.sentiments.$get>) {
  return ['v1', '/v1/sentiments', args] as const
}

export function getV1SentimentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.sentiments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SentimentsQueryKey>
  >({
    queryKey: getV1SentimentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sentiments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Sentiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.sentiments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1SentimentsQueryKey>
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
    return { ...getV1SentimentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TokensQueryKey(args: InferRequestType<typeof client.v1.tokens.$get>) {
  return ['v1', '/v1/tokens', args] as const
}

export function getV1TokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >({
    queryKey: getV1TokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tokens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TokensQueryKey>
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
    return { ...getV1TokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TraderGradesQueryKey(
  args: InferRequestType<(typeof client.v1)['trader-grades']['$get']>,
) {
  return ['v1', '/v1/trader-grades', args] as const
}

export function getV1TraderGradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['trader-grades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TraderGradesQueryKey>
  >({
    queryKey: getV1TraderGradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['trader-grades'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TraderGrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['trader-grades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TraderGradesQueryKey>
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
    return { ...getV1TraderGradesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TradingIndicatorQueryKey(
  args: InferRequestType<(typeof client.v1)['trading-indicator']['$get']>,
) {
  return ['v1', '/v1/trading-indicator', args] as const
}

export function getV1TradingIndicatorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['trading-indicator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingIndicatorQueryKey>
  >({
    queryKey: getV1TradingIndicatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['trading-indicator'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TradingIndicator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['trading-indicator']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TradingIndicatorQueryKey>
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
    return { ...getV1TradingIndicatorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

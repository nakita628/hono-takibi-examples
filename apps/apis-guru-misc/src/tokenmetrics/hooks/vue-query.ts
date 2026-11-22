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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CorrelationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.correlation.$get>>,
) {
  return ['v1', '/v1/correlation', toValue(args)] as const
}

export function getV1CorrelationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.correlation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CorrelationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.correlation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Correlation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.correlation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
          >,
          ReturnType<typeof getV1CorrelationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.correlation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorrelationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CorrelationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.correlation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IndicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.indices.$get>>,
) {
  return ['v1', '/v1/indices', toValue(args)] as const
}

export function getV1IndicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.indices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IndicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.indices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Indices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.indices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>
          >,
          ReturnType<typeof getV1IndicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.indices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IndicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IndicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.indices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InvestorGradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['investor-grades']['$get']>>,
) {
  return ['v1', '/v1/investor-grades', toValue(args)] as const
}

export function getV1InvestorGradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['investor-grades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InvestorGradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['investor-grades'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InvestorGrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['investor-grades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InvestorGradesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['investor-grades']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvestorGradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InvestorGradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['investor-grades'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MarketIndicatorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['market-indicator']['$get']>>,
) {
  return ['v1', '/v1/market-indicator', toValue(args)] as const
}

export function getV1MarketIndicatorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['market-indicator']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MarketIndicatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['market-indicator'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MarketIndicator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['market-indicator']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MarketIndicatorQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['market-indicator']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MarketIndicatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MarketIndicatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['market-indicator'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.price.$get>>,
) {
  return ['v1', '/v1/price', toValue(args)] as const
}

export function getV1PriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.price.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Price<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>
          >,
          ReturnType<typeof getV1PriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PricePredictionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['price-prediction']['$get']>>,
) {
  return ['v1', '/v1/price-prediction', toValue(args)] as const
}

export function getV1PricePredictionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['price-prediction']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PricePredictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['price-prediction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PricePrediction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['price-prediction']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PricePredictionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['price-prediction']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PricePredictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PricePredictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['price-prediction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1QuantmetricsTier1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>,
) {
  return ['v1', '/v1/quantmetrics-tier-1', toValue(args)] as const
}

export function getV1QuantmetricsTier1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1QuantmetricsTier1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['quantmetrics-tier-1'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1QuantmetricsTier1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1QuantmetricsTier1QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuantmetricsTier1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1QuantmetricsTier1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['quantmetrics-tier-1'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1QuantmetricsTier2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>,
) {
  return ['v1', '/v1/quantmetrics-tier-2', toValue(args)] as const
}

export function getV1QuantmetricsTier2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1QuantmetricsTier2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['quantmetrics-tier-2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1QuantmetricsTier2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1QuantmetricsTier2QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['quantmetrics-tier-2']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuantmetricsTier2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1QuantmetricsTier2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['quantmetrics-tier-2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ResistanceSupportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['resistance-support']['$get']>>,
) {
  return ['v1', '/v1/resistance-support', toValue(args)] as const
}

export function getV1ResistanceSupportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['resistance-support']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResistanceSupportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['resistance-support'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResistanceSupport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['resistance-support']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ResistanceSupportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['resistance-support']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResistanceSupportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResistanceSupportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['resistance-support'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ScenarioAnalysisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>>,
) {
  return ['v1', '/v1/scenario-analysis', toValue(args)] as const
}

export function getV1ScenarioAnalysisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ScenarioAnalysisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['scenario-analysis'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ScenarioAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ScenarioAnalysisQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['scenario-analysis']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScenarioAnalysisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ScenarioAnalysisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['scenario-analysis'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SentimentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sentiments.$get>>,
) {
  return ['v1', '/v1/sentiments', toValue(args)] as const
}

export function getV1SentimentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sentiments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SentimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sentiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Sentiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sentiments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
          >,
          ReturnType<typeof getV1SentimentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sentiments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SentimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SentimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sentiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
) {
  return ['v1', '/v1/tokens', toValue(args)] as const
}

export function getV1TokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          ReturnType<typeof getV1TokensQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TraderGradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trader-grades']['$get']>>,
) {
  return ['v1', '/v1/trader-grades', toValue(args)] as const
}

export function getV1TraderGradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trader-grades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TraderGradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['trader-grades'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TraderGrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trader-grades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TraderGradesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trader-grades']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TraderGradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TraderGradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['trader-grades'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TradingIndicatorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trading-indicator']['$get']>>,
) {
  return ['v1', '/v1/trading-indicator', toValue(args)] as const
}

export function getV1TradingIndicatorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trading-indicator']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingIndicatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['trading-indicator'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingIndicator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['trading-indicator']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TradingIndicatorQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['trading-indicator']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingIndicatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingIndicatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['trading-indicator'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

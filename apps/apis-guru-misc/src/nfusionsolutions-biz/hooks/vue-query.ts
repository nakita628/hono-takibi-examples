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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CurrenciesHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.$get>>,
) {
  return ['api', '/api/v1/Currencies/history', toValue(args)] as const
}

export function getApiV1CurrenciesHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CurrenciesHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CurrenciesHistorySupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>>,
) {
  return ['api', '/api/v1/Currencies/history/supported', toValue(args)] as const
}

export function getApiV1CurrenciesHistorySupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesHistorySupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.history.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesHistorySupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CurrenciesHistorySupportedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesHistorySupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesHistorySupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.history.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CurrenciesRateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.$get>>,
) {
  return ['api', '/api/v1/Currencies/rate', toValue(args)] as const
}

export function getApiV1CurrenciesRateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.rate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesRate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CurrenciesRateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.rate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CurrenciesRateSupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>>,
) {
  return ['api', '/api/v1/Currencies/rate/supported', toValue(args)] as const
}

export function getApiV1CurrenciesRateSupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesRateSupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.rate.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesRateSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CurrenciesRateSupportedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesRateSupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesRateSupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.rate.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CurrenciesSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.$get>>,
) {
  return ['api', '/api/v1/Currencies/summary', toValue(args)] as const
}

export function getApiV1CurrenciesSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CurrenciesSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CurrenciesSummarySupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>>,
) {
  return ['api', '/api/v1/Currencies/summary/supported', toValue(args)] as const
}

export function getApiV1CurrenciesSummarySupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CurrenciesSummarySupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Currencies.summary.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CurrenciesSummarySupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CurrenciesSummarySupportedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesSummarySupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CurrenciesSummarySupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Currencies.summary.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsBenchmarkHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>>,
) {
  return ['api', '/api/v1/Metals/benchmark/history', toValue(args)] as const
}

export function getApiV1MetalsBenchmarkHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsBenchmarkHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.benchmark.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsBenchmarkHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsBenchmarkHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsBenchmarkHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsBenchmarkHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.benchmark.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsBenchmarkSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>>,
) {
  return ['api', '/api/v1/Metals/benchmark/summary', toValue(args)] as const
}

export function getApiV1MetalsBenchmarkSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsBenchmarkSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.benchmark.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsBenchmarkSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsBenchmarkSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsBenchmarkSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsBenchmarkSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.benchmark.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsBenchmarkSupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>>,
) {
  return ['api', '/api/v1/Metals/benchmark/supported', toValue(args)] as const
}

export function getApiV1MetalsBenchmarkSupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsBenchmarkSupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.benchmark.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsBenchmarkSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsBenchmarkSupportedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsBenchmarkSupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsBenchmarkSupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.benchmark.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.history.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/history', toValue(args)] as const
}

export function getApiV1MetalsSpotHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotPerformanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/performance', toValue(args)] as const
}

export function getApiV1MetalsSpotPerformanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotPerformanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.performance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotPerformanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotPerformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotPerformanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotPerformanceAnnualQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>
  >,
) {
  return ['api', '/api/v1/Metals/spot/performance/annual', toValue(args)] as const
}

export function getApiV1MetalsSpotPerformanceAnnualQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotPerformanceAnnualQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.performance.annual.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotPerformanceAnnual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotPerformanceAnnualQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotPerformanceAnnualQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotPerformanceAnnualQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.performance.annual.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotRatioHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/ratio/history', toValue(args)] as const
}

export function getApiV1MetalsSpotRatioHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotRatioHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.ratio.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotRatioHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotRatioHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotRatioHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotRatioHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.ratio.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotRatioSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/ratio/summary', toValue(args)] as const
}

export function getApiV1MetalsSpotRatioSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotRatioSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.ratio.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotRatioSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotRatioSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotRatioSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotRatioSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.ratio.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/summary', toValue(args)] as const
}

export function getApiV1MetalsSpotSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSpotSupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>>,
) {
  return ['api', '/api/v1/Metals/spot/supported', toValue(args)] as const
}

export function getApiV1MetalsSpotSupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSpotSupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.spot.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSpotSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSpotSupportedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotSupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSpotSupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.spot.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetalsSupportedCurrencyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>>,
) {
  return ['api', '/api/v1/Metals/supported/currency', toValue(args)] as const
}

export function getApiV1MetalsSupportedCurrencyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetalsSupportedCurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Metals.supported.currency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetalsSupportedCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetalsSupportedCurrencyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSupportedCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetalsSupportedCurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Metals.supported.currency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

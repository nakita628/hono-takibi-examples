import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CurrenciesHistoryQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.history.$get>,
) {
  return ['api', '/api/v1/Currencies/history', args] as const
}

export function getApiV1CurrenciesHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesHistoryQueryKey>
  >({
    queryKey: getApiV1CurrenciesHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CurrenciesHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CurrenciesHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CurrenciesHistorySupportedQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>,
) {
  return ['api', '/api/v1/Currencies/history/supported', args] as const
}

export function getApiV1CurrenciesHistorySupportedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CurrenciesHistorySupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.history.supported.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesHistorySupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.history.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CurrenciesHistorySupportedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CurrenciesRateQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.$get>,
) {
  return ['api', '/api/v1/Currencies/rate', args] as const
}

export function getApiV1CurrenciesRateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesRateQueryKey>
  >({
    queryKey: getApiV1CurrenciesRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.rate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesRate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.rate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CurrenciesRateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CurrenciesRateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1CurrenciesRateSupportedQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>,
) {
  return ['api', '/api/v1/Currencies/rate/supported', args] as const
}

export function getApiV1CurrenciesRateSupportedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CurrenciesRateSupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.rate.supported.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesRateSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.rate.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CurrenciesRateSupportedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CurrenciesSummaryQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.$get>,
) {
  return ['api', '/api/v1/Currencies/summary', args] as const
}

export function getApiV1CurrenciesSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CurrenciesSummaryQueryKey>
  >({
    queryKey: getApiV1CurrenciesSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Currencies.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CurrenciesSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CurrenciesSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CurrenciesSummarySupportedQueryKey(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>,
) {
  return ['api', '/api/v1/Currencies/summary/supported', args] as const
}

export function getApiV1CurrenciesSummarySupportedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CurrenciesSummarySupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Currencies.summary.supported.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CurrenciesSummarySupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Currencies.summary.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CurrenciesSummarySupportedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsBenchmarkHistoryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>,
) {
  return ['api', '/api/v1/Metals/benchmark/history', args] as const
}

export function getApiV1MetalsBenchmarkHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsBenchmarkHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.benchmark.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsBenchmarkHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsBenchmarkHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsBenchmarkSummaryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>,
) {
  return ['api', '/api/v1/Metals/benchmark/summary', args] as const
}

export function getApiV1MetalsBenchmarkSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsBenchmarkSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.benchmark.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsBenchmarkSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsBenchmarkSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsBenchmarkSupportedQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>,
) {
  return ['api', '/api/v1/Metals/benchmark/supported', args] as const
}

export function getApiV1MetalsBenchmarkSupportedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsBenchmarkSupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.benchmark.supported.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsBenchmarkSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.benchmark.supported.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsBenchmarkSupportedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotHistoryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.history.$get>,
) {
  return ['api', '/api/v1/Metals/spot/history', args] as const
}

export function getApiV1MetalsSpotHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotHistoryQueryKey>
  >({
    queryKey: getApiV1MetalsSpotHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetalsSpotHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotPerformanceQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>,
) {
  return ['api', '/api/v1/Metals/spot/performance', args] as const
}

export function getApiV1MetalsSpotPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotPerformanceQueryKey>
  >({
    queryKey: getApiV1MetalsSpotPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetalsSpotPerformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotPerformanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotPerformanceAnnualQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>,
) {
  return ['api', '/api/v1/Metals/spot/performance/annual', args] as const
}

export function getApiV1MetalsSpotPerformanceAnnualQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsSpotPerformanceAnnualQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.performance.annual.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotPerformanceAnnual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.Metals.spot.performance.annual.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotPerformanceAnnualQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotRatioHistoryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>,
) {
  return ['api', '/api/v1/Metals/spot/ratio/history', args] as const
}

export function getApiV1MetalsSpotRatioHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsSpotRatioHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.ratio.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotRatioHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotRatioHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotRatioSummaryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>,
) {
  return ['api', '/api/v1/Metals/spot/ratio/summary', args] as const
}

export function getApiV1MetalsSpotRatioSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsSpotRatioSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.ratio.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotRatioSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.ratio.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotRatioSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotSummaryQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>,
) {
  return ['api', '/api/v1/Metals/spot/summary', args] as const
}

export function getApiV1MetalsSpotSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotSummaryQueryKey>
  >({
    queryKey: getApiV1MetalsSpotSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetalsSpotSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSpotSupportedQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>,
) {
  return ['api', '/api/v1/Metals/spot/supported', args] as const
}

export function getApiV1MetalsSpotSupportedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetalsSpotSupportedQueryKey>
  >({
    queryKey: getApiV1MetalsSpotSupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.spot.supported.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSpotSupported<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.Metals.spot.supported.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetalsSpotSupportedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSpotSupportedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MetalsSupportedCurrencyQueryKey(
  args: InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>,
) {
  return ['api', '/api/v1/Metals/supported/currency', args] as const
}

export function getApiV1MetalsSupportedCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MetalsSupportedCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Metals.supported.currency.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MetalsSupportedCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Metals.supported.currency.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetalsSupportedCurrencyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

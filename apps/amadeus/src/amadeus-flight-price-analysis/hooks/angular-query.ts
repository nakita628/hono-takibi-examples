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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAnalyticsItineraryPriceMetricsQueryKey(
  args: InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>,
) {
  return ['analytics', '/analytics/itinerary-price-metrics', args] as const
}

export function getAnalyticsItineraryPriceMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsItineraryPriceMetricsQueryKey>
  >({
    queryKey: getAnalyticsItineraryPriceMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics['itinerary-price-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnalyticsItineraryPriceMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalyticsItineraryPriceMetricsQueryKey>
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
      ...getAnalyticsItineraryPriceMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

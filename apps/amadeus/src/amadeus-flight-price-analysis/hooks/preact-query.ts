import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useAnalyticsItineraryPriceMetrics<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAnalyticsItineraryPriceMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalyticsItineraryPriceMetrics<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAnalyticsItineraryPriceMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

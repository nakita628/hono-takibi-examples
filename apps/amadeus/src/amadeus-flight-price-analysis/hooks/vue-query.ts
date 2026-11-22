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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAnalyticsItineraryPriceMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>
  >,
) {
  return ['analytics', '/analytics/itinerary-price-metrics', toValue(args)] as const
}

export function getAnalyticsItineraryPriceMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsItineraryPriceMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics['itinerary-price-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsItineraryPriceMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics)['itinerary-price-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsItineraryPriceMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsItineraryPriceMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics['itinerary-price-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

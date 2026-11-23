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

export function getLocationKey() {
  return ['location'] as const
}

export function getLocationAnalyticsCategoryRatedAreasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>
  >,
) {
  return ['location', '/location/analytics/category-rated-areas', toValue(args)] as const
}

export function getLocationAnalyticsCategoryRatedAreasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationAnalyticsCategoryRatedAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.location.analytics['category-rated-areas'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationAnalyticsCategoryRatedAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>
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
                  ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLocationAnalyticsCategoryRatedAreasQueryKey>
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
          Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationAnalyticsCategoryRatedAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationAnalyticsCategoryRatedAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.location.analytics['category-rated-areas'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

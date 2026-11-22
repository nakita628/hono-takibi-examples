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

export function getLocationKey() {
  return ['location'] as const
}

export function getLocationAnalyticsCategoryRatedAreasQueryKey(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
) {
  return ['location', '/location/analytics/category-rated-areas', args] as const
}

export function getLocationAnalyticsCategoryRatedAreasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLocationAnalyticsCategoryRatedAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.location.analytics['category-rated-areas'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLocationAnalyticsCategoryRatedAreasQueryKey>
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
      ...getLocationAnalyticsCategoryRatedAreasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLocationAnalyticsCategoryRatedAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getLocationAnalyticsCategoryRatedAreasQueryKey>
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
      ...getLocationAnalyticsCategoryRatedAreasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

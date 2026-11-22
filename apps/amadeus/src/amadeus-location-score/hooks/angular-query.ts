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

export function injectLocationAnalyticsCategoryRatedAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLocationAnalyticsCategoryRatedAreasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

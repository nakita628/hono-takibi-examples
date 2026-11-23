import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReferenceDataKey() {
  return ['reference-data'] as const
}

export function getReferenceDataRecommendedLocationsQueryKey(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
) {
  return ['reference-data', '/reference-data/recommended-locations', args] as const
}

export function getReferenceDataRecommendedLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferenceDataRecommendedLocationsQueryKey>
  >({
    queryKey: getReferenceDataRecommendedLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reference-data']['recommended-locations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReferenceDataRecommendedLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferenceDataRecommendedLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferenceDataRecommendedLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

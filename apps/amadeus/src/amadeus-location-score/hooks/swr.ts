import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLocationKey() {
  return ['location'] as const
}

export function getGetLocationAnalyticsCategoryRatedAreasKey(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
) {
  return ['location', '/location/analytics/category-rated-areas', args] as const
}

export function useGetLocationAnalyticsCategoryRatedAreas<TError = unknown>(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocationAnalyticsCategoryRatedAreasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.location.analytics['category-rated-areas'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationAnalyticsCategoryRatedAreas<TError = unknown>(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocationAnalyticsCategoryRatedAreasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.location.analytics)['category-rated-areas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.location.analytics['category-rated-areas'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

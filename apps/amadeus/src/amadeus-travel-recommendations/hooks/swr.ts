import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReferenceDataKey() {
  return ['reference-data'] as const
}

export function getGetReferenceDataRecommendedLocationsKey(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
) {
  return ['reference-data', '/reference-data/recommended-locations', args] as const
}

export function useGetReferenceDataRecommendedLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
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
        ? getGetReferenceDataRecommendedLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['reference-data']['recommended-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferenceDataRecommendedLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
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
        ? getGetReferenceDataRecommendedLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['reference-data']['recommended-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBng2latlongKey() {
  return ['bng2latlong'] as const
}

export function getGetBng2latlongEastingNorthingKey(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
) {
  return ['bng2latlong', '/bng2latlong/:easting/:northing', args] as const
}

export function useGetBng2latlongEastingNorthing<TError = unknown>(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
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
        ? getGetBng2latlongEastingNorthingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bng2latlong[':easting'][':northing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBng2latlongEastingNorthing<TError = unknown>(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
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
        ? getGetBng2latlongEastingNorthingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bng2latlong[':easting'][':northing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

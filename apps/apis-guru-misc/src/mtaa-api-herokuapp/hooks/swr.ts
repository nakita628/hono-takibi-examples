import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCountryKey() {
  return ['{country}'] as const
}

export function getGetCountryKey(args: InferRequestType<(typeof client)[':country']['$get']>) {
  return [':country', '/:country', args] as const
}

export function useGetCountry<TError = unknown>(
  args: InferRequestType<(typeof client)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountry<TError = unknown>(
  args: InferRequestType<(typeof client)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':country']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountryRegionKey(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
) {
  return [':country', '/:country/:region', args] as const
}

export function useGetCountryRegion<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCountryRegionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':country'][':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryRegion<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCountryRegionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':country'][':region']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':country'][':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountryRegionDistrictKey(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
) {
  return [':country', '/:country/:region/:district', args] as const
}

export function useGetCountryRegionDistrict<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
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
        ? getGetCountryRegionDistrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':country'][':region'][':district'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryRegionDistrict<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
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
        ? getGetCountryRegionDistrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':country'][':region'][':district']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':country'][':region'][':district'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountryRegionDistrictWardKey(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
) {
  return [':country', '/:country/:region/:district/:ward', args] as const
}

export function useGetCountryRegionDistrictWard<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
            >
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
        ? getGetCountryRegionDistrictWardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':country'][':region'][':district'][':ward'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryRegionDistrictWard<TError = unknown>(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
            >
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
        ? getGetCountryRegionDistrictWardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':country'][':region'][':district'][':ward'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCountryRegionDistrictWardStreetKey(
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
) {
  return [':country', '/:country/:region/:district/:ward/:street', args] as const
}

export function useGetCountryRegionDistrictWardStreet<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
              >
            >
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
        ? getGetCountryRegionDistrictWardStreetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':country'][':region'][':district'][':ward'][':street'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryRegionDistrictWardStreet<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
              >
            >
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
        ? getGetCountryRegionDistrictWardStreetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':country'][':region'][':district'][':ward'][':street'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

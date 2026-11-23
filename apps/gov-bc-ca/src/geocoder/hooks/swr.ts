import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddressesOutputFormatKey() {
  return ['addresses.{outputFormat}'] as const
}

export function getIntersectionsKey() {
  return ['intersections'] as const
}

export function getOccupantsKey() {
  return ['occupants'] as const
}

export function getParcelsKey() {
  return ['parcels'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getGetAddressesOutputFormatKey(
  args: InferRequestType<(typeof client)['addresses.{outputFormat}']['$get']>,
) {
  return ['addresses.{outputFormat}', '/addresses.{outputFormat}', args] as const
}

export function useGetAddressesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['addresses.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['addresses.{outputFormat}']['$get']>>
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
        ? getGetAddressesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['addresses.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['addresses.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['addresses.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['addresses.{outputFormat}']['$get']>>
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
        ? getGetAddressesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['addresses.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['addresses.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntersectionsNearOutputFormatKey(
  args: InferRequestType<(typeof client.intersections)['near.{outputFormat}']['$get']>,
) {
  return ['intersections', '/intersections/near.{outputFormat}', args] as const
}

export function useGetIntersectionsNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['near.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntersectionsNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['near.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntersectionsNearestOutputFormatKey(
  args: InferRequestType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>,
) {
  return ['intersections', '/intersections/nearest.{outputFormat}', args] as const
}

export function useGetIntersectionsNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntersectionsNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntersectionsWithinOutputFormatKey(
  args: InferRequestType<(typeof client.intersections)['within.{outputFormat}']['$get']>,
) {
  return ['intersections', '/intersections/within.{outputFormat}', args] as const
}

export function useGetIntersectionsWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['within.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntersectionsWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['within.{outputFormat}']['$get']>>
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
        ? getGetIntersectionsWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intersections)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intersections['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntersectionsIntersectionIDOutputFormatKey(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>,
) {
  return ['intersections', '/intersections/:intersectionID.{outputFormat}', args] as const
}

export function useGetIntersectionsIntersectionIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>
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
        ? getGetIntersectionsIntersectionIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.intersections[':intersectionID.{outputFormat}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntersectionsIntersectionIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>
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
        ? getGetIntersectionsIntersectionIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.intersections)[':intersectionID.{outputFormat}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.intersections[':intersectionID.{outputFormat}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOccupantsAddressesOutputFormatKey(
  args: InferRequestType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>,
) {
  return ['occupants', '/occupants/addresses.{outputFormat}', args] as const
}

export function useGetOccupantsAddressesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>>
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
        ? getGetOccupantsAddressesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['addresses.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupantsAddressesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>>
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
        ? getGetOccupantsAddressesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['addresses.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['addresses.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupantsNearOutputFormatKey(
  args: InferRequestType<(typeof client.occupants)['near.{outputFormat}']['$get']>,
) {
  return ['occupants', '/occupants/near.{outputFormat}', args] as const
}

export function useGetOccupantsNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['near.{outputFormat}']['$get']>>
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
        ? getGetOccupantsNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupants['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupantsNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['near.{outputFormat}']['$get']>>
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
        ? getGetOccupantsNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupants['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupantsNearestOutputFormatKey(
  args: InferRequestType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>,
) {
  return ['occupants', '/occupants/nearest.{outputFormat}', args] as const
}

export function useGetOccupantsNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>>
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
        ? getGetOccupantsNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupantsNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>>
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
        ? getGetOccupantsNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupantsWithinOutputFormatKey(
  args: InferRequestType<(typeof client.occupants)['within.{outputFormat}']['$get']>,
) {
  return ['occupants', '/occupants/within.{outputFormat}', args] as const
}

export function useGetOccupantsWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['within.{outputFormat}']['$get']>>
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
        ? getGetOccupantsWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupantsWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['within.{outputFormat}']['$get']>>
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
        ? getGetOccupantsWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupantsOccupantIDOutputFormatKey(
  args: InferRequestType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>,
) {
  return ['occupants', '/occupants/:occupantID.{outputFormat}', args] as const
}

export function useGetOccupantsOccupantIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>>
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
        ? getGetOccupantsOccupantIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants[':occupantID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupantsOccupantIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>>
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
        ? getGetOccupantsOccupantIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.occupants)[':occupantID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.occupants[':occupantID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParcelsPidsSiteIDOutputFormatKey(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>,
) {
  return ['parcels', '/parcels/pids/:siteID.{outputFormat}', args] as const
}

export function useGetParcelsPidsSiteIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>>
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
        ? getGetParcelsPidsSiteIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parcels.pids[':siteID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParcelsPidsSiteIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>>
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
        ? getGetParcelsPidsSiteIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parcels.pids)[':siteID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parcels.pids[':siteID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesNearOutputFormatKey(
  args: InferRequestType<(typeof client.sites)['near.{outputFormat}']['$get']>,
) {
  return ['sites', '/sites/near.{outputFormat}', args] as const
}

export function useGetSitesNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['near.{outputFormat}']['$get']>>
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
        ? getGetSitesNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesNearOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['near.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['near.{outputFormat}']['$get']>>
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
        ? getGetSitesNearOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['near.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['near.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesNearestOutputFormatKey(
  args: InferRequestType<(typeof client.sites)['nearest.{outputFormat}']['$get']>,
) {
  return ['sites', '/sites/nearest.{outputFormat}', args] as const
}

export function useGetSitesNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['nearest.{outputFormat}']['$get']>>
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
        ? getGetSitesNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesNearestOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['nearest.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['nearest.{outputFormat}']['$get']>>
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
        ? getGetSitesNearestOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['nearest.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['nearest.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesWithinOutputFormatKey(
  args: InferRequestType<(typeof client.sites)['within.{outputFormat}']['$get']>,
) {
  return ['sites', '/sites/within.{outputFormat}', args] as const
}

export function useGetSitesWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['within.{outputFormat}']['$get']>>
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
        ? getGetSitesWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesWithinOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)['within.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['within.{outputFormat}']['$get']>>
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
        ? getGetSitesWithinOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)['within.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites['within.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIDOutputFormatKey(
  args: InferRequestType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>,
) {
  return ['sites', '/sites/:siteID.{outputFormat}', args] as const
}

export function useGetSitesSiteIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>>
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
        ? getGetSitesSiteIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIDOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>>
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
        ? getGetSitesSiteIDOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteID.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIDSubsitesOutputFormatKey(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>,
) {
  return ['sites', '/sites/:siteID/subsites.{outputFormat}', args] as const
}

export function useGetSitesSiteIDSubsitesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>>
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
        ? getGetSitesSiteIDSubsitesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteID']['subsites.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIDSubsitesOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>>
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
        ? getGetSitesSiteIDSubsitesOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteID']['subsites.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteID']['subsites.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

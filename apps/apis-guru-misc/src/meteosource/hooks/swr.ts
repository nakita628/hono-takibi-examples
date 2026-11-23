import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAirQualityKey() {
  return ['air_quality'] as const
}

export function getFindPlacesKey() {
  return ['find_places'] as const
}

export function getFindPlacesPrefixKey() {
  return ['find_places_prefix'] as const
}

export function getMapKey() {
  return ['map'] as const
}

export function getNearestPlaceKey() {
  return ['nearest_place'] as const
}

export function getPointKey() {
  return ['point'] as const
}

export function getTimeMachineKey() {
  return ['time_machine'] as const
}

export function getGetAirQualityKey(args: InferRequestType<typeof client.air_quality.$get>) {
  return ['air_quality', '/air_quality', args] as const
}

export function useGetAirQuality<TError = unknown>(
  args: InferRequestType<typeof client.air_quality.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAirQualityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.air_quality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAirQuality<TError = unknown>(
  args: InferRequestType<typeof client.air_quality.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAirQualityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.air_quality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindPlacesKey(args: InferRequestType<typeof client.find_places.$get>) {
  return ['find_places', '/find_places', args] as const
}

export function useGetFindPlaces<TError = unknown>(
  args: InferRequestType<typeof client.find_places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFindPlacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_places.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindPlaces<TError = unknown>(
  args: InferRequestType<typeof client.find_places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFindPlacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_places.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindPlacesPrefixKey(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
) {
  return ['find_places_prefix', '/find_places_prefix', args] as const
}

export function useGetFindPlacesPrefix<TError = unknown>(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
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
        ? getGetFindPlacesPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_places_prefix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindPlacesPrefix<TError = unknown>(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
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
        ? getGetFindPlacesPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_places_prefix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapKey(args: InferRequestType<typeof client.map.$get>) {
  return ['map', '/map', args] as const
}

export function useGetMap<TError = unknown>(
  args: InferRequestType<typeof client.map.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.map.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMap<TError = unknown>(
  args: InferRequestType<typeof client.map.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.map.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNearestPlaceKey(args: InferRequestType<typeof client.nearest_place.$get>) {
  return ['nearest_place', '/nearest_place', args] as const
}

export function useGetNearestPlace<TError = unknown>(
  args: InferRequestType<typeof client.nearest_place.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNearestPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nearest_place.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNearestPlace<TError = unknown>(
  args: InferRequestType<typeof client.nearest_place.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNearestPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nearest_place.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPointKey(args: InferRequestType<typeof client.point.$get>) {
  return ['point', '/point', args] as const
}

export function useGetPoint<TError = unknown>(
  args: InferRequestType<typeof client.point.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.point.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPoint<TError = unknown>(
  args: InferRequestType<typeof client.point.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.point.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTimeMachineKey(args: InferRequestType<typeof client.time_machine.$get>) {
  return ['time_machine', '/time_machine', args] as const
}

export function useGetTimeMachine<TError = unknown>(
  args: InferRequestType<typeof client.time_machine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeMachineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_machine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeMachine<TError = unknown>(
  args: InferRequestType<typeof client.time_machine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeMachineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_machine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

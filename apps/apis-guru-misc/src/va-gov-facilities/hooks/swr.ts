import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getIdsKey() {
  return ['ids'] as const
}

export function getNearbyKey() {
  return ['nearby'] as const
}

export function getGetFacilitiesKey(args: InferRequestType<typeof client.facilities.$get>) {
  return ['facilities', '/facilities', args] as const
}

export function useGetFacilities<TError = unknown>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacilities<TError = unknown>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFacilitiesAllKey(args: InferRequestType<typeof client.facilities.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['facilities', '/facilities/all', keyArgs] as const
}

export function useGetFacilitiesAll<TError = unknown>(
  args: InferRequestType<typeof client.facilities.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacilitiesAll<TError = unknown>(
  args: InferRequestType<typeof client.facilities.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFacilitiesIdKey(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
) {
  return ['facilities', '/facilities/:id', args] as const
}

export function useGetFacilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFacilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFacilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdsKey(args: InferRequestType<typeof client.ids.$get>) {
  return ['ids', '/ids', args] as const
}

export function useGetIds<TError = unknown>(
  args: InferRequestType<typeof client.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ids.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIds<TError = unknown>(
  args: InferRequestType<typeof client.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ids.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNearbyKey(args: InferRequestType<typeof client.nearby.$get>) {
  return ['nearby', '/nearby', args] as const
}

export function useGetNearby<TError = unknown>(
  args: InferRequestType<typeof client.nearby.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNearbyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nearby.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNearby<TError = unknown>(
  args: InferRequestType<typeof client.nearby.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNearbyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nearby.$get(args, clientOptions)), restSwrOptions),
  }
}

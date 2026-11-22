import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBulkLookupKey() {
  return ['BulkLookup'] as const
}

export function getCountryKey() {
  return ['Country'] as const
}

export function getGeoIPKey() {
  return ['GeoIP'] as const
}

export function getIPLookupKey() {
  return ['IPLookup'] as const
}

export function getBadWordsKey() {
  return ['badWords'] as const
}

export function getGetBulkLookupKey(args: InferRequestType<typeof client.BulkLookup.$get>) {
  return ['BulkLookup', '/BulkLookup', args] as const
}

export function useGetBulkLookup<TError = unknown>(
  args: InferRequestType<typeof client.BulkLookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BulkLookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkLookup<TError = unknown>(
  args: InferRequestType<typeof client.BulkLookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BulkLookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountryKey(args: InferRequestType<typeof client.Country.$get>) {
  return ['Country', '/Country', args] as const
}

export function useGetCountry<TError = unknown>(
  args: InferRequestType<typeof client.Country.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
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
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Country.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCountry<TError = unknown>(
  args: InferRequestType<typeof client.Country.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
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
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Country.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGeoIPKey(args: InferRequestType<typeof client.GeoIP.$get>) {
  return ['GeoIP', '/GeoIP', args] as const
}

export function useGetGeoIP<TError = unknown>(
  args: InferRequestType<typeof client.GeoIP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeoIPKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.GeoIP.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGeoIP<TError = unknown>(
  args: InferRequestType<typeof client.GeoIP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeoIPKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.GeoIP.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetIPLookupKey(args: InferRequestType<typeof client.IPLookup.$get>) {
  return ['IPLookup', '/IPLookup', args] as const
}

export function useGetIPLookup<TError = unknown>(
  args: InferRequestType<typeof client.IPLookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIPLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.IPLookup.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIPLookup<TError = unknown>(
  args: InferRequestType<typeof client.IPLookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIPLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.IPLookup.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBadWordsKey(args: InferRequestType<typeof client.badWords.$get>) {
  return ['badWords', '/badWords', args] as const
}

export function useGetBadWords<TError = unknown>(
  args: InferRequestType<typeof client.badWords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadWordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.badWords.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBadWords<TError = unknown>(
  args: InferRequestType<typeof client.badWords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBadWordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.badWords.$get(args, clientOptions)), restSwrOptions),
  }
}

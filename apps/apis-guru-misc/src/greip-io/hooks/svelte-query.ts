import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getBulkLookupQueryKey(args: InferRequestType<typeof client.BulkLookup.$get>) {
  return ['BulkLookup', '/BulkLookup', args] as const
}

export function getBulkLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BulkLookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBulkLookupQueryKey>
  >({
    queryKey: getBulkLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BulkLookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBulkLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BulkLookup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBulkLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBulkLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCountryQueryKey(args: InferRequestType<typeof client.Country.$get>) {
  return ['Country', '/Country', args] as const
}

export function getCountryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Country.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >({
    queryKey: getCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Country.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Country.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeoIPQueryKey(args: InferRequestType<typeof client.GeoIP.$get>) {
  return ['GeoIP', '/GeoIP', args] as const
}

export function getGeoIPQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.GeoIP.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeoIPQueryKey>
  >({
    queryKey: getGeoIPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GeoIP.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeoIP<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.GeoIP.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGeoIPQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGeoIPQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIPLookupQueryKey(args: InferRequestType<typeof client.IPLookup.$get>) {
  return ['IPLookup', '/IPLookup', args] as const
}

export function getIPLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.IPLookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIPLookupQueryKey>
  >({
    queryKey: getIPLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.IPLookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIPLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.IPLookup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIPLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIPLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBadWordsQueryKey(args: InferRequestType<typeof client.badWords.$get>) {
  return ['badWords', '/badWords', args] as const
}

export function getBadWordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badWords.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadWordsQueryKey>
  >({
    queryKey: getBadWordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badWords.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadWords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badWords.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBadWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBadWordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

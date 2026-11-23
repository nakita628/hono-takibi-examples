import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useBulkLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.BulkLookup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBulkLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBulkLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.BulkLookup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBulkLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Country.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Country.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGeoIP<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.GeoIP.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGeoIPQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGeoIPQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGeoIP<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.GeoIP.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGeoIPQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGeoIPQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useIPLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.IPLookup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIPLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIPLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIPLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.IPLookup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIPLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIPLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBadWords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badWords.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBadWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBadWordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBadWords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.badWords.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBadWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBadWordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

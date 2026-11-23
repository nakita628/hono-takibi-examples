import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getBulkLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BulkLookup.$get>>,
) {
  return ['BulkLookup', '/BulkLookup', toValue(args)] as const
}

export function getBulkLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BulkLookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BulkLookup.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBulkLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BulkLookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>
          >,
          ReturnType<typeof getBulkLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BulkLookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBulkLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BulkLookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Country.$get>>,
) {
  return ['Country', '/Country', toValue(args)] as const
}

export function getCountryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Country.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Country.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Country.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>
          >,
          ReturnType<typeof getCountryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Country.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Country.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeoIPQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GeoIP.$get>>,
) {
  return ['GeoIP', '/GeoIP', toValue(args)] as const
}

export function getGeoIPQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GeoIP.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeoIPQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GeoIP.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGeoIP<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GeoIP.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
          ReturnType<typeof getGeoIPQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GeoIP.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeoIPQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeoIPQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GeoIP.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIPLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.IPLookup.$get>>,
) {
  return ['IPLookup', '/IPLookup', toValue(args)] as const
}

export function getIPLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.IPLookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIPLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.IPLookup.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIPLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.IPLookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>
          >,
          ReturnType<typeof getIPLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.IPLookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIPLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIPLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.IPLookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBadWordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badWords.$get>>,
) {
  return ['badWords', '/badWords', toValue(args)] as const
}

export function getBadWordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badWords.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadWordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badWords.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBadWords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badWords.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>
          >,
          ReturnType<typeof getBadWordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badWords.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadWordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadWordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badWords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

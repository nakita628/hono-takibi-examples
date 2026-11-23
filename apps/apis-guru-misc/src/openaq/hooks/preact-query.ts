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

export function getFaviconIcoKey() {
  return ['favicon.ico'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getFaviconIcoQueryKey() {
  return ['favicon.ico', '/favicon.ico'] as const
}

export function getFaviconIcoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaviconIcoQueryKey>
  >({
    queryKey: getFaviconIcoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['favicon.ico'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFaviconIco<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaviconIcoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaviconIcoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaviconIco<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaviconIcoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaviconIcoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CitiesQueryKey(args: InferRequestType<typeof client.v1.cities.$get>) {
  return ['v1', '/v1/cities', args] as const
}

export function getV1CitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.cities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CitiesQueryKey>
  >({
    queryKey: getV1CitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.cities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.cities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CountriesQueryKey(args: InferRequestType<typeof client.v1.countries.$get>) {
  return ['v1', '/v1/countries', args] as const
}

export function getV1CountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.countries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CountriesQueryKey>
  >({
    queryKey: getV1CountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CountriesCountryIdQueryKey(
  args: InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>,
) {
  return ['v1', '/v1/countries/:country_id', args] as const
}

export function getV1CountriesCountryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CountriesCountryIdQueryKey>
  >({
    queryKey: getV1CountriesCountryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.countries[':country_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesCountryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CountriesCountryIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesCountryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CountriesCountryIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LatestQueryKey(args: InferRequestType<typeof client.v1.latest.$get>) {
  return ['v1', '/v1/latest', args] as const
}

export function getV1LatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LatestQueryKey>
  >({
    queryKey: getV1LatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.latest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.latest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LatestLocationIdQueryKey(
  args: InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>,
) {
  return ['v1', '/v1/latest/:location_id', args] as const
}

export function getV1LatestLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LatestLocationIdQueryKey>
  >({
    queryKey: getV1LatestLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.latest[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LatestLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LatestLocationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LatestLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LatestLocationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LocationsQueryKey(args: InferRequestType<typeof client.v1.locations.$get>) {
  return ['v1', '/v1/locations', args] as const
}

export function getV1LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocationsQueryKey>
  >({
    queryKey: getV1LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LocationsLocationIdQueryKey(
  args: InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>,
) {
  return ['v1', '/v1/locations/:location_id', args] as const
}

export function getV1LocationsLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationsLocationIdQueryKey>
  >({
    queryKey: getV1LocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locations[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationsLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationsLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1MeasurementsQueryKey(
  args: InferRequestType<typeof client.v1.measurements.$get>,
) {
  return ['v1', '/v1/measurements', args] as const
}

export function getV1MeasurementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.measurements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeasurementsQueryKey>
  >({
    queryKey: getV1MeasurementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.measurements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.measurements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeasurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MeasurementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.measurements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MeasurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MeasurementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ParametersQueryKey(args: InferRequestType<typeof client.v1.parameters.$get>) {
  return ['v1', '/v1/parameters', args] as const
}

export function getV1ParametersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.parameters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParametersQueryKey>
  >({
    queryKey: getV1ParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.parameters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.parameters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParametersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.parameters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParametersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SourcesQueryKey(args: InferRequestType<typeof client.v1.sources.$get>) {
  return ['v1', '/v1/sources', args] as const
}

export function getV1SourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourcesQueryKey>
  >({
    queryKey: getV1SourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2AveragesQueryKey(args: InferRequestType<typeof client.v2.averages.$get>) {
  return ['v2', '/v2/averages', args] as const
}

export function getV2AveragesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.averages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AveragesQueryKey>
  >({
    queryKey: getV2AveragesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.averages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Averages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.averages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AveragesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AveragesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Averages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.averages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AveragesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AveragesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CitiesQueryKey(args: InferRequestType<typeof client.v2.cities.$get>) {
  return ['v2', '/v2/cities', args] as const
}

export function getV2CitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CitiesQueryKey>
  >({
    queryKey: getV2CitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.cities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.cities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CountriesQueryKey(args: InferRequestType<typeof client.v2.countries.$get>) {
  return ['v2', '/v2/countries', args] as const
}

export function getV2CountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.countries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CountriesQueryKey>
  >({
    queryKey: getV2CountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CountriesCountryIdQueryKey(
  args: InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>,
) {
  return ['v2', '/v2/countries/:country_id', args] as const
}

export function getV2CountriesCountryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CountriesCountryIdQueryKey>
  >({
    queryKey: getV2CountriesCountryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.countries[':country_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CountriesCountryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CountriesCountryIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CountriesCountryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CountriesCountryIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LatestQueryKey(args: InferRequestType<typeof client.v2.latest.$get>) {
  return ['v2', '/v2/latest', args] as const
}

export function getV2LatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LatestQueryKey>
  >({
    queryKey: getV2LatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.latest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.latest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LatestLocationIdQueryKey(
  args: InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>,
) {
  return ['v2', '/v2/latest/:location_id', args] as const
}

export function getV2LatestLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LatestLocationIdQueryKey>
  >({
    queryKey: getV2LatestLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.latest[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LatestLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LatestLocationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LatestLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LatestLocationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LocationsQueryKey(args: InferRequestType<typeof client.v2.locations.$get>) {
  return ['v2', '/v2/locations', args] as const
}

export function getV2LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >({
    queryKey: getV2LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.locations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.locations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/mobile-generalized/tiles.json'] as const
}

export function getV2LocationsTilesMobileGeneralizedTilesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey>
  >({
    queryKey: getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles['mobile-generalized']['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesMobileGeneralizedTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsTilesMobileGeneralizedTilesJsonQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesMobileGeneralizedTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations.tiles)['mobile-generalized']['tiles.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsTilesMobileGeneralizedTilesJsonQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey(
  args: InferRequestType<
    (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
  >,
) {
  return ['v2', '/v2/locations/tiles/mobile-generalized/:z/:x/:y.pbf', args] as const
}

export function getV2LocationsTilesMobileGeneralizedZXYPbfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey>
  >({
    queryKey: getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles['mobile-generalized'][':z'][':x'][':y.pbf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesMobileGeneralizedZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsTilesMobileGeneralizedZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesMobileGeneralizedZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsTilesMobileGeneralizedZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/mobile/tiles.json'] as const
}

export function getV2LocationsTilesMobileTilesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesMobileTilesJsonQueryKey>
  >({
    queryKey: getV2LocationsTilesMobileTilesJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles.mobile['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesMobileTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsTilesMobileTilesJsonQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesMobileTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsTilesMobileTilesJsonQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileZXYPbfQueryKey(
  args: InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>,
) {
  return ['v2', '/v2/locations/tiles/mobile/:z/:x/:y.pbf', args] as const
}

export function getV2LocationsTilesMobileZXYPbfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesMobileZXYPbfQueryKey>
  >({
    queryKey: getV2LocationsTilesMobileZXYPbfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles.mobile[':z'][':x'][':y.pbf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesMobileZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsTilesMobileZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesMobileZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesMobileZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsTilesMobileZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsTilesTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/tiles.json'] as const
}

export function getV2LocationsTilesTilesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesTilesJsonQueryKey>
  >({
    queryKey: getV2LocationsTilesTilesJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LocationsTilesTilesJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesTilesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesTilesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LocationsTilesTilesJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LocationsTilesViewerQueryKey() {
  return ['v2', '/v2/locations/tiles/viewer'] as const
}

export function getV2LocationsTilesViewerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesViewerQueryKey>
  >({
    queryKey: getV2LocationsTilesViewerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles.viewer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesViewer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesViewerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LocationsTilesViewerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesViewer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesViewerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LocationsTilesViewerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2LocationsTilesZXYPbfQueryKey(
  args: InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>,
) {
  return ['v2', '/v2/locations/tiles/:z/:x/:y.pbf', args] as const
}

export function getV2LocationsTilesZXYPbfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesZXYPbfQueryKey>
  >({
    queryKey: getV2LocationsTilesZXYPbfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.tiles[':z'][':x'][':y.pbf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsTilesZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsTilesZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsTilesZXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsTilesZXYPbfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsTilesZXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2LocationsLocationIdQueryKey(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
) {
  return ['v2', '/v2/locations/:location_id', args] as const
}

export function getV2LocationsLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsLocationIdQueryKey>
  >({
    queryKey: getV2LocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LocationsLocationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2LocationsLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2ManufacturersQueryKey() {
  return ['v2', '/v2/manufacturers'] as const
}

export function getV2ManufacturersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ManufacturersQueryKey>
  >({
    queryKey: getV2ManufacturersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.manufacturers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Manufacturers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ManufacturersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ManufacturersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Manufacturers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ManufacturersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ManufacturersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2MeasurementsQueryKey(
  args: InferRequestType<typeof client.v2.measurements.$get>,
) {
  return ['v2', '/v2/measurements', args] as const
}

export function getV2MeasurementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.measurements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2MeasurementsQueryKey>
  >({
    queryKey: getV2MeasurementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.measurements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.measurements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MeasurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2MeasurementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.measurements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MeasurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2MeasurementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ModelsQueryKey() {
  return ['v2', '/v2/models'] as const
}

export function getV2ModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ModelsQueryKey>
  >({
    queryKey: getV2ModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ParametersQueryKey(args: InferRequestType<typeof client.v2.parameters.$get>) {
  return ['v2', '/v2/parameters', args] as const
}

export function getV2ParametersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.parameters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParametersQueryKey>
  >({
    queryKey: getV2ParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.parameters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.parameters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ParametersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.parameters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ParametersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ProjectsQueryKey(args: InferRequestType<typeof client.v2.projects.$get>) {
  return ['v2', '/v2/projects', args] as const
}

export function getV2ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsQueryKey>
  >({
    queryKey: getV2ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
) {
  return ['v2', '/v2/projects/:project_id', args] as const
}

export function getV2ProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SourcesQueryKey(args: InferRequestType<typeof client.v2.sources.$get>) {
  return ['v2', '/v2/sources', args] as const
}

export function getV2SourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SourcesQueryKey>
  >({
    queryKey: getV2SourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SourcesReadmeSlugQueryKey(
  args: InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>,
) {
  return ['v2', '/v2/sources/readme/:slug', args] as const
}

export function getV2SourcesReadmeSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SourcesReadmeSlugQueryKey>
  >({
    queryKey: getV2SourcesReadmeSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sources.readme[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SourcesReadmeSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SourcesReadmeSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SourcesReadmeSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SourcesReadmeSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SourcesReadmeSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SourcesReadmeSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SummaryQueryKey() {
  return ['v2', '/v2/summary'] as const
}

export function getV2SummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SummaryQueryKey>
  >({
    queryKey: getV2SummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Summary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Summary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

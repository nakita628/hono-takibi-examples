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

export function getFaviconIcoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFaviconIcoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['favicon.ico'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaviconIco<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>
            >
          >,
          ReturnType<typeof getFaviconIcoQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['favicon.ico']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaviconIcoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFaviconIcoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['favicon.ico'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          ReturnType<typeof getPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cities.$get>>,
) {
  return ['v1', '/v1/cities', toValue(args)] as const
}

export function getV1CitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>
          >,
          ReturnType<typeof getV1CitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.countries.$get>>,
) {
  return ['v1', '/v1/countries', toValue(args)] as const
}

export function getV1CountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.countries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>
          >,
          ReturnType<typeof getV1CountriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CountriesCountryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>>,
) {
  return ['v1', '/v1/countries/:country_id', toValue(args)] as const
}

export function getV1CountriesCountryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CountriesCountryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.countries[':country_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':country_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.countries)[':country_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CountriesCountryIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CountriesCountryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.countries[':country_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.latest.$get>>,
) {
  return ['v1', '/v1/latest', toValue(args)] as const
}

export function getV1LatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.latest.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>
          >,
          ReturnType<typeof getV1LatestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LatestLocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>>,
) {
  return ['v1', '/v1/latest/:location_id', toValue(args)] as const
}

export function getV1LatestLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LatestLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.latest[':location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.latest)[':location_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LatestLocationIdQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.latest)[':location_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LatestLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LatestLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.latest[':location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
) {
  return ['v1', '/v1/locations', toValue(args)] as const
}

export function getV1LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
          >,
          ReturnType<typeof getV1LocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocationsLocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>>,
) {
  return ['v1', '/v1/locations/:location_id', toValue(args)] as const
}

export function getV1LocationsLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationsLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locations[':location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locations)[':location_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.locations)[':location_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocationsLocationIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationsLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locations[':location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MeasurementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.measurements.$get>>,
) {
  return ['v1', '/v1/measurements', toValue(args)] as const
}

export function getV1MeasurementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.measurements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MeasurementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.measurements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.measurements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>
            >
          >,
          ReturnType<typeof getV1MeasurementsQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.measurements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1MeasurementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MeasurementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.measurements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParametersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.parameters.$get>>,
) {
  return ['v1', '/v1/parameters', toValue(args)] as const
}

export function getV1ParametersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.parameters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.parameters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
          >,
          ReturnType<typeof getV1ParametersQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.parameters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
) {
  return ['v1', '/v1/sources', toValue(args)] as const
}

export function getV1SourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>
          >,
          ReturnType<typeof getV1SourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AveragesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.averages.$get>>,
) {
  return ['v2', '/v2/averages', toValue(args)] as const
}

export function getV2AveragesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.averages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AveragesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.averages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Averages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.averages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>
          >,
          ReturnType<typeof getV2AveragesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.averages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AveragesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AveragesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.averages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cities.$get>>,
) {
  return ['v2', '/v2/cities', toValue(args)] as const
}

export function getV2CitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Cities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>
          >,
          ReturnType<typeof getV2CitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.countries.$get>>,
) {
  return ['v2', '/v2/countries', toValue(args)] as const
}

export function getV2CountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.countries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>
          >,
          ReturnType<typeof getV2CountriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CountriesCountryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>>,
) {
  return ['v2', '/v2/countries/:country_id', toValue(args)] as const
}

export function getV2CountriesCountryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CountriesCountryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.countries[':country_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CountriesCountryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.countries)[':country_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.countries)[':country_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CountriesCountryIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CountriesCountryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.countries[':country_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.latest.$get>>,
) {
  return ['v2', '/v2/latest', toValue(args)] as const
}

export function getV2LatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.latest.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Latest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>
          >,
          ReturnType<typeof getV2LatestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LatestLocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>>,
) {
  return ['v2', '/v2/latest/:location_id', toValue(args)] as const
}

export function getV2LatestLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LatestLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.latest[':location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LatestLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.latest)[':location_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LatestLocationIdQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.latest)[':location_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LatestLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LatestLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.latest[':location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
) {
  return ['v2', '/v2/locations', toValue(args)] as const
}

export function getV2LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          ReturnType<typeof getV2LocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/mobile-generalized/tiles.json'] as const
}

export function getV2LocationsTilesMobileGeneralizedTilesJsonQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles['mobile-generalized']['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          ReturnType<typeof getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: getV2LocationsTilesMobileGeneralizedTilesJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles['mobile-generalized']['tiles.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
    >
  >,
) {
  return ['v2', '/v2/locations/tiles/mobile-generalized/:z/:x/:y.pbf', toValue(args)] as const
}

export function getV2LocationsTilesMobileGeneralizedZXYPbfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles['mobile-generalized'][':z'][':x'][':y.pbf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.locations.tiles)['mobile-generalized'][':z'][':x'][':y.pbf']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsTilesMobileGeneralizedZXYPbfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles['mobile-generalized'][':z'][':x'][':y.pbf'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/mobile/tiles.json'] as const
}

export function getV2LocationsTilesMobileTilesJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2LocationsTilesMobileTilesJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles.mobile['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.locations.tiles.mobile)['tiles.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsTilesMobileTilesJsonQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: getV2LocationsTilesMobileTilesJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles.mobile['tiles.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesMobileZXYPbfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
  >,
) {
  return ['v2', '/v2/locations/tiles/mobile/:z/:x/:y.pbf', toValue(args)] as const
}

export function getV2LocationsTilesMobileZXYPbfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsTilesMobileZXYPbfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles.mobile[':z'][':x'][':y.pbf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.locations.tiles.mobile)[':z'][':x'][':y.pbf']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2LocationsTilesMobileZXYPbfQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsTilesMobileZXYPbfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles.mobile[':z'][':x'][':y.pbf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesTilesJsonQueryKey() {
  return ['v2', '/v2/locations/tiles/tiles.json'] as const
}

export function getV2LocationsTilesTilesJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2LocationsTilesTilesJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles['tiles.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.locations.tiles)['tiles.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsTilesTilesJsonQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: getV2LocationsTilesTilesJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles['tiles.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesViewerQueryKey() {
  return ['v2', '/v2/locations/tiles/viewer'] as const
}

export function getV2LocationsTilesViewerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2LocationsTilesViewerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles.viewer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsTilesViewerQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.tiles.viewer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsTilesViewerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2LocationsTilesViewerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles.viewer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsTilesZXYPbfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>
  >,
) {
  return ['v2', '/v2/locations/tiles/:z/:x/:y.pbf', toValue(args)] as const
}

export function getV2LocationsTilesZXYPbfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsTilesZXYPbfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.tiles[':z'][':x'][':y.pbf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.locations.tiles)[':z'][':x'][':y.pbf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2LocationsTilesZXYPbfQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsTilesZXYPbfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.tiles[':z'][':x'][':y.pbf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsLocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
) {
  return ['v2', '/v2/locations/:location_id', toValue(args)] as const
}

export function getV2LocationsLocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations[':location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.locations)[':location_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LocationsLocationIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations[':location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ManufacturersQueryKey() {
  return ['v2', '/v2/manufacturers'] as const
}

export function getV2ManufacturersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ManufacturersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.manufacturers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Manufacturers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>
            >
          >,
          ReturnType<typeof getV2ManufacturersQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.manufacturers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ManufacturersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ManufacturersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.manufacturers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MeasurementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.measurements.$get>>,
) {
  return ['v2', '/v2/measurements', toValue(args)] as const
}

export function getV2MeasurementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.measurements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MeasurementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.measurements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Measurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.measurements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>
            >
          >,
          ReturnType<typeof getV2MeasurementsQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.measurements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2MeasurementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MeasurementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.measurements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ModelsQueryKey() {
  return ['v2', '/v2/models'] as const
}

export function getV2ModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>
          >,
          ReturnType<typeof getV2ModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ParametersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.parameters.$get>>,
) {
  return ['v2', '/v2/parameters', toValue(args)] as const
}

export function getV2ParametersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.parameters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Parameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.parameters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
          >,
          ReturnType<typeof getV2ParametersQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parameters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
) {
  return ['v2', '/v2/projects', toValue(args)] as const
}

export function getV2ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
          >,
          ReturnType<typeof getV2ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
) {
  return ['v2', '/v2/projects/:project_id', toValue(args)] as const
}

export function getV2ProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sources.$get>>,
) {
  return ['v2', '/v2/sources', toValue(args)] as const
}

export function getV2SourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>
          >,
          ReturnType<typeof getV2SourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SourcesReadmeSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>>,
) {
  return ['v2', '/v2/sources/readme/:slug', toValue(args)] as const
}

export function getV2SourcesReadmeSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SourcesReadmeSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sources.readme[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SourcesReadmeSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sources.readme)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.sources.readme)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SourcesReadmeSlugQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SourcesReadmeSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sources.readme[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SummaryQueryKey() {
  return ['v2', '/v2/summary'] as const
}

export function getV2SummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2SummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Summary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>
          >,
          ReturnType<typeof getV2SummaryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.summary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2SummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

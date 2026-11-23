import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
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

export function getV1CountriesCountryKeyQueryKey(
  args: InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>,
) {
  return ['v1', '/v1/countries/:countryKey', args] as const
}

export function getV1CountriesCountryKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CountriesCountryKeyQueryKey>
  >({
    queryKey: getV1CountriesCountryKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.countries[':countryKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CountriesCountryKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesCountryKeyQueryKey>
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
      ...getV1CountriesCountryKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CountriesCountryKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountriesCountryKeyQueryKey>
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
      ...getV1CountriesCountryKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

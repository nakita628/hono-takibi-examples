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

export function getV1Key() {
  return ['v1'] as const
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

export function getV1CountriesCountryKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>>,
) {
  return ['v1', '/v1/countries/:countryKey', toValue(args)] as const
}

export function getV1CountriesCountryKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CountriesCountryKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.countries[':countryKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CountriesCountryKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CountriesCountryKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.countries)[':countryKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CountriesCountryKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CountriesCountryKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.countries[':countryKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

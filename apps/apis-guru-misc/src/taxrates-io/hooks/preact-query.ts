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

export function getV1Key() {
  return ['v1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV1TaxCountrycodeQueryKey(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
) {
  return ['v1', '/v1/tax/countrycode', args] as const
}

export function getV1TaxCountrycodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tax.countrycode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxCountrycodeQueryKey>
  >({
    queryKey: getV1TaxCountrycodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tax.countrycode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1TaxCountrycode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxCountrycodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TaxCountrycodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1TaxCountrycode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxCountrycodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TaxCountrycodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1TaxIpQueryKey(args: InferRequestType<typeof client.v1.tax.ip.$get>) {
  return ['v1', '/v1/tax/ip', args] as const
}

export function getV1TaxIpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tax.ip.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TaxIpQueryKey>
  >({
    queryKey: getV1TaxIpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tax.ip.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1TaxIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tax.ip.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TaxIpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1TaxIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tax.ip.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TaxIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TaxIpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3TaxRatesQueryKey(args: InferRequestType<typeof client.v3.tax.rates.$get>) {
  return ['v3', '/v3/tax/rates', args] as const
}

export function getV3TaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.tax.rates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TaxRatesQueryKey>
  >({
    queryKey: getV3TaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tax.rates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3TaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.tax.rates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3TaxRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3TaxRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3TaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.tax.rates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3TaxRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3TaxRatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

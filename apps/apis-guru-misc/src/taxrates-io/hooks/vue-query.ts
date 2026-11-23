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

export function getV3Key() {
  return ['v3'] as const
}

export function getV1TaxCountrycodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.countrycode.$get>>,
) {
  return ['v1', '/v1/tax/countrycode', toValue(args)] as const
}

export function getV1TaxCountrycodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.countrycode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TaxCountrycodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tax.countrycode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TaxCountrycode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.countrycode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>
            >
          >,
          ReturnType<typeof getV1TaxCountrycodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxCountrycodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TaxCountrycodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tax.countrycode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TaxIpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.ip.$get>>,
) {
  return ['v1', '/v1/tax/ip', toValue(args)] as const
}

export function getV1TaxIpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.ip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TaxIpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tax.ip.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1TaxIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tax.ip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>
          >,
          ReturnType<typeof getV1TaxIpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TaxIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TaxIpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tax.ip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tax.rates.$get>>,
) {
  return ['v3', '/v3/tax/rates', toValue(args)] as const
}

export function getV3TaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tax.rates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tax.rates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3TaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tax.rates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
          >,
          ReturnType<typeof getV3TaxRatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tax.rates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

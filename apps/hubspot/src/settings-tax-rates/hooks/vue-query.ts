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

export function getTaxRatesKey() {
  return ['tax-rates'] as const
}

export function getTaxRates202609TaxRatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>
  >,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates', toValue(args)] as const
}

export function getTaxRates202609TaxRatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRates202609TaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tax-rates']['2026-09']['tax-rates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxRates202609TaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaxRates202609TaxRatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRates202609TaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRates202609TaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tax-rates']['2026-09']['tax-rates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxRates202609TaxRatesTaxRateGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
    >
  >,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates/:taxRateGroupId', toValue(args)] as const
}

export function getTaxRates202609TaxRatesTaxRateGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRates202609TaxRatesTaxRateGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxRates202609TaxRatesTaxRateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
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
                    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
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
                    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTaxRates202609TaxRatesTaxRateGroupIdQueryKey>
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
              (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRates202609TaxRatesTaxRateGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRates202609TaxRatesTaxRateGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

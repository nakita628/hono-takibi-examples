import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTaxRatesKey() {
  return ['tax-rates'] as const
}

export function getTaxRates202609TaxRatesQueryKey(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates', args] as const
}

export function getTaxRates202609TaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTaxRates202609TaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tax-rates']['2026-09']['tax-rates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTaxRates202609TaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTaxRates202609TaxRatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTaxRates202609TaxRatesTaxRateGroupIdQueryKey(
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates/:taxRateGroupId', args] as const
}

export function getTaxRates202609TaxRatesTaxRateGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTaxRates202609TaxRatesTaxRateGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTaxRates202609TaxRatesTaxRateGroupId<
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
  args: () => InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTaxRates202609TaxRatesTaxRateGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

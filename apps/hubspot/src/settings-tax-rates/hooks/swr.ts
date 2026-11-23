import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTaxRatesKey() {
  return ['tax-rates'] as const
}

export function getGetTaxRates202609TaxRatesKey(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates', args] as const
}

export function useGetTaxRates202609TaxRates<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRates202609TaxRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['tax-rates']['2026-09']['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxRates202609TaxRates<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRates202609TaxRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates']['2026-09']['tax-rates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['tax-rates']['2026-09']['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxRates202609TaxRatesTaxRateGroupIdKey(
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
) {
  return ['tax-rates', '/tax-rates/2026-09/tax-rates/:taxRateGroupId', args] as const
}

export function useGetTaxRates202609TaxRatesTaxRateGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRates202609TaxRatesTaxRateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxRates202609TaxRatesTaxRateGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRates202609TaxRatesTaxRateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['tax-rates']['2026-09']['tax-rates'][':taxRateGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

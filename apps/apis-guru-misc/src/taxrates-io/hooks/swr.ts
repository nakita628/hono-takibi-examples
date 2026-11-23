import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV1TaxCountrycodeKey(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
) {
  return ['v1', '/v1/tax/countrycode', args] as const
}

export function useGetV1TaxCountrycode<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
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
        ? getGetV1TaxCountrycodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax.countrycode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxCountrycode<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax.countrycode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
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
        ? getGetV1TaxCountrycodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.countrycode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax.countrycode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TaxIpKey(args: InferRequestType<typeof client.v1.tax.ip.$get>) {
  return ['v1', '/v1/tax/ip', args] as const
}

export function useGetV1TaxIp<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax.ip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxIpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax.ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxIp<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax.ip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxIpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax.ip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax.ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3TaxRatesKey(args: InferRequestType<typeof client.v3.tax.rates.$get>) {
  return ['v3', '/v3/tax/rates', args] as const
}

export function useGetV3TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.v3.tax.rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.tax.rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.v3.tax.rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tax.rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.tax.rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

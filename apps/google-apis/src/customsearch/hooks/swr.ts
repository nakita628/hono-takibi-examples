import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomsearchKey() {
  return ['customsearch'] as const
}

export function getGetCustomsearchV1Key(
  args: InferRequestType<typeof client.customsearch.v1.$get>,
) {
  return ['customsearch', '/customsearch/v1', args] as const
}

export function useGetCustomsearchV1<TError = unknown>(
  args: InferRequestType<typeof client.customsearch.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomsearchV1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customsearch.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomsearchV1<TError = unknown>(
  args: InferRequestType<typeof client.customsearch.v1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomsearchV1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customsearch.v1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomsearchV1SiterestrictKey(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
) {
  return ['customsearch', '/customsearch/v1/siterestrict', args] as const
}

export function useGetCustomsearchV1Siterestrict<TError = unknown>(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
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
        ? getGetCustomsearchV1SiterestrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customsearch.v1.siterestrict.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomsearchV1Siterestrict<TError = unknown>(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
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
        ? getGetCustomsearchV1SiterestrictKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customsearch.v1.siterestrict.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

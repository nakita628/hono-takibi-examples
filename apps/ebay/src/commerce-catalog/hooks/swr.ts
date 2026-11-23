import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProductKey() {
  return ['product'] as const
}

export function getProductSummaryKey() {
  return ['product_summary'] as const
}

export function getGetProductEpidKey(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['product', '/product/:epid', keyArgs] as const
}

export function useGetProductEpid<TError = unknown>(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductEpidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product[':epid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductEpid<TError = unknown>(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductEpidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product[':epid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductSummarySearchKey(
  args: InferRequestType<typeof client.product_summary.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['product_summary', '/product_summary/search', keyArgs] as const
}

export function useGetProductSummarySearch<TError = unknown>(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
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
        ? getGetProductSummarySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product_summary.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductSummarySearch<TError = unknown>(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
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
        ? getGetProductSummarySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product_summary.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

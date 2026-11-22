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

export function getProductKey() {
  return ['product'] as const
}

export function getProductSummaryKey() {
  return ['product_summary'] as const
}

export function getProductEpidQueryKey(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['product', '/product/:epid', keyArgs] as const
}

export function getProductEpidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductEpidQueryKey>
  >({
    queryKey: getProductEpidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.product[':epid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductEpid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductEpidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductEpidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductEpid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductEpidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductEpidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductSummarySearchQueryKey(
  args: InferRequestType<typeof client.product_summary.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['product_summary', '/product_summary/search', keyArgs] as const
}

export function getProductSummarySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductSummarySearchQueryKey>
  >({
    queryKey: getProductSummarySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.product_summary.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductSummarySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductSummarySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductSummarySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductSummarySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.product_summary.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductSummarySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductSummarySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

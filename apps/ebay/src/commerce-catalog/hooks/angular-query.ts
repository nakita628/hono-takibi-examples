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

export function injectProductEpid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.product)[':epid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductEpidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectProductSummarySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.product_summary.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductSummarySearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

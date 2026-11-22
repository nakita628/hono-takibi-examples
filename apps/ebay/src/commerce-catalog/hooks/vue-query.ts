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

export function getProductKey() {
  return ['product'] as const
}

export function getProductSummaryKey() {
  return ['product_summary'] as const
}

export function getProductEpidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':epid']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['product', '/product/:epid', keyArgs] as const
}

export function getProductEpidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':epid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductEpidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product[':epid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductEpid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product)[':epid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
            >
          >,
          ReturnType<typeof getProductEpidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.product)[':epid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductEpidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductEpidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product[':epid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductSummarySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product_summary.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['product_summary', '/product_summary/search', keyArgs] as const
}

export function getProductSummarySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product_summary.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductSummarySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product_summary.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductSummarySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.product_summary.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
            >
          >,
          ReturnType<typeof getProductSummarySearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.product_summary.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductSummarySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductSummarySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product_summary.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

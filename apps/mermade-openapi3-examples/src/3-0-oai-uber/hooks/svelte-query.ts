import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEstimatesKey() {
  return ['estimates'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEstimatesPriceQueryKey(
  args: InferRequestType<typeof client.estimates.price.$get>,
) {
  return ['estimates', '/estimates/price', args] as const
}

export function getEstimatesPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.estimates.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEstimatesPriceQueryKey>
  >({
    queryKey: getEstimatesPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.estimates.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEstimatesPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.estimates.price.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEstimatesPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEstimatesPriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEstimatesTimeQueryKey(
  args: InferRequestType<typeof client.estimates.time.$get>,
) {
  return ['estimates', '/estimates/time', args] as const
}

export function getEstimatesTimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.estimates.time.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEstimatesTimeQueryKey>
  >({
    queryKey: getEstimatesTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.estimates.time.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEstimatesTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.estimates.time.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEstimatesTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEstimatesTimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHistoryQueryKey(args: InferRequestType<typeof client.history.$get>) {
  return ['history', '/history', args] as const
}

export function getHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHistoryQueryKey>
  >({
    queryKey: getHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

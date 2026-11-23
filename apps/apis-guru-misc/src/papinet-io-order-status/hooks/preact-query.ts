import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOrdersQueryKey(args: InferRequestType<typeof client.orders.$get>) {
  return ['orders', '/orders', args] as const
}

export function getOrdersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >({
    queryKey: getOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.orders)[':orderId']['$get']>,
) {
  return ['orders', '/orders/:orderId', args] as const
}

export function getOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrderIdQueryKey>
  >({
    queryKey: getOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':orderId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

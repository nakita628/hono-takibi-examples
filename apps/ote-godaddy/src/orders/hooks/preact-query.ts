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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1OrdersQueryKey(args: InferRequestType<typeof client.v1.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders', keyArgs] as const
}

export function getV1OrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OrdersQueryKey>
  >({
    queryKey: getV1OrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1OrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/orders/:orderId', keyArgs] as const
}

export function getV1OrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderIdQueryKey>
  >({
    queryKey: getV1OrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.orders[':orderId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

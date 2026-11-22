import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createV1OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

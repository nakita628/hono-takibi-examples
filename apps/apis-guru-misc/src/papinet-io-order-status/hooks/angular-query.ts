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

export function injectOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orders)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

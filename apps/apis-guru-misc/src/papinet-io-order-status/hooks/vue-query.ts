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

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
) {
  return ['orders', '/orders', toValue(args)] as const
}

export function getOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          ReturnType<typeof getOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':orderId']['$get']>>,
) {
  return ['orders', '/orders/:orderId', toValue(args)] as const
}

export function getOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
            >
          >,
          ReturnType<typeof getOrdersOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

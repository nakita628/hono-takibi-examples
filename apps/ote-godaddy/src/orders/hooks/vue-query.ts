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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1OrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders', keyArgs] as const
}

export function getV1OrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>
          >,
          ReturnType<typeof getV1OrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/orders/:orderId', keyArgs] as const
}

export function getV1OrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.orders)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrdersOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.orders)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

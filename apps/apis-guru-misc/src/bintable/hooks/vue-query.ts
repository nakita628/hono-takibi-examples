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

export function getBalanceKey() {
  return ['balance'] as const
}

export function getBinKey() {
  return ['{bin}'] as const
}

export function getBalanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance.$get>>,
) {
  return ['balance', '/balance', toValue(args)] as const
}

export function getBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balance.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
          >,
          ReturnType<typeof getBalanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBinQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':bin']['$get']>>,
) {
  return [':bin', '/:bin', toValue(args)] as const
}

export function getBinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':bin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':bin'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':bin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
          >,
          ReturnType<typeof getBinQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>>,
    TError,
    TData,
    ReturnType<typeof getBinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':bin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

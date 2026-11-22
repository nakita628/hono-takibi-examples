import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBalanceKey() {
  return ['balance'] as const
}

export function getBinKey() {
  return ['{bin}'] as const
}

export function getBalanceQueryKey(args: InferRequestType<typeof client.balance.$get>) {
  return ['balance', '/balance', args] as const
}

export function getBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.balance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >({
    queryKey: getBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.balance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBalanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBinQueryKey(args: InferRequestType<(typeof client)[':bin']['$get']>) {
  return [':bin', '/:bin', args] as const
}

export function getBinQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':bin']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>>,
    TError,
    TData,
    ReturnType<typeof getBinQueryKey>
  >({
    queryKey: getBinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':bin'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':bin']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBinQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBinQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

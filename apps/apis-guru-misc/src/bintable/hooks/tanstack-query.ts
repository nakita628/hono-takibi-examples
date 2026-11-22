import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.balance.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBalanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.balance.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBalanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':bin']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBinQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':bin']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBinQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

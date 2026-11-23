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

export function getCityKey() {
  return ['city'] as const
}

export function getCityQueryKey(args: InferRequestType<typeof client.city.$get>) {
  return ['city', '/city', args] as const
}

export function getCityQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.city.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCityQueryKey>
  >({
    queryKey: getCityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.city.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCity<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.city.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCity<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.city.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

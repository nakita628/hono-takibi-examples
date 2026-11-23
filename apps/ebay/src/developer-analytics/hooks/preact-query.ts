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

export function getRateLimitKey() {
  return ['rate_limit'] as const
}

export function getUserRateLimitKey() {
  return ['user_rate_limit'] as const
}

export function getRateLimitIndexQueryKey(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
) {
  return ['rate_limit', '/rate_limit/', args] as const
}

export function getRateLimitIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rate_limit.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRateLimitIndexQueryKey>
  >({
    queryKey: getRateLimitIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rate_limit.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRateLimitIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRateLimitIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUserRateLimitIndexQueryKey(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
) {
  return ['user_rate_limit', '/user_rate_limit/', args] as const
}

export function getUserRateLimitIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserRateLimitIndexQueryKey>
  >({
    queryKey: getUserRateLimitIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_rate_limit.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserRateLimitIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserRateLimitIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

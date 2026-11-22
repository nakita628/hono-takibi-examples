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

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicHistoryQueryKey(
  args: InferRequestType<typeof client.public.history.$get>,
) {
  return ['public', '/public/history', args] as const
}

export function getPublicHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicHistoryQueryKey>
  >({
    queryKey: getPublicHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublicHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublicHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublicHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublicHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

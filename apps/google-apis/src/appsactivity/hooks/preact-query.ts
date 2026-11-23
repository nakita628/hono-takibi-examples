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

export function getActivitiesKey() {
  return ['activities'] as const
}

export function getActivitiesQueryKey(args: InferRequestType<typeof client.activities.$get>) {
  return ['activities', '/activities', args] as const
}

export function getActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivitiesQueryKey>
  >({
    queryKey: getActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

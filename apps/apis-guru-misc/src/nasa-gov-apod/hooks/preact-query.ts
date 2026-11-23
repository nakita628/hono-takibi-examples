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

export function getApodKey() {
  return ['apod'] as const
}

export function getApodQueryKey(args: InferRequestType<typeof client.apod.$get>) {
  return ['apod', '/apod', args] as const
}

export function getApodQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApodQueryKey>
  >({
    queryKey: getApodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apod.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apod.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

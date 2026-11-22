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

export function getTimestagsKey() {
  return ['timestags'] as const
}

export function getTimestagsQueryKey(args: InferRequestType<typeof client.timestags.$get>) {
  return ['timestags', '/timestags', args] as const
}

export function getTimestagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.timestags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimestagsQueryKey>
  >({
    queryKey: getTimestagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timestags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTimestags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.timestags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimestagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimestagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimestags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.timestags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimestagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimestagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

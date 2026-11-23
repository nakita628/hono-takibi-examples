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

export function getGetglobaltimeKey() {
  return ['getglobaltime'] as const
}

export function getGetglobaltimeQueryKey(args: InferRequestType<typeof client.getglobaltime.$get>) {
  return ['getglobaltime', '/getglobaltime', args] as const
}

export function getGetglobaltimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getglobaltime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobaltimeQueryKey>
  >({
    queryKey: getGetglobaltimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getglobaltime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetglobaltime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getglobaltime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobaltimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetglobaltimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetglobaltime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getglobaltime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobaltimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetglobaltimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

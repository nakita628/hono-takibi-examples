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

export function getHelloKey() {
  return ['hello'] as const
}

export function getHelloQueryKey(args: InferRequestType<typeof client.hello.$get>) {
  return ['hello', '/hello', args] as const
}

export function getHelloQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hello.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHelloQueryKey>
  >({
    queryKey: getHelloQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hello.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHello<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hello.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHelloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHelloQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHello<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hello.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHelloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHelloQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

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

export function getProxyKey() {
  return ['proxy'] as const
}

export function getProxyQueryKey(args: InferRequestType<typeof client.proxy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy', keyArgs] as const
}

export function getProxyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.proxy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProxyQueryKey>
  >({
    queryKey: getProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proxy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProxy<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProxyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProxy<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProxyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

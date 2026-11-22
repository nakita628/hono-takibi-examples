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

export function getGetareacodeKey() {
  return ['getareacode'] as const
}

export function getGetareacodeQueryKey(args: InferRequestType<typeof client.getareacode.$get>) {
  return ['getareacode', '/getareacode', args] as const
}

export function getGetareacodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getareacode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetareacodeQueryKey>
  >({
    queryKey: getGetareacodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getareacode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetareacode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetareacodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetareacode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetareacodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

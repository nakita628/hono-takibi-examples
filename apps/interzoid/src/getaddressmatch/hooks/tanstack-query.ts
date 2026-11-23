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

export function getGetaddressmatchKey() {
  return ['getaddressmatch'] as const
}

export function getGetaddressmatchQueryKey(
  args: InferRequestType<typeof client.getaddressmatch.$get>,
) {
  return ['getaddressmatch', '/getaddressmatch', args] as const
}

export function getGetaddressmatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getaddressmatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetaddressmatchQueryKey>
  >({
    queryKey: getGetaddressmatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getaddressmatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetaddressmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getaddressmatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetaddressmatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetaddressmatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetaddressmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getaddressmatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetaddressmatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetaddressmatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

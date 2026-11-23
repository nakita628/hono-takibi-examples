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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1IndexQueryKey(args: InferRequestType<typeof client.v1.index.$get>) {
  return ['v1', '/v1/', args] as const
}

export function getV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IndexQueryKey>
  >({
    queryKey: getV1IndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

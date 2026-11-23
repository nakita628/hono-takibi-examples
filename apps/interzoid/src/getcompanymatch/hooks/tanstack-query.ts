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

export function getGetcompanymatchKey() {
  return ['getcompanymatch'] as const
}

export function getGetcompanymatchQueryKey(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
) {
  return ['getcompanymatch', '/getcompanymatch', args] as const
}

export function getGetcompanymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcompanymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcompanymatchQueryKey>
  >({
    queryKey: getGetcompanymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcompanymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetcompanymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcompanymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcompanymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcompanymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcompanymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcompanymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

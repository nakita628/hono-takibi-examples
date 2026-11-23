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

export function getGetcountrymatchKey() {
  return ['getcountrymatch'] as const
}

export function getGetcountrymatchQueryKey(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
) {
  return ['getcountrymatch', '/getcountrymatch', args] as const
}

export function getGetcountrymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcountrymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrymatchQueryKey>
  >({
    queryKey: getGetcountrymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcountrymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetcountrymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcountrymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcountrymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcountrymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

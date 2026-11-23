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

export function getGetcitymatchKey() {
  return ['getcitymatch'] as const
}

export function getGetcitymatchQueryKey(args: InferRequestType<typeof client.getcitymatch.$get>) {
  return ['getcitymatch', '/getcitymatch', args] as const
}

export function getGetcitymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcitymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetcitymatchQueryKey>
  >({
    queryKey: getGetcitymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcitymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetcitymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcitymatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcitymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcitymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcitymatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcitymatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

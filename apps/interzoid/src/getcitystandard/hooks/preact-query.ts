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

export function getGetcitystandardKey() {
  return ['getcitystandard'] as const
}

export function getGetcitystandardQueryKey(
  args: InferRequestType<typeof client.getcitystandard.$get>,
) {
  return ['getcitystandard', '/getcitystandard', args] as const
}

export function getGetcitystandardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcitystandard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcitystandardQueryKey>
  >({
    queryKey: getGetcitystandardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcitystandard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetcitystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcitystandard.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcitystandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcitystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcitystandard.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcitystandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

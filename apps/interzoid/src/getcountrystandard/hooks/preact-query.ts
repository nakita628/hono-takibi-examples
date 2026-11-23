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

export function getGetcountrystandardKey() {
  return ['getcountrystandard'] as const
}

export function getGetcountrystandardQueryKey(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
) {
  return ['getcountrystandard', '/getcountrystandard', args] as const
}

export function getGetcountrystandardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcountrystandard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrystandardQueryKey>
  >({
    queryKey: getGetcountrystandardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcountrystandard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetcountrystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcountrystandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcountrystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcountrystandardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

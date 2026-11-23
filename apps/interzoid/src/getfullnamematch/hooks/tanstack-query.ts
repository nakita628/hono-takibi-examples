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

export function getGetfullnamematchKey() {
  return ['getfullnamematch'] as const
}

export function getGetfullnamematchQueryKey(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
) {
  return ['getfullnamematch', '/getfullnamematch', args] as const
}

export function getGetfullnamematchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getfullnamematch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnamematchQueryKey>
  >({
    queryKey: getGetfullnamematchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getfullnamematch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetfullnamematch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetfullnamematchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetfullnamematchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetfullnamematch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetfullnamematchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetfullnamematchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

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

export function getGetstateabbreviationKey() {
  return ['getstateabbreviation'] as const
}

export function getGetstateabbreviationQueryKey(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
) {
  return ['getstateabbreviation', '/getstateabbreviation', args] as const
}

export function getGetstateabbreviationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getstateabbreviation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetstateabbreviationQueryKey>
  >({
    queryKey: getGetstateabbreviationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getstateabbreviation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetstateabbreviation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetstateabbreviationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetstateabbreviationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetstateabbreviation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetstateabbreviationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetstateabbreviationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

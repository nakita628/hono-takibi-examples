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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EmailFreeQueryKey(args: InferRequestType<typeof client.v1.email.free.$get>) {
  return ['v1', '/v1/email/free', args] as const
}

export function getV1EmailFreeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.free.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailFreeQueryKey>
  >({
    queryKey: getV1EmailFreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.free.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1EmailFree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email.free.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailFreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EmailFreeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EmailFree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email.free.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailFreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EmailFreeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

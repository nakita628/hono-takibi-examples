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

export function getV1EmailDisposableQueryKey(
  args: InferRequestType<typeof client.v1.email.disposable.$get>,
) {
  return ['v1', '/v1/email/disposable', args] as const
}

export function getV1EmailDisposableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.disposable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDisposableQueryKey>
  >({
    queryKey: getV1EmailDisposableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.disposable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1EmailDisposable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email.disposable.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailDisposableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EmailDisposableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EmailDisposable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.email.disposable.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailDisposableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EmailDisposableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

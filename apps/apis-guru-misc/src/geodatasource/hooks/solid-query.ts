import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCityKey() {
  return ['city'] as const
}

export function getCityQueryKey(args: InferRequestType<typeof client.city.$get>) {
  return ['city', '/city', args] as const
}

export function getCityQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.city.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCityQueryKey>
  >({
    queryKey: getCityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.city.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCity<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.city.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getCityQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

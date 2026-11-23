import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicHistoryQueryKey(
  args: InferRequestType<typeof client.public.history.$get>,
) {
  return ['public', '/public/history', args] as const
}

export function getPublicHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicHistoryQueryKey>
  >({
    queryKey: getPublicHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublicHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

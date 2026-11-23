import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetglobaltimeKey() {
  return ['getglobaltime'] as const
}

export function getGetglobaltimeQueryKey(args: InferRequestType<typeof client.getglobaltime.$get>) {
  return ['getglobaltime', '/getglobaltime', args] as const
}

export function getGetglobaltimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getglobaltime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobaltimeQueryKey>
  >({
    queryKey: getGetglobaltimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getglobaltime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetglobaltime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getglobaltime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobaltimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetglobaltimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

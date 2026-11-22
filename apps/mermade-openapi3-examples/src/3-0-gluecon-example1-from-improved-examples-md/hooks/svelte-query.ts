import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNamesKey() {
  return ['names'] as const
}

export function getNamesQueryKey() {
  return ['names', '/names'] as const
}

export function getNamesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesQueryKey>
  >({
    queryKey: getNamesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.names.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

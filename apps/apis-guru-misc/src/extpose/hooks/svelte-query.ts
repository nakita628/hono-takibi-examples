import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUserExtensionsKey() {
  return ['user-extensions'] as const
}

export function getUserExtensionsQueryKey() {
  return ['user-extensions', '/user-extensions'] as const
}

export function getUserExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserExtensionsQueryKey>
  >({
    queryKey: getUserExtensionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['user-extensions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserExtensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserExtensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

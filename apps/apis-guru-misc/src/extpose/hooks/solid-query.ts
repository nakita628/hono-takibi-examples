import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserExtensionsQueryKey>
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
    return { ...getUserExtensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

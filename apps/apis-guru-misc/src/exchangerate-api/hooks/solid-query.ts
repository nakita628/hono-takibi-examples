import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLatestKey() {
  return ['latest'] as const
}

export function getLatestBaseCurrencyQueryKey(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
) {
  return ['latest', '/latest/:base_currency', args] as const
}

export function getLatestBaseCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLatestBaseCurrencyQueryKey>
  >({
    queryKey: getLatestBaseCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.latest[':base_currency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLatestBaseCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLatestBaseCurrencyQueryKey>
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
    return { ...getLatestBaseCurrencyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

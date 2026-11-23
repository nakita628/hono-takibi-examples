import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useNames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNamesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNamesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useLatestBaseCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLatestBaseCurrencyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLatestBaseCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLatestBaseCurrencyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

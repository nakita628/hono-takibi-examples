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

export function getTestKey() {
  return ['test'] as const
}

export function getTest2Key() {
  return ['test2'] as const
}

export function getTestQueryKey() {
  return ['test', '/test'] as const
}

export function getTestQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTestQueryKey>
  >({
    queryKey: getTestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.test.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTest<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTest<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTest2QueryKey() {
  return ['test2', '/test2'] as const
}

export function getTest2QueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTest2QueryKey>
  >({
    queryKey: getTest2QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.test2.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTest2<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTest2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTest2QueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTest2<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTest2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTest2QueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

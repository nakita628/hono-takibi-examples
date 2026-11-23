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

export function getExampleKey() {
  return ['example'] as const
}

export function getExamplesKey() {
  return ['examples'] as const
}

export function getExampleQueryKey() {
  return ['example', '/example'] as const
}

export function getExampleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExampleQueryKey>
  >({
    queryKey: getExampleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.example.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExample<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExampleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExampleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExample<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExampleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExampleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExamplesQueryKey() {
  return ['examples', '/examples'] as const
}

export function getExamplesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExamplesQueryKey>
  >({
    queryKey: getExamplesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.examples.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExamplesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExamplesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpenaiKey() {
  return ['openai'] as const
}

export function getOpenaiDetailsQueryKey(
  args: InferRequestType<typeof client.openai.details.$get>,
) {
  return ['openai', '/openai/details', args] as const
}

export function getOpenaiDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.openai.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiDetailsQueryKey>
  >({
    queryKey: getOpenaiDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.openai.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenaiDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.openai.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenaiDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenaiDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.openai.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenaiDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenaiSearchQueryKey(args: InferRequestType<typeof client.openai.search.$get>) {
  return ['openai', '/openai/search', args] as const
}

export function getOpenaiSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.openai.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiSearchQueryKey>
  >({
    queryKey: getOpenaiSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.openai.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenaiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.openai.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenaiSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenaiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.openai.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenaiSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

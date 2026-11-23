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

export function getAiKey() {
  return ['ai'] as const
}

export function getAiNewsQueryKey(args: InferRequestType<typeof client.ai.news.$get>) {
  return ['ai', '/ai/news', args] as const
}

export function getAiNewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ai.news.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiNewsQueryKey>
  >({
    queryKey: getAiNewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai.news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAiNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.news.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAiNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai.news.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAiNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

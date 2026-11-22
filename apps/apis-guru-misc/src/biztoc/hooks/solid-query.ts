import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createAiNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ai.news.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAiNewsQueryKey>
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
    return { ...getAiNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

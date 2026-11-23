import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProxyKey() {
  return ['proxy'] as const
}

export function getProxyQueryKey(args: InferRequestType<typeof client.proxy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy', keyArgs] as const
}

export function getProxyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.proxy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProxyQueryKey>
  >({
    queryKey: getProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proxy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProxy<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.proxy.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getProxyQueryKey>
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
    return { ...getProxyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

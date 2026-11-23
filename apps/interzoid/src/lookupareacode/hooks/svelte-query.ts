import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetareacodeKey() {
  return ['getareacode'] as const
}

export function getGetareacodeQueryKey(args: InferRequestType<typeof client.getareacode.$get>) {
  return ['getareacode', '/getareacode', args] as const
}

export function getGetareacodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getareacode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetareacodeQueryKey>
  >({
    queryKey: getGetareacodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getareacode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetareacode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getareacode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetareacodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

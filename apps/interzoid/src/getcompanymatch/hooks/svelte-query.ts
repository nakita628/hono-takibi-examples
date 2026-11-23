import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcompanymatchKey() {
  return ['getcompanymatch'] as const
}

export function getGetcompanymatchQueryKey(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
) {
  return ['getcompanymatch', '/getcompanymatch', args] as const
}

export function getGetcompanymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcompanymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcompanymatchQueryKey>
  >({
    queryKey: getGetcompanymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcompanymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetcompanymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcompanymatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcompanymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcompanymatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcountrymatchKey() {
  return ['getcountrymatch'] as const
}

export function getGetcountrymatchQueryKey(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
) {
  return ['getcountrymatch', '/getcountrymatch', args] as const
}

export function getGetcountrymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcountrymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrymatchQueryKey>
  >({
    queryKey: getGetcountrymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcountrymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetcountrymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcountrymatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcountrymatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

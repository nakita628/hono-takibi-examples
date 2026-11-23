import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcitymatchKey() {
  return ['getcitymatch'] as const
}

export function getGetcitymatchQueryKey(args: InferRequestType<typeof client.getcitymatch.$get>) {
  return ['getcitymatch', '/getcitymatch', args] as const
}

export function getGetcitymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcitymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetcitymatchQueryKey>
  >({
    queryKey: getGetcitymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcitymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetcitymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcitymatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcitymatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

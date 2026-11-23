import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcurrencyrateKey() {
  return ['getcurrencyrate'] as const
}

export function getGetcurrencyrateQueryKey(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
) {
  return ['getcurrencyrate', '/getcurrencyrate', args] as const
}

export function getGetcurrencyrateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcurrencyrate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcurrencyrateQueryKey>
  >({
    queryKey: getGetcurrencyrateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcurrencyrate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetcurrencyrate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGetcurrencyrateQueryKey>
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
    return { ...getGetcurrencyrateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

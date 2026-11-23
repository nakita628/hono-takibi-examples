import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConvertcurrencyKey() {
  return ['convertcurrency'] as const
}

export function getConvertcurrencyQueryKey(
  args: InferRequestType<typeof client.convertcurrency.$get>,
) {
  return ['convertcurrency', '/convertcurrency', args] as const
}

export function getConvertcurrencyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.convertcurrency.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConvertcurrencyQueryKey>
  >({
    queryKey: getConvertcurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convertcurrency.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConvertcurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.convertcurrency.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConvertcurrencyQueryKey>
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
    return { ...getConvertcurrencyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

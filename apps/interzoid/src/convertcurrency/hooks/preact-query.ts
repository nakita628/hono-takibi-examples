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

export function useConvertcurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.convertcurrency.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConvertcurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConvertcurrencyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConvertcurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.convertcurrency.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConvertcurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConvertcurrencyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

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

export function useGetcurrencyrate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcurrencyrateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetcurrencyrateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetcurrencyrate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcurrencyrateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetcurrencyrateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

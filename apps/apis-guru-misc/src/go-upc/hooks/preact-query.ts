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

export function getCodeKey() {
  return ['code'] as const
}

export function getCodeCodeQueryKey(args: InferRequestType<(typeof client.code)[':code']['$get']>) {
  return ['code', '/code/:code', args] as const
}

export function getCodeCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.code)[':code']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCodeCodeQueryKey>
  >({
    queryKey: getCodeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.code[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCodeCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.code)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCodeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCodeCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCodeCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.code)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCodeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCodeCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createCodeCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.code)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCodeCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

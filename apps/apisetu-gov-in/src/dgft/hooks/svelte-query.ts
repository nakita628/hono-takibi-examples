import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1IecIecQueryKey(
  args: InferRequestType<(typeof client.v1.iec)[':iec']['$get']>,
) {
  return ['v1', '/v1/iec/:iec', args] as const
}

export function getV1IecIecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.iec)[':iec']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.iec)[':iec']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.iec)[':iec']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1IecIecQueryKey>
  >({
    queryKey: getV1IecIecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.iec[':iec'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1IecIec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.iec)[':iec']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.iec)[':iec']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.iec)[':iec']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IecIecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1IecIecQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetstateabbreviationKey() {
  return ['getstateabbreviation'] as const
}

export function getGetstateabbreviationQueryKey(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
) {
  return ['getstateabbreviation', '/getstateabbreviation', args] as const
}

export function getGetstateabbreviationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getstateabbreviation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetstateabbreviationQueryKey>
  >({
    queryKey: getGetstateabbreviationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getstateabbreviation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetstateabbreviation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetstateabbreviationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetstateabbreviationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

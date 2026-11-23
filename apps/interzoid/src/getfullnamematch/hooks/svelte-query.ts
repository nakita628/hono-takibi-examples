import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetfullnamematchKey() {
  return ['getfullnamematch'] as const
}

export function getGetfullnamematchQueryKey(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
) {
  return ['getfullnamematch', '/getfullnamematch', args] as const
}

export function getGetfullnamematchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getfullnamematch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnamematchQueryKey>
  >({
    queryKey: getGetfullnamematchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getfullnamematch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetfullnamematch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getfullnamematch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetfullnamematchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetfullnamematchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

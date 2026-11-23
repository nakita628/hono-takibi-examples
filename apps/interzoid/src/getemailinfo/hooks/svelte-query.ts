import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetemailinfoKey() {
  return ['getemailinfo'] as const
}

export function getGetemailinfoQueryKey(args: InferRequestType<typeof client.getemailinfo.$get>) {
  return ['getemailinfo', '/getemailinfo', args] as const
}

export function getGetemailinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getemailinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetemailinfoQueryKey>
  >({
    queryKey: getGetemailinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getemailinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetemailinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getemailinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetemailinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetemailinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

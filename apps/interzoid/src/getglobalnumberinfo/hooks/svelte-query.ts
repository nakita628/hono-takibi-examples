import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetglobalnumberinfoKey() {
  return ['getglobalnumberinfo'] as const
}

export function getGetglobalnumberinfoQueryKey(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
) {
  return ['getglobalnumberinfo', '/getglobalnumberinfo', args] as const
}

export function getGetglobalnumberinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getglobalnumberinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobalnumberinfoQueryKey>
  >({
    queryKey: getGetglobalnumberinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getglobalnumberinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetglobalnumberinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobalnumberinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetglobalnumberinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGlobalpageloadKey() {
  return ['globalpageload'] as const
}

export function getGlobalpageloadQueryKey(
  args: InferRequestType<typeof client.globalpageload.$get>,
) {
  return ['globalpageload', '/globalpageload', args] as const
}

export function getGlobalpageloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.globalpageload.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalpageloadQueryKey>
  >({
    queryKey: getGlobalpageloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.globalpageload.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGlobalpageload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.globalpageload.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGlobalpageloadQueryKey>
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
    return { ...getGlobalpageloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

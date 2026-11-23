import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EmailFreeQueryKey(args: InferRequestType<typeof client.v1.email.free.$get>) {
  return ['v1', '/v1/email/free', args] as const
}

export function getV1EmailFreeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.free.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailFreeQueryKey>
  >({
    queryKey: getV1EmailFreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.free.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1EmailFree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.email.free.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1EmailFreeQueryKey>
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
    return { ...getV1EmailFreeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

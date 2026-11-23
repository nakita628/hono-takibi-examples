import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1IndexQueryKey(args: InferRequestType<typeof client.v1.index.$get>) {
  return ['v1', '/v1/', args] as const
}

export function getV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IndexQueryKey>
  >({
    queryKey: getV1IndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1IndexQueryKey>
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
    return { ...getV1IndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

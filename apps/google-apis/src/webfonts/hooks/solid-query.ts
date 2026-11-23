import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1WebfontsQueryKey(args: InferRequestType<typeof client.v1.webfonts.$get>) {
  return ['v1', '/v1/webfonts', args] as const
}

export function getV1WebfontsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.webfonts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebfontsQueryKey>
  >({
    queryKey: getV1WebfontsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webfonts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Webfonts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.webfonts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1WebfontsQueryKey>
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
    return { ...getV1WebfontsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

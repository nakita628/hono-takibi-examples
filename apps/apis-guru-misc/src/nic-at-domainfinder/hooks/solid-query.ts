import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1SuggestQueryKey(args: InferRequestType<typeof client.api.v1.suggest.$get>) {
  return ['api', '/api/v1/suggest', args] as const
}

export function getApiV1SuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.suggest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SuggestQueryKey>
  >({
    queryKey: getApiV1SuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.suggest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Suggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.suggest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SuggestQueryKey>
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
    return { ...getApiV1SuggestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

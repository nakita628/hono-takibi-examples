import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EntitiesSearchQueryKey(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
) {
  return ['v1', '/v1/entities:search', args] as const
}

export function getV1EntitiesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesSearchQueryKey>
  >({
    queryKey: getV1EntitiesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['entities:search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EntitiesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EntitiesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

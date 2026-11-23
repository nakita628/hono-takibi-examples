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

export function getQueryJsonKey() {
  return ['query.json'] as const
}

export function getQueryJsonQueryKey(
  args: InferRequestType<(typeof client)['query.json']['$get']>,
) {
  return ['query.json', '/query.json', args] as const
}

export function getQueryJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['query.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryJsonQueryKey>
  >({
    queryKey: getQueryJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['query.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQueryJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['query.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['query.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

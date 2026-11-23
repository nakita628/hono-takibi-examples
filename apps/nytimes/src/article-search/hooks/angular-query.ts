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

export function getArticlesearchJsonKey() {
  return ['articlesearch.json'] as const
}

export function getArticlesearchJsonQueryKey(
  args: InferRequestType<(typeof client)['articlesearch.json']['$get']>,
) {
  return ['articlesearch.json', '/articlesearch.json', args] as const
}

export function getArticlesearchJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['articlesearch.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesearchJsonQueryKey>
  >({
    queryKey: getArticlesearchJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['articlesearch.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectArticlesearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['articlesearch.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArticlesearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArticlesearchJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

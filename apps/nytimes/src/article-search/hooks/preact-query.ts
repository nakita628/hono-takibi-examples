import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useArticlesearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['articlesearch.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArticlesearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArticlesearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['articlesearch.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArticlesearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

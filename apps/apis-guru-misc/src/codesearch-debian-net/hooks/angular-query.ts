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

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchperpackageKey() {
  return ['searchperpackage'] as const
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchperpackageQueryKey(
  args: InferRequestType<typeof client.searchperpackage.$get>,
) {
  return ['searchperpackage', '/searchperpackage', args] as const
}

export function getSearchperpackageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.searchperpackage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.searchperpackage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.searchperpackage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchperpackageQueryKey>
  >({
    queryKey: getSearchperpackageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.searchperpackage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchperpackage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.searchperpackage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.searchperpackage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.searchperpackage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchperpackageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchperpackageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

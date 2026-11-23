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

export function getRateLimitKey() {
  return ['rate_limit'] as const
}

export function getUserRateLimitKey() {
  return ['user_rate_limit'] as const
}

export function getRateLimitIndexQueryKey(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
) {
  return ['rate_limit', '/rate_limit/', args] as const
}

export function getRateLimitIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rate_limit.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRateLimitIndexQueryKey>
  >({
    queryKey: getRateLimitIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rate_limit.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rate_limit.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRateLimitIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserRateLimitIndexQueryKey(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
) {
  return ['user_rate_limit', '/user_rate_limit/', args] as const
}

export function getUserRateLimitIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserRateLimitIndexQueryKey>
  >({
    queryKey: getUserRateLimitIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_rate_limit.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserRateLimitIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserRateLimitIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

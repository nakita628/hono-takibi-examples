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

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryQueryKey(args: InferRequestType<typeof client.query.$get>) {
  return ['query', '/query', args] as const
}

export function getQueryQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryQueryKey>
  >({
    queryKey: getQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuery<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

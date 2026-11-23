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

export function getApodKey() {
  return ['apod'] as const
}

export function getApodQueryKey(args: InferRequestType<typeof client.apod.$get>) {
  return ['apod', '/apod', args] as const
}

export function getApodQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApodQueryKey>
  >({
    queryKey: getApodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

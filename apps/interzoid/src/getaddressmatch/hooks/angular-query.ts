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

export function getGetaddressmatchKey() {
  return ['getaddressmatch'] as const
}

export function getGetaddressmatchQueryKey(
  args: InferRequestType<typeof client.getaddressmatch.$get>,
) {
  return ['getaddressmatch', '/getaddressmatch', args] as const
}

export function getGetaddressmatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getaddressmatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetaddressmatchQueryKey>
  >({
    queryKey: getGetaddressmatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getaddressmatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetaddressmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getaddressmatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetaddressmatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetaddressmatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

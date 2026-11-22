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

export function getGetcompanymatchKey() {
  return ['getcompanymatch'] as const
}

export function getGetcompanymatchQueryKey(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
) {
  return ['getcompanymatch', '/getcompanymatch', args] as const
}

export function getGetcompanymatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcompanymatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcompanymatchQueryKey>
  >({
    queryKey: getGetcompanymatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcompanymatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetcompanymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcompanymatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcompanymatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcompanymatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

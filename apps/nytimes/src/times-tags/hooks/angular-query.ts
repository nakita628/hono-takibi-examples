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

export function getTimestagsKey() {
  return ['timestags'] as const
}

export function getTimestagsQueryKey(args: InferRequestType<typeof client.timestags.$get>) {
  return ['timestags', '/timestags', args] as const
}

export function getTimestagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.timestags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimestagsQueryKey>
  >({
    queryKey: getTimestagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timestags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimestags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.timestags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimestagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimestagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

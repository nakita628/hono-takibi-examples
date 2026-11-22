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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingNumbersQueryKey(
  args: InferRequestType<typeof client.anything.numbers.$get>,
) {
  return ['anything', '/anything/numbers', args] as const
}

export function getAnythingNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingNumbersQueryKey>
  >({
    queryKey: getAnythingNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.numbers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

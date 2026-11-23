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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EmailDisposableQueryKey(
  args: InferRequestType<typeof client.v1.email.disposable.$get>,
) {
  return ['v1', '/v1/email/disposable', args] as const
}

export function getV1EmailDisposableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.email.disposable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDisposableQueryKey>
  >({
    queryKey: getV1EmailDisposableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.email.disposable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EmailDisposable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.email.disposable.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmailDisposableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmailDisposableQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

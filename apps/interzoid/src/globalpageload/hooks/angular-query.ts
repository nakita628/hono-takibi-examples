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

export function getGlobalpageloadKey() {
  return ['globalpageload'] as const
}

export function getGlobalpageloadQueryKey(
  args: InferRequestType<typeof client.globalpageload.$get>,
) {
  return ['globalpageload', '/globalpageload', args] as const
}

export function getGlobalpageloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.globalpageload.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalpageloadQueryKey>
  >({
    queryKey: getGlobalpageloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.globalpageload.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGlobalpageload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.globalpageload.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalpageloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGlobalpageloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

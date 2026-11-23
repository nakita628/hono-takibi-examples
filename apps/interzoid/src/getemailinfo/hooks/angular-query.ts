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

export function getGetemailinfoKey() {
  return ['getemailinfo'] as const
}

export function getGetemailinfoQueryKey(args: InferRequestType<typeof client.getemailinfo.$get>) {
  return ['getemailinfo', '/getemailinfo', args] as const
}

export function getGetemailinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getemailinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetemailinfoQueryKey>
  >({
    queryKey: getGetemailinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getemailinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetemailinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getemailinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetemailinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetemailinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

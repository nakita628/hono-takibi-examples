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

export function getGetfullnamematchKey() {
  return ['getfullnamematch'] as const
}

export function getGetfullnamematchQueryKey(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
) {
  return ['getfullnamematch', '/getfullnamematch', args] as const
}

export function getGetfullnamematchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getfullnamematch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnamematchQueryKey>
  >({
    queryKey: getGetfullnamematchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getfullnamematch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetfullnamematch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getfullnamematch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetfullnamematchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetfullnamematchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

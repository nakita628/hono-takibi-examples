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

export function getGetcountrystandardKey() {
  return ['getcountrystandard'] as const
}

export function getGetcountrystandardQueryKey(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
) {
  return ['getcountrystandard', '/getcountrystandard', args] as const
}

export function getGetcountrystandardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcountrystandard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrystandardQueryKey>
  >({
    queryKey: getGetcountrystandardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcountrystandard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetcountrystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcountrystandard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetcountrystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcountrystandardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

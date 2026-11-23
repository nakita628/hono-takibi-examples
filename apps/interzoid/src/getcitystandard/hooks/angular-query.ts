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

export function getGetcitystandardKey() {
  return ['getcitystandard'] as const
}

export function getGetcitystandardQueryKey(
  args: InferRequestType<typeof client.getcitystandard.$get>,
) {
  return ['getcitystandard', '/getcitystandard', args] as const
}

export function getGetcitystandardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getcitystandard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcitystandardQueryKey>
  >({
    queryKey: getGetcitystandardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getcitystandard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetcitystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getcitystandard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetcitystandardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetcitystandardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

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

export function getOpenaiKey() {
  return ['openai'] as const
}

export function getOpenaiDetailsQueryKey(
  args: InferRequestType<typeof client.openai.details.$get>,
) {
  return ['openai', '/openai/details', args] as const
}

export function getOpenaiDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.openai.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiDetailsQueryKey>
  >({
    queryKey: getOpenaiDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.openai.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOpenaiDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.openai.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenaiDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOpenaiSearchQueryKey(args: InferRequestType<typeof client.openai.search.$get>) {
  return ['openai', '/openai/search', args] as const
}

export function getOpenaiSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.openai.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenaiSearchQueryKey>
  >({
    queryKey: getOpenaiSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.openai.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOpenaiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.openai.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenaiSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenaiSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

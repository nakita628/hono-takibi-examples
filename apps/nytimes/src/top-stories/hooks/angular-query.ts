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

export function getSectionFormatKey() {
  return ['{section}.{format}'] as const
}

export function getSectionFormatQueryKey(
  args: InferRequestType<(typeof client)[':section.:format']['$get']>,
) {
  return [':section.:format', '/:section.:format', args] as const
}

export function getSectionFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':section.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionFormatQueryKey>
  >({
    queryKey: getSectionFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':section.:format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSectionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':section.:format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSectionFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

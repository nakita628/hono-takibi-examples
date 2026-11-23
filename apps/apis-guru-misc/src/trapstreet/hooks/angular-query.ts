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

export function getAddressKey() {
  return ['{address}'] as const
}

export function getAddressQueryKey(args: InferRequestType<(typeof client)[':address']['$get']>) {
  return [':address', '/:address', args] as const
}

export function getAddressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':address']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':address']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':address']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAddressQueryKey>
  >({
    queryKey: getAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':address']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

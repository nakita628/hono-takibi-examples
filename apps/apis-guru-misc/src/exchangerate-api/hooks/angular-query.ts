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

export function getLatestKey() {
  return ['latest'] as const
}

export function getLatestBaseCurrencyQueryKey(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
) {
  return ['latest', '/latest/:base_currency', args] as const
}

export function getLatestBaseCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLatestBaseCurrencyQueryKey>
  >({
    queryKey: getLatestBaseCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.latest[':base_currency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLatestBaseCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.latest)[':base_currency']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLatestBaseCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLatestBaseCurrencyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

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

export function getYearKey() {
  return ['{year}'] as const
}

export function getYearMonthJsonQueryKey(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
) {
  return [':year', '/:year/:month.json', args] as const
}

export function getYearMonthJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYearMonthJsonQueryKey>
  >({
    queryKey: getYearMonthJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':year'][':month.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectYearMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYearMonthJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearMonthJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

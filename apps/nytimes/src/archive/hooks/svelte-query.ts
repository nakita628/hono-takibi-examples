import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createYearMonthJson<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearMonthJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

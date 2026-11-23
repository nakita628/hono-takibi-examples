import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useYearMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYearMonthJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYearMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYearMonthJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

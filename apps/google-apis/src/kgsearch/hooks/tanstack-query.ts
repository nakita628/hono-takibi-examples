import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EntitiesSearchQueryKey(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
) {
  return ['v1', '/v1/entities:search', args] as const
}

export function getV1EntitiesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitiesSearchQueryKey>
  >({
    queryKey: getV1EntitiesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['entities:search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1EntitiesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EntitiesSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EntitiesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['entities:search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitiesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EntitiesSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

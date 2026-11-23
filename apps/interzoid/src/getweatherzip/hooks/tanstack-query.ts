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

export function getGetweatherzipcodeKey() {
  return ['getweatherzipcode'] as const
}

export function getGetweatherzipcodeQueryKey(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
) {
  return ['getweatherzipcode', '/getweatherzipcode', args] as const
}

export function getGetweatherzipcodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getweatherzipcode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetweatherzipcodeQueryKey>
  >({
    queryKey: getGetweatherzipcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getweatherzipcode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetweatherzipcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherzipcodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetweatherzipcodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetweatherzipcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherzipcodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetweatherzipcodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

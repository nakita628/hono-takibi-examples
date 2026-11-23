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

export function getGetweatherKey() {
  return ['getweather'] as const
}

export function getGetweatherQueryKey(args: InferRequestType<typeof client.getweather.$get>) {
  return ['getweather', '/getweather', args] as const
}

export function getGetweatherQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getweather.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetweatherQueryKey>
  >({
    queryKey: getGetweatherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getweather.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetweather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getweather.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetweatherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetweather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getweather.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetweatherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

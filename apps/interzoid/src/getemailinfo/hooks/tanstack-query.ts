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

export function getGetemailinfoKey() {
  return ['getemailinfo'] as const
}

export function getGetemailinfoQueryKey(args: InferRequestType<typeof client.getemailinfo.$get>) {
  return ['getemailinfo', '/getemailinfo', args] as const
}

export function getGetemailinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getemailinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetemailinfoQueryKey>
  >({
    queryKey: getGetemailinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getemailinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetemailinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getemailinfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetemailinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetemailinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetemailinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getemailinfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetemailinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetemailinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

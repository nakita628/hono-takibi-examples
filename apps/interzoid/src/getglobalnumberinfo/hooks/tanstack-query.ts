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

export function getGetglobalnumberinfoKey() {
  return ['getglobalnumberinfo'] as const
}

export function getGetglobalnumberinfoQueryKey(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
) {
  return ['getglobalnumberinfo', '/getglobalnumberinfo', args] as const
}

export function getGetglobalnumberinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getglobalnumberinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobalnumberinfoQueryKey>
  >({
    queryKey: getGetglobalnumberinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getglobalnumberinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetglobalnumberinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobalnumberinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetglobalnumberinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetglobalnumberinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetglobalnumberinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetglobalnumberinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

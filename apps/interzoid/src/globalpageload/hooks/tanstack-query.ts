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

export function getGlobalpageloadKey() {
  return ['globalpageload'] as const
}

export function getGlobalpageloadQueryKey(
  args: InferRequestType<typeof client.globalpageload.$get>,
) {
  return ['globalpageload', '/globalpageload', args] as const
}

export function getGlobalpageloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.globalpageload.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalpageloadQueryKey>
  >({
    queryKey: getGlobalpageloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.globalpageload.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGlobalpageload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.globalpageload.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalpageloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGlobalpageloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGlobalpageload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.globalpageload.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalpageloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGlobalpageloadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

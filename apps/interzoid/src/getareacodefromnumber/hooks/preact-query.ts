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

export function getGetareacodefromnumberKey() {
  return ['getareacodefromnumber'] as const
}

export function getGetareacodefromnumberQueryKey(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
) {
  return ['getareacodefromnumber', '/getareacodefromnumber', args] as const
}

export function getGetareacodefromnumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetareacodefromnumberQueryKey>
  >({
    queryKey: getGetareacodefromnumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getareacodefromnumber.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetareacodefromnumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodefromnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetareacodefromnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetareacodefromnumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodefromnumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetareacodefromnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

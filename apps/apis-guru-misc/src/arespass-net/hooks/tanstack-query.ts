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

export function getAboutKey() {
  return ['about'] as const
}

export function getEcKey() {
  return ['ec'] as const
}

export function getAboutQueryKey(args: InferRequestType<typeof client.about.$get>) {
  return ['about', '/about', args] as const
}

export function getAboutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.about.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >({
    queryKey: getAboutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.about.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.about.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAboutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.about.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAboutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEcQueryKey(args: InferRequestType<typeof client.ec.$get>) {
  return ['ec', '/ec', args] as const
}

export function getEcQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ec.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEcQueryKey>
  >({
    queryKey: getEcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.ec.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function useEc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ec.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEcQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ec.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEcQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

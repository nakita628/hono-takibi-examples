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

export function getApiKey() {
  return ['api'] as const
}

export function getApiGetProfileQueryKey(
  args: InferRequestType<typeof client.api.get_profile.$get>,
) {
  return ['api', '/api/get_profile', args] as const
}

export function getApiGetProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.get_profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGetProfileQueryKey>
  >({
    queryKey: getApiGetProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.get_profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiGetProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.get_profile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGetProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGetProfileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGetProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.get_profile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGetProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGetProfileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiRequestTokenQueryKey(
  args: InferRequestType<typeof client.api.request_token.$get>,
) {
  return ['api', '/api/request_token', args] as const
}

export function getApiRequestTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.request_token.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRequestTokenQueryKey>
  >({
    queryKey: getApiRequestTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.request_token.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.request_token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRequestTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRequestTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.request_token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRequestTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRequestTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

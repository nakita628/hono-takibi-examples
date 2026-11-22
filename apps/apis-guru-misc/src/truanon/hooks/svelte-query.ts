import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createApiGetProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.get_profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGetProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.request_token.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRequestTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

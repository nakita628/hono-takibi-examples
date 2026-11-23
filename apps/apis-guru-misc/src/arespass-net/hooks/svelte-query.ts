import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.about.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAboutQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ec.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEcQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

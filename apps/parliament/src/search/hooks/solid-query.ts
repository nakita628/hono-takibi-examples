import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDescriptionKey() {
  return ['description'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryExtensionKey() {
  return ['query.{extension}'] as const
}

export function getDescriptionQueryKey() {
  return ['description', '/description'] as const
}

export function getDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDescriptionQueryKey>
  >({
    queryKey: getDescriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.description.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.description.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDescriptionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDescriptionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getQueryQueryKey(args: InferRequestType<typeof client.query.$get>) {
  return ['query', '/query', args] as const
}

export function getQueryQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryQueryKey>
  >({
    queryKey: getQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuery<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQueryExtensionQueryKey(
  args: InferRequestType<(typeof client)['query.:extension']['$get']>,
) {
  return ['query.:extension', '/query.:extension', args] as const
}

export function getQueryExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['query.:extension']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['query.:extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query.:extension']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryExtensionQueryKey>
  >({
    queryKey: getQueryExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['query.:extension'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['query.:extension']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['query.:extension']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['query.:extension']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueryExtensionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryExtensionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

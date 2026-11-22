import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListsKey() {
  return ['lists'] as const
}

export function getNamesKey() {
  return ['names'] as const
}

export function getSwatchKey() {
  return ['swatch'] as const
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListsIndexQueryKey() {
  return ['lists', '/lists/'] as const
}

export function getListsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsIndexQueryKey>
  >({
    queryKey: getListsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNamesIndexQueryKey(args: InferRequestType<typeof client.names.index.$get>) {
  return ['names', '/names/', args] as const
}

export function getNamesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesIndexQueryKey>
  >({
    queryKey: getNamesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSwatchIndexQueryKey(args: InferRequestType<typeof client.swatch.index.$get>) {
  return ['swatch', '/swatch/', args] as const
}

export function getSwatchIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.swatch.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSwatchIndexQueryKey>
  >({
    queryKey: getSwatchIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.swatch.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSwatchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.swatch.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSwatchIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSwatchIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

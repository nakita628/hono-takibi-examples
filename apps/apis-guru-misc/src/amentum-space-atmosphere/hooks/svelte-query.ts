import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJb2008Key() {
  return ['jb2008'] as const
}

export function getNrlmsise00Key() {
  return ['nrlmsise00'] as const
}

export function getWamIpeKey() {
  return ['wam-ipe'] as const
}

export function getJb2008QueryKey(args: InferRequestType<typeof client.jb2008.$get>) {
  return ['jb2008', '/jb2008', args] as const
}

export function getJb2008QueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jb2008.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJb2008QueryKey>
  >({
    queryKey: getJb2008QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jb2008.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJb2008<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jb2008.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJb2008QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJb2008QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNrlmsise00QueryKey(args: InferRequestType<typeof client.nrlmsise00.$get>) {
  return ['nrlmsise00', '/nrlmsise00', args] as const
}

export function getNrlmsise00QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nrlmsise00.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNrlmsise00QueryKey>
  >({
    queryKey: getNrlmsise00QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nrlmsise00.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNrlmsise00<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nrlmsise00.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNrlmsise00QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNrlmsise00QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWamIpeQueryKey(args: InferRequestType<(typeof client)['wam-ipe']['$get']>) {
  return ['wam-ipe', '/wam-ipe', args] as const
}

export function getWamIpeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['wam-ipe']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWamIpeQueryKey>
  >({
    queryKey: getWamIpeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['wam-ipe'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWamIpe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWamIpeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWamIpeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

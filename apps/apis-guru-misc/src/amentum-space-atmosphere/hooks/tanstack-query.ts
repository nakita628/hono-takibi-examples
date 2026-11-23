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

export function useJb2008<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jb2008.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJb2008QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJb2008QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJb2008<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jb2008.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJb2008QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJb2008QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNrlmsise00<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nrlmsise00.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNrlmsise00QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNrlmsise00<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nrlmsise00.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNrlmsise00QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWamIpe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWamIpeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWamIpe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWamIpeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

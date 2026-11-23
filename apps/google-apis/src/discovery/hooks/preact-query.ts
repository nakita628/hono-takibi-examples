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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisQueryKey(args: InferRequestType<typeof client.apis.$get>) {
  return ['apis', '/apis', args] as const
}

export function getApisQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApisQueryKey>
  >({
    queryKey: getApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisApiVersionRestQueryKey(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
) {
  return ['apis', '/apis/:api/:version/rest', args] as const
}

export function getApisApiVersionRestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiVersionRestQueryKey>
  >({
    queryKey: getApisApiVersionRestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':api'][':version'].rest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiVersionRest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiVersionRestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisApiVersionRestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisApiVersionRest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiVersionRestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisApiVersionRestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

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

export function getDataKey() {
  return ['data'] as const
}

export function getDataIpGeolocationFullQueryKey(
  args: InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
) {
  return ['data', '/data/ip-geolocation-full', args] as const
}

export function getDataIpGeolocationFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIpGeolocationFullQueryKey>
  >({
    queryKey: getDataIpGeolocationFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data['ip-geolocation-full'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataIpGeolocationFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIpGeolocationFullQueryKey>
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
      ...getDataIpGeolocationFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataIpGeolocationFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIpGeolocationFullQueryKey>
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
      ...getDataIpGeolocationFullQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDataIpGeolocationWithConfidenceQueryKey(
  args: InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
) {
  return ['data', '/data/ip-geolocation-with-confidence', args] as const
}

export function getDataIpGeolocationWithConfidenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIpGeolocationWithConfidenceQueryKey>
  >({
    queryKey: getDataIpGeolocationWithConfidenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data['ip-geolocation-with-confidence'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataIpGeolocationWithConfidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIpGeolocationWithConfidenceQueryKey>
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
      ...getDataIpGeolocationWithConfidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataIpGeolocationWithConfidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIpGeolocationWithConfidenceQueryKey>
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
      ...getDataIpGeolocationWithConfidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createDataIpGeolocationFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataIpGeolocationFullQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDataIpGeolocationWithConfidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getDataIpGeolocationWithConfidenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

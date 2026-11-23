import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectDataIpGeolocationFull<
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
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDataIpGeolocationFullQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDataIpGeolocationWithConfidence<
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
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDataIpGeolocationWithConfidenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

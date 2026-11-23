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

export function getEgm2008Key() {
  return ['egm2008'] as const
}

export function getEgm2008GeoidHeightQueryKey(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
) {
  return ['egm2008', '/egm2008/geoid_height', args] as const
}

export function getEgm2008GeoidHeightQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.egm2008.geoid_height.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEgm2008GeoidHeightQueryKey>
  >({
    queryKey: getEgm2008GeoidHeightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.egm2008.geoid_height.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEgm2008GeoidHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEgm2008GeoidHeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEgm2008GeoidHeightQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEgm2008GeoidHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEgm2008GeoidHeightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEgm2008GeoidHeightQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEgm2008GravityAnomalyQueryKey(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
) {
  return ['egm2008', '/egm2008/gravity_anomaly', args] as const
}

export function getEgm2008GravityAnomalyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEgm2008GravityAnomalyQueryKey>
  >({
    queryKey: getEgm2008GravityAnomalyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.egm2008.gravity_anomaly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEgm2008GravityAnomaly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEgm2008GravityAnomalyQueryKey>
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
      ...getEgm2008GravityAnomalyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEgm2008GravityAnomaly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEgm2008GravityAnomalyQueryKey>
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
      ...getEgm2008GravityAnomalyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

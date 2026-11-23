import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createEgm2008GeoidHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEgm2008GeoidHeightQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEgm2008GravityAnomaly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEgm2008GravityAnomalyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEgm2008Key() {
  return ['egm2008'] as const
}

export function getEgm2008GeoidHeightQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.geoid_height.$get>>,
) {
  return ['egm2008', '/egm2008/geoid_height', toValue(args)] as const
}

export function getEgm2008GeoidHeightQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.geoid_height.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEgm2008GeoidHeightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.egm2008.geoid_height.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEgm2008GeoidHeight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.geoid_height.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>
            >
          >,
          ReturnType<typeof getEgm2008GeoidHeightQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.geoid_height.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEgm2008GeoidHeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEgm2008GeoidHeightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.egm2008.geoid_height.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEgm2008GravityAnomalyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.gravity_anomaly.$get>>,
) {
  return ['egm2008', '/egm2008/gravity_anomaly', toValue(args)] as const
}

export function getEgm2008GravityAnomalyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.gravity_anomaly.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEgm2008GravityAnomalyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.egm2008.gravity_anomaly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEgm2008GravityAnomaly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.egm2008.gravity_anomaly.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
            >
          >,
          ReturnType<typeof getEgm2008GravityAnomalyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.egm2008.gravity_anomaly.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEgm2008GravityAnomalyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEgm2008GravityAnomalyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.egm2008.gravity_anomaly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

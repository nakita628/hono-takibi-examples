import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAirQualityKey() {
  return ['air_quality'] as const
}

export function getFindPlacesKey() {
  return ['find_places'] as const
}

export function getFindPlacesPrefixKey() {
  return ['find_places_prefix'] as const
}

export function getMapKey() {
  return ['map'] as const
}

export function getNearestPlaceKey() {
  return ['nearest_place'] as const
}

export function getPointKey() {
  return ['point'] as const
}

export function getTimeMachineKey() {
  return ['time_machine'] as const
}

export function getAirQualityQueryKey(args: InferRequestType<typeof client.air_quality.$get>) {
  return ['air_quality', '/air_quality', args] as const
}

export function getAirQualityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.air_quality.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAirQualityQueryKey>
  >({
    queryKey: getAirQualityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.air_quality.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.air_quality.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAirQualityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAirQualityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFindPlacesQueryKey(args: InferRequestType<typeof client.find_places.$get>) {
  return ['find_places', '/find_places', args] as const
}

export function getFindPlacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.find_places.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFindPlacesQueryKey>
  >({
    queryKey: getFindPlacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.find_places.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFindPlaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.find_places.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindPlacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindPlacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFindPlacesPrefixQueryKey(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
) {
  return ['find_places_prefix', '/find_places_prefix', args] as const
}

export function getFindPlacesPrefixQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.find_places_prefix.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPlacesPrefixQueryKey>
  >({
    queryKey: getFindPlacesPrefixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.find_places_prefix.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFindPlacesPrefix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.find_places_prefix.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPlacesPrefixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindPlacesPrefixQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMapQueryKey(args: InferRequestType<typeof client.map.$get>) {
  return ['map', '/map', args] as const
}

export function getMapQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.map.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMapQueryKey>
  >({
    queryKey: getMapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.map.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNearestPlaceQueryKey(args: InferRequestType<typeof client.nearest_place.$get>) {
  return ['nearest_place', '/nearest_place', args] as const
}

export function getNearestPlaceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nearest_place.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNearestPlaceQueryKey>
  >({
    queryKey: getNearestPlaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nearest_place.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNearestPlace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nearest_place.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNearestPlaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNearestPlaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPointQueryKey(args: InferRequestType<typeof client.point.$get>) {
  return ['point', '/point', args] as const
}

export function getPointQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.point.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPointQueryKey>
  >({
    queryKey: getPointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.point.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoint<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.point.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTimeMachineQueryKey(args: InferRequestType<typeof client.time_machine.$get>) {
  return ['time_machine', '/time_machine', args] as const
}

export function getTimeMachineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time_machine.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeMachineQueryKey>
  >({
    queryKey: getTimeMachineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_machine.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTimeMachine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.time_machine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimeMachineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimeMachineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

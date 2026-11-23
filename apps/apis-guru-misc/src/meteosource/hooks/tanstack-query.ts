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

export function useAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.air_quality.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAirQualityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.air_quality.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAirQualityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useFindPlaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_places.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindPlacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindPlaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_places.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindPlacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useFindPlacesPrefix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindPlacesPrefixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindPlacesPrefix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindPlacesPrefixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.map.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.map.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNearestPlace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nearest_place.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNearestPlaceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNearestPlace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nearest_place.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNearestPlaceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePoint<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.point.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePoint<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.point.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTimeMachine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_machine.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimeMachineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimeMachine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time_machine.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimeMachineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

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

export function getAirQualityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.air_quality.$get>>,
) {
  return ['air_quality', '/air_quality', toValue(args)] as const
}

export function getAirQualityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.air_quality.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAirQualityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.air_quality.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.air_quality.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>
          >,
          ReturnType<typeof getAirQualityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.air_quality.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAirQualityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAirQualityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.air_quality.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindPlacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places.$get>>,
) {
  return ['find_places', '/find_places', toValue(args)] as const
}

export function getFindPlacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindPlacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.find_places.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFindPlaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>
          >,
          ReturnType<typeof getFindPlacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFindPlacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindPlacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.find_places.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindPlacesPrefixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places_prefix.$get>>,
) {
  return ['find_places_prefix', '/find_places_prefix', toValue(args)] as const
}

export function getFindPlacesPrefixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places_prefix.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindPlacesPrefixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.find_places_prefix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindPlacesPrefix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_places_prefix.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>
            >
          >,
          ReturnType<typeof getFindPlacesPrefixQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_places_prefix.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPlacesPrefixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindPlacesPrefixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.find_places_prefix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.map.$get>>) {
  return ['map', '/map', toValue(args)] as const
}

export function getMapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.map.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.map.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
          ReturnType<typeof getMapQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNearestPlaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearest_place.$get>>,
) {
  return ['nearest_place', '/nearest_place', toValue(args)] as const
}

export function getNearestPlaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearest_place.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNearestPlaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nearest_place.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNearestPlace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearest_place.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
          >,
          ReturnType<typeof getNearestPlaceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearest_place.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNearestPlaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNearestPlaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nearest_place.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.point.$get>>,
) {
  return ['point', '/point', toValue(args)] as const
}

export function getPointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.point.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.point.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePoint<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.point.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
          ReturnType<typeof getPointQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.point.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.point.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimeMachineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_machine.$get>>,
) {
  return ['time_machine', '/time_machine', toValue(args)] as const
}

export function getTimeMachineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_machine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeMachineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_machine.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimeMachine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_machine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>
          >,
          ReturnType<typeof getTimeMachineQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_machine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeMachineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeMachineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_machine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

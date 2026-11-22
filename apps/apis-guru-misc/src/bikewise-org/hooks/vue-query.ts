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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2IncidentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.incidents.$get>>,
) {
  return ['v2', '/v2/incidents', toValue(args)] as const
}

export function getV2IncidentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.incidents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2IncidentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.incidents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Incidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.incidents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
          >,
          ReturnType<typeof getV2IncidentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2IncidentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2IncidentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.incidents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2IncidentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.incidents)[':id']['$get']>>,
) {
  return ['v2', '/v2/incidents/:id', toValue(args)] as const
}

export function getV2IncidentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.incidents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2IncidentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.incidents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2IncidentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.incidents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2IncidentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2IncidentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2IncidentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.incidents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
) {
  return ['v2', '/v2/locations', toValue(args)] as const
}

export function getV2LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          ReturnType<typeof getV2LocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LocationsMarkersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.markers.$get>>,
) {
  return ['v2', '/v2/locations/markers', toValue(args)] as const
}

export function getV2LocationsMarkersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.markers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LocationsMarkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.locations.markers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LocationsMarkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.locations.markers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>
            >
          >,
          ReturnType<typeof getV2LocationsMarkersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsMarkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LocationsMarkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.locations.markers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

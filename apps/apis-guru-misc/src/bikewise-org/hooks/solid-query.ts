import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2IncidentsQueryKey(args: InferRequestType<typeof client.v2.incidents.$get>) {
  return ['v2', '/v2/incidents', args] as const
}

export function getV2IncidentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.incidents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2IncidentsQueryKey>
  >({
    queryKey: getV2IncidentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.incidents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Incidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.incidents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.incidents.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2IncidentsQueryKey>
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
    return { ...getV2IncidentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2IncidentsIdQueryKey(
  args: InferRequestType<(typeof client.v2.incidents)[':id']['$get']>,
) {
  return ['v2', '/v2/incidents/:id', args] as const
}

export function getV2IncidentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.incidents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2IncidentsIdQueryKey>
  >({
    queryKey: getV2IncidentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.incidents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2IncidentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.incidents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.incidents)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2IncidentsIdQueryKey>
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
    return { ...getV2IncidentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2LocationsQueryKey(args: InferRequestType<typeof client.v2.locations.$get>) {
  return ['v2', '/v2/locations', args] as const
}

export function getV2LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LocationsQueryKey>
  >({
    queryKey: getV2LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.locations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2LocationsQueryKey>
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
    return { ...getV2LocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2LocationsMarkersQueryKey(
  args: InferRequestType<typeof client.v2.locations.markers.$get>,
) {
  return ['v2', '/v2/locations/markers', args] as const
}

export function getV2LocationsMarkersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.locations.markers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LocationsMarkersQueryKey>
  >({
    queryKey: getV2LocationsMarkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.locations.markers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2LocationsMarkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.locations.markers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.locations.markers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2LocationsMarkersQueryKey>
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
    return { ...getV2LocationsMarkersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

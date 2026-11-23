import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataKey() {
  return ['data'] as const
}

export function getGeometriesKey() {
  return ['geometries'] as const
}

export function getTrafficKey() {
  return ['traffic'] as const
}

export function getDataInsightsQueryKey(args: InferRequestType<typeof client.data.insights.$get>) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights', keyArgs] as const
}

export function getDataInsightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.insights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsQueryKey>
  >({
    queryKey: getDataInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.insights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDataInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.data.insights.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDataInsightsQueryKey>
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
    return { ...getDataInsightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDataInsightsInsightIdQueryKey(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights/:insight_id:', keyArgs] as const
}

export function getDataInsightsInsightIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsInsightIdQueryKey>
  >({
    queryKey: getDataInsightsInsightIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.insights[':insight_id:'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataInsightsInsightId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDataInsightsInsightIdQueryKey>
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
      ...getDataInsightsInsightIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDataInsightsInsightIdQueryQueryKey(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights/:insight_id:/query', keyArgs] as const
}

export function getDataInsightsInsightIdQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsInsightIdQueryQueryKey>
  >({
    queryKey: getDataInsightsInsightIdQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.insights[':insight_id:'].query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataInsightsInsightIdQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDataInsightsInsightIdQueryQueryKey>
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
      ...getDataInsightsInsightIdQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGeometriesGeometryQueryKey(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['geometries', '/geometries/geometry', keyArgs] as const
}

export function getGeometriesGeometryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.geometries.geometry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeometriesGeometryQueryKey>
  >({
    queryKey: getGeometriesGeometryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geometries.geometry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeometriesGeometry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.geometries.geometry.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeometriesGeometryQueryKey>
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
    return { ...getGeometriesGeometryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['geometries', '/geometries/regions/intersecting/:latitude/:longitude', keyArgs] as const
}

export function getGeometriesRegionsIntersectingLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey>
  >({
    queryKey: getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geometries.regions.intersecting[':latitude'][':longitude'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeometriesRegionsIntersectingLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey>
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
      ...getGeometriesRegionsIntersectingLatitudeLongitudeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTrafficCountsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic', '/traffic/counts/:segment_id', keyArgs] as const
}

export function getTrafficCountsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficCountsSegmentIdQueryKey>
  >({
    queryKey: getTrafficCountsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.traffic.counts[':segment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficCountsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTrafficCountsSegmentIdQueryKey>
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
      ...getTrafficCountsSegmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTrafficRoadsNearestLatitudeLongitudeQueryKey(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic', '/traffic/roads/nearest/:latitude/:longitude', keyArgs] as const
}

export function getTrafficRoadsNearestLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficRoadsNearestLatitudeLongitudeQueryKey>
  >({
    queryKey: getTrafficRoadsNearestLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.traffic.roads.nearest[':latitude'][':longitude'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficRoadsNearestLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTrafficRoadsNearestLatitudeLongitudeQueryKey>
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
      ...getTrafficRoadsNearestLatitudeLongitudeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

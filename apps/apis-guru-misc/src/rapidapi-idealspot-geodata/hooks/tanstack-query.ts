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

export function useDataInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.insights.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataInsightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.insights.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataInsightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDataInsightsInsightId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDataInsightsInsightIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataInsightsInsightId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDataInsightsInsightIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDataInsightsInsightIdQuery<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDataInsightsInsightIdQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataInsightsInsightIdQuery<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDataInsightsInsightIdQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useGeometriesGeometry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeometriesGeometryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGeometriesGeometryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGeometriesGeometry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeometriesGeometryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGeometriesGeometryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useGeometriesRegionsIntersectingLatitudeLongitude<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getGeometriesRegionsIntersectingLatitudeLongitudeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeometriesRegionsIntersectingLatitudeLongitude<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getGeometriesRegionsIntersectingLatitudeLongitudeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTrafficCountsSegmentId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTrafficCountsSegmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrafficCountsSegmentId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTrafficCountsSegmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTrafficRoadsNearestLatitudeLongitude<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTrafficRoadsNearestLatitudeLongitudeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrafficRoadsNearestLatitudeLongitude<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTrafficRoadsNearestLatitudeLongitudeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

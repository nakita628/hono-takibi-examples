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

export function getDataKey() {
  return ['data'] as const
}

export function getGeometriesKey() {
  return ['geometries'] as const
}

export function getTrafficKey() {
  return ['traffic'] as const
}

export function getDataInsightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.insights.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/insights', keyArgs] as const
}

export function getDataInsightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.insights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataInsightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.insights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.insights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
          >,
          ReturnType<typeof getDataInsightsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataInsightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.insights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataInsightsInsightIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/insights/:insight_id:', keyArgs] as const
}

export function getDataInsightsInsightIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataInsightsInsightIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.insights[':insight_id:'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataInsightsInsightIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsInsightIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataInsightsInsightIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.insights[':insight_id:'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataInsightsInsightIdQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data', '/data/insights/:insight_id:/query', keyArgs] as const
}

export function getDataInsightsInsightIdQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataInsightsInsightIdQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.insights[':insight_id:'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataInsightsInsightIdQueryQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataInsightsInsightIdQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataInsightsInsightIdQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.insights[':insight_id:'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeometriesGeometryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geometries.geometry.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['geometries', '/geometries/geometry', keyArgs] as const
}

export function getGeometriesGeometryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geometries.geometry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeometriesGeometryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geometries.geometry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeometriesGeometry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geometries.geometry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
            >
          >,
          ReturnType<typeof getGeometriesGeometryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeometriesGeometryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeometriesGeometryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geometries.geometry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['geometries', '/geometries/regions/intersecting/:latitude/:longitude', keyArgs] as const
}

export function getGeometriesRegionsIntersectingLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geometries.regions.intersecting[':latitude'][':longitude'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeometriesRegionsIntersectingLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geometries.regions.intersecting[':latitude'][':longitude'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrafficCountsSegmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['traffic', '/traffic/counts/:segment_id', keyArgs] as const
}

export function getTrafficCountsSegmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficCountsSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traffic.counts[':segment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrafficCountsSegmentIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficCountsSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficCountsSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.traffic.counts[':segment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrafficRoadsNearestLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['traffic', '/traffic/roads/nearest/:latitude/:longitude', keyArgs] as const
}

export function getTrafficRoadsNearestLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficRoadsNearestLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traffic.roads.nearest[':latitude'][':longitude'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getTrafficRoadsNearestLatitudeLongitudeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficRoadsNearestLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.traffic.roads.nearest[':latitude'][':longitude'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

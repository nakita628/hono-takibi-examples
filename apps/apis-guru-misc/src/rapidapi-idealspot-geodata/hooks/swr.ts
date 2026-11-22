import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetDataInsightsKey(args: InferRequestType<typeof client.data.insights.$get>) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights', keyArgs] as const
}

export function useGetDataInsights<TError = unknown>(
  args: InferRequestType<typeof client.data.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataInsightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataInsights<TError = unknown>(
  args: InferRequestType<typeof client.data.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDataInsightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.insights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataInsightsInsightIdKey(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights/:insight_id:', keyArgs] as const
}

export function useGetDataInsightsInsightId<TError = unknown>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataInsightsInsightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.insights[':insight_id:'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataInsightsInsightId<TError = unknown>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataInsightsInsightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.insights[':insight_id:'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataInsightsInsightIdQueryKey(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data', '/data/insights/:insight_id:/query', keyArgs] as const
}

export function useGetDataInsightsInsightIdQuery<TError = unknown>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataInsightsInsightIdQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.insights[':insight_id:'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataInsightsInsightIdQuery<TError = unknown>(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataInsightsInsightIdQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.insights)[':insight_id:']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.data.insights[':insight_id:'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeometriesGeometryKey(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['geometries', '/geometries/geometry', keyArgs] as const
}

export function useGetGeometriesGeometry<TError = unknown>(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeometriesGeometryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geometries.geometry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeometriesGeometry<TError = unknown>(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeometriesGeometryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geometries.geometry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geometries.geometry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeometriesRegionsIntersectingLatitudeLongitudeKey(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['geometries', '/geometries/regions/intersecting/:latitude/:longitude', keyArgs] as const
}

export function useGetGeometriesRegionsIntersectingLatitudeLongitude<TError = unknown>(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeometriesRegionsIntersectingLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geometries.regions.intersecting[':latitude'][':longitude'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeometriesRegionsIntersectingLatitudeLongitude<TError = unknown>(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeometriesRegionsIntersectingLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geometries.regions.intersecting[':latitude'][':longitude'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTrafficCountsSegmentIdKey(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic', '/traffic/counts/:segment_id', keyArgs] as const
}

export function useGetTrafficCountsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficCountsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traffic.counts[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficCountsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficCountsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traffic.counts)[':segment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traffic.counts[':segment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrafficRoadsNearestLatitudeLongitudeKey(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic', '/traffic/roads/nearest/:latitude/:longitude', keyArgs] as const
}

export function useGetTrafficRoadsNearestLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficRoadsNearestLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.traffic.roads.nearest[':latitude'][':longitude'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficRoadsNearestLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrafficRoadsNearestLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.traffic.roads.nearest[':latitude'][':longitude'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

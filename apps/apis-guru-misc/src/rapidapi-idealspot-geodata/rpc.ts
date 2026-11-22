import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataInsights(
  args: InferRequestType<typeof client.data.insights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.insights.$get(args, options))
}

export async function getDataInsightsInsightId(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.insights[':insight_id:'].$get(args, options))
}

export async function getDataInsightsInsightIdQuery(
  args: InferRequestType<(typeof client.data.insights)[':insight_id:']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.insights[':insight_id:'].query.$get(args, options))
}

export async function getGeometriesGeometry(
  args: InferRequestType<typeof client.geometries.geometry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geometries.geometry.$get(args, options))
}

export async function getGeometriesRegionsIntersectingLatitudeLongitude(
  args: InferRequestType<
    (typeof client.geometries.regions.intersecting)[':latitude'][':longitude']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.geometries.regions.intersecting[':latitude'][':longitude'].$get(args, options),
  )
}

export async function getTrafficCountsSegmentId(
  args: InferRequestType<(typeof client.traffic.counts)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.counts[':segment_id'].$get(args, options))
}

export async function getTrafficRoadsNearestLatitudeLongitude(
  args: InferRequestType<(typeof client.traffic.roads.nearest)[':latitude'][':longitude']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.traffic.roads.nearest[':latitude'][':longitude'].$get(args, options),
  )
}

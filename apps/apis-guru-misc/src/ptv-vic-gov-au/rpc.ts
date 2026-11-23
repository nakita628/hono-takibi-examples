import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3DeparturesRouteTypeRouteTypeStopStopId(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(args, options),
  )
}

export async function getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteId(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV3DirectionsRouteRouteId(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.directions.route[':route_id'].$get(args, options))
}

export async function getV3DirectionsDirectionId(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.directions[':direction_id'].$get(args, options))
}

export async function getV3DirectionsDirectionIdRouteTypeRouteType(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.directions[':direction_id'].route_type[':route_type'].$get(args, options),
  )
}

export async function getV3Disruptions(
  args: InferRequestType<typeof client.v3.disruptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.disruptions.$get(args, options))
}

export async function getV3DisruptionsModes(
  args: InferRequestType<typeof client.v3.disruptions.modes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.disruptions.modes.$get(args, options))
}

export async function getV3DisruptionsRouteRouteId(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.disruptions.route[':route_id'].$get(args, options))
}

export async function getV3DisruptionsRouteRouteIdStopStopId(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(args, options),
  )
}

export async function getV3DisruptionsStopStopId(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.disruptions.stop[':stop_id'].$get(args, options))
}

export async function getV3DisruptionsDisruptionId(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.disruptions[':disruption_id'].$get(args, options))
}

export async function getV3FareEstimateMinZoneMinZoneMaxZoneMaxZone(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(args, options),
  )
}

export async function getV3Outlets(
  args: InferRequestType<typeof client.v3.outlets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.outlets.$get(args, options))
}

export async function getV3OutletsLocationLatitudeLongitude(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.outlets.location[':latitude,:longitude'].$get(args, options))
}

export async function getV3PatternRunRunRefRouteTypeRouteType(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(args, options),
  )
}

export async function getV3RouteTypes(
  args: InferRequestType<typeof client.v3.route_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.route_types.$get(args, options))
}

export async function getV3Routes(
  args: InferRequestType<typeof client.v3.routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.routes.$get(args, options))
}

export async function getV3RoutesRouteId(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.routes[':route_id'].$get(args, options))
}

export async function getV3RunsRouteRouteId(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.runs.route[':route_id'].$get(args, options))
}

export async function getV3RunsRouteRouteIdRouteTypeRouteType(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.runs.route[':route_id'].route_type[':route_type'].$get(args, options),
  )
}

export async function getV3RunsRunRef(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.runs[':run_ref'].$get(args, options))
}

export async function getV3RunsRunRefRouteTypeRouteType(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.runs[':run_ref'].route_type[':route_type'].$get(args, options),
  )
}

export async function getV3SearchSearchTerm(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search[':search_term'].$get(args, options))
}

export async function getV3StopsLocationLatitudeLongitude(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stops.location[':latitude,:longitude'].$get(args, options))
}

export async function getV3StopsRouteRouteIdRouteTypeRouteType(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.stops.route[':route_id'].route_type[':route_type'].$get(args, options),
  )
}

export async function getV3StopsStopIdRouteTypeRouteType(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.stops[':stop_id'].route_type[':route_type'].$get(args, options),
  )
}

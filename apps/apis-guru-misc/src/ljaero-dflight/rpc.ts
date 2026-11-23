import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postUsV1AerodromesDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.aerodromes)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.aerodromes['distance-query'].$post(args, options))
}

export async function postUsV1AerodromesPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.aerodromes)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.aerodromes['polygon-query'].$post(args, options))
}

export async function postUsV1AerodromesRouteQuery(
  args: InferRequestType<(typeof client.us.v1.aerodromes)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.aerodromes['route-query'].$post(args, options))
}

export async function postUsV1AirspaceDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.airspace)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.airspace['distance-query'].$post(args, options))
}

export async function postUsV1AirspacePolygonQuery(
  args: InferRequestType<(typeof client.us.v1.airspace)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.airspace['polygon-query'].$post(args, options))
}

export async function postUsV1AirspaceRouteQuery(
  args: InferRequestType<(typeof client.us.v1.airspace)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.airspace['route-query'].$post(args, options))
}

export async function postUsV1ObstaclesDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.obstacles)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.obstacles['distance-query'].$post(args, options))
}

export async function postUsV1ObstaclesPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.obstacles)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.obstacles['polygon-query'].$post(args, options))
}

export async function postUsV1ObstaclesRouteQuery(
  args: InferRequestType<(typeof client.us.v1.obstacles)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.obstacles['route-query'].$post(args, options))
}

export async function postUsV1RestrictionsDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.restrictions)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.restrictions['distance-query'].$post(args, options))
}

export async function postUsV1RestrictionsPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.restrictions)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.restrictions['polygon-query'].$post(args, options))
}

export async function postUsV1RestrictionsRouteQuery(
  args: InferRequestType<(typeof client.us.v1.restrictions)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.restrictions['route-query'].$post(args, options))
}

export async function postUsV1SsaDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.ssa)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.ssa['distance-query'].$post(args, options))
}

export async function postUsV1SsaPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.ssa)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.ssa['polygon-query'].$post(args, options))
}

export async function postUsV1SsaRouteQuery(
  args: InferRequestType<(typeof client.us.v1.ssa)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.ssa['route-query'].$post(args, options))
}

export async function postUsV1UoaDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.uoa)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.uoa['distance-query'].$post(args, options))
}

export async function postUsV1UoaPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.uoa)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.uoa['polygon-query'].$post(args, options))
}

export async function postUsV1UoaRouteQuery(
  args: InferRequestType<(typeof client.us.v1.uoa)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.uoa['route-query'].$post(args, options))
}

export async function postUsV1VenuesDistanceQuery(
  args: InferRequestType<(typeof client.us.v1.venues)['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.venues['distance-query'].$post(args, options))
}

export async function postUsV1VenuesPolygonQuery(
  args: InferRequestType<(typeof client.us.v1.venues)['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.venues['polygon-query'].$post(args, options))
}

export async function postUsV1VenuesRouteQuery(
  args: InferRequestType<(typeof client.us.v1.venues)['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1.venues['route-query'].$post(args, options))
}

export async function postUsV1WxForecastDistanceQuery(
  args: InferRequestType<(typeof client.us.v1)['wx-forecast']['distance-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1['wx-forecast']['distance-query'].$post(args, options))
}

export async function postUsV1WxForecastPolygonQuery(
  args: InferRequestType<(typeof client.us.v1)['wx-forecast']['polygon-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1['wx-forecast']['polygon-query'].$post(args, options))
}

export async function postUsV1WxForecastRouteQuery(
  args: InferRequestType<(typeof client.us.v1)['wx-forecast']['route-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us.v1['wx-forecast']['route-query'].$post(args, options))
}

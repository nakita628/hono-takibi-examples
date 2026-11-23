import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAirQuality(
  args: InferRequestType<typeof client.air_quality.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.air_quality.$get(args, options))
}

export async function getFindPlaces(
  args: InferRequestType<typeof client.find_places.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.find_places.$get(args, options))
}

export async function getFindPlacesPrefix(
  args: InferRequestType<typeof client.find_places_prefix.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.find_places_prefix.$get(args, options))
}

export async function getMap(
  args: InferRequestType<typeof client.map.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map.$get(args, options))
}

export async function getNearestPlace(
  args: InferRequestType<typeof client.nearest_place.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nearest_place.$get(args, options))
}

export async function getPoint(
  args: InferRequestType<typeof client.point.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.point.$get(args, options))
}

export async function getTimeMachine(
  args: InferRequestType<typeof client.time_machine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_machine.$get(args, options))
}

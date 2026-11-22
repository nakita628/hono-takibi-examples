import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Incidents(
  args: InferRequestType<typeof client.v2.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.incidents.$get(args, options))
}

export async function getV2IncidentsId(
  args: InferRequestType<(typeof client.v2.incidents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.incidents[':id'].$get(args, options))
}

export async function getV2Locations(
  args: InferRequestType<typeof client.v2.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations.$get(args, options))
}

export async function getV2LocationsMarkers(
  args: InferRequestType<typeof client.v2.locations.markers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations.markers.$get(args, options))
}

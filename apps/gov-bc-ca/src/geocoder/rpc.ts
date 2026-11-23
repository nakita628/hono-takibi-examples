import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAddressesOutputFormat(
  args: InferRequestType<(typeof client)['addresses.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['addresses.:outputFormat'].$get(args, options))
}

export async function getIntersectionsNearOutputFormat(
  args: InferRequestType<(typeof client.intersections)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intersections['near.:outputFormat'].$get(args, options))
}

export async function getIntersectionsNearestOutputFormat(
  args: InferRequestType<(typeof client.intersections)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intersections['nearest.:outputFormat'].$get(args, options))
}

export async function getIntersectionsWithinOutputFormat(
  args: InferRequestType<(typeof client.intersections)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intersections['within.:outputFormat'].$get(args, options))
}

export async function getIntersectionsIntersectionIDOutputFormat(
  args: InferRequestType<(typeof client.intersections)[':intersectionID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.intersections[':intersectionID.:outputFormat'].$get(args, options),
  )
}

export async function getOccupantsAddressesOutputFormat(
  args: InferRequestType<(typeof client.occupants)['addresses.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupants['addresses.:outputFormat'].$get(args, options))
}

export async function getOccupantsNearOutputFormat(
  args: InferRequestType<(typeof client.occupants)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupants['near.:outputFormat'].$get(args, options))
}

export async function getOccupantsNearestOutputFormat(
  args: InferRequestType<(typeof client.occupants)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupants['nearest.:outputFormat'].$get(args, options))
}

export async function getOccupantsWithinOutputFormat(
  args: InferRequestType<(typeof client.occupants)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupants['within.:outputFormat'].$get(args, options))
}

export async function getOccupantsOccupantIDOutputFormat(
  args: InferRequestType<(typeof client.occupants)[':occupantID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupants[':occupantID.:outputFormat'].$get(args, options))
}

export async function getParcelsPidsSiteIDOutputFormat(
  args: InferRequestType<(typeof client.parcels.pids)[':siteID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parcels.pids[':siteID.:outputFormat'].$get(args, options))
}

export async function getSitesNearOutputFormat(
  args: InferRequestType<(typeof client.sites)['near.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites['near.:outputFormat'].$get(args, options))
}

export async function getSitesNearestOutputFormat(
  args: InferRequestType<(typeof client.sites)['nearest.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites['nearest.:outputFormat'].$get(args, options))
}

export async function getSitesWithinOutputFormat(
  args: InferRequestType<(typeof client.sites)['within.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites['within.:outputFormat'].$get(args, options))
}

export async function getSitesSiteIDOutputFormat(
  args: InferRequestType<(typeof client.sites)[':siteID.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteID.:outputFormat'].$get(args, options))
}

export async function getSitesSiteIDSubsitesOutputFormat(
  args: InferRequestType<(typeof client.sites)[':siteID']['subsites.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteID']['subsites.:outputFormat'].$get(args, options))
}

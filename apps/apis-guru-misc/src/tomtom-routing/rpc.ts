import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRoutingVersionNumberCalculateReachableRangeOriginContentType(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$get(
      args,
      options,
    ),
  )
}

export async function postRoutingVersionNumberCalculateReachableRangeOriginContentType(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateReachableRange'][':origin'][':contentType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routing[':versionNumber'].calculateReachableRange[':origin'][':contentType'].$post(
      args,
      options,
    ),
  )
}

export async function getRoutingVersionNumberCalculateRouteLocationsContentType(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$get(
      args,
      options,
    ),
  )
}

export async function postRoutingVersionNumberCalculateRouteLocationsContentType(
  args: InferRequestType<
    (typeof client.routing)[':versionNumber']['calculateRoute'][':locations'][':contentType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routing[':versionNumber'].calculateRoute[':locations'][':contentType'].$post(
      args,
      options,
    ),
  )
}

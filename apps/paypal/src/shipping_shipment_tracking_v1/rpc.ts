import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1ShippingTrackersBatch(
  args: InferRequestType<(typeof client.v1.shipping)['trackers-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping['trackers-batch'].$post(args, options))
}

export async function getV1ShippingTrackers(
  args: InferRequestType<typeof client.v1.shipping.trackers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping.trackers.$get(args, options))
}

export async function postV1ShippingTrackers(
  args: InferRequestType<typeof client.v1.shipping.trackers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping.trackers.$post(args, options))
}

export async function getV1ShippingTrackersId(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping.trackers[':id'].$get(args, options))
}

export async function putV1ShippingTrackersId(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping.trackers[':id'].$put(args, options))
}

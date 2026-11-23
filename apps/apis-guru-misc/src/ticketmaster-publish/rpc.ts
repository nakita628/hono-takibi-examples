import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPublishV2Attractions(
  args: InferRequestType<typeof client.publish.v2.attractions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.attractions.$post(args, options))
}

export async function patchPublishV2AttractionsId(
  args: InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.attractions[':id'].$patch(args, options))
}

export async function postPublishV2AttractionsIdVideos(
  args: InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.attractions[':id'].videos.$post(args, options))
}

export async function postPublishV2Entitlements(
  args: InferRequestType<typeof client.publish.v2.entitlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.entitlements.$post(args, options))
}

export async function postPublishV2Events(
  args: InferRequestType<typeof client.publish.v2.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.events.$post(args, options))
}

export async function patchPublishV2EventsId(
  args: InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.events[':id'].$patch(args, options))
}

export async function postPublishV2EventsIdVideos(
  args: InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.events[':id'].videos.$post(args, options))
}

export async function postPublishV2Extensions(
  args: InferRequestType<typeof client.publish.v2.extensions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.extensions.$post(args, options))
}

export async function postPublishV2Venues(
  args: InferRequestType<typeof client.publish.v2.venues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.venues.$post(args, options))
}

export async function patchPublishV2VenuesId(
  args: InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publish.v2.venues[':id'].$patch(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV4EncodedFullHashesEncodedRequest(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.encodedFullHashes[':encodedRequest'].$get(args, options))
}

export async function getV4EncodedUpdatesEncodedRequest(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.encodedUpdates[':encodedRequest'].$get(args, options))
}

export async function postV4FullHashesFind(
  args: InferRequestType<(typeof client.v4)['fullHashes:find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['fullHashes:find'].$post(args, options))
}

export async function postV4ThreatHits(
  args: InferRequestType<typeof client.v4.threatHits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.threatHits.$post(args, options))
}

export async function postV4ThreatListUpdatesFetch(
  args: InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['threatListUpdates:fetch'].$post(args, options))
}

export async function getV4ThreatLists(
  args: InferRequestType<typeof client.v4.threatLists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.threatLists.$get(args, options))
}

export async function postV4ThreatMatchesFind(
  args: InferRequestType<(typeof client.v4)['threatMatches:find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['threatMatches:find'].$post(args, options))
}

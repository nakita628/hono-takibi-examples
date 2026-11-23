import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1InstallAttribution(
  args: InferRequestType<typeof client.v1.installAttribution.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.installAttribution.$post(args, options))
}

export async function postV1ManagedShortLinksCreate(
  args: InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['managedShortLinks:create'].$post(args, options))
}

export async function postV1ReopenAttribution(
  args: InferRequestType<typeof client.v1.reopenAttribution.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reopenAttribution.$post(args, options))
}

export async function postV1ShortLinks(
  args: InferRequestType<typeof client.v1.shortLinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shortLinks.$post(args, options))
}

export async function getV1DynamicLinkLinkStats(
  args: InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':dynamicLink'].linkStats.$get(args, options))
}

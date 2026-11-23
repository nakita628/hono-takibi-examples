import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAreas(
  args: InferRequestType<typeof client.areas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.areas.$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getJurisdiction(
  args: InferRequestType<typeof client.jurisdiction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jurisdiction.$get(args, options))
}

export async function getJurisdictiongeography(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jurisdictiongeography.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDealItem(
  args: InferRequestType<typeof client.deal_item.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deal_item.$get(args, options))
}

export async function getEvent(
  args: InferRequestType<typeof client.event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event.$get(args, options))
}

export async function getEventEventId(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event[':event_id'].$get(args, options))
}

export async function getEventItem(
  args: InferRequestType<typeof client.event_item.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_item.$get(args, options))
}

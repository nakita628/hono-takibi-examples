import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWaybackV1Available(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wayback.v1.available.$get(args, options))
}

export async function postWaybackV1Available(
  args: InferRequestType<typeof client.wayback.v1.available.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wayback.v1.available.$post(args, options))
}

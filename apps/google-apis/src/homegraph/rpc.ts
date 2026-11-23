import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1DevicesQuery(
  args: InferRequestType<(typeof client.v1)['devices:query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['devices:query'].$post(args, options))
}

export async function postV1DevicesReportStateAndNotification(
  args: InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['devices:reportStateAndNotification'].$post(args, options))
}

export async function postV1DevicesRequestSync(
  args: InferRequestType<(typeof client.v1)['devices:requestSync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['devices:requestSync'].$post(args, options))
}

export async function postV1DevicesSync(
  args: InferRequestType<(typeof client.v1)['devices:sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['devices:sync'].$post(args, options))
}

export async function deleteV1AgentUserId(
  args: InferRequestType<(typeof client.v1)[':agentUserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':agentUserId'].$delete(args, options))
}

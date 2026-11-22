import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSegments(options?: ClientRequestOptions) {
  return await parseResponse(client.segments.$get(undefined, options))
}

export async function getSessions(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$get(args, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function patchSessions(
  args: InferRequestType<typeof client.sessions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$patch(args, options))
}

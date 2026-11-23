import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postNetConnect(
  args: InferRequestType<typeof client.net.connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.net.connect.$post(args, options))
}

export async function postNetConnections(
  args: InferRequestType<typeof client.net.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.net.connections.$post(args, options))
}

export async function postNetDisconnect(
  args: InferRequestType<typeof client.net.disconnect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.net.disconnect.$post(args, options))
}

export async function postNetStatus(
  args: InferRequestType<typeof client.net.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.net.status.$post(args, options))
}

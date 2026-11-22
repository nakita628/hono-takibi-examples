import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConnections(
  args: InferRequestType<typeof client.Connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Connections.$get(args, options))
}

export async function deleteConnectionsId(
  args: InferRequestType<(typeof client.Connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Connections[':id'].$delete(args, options))
}

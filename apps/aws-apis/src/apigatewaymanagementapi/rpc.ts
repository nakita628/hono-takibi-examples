import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['@connections'][':connectionId'].$get(args, options))
}

export async function postConnectionsConnectionId(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['@connections'][':connectionId'].$post(args, options))
}

export async function deleteConnectionsConnectionId(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['@connections'][':connectionId'].$delete(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHooks(options?: ClientRequestOptions) {
  return await parseResponse(client.hooks.$post(undefined, options))
}

export async function deleteHooksId(
  args: InferRequestType<(typeof client.hooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hooks[':id'].$delete(args, options))
}

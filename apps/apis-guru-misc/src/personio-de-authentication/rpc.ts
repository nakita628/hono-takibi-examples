import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuth(
  args: InferRequestType<typeof client.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.$post(args, options))
}

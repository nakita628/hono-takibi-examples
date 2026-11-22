import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postStatus(
  args: InferRequestType<typeof client.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.$post(args, options))
}

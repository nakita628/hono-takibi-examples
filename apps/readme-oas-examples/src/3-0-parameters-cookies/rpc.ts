import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPost(
  args: InferRequestType<typeof client.post.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.$post(args, options))
}

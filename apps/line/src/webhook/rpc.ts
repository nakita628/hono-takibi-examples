import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCallback(
  args: InferRequestType<typeof client.callback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.callback.$post(args, options))
}

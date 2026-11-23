import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRequest(
  args: InferRequestType<typeof client.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request.$post(args, options))
}

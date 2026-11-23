import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFind(
  args: InferRequestType<typeof client.find.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.find.$post(args, options))
}

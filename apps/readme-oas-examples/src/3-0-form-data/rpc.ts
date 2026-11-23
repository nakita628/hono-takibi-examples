import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnything(
  args: InferRequestType<typeof client.anything.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.$post(args, options))
}

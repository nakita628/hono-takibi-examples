import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTransaction(
  args: InferRequestType<typeof client.transaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction.$post(args, options))
}

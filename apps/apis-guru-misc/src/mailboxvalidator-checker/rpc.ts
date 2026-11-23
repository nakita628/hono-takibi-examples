import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EmailFree(
  args: InferRequestType<typeof client.v1.email.free.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.free.$get(args, options))
}

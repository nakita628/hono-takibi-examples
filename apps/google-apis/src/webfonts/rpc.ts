import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Webfonts(
  args: InferRequestType<typeof client.v1.webfonts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webfonts.$get(args, options))
}

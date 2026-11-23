import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHello(
  args: InferRequestType<typeof client.hello.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hello.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetemailinfo(
  args: InferRequestType<typeof client.getemailinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getemailinfo.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProxy(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy.$get(args, options))
}

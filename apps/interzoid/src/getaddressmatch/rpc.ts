import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetaddressmatch(
  args: InferRequestType<typeof client.getaddressmatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getaddressmatch.$get(args, options))
}

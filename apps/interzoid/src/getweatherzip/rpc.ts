import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetweatherzipcode(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getweatherzipcode.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetglobaltime(
  args: InferRequestType<typeof client.getglobaltime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getglobaltime.$get(args, options))
}

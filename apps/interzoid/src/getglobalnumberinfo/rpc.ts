import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetglobalnumberinfo(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getglobalnumberinfo.$get(args, options))
}

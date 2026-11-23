import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetareacode(
  args: InferRequestType<typeof client.getareacode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getareacode.$get(args, options))
}

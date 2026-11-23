import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConvertcurrency(
  args: InferRequestType<typeof client.convertcurrency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convertcurrency.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetweather(
  args: InferRequestType<typeof client.getweather.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getweather.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetstateabbreviation(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getstateabbreviation.$get(args, options))
}

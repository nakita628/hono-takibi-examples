import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActivities(
  args: InferRequestType<typeof client.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activities.$get(args, options))
}

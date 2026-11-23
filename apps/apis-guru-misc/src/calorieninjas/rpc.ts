import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Nutrition(
  args: InferRequestType<typeof client.v1.nutrition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.nutrition.$get(args, options))
}

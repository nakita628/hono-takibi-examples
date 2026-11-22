import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Agreements(
  args: InferRequestType<typeof client.v1.agreements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agreements.$get(args, options))
}

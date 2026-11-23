import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ValidationSingle(
  args: InferRequestType<typeof client.v1.validation.single.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.validation.single.$get(args, options))
}

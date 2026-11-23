import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Suggest(
  args: InferRequestType<typeof client.api.v1.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.suggest.$get(args, options))
}

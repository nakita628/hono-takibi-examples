import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EntitiesSearch(
  args: InferRequestType<(typeof client.v1)['entities:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['entities:search'].$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AmpUrlsBatchGet(
  args: InferRequestType<(typeof client.v1)['ampUrls:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ampUrls:batchGet'].$post(args, options))
}

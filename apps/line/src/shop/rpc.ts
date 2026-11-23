import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postShopV3Mission(
  args: InferRequestType<typeof client.shop.v3.mission.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shop.v3.mission.$post(args, options))
}

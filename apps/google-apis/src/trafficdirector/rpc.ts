import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2DiscoveryClientStatus(
  args: InferRequestType<(typeof client.v2)['discovery:client_status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['discovery:client_status'].$post(args, options))
}

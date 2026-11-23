import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetFullPricingOutboundType(
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-full-pricing'].outbound[':type'].$get(args, options))
}

export async function getGetPrefixPricingOutboundType(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-prefix-pricing'].outbound[':type'].$get(args, options))
}

export async function getGetPricingOutboundType(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['get-pricing'].outbound[':type'].$get(args, options))
}

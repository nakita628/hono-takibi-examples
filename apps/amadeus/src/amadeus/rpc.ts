import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getShoppingFlightOffers(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shopping['flight-offers'].$get(args, options))
}

export async function postShoppingFlightOffers(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shopping['flight-offers'].$post(args, options))
}

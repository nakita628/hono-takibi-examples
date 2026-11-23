import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteV1AftermarketListings(
  args: InferRequestType<typeof client.v1.aftermarket.listings.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.aftermarket.listings.$delete(args, options))
}

export async function postV1AftermarketListingsExpiry(
  args: InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.aftermarket.listings.expiry.$post(args, options))
}

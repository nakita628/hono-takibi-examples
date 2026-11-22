import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiPricingHubPrices(
  args: InferRequestType<(typeof client.api)['pricing-hub']['prices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['pricing-hub'].prices.$post(args, options))
}

export async function putConfig(
  args: InferRequestType<typeof client.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$put(args, options))
}

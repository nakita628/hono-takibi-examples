import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGet3dsAvailability(
  args: InferRequestType<typeof client.get3dsAvailability.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get3dsAvailability.$post(args, options))
}

export async function postGetCostEstimate(
  args: InferRequestType<typeof client.getCostEstimate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getCostEstimate.$post(args, options))
}

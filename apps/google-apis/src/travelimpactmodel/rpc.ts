import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1FlightsComputeFlightEmissions(
  args: InferRequestType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['flights:computeFlightEmissions'].$post(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTravelTripParser(
  args: InferRequestType<(typeof client.travel)['trip-parser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.travel['trip-parser'].$post(args, options))
}

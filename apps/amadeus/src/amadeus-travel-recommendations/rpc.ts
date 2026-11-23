import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getReferenceDataRecommendedLocations(
  args: InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reference-data']['recommended-locations'].$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLocationAnalyticsCategoryRatedAreas(
  args: InferRequestType<(typeof client.location.analytics)['category-rated-areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.location.analytics['category-rated-areas'].$get(args, options))
}

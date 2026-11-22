import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnalyticsItineraryPriceMetrics(
  args: InferRequestType<(typeof client.analytics)['itinerary-price-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics['itinerary-price-metrics'].$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAmzAmazonLookupBuyRecommendations(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amz['amazon-lookup-buy-recommendations'].$get(args, options))
}

export async function getAmzAmazonLookupProduct(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amz['amazon-lookup-product'].$get(args, options))
}

export async function getAmzAmazonSearchByKeyword(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amz['amazon-search-by-keyword'].$get(args, options))
}

export async function getAmzSortOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.amz['sort-options'].$get(undefined, options))
}

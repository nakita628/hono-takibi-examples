import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCriticsResourceTypeJson(
  args: InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.critics[':resource-type.json'].$get(args, options))
}

export async function getReviewsSearchJson(
  args: InferRequestType<(typeof client.reviews)['search.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews['search.json'].$get(args, options))
}

export async function getReviewsResourceTypeJson(
  args: InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':resource-type.json'].$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getV1CrawlQuery(
  args: InferRequestType<(typeof client.v1.crawl)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.crawl[':query'].$get(args, options))
}

export async function getV1ImagesQuery(
  args: InferRequestType<(typeof client.v1.images)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images[':query'].$get(args, options))
}

export async function getV1NewsQuery(
  args: InferRequestType<(typeof client.v1.news)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.news[':query'].$get(args, options))
}

export async function getV1SearchQuery(
  args: InferRequestType<(typeof client.v1.search)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.search[':query'].$get(args, options))
}

export async function postV1SerpIndex(
  args: InferRequestType<typeof client.v1.serp.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.serp.index.$post(args, options))
}

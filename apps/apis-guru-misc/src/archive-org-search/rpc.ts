import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSearchV1Fields(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.v1.fields.$get(args, options))
}

export async function getSearchV1Organic(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.v1.organic.$get(args, options))
}

export async function getSearchV1Scrape(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.v1.scrape.$get(args, options))
}

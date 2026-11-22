import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFacets(
  args: InferRequestType<typeof client.Facets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Facets.$get(args, options))
}

export async function getOpenSearch(
  args: InferRequestType<typeof client.OpenSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.OpenSearch.$get(args, options))
}

export async function getOpenSearchDescription(options?: ClientRequestOptions) {
  return await parseResponse(client.OpenSearchDescription.$get(undefined, options))
}

export async function getSuggest(
  args: InferRequestType<typeof client.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggest.$get(args, options))
}

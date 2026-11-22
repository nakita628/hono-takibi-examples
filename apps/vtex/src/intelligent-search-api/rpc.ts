import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAutocompleteSuggestions(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocomplete_suggestions.$get(args, options))
}

export async function getBannersFacets(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banners[':facets'].$get(args, options))
}

export async function getCorrectionSearch(
  args: InferRequestType<typeof client.correction_search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.correction_search.$get(args, options))
}

export async function getFacetsFacets(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facets[':facets'].$get(args, options))
}

export async function getProductSearchFacets(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.product_search[':facets'].$get(args, options))
}

export async function getSearchSuggestions(
  args: InferRequestType<typeof client.search_suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search_suggestions.$get(args, options))
}

export async function getTopSearches(
  args: InferRequestType<typeof client.top_searches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top_searches.$get(args, options))
}

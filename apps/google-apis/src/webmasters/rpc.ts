import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function getSitesSiteUrl(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].$get(args, options))
}

export async function putSitesSiteUrl(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].$put(args, options))
}

export async function deleteSitesSiteUrl(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].$delete(args, options))
}

export async function postSitesSiteUrlSearchAnalyticsQuery(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['searchAnalytics']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].searchAnalytics.query.$post(args, options))
}

export async function getSitesSiteUrlSitemaps(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].sitemaps.$get(args, options))
}

export async function getSitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, options))
}

export async function putSitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$put(args, options))
}

export async function deleteSitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<(typeof client.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteUrl'].sitemaps[':feedpath'].$delete(args, options))
}

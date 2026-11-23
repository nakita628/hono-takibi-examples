import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1UrlInspectionIndexInspect(
  args: InferRequestType<(typeof client.v1.urlInspection)['index:inspect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.urlInspection['index:inspect'].$post(args, options))
}

export async function postV1UrlTestingToolsMobileFriendlyTestRun(
  args: InferRequestType<(typeof client.v1.urlTestingTools)['mobileFriendlyTest:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.urlTestingTools['mobileFriendlyTest:run'].$post(args, options),
  )
}

export async function getWebmastersV3Sites(
  args: InferRequestType<typeof client.webmasters.v3.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webmasters.v3.sites.$get(args, options))
}

export async function getWebmastersV3SitesSiteUrl(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webmasters.v3.sites[':siteUrl'].$get(args, options))
}

export async function putWebmastersV3SitesSiteUrl(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webmasters.v3.sites[':siteUrl'].$put(args, options))
}

export async function deleteWebmastersV3SitesSiteUrl(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webmasters.v3.sites[':siteUrl'].$delete(args, options))
}

export async function postWebmastersV3SitesSiteUrlSearchAnalyticsQuery(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['searchAnalytics']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webmasters.v3.sites[':siteUrl'].searchAnalytics.query.$post(args, options),
  )
}

export async function getWebmastersV3SitesSiteUrlSitemaps(
  args: InferRequestType<(typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webmasters.v3.sites[':siteUrl'].sitemaps.$get(args, options))
}

export async function getWebmastersV3SitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$get(args, options),
  )
}

export async function putWebmastersV3SitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$put(args, options),
  )
}

export async function deleteWebmastersV3SitesSiteUrlSitemapsFeedpath(
  args: InferRequestType<
    (typeof client.webmasters.v3.sites)[':siteUrl']['sitemaps'][':feedpath']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webmasters.v3.sites[':siteUrl'].sitemaps[':feedpath'].$delete(args, options),
  )
}

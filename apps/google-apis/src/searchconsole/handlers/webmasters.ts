import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebmastersV3SitesSiteUrlRoute,
  deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesRoute,
  getWebmastersV3SitesSiteUrlRoute,
  getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesSiteUrlSitemapsRoute,
  postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute,
  putWebmastersV3SitesSiteUrlRoute,
  putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webmastersHandler = app
  .openapi(getWebmastersV3SitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebmastersV3SitesSiteUrlSitemapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })

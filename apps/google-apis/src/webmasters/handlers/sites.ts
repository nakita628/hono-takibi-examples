import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteUrlRoute,
  deleteSitesSiteUrlSitemapsFeedpathRoute,
  getSitesRoute,
  getSitesSiteUrlRoute,
  getSitesSiteUrlSitemapsFeedpathRoute,
  getSitesSiteUrlSitemapsRoute,
  postSitesSiteUrlSearchAnalyticsQueryRoute,
  putSitesSiteUrlRoute,
  putSitesSiteUrlSitemapsFeedpathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteUrlSearchAnalyticsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteUrlSitemapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteUrlSitemapsFeedpathRoute, (c) => {
    throw new Error('Not implemented')
  })

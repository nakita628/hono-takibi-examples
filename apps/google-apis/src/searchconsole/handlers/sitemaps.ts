import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesSiteUrlSitemapsRoute,
  putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitemapsHandler = app
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteUrlSitemapsFeedpathRoute,
  getSitesSiteUrlSitemapsFeedpathRoute,
  getSitesSiteUrlSitemapsRoute,
  putSitesSiteUrlSitemapsFeedpathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitemapsHandler = app
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

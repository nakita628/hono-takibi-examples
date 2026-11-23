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
} from './routes'
import {
  deleteSitesSiteUrlRouteHandler,
  deleteSitesSiteUrlSitemapsFeedpathRouteHandler,
  getSitesRouteHandler,
  getSitesSiteUrlRouteHandler,
  getSitesSiteUrlSitemapsFeedpathRouteHandler,
  getSitesSiteUrlSitemapsRouteHandler,
  postSitesSiteUrlSearchAnalyticsQueryRouteHandler,
  putSitesSiteUrlRouteHandler,
  putSitesSiteUrlSitemapsFeedpathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(deleteSitesSiteUrlRoute, deleteSitesSiteUrlRouteHandler)
  .openapi(getSitesSiteUrlRoute, getSitesSiteUrlRouteHandler)
  .openapi(putSitesSiteUrlRoute, putSitesSiteUrlRouteHandler)
  .openapi(
    postSitesSiteUrlSearchAnalyticsQueryRoute,
    postSitesSiteUrlSearchAnalyticsQueryRouteHandler,
  )
  .openapi(getSitesSiteUrlSitemapsRoute, getSitesSiteUrlSitemapsRouteHandler)
  .openapi(deleteSitesSiteUrlSitemapsFeedpathRoute, deleteSitesSiteUrlSitemapsFeedpathRouteHandler)
  .openapi(getSitesSiteUrlSitemapsFeedpathRoute, getSitesSiteUrlSitemapsFeedpathRouteHandler)
  .openapi(putSitesSiteUrlSitemapsFeedpathRoute, putSitesSiteUrlSitemapsFeedpathRouteHandler)

export default app

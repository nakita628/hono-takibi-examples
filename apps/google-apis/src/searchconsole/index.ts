import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebmastersV3SitesSiteUrlRoute,
  deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesRoute,
  getWebmastersV3SitesSiteUrlRoute,
  getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
  getWebmastersV3SitesSiteUrlSitemapsRoute,
  postV1UrlInspectionIndexInspectRoute,
  postV1UrlTestingToolsMobileFriendlyTestRunRoute,
  postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute,
  putWebmastersV3SitesSiteUrlRoute,
  putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
} from './routes'
import {
  deleteWebmastersV3SitesSiteUrlRouteHandler,
  deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
  getWebmastersV3SitesRouteHandler,
  getWebmastersV3SitesSiteUrlRouteHandler,
  getWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
  getWebmastersV3SitesSiteUrlSitemapsRouteHandler,
  postV1UrlInspectionIndexInspectRouteHandler,
  postV1UrlTestingToolsMobileFriendlyTestRunRouteHandler,
  postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRouteHandler,
  putWebmastersV3SitesSiteUrlRouteHandler,
  putWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1UrlInspectionIndexInspectRoute, postV1UrlInspectionIndexInspectRouteHandler)
  .openapi(
    postV1UrlTestingToolsMobileFriendlyTestRunRoute,
    postV1UrlTestingToolsMobileFriendlyTestRunRouteHandler,
  )
  .openapi(getWebmastersV3SitesRoute, getWebmastersV3SitesRouteHandler)
  .openapi(deleteWebmastersV3SitesSiteUrlRoute, deleteWebmastersV3SitesSiteUrlRouteHandler)
  .openapi(getWebmastersV3SitesSiteUrlRoute, getWebmastersV3SitesSiteUrlRouteHandler)
  .openapi(putWebmastersV3SitesSiteUrlRoute, putWebmastersV3SitesSiteUrlRouteHandler)
  .openapi(
    postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute,
    postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRouteHandler,
  )
  .openapi(
    getWebmastersV3SitesSiteUrlSitemapsRoute,
    getWebmastersV3SitesSiteUrlSitemapsRouteHandler,
  )
  .openapi(
    deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
    deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
  )
  .openapi(
    getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
    getWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
  )
  .openapi(
    putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute,
    putWebmastersV3SitesSiteUrlSitemapsFeedpathRouteHandler,
  )

export default app

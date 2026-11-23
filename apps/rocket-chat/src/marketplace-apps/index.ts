import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAppsAppIdRoute,
  getApiAppsAppIdRoute,
  getApiAppsCategoriesRoute,
  getApiAppsInstalledRoute,
  getApiAppsLogsRoute,
  getApiAppsMarketplaceRoute,
  getAppIdLogsRoute,
  getAppsBuildExternalAppRequestRoute,
  getAppsCountRoute,
  postApiAppsPublicAppIdIncomingRoute,
  postApiAppsPublicAppIdTemplateMessageRoute,
  postApiAppsRoute,
  postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
} from './routes'
import {
  deleteApiAppsAppIdRouteHandler,
  getApiAppsAppIdRouteHandler,
  getApiAppsCategoriesRouteHandler,
  getApiAppsInstalledRouteHandler,
  getApiAppsLogsRouteHandler,
  getApiAppsMarketplaceRouteHandler,
  getAppIdLogsRouteHandler,
  getAppsBuildExternalAppRequestRouteHandler,
  getAppsCountRouteHandler,
  postApiAppsPublicAppIdIncomingRouteHandler,
  postApiAppsPublicAppIdTemplateMessageRouteHandler,
  postApiAppsRouteHandler,
  postApiV1VideoConferenceJitsiUpdateTimeoutRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiAppsPublicAppIdIncomingRoute, postApiAppsPublicAppIdIncomingRouteHandler)
  .openapi(
    postApiAppsPublicAppIdTemplateMessageRoute,
    postApiAppsPublicAppIdTemplateMessageRouteHandler,
  )
  .openapi(postApiAppsRoute, postApiAppsRouteHandler)
  .openapi(getApiAppsLogsRoute, getApiAppsLogsRouteHandler)
  .openapi(getAppIdLogsRoute, getAppIdLogsRouteHandler)
  .openapi(
    postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
    postApiV1VideoConferenceJitsiUpdateTimeoutRouteHandler,
  )
  .openapi(getApiAppsMarketplaceRoute, getApiAppsMarketplaceRouteHandler)
  .openapi(getApiAppsCategoriesRoute, getApiAppsCategoriesRouteHandler)
  .openapi(getApiAppsInstalledRoute, getApiAppsInstalledRouteHandler)
  .openapi(getAppsCountRoute, getAppsCountRouteHandler)
  .openapi(getAppsBuildExternalAppRequestRoute, getAppsBuildExternalAppRequestRouteHandler)
  .openapi(getApiAppsAppIdRoute, getApiAppsAppIdRouteHandler)
  .openapi(deleteApiAppsAppIdRoute, deleteApiAppsAppIdRouteHandler)

export default app

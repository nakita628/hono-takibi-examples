import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1IntegrationsGetRoute,
  getApiV1IntegrationsHistoryRoute,
  getApiV1IntegrationsListRoute,
  getApiV1OauthAppsGetRoute,
  getApiV1OauthAppsListRoute,
  postApiV1IntegrationsClearHistoryRoute,
  postApiV1IntegrationsCreateRoute,
  postApiV1IntegrationsRemoveRoute,
  postApiV1IntegrationsReplayOutgoingRoute,
  postApiV1OauthAppsCreateRoute,
  postApiV1OauthAppsDeleteRoute,
  postApiV1OauthAppsUpdateRoute,
  putApiV1IntegrationsUpdateRoute,
} from './routes'
import {
  getApiV1IntegrationsGetRouteHandler,
  getApiV1IntegrationsHistoryRouteHandler,
  getApiV1IntegrationsListRouteHandler,
  getApiV1OauthAppsGetRouteHandler,
  getApiV1OauthAppsListRouteHandler,
  postApiV1IntegrationsClearHistoryRouteHandler,
  postApiV1IntegrationsCreateRouteHandler,
  postApiV1IntegrationsRemoveRouteHandler,
  postApiV1IntegrationsReplayOutgoingRouteHandler,
  postApiV1OauthAppsCreateRouteHandler,
  postApiV1OauthAppsDeleteRouteHandler,
  postApiV1OauthAppsUpdateRouteHandler,
  putApiV1IntegrationsUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1IntegrationsCreateRoute, postApiV1IntegrationsCreateRouteHandler)
  .openapi(getApiV1IntegrationsGetRoute, getApiV1IntegrationsGetRouteHandler)
  .openapi(getApiV1IntegrationsHistoryRoute, getApiV1IntegrationsHistoryRouteHandler)
  .openapi(postApiV1IntegrationsClearHistoryRoute, postApiV1IntegrationsClearHistoryRouteHandler)
  .openapi(
    postApiV1IntegrationsReplayOutgoingRoute,
    postApiV1IntegrationsReplayOutgoingRouteHandler,
  )
  .openapi(getApiV1IntegrationsListRoute, getApiV1IntegrationsListRouteHandler)
  .openapi(putApiV1IntegrationsUpdateRoute, putApiV1IntegrationsUpdateRouteHandler)
  .openapi(postApiV1IntegrationsRemoveRoute, postApiV1IntegrationsRemoveRouteHandler)
  .openapi(postApiV1OauthAppsCreateRoute, postApiV1OauthAppsCreateRouteHandler)
  .openapi(postApiV1OauthAppsUpdateRoute, postApiV1OauthAppsUpdateRouteHandler)
  .openapi(getApiV1OauthAppsListRoute, getApiV1OauthAppsListRouteHandler)
  .openapi(getApiV1OauthAppsGetRoute, getApiV1OauthAppsGetRouteHandler)
  .openapi(postApiV1OauthAppsDeleteRoute, postApiV1OauthAppsDeleteRouteHandler)

export default app

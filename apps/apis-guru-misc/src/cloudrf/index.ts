import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArchiveDeleteNetworkRoute,
  getArchiveDeleteRoute,
  getArchiveExportRoute,
  getArchiveListRoute,
  getInterferenceRoute,
  getMeshRoute,
  getNetworkRoute,
  postAreaRoute,
  postClutterAddRoute,
  postPathRoute,
  postPointsRoute,
} from './routes'
import {
  getArchiveDeleteNetworkRouteHandler,
  getArchiveDeleteRouteHandler,
  getArchiveExportRouteHandler,
  getArchiveListRouteHandler,
  getInterferenceRouteHandler,
  getMeshRouteHandler,
  getNetworkRouteHandler,
  postAreaRouteHandler,
  postClutterAddRouteHandler,
  postPathRouteHandler,
  postPointsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getArchiveDeleteRoute, getArchiveDeleteRouteHandler)
  .openapi(getArchiveDeleteNetworkRoute, getArchiveDeleteNetworkRouteHandler)
  .openapi(getArchiveExportRoute, getArchiveExportRouteHandler)
  .openapi(getArchiveListRoute, getArchiveListRouteHandler)
  .openapi(postAreaRoute, postAreaRouteHandler)
  .openapi(postClutterAddRoute, postClutterAddRouteHandler)
  .openapi(getInterferenceRoute, getInterferenceRouteHandler)
  .openapi(getMeshRoute, getMeshRouteHandler)
  .openapi(getNetworkRoute, getNetworkRouteHandler)
  .openapi(postPathRoute, postPathRouteHandler)
  .openapi(postPointsRoute, postPointsRouteHandler)

export default app

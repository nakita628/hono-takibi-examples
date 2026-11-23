import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCleanRoute,
  getCleanScanIdRoute,
  getGetfindingsScanIdRoute,
  getInfoRoute,
  getLivenessRoute,
  getReadinessRoute,
  getReloadconfigRoute,
  getRoute,
  getStatusRoute,
  getStatusScanIdRoute,
  getStopScanIdRoute,
  getStopscansRoute,
  getTestRoute,
  postStartscanRoute,
} from './routes'
import {
  getCleanRouteHandler,
  getCleanScanIdRouteHandler,
  getGetfindingsScanIdRouteHandler,
  getInfoRouteHandler,
  getLivenessRouteHandler,
  getReadinessRouteHandler,
  getReloadconfigRouteHandler,
  getRouteHandler,
  getStatusRouteHandler,
  getStatusScanIdRouteHandler,
  getStopScanIdRouteHandler,
  getStopscansRouteHandler,
  getTestRouteHandler,
  postStartscanRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getCleanRoute, getCleanRouteHandler)
  .openapi(getCleanScanIdRoute, getCleanScanIdRouteHandler)
  .openapi(getGetfindingsScanIdRoute, getGetfindingsScanIdRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getLivenessRoute, getLivenessRouteHandler)
  .openapi(getReadinessRoute, getReadinessRouteHandler)
  .openapi(getReloadconfigRoute, getReloadconfigRouteHandler)
  .openapi(postStartscanRoute, postStartscanRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getStatusScanIdRoute, getStatusScanIdRouteHandler)
  .openapi(getStopScanIdRoute, getStopScanIdRouteHandler)
  .openapi(getStopscansRoute, getStopscansRouteHandler)
  .openapi(getTestRoute, getTestRouteHandler)

export default app

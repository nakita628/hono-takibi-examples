import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentCrawledUrlsRoute,
  getV1betaParentFindingsRoute,
  getV1betaParentFindingTypeStatsRoute,
  getV1betaParentScanConfigsRoute,
  getV1betaParentScanRunsRoute,
  patchV1betaNameRoute,
  postV1betaNameStartRoute,
  postV1betaNameStopRoute,
  postV1betaParentScanConfigsRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentCrawledUrlsRouteHandler,
  getV1betaParentFindingsRouteHandler,
  getV1betaParentFindingTypeStatsRouteHandler,
  getV1betaParentScanConfigsRouteHandler,
  getV1betaParentScanRunsRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaNameStartRouteHandler,
  postV1betaNameStopRouteHandler,
  postV1betaParentScanConfigsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(postV1betaNameStartRoute, postV1betaNameStartRouteHandler)
  .openapi(postV1betaNameStopRoute, postV1betaNameStopRouteHandler)
  .openapi(getV1betaParentCrawledUrlsRoute, getV1betaParentCrawledUrlsRouteHandler)
  .openapi(getV1betaParentFindingTypeStatsRoute, getV1betaParentFindingTypeStatsRouteHandler)
  .openapi(getV1betaParentFindingsRoute, getV1betaParentFindingsRouteHandler)
  .openapi(getV1betaParentScanConfigsRoute, getV1betaParentScanConfigsRouteHandler)
  .openapi(postV1betaParentScanConfigsRoute, postV1betaParentScanConfigsRouteHandler)
  .openapi(getV1betaParentScanRunsRoute, getV1betaParentScanRunsRouteHandler)

export default app

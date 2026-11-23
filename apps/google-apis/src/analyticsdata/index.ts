import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentAudienceExportsRoute,
  postV1betaNameQueryRoute,
  postV1betaParentAudienceExportsRoute,
  postV1betaPropertyBatchRunPivotReportsRoute,
  postV1betaPropertyBatchRunReportsRoute,
  postV1betaPropertyCheckCompatibilityRoute,
  postV1betaPropertyRunPivotReportRoute,
  postV1betaPropertyRunRealtimeReportRoute,
  postV1betaPropertyRunReportRoute,
} from './routes'
import {
  getV1betaNameRouteHandler,
  getV1betaParentAudienceExportsRouteHandler,
  postV1betaNameQueryRouteHandler,
  postV1betaParentAudienceExportsRouteHandler,
  postV1betaPropertyBatchRunPivotReportsRouteHandler,
  postV1betaPropertyBatchRunReportsRouteHandler,
  postV1betaPropertyCheckCompatibilityRouteHandler,
  postV1betaPropertyRunPivotReportRouteHandler,
  postV1betaPropertyRunRealtimeReportRouteHandler,
  postV1betaPropertyRunReportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(postV1betaNameQueryRoute, postV1betaNameQueryRouteHandler)
  .openapi(getV1betaParentAudienceExportsRoute, getV1betaParentAudienceExportsRouteHandler)
  .openapi(postV1betaParentAudienceExportsRoute, postV1betaParentAudienceExportsRouteHandler)
  .openapi(
    postV1betaPropertyBatchRunPivotReportsRoute,
    postV1betaPropertyBatchRunPivotReportsRouteHandler,
  )
  .openapi(postV1betaPropertyBatchRunReportsRoute, postV1betaPropertyBatchRunReportsRouteHandler)
  .openapi(
    postV1betaPropertyCheckCompatibilityRoute,
    postV1betaPropertyCheckCompatibilityRouteHandler,
  )
  .openapi(postV1betaPropertyRunPivotReportRoute, postV1betaPropertyRunPivotReportRouteHandler)
  .openapi(
    postV1betaPropertyRunRealtimeReportRoute,
    postV1betaPropertyRunRealtimeReportRouteHandler,
  )
  .openapi(postV1betaPropertyRunReportRoute, postV1betaPropertyRunReportRouteHandler)

export default app

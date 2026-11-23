import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JobsJobIdRoute,
  getV1JobsJobIdReportsReportIdRoute,
  getV1JobsJobIdReportsRoute,
  getV1JobsJobIdRoute,
  getV1JobsRoute,
  getV1MediaResourceNameRoute,
  getV1ReportTypesRoute,
  postV1JobsRoute,
} from './routes'
import {
  deleteV1JobsJobIdRouteHandler,
  getV1JobsJobIdReportsReportIdRouteHandler,
  getV1JobsJobIdReportsRouteHandler,
  getV1JobsJobIdRouteHandler,
  getV1JobsRouteHandler,
  getV1MediaResourceNameRouteHandler,
  getV1ReportTypesRouteHandler,
  postV1JobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1JobsRoute, getV1JobsRouteHandler)
  .openapi(postV1JobsRoute, postV1JobsRouteHandler)
  .openapi(deleteV1JobsJobIdRoute, deleteV1JobsJobIdRouteHandler)
  .openapi(getV1JobsJobIdRoute, getV1JobsJobIdRouteHandler)
  .openapi(getV1JobsJobIdReportsRoute, getV1JobsJobIdReportsRouteHandler)
  .openapi(getV1JobsJobIdReportsReportIdRoute, getV1JobsJobIdReportsReportIdRouteHandler)
  .openapi(getV1MediaResourceNameRoute, getV1MediaResourceNameRouteHandler)
  .openapi(getV1ReportTypesRoute, getV1ReportTypesRouteHandler)

export default app

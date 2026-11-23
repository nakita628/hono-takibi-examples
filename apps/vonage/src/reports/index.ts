import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ReportsReportIdRoute,
  getV2ReportsRecordsRoute,
  getV2ReportsReportIdRoute,
  getV2ReportsRoute,
  getV3MediaFileIdRoute,
  postV2ReportsRoute,
} from './routes'
import {
  deleteV2ReportsReportIdRouteHandler,
  getV2ReportsRecordsRouteHandler,
  getV2ReportsReportIdRouteHandler,
  getV2ReportsRouteHandler,
  getV3MediaFileIdRouteHandler,
  postV2ReportsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2ReportsRoute, getV2ReportsRouteHandler)
  .openapi(postV2ReportsRoute, postV2ReportsRouteHandler)
  .openapi(getV2ReportsRecordsRoute, getV2ReportsRecordsRouteHandler)
  .openapi(deleteV2ReportsReportIdRoute, deleteV2ReportsReportIdRouteHandler)
  .openapi(getV2ReportsReportIdRoute, getV2ReportsReportIdRouteHandler)
  .openapi(getV3MediaFileIdRoute, getV3MediaFileIdRouteHandler)

export default app

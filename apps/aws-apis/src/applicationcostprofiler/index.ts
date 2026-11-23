import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportDefinitionReportIdRoute,
  getReportDefinitionReportIdRoute,
  getReportDefinitionRoute,
  postImportApplicationUsageRoute,
  postReportDefinitionRoute,
  putReportDefinitionReportIdRoute,
} from './routes'
import {
  deleteReportDefinitionReportIdRouteHandler,
  getReportDefinitionReportIdRouteHandler,
  getReportDefinitionRouteHandler,
  postImportApplicationUsageRouteHandler,
  postReportDefinitionRouteHandler,
  putReportDefinitionReportIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteReportDefinitionReportIdRoute, deleteReportDefinitionReportIdRouteHandler)
  .openapi(getReportDefinitionReportIdRoute, getReportDefinitionReportIdRouteHandler)
  .openapi(putReportDefinitionReportIdRoute, putReportDefinitionReportIdRouteHandler)
  .openapi(postImportApplicationUsageRoute, postImportApplicationUsageRouteHandler)
  .openapi(getReportDefinitionRoute, getReportDefinitionRouteHandler)
  .openapi(postReportDefinitionRoute, postReportDefinitionRouteHandler)

export default app

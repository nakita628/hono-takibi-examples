import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ReportIdRoute,
  deleteV1SloIdRoute,
  getV1ReportIdRoute,
  getV1ReportRoute,
  getV1SloIdRoute,
  getV1SloRoute,
  postV1ReportRoute,
  postV1SloRoute,
  putV1ReportIdRoute,
  putV1SloIdRoute,
} from './routes'
import {
  deleteV1ReportIdRouteHandler,
  deleteV1SloIdRouteHandler,
  getV1ReportIdRouteHandler,
  getV1ReportRouteHandler,
  getV1SloIdRouteHandler,
  getV1SloRouteHandler,
  postV1ReportRouteHandler,
  postV1SloRouteHandler,
  putV1ReportIdRouteHandler,
  putV1SloIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ReportRoute, getV1ReportRouteHandler)
  .openapi(postV1ReportRoute, postV1ReportRouteHandler)
  .openapi(deleteV1ReportIdRoute, deleteV1ReportIdRouteHandler)
  .openapi(getV1ReportIdRoute, getV1ReportIdRouteHandler)
  .openapi(putV1ReportIdRoute, putV1ReportIdRouteHandler)
  .openapi(getV1SloRoute, getV1SloRouteHandler)
  .openapi(postV1SloRoute, postV1SloRouteHandler)
  .openapi(deleteV1SloIdRoute, deleteV1SloIdRouteHandler)
  .openapi(getV1SloIdRoute, getV1SloIdRouteHandler)
  .openapi(putV1SloIdRoute, putV1SloIdRouteHandler)

export default app

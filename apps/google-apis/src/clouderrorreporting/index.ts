import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1ProjectNameEventsRoute,
  getV1beta1GroupNameRoute,
  getV1beta1ProjectNameEventsRoute,
  getV1beta1ProjectNameGroupStatsRoute,
  postV1beta1ProjectNameEventsReportRoute,
  putV1beta1NameRoute,
} from './routes'
import {
  deleteV1beta1ProjectNameEventsRouteHandler,
  getV1beta1GroupNameRouteHandler,
  getV1beta1ProjectNameEventsRouteHandler,
  getV1beta1ProjectNameGroupStatsRouteHandler,
  postV1beta1ProjectNameEventsReportRouteHandler,
  putV1beta1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1GroupNameRoute, getV1beta1GroupNameRouteHandler)
  .openapi(putV1beta1NameRoute, putV1beta1NameRouteHandler)
  .openapi(deleteV1beta1ProjectNameEventsRoute, deleteV1beta1ProjectNameEventsRouteHandler)
  .openapi(getV1beta1ProjectNameEventsRoute, getV1beta1ProjectNameEventsRouteHandler)
  .openapi(postV1beta1ProjectNameEventsReportRoute, postV1beta1ProjectNameEventsReportRouteHandler)
  .openapi(getV1beta1ProjectNameGroupStatsRoute, getV1beta1ProjectNameGroupStatsRouteHandler)

export default app

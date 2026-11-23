import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3DeploymentsIdRoute,
  deleteV3MessagesLogIdIdRoute,
  deleteV3MessagesLogIdRoute,
  getV3DeploymentsIdRoute,
  getV3DeploymentsRoute,
  getV3LogsIdDiagnoseRoute,
  getV3LogsIdRoute,
  getV3LogsRoute,
  getV3MessagesLogIdIdRoute,
  getV3MessagesLogIdRoute,
  getV3UptimechecksRoute,
  postV3DeploymentsRoute,
  postV3HeartbeatsLogIdIdRoute,
  postV3LogsIdDisableRoute,
  postV3LogsIdEnableRoute,
  postV3LogsRoute,
  postV3MessagesLogIdBulkRoute,
  postV3MessagesLogIdFixRoute,
  postV3MessagesLogIdIdFixRoute,
  postV3MessagesLogIdIdHideRoute,
  postV3MessagesLogIdRoute,
  postV3SourcemapsLogIdRoute,
} from './routes'
import {
  deleteV3DeploymentsIdRouteHandler,
  deleteV3MessagesLogIdIdRouteHandler,
  deleteV3MessagesLogIdRouteHandler,
  getV3DeploymentsIdRouteHandler,
  getV3DeploymentsRouteHandler,
  getV3LogsIdDiagnoseRouteHandler,
  getV3LogsIdRouteHandler,
  getV3LogsRouteHandler,
  getV3MessagesLogIdIdRouteHandler,
  getV3MessagesLogIdRouteHandler,
  getV3UptimechecksRouteHandler,
  postV3DeploymentsRouteHandler,
  postV3HeartbeatsLogIdIdRouteHandler,
  postV3LogsIdDisableRouteHandler,
  postV3LogsIdEnableRouteHandler,
  postV3LogsRouteHandler,
  postV3MessagesLogIdBulkRouteHandler,
  postV3MessagesLogIdFixRouteHandler,
  postV3MessagesLogIdIdFixRouteHandler,
  postV3MessagesLogIdIdHideRouteHandler,
  postV3MessagesLogIdRouteHandler,
  postV3SourcemapsLogIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV3DeploymentsRoute, getV3DeploymentsRouteHandler)
  .openapi(postV3DeploymentsRoute, postV3DeploymentsRouteHandler)
  .openapi(deleteV3DeploymentsIdRoute, deleteV3DeploymentsIdRouteHandler)
  .openapi(getV3DeploymentsIdRoute, getV3DeploymentsIdRouteHandler)
  .openapi(postV3HeartbeatsLogIdIdRoute, postV3HeartbeatsLogIdIdRouteHandler)
  .openapi(getV3LogsRoute, getV3LogsRouteHandler)
  .openapi(postV3LogsRoute, postV3LogsRouteHandler)
  .openapi(getV3LogsIdRoute, getV3LogsIdRouteHandler)
  .openapi(getV3LogsIdDiagnoseRoute, getV3LogsIdDiagnoseRouteHandler)
  .openapi(postV3LogsIdDisableRoute, postV3LogsIdDisableRouteHandler)
  .openapi(postV3LogsIdEnableRoute, postV3LogsIdEnableRouteHandler)
  .openapi(deleteV3MessagesLogIdRoute, deleteV3MessagesLogIdRouteHandler)
  .openapi(getV3MessagesLogIdRoute, getV3MessagesLogIdRouteHandler)
  .openapi(postV3MessagesLogIdRoute, postV3MessagesLogIdRouteHandler)
  .openapi(postV3MessagesLogIdBulkRoute, postV3MessagesLogIdBulkRouteHandler)
  .openapi(postV3MessagesLogIdFixRoute, postV3MessagesLogIdFixRouteHandler)
  .openapi(deleteV3MessagesLogIdIdRoute, deleteV3MessagesLogIdIdRouteHandler)
  .openapi(getV3MessagesLogIdIdRoute, getV3MessagesLogIdIdRouteHandler)
  .openapi(postV3MessagesLogIdIdFixRoute, postV3MessagesLogIdIdFixRouteHandler)
  .openapi(postV3MessagesLogIdIdHideRoute, postV3MessagesLogIdIdHideRouteHandler)
  .openapi(postV3SourcemapsLogIdRoute, postV3SourcemapsLogIdRouteHandler)
  .openapi(getV3UptimechecksRoute, getV3UptimechecksRouteHandler)

export default app

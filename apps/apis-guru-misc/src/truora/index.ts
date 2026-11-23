import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigRoute,
  deleteV1HooksHookIdRoute,
  getV1ChecksCheckIdDetailsRoute,
  getV1ChecksCheckIdPdfRoute,
  getV1ChecksCheckIdRoute,
  getV1ChecksHealthRoute,
  getV1ChecksRoute,
  getV1ConfigRoute,
  getV1ContinuousChecksContinuousCheckIdHistoryRoute,
  getV1ContinuousChecksContinuousCheckIdRoute,
  getV1ContinuousChecksRoute,
  getV1HooksRoute,
  getV1ReportsReportIdRoute,
  getV1ReportsRoute,
  postV1BehaviorRoute,
  postV1ChecksCheckIdPdfRoute,
  postV1ChecksRoute,
  postV1ConfigRoute,
  postV1ContinuousChecksRoute,
  postV1HooksRoute,
  postV1ReportsReportIdUploadRoute,
  postV1ReportsRoute,
  putV1ConfigRoute,
  putV1ContinuousChecksContinuousCheckIdRoute,
  putV1HooksHookIdRoute,
} from './routes'
import {
  deleteV1ConfigRouteHandler,
  deleteV1HooksHookIdRouteHandler,
  getV1ChecksCheckIdDetailsRouteHandler,
  getV1ChecksCheckIdPdfRouteHandler,
  getV1ChecksCheckIdRouteHandler,
  getV1ChecksHealthRouteHandler,
  getV1ChecksRouteHandler,
  getV1ConfigRouteHandler,
  getV1ContinuousChecksContinuousCheckIdHistoryRouteHandler,
  getV1ContinuousChecksContinuousCheckIdRouteHandler,
  getV1ContinuousChecksRouteHandler,
  getV1HooksRouteHandler,
  getV1ReportsReportIdRouteHandler,
  getV1ReportsRouteHandler,
  postV1BehaviorRouteHandler,
  postV1ChecksCheckIdPdfRouteHandler,
  postV1ChecksRouteHandler,
  postV1ConfigRouteHandler,
  postV1ContinuousChecksRouteHandler,
  postV1HooksRouteHandler,
  postV1ReportsReportIdUploadRouteHandler,
  postV1ReportsRouteHandler,
  putV1ConfigRouteHandler,
  putV1ContinuousChecksContinuousCheckIdRouteHandler,
  putV1HooksHookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1BehaviorRoute, postV1BehaviorRouteHandler)
  .openapi(getV1ChecksRoute, getV1ChecksRouteHandler)
  .openapi(postV1ChecksRoute, postV1ChecksRouteHandler)
  .openapi(getV1ChecksHealthRoute, getV1ChecksHealthRouteHandler)
  .openapi(getV1ChecksCheckIdRoute, getV1ChecksCheckIdRouteHandler)
  .openapi(getV1ChecksCheckIdDetailsRoute, getV1ChecksCheckIdDetailsRouteHandler)
  .openapi(getV1ChecksCheckIdPdfRoute, getV1ChecksCheckIdPdfRouteHandler)
  .openapi(postV1ChecksCheckIdPdfRoute, postV1ChecksCheckIdPdfRouteHandler)
  .openapi(deleteV1ConfigRoute, deleteV1ConfigRouteHandler)
  .openapi(getV1ConfigRoute, getV1ConfigRouteHandler)
  .openapi(postV1ConfigRoute, postV1ConfigRouteHandler)
  .openapi(putV1ConfigRoute, putV1ConfigRouteHandler)
  .openapi(getV1ContinuousChecksRoute, getV1ContinuousChecksRouteHandler)
  .openapi(postV1ContinuousChecksRoute, postV1ContinuousChecksRouteHandler)
  .openapi(
    getV1ContinuousChecksContinuousCheckIdRoute,
    getV1ContinuousChecksContinuousCheckIdRouteHandler,
  )
  .openapi(
    putV1ContinuousChecksContinuousCheckIdRoute,
    putV1ContinuousChecksContinuousCheckIdRouteHandler,
  )
  .openapi(
    getV1ContinuousChecksContinuousCheckIdHistoryRoute,
    getV1ContinuousChecksContinuousCheckIdHistoryRouteHandler,
  )
  .openapi(getV1HooksRoute, getV1HooksRouteHandler)
  .openapi(postV1HooksRoute, postV1HooksRouteHandler)
  .openapi(deleteV1HooksHookIdRoute, deleteV1HooksHookIdRouteHandler)
  .openapi(putV1HooksHookIdRoute, putV1HooksHookIdRouteHandler)
  .openapi(getV1ReportsRoute, getV1ReportsRouteHandler)
  .openapi(postV1ReportsRoute, postV1ReportsRouteHandler)
  .openapi(getV1ReportsReportIdRoute, getV1ReportsReportIdRouteHandler)
  .openapi(postV1ReportsReportIdUploadRoute, postV1ReportsReportIdUploadRouteHandler)

export default app

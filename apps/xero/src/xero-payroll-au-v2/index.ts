import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
  deleteTimesheetsTimesheetIDRoute,
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDApproveRoute,
  postTimesheetsTimesheetIDLinesRoute,
  postTimesheetsTimesheetIDRevertToDraftRoute,
  putTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
} from './routes'
import {
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  deleteTimesheetsTimesheetIDRouteHandler,
  getTimesheetsRouteHandler,
  getTimesheetsTimesheetIDRouteHandler,
  postTimesheetsRouteHandler,
  postTimesheetsTimesheetIDApproveRouteHandler,
  postTimesheetsTimesheetIDLinesRouteHandler,
  postTimesheetsTimesheetIDRevertToDraftRouteHandler,
  putTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTimesheetsRoute, getTimesheetsRouteHandler)
  .openapi(postTimesheetsRoute, postTimesheetsRouteHandler)
  .openapi(getTimesheetsTimesheetIDRoute, getTimesheetsTimesheetIDRouteHandler)
  .openapi(deleteTimesheetsTimesheetIDRoute, deleteTimesheetsTimesheetIDRouteHandler)
  .openapi(postTimesheetsTimesheetIDLinesRoute, postTimesheetsTimesheetIDLinesRouteHandler)
  .openapi(postTimesheetsTimesheetIDApproveRoute, postTimesheetsTimesheetIDApproveRouteHandler)
  .openapi(
    postTimesheetsTimesheetIDRevertToDraftRoute,
    postTimesheetsTimesheetIDRevertToDraftRouteHandler,
  )
  .openapi(
    putTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
    putTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  )
  .openapi(
    deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
    deleteTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  )

export default app

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
} from '../routes'

const app = new OpenAPIHono()

export const payrollAuV2Handler = app
  .openapi(getTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDRevertToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimesheetsTimesheetIDLinesTimesheetLineIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute, (c) => {
    throw new Error('Not implemented')
  })

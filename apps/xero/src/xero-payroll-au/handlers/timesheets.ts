import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timesheetsHandler = app
  .openapi(getTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })

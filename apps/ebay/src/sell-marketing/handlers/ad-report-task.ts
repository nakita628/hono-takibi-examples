import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdReportTaskReportTaskIdRoute,
  getAdReportTaskReportTaskIdRoute,
  getAdReportTaskRoute,
  postAdReportTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adReportTaskHandler = app
  .openapi(getAdReportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdReportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdReportTaskReportTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdReportTaskReportTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })

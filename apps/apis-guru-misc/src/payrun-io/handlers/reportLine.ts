import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRoute,
  getEmployerEmployerIdReportLineReportLineIdRoute,
  getEmployerEmployerIdReportLinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportLineHandler = app
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportLineReportLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportLinesRoute, (c) => {
    throw new Error('Not implemented')
  })

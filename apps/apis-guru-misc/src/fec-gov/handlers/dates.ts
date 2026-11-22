import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCalendarDatesExportIndexRoute,
  getCalendarDatesIndexRoute,
  getElectionDatesIndexRoute,
  getReportingDatesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datesHandler = app
  .openapi(getCalendarDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarDatesExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

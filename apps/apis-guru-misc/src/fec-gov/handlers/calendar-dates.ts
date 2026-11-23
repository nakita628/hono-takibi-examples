import { OpenAPIHono } from '@hono/zod-openapi'
import { getCalendarDatesExportIndexRoute, getCalendarDatesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarDatesHandler = app
  .openapi(getCalendarDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarDatesExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

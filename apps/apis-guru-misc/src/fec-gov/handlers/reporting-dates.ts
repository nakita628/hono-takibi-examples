import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportingDatesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const reportingDatesHandler = app.openapi(getReportingDatesIndexRoute, (c) => {
  throw new Error('Not implemented')
})

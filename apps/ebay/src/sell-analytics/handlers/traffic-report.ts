import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrafficReportRoute } from '../routes'

const app = new OpenAPIHono()

export const trafficReportHandler = app.openapi(getTrafficReportRoute, (c) => {
  throw new Error('Not implemented')
})

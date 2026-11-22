import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsMdrsRoute } from '../routes'

const app = new OpenAPIHono()

export const mdrDetailReportsHandler = app.openapi(getReportsMdrsRoute, (c) => {
  throw new Error('Not implemented')
})

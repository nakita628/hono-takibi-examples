import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDailyreportsDailyreportsRoute } from '../routes'

const app = new OpenAPIHono()

export const dailyReportsHandler = app.openapi(getApiDailyreportsDailyreportsRoute, (c) => {
  throw new Error('Not implemented')
})

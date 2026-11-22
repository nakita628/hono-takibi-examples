import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserAnalyticsDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const userAnalyticsDeprecatedHandler = app.openapi(getUserAnalyticsDashboardRoute, (c) => {
  throw new Error('Not implemented')
})

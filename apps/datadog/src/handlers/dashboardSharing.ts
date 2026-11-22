import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DashboardDashboardIdSharedRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardSharingHandler = app.openapi(getApiV2DashboardDashboardIdSharedRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DashboardsDashboardIdUsageRoute, getApiV2DashboardsUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getApiV2DashboardsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DashboardsDashboardIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getDashboardChartsRoute, getDashboardCountsRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardHandler = app
  .openapi(getDashboardChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardCountsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsDashboardIdRoute,
  getDashboardsDashboardIdRoute,
  getDashboardsRoute,
  postDashboardsRoute,
  putDashboardsDashboardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })

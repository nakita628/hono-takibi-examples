import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DashboardListsManualDashboardListIdDashboardsRoute,
  getApiV2DashboardListsManualDashboardListIdDashboardsRoute,
  postApiV2DashboardListsManualDashboardListIdDashboardsRoute,
  putApiV2DashboardListsManualDashboardListIdDashboardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardListsHandler = app
  .openapi(deleteApiV2DashboardListsManualDashboardListIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DashboardListsManualDashboardListIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DashboardListsManualDashboardListIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DashboardListsManualDashboardListIdDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })

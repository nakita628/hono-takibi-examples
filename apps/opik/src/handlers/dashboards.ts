import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateDashboardsDashboardIdRoute,
  getV1PrivateDashboardsDashboardIdRoute,
  getV1PrivateDashboardsRoute,
  patchV1PrivateDashboardsDashboardIdRoute,
  postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute,
  postV1PrivateDashboardsDeleteBatchRoute,
  postV1PrivateDashboardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getV1PrivateDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })

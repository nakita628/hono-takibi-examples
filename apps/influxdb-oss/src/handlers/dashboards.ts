import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsDashboardIDLabelsLabelIDRoute,
  deleteDashboardsDashboardIDMembersUserIDRoute,
  deleteDashboardsDashboardIDOwnersUserIDRoute,
  deleteDashboardsDashboardIDRoute,
  getDashboardsDashboardIDLabelsRoute,
  getDashboardsDashboardIDMembersRoute,
  getDashboardsDashboardIDOwnersRoute,
  getDashboardsDashboardIDRoute,
  getDashboardsRoute,
  patchDashboardsDashboardIDRoute,
  postDashboardsDashboardIDLabelsRoute,
  postDashboardsDashboardIDMembersRoute,
  postDashboardsDashboardIDOwnersRoute,
  postDashboardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getDashboardsDashboardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDashboardsDashboardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsDashboardIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsDashboardIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsDashboardIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsDashboardIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsDashboardIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsDashboardIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })

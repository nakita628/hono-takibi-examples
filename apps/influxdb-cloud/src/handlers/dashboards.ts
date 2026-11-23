import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsDashboardIDCellsCellIDRoute,
  deleteDashboardsDashboardIDLabelsLabelIDRoute,
  deleteDashboardsDashboardIDMembersUserIDRoute,
  deleteDashboardsDashboardIDOwnersUserIDRoute,
  deleteDashboardsDashboardIDRoute,
  getDashboardsDashboardIDCellsCellIDViewRoute,
  getDashboardsDashboardIDLabelsRoute,
  getDashboardsDashboardIDMembersRoute,
  getDashboardsDashboardIDOwnersRoute,
  getDashboardsDashboardIDRoute,
  getDashboardsRoute,
  patchDashboardsDashboardIDCellsCellIDRoute,
  patchDashboardsDashboardIDCellsCellIDViewRoute,
  patchDashboardsDashboardIDRoute,
  postDashboardsDashboardIDCellsRoute,
  postDashboardsDashboardIDLabelsRoute,
  postDashboardsDashboardIDMembersRoute,
  postDashboardsDashboardIDOwnersRoute,
  postDashboardsRoute,
  putDashboardsDashboardIDCellsRoute,
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
  .openapi(putDashboardsDashboardIDCellsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsDashboardIDCellsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDashboardsDashboardIDCellsCellIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsDashboardIDCellsCellIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsDashboardIDCellsCellIDViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDashboardsDashboardIDCellsCellIDViewRoute, (c) => {
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

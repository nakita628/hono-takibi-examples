import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsDashboardIDCellsCellIDRoute,
  getDashboardsDashboardIDCellsCellIDViewRoute,
  patchDashboardsDashboardIDCellsCellIDRoute,
  patchDashboardsDashboardIDCellsCellIDViewRoute,
  postDashboardsDashboardIDCellsRoute,
  putDashboardsDashboardIDCellsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cellsHandler = app
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

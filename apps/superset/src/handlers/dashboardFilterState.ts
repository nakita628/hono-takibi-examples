import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DashboardPkFilterStateKeyRoute,
  getApiV1DashboardPkFilterStateKeyRoute,
  postApiV1DashboardPkFilterStateRoute,
  putApiV1DashboardPkFilterStateKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardFilterStateHandler = app
  .openapi(postApiV1DashboardPkFilterStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

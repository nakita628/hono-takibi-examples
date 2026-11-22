import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DashboardsIdRoute,
  getV1DashboardsByExperimentExperimentIdRoute,
  getV1DashboardsIdRoute,
  getV1DashboardsRoute,
  postV1DashboardsRoute,
  postV2DashboardsRoute,
  putV1DashboardsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DashboardsByExperimentExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

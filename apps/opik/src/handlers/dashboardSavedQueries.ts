import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1InternalDashboardSavedQueriesIdRoute,
  postV1InternalDashboardSavedQueriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardSavedQueriesHandler = app
  .openapi(postV1InternalDashboardSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InternalDashboardSavedQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

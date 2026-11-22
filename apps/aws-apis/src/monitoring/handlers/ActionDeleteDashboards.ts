import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDashboardsRoute, postActionDeleteDashboardsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDashboardsHandler = app
  .openapi(getActionDeleteDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })

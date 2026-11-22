import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListDashboardsRoute, postActionListDashboardsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListDashboardsHandler = app
  .openapi(getActionListDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })

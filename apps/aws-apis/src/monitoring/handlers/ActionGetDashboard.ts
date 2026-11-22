import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetDashboardRoute, postActionGetDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetDashboardHandler = app
  .openapi(getActionGetDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })

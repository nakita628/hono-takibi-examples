import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutDashboardRoute, postActionPutDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutDashboardHandler = app
  .openapi(getActionPutDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })

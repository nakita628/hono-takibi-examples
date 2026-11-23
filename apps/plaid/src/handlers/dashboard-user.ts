import { OpenAPIHono } from '@hono/zod-openapi'
import { postDashboardUserGetRoute, postDashboardUserListRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardUserHandler = app
  .openapi(postDashboardUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardUserListRoute, (c) => {
    throw new Error('Not implemented')
  })

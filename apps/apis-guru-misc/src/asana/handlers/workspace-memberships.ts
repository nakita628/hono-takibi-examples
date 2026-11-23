import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspaceMembershipsWorkspaceMembershipGidRoute } from '../routes'

const app = new OpenAPIHono()

export const workspaceMembershipsHandler = app.openapi(
  getWorkspaceMembershipsWorkspaceMembershipGidRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

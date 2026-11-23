import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectMembershipsProjectMembershipGidRoute } from '../routes'

const app = new OpenAPIHono()

export const projectMembershipsHandler = app.openapi(
  getProjectMembershipsProjectMembershipGidRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

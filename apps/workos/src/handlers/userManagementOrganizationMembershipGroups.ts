import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserManagementOrganizationMembershipsOmIdGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementOrganizationMembershipGroupsHandler = app.openapi(
  getUserManagementOrganizationMembershipsOmIdGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

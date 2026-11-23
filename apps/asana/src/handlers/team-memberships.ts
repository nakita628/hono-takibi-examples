import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamMembershipsRoute, getTeamMembershipsTeamMembershipGidRoute } from '../routes'

const app = new OpenAPIHono()

export const teamMembershipsHandler = app
  .openapi(getTeamMembershipsTeamMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })

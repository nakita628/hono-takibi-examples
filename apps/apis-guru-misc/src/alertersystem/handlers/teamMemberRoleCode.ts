import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTeamMemberRoleCodeIdRoute, getApiTeamMemberRoleCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const teamMemberRoleCodeHandler = app
  .openapi(getApiTeamMemberRoleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberRoleCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

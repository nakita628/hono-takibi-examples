import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TeamsTeamIdRoute, postV1TeamsRoute, postV1TeamsTeamIdInvitesRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })

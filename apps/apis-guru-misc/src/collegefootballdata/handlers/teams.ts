import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsFbsRoute, getTeamsMatchupRoute, getTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsFbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsMatchupRoute, (c) => {
    throw new Error('Not implemented')
  })

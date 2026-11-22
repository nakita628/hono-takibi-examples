import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsTeamIdGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsGroupHandler = app.openapi(getTeamsTeamIdGroupRoute, (c) => {
  throw new Error('Not implemented')
})

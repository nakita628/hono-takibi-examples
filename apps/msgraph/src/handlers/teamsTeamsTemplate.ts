import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsTeamIdTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsTeamsTemplateHandler = app.openapi(getTeamsTeamIdTemplateRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsRoute, getTeamsTeamIdMetricsRoute, getTeamsTeamIdRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsTeamIDMetricsMaxRoute, getTeamsTeamIDMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsTeamIDMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIDMetricsMaxRoute, (c) => {
    throw new Error('Not implemented')
  })

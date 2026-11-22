import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsGetAllMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsTeamFunctionsHandler = app.openapi(getTeamsGetAllMessagesRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postTeamsActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app.openapi(postTeamsActivitiesRoute, (c) => {
  throw new Error('Not implemented')
})

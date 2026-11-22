import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamsTemplatesCountRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsTemplatesHandler = app.openapi(getTeamsTemplatesCountRoute, (c) => {
  throw new Error('Not implemented')
})

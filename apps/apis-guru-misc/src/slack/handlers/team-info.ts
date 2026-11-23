import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const teamInfoHandler = app.openapi(getTeamInfoRoute, (c) => {
  throw new Error('Not implemented')
})

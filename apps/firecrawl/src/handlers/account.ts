import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getTeamActivityRoute, (c) => {
  throw new Error('Not implemented')
})

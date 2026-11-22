import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamTeamnameRoute } from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app.openapi(getTeamTeamnameRoute, (c) => {
  throw new Error('Not implemented')
})

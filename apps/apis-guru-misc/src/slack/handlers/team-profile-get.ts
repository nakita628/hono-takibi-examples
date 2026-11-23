import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamProfileGetRoute } from '../routes'

const app = new OpenAPIHono()

export const teamProfileGetHandler = app.openapi(getTeamProfileGetRoute, (c) => {
  throw new Error('Not implemented')
})

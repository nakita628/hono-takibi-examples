import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamProfileGetRoute } from '../routes'

const app = new OpenAPIHono()

export const teamProfileHandler = app.openapi(getTeamProfileGetRoute, (c) => {
  throw new Error('Not implemented')
})

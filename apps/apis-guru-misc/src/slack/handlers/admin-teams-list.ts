import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsListHandler = app.openapi(getAdminTeamsListRoute, (c) => {
  throw new Error('Not implemented')
})

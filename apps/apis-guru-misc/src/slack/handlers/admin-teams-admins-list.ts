import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsAdminsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsAdminsListHandler = app.openapi(getAdminTeamsAdminsListRoute, (c) => {
  throw new Error('Not implemented')
})

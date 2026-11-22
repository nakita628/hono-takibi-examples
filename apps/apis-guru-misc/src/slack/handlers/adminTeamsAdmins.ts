import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsAdminsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsAdminsHandler = app.openapi(getAdminTeamsAdminsListRoute, (c) => {
  throw new Error('Not implemented')
})

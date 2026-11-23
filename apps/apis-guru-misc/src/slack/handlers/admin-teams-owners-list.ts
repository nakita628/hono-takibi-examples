import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsOwnersListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsOwnersListHandler = app.openapi(getAdminTeamsOwnersListRoute, (c) => {
  throw new Error('Not implemented')
})

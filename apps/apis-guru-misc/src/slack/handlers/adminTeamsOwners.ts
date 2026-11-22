import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsOwnersListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsOwnersHandler = app.openapi(getAdminTeamsOwnersListRoute, (c) => {
  throw new Error('Not implemented')
})

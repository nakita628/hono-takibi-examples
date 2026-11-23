import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminUsersListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersListHandler = app.openapi(getAdminUsersListRoute, (c) => {
  throw new Error('Not implemented')
})

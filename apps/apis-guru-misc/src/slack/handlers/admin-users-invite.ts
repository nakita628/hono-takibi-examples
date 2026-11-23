import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersInviteHandler = app.openapi(postAdminUsersInviteRoute, (c) => {
  throw new Error('Not implemented')
})

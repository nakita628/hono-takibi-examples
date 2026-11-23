import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const usersInviteHandler = app.openapi(postUsersInviteRoute, (c) => {
  throw new Error('Not implemented')
})

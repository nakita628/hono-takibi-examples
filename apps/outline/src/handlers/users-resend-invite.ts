import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersResendInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const usersResendInviteHandler = app.openapi(postUsersResendInviteRoute, (c) => {
  throw new Error('Not implemented')
})

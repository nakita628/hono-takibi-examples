import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersUpdateRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const usersUpdateRoleHandler = app.openapi(postUsersUpdateRoleRoute, (c) => {
  throw new Error('Not implemented')
})

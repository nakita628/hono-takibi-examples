import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersListRoute } from '../routes'

const app = new OpenAPIHono()

export const usersListHandler = app.openapi(postUsersListRoute, (c) => {
  throw new Error('Not implemented')
})

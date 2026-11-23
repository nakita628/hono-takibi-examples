import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersActivateRoute } from '../routes'

const app = new OpenAPIHono()

export const usersActivateHandler = app.openapi(postUsersActivateRoute, (c) => {
  throw new Error('Not implemented')
})

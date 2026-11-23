import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSessionInvalidateRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSessionInvalidateHandler = app.openapi(
  postAdminUsersSessionInvalidateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

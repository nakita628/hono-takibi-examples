import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSessionInvalidateRoute, postAdminUsersSessionResetRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSessionHandler = app
  .openapi(postAdminUsersSessionInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersSessionResetRoute, (c) => {
    throw new Error('Not implemented')
  })

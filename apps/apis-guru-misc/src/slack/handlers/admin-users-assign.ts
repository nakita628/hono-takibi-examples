import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersAssignRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersAssignHandler = app.openapi(postAdminUsersAssignRoute, (c) => {
  throw new Error('Not implemented')
})

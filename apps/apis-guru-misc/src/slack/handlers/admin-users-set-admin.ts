import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSetAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSetAdminHandler = app.openapi(postAdminUsersSetAdminRoute, (c) => {
  throw new Error('Not implemented')
})

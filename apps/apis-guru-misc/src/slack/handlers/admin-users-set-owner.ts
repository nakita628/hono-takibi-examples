import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSetOwnerRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSetOwnerHandler = app.openapi(postAdminUsersSetOwnerRoute, (c) => {
  throw new Error('Not implemented')
})

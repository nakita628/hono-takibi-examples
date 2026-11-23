import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSetExpirationRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSetExpirationHandler = app.openapi(postAdminUsersSetExpirationRoute, (c) => {
  throw new Error('Not implemented')
})

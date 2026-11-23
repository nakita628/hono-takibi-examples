import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersRemoveHandler = app.openapi(postAdminUsersRemoveRoute, (c) => {
  throw new Error('Not implemented')
})

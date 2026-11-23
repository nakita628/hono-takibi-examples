import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSetRegularRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSetRegularHandler = app.openapi(postAdminUsersSetRegularRoute, (c) => {
  throw new Error('Not implemented')
})

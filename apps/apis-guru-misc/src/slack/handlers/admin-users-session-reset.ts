import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsersSessionResetRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsersSessionResetHandler = app.openapi(postAdminUsersSessionResetRoute, (c) => {
  throw new Error('Not implemented')
})

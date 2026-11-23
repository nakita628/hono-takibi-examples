import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsergroupsAddTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsergroupsAddTeamsHandler = app.openapi(postAdminUsergroupsAddTeamsRoute, (c) => {
  throw new Error('Not implemented')
})

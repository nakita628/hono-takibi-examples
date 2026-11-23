import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsergroupsUsersUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsUsersUpdateHandler = app.openapi(postUsergroupsUsersUpdateRoute, (c) => {
  throw new Error('Not implemented')
})

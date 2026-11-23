import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsAddUserRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsAddUserHandler = app.openapi(postGroupsAddUserRoute, (c) => {
  throw new Error('Not implemented')
})

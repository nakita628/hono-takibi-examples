import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsRemoveUserRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsRemoveUserHandler = app.openapi(postGroupsRemoveUserRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsDeleteHandler = app.openapi(postGroupsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

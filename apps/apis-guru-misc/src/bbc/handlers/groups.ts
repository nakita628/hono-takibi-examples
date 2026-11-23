import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app.openapi(getGroupsRoute, (c) => {
  throw new Error('Not implemented')
})

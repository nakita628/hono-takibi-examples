import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupsCurrentRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app.openapi(getGroupsCurrentRoute, (c) => {
  throw new Error('Not implemented')
})

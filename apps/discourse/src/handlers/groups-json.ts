import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsJsonHandler = app.openapi(getGroupsJsonRoute, (c) => {
  throw new Error('Not implemented')
})

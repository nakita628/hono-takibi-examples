import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsUpdateHandler = app.openapi(postGroupsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})

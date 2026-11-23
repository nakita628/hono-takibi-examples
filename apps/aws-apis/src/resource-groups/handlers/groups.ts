import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app.openapi(postGroupsRoute, (c) => {
  throw new Error('Not implemented')
})

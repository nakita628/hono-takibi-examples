import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsListRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsListHandler = app.openapi(postGroupsListRoute, (c) => {
  throw new Error('Not implemented')
})

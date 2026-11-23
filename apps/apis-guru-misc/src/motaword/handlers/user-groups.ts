import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const userGroupsHandler = app.openapi(getUserGroupsRoute, (c) => {
  throw new Error('Not implemented')
})

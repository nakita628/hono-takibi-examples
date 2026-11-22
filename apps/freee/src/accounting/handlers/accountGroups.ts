import { OpenAPIHono } from '@hono/zod-openapi'
import { postApi1AccountGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountGroupsHandler = app.openapi(postApi1AccountGroupsRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsCreateHandler = app.openapi(postGroupsCreateRoute, (c) => {
  throw new Error('Not implemented')
})

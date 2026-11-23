import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupMembershipsListRoute } from '../routes'

const app = new OpenAPIHono()

export const groupMembershipsListHandler = app.openapi(postGroupMembershipsListRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserMembershipsListRoute } from '../routes'

const app = new OpenAPIHono()

export const userMembershipsListHandler = app.openapi(postUserMembershipsListRoute, (c) => {
  throw new Error('Not implemented')
})

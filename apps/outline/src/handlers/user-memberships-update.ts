import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserMembershipsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const userMembershipsUpdateHandler = app.openapi(postUserMembershipsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})

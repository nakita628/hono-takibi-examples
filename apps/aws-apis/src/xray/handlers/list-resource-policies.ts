import { OpenAPIHono } from '@hono/zod-openapi'
import { postListResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const listResourcePoliciesHandler = app.openapi(postListResourcePoliciesRoute, (c) => {
  throw new Error('Not implemented')
})

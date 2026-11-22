import { OpenAPIHono } from '@hono/zod-openapi'
import { postListResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListResourcePoliciesHandler = app.openapi(postListResourcePoliciesRoute, (c) => {
  throw new Error('Not implemented')
})

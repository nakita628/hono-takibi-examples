import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetResourcePoliciesResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getResourcePoliciesResourceArnHandler = app.openapi(
  postGetResourcePoliciesResourceArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

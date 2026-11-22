import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetResourcePoliciesHandler = app.openapi(
  postXAmzTargetAmazonSSMGetResourcePoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetResourcePoliciesHandler = app.openapi(
  postXAmzTargetAmazonSSMGetResourcePoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

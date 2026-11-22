import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetResourcePoliciesHandler = app.openapi(
  postXAmzTargetAWSGlueGetResourcePoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

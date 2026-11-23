import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

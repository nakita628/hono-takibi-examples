import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSGlueGetResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
